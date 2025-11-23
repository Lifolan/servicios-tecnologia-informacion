// Calculadora de SLA y Métricas

// Configuración de SLA por tipo de usuario
const SLA_CONFIG = {
    'estudiante': {
        normal: { resolucion: 24, primeraRespuesta: 4 },
        critico: { resolucion: 1, primeraRespuesta: 0.25 }
    },
    'profesor': {
        normal: { resolucion: 4, primeraRespuesta: 1 },
        critico: { resolucion: 1, primeraRespuesta: 0.25 }
    },
    'profesor-critico': {
        normal: { resolucion: 1, primeraRespuesta: 0.25 },
        critico: { resolucion: 1, primeraRespuesta: 0.25 }
    },
    'administrativo': {
        normal: { resolucion: 2, primeraRespuesta: 0.5 },
        critico: { resolucion: 1, primeraRespuesta: 0.25 }
    },
    'critico': {
        normal: { resolucion: 1, primeraRespuesta: 0.25 },
        critico: { resolucion: 1, primeraRespuesta: 0.25 }
    }
};

// Prioridades
const PRIORIDADES = {
    'critica': { nombre: 'Crítica', color: 'danger', sla: null },
    'alta': { nombre: 'Alta', color: 'warning', sla: null },
    'media': { nombre: 'Media', color: 'info', sla: null },
    'baja': { nombre: 'Baja', color: 'secondary', sla: null }
};

// Calcular SLA
function calcularSLA() {
    const tipoUsuario = document.getElementById('tipoUsuario').value;
    const prioridad = document.getElementById('prioridad').value;
    
    const config = SLA_CONFIG[tipoUsuario];
    if (!config) {
        mostrarResultadoSLA('Error: Configuración no encontrada', 'danger');
        return;
    }

    // Determinar si es crítico
    const esCritico = prioridad === 'critica' || tipoUsuario === 'profesor-critico' || tipoUsuario === 'critico';
    const sla = esCritico ? config.critico : config.normal;

    const resultado = `
        <h4><i class="fas fa-clock"></i> Resultado del Cálculo de SLA</h4>
        <div style="margin-top: 1rem;">
            <p><strong>Tipo de Usuario:</strong> ${getTipoUsuarioNombre(tipoUsuario)}</p>
            <p><strong>Prioridad:</strong> <span class="badge badge-${PRIORIDADES[prioridad].color}">${PRIORIDADES[prioridad].nombre}</span></p>
            <p><strong>Tiempo de Primera Respuesta:</strong> <span class="badge badge-info">${sla.primeraRespuesta} horas (${convertirHorasATexto(sla.primeraRespuesta)})</span></p>
            <p><strong>Tiempo de Resolución (SLA):</strong> <span class="badge badge-success">${sla.resolucion} horas (${convertirHorasATexto(sla.resolucion)})</span></p>
            <p><strong>Estado:</strong> ${esCritico ? '<span class="badge badge-danger">Crítico</span>' : '<span class="badge badge-warning">Normal</span>'}</p>
        </div>
        <div style="margin-top: 1rem; padding: 1rem; background: #e3f2fd; border-radius: 6px;">
            <strong>Recomendaciones:</strong>
            <ul style="margin-top: 0.5rem; padding-left: 1.5rem;">
                <li>Primera respuesta debe ser inmediata para casos críticos</li>
                <li>Establecer alertas automáticas cuando se aproxime el límite de SLA</li>
                <li>Escalamiento automático si no se resuelve en tiempo objetivo</li>
                <li>Notificaciones al usuario sobre estado y tiempos estimados</li>
            </ul>
        </div>
    `;

    mostrarResultadoSLA(resultado, 'success');
}

// Calcular métricas
function calcularMetricas() {
    const tiempoResolucion = parseFloat(document.getElementById('tiempoResolucion').value);
    const tiempoObjetivo = parseFloat(document.getElementById('tiempoObjetivo').value);

    if (!tiempoResolucion || !tiempoObjetivo) {
        mostrarResultadoMetricas('Por favor ingresa ambos valores', 'danger');
        return;
    }

    const cumplimiento = ((tiempoObjetivo - tiempoResolucion) / tiempoObjetivo) * 100;
    const cumplio = tiempoResolucion <= tiempoObjetivo;
    
    const diferencia = Math.abs(tiempoObjetivo - tiempoResolucion);
    const porcentajeDiferencia = (diferencia / tiempoObjetivo) * 100;

    let resultado = `
        <h4><i class="fas fa-chart-line"></i> Resultado de Métricas</h4>
        <div style="margin-top: 1rem;">
            <p><strong>Tiempo de Resolución:</strong> ${tiempoResolucion} horas</p>
            <p><strong>Tiempo Objetivo (SLA):</strong> ${tiempoObjetivo} horas</p>
            <p><strong>Diferencia:</strong> ${diferencia.toFixed(2)} horas</p>
            <p><strong>Porcentaje de Diferencia:</strong> ${porcentajeDiferencia.toFixed(2)}%</p>
            <p><strong>Cumplimiento de SLA:</strong> 
                <span class="badge badge-${cumplio ? 'success' : 'danger'}">
                    ${cumplio ? 'Cumplido' : 'No Cumplido'} (${cumplimiento.toFixed(2)}%)
                </span>
            </p>
        </div>
    `;

    if (cumplio) {
        resultado += `
            <div style="margin-top: 1rem; padding: 1rem; background: #d4edda; border-radius: 6px;">
                <strong><i class="fas fa-check-circle"></i> El SLA se cumplió correctamente</strong>
                <p style="margin-top: 0.5rem;">Se resolvió ${diferencia.toFixed(2)} horas antes del límite establecido.</p>
            </div>
        `;
    } else {
        resultado += `
            <div style="margin-top: 1rem; padding: 1rem; background: #f8d7da; border-radius: 6px;">
                <strong><i class="fas fa-exclamation-triangle"></i> El SLA no se cumplió</strong>
                <p style="margin-top: 0.5rem;">Se excedió el tiempo objetivo en ${diferencia.toFixed(2)} horas (${porcentajeDiferencia.toFixed(2)}% más del permitido).</p>
                <p style="margin-top: 0.5rem;"><strong>Recomendaciones:</strong></p>
                <ul style="margin-top: 0.5rem; padding-left: 1.5rem;">
                    <li>Revisar proceso de asignación y escalamiento</li>
                    <li>Identificar cuellos de botella en el proceso</li>
                    <li>Mejorar capacitación del personal</li>
                    <li>Considerar ajustar recursos asignados</li>
                </ul>
            </div>
        `;
    }

    mostrarResultadoMetricas(resultado, cumplio ? 'success' : 'warning');
}

// Mostrar resultado SLA
function mostrarResultadoSLA(html, tipo) {
    const resultadoBox = document.getElementById('resultadoSLA');
    resultadoBox.innerHTML = html;
    resultadoBox.className = `resultado-box alert-${tipo}`;
}

// Mostrar resultado métricas
function mostrarResultadoMetricas(html, tipo) {
    const resultadoBox = document.getElementById('resultadoMetricas');
    resultadoBox.innerHTML = html;
    resultadoBox.className = `resultado-box alert-${tipo}`;
}

// Obtener nombre del tipo de usuario
function getTipoUsuarioNombre(tipo) {
    const nombres = {
        'estudiante': 'Estudiante',
        'profesor': 'Profesor',
        'profesor-critico': 'Profesor (Clase Activa - Crítico)',
        'administrativo': 'Personal Administrativo',
        'critico': 'Crítico (Sistema Caído)'
    };
    return nombres[tipo] || tipo;
}

// Convertir horas a texto
function convertirHorasATexto(horas) {
    if (horas < 1) {
        const minutos = horas * 60;
        return `${Math.round(minutos)} minutos`;
    } else if (horas === 1) {
        return '1 hora';
    } else if (horas < 24) {
        return `${horas} horas`;
    } else {
        const dias = Math.floor(horas / 24);
        const horasRestantes = horas % 24;
        if (horasRestantes === 0) {
            return `${dias} día${dias > 1 ? 's' : ''}`;
        } else {
            return `${dias} día${dias > 1 ? 's' : ''} y ${horasRestantes} hora${horasRestantes > 1 ? 's' : ''}`;
        }
    }
}

