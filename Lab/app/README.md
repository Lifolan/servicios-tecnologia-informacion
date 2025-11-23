# Aplicación Web: Gestor de Actividad Práctica ITIL

## Descripción

Aplicación web desarrollada con HTML, CSS y JavaScript para el seguimiento y desarrollo de la actividad práctica "Implementación de Service Desk y Gestión de Incidencias basado en ITIL" en instituciones educativas.

## Características

### 🎯 Funcionalidades Principales

1. **Gestión de Contexto**
   - Configuración de la institución educativa
   - Definición de usuarios, objetivos y situación actual
   - Guardado local del contexto

2. **Gestión de Procesos ITIL**
   - Tabla interactiva para completar procesos ITIL
   - 15 procesos sugeridos pre-configurados
   - Niveles de madurez (0-5)
   - Actividades específicas por proceso
   - Edición y eliminación de procesos

3. **Flujo de Actividades**
   - Constructor de flujo completo (10 fases)
   - Relación con procesos ITIL
   - Definición de responsables y tiempos
   - Criterios de éxito por fase

4. **Calculadora de SLA y Métricas**
   - Cálculo automático de SLA según tipo de usuario
   - Priorización automática
   - Métricas de cumplimiento
   - Matriz de priorización visual

5. **Exportación de Documentos**
   - Generación de documentos en Markdown o texto plano
   - Inclusión selectiva de secciones
   - Formato estructurado y profesional

6. **Seguimiento de Progreso**
   - Barra de progreso visual
   - Estadísticas de completitud
   - Información del proyecto en tiempo real

## Estructura de Archivos

```
Lab/app/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos principales
├── js/
│   ├── app.js         # Aplicación principal
│   ├── storage.js     # Gestión de localStorage
│   ├── procesos.js    # Gestión de procesos ITIL
│   ├── flujo.js       # Gestión de flujo de actividades
│   └── calculadora.js # Calculadora de SLA y métricas
└── README.md          # Este archivo
```

## Uso

### Inicio Rápido

1. Abre el archivo `index.html` en tu navegador web
2. La aplicación funciona completamente en el navegador (no requiere servidor)
3. Todos los datos se guardan localmente en tu navegador

### Pasos de Uso

1. **Configurar Contexto**
   - Completa la información de la institución educativa
   - Define objetivos y situación actual
   - Haz clic en "Guardar Contexto"

2. **Completar Procesos ITIL**
   - Navega a la pestaña "Procesos ITIL"
   - Puedes cargar procesos de ejemplo o agregar los tuyos
   - Completa cada proceso con sus actividades y niveles de madurez
   - Guarda los cambios

3. **Definir Flujo de Actividades**
   - Navega a la pestaña "Flujo de Actividades"
   - Agrega o edita las fases del proceso
   - Relaciona cada fase con un proceso ITIL
   - Define responsables y tiempos objetivo

4. **Calcular SLA**
   - Usa la calculadora para determinar SLA según tipo de usuario
   - Calcula métricas de cumplimiento
   - Consulta la matriz de priorización

5. **Exportar Documento**
   - Selecciona qué secciones incluir
   - Elige el formato (Markdown o texto)
   - Descarga el documento generado

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos modernos y responsive
- **JavaScript (Vanilla)**: Lógica de la aplicación
- **Font Awesome**: Iconografía
- **localStorage**: Persistencia de datos

## Características Técnicas

- ✅ **Sin dependencias externas** (excepto Font Awesome CDN)
- ✅ **Funciona offline** completamente
- ✅ **Responsive design** para móviles y tablets
- ✅ **Persistencia local** con localStorage
- ✅ **Exportación de documentos** en múltiples formatos
- ✅ **Validación de datos** en tiempo real
- ✅ **Interfaz intuitiva** y moderna

## Compatibilidad

- **Navegadores**: Chrome, Firefox, Safari, Edge (versiones recientes)
- **Dispositivos**: Desktop, Tablet, Mobile
- **Sistemas**: Windows, macOS, Linux

## Limitaciones

- Los datos se guardan solo localmente en el navegador
- No hay sincronización entre dispositivos
- Requiere navegador moderno con soporte para localStorage

## Mejoras Futuras

- [ ] Sincronización en la nube
- [ ] Exportación a PDF
- [ ] Plantillas predefinidas
- [ ] Gráficos y visualizaciones
- [ ] Modo oscuro
- [ ] Tutorial interactivo

## Soporte

Para problemas o sugerencias, contacta al docente del curso.

---

**Versión:** 1.0.0  
**Última actualización:** 2025  
**Desarrollado para:** Actividad Práctica - Servicios de Tecnologías de la Información
**Desarrollado por:** Docente Deivis Eduard Ramirez Martinez
