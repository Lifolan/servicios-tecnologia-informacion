// Procesos ITIL Management

let procesos = [];
let procesoEditando = null;

// Procesos ITIL sugeridos
const PROCESOS_SUGERIDOS = [
    { proceso: 'Service Desk', actividad: 'Punto único de contacto entre usuarios y TI', nivelInicial: '0', nivelObjetivo: '3' },
    { proceso: 'Gestión de Incidencias', actividad: 'Restaurar servicios interrumpidos lo más rápido posible', nivelInicial: '0', nivelObjetivo: '3' },
    { proceso: 'Gestión de Problemas', actividad: 'Identificar y eliminar causas raíz de incidencias recurrentes', nivelInicial: '0', nivelObjetivo: '2' },
    { proceso: 'Gestión de Acceso', actividad: 'Controlar acceso a sistemas según roles y permisos', nivelInicial: '1', nivelObjetivo: '3' },
    { proceso: 'Petición de Servicios', actividad: 'Gestionar solicitudes estándar pre-autorizadas', nivelInicial: '0', nivelObjetivo: '3' },
    { proceso: 'Gestión de Eventos', actividad: 'Monitorear eventos de infraestructura TI', nivelInicial: '1', nivelObjetivo: '3' },
    { proceso: 'Gestión de Configuración', actividad: 'Mantener inventario de activos y relaciones', nivelInicial: '0', nivelObjetivo: '2' },
    { proceso: 'Gestión de Niveles de Servicio', actividad: 'Definir y monitorear SLA según tipo de usuario', nivelInicial: '0', nivelObjetivo: '3' },
    { proceso: 'Gestión del Conocimiento', actividad: 'Base de conocimiento para consultas frecuentes', nivelInicial: '0', nivelObjetivo: '2' },
    { proceso: 'Gestión de Cambios', actividad: 'Controlar cambios en infraestructura educativa', nivelInicial: '1', nivelObjetivo: '2' },
    { proceso: 'Gestión de Disponibilidad', actividad: 'Asegurar disponibilidad de servicios críticos', nivelInicial: '1', nivelObjetivo: '2' },
    { proceso: 'Gestión de Capacidad', actividad: 'Planificar capacidad de recursos educativos', nivelInicial: '1', nivelObjetivo: '2' },
    { proceso: 'Gestión de Continuidad', actividad: 'Planes de contingencia para servicios críticos', nivelInicial: '0', nivelObjetivo: '1' },
    { proceso: 'Gestión Financiera', actividad: 'Costos y presupuesto de servicios TI', nivelInicial: '1', nivelObjetivo: '2' },
    { proceso: 'Informes de Servicios TI', actividad: 'Reportes de desempeño y cumplimiento', nivelInicial: '0', nivelObjetivo: '3' }
];

// Niveles de madurez
const NIVELES_MADUREZ = ['0', '1', '2', '3', '4', '5'];

// Inicializar tabla de procesos
function inicializarTablaProcesos() {
    procesos = cargarProcesos();
    if (procesos.length === 0) {
        // Cargar procesos sugeridos si no hay datos guardados
        procesos = PROCESOS_SUGERIDOS.map((p, index) => ({
            id: index + 1,
            proceso: p.proceso,
            actividad: p.actividad,
            nivelInicial: p.nivelInicial,
            nivelObjetivo: p.nivelObjetivo,
            actividadesEspecificas: ''
        }));
    }
    renderizarTablaProcesos();
}

// Renderizar tabla de procesos
function renderizarTablaProcesos() {
    const tbody = document.getElementById('procesosTableBody');
    tbody.innerHTML = '';

    procesos.forEach((proceso, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${proceso.id || index + 1}</td>
            <td><strong>${proceso.proceso || ''}</strong></td>
            <td>${proceso.actividad || ''}</td>
            <td><span class="badge badge-${getBadgeColor(proceso.nivelInicial)}">${proceso.nivelInicial || '-'}</span></td>
            <td><span class="badge badge-${getBadgeColor(proceso.nivelObjetivo)}">${proceso.nivelObjetivo || '-'}</span></td>
            <td>${proceso.actividadesEspecificas || ''}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editarProceso(${index})" title="Editar">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-sm btn-danger" onclick="eliminarProceso(${index})" title="Eliminar">
                    <i class="fas fa-trash"></i>
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Obtener color de badge según nivel
function getBadgeColor(nivel) {
    const nivelNum = parseInt(nivel) || 0;
    if (nivelNum === 0) return 'danger';
    if (nivelNum <= 2) return 'warning';
    if (nivelNum <= 3) return 'info';
    return 'success';
}

// Agregar nuevo proceso
function agregarProceso() {
    procesoEditando = null;
    abrirModalProceso();
}

// Editar proceso
function editarProceso(index) {
    procesoEditando = index;
    abrirModalProceso(procesos[index]);
}

// Eliminar proceso
function eliminarProceso(index) {
    if (confirm('¿Estás seguro de que deseas eliminar este proceso?')) {
        procesos.splice(index, 1);
        renderizarTablaProcesos();
        actualizarProgreso();
    }
}

// Abrir modal para editar/agregar proceso
function abrirModalProceso(proceso = null) {
    const modal = document.getElementById('editModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = proceso ? 'Editar Proceso' : 'Agregar Proceso';

    modalBody.innerHTML = `
        <div class="form-group">
            <label>Proceso ITIL</label>
            <input type="text" id="modalProceso" class="form-control" 
                   value="${proceso ? proceso.proceso : ''}" 
                   placeholder="Ej: Service Desk">
        </div>
        <div class="form-group">
            <label>Actividad del Proceso</label>
            <textarea id="modalActividad" class="form-control" rows="3" 
                      placeholder="Describe la actividad que realiza este proceso">${proceso ? proceso.actividad : ''}</textarea>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Nivel de Madurez Inicial</label>
                <select id="modalNivelInicial" class="form-control">
                    ${NIVELES_MADUREZ.map(n => 
                        `<option value="${n}" ${proceso && proceso.nivelInicial === n ? 'selected' : ''}>${n}</option>`
                    ).join('')}
                </select>
            </div>
            <div class="form-group">
                <label>Nivel de Madurez Objetivo</label>
                <select id="modalNivelObjetivo" class="form-control">
                    ${NIVELES_MADUREZ.map(n => 
                        `<option value="${n}" ${proceso && proceso.nivelObjetivo === n ? 'selected' : ''}>${n}</option>`
                    ).join('')}
                </select>
            </div>
        </div>
        <div class="form-group">
            <label>Actividades Específicas para la Institución</label>
            <textarea id="modalActividadesEspecificas" class="form-control" rows="4" 
                      placeholder="Describe las actividades específicas adaptadas a tu institución educativa">${proceso ? proceso.actividadesEspecificas : ''}</textarea>
        </div>
        <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
            <button class="btn btn-primary" onclick="guardarProcesoModal()">
                <i class="fas fa-save"></i> Guardar
            </button>
            <button class="btn btn-secondary" onclick="cerrarModal()">
                <i class="fas fa-times"></i> Cancelar
            </button>
        </div>
    `;

    modal.style.display = 'block';
}

// Guardar proceso desde modal
function guardarProcesoModal() {
    const proceso = {
        id: procesoEditando !== null ? procesos[procesoEditando].id : procesos.length + 1,
        proceso: document.getElementById('modalProceso').value.trim(),
        actividad: document.getElementById('modalActividad').value.trim(),
        nivelInicial: document.getElementById('modalNivelInicial').value,
        nivelObjetivo: document.getElementById('modalNivelObjetivo').value,
        actividadesEspecificas: document.getElementById('modalActividadesEspecificas').value.trim()
    };

    if (!proceso.proceso || !proceso.actividad) {
        mostrarAlerta('Por favor completa el proceso y la actividad', 'danger');
        return;
    }

    if (procesoEditando !== null) {
        procesos[procesoEditando] = proceso;
    } else {
        procesos.push(proceso);
    }

    renderizarTablaProcesos();
    cerrarModal();
    actualizarProgreso();
}

// Cargar procesos de ejemplo
function cargarProcesosEjemplo() {
    if (confirm('¿Deseas cargar procesos de ejemplo? Esto reemplazará los procesos actuales.')) {
        procesos = PROCESOS_SUGERIDOS.map((p, index) => ({
            id: index + 1,
            proceso: p.proceso,
            actividad: p.actividad,
            nivelInicial: p.nivelInicial,
            nivelObjetivo: p.nivelObjetivo,
            actividadesEspecificas: generarActividadesEjemplo(p.proceso)
        }));
        renderizarTablaProcesos();
        mostrarAlerta('Procesos de ejemplo cargados correctamente', 'success');
        actualizarProgreso();
    }
}

// Generar actividades específicas de ejemplo
function generarActividadesEjemplo(proceso) {
    const ejemplos = {
        'Service Desk': 'Establecer portal web 24/7, chat en vivo, email unificado. Atender estudiantes, profesores y administrativos con horarios diferenciados.',
        'Gestión de Incidencias': 'Registrar todas las incidencias, clasificar por tipo (LMS, red, hardware), priorizar según impacto, escalar a equipos especializados.',
        'Gestión de Problemas': 'Analizar patrones de incidencias recurrentes, crear problemas vinculados, investigar causas raíz, implementar soluciones permanentes.',
        'Gestión de Acceso': 'Gestionar acceso a LMS, sistemas administrativos según rol. Implementar aprovisionamiento automático basado en matriculación.',
        'Petición de Servicios': 'Procesar solicitudes estándar: nueva cuenta, acceso a aplicación, reset de contraseña. Flujo automatizado para peticiones comunes.'
    };
    return ejemplos[proceso] || 'Actividades específicas adaptadas a la institución educativa.';
}

// Obtener procesos de la tabla
function obtenerProcesosDeTabla() {
    return procesos;
}

// Cerrar modal
function cerrarModal() {
    document.getElementById('editModal').style.display = 'none';
    procesoEditando = null;
}

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
    const modal = document.getElementById('editModal');
    if (event.target === modal) {
        cerrarModal();
    }
}

