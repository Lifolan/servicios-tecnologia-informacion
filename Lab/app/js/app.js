// Main Application - Aplicación Principal

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
    inicializarApp();
});

// Inicializar aplicación
function inicializarApp() {
    // Configurar navegación por tabs
    configurarNavegacion();
    
    // Cargar datos guardados
    cargarDatos();
    
    // Inicializar tablas
    inicializarTablaProcesos();
    inicializarTablaFlujo();
    
    // Actualizar progreso e información
    actualizarProgreso();
    actualizarInfoProyecto();
    
    // Mostrar mensaje de bienvenida
    console.log('Aplicación de Actividad Práctica ITIL iniciada correctamente');
}

// Configurar navegación por tabs
function configurarNavegacion() {
    const tabs = document.querySelectorAll('.nav-tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.dataset.tab;

            // Remover active de todos los tabs y contenidos
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));

            // Agregar active al tab y contenido seleccionado
            this.classList.add('active');
            document.getElementById(tabName).classList.add('active');
        });
    });
}

// Cargar datos guardados
function cargarDatos() {
    // Cargar contexto si existe
    const contexto = cargarContexto();
    
    // Cargar procesos si existen
    const procesosGuardados = cargarProcesos();
    if (procesosGuardados.length > 0) {
        procesos = procesosGuardados;
    }
    
    // Cargar flujo si existe
    const flujoGuardado = cargarFlujo();
    if (flujoGuardado.length > 0) {
        flujo = flujoGuardado;
    }
}

// Actualizar progreso
function actualizarProgreso() {
    const progreso = obtenerProgreso();
    
    document.getElementById('progressFill').style.width = `${progreso}%`;
    document.getElementById('progressText').textContent = `Progreso: ${progreso}%`;
    
    // Actualizar información del proyecto
    actualizarInfoProyecto();
}

// Exportar documento
function exportarDocumento() {
    const formato = document.getElementById('formatoExportacion').value;
    const incluirContexto = document.getElementById('incluirContexto').checked;
    const incluirProcesos = document.getElementById('incluirProcesos').checked;
    const incluirFlujo = document.getElementById('incluirFlujo').checked;
    const incluirMetricas = document.getElementById('incluirMetricas').checked;

    let documento = '';

    // Encabezado
    documento += '# Actividad Práctica: Implementación de Service Desk e ITIL\n\n';
    documento += `**Fecha de generación:** ${new Date().toLocaleString('es-ES')}\n\n`;
    documento += '---\n\n';

    // Contexto
    if (incluirContexto) {
        const contexto = localStorage.getItem(STORAGE_KEYS.CONTEXTO);
        if (contexto) {
            const ctx = JSON.parse(contexto);
            documento += '## Contexto de la Institución\n\n';
            documento += `**Nombre de la Institución:** ${ctx.nombreInstitucion || 'No especificado'}\n\n`;
            documento += `**Número de Estudiantes:** ${ctx.numEstudiantes || 0}\n\n`;
            documento += `**Número de Profesores:** ${ctx.numProfesores || 0}\n\n`;
            documento += `**Personal Administrativo:** ${ctx.numAdmin || 0}\n\n`;
            if (ctx.situacionActual) {
                documento += `**Situación Actual:**\n${ctx.situacionActual}\n\n`;
            }
            if (ctx.objetivo) {
                documento += `**Objetivo:**\n${ctx.objetivo}\n\n`;
            }
            if (ctx.tiposIncidencias) {
                documento += `**Tipos de Incidencias Comunes:**\n${ctx.tiposIncidencias}\n\n`;
            }
            documento += '---\n\n';
        }
    }

    // Procesos ITIL
    if (incluirProcesos) {
        documento += '## Tabla de Procesos ITIL\n\n';
        documento += '| # | Proceso ITIL | Actividad del Proceso | Nivel Inicial | Nivel Objetivo | Actividades Específicas |\n';
        documento += '|---|--------------|----------------------|---------------|----------------|--------------------------|\n';
        
        const procesosData = obtenerProcesosDeTabla();
        if (procesosData.length > 0) {
            procesosData.forEach((p, index) => {
                documento += `| ${p.id || index + 1} | ${p.proceso || ''} | ${p.actividad || ''} | ${p.nivelInicial || '-'} | ${p.nivelObjetivo || '-'} | ${p.actividadesEspecificas || ''} |\n`;
            });
        } else {
            documento += '| - | No hay procesos registrados | - | - | - | - |\n';
        }
        documento += '\n---\n\n';
    }

    // Flujo de Actividades
    if (incluirFlujo) {
        documento += '## Tabla de Flujo de Actividades\n\n';
        documento += '| Fase | Actividad | Proceso ITIL | Responsable | Tiempo Objetivo | Criterios de Éxito |\n';
        documento += '|------|-----------|--------------|-------------|-----------------|---------------------|\n';
        
        const flujoData = obtenerFlujoDeTabla();
        if (flujoData.length > 0) {
            flujoData.forEach(f => {
                documento += `| ${f.fase || ''} | ${f.actividad || ''} | ${f.proceso || ''} | ${f.responsable || ''} | ${f.tiempoObjetivo || ''} | ${f.criteriosExito || ''} |\n`;
            });
        } else {
            documento += '| - | No hay fases registradas | - | - | - | - |\n';
        }
        documento += '\n---\n\n';
    }

    // Métricas y SLA
    if (incluirMetricas) {
        documento += '## Configuración de SLA\n\n';
        documento += '### Matriz de Priorización\n\n';
        documento += '| Impacto | Urgencia | Prioridad | SLA | Ejemplo |\n';
        documento += '|---------|----------|-----------|-----|----------|\n';
        documento += '| Crítico (clase activa) | Alta | Crítica | 1 hora | Profesor no puede acceder a LMS durante clase |\n';
        documento += '| Alto (profesor) | Alta | Alta | 4 horas | Profesor no puede acceder a correo |\n';
        documento += '| Medio (estudiante) | Alta | Media | 24 horas | Estudiante no puede acceder a LMS |\n';
        documento += '| Bajo (administrativo) | Baja | Baja | 48 horas | Problema con impresora |\n\n';
        documento += '---\n\n';
    }

    // Pie de documento
    documento += '\n---\n\n';
    documento += `*Documento generado automáticamente el ${new Date().toLocaleString('es-ES')}*\n`;
    documento += '*Actividad Práctica: Implementación de Service Desk y Gestión de Incidencias basado en ITIL*\n';

    // Descargar archivo
    descargarArchivo(documento, formato === 'markdown' ? 'md' : 'txt', formato === 'markdown' ? 'text/markdown' : 'text/plain');
    
    mostrarAlerta('Documento exportado correctamente', 'success');
}

// Descargar archivo
function descargarArchivo(contenido, extension, mimeType) {
    const contexto = localStorage.getItem(STORAGE_KEYS.CONTEXTO);
    const nombreInstitucion = contexto ? JSON.parse(contexto).nombreInstitucion || 'Proyecto' : 'Proyecto';
    const nombreArchivo = `actividad_practica_itil_${nombreInstitucion.replace(/\s+/g, '_').toLowerCase()}.${extension}`;
    
    const blob = new Blob([contenido], { type: mimeType });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = nombreArchivo;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Estilos para botones pequeños
const style = document.createElement('style');
style.textContent = `
    .btn-sm {
        padding: 0.4rem 0.8rem;
        font-size: 0.85rem;
    }
`;
document.head.appendChild(style);

