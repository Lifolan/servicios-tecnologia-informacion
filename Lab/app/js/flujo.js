// Flujo de Actividades Management

let flujo = [];
let faseEditando = null;

// Flujo de ejemplo sugerido
const FLUJO_EJEMPLO = [
    { fase: 'Recepción', actividad: 'Usuario reporta incidencia vía portal/email/teléfono', proceso: 'Service Desk', responsable: 'Agente Service Desk', tiempoObjetivo: 'Inmediato', criteriosExito: 'Incidencia recibida y registrada en < 5 minutos' },
    { fase: 'Registro', actividad: 'Crear ticket en sistema con información básica', proceso: 'Gestión de Incidencias', responsable: 'Agente Service Desk', tiempoObjetivo: '5 minutos', criteriosExito: 'Ticket creado con: ID único, fecha/hora, usuario, descripción, contacto' },
    { fase: 'Clasificación', actividad: 'Categorizar incidencia (tipo: LMS/Red/Hardware/Software, categoría: Acceso/Error/Fallo)', proceso: 'Gestión de Incidencias', responsable: 'Agente Service Desk', tiempoObjetivo: '2 minutos', criteriosExito: 'Clasificación correcta según matriz predefinida' },
    { fase: 'Priorización', actividad: 'Asignar prioridad según impacto y urgencia (Crítica/Alta/Media/Baja)', proceso: 'Gestión de Incidencias', responsable: 'Agente Service Desk', tiempoObjetivo: '3 minutos', criteriosExito: 'Prioridad asignada según matriz: Crítica (clase activa), Alta (profesor), Media (estudiante), Baja (administrativo)' },
    { fase: 'Asignación', actividad: 'Asignar a equipo especializado según tipo de incidencia', proceso: 'Gestión de Incidencias', responsable: 'Supervisor Service Desk', tiempoObjetivo: '10 minutos', criteriosExito: 'Asignación a equipo correcto: LMS → equipo aplicaciones, Red → equipo infraestructura, Hardware → equipo soporte técnico' },
    { fase: 'Investigación', actividad: 'Equipo técnico investiga causa y busca solución', proceso: 'Gestión de Incidencias / Problemas', responsable: 'Técnico especializado', tiempoObjetivo: 'Variable según prioridad', criteriosExito: 'Identificación de causa en tiempo según SLA (Crítica: 30 min, Alta: 2h, Media: 12h, Baja: 24h)' },
    { fase: 'Resolución', actividad: 'Implementar solución (workaround o permanente)', proceso: 'Gestión de Incidencias', responsable: 'Técnico especializado', tiempoObjetivo: 'Variable según prioridad', criteriosExito: 'Servicio restaurado y funcionando. Resolución según SLA: Crítica (1h), Alta (4h), Media (24h), Baja (48h)' },
    { fase: 'Verificación', actividad: 'Confirmar con usuario que la incidencia está resuelta', proceso: 'Gestión de Incidencias', responsable: 'Agente Service Desk', tiempoObjetivo: '5 minutos', criteriosExito: 'Usuario confirma que el servicio funciona correctamente' },
    { fase: 'Cierre', actividad: 'Cerrar ticket y actualizar base de conocimiento si corresponde', proceso: 'Gestión de Incidencias / Conocimiento', responsable: 'Agente Service Desk', tiempoObjetivo: '5 minutos', criteriosExito: 'Ticket cerrado, solución documentada, KB actualizada si es necesario' },
    { fase: 'Seguimiento', actividad: 'Si es recurrente, crear problema vinculado', proceso: 'Gestión de Problemas', responsable: 'Analista de Problemas', tiempoObjetivo: 'Post-cierre', criteriosExito: 'Análisis de patrones, creación de problema si hay 3+ incidencias similares, investigación de causa raíz' }
];

// Inicializar tabla de flujo
function inicializarTablaFlujo() {
    flujo = cargarFlujo();
    if (flujo.length === 0) {
        // Cargar flujo de ejemplo si no hay datos guardados
        flujo = FLUJO_EJEMPLO.map((f, index) => ({
            id: index + 1,
            ...f
        }));
    }
    renderizarTablaFlujo();
}

// Renderizar tabla de flujo
function renderizarTablaFlujo() {
    const tbody = document.getElementById('flujoTableBody');
    tbody.innerHTML = '';

    flujo.forEach((fase, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><strong>${fase.fase || ''}</strong></td>
            <td>${fase.actividad || ''}</td>
            <td>${fase.proceso || ''}</td>
            <td>${fase.responsable || ''}</td>
            <td>${fase.tiempoObjetivo || ''}</td>
            <td>${fase.criteriosExito || ''}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editarFase(${index})" title="Editar">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="eliminarFase(${index})" title="Eliminar">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Agregar nueva fase
function agregarFase() {
    faseEditando = null;
    abrirModalFase();
}

// Editar fase
function editarFase(index) {
    faseEditando = index;
    abrirModalFase(flujo[index]);
}

// Eliminar fase
function eliminarFase(index) {
    if (confirm('¿Estás seguro de que deseas eliminar esta fase?')) {
        flujo.splice(index, 1);
        renderizarTablaFlujo();
        actualizarProgreso();
    }
}

// Abrir modal para editar/agregar fase
function abrirModalFase(fase = null) {
    const modal = document.getElementById('editModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = fase ? 'Editar Fase' : 'Agregar Fase';

    // Obtener procesos disponibles para el select
    const procesos = obtenerProcesosDeTabla();
    const procesosOptions = procesos.length > 0 
        ? procesos.map(p => `<option value="${p.proceso}" ${fase && fase.proceso === p.proceso ? 'selected' : ''}>${p.proceso}</option>`).join('')
        : '<option value="">No hay procesos disponibles</option>';

    modalBody.innerHTML = `
        <div class="form-group">
            <label>Fase</label>
            <input type="text" id="modalFase" class="form-control" 
                   value="${fase ? fase.fase : ''}" 
                   placeholder="Ej: Recepción">
        </div>
        <div class="form-group">
            <label>Actividad</label>
            <textarea id="modalActividadFlujo" class="form-control" rows="3" 
                      placeholder="Describe la actividad de esta fase">${fase ? fase.actividad : ''}</textarea>
        </div>
        <div class="form-group">
            <label>Proceso ITIL</label>
            <select id="modalProcesoFlujo" class="form-control">
                <option value="">Seleccionar proceso...</option>
                ${procesosOptions}
            </select>
        </div>
        <div class="form-group">
            <label>Responsable</label>
            <input type="text" id="modalResponsable" class="form-control" 
                   value="${fase ? fase.responsable : ''}" 
                   placeholder="Ej: Agente Service Desk">
        </div>
        <div class="form-group">
            <label>Tiempo Objetivo</label>
            <input type="text" id="modalTiempoObjetivo" class="form-control" 
                   value="${fase ? fase.tiempoObjetivo : ''}" 
                   placeholder="Ej: 5 minutos, Inmediato, Variable">
        </div>
        <div class="form-group">
            <label>Criterios de Éxito</label>
            <textarea id="modalCriteriosExito" class="form-control" rows="3" 
                      placeholder="Describe los criterios que indican que esta fase se completó exitosamente">${fase ? fase.criteriosExito : ''}</textarea>
        </div>
        <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
            <button class="btn btn-primary" onclick="guardarFaseModal()">
                <i class="fas fa-save"></i> Guardar
            </button>
            <button class="btn btn-secondary" onclick="cerrarModal()">
                <i class="fas fa-times"></i> Cancelar
            </button>
        </div>
    `;

    modal.style.display = 'block';
}

// Guardar fase desde modal
function guardarFaseModal() {
    const fase = {
        id: faseEditando !== null ? flujo[faseEditando].id : flujo.length + 1,
        fase: document.getElementById('modalFase').value.trim(),
        actividad: document.getElementById('modalActividadFlujo').value.trim(),
        proceso: document.getElementById('modalProcesoFlujo').value.trim(),
        responsable: document.getElementById('modalResponsable').value.trim(),
        tiempoObjetivo: document.getElementById('modalTiempoObjetivo').value.trim(),
        criteriosExito: document.getElementById('modalCriteriosExito').value.trim()
    };

    if (!fase.fase || !fase.actividad) {
        mostrarAlerta('Por favor completa la fase y la actividad', 'danger');
        return;
    }

    if (faseEditando !== null) {
        flujo[faseEditando] = fase;
    } else {
        flujo.push(fase);
    }

    renderizarTablaFlujo();
    cerrarModal();
    actualizarProgreso();
}

// Cargar flujo de ejemplo
function cargarFlujoEjemplo() {
    if (confirm('¿Deseas cargar el flujo de ejemplo? Esto reemplazará el flujo actual.')) {
        flujo = FLUJO_EJEMPLO.map((f, index) => ({
            id: index + 1,
            ...f
        }));
        renderizarTablaFlujo();
        mostrarAlerta('Flujo de ejemplo cargado correctamente', 'success');
        actualizarProgreso();
    }
}

// Obtener flujo de la tabla
function obtenerFlujoDeTabla() {
    return flujo;
}

