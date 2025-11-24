# Solución: Implementación de Service Desk y Gestión de Incidencias en un Centro Médico Deportivo

## Datos del Alumno: ** Libardo Alexander Forero Lancheros CC 79168105 

**Asignatura:** Servicios de Tecnologías de la Información  
**Actividad:** Implementación de Service Desk y Gestión de Incidencias basado en ITIL  
**Centro Médico Seleccionado:** Centro Médico Deportivo Cuerpo Fuerte e Inteligente CFI 
**Fecha:** [23-11-2025]

---

## Índice

1. [Introducción](#introducción)
2. [Contexto de la Institución](#contexto-de-la-centro-médico-deportivo)
3. [Tabla de Procesos ITIL](#tabla-de-procesos-itil)
4. [Tabla de Flujo de Actividades](#tabla-de-flujo-de-actividades)
5. [Explicación Detallada del Enfoque](#explicación-detallada-del-enfoque)
6. [Conclusiones](#conclusiones)
7. [Referencias Bibliográficas](#referencias-bibliográficas)

---

## Introducción

La presente actividad práctica tiene como objetivo diseñar la implementación de un Service Desk y la gestión de incidencias basada en ITIL para el Centro Médico Deportivo Cuerpo Fuerte E Inteligente CFI, una gimnasio con aproximadamente 28.000 afiliados en Colombia, 1000 entrenadores y 280 empleados administrativos.

La implementación se enfoca en establecer procesos estructurados para gestionar las incidencias de TI de manera eficiente, considerando las necesidades particulares de cada tipo de usuario (afiliados o usuarios, entrenadores, personal administrativo) y estableciendo niveles de servicio apropiados.

---

## Contexto del Centro Médico Deportivo CFI
El Centro Médico Deportivo Cuerpo Fuerte e Inteligente CFI es una cadena de gimnasios líder en Colombia, con presencia en las principales ciudades del país. Su modelo de negocio se basa en ofrecer planes de entrenamiento flexibles, servicios de nutrición y fisioterapia y acceso a equipos de alta tecnología a través de varias sedes. La operación del gimnasio CIF depende básicamente de la tecnología para las siguientes funciones críticas: 
**Gestión de Afiliados:** Sistema de control de acceso(tornique con identificación biométrica, número de identificación y sensor de huella), renovación de membresías y gestión de planes de entrenamiento personalizado.
**Infraestructura de Sedes:** Conectividad a Internet para afiliados y entrenadores(Wi-Fi), monitoreo de equipos de ejercicio inteligentes y sistemas de sonido.
**Operaciones Administrativas:** Plataformas de Pago, Sistemas de nómina para entrenadores y personal administrativo y herramientas de comunicación interna.

La complejidad operacional, la alta rotación de afiliados y el uso intensivo de teconlogía en los equipos del gimnasio hacen que una gestión de TI eficiente sea vital para mantener la calidad del servicio.

### Situación Actual
Actualmente, la gestión de la tecnología y los servicios de TI en el gimansio CFI se caracteriza por un enfoque reactivo y descentralizado, lo que ha generado desafíos significativos que impactan la calidad del servicio y la experiencia del afiliado:
- **Múltiples puntos de contacto:** No existe un único punto de contacto(Service Desk). Los afiliados reportan fallos al personal de recepción, los entrenadores contactan directamente a los técnicos por chat y el personal administrativo envía correos electrónicos.
- **Falta de Trazabilidad:**LOs reporte de incidentes(por ejemplo fallo en el lector biométrico del torniquete de acceso, la caída del Wi-Fi) se gestionan verbalmente o por mediso informales, lo que impide medir los tiempos de respuesta, conocer el historial del problema y realizar los escalamientos pertinentes.
- **Impacto en la Operación:** La falta de una gestión estructurada del servicio de TI resulta en demoras en la solución de incidentes críticos(como fallos en el software de reservaciones o en los equipos de cardio) afectando así la satisfacción de los afiliados y la productividad del personal de piso.
- **Desconocimiento de SLAs: No se han establecido acuerdos de Nivel de Servicio(SLA's) claros, lo que crea falsas expectativas entre usuarios(afiliados y entrenadores) y el equipo de TI.

**Centro Médico Deportivo Cuerpo Fuerte e Inteligente CFI**
- **Afiliados:** 28.000
- **Entrenadores:** 1000
- **Personal Administrativo:** 280
- **Total de usuarios de TI:** 29.280

**Problemas identificados:**
- No existe un Service Desk formal
- Las incidencias se reportan por email o WhatsApp de forma dispersa
- No hay seguimiento ni métricas de resolución
- Tiempo promedio de resolución: 3-5 días
- Alta insatisfacción de usuarios 
- Falta de visibilidad sobre el estado de las incidencias
- No hay priorización según impacto

**Tipos de incidencias comunes:**
1. Problemas de acceso a plataforma LMS (Gymvirtual, TrainerPlan, ClassPass entre otras)
2. Incidencias de red en sedes a nivel Colombia
3. Problemas con la aplicación del gimnasio en el celular y/o en la tablet
4. Solicitudes de acceso a sistemas administrativos
5. Problemas con impresoras en la recepción en cada una de las sedes
6. Soporte a equipos de oficina, torniquete de acceso a las sedes y máquinas con IoT
7. Problemas con correo electrónico institucional
8. Acceso a WiFi en las sedes del gimnacio a nivel Colombia

### Objetivo de la Implementación

Implementar un Service Desk virtual con gestión de incidencias basado en ITIL, alcanzando un **nivel de madurez 3 (Definido)** en los primeros 6 meses, con la siguiente evolución:

- **Mes 1-2:** Nivel 1 (Inicial) - Establecimiento básico
- **Mes 3-4:** Nivel 2 (Repetible) - Documentación de procesos
- **Mes 5-6:** Nivel 3 (Definido) - Estandarización completa

---

## Tabla de Procesos ITIL

| # | Procesos de ITIL | Actividad que realiza dicho proceso | Nivel Madurez Inicial | Nivel Madurez Objetivo | Actividades específicas para el centro médico deportivo |
|---|------------------|--------------------------------------|----------------------|------------------------|----------------------------------------------|
| 1 | **Service Desk** | Punto único de contacto entre usuarios y TI | 0 | 3 | Establecer portal web, chat en vivo, email unificado, teléfono. Atender afiliados, entrenadores y administrativos con horarios diferenciados (5am-11pm estudiantes, 24/7 crítico) |
| 2 | **Gestión de Incidencias** | Restaurar servicios interrumpidos lo más rápido posible | 0 | 3 | Registrar todas las incidencias, clasificar por tipo (LMS, red, hardware, software), priorizar según impacto (crítica: clase activa, alta: entrenador, media: afiliado, baja: administrativo), escalar a equipos especializados |
| 3 | **Gestión de Problemas** | Identificar y eliminar causas raíz de incidencias recurrentes | 0 | 2 | Analizar patrones de incidencias (ej: fallos recurrentes de red en las diferentes sedes 3), crear problemas vinculados a múltiples incidencias, investigar causas, implementar soluciones permanentes |
| 4 | **Gestión de Acceso** | Controlar acceso a sistemas según roles y permisos | 1 | 3 | Gestionar acceso a LMS, sistemas administrativos, bases de datos, según rol (afiliado, entrenado, administrativo). Implementar aprovisionamiento automático basado en la afiliación al centro médico deportivo |
| 5 | **Petición de Servicios** | Gestionar solicitudes estándar pre-autorizadas | 0 | 3 | Procesar solicitudes estándar: nueva cuenta de correo, acceso a aplicación, solicitud de equipo, reset de contraseña, acceso WiFi invitado. Flujo automatizado para peticiones comunes |
| 6 | **Gestión de Eventos** | Monitorear eventos de infraestructura TI | 1 | 3 | Monitorear servidores, switches, routers, sistemas de aula. Alertas automáticas para eventos críticos. Integración con sistemas de monitoreo (Nagios, Zabbix) |
| 7 | **Gestión de Configuración** | Mantener inventario de activos y relaciones | 0 | 2 | Crear CMDB con equipos de las diferentes sedes en Colombia, servidores, switches. Registrar relaciones entre componentes. Mapear dependencias (ej: servidor LMS depende de servidor de base de datos) |
| 8 | **Gestión de Niveles de Servicio** | Definir y monitorear SLA según tipo de usuario | 0 | 3 | Establecer SLA diferenciados: Afiliados (24h), Entrenadores (4h), Administrativos (2h), Crítico-clase activa (1h). Monitorear cumplimiento, generar reportes mensuales |
| 9 | **Gestión del Conocimiento** | Base de conocimiento para consultas frecuentes | 0 | 2 | Crear KB con soluciones comunes: "Cómo acceder a LMS", "Reset de contraseña", "Problemas con aplicación en smartphones o tablets", "Acceso WiFi". Portal de autoservicio con artículos y FAQs |
| 10 | **Gestión de Cambios** | Controlar cambios en infraestructura en las diferentes sedes | 1 | 2 | Gestionar cambios en plataformas LMS, actualizaciones de software en cada una de las sedes, cambios de configuración de red. Proceso simplificado para cambios estándar (actualizaciones menores) |
| 11 | **Gestión de Disponibilidad** | Asegurar disponibilidad de servicios críticos | 1 | 2 | Monitorear disponibilidad de LMS (objetivo: 99.5%), servidores de correo (99.9%), red WiFi (98%). Planificar mantenimiento preventivo en horarios no críticos |
| 12 | **Gestión de Capacidad** | Planificar capacidad de recursos de entrenamiento para afiliados | 1 | 2 | Monitorear uso de servidores LMS (picos en horarios de práctica de ejercicios y rutina), capacidad de red (ancho de banda), equipos de pesas y máquinas para hacer ejercicios. Planificar expansión según crecimiento de afiliados o abonados |
| 13 | **Gestión de Continuidad** | Planes de contingencia para servicios críticos | 0 | 1 | Desarrollar plan de continuidad para LMS (backup en cloud), servicios de correo. Identificar servicios críticos (LMS, plataforma de soporte a aplicación del centro médico en smartphones y tablets) y definir tiempos de recuperación |
| 14 | **Gestión Financiera** | Costos y presupuesto de servicios TI | 1 | 2 | Asignar costos de servicios por departamento, calcular costos por usuario, presupuesto para mantenimiento de equipos, licencias de software para entrenamiento de afiliados a través de smartphones y tablets |
| 15 | **Informes de Servicios TI** | Reportes de desempeño y cumplimiento | 0 | 3 | Generar reportes mensuales: volumen de incidencias, tiempos de resolución, cumplimiento de SLA, satisfacción de usuarios, tendencias de incidencias por tipo, métricas de Service Desk |

---

## Tabla de Flujo de Actividades

| Fase | Actividad | Proceso ITIL | Responsable | Tiempo Objetivo | Criterios de Éxito |
|------|-----------|--------------|-------------|-----------------|---------------------|
| **1. Recepción** | Usuario reporta incidencia vía portal/email/teléfono | Service Desk | Agente Service Desk | Inmediato | Incidencia recibida y registrada en < 5 minutos |
| **2. Registro** | Crear ticket en sistema con información básica | Gestión de Incidencias | Agente Service Desk | 5 minutos | Ticket creado con: ID único, fecha/hora, usuario, descripción, contacto |
| **3. Clasificación** | Categorizar incidencia (tipo: LMS/Red/Hardware/Software, categoría: Acceso/Error/Fallo) | Gestión de Incidencias | Agente Service Desk | 2 minutos | Clasificación correcta según matriz predefinida |
| **4. Priorización** | Asignar prioridad según impacto y urgencia (Crítica/Alta/Media/Baja) | Gestión de Incidencias | Agente Service Desk | 3 minutos | Prioridad asignada según matriz: Crítica (clase activa), Alta (profesor), Media (estudiante), Baja (administrativo) |
| **5. Asignación** | Asignar a equipo especializado según tipo de incidencia | Gestión de Incidencias | Supervisor Service Desk | 10 minutos | Asignación a equipo correcto: LMS → equipo aplicaciones, Red → equipo infraestructura, Hardware → equipo soporte técnico |
| **6. Investigación** | Equipo técnico investiga causa y busca solución | Gestión de Incidencias / Problemas | Técnico especializado | Variable según prioridad | Identificación de causa en tiempo según SLA (Crítica: 30 min, Alta: 2h, Media: 12h, Baja: 24h) |
| **7. Resolución** | Implementar solución (workaround o permanente) | Gestión de Incidencias | Técnico especializado | Variable según prioridad | Servicio restaurado y funcionando. Resolución según SLA: Crítica (1h), Alta (4h), Media (24h), Baja (48h) |
| **8. Verificación** | Confirmar con usuario que la incidencia está resuelta | Gestión de Incidencias | Agente Service Desk | 5 minutos | Usuario confirma que el servicio funciona correctamente |
| **9. Cierre** | Cerrar ticket y actualizar base de conocimiento si corresponde | Gestión de Incidencias / Conocimiento | Agente Service Desk | 5 minutos | Ticket cerrado, solución documentada, KB actualizada si es necesario |
| **10. Seguimiento** | Si es recurrente, crear problema vinculado | Gestión de Problemas | Analista de Problemas | Post-cierre | Análisis de patrones, creación de problema si hay 3+ incidencias similares, investigación de causa raíz |

### Matriz de Priorización

| Impacto | Urgencia | Prioridad | SLA | Ejemplo |
|---------|----------|-----------|-----|---------|
| Crítico (clase activa) | Alta | **Crítica** | 1 hora | Entrenador no puede acceder a LMS durante clase o sesión de un afiliado |
| Alto (entrenador) | Alta | **Alta** | 4 horas | Entrenador no puede acceder a correo institucional |
| Medio (afiliado o abonado) | Alta | **Media** | 24 horas | Afiliado o abonado no puede acceder a LMS para realizar una rutina de ejercicios |
| Bajo (administrativo) | Baja | **Baja** | 48 horas | Problema con impresora y torniquete de acceso  con identificación biométrica|

---

## Explicación Detallada del Enfoque

### 1. Selección y Justificación de Procesos

#### 1.1 Procesos Críticos (Nivel 3 - Definido)

**Service Desk (Proceso 1)**
- **Justificación:** Es el fundamento de la gestión de servicios. Sin un punto único de contacto, no hay control ni visibilidad.
- **Actividades específicas:**
  - Portal web accesible 24/7 para registro de incidencias
  - Chat en vivo para soporte inmediato (horario extendido 5am-11pm)
  - Email unificado (servicedesk@centromedicodeportivo.com)
  - Teléfono para emergencias críticas (601) 7282828
  - Diferentes canales según tipo de usuario y urgencia

**Gestión de Incidencias (Proceso 2)**
- **Justificación:** Es el proceso más visible y directamente relacionado con la satisfacción del usuario.
- **Actividades específicas:**
  - Registro obligatorio de todas las incidencias (no emails informales)
  - Clasificación automática según palabras clave (LMS, red, hardware, etc.)
  - Priorización basada en matriz de impacto/urgencia
  - Escalamiento automático si no se resuelve en tiempo objetivo
  - Notificaciones automáticas al usuario sobre estado

**Gestión de Niveles de Servicio (Proceso 8)**
- **Justificación:** Permite establecer expectativas claras y medir desempeño.
- **Actividades específicas:**
  - SLA diferenciados según tipo de usuario (afiliados vs entrenadores)
  - SLA especial para situaciones críticas (sesión de entrenamiento activa)
  - Monitoreo en tiempo real de cumplimiento
  - Alertas cuando se aproxima el límite de SLA
  - Reportes mensuales de cumplimiento

#### 1.2 Procesos de Soporte (Nivel 2-3)

**Petición de Servicios (Proceso 5)**
- **Justificación:** Muchas solicitudes son rutinarias y pueden automatizarse.
- **Actividades específicas:**
  - Catálogo de servicios estándar en portal
  - Solicitudes de acceso automáticas basadas en roles (afiliado → acceso a LMS)
  - Aprobación automática para peticiones de bajo riesgo
  - Flujo diferenciado para peticiones de entrenadores (acceso a recursos especializados)

**Gestión del Conocimiento (Proceso 9)**
- **Justificación:** Reduce carga del Service Desk y empodera a usuarios.
- **Actividades específicas:**
  - Portal de autoservicio con artículos y FAQs
  - KB con soluciones a problemas comunes (reset de contraseña, acceso WiFi)
  - Búsqueda inteligente que sugiere artículos antes de crear ticket
  - Actualización continua basada en incidencias resueltas

**Gestión de Problemas (Proceso 3)**
- **Justificación:** Permite identificar y resolver causas raíz de incidencias recurrentes.
- **Actividades específicas:**
  - Análisis mensual de patrones de incidencias
  - Creación automática de problema si hay 3+ incidencias similares
  - Investigación de causas raíz (ej: ¿por qué falla la red en la sede Chicó y Centro comercial Santafé?)
  - Soluciones permanentes vs workarounds temporales

#### 1.3 Procesos de Infraestructura (Nivel 1-2)

**Gestión de Configuración (Proceso 7)**
- **Justificación:** Necesario para análisis de impacto y gestión de cambios.
- **Actividades específicas:**
  - Inventario inicial de activos (equipos, servidores, switches)
  - CMDB con relaciones (servidor LMS → servidor BD → switch → router)
  - Actualización continua del inventario
  - Mapeo de dependencias para análisis de impacto

**Gestión de Eventos (Proceso 6)**
- **Justificación:** Detecta problemas antes de que los usuarios los reporten.
- **Actividades específicas:**
  - Monitoreo de servidores críticos (LMS, correo, BD)
  - Alertas automáticas para eventos críticos
  - Integración con sistemas de monitoreo existentes
  - Creación automática de incidencias desde eventos críticos

### 2. Niveles de Madurez

#### Nivel Inicial (0-1)
- **Situación actual:** Sin procesos estructurados, comunicación informal
- **Procesos afectados:** Todos los procesos están en nivel 0 o 1

#### Nivel Objetivo (2-3)
- **Procesos críticos (Nivel 3):** Service Desk, Gestión de Incidencias, Gestión de Niveles de Servicio, Informes de Servicios
- **Procesos de soporte (Nivel 2-3):** Petición de Servicios, Gestión del Conocimiento, Gestión de Problemas
- **Procesos de infraestructura (Nivel 1-2):** Gestión de Configuración, Gestión de Eventos, Gestión de Cambios

### 3. Actividades Específicas por Tipo de Usuario

#### Afiliados o abonados
- **Horario de servicio:** 5am-11pm (horario extendido)
- **SLA:** 24 horas (resolución no urgente)
- **Canales preferidos:** Portal web, chat
- **Prioridad:** Media (a menos que afecte clase activa)
- **Tipos de incidencias comunes:** Acceso a LMS, WiFi, correo institucional

#### Entrenadores
- **Horario de servicio:** 5am-11pm + emergencias 24/7
- **SLA:** 4 horas (crítico si es durante turno de servicio)
- **Canales preferidos:** Teléfono, email, portal
- **Prioridad:** Alta (crítica si clase activa)
- **Tipos de incidencias comunes:** Aplicación de smartphones o tablets fallan o usuario requiere de acompañamiento, acceso a LMS, equipos y máquinas de pesas y para hacer ejercicio

#### Personal Administrativo
- **Horario de servicio:** 8am-6pm (horario laboral)
- **SLA:** 2 horas (horario de oficina)
- **Canales preferidos:** Email, teléfono
- **Prioridad:** Media-Baja
- **Tipos de incidencias comunes:** Acceso a sistemas administrativos, impresoras, correo

### 4. Consideración de SLA y Métricas

#### SLA Diferenciados

| Tipo de Usuario | Situación | SLA Resolución | Tiempo de Primera Respuesta |
|-----------------|-----------|----------------|----------------------------|
| **Afiliado** | Normal | 24 horas | 4 horas |
| **Entrenador** | Normal | 4 horas | 1 hora |
| **Entrenador** | Clase activa (crítico) | 1 hora | 15 minutos |
| **Administrativo** | Normal | 2 horas | 30 minutos |
| **Todos** | Crítico (sistema caído) | 1 hora | 15 minutos |

#### Métricas Propuestas

**Métricas de Servicio:**
- Disponibilidad de LMS: 99.5% (objetivo)
- Tiempo promedio de resolución (MTTR): Reducir de 3-5 días a < 24 horas
- Tiempo promedio entre fallos (MTBF): Aumentar en 30%

**Métricas de Proceso:**
- Cumplimiento de SLA: > 90% (objetivo)
- Tasa de resolución en primera línea: 40% (objetivo)
- Tasa de escalación: < 30%
- Volumen de incidencias por tipo: Tracking mensual

**Métricas de Satisfacción:**
- Satisfacción del usuario (NPS): > 7/10 (objetivo)
- Tiempo promedio de primera respuesta: < 2 horas
- Tasa de reapertura: < 5%

### 5. Flujo Detallado de Ejemplo

**Escenario:** Entrenador reporta que no puede acceder a LMS durante turno de servicio activo

1. **Recepción (0-2 min):** Entrenadorr llama al Service Desk (prioridad crítica)
2. **Registro (2-4 min):** Agente crea ticket con ID INC-2024-001, clasifica como "LMS - Acceso"
3. **Clasificación (4-5 min):** Sistema marca como "LMS" y "Crítica" automáticamente
4. **Priorización (5-6 min):** Prioridad "Crítica" asignada (clase activa)
5. **Asignación (6-10 min):** Supervisor asigna a equipo de aplicaciones, notifica por email
6. **Investigación (10-40 min):** Técnico verifica servidor LMS, identifica problema de autenticación
7. **Resolución (40-55 min):** Técnico reinicia servicio de autenticación, verifica acceso
8. **Verificación (55-60 min):** Agente llama al entrenador, confirma que puede acceder
9. **Cierre (60-65 min):** Ticket cerrado, solución documentada en KB
10. **Seguimiento (post-cierre):** Si ocurre 3+ veces, se crea problema para investigación

**Resultado:** Incidencia resuelta en 55 minutos, cumpliendo SLA de 1 hora para críticas

---

## Conclusiones

La implementación de un Service Desk y gestión de incidencias basada en ITIL en el Centro Médico Deportivo Cuerpo Fuerte e Inteligente CFI representa una mejora significativa en la calidad de los servicios de TI prestados a los diferentes afiliados o abonados del gimansio.

### Beneficios Esperados

1. **Mejora en Satisfacción del Usuario**
   - Reducción del tiempo de resolución de 3-5 días a < 24 horas promedio
   - Comunicación clara y transparente sobre el estado de las incidencias
   - Acceso 24/7 para registro de incidencias

2. **Eficiencia Operativa**
   - Reducción de carga mediante portal de autoservicio y base de conocimiento
   - Mejor asignación de recursos mediante priorización adecuada
   - Identificación y resolución de causas raíz de problemas recurrentes

3. **Visibilidad y Control**
   - Métricas y reportes para toma de decisiones informada
   - Cumplimiento de SLA medible y reportable
   - Identificación de tendencias y áreas de mejora

4. **Escalabilidad**
   - Procesos estructurados que pueden crecer con el centro médico deportivo
   - Niveles de madurez que permiten mejora continua
   - Base sólida para implementar otros procesos ITIL

### Recomendaciones

1. **Fase de Implementación Gradual**
   - Mes 1-2: Establecer Service Desk básico y registrar todas las incidencias
   - Mes 3-4: Implementar clasificación y priorización, establecer SLA
   - Mes 5-6: Optimizar procesos, implementar base de conocimiento, métricas avanzadas

2. **Capacitación**
   - Capacitar a personal de Service Desk en procesos ITIL
   - Capacitar a usuarios en uso del portal y autoservicio
   - Capacitar a equipos técnicos en gestión de incidencias

3. **Herramientas**
   - Implementar herramienta de gestión de tickets (ej: ServiceNow, Jira Service Management, Zendesk)
   - Integrar con sistemas existentes (Active Directory, sistemas de monitoreo)
   - Implementar portal de autoservicio con base de conocimiento

4. **Comunicación**
   - Comunicar claramente los nuevos procesos y SLA a toda la comunidad universitaria
   - Establecer canales de feedback para mejora continua
   - Publicar reportes mensuales de desempeño

### Limitaciones y Consideraciones

1. **Cambio Cultural:** Requiere adaptación de usuarios acostumbrados a comunicación informal
2. **Recursos:** Necesita inversión inicial en herramientas y capacitación
3. **Tiempo:** La implementación completa requiere varios meses
4. **Personal:** Necesita personal dedicado para Service Desk y gestión de procesos

### Próximos Pasos

Una vez implementado el Service Desk y gestión de incidencias, se recomienda:

1. Implementar Gestión de Problemas (nivel 3)
2. Expandir Gestión del Conocimiento
3. Implementar Gestión de Cambios completa
4. Desarrollar Service Catalog completo
5. Avanzar hacia nivel de madurez 4 (Gestionado) con métricas avanzadas

---

## Referencias Bibliográficas

**Parchment, M.** (2018). IT Service Management Best Practices: A Guide to Service Design, Service Transition, and Service Operation. Apress

**Verma, S.** (2014). Service Desk Management: A Service Management Guide. Partridge Publishing.

**ISACA (2019).** COBIT 2019 Framework: Governance and Management Objectives. ISACA.

**Fin del Documento**