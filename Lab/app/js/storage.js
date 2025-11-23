// Storage Management - Gestión de datos con localStorage

const STORAGE_KEYS = {
    CONTEXTO: 'itil_actividad_contexto',
    PROCESOS: 'itil_actividad_procesos',
    FLUJO: 'itil_actividad_flujo',
    METRICAS: 'itil_actividad_metricas'
};

// Guardar contexto
function guardarContexto() {
    const contexto = {
        nombreInstitucion: document.getElementById('nombreInstitucion').value,
        numEstudiantes: parseInt(document.getElementById('numEstudiantes').value) || 0,
        numProfesores: parseInt(document.getElementById('numProfesores').value) || 0,
        numAdmin: parseInt(document.getElementById('numAdmin').value) || 0,
        situacionActual: document.getElementById('situacionActual').value,
        objetivo: document.getElementById('objetivo').value,
        tiposIncidencias: document.getElementById('tiposIncidencias').value,
        fechaActualizacion: new Date().toISOString()
    };

    localStorage.setItem(STORAGE_KEYS.CONTEXTO, JSON.stringify(contexto));
    mostrarAlerta('Contexto guardado correctamente', 'success');
    actualizarProgreso();
}

// Cargar contexto
function cargarContexto() {
    const contextoStr = localStorage.getItem(STORAGE_KEYS.CONTEXTO);
    if (!contextoStr) return null;

    const contexto = JSON.parse(contextoStr);
    
    document.getElementById('nombreInstitucion').value = contexto.nombreInstitucion || '';
    document.getElementById('numEstudiantes').value = contexto.numEstudiantes || '';
    document.getElementById('numProfesores').value = contexto.numProfesores || '';
    document.getElementById('numAdmin').value = contexto.numAdmin || '';
    document.getElementById('situacionActual').value = contexto.situacionActual || '';
    document.getElementById('objetivo').value = contexto.objetivo || '';
    document.getElementById('tiposIncidencias').value = contexto.tiposIncidencias || '';

    return contexto;
}

// Guardar procesos
function guardarProcesos() {
    const procesos = obtenerProcesosDeTabla();
    localStorage.setItem(STORAGE_KEYS.PROCESOS, JSON.stringify(procesos));
    mostrarAlerta('Procesos guardados correctamente', 'success');
    actualizarProgreso();
}

// Cargar procesos
function cargarProcesos() {
    const procesosStr = localStorage.getItem(STORAGE_KEYS.PROCESOS);
    if (!procesosStr) return [];

    return JSON.parse(procesosStr);
}

// Guardar flujo
function guardarFlujo() {
    const flujo = obtenerFlujoDeTabla();
    localStorage.setItem(STORAGE_KEYS.FLUJO, JSON.stringify(flujo));
    mostrarAlerta('Flujo de actividades guardado correctamente', 'success');
    actualizarProgreso();
}

// Cargar flujo
function cargarFlujo() {
    const flujoStr = localStorage.getItem(STORAGE_KEYS.FLUJO);
    if (!flujoStr) return [];

    return JSON.parse(flujoStr);
}

// Limpiar todos los datos
function limpiarDatos() {
    if (!confirm('¿Estás seguro de que deseas eliminar todos los datos? Esta acción no se puede deshacer.')) {
        return;
    }

    localStorage.removeItem(STORAGE_KEYS.CONTEXTO);
    localStorage.removeItem(STORAGE_KEYS.PROCESOS);
    localStorage.removeItem(STORAGE_KEYS.FLUJO);
    localStorage.removeItem(STORAGE_KEYS.METRICAS);

    // Limpiar formularios
    document.getElementById('nombreInstitucion').value = '';
    document.getElementById('numEstudiantes').value = '';
    document.getElementById('numProfesores').value = '';
    document.getElementById('numAdmin').value = '';
    document.getElementById('situacionActual').value = '';
    document.getElementById('objetivo').value = '';
    document.getElementById('tiposIncidencias').value = '';

    // Limpiar tablas
    document.getElementById('procesosTableBody').innerHTML = '';
    document.getElementById('flujoTableBody').innerHTML = '';

    mostrarAlerta('Todos los datos han sido eliminados', 'info');
    actualizarProgreso();
}

// Obtener progreso total
function obtenerProgreso() {
    let progreso = 0;
    let total = 0;

    // Contexto (20%)
    total += 20;
    const contexto = localStorage.getItem(STORAGE_KEYS.CONTEXTO);
    if (contexto) {
        const ctx = JSON.parse(contexto);
        if (ctx.nombreInstitucion && ctx.objetivo) {
            progreso += 20;
        }
    }

    // Procesos (40%)
    total += 40;
    const procesos = cargarProcesos();
    if (procesos.length > 0) {
        const procesosCompletos = procesos.filter(p => p.proceso && p.actividad && p.nivelInicial && p.nivelObjetivo).length;
        progreso += (procesosCompletos / 15) * 40;
    }

    // Flujo (30%)
    total += 30;
    const flujo = cargarFlujo();
    if (flujo.length > 0) {
        const fasesCompletas = flujo.filter(f => f.fase && f.actividad && f.proceso).length;
        progreso += (fasesCompletas / 10) * 30;
    }

    // Métricas (10%)
    total += 10;
    const metricas = localStorage.getItem(STORAGE_KEYS.METRICAS);
    if (metricas) {
        progreso += 10;
    }

    return Math.round((progreso / total) * 100);
}

// Mostrar alerta
function mostrarAlerta(mensaje, tipo = 'info') {
    const alerta = document.createElement('div');
    alerta.className = `alert alert-${tipo}`;
    alerta.innerHTML = `<i class="fas fa-${tipo === 'success' ? 'check-circle' : tipo === 'danger' ? 'exclamation-circle' : 'info-circle'}"></i> ${mensaje}`;
    
    const mainContent = document.querySelector('.main-content');
    mainContent.insertBefore(alerta, mainContent.firstChild);

    setTimeout(() => {
        alerta.remove();
    }, 3000);
}

// Actualizar información del proyecto
function actualizarInfoProyecto() {
    const contexto = localStorage.getItem(STORAGE_KEYS.CONTEXTO);
    const procesos = cargarProcesos();
    const flujo = cargarFlujo();

    const estado = contexto ? 'En progreso' : 'No iniciado';
    const procesosCompletados = procesos.filter(p => p.proceso && p.actividad).length;
    const fasesFlujo = flujo.filter(f => f.fase && f.actividad).length;
    
    const fechaActualizacion = contexto ? 
        new Date(JSON.parse(contexto).fechaActualizacion).toLocaleString('es-ES') : 
        '-';

    document.getElementById('estadoProyecto').textContent = estado;
    document.getElementById('procesosCompletados').textContent = `${procesosCompletados}/15`;
    document.getElementById('fasesFlujo').textContent = `${fasesFlujo}/10`;
    document.getElementById('ultimaActualizacion').textContent = fechaActualizacion;
}

