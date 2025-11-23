# 📚 Instrucciones del Proyecto Web

## 🎯 Descripción del Proyecto
Este es un **Proyecto de Aula** para el curso "Servicios de Tecnología de la Información" desarrollado con HTML, CSS y JavaScript. El proyecto utiliza un sistema de **Cards** que se van completando progresivamente semana a semana.

## 📁 Estructura del Proyecto
```
servicios-tecnologia-informacion/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # Lógica JavaScript
├── INSTRUCCIONES.md    # Este archivo
├── README.md           # Información del curso y progreso
├── Tema1/
│   └── tema1.html      # Página del tema 1
├── Tema2/
│   ├── tema2.html      # Página del tema 2
│   └── cards_semana2.md# Apuntes/recursos adicionales (opcional)
├── Tema3/
├── Tema4/
├── Tema5/
├── Tema6/
├── Tema7/
└── Tema8/              # Carpetas creadas para futuros temas
```

## 🚀 Cómo Usar el Proyecto

### 1. Abrir el Proyecto
- Abre el archivo `index.html` en tu navegador web
- El proyecto funciona completamente en el navegador (no requiere servidor)

### 2. Navegación
- **Pestaña Inicio**: Información general del curso y características
- **Pestaña Temas**: Lista de todos los temas con Cards
- **Pestaña Progreso**: Estadísticas de avance del curso

### 3. Explorar Temas
- Haz clic en cualquier tema para navegar a su página web individual
- Cada tema se presenta como una página web completa e independiente con 4 secciones:
  - **Sección Conceptos**: Resúmenes de temas clave
  - **Sección Ejemplos**: Casos prácticos y aplicaciones
  - **Sección Actividades**: Ejercicios de refuerzo
  - **Sección Recursos**: Enlaces y materiales adicionales
- **Navegación**: Botón "Volver al Proyecto de Aula" en cada página de tema

## 🎨 Características del Proyecto de Aula

### Sistema de Cards
- **Cards Completadas**: Verde con checkmark
- **Cards Pendientes**: Gris
- **Progreso Visual**: Barra de progreso y estadísticas

### Responsive Design
- Funciona en dispositivos móviles, tablets y desktop
- Navegación adaptativa
- El modal fue retirado; ahora cada tema abre en su propia página

### Interactividad
- Navegación por pestañas
- Páginas web individuales para cada tema
- Navegación entre páginas con botones de regreso
- Animaciones suaves

## 📝 Contenido Actual

### Tema 1: La Transformación Digital ✅
- **Conceptos**: I+D+i, SCM, CRM, ERP, Logística inversa
- **Ejemplos**: Amazon, Netflix, Tesla, Spotify, casos colombianos
- **Actividades**: Identificación de oportunidades, análisis de cadena de suministro
- **Recursos**: Videos, artículos, herramientas online

### Tema 2: Caso de Estudio ✅
- **Conceptos**: EVS, ROI, VAN, TIR, Val IT, Análisis de riesgos
- **Ejemplos**: Caso Botanas del Valle, otros casos de análisis
- **Actividades**: Análisis de situación actual, identificación de riesgos
- **Recursos**: Videos, herramientas de cálculo

### Tema 3: El Gobierno y la Gestión de las TIC ✅
- **Conceptos**: Gobierno corporativo, marcos de referencia, normativas ISO
- **Ejemplos**: Casos de certificaciones, marcos aplicados
- **Actividades**: Análisis de marcos, estudio de normativas, diseño de gobierno
- **Recursos**: Videos, artículos, herramientas, normativas

### Temas 4-9: Pendientes
- Estructura lista para completar
- Se irán agregando según avance del curso

## 🔧 Personalización

### Agregar Nuevos Temas
1. Edita el archivo `script.js`
2. Agrega el nuevo tema al array `courseData.topics`
3. Crea el contenido en el objeto `topicContent`
4. Actualiza las estadísticas de progreso

### Modificar Contenido
- **Conceptos**: Edita el array `items` en `topicContent[topicId].concepts`
- **Ejemplos**: Modifica `topicContent[topicId].examples`
- **Actividades**: Actualiza `topicContent[topicId].activities`
- **Recursos**: Cambia `topicContent[topicId].resources`

### Cambiar Estilos
- Edita el archivo `styles.css`
- Modifica colores, fuentes, espaciado
- Ajusta el diseño responsive

## 📱 Compatibilidad
- **Navegadores**: Chrome, Firefox, Safari, Edge
- **Dispositivos**: Desktop, Tablet, Mobile
- **Sistemas**: Windows, macOS, Linux, Android, iOS

## 🎯 Para la Sesión de Esta Noche

### Presentación del Proyecto de Aula
1. **Abre `index.html`** en el navegador
2. **Muestra la pestaña "Inicio"** para explicar el propósito
3. **Navega a "Temas"** para mostrar la estructura
4. **Haz clic en el Tema 1** para navegar a su página web completa
5. **Haz clic en el Tema 2** para navegar a la página del caso de estudio
6. **Explica cómo se irán completando** los temas restantes

### Ventajas del Proyecto de Aula
- **Progresivo**: Se completa semana a semana
- **Visual**: Fácil de seguir y entender
- **Interactivo**: Páginas web completas y navegación fluida
- **Completo**: Cubre todos los aspectos necesarios
- **Responsive**: Funciona en cualquier dispositivo

## 🔄 Mantenimiento

### Actualizar Progreso
- Cambia `status` de "pending" a "completed" en `courseData.topics`
- Marca `completed: true` en las Cards correspondientes
- Las estadísticas se actualizan automáticamente

### Agregar Contenido
- Sigue la estructura existente en `topicContent`
- Mantén consistencia en el formato
- Prueba la funcionalidad después de cambios

---

**¡El Proyecto de Aula está listo para usar en tu clase de esta noche!** 🎉
