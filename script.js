// Proyecto de Aula Data Structure
const courseData = {
    topics: [
        {
            id: 1,
            title: "La Transformación Digital",
            description: "Innovación empresarial, gestión de producción, marketing, RRHH",
            icon: "fas fa-digital-tachograph",
            color: "#28a745",
            status: "completed"
        },
        {
            id: 2,
            title: "Caso de Estudio",
            description: "Metodologías de análisis, evaluación económica",
            icon: "fas fa-chart-line",
            color: "#ffc107",
            status: "completed"
        },
        {
            id: 3,
            title: "El Gobierno y la Gestión de las TIC",
            description: "Gobierno corporativo, marcos de referencia, normativas ISO",
            icon: "fas fa-cogs",
            color: "#007bff",
            status: "completed"
        },
        {
            id: 4,
            title: "El Gobierno Corporativo de las TIC",
            description: "Norma ISO 38500, principios de gobierno, implementación y mejores prácticas",
            icon: "fas fa-building",
            color: "#6f42c1",
            status: "completed"
        },
        {
            id: 5,
            title: "COBIT",
            description: "Objetivos de Control para la Información y Tecnologías Relacionadas",
            icon: "fas fa-shield-alt",
            color: "#fd7e14",
            status: "completed"
        },
        {
            id: 6,
            title: "ITIL",
            description: "La Biblioteca de Infraestructura de Tecnologías de la Información",
            icon: "fas fa-book",
            color: "#dc3545",
            status: "completed"
        },
        {
            id: 7,
            title: "Sistema de Gestión de Servicios",
            description: "ISO/IEC 20000-1, Sistema de Gestión del Servicio (SGS), procesos de provisión y control",
            icon: "fas fa-server",
            color: "#795548",
            status: "completed"
        },
        {
            id: 8,
            title: "Gestión de Activos de Software",
            description: "Por desarrollar según avance del curso",
            icon: "fas fa-laptop-code",
            color: "#343a40",
            status: "pending"
        },
        {
            id: 9,
            title: "Gestión de la Continuidad del Negocio",
            description: "Por desarrollar según avance del curso",
            icon: "fas fa-sync-alt",
            color: "#6c757d",
            status: "pending"
        }
    ]
};

// Nueva estructura de contenido del proyecto
const projectContent = {
    conceptosClave: {
            title: "Conceptos Clave",
        description: "Los conceptos más relevantes de cada tema del curso",
        icon: "fas fa-lightbulb",
        color: "#28a745",
            items: [
            {
                tema: "Tema 1: La Transformación Digital",
                conceptos: [
                "I+D+i: Investigación, Desarrollo e innovación",
                "SCM: Supply Chain Management (Gestión de cadena de suministro)",
                "CRM: Customer Relationship Management (Gestión de relaciones con clientes)",
                "ERP: Enterprise Resource Planning (Planificación de recursos empresariales)",
                "Logística inversa: Gestión de productos de desecho y devoluciones"
            ]
        },
            {
                tema: "Tema 2: Caso de Estudio",
                conceptos: [
                "EVS: Estudio de Viabilidad de Sistemas",
                "ROI: Return on Investment (Retorno de inversión)",
                "VAN: Valor Actual Neto",
                "TIR: Tasa Interna de Retorno",
                "Val IT: Metodología de evaluación (Estrategia, Arquitectura, Valor, Entrega)",
                "Análisis de Riesgos: Probabilidad, Impacto, Mitigación"
            ]
        },
            {
                tema: "Tema 3: El Gobierno y la Gestión de las TIC",
                conceptos: [
                    "Gobierno de las TI: Alineamiento estratégico con la organización",
                    "Diferencias entre Gobierno (estratégico) y Gestión (táctico) de las TSI",
                    "Marcos de referencia: COBIT 2019, ITIL 4, Val IT",
                    "Normativas ISO: ISO 38500, ISO 20000, ISO 27001",
                    "Certificaciones AENOR: UNE 71599 para gobierno corporativo"
                ]
            },
            {
                tema: "Tema 4: El Gobierno Corporativo de las TIC",
                conceptos: [
                    "ISO/IEC 38500:2008: Norma internacional para el buen gobierno corporativo",
                    "Los 6 Principios: Responsabilidad, Estrategia, Adquisición, Rendimiento, Conformidad, Factor Humano",
                    "Funciones de Gobierno: Evaluación, Dirección, Monitorización",
                    "Beneficios económicos: 20% superior según estudios del MIT (Peter Weill)",
                    "Distinción entre gobierno y gestión de las TIC"
                    ]
                },
            {
                tema: "Tema 5: COBIT",
                conceptos: [
                    "COBIT: Control Objectives for Information and Related Technology (Objetivos de Control para la Información y Tecnologías Relacionadas)",
                    "ISACA: Information Systems Audit and Control Association (Asociación de Auditoría y Control de Sistemas de Información)",
                    "34 procesos: Cubren todos los aspectos del gobierno y gestión de TI",
                    "210 objetivos de control: Específicos y detallados",
                    "4 dominios: Planificación y Organización (PO), Adquisición e Implementación (AI), Entrega y Soporte (ES), Supervisión y Evaluación (SE)",
                    "COBIT 5: Última edición aceptada internacionalmente (2012), integra Val IT, Risk IT, ITIL e ISO"
                ]
            },
            {
                tema: "Tema 6: ITIL",
                conceptos: [
                    "ITIL: Information Technology Infrastructure Library (Biblioteca de Infraestructura de Tecnologías de la Información)",
                    "Iniciativa nacida en 1989: Marco de buenas prácticas para la gestión de servicios de TI",
                    "Paradigma orientado a servicios: Se centra en la demanda del cliente de TI, no en procesos internos",
                    "Ciclo de Vida del Servicio: Estrategia, Diseño, Transición, Operación, Mejora",
                    "Service Desk: Punto único de contacto entre usuarios y TI. Tipos: Local, Centralizado, Virtual, Follow the Sun",
                    "SLA (Service Level Agreement): Acuerdo formal con el cliente sobre niveles de servicio esperados",
                    "OLA (Operational Level Agreement): Acuerdo interno entre departamentos de TI",
                    "UC (Underpinning Contract): Contrato con proveedores externos para cumplir SLA",
                    "Incident vs Problem vs Change: Incidente (restaurar servicio), Problema (causa raíz), Cambio (modificación planificada)",
                    "CMDB (Configuration Management Database): Base de datos de elementos de configuración (CIs) y sus relaciones",
                    "Service Catalog vs Service Portfolio: Catálogo (servicios activos), Portfolio (todos los servicios en todos los estados)",
                    "CAB (Change Advisory Board): Comité que evalúa y aprueba cambios importantes",
                    "Tipos de Cambios: Normal, Estándar, Urgente, Emergencia",
                    "Service Owner: Responsable de un servicio a lo largo de su ciclo de vida",
                    "Process Owner: Responsable del diseño, implementación y mejora de un proceso",
                    "RACI Matrix: Herramienta para definir roles (Responsible, Accountable, Consulted, Informed)",
                    "KPIs y Métricas: Disponibilidad, MTBF, MTTR, cumplimiento de SLA, tiempos de ciclo",
                    "Continual Improvement Model: Modelo de 7 pasos para mejora continua de servicios",
                    "Service Value System (ITIL 4): Sistema operativo con Guiding Principles, Governance, Service Value Chain, Practices",
                    "Beneficios: Mejora de calidad, comunicación con usuarios, flexibilidad, satisfacción del cliente, rendimiento y seguridad"
                ]
            },
            {
                tema: "Tema 7: Sistema de Gestión de Servicios",
                conceptos: [
                    "ISO/IEC 20000-1:2005: Norma internacional para gestión de servicios TI, traducida por AENOR como UNE-ISO/IEC 20000-1:2007",
                    "Sistema de Gestión del Servicio (SGS): Agrupa actividades para configuración de servicios útiles que satisfagan necesidades de negocio",
                    "Estructura de la serie ISO/IEC 20000: ISO/IEC 20000-1 (Especificaciones), 20000-2 (Código de buenas prácticas), TR 20000-3 (Alcance), TR 20000-4 (Modelo de referencia), TR 20000-8 (Modelo de valoración), 20000-5 (Adopción incremental)",
                    "Procesos del SGS: Diseño y transición de servicios, Provisión del servicio, Control, Resolución, Relación",
                    "Principios básicos: Servicio, Cliente, Comunicación interna, Procesos internos",
                    "Diseño y transición de servicios: Garantiza que servicios se creen y entreguen con funcionalidad, costes y plazos acordados",
                    "Procesos de provisión del servicio: Gestión del nivel de servicio, Generación de informes, Continuidad y disponibilidad, Presupuesto y contabilidad, Gestión de capacidad, Gestión de seguridad de la información",
                    "Grupos de procesos: Control, Entrega, Resolución, Relación",
                    "Beneficios: Resolución rápida de incidentes, mejora de problemas ocultos, conocimiento preciso de configuración, cambios seguros, comprensión de necesidades del cliente, control de costes, mejora en provisión de servicios, garantía de funcionamiento crítico",
                    "Certificación: La norma permite certificación directa o adopción incremental mediante niveles establecidos por ISO/IEC 20000-5"
                ]
            }
            ]
        },
    casosEstudio: {
        title: "Casos de Estudio",
        description: "Casos de estudio detallados de cada tema del curso",
        icon: "fas fa-flask",
        color: "#ffc107",
            items: [
                {
                tema: "Tema 1: La Transformación Digital",
                casos: [
                    {
                        titulo: "Amazon: De librería online a ecosistema global",
                        descripcion: "Amazon comenzó como una librería online en 1994 y se transformó en el ecosistema global más grande del mundo.",
                        desarrollo: "La transformación incluyó: 1) Expansión de productos más allá de libros, 2) Desarrollo de AWS (Amazon Web Services), 3) Implementación de logística avanzada con centros de distribución, 4) Creación de servicios digitales como Prime Video y Alexa, 5) Adquisición estratégica de empresas como Whole Foods. Esta transformación digital le permitió a Amazon generar ingresos de más de $470 mil millones en 2021.",
                        lecciones: "La clave del éxito fue la visión a largo plazo, la inversión continua en tecnología y la capacidad de adaptarse a las necesidades cambiantes del mercado."
                    },
                    {
                        titulo: "Netflix: De alquiler de DVDs a streaming global",
                        descripcion: "Netflix revolucionó la industria del entretenimiento transformándose de un servicio de alquiler de DVDs a la plataforma de streaming líder mundial.",
                        desarrollo: "La transformación incluyó: 1) Transición del modelo físico al digital, 2) Desarrollo de algoritmos de recomendación personalizados, 3) Producción de contenido original (Netflix Originals), 4) Expansión global a más de 190 países, 5) Inversión en tecnología de streaming de alta calidad. Netflix pasó de tener 1 millón de suscriptores en 2002 a más de 220 millones en 2022.",
                        lecciones: "La anticipación de tendencias tecnológicas y la inversión en contenido propio fueron factores clave para el éxito de la transformación."
                    }
                ]
            },
            {
                tema: "Tema 2: Caso de Estudio",
                casos: [
                    {
                        titulo: "Botanas del Valle: Implementación de ERP",
                        descripcion: "PYME del sector alimentario que enfrentaba problemas en recolección, producción, distribución y cobros.",
                        desarrollo: "Situación inicial: La empresa tenía procesos manuales que generaban ineficiencias. Problemas identificados: 1) Falta de control en la recolección de materias primas, 2) Producción sin planificación adecuada, 3) Distribución desorganizada, 4) Cobros tardíos. Solución implementada: ERP integrado que incluyó módulos de: 1) Gestión de proveedores y compras, 2) Planificación de producción, 3) Control de inventarios, 4) Gestión de ventas y facturación, 5) Reportes gerenciales. Resultados: Incremento del 25% en la eficiencia operativa y reducción del 30% en tiempos de procesamiento.",
                        lecciones: "La implementación exitosa requirió análisis detallado de procesos, capacitación del personal y gestión del cambio organizacional."
                    }
                ]
            },
            {
                tema: "Tema 3: El Gobierno y la Gestión de las TIC",
                casos: [
                    {
                        titulo: "Bancolombia: Implementación de COBIT para auditoría y control",
                        descripcion: "El banco más grande de Colombia implementó COBIT para mejorar su gobierno de TI y cumplir con regulaciones financieras.",
                        desarrollo: "Contexto: Bancolombia necesitaba fortalecer su gobierno de TI para cumplir con regulaciones del sector financiero. Implementación: 1) Evaluación del estado actual usando COBIT 2019, 2) Identificación de los 5 dominios más críticos (EDM, APO, BAI, DSS, MEA), 3) Selección de 15 objetivos de control prioritarios, 4) Desarrollo de políticas y procedimientos, 5) Capacitación de equipos técnicos y gerenciales. Resultados: Mejora del 40% en tiempos de auditoría, reducción del 25% en riesgos operacionales, y certificación ISO 27001.",
                        lecciones: "La implementación de marcos de gobierno requiere compromiso de la alta dirección y recursos dedicados para la capacitación continua."
                    }
                ]
            },
            {
                tema: "Tema 4: El Gobierno Corporativo de las TIC",
                casos: [
                    {
                        titulo: "Empresa Manufacturera: Implementación de ISO 38500",
                        descripcion: "Empresa manufacturera mediana que implementó ISO 38500 para mejorar su gobierno corporativo de TIC.",
                        desarrollo: "Situación inicial: La empresa tenía inversiones dispersas en TIC sin una estrategia clara. Implementación: 1) Evaluación del estado actual del gobierno de TIC, 2) Aplicación de los 6 principios de ISO 38500: Responsabilidad (matriz RACI), Estrategia (plan estratégico de TIC), Adquisición (proceso de evaluación de proveedores), Rendimiento (dashboard de KPIs), Conformidad (auditorías regulares), Factor Humano (programas de capacitación), 3) Establecimiento de procesos de evaluación, dirección y monitorización. Resultados: Incremento del 20% en ROI de inversiones TIC, reducción del 35% en riesgos tecnológicos, y mejora en la satisfacción de usuarios internos.",
                        lecciones: "La implementación exitosa requiere alineación con objetivos de negocio y participación activa de todas las áreas de la organización."
                    }
                    ]
                },
            {
                tema: "Tema 5: COBIT",
                casos: [
                    {
                        titulo: "Colegio Privado Bilingüe: Auditoría de Administración de Recursos Humanos con COBIT",
                        descripcion: "Colegio privado con orientación bilingüe (Español-Inglés) que brinda servicio de educación a niños de preescolar y primaria. Aplicación de COBIT para auditar el proceso de Administración de Recursos Humanos.",
                        desarrollo: "Contexto: El colegio necesitaba mejorar el control y gestión de su proceso de Administración de Recursos Humanos. Aplicación de COBIT: 1) Selección del proceso PO7 (Administración de Recursos Humanos) del dominio Planificación y Organización, 2) Evaluación de objetivos de control específicos del proceso, 3) Identificación de áreas de mejora en la gestión de personal docente y administrativo, 4) Implementación de controles recomendados por COBIT, 5) Establecimiento de métricas de desempeño. Resultados: Mejora del 30% en la eficiencia de procesos de RRHH, reducción del 20% en tiempos de contratación, mejor cumplimiento de normativas laborales, y mayor satisfacción del personal.",
                        lecciones: "COBIT proporciona un marco estructurado para auditar y mejorar procesos específicos de TI, incluso en organizaciones educativas. La aplicación sistemática de objetivos de control ayuda a identificar y corregir deficiencias en la gestión."
                    },
                    {
                        titulo: "Empresa Financiera: Implementación de COBIT para Control de Seguridad",
                        descripcion: "Empresa del sector financiero que implementó COBIT para fortalecer el control de seguridad en la gestión de servicios de TI.",
                        desarrollo: "Situación inicial: La empresa enfrentaba desafíos en el control de seguridad de sus sistemas de información. Implementación: 1) Aplicación de procesos del dominio Entrega y Soporte (ES5: Garantizar la seguridad de los sistemas), 2) Implementación de procesos del dominio Planificación y Organización (PO9: Evaluación de Riesgos), 3) Establecimiento de controles de seguridad basados en objetivos de control de COBIT, 4) Capacitación del personal en procesos de seguridad, 5) Auditorías regulares usando el dominio Supervisión y Evaluación. Resultados: Reducción del 40% en incidentes de seguridad, mejora del 50% en tiempos de respuesta a incidentes, cumplimiento de regulaciones financieras, y certificación ISO 27001.",
                        lecciones: "COBIT es especialmente efectivo para organizaciones que requieren cumplimiento estricto de normativas. La integración de múltiples dominios permite una gestión holística de la seguridad."
                    }
                    ]
                },
            {
                tema: "Tema 6: ITIL",
                casos: [
                    {
                        titulo: "Empresa de Servicios Financieros: Implementación de Service Desk con ITIL",
                        descripcion: "Empresa del sector financiero que implementó ITIL para mejorar la gestión de servicios de TI, enfocándose en la fase de Operación del Servicio.",
                        desarrollo: "Situación inicial: La empresa tenía problemas en la gestión de incidencias y solicitudes de usuarios, con tiempos de respuesta elevados y falta de visibilidad. Implementación ITIL: 1) Establecimiento de Service Desk como punto único de contacto, 2) Implementación del proceso de Gestión de Incidencias con clasificación y priorización, 3) Implementación de Gestión de Problemas para identificar causas raíz, 4) Establecimiento de SLA (Service Level Agreements) con objetivos medibles, 5) Implementación de Gestión de Configuración (CMDB) para rastrear activos, 6) Capacitación del personal en procesos ITIL. Resultados: Reducción del 45% en tiempo medio de resolución de incidencias, mejora del 60% en satisfacción del usuario, reducción del 30% en incidentes recurrentes mediante gestión de problemas, y cumplimiento del 95% de los SLA establecidos.",
                        lecciones: "La implementación de ITIL en la fase de Operación del Servicio proporciona estructura y procesos claros que mejoran significativamente la calidad del servicio. El Service Desk funciona como punto central de coordinación y visibilidad."
                    },
                    {
                        titulo: "Organización de Salud: Gestión de Cambios con ITIL",
                        descripcion: "Hospital que implementó el proceso de Gestión de Cambios de ITIL para controlar y coordinar cambios en sistemas críticos de información médica.",
                        desarrollo: "Contexto: El hospital necesitaba gestionar cambios en sistemas críticos (historia clínica electrónica, sistemas de laboratorio) sin afectar la operación. Implementación: 1) Establecimiento del proceso de Gestión de Cambios siguiendo ITIL (Transición del Servicio), 2) Creación de Comité de Cambios (CAB) para evaluar cambios importantes, 3) Implementación de clasificación de cambios (Normal, Estándar, Urgente, Emergencia), 4) Proceso de evaluación, aprobación y planificación de cambios, 5) Validación y pruebas antes del despliegue, 6) Gestión de retrocesión en caso de problemas. Resultados: Reducción del 70% en cambios fallidos, cumplimiento del 100% en pruebas de cambios críticos, reducción del 50% en tiempo de implementación de cambios estándar, y cero incidentes relacionados con cambios mal planificados.",
                        lecciones: "La Gestión de Cambios de ITIL es fundamental en entornos críticos. Proporciona control, visibilidad y reducción de riesgos, especialmente cuando se trata de sistemas que afectan directamente la operación del negocio."
                    },
                    {
                        titulo: "Empresa Manufacturera: Ciclo de Vida Completo del Servicio con ITIL",
                        descripcion: "Empresa manufacturera que implementó ITIL en todas las fases del ciclo de vida del servicio para gestionar un nuevo sistema ERP.",
                        desarrollo: "Situación: La empresa necesitaba implementar un nuevo ERP y gestionarlo de manera estructurada. Aplicación del ciclo de vida ITIL: 1) Estrategia: Definición del portfolio de servicios, análisis de demanda y gestión financiera, 2) Diseño: Creación del catálogo de servicios, definición de SLA, diseño de capacidad y disponibilidad, plan de continuidad, 3) Transición: Gestión de cambios, configuración del CMDB, despliegue controlado, validación y pruebas, 4) Operación: Service Desk, gestión de incidencias y problemas, gestión de eventos, 5) Mejora: Proceso de mejora continua con medición de KPIs, generación de informes, plan de mejora del servicio (SIP). Resultados: Implementación exitosa del ERP en tiempo y presupuesto, cumplimiento del 98% de SLA durante los primeros 6 meses, reducción del 40% en costos operativos de TI, mejora continua documentada trimestralmente, y satisfacción del cliente del 92%.",
                        lecciones: "Aplicar ITIL en todas las fases del ciclo de vida del servicio proporciona una gestión integral y estructurada. La fase de Mejora asegura que los servicios evolucionen continuamente para satisfacer las necesidades cambiantes del negocio."
                    }
                    ]
                },
            {
                tema: "Tema 7: Sistema de Gestión de Servicios",
                casos: [
                    {
                        titulo: "Empresa de Servicios TI: Certificación ISO/IEC 20000-1",
                        descripcion: "Empresa proveedora de servicios de TI que implementó y certificó ISO/IEC 20000-1 para mejorar la gestión de sus servicios y obtener reconocimiento en el mercado.",
                        desarrollo: "Situación inicial: La empresa tenía procesos de gestión de servicios desorganizados, con alta tasa de incidencias y baja satisfacción del cliente. Implementación: 1) Evaluación del estado actual según requisitos de ISO/IEC 20000-1, 2) Establecimiento del Sistema de Gestión del Servicio (SGS) con los 5 grupos de procesos, 3) Implementación de procesos de diseño y transición de servicios, 4) Establecimiento de procesos de provisión del servicio (gestión de nivel de servicio, continuidad, capacidad, seguridad), 5) Implementación de procesos de control, resolución y relación, 6) Capacitación del personal en la norma, 7) Auditoría y certificación por organismo acreditado. Resultados: Reducción del 50% en tiempo de resolución de incidencias, mejora del 70% en satisfacción del cliente, certificación ISO/IEC 20000-1 obtenida, incremento del 30% en nuevos contratos gracias al reconocimiento de la certificación, y mejora continua documentada.",
                        lecciones: "La certificación ISO/IEC 20000-1 proporciona un marco estructurado y certificable que mejora significativamente la calidad de los servicios TI. La implicación de la alta dirección es fundamental para el éxito de la implementación."
                    },
                    {
                        titulo: "Organización Gubernamental: Implementación de SGS con ISO/IEC 20000",
                        descripcion: "Organización del sector público que implementó el Sistema de Gestión del Servicio basado en ISO/IEC 20000 para estandarizar la provisión de servicios TI a diferentes dependencias.",
                        desarrollo: "Contexto: La organización necesitaba estandarizar la gestión de servicios TI para múltiples dependencias gubernamentales. Implementación: 1) Análisis de requisitos de servicio de cada dependencia, 2) Diseño del SGS centralizado siguiendo ISO/IEC 20000-1, 3) Implementación de procesos de diseño y transición para nuevos servicios, 4) Establecimiento de procesos de provisión con SLA diferenciados por dependencia, 5) Implementación de procesos de control y resolución centralizados, 6) Generación de informes estandarizados para todas las dependencias, 7) Adopción incremental según ISO/IEC 20000-5. Resultados: Estandarización exitosa de servicios TI, reducción del 40% en costos operativos mediante centralización, mejora del 60% en tiempos de entrega de servicios, satisfacción del 85% de las dependencias, y base sólida para futura certificación.",
                        lecciones: "La adopción incremental de ISO/IEC 20000 permite implementar el SGS de manera gradual, especialmente útil en organizaciones grandes. La estandarización mejora la eficiencia y reduce costos operativos."
                    }
                ]
            }
            ]
        },
    autoevaluacion: {
        title: "Autoevaluación",
        description: "Tests de preguntas para evaluar el conocimiento de cada tema",
        icon: "fas fa-clipboard-check",
        color: "#007bff",
            items: [
                {
                tema: "Tema 1: La Transformación Digital",
                preguntas: [
                    {
                        pregunta: "¿Qué significa I+D+i?",
                        opciones: [
                            "Investigación, Desarrollo e innovación",
                            "Información, Datos e inteligencia",
                            "Integración, Desarrollo e innovación",
                            "Investigación, Datos e innovación"
                        ],
                        respuesta: 0,
                        explicacion: "I+D+i se refiere a Investigación, Desarrollo e innovación, representando el proceso completo de generación de conocimiento y su aplicación práctica."
                    },
                    {
                        pregunta: "¿Cuál es la diferencia principal entre ERP y CRM?",
                        opciones: [
                            "ERP gestiona recursos internos, CRM gestiona relaciones con clientes",
                            "ERP es para grandes empresas, CRM para pequeñas",
                            "ERP es más caro que CRM",
                            "No hay diferencia, son lo mismo"
                        ],
                        respuesta: 0,
                        explicacion: "ERP (Enterprise Resource Planning) gestiona todos los recursos internos de la empresa, mientras que CRM (Customer Relationship Management) se enfoca específicamente en las relaciones con clientes."
                    },
                    {
                        pregunta: "¿Qué es la logística inversa?",
                        opciones: [
                            "Gestión del flujo de productos desde el punto de consumo hasta el origen",
                            "Logística que funciona en sentido contrario",
                            "Sistema de devoluciones únicamente",
                            "Gestión de inventarios al revés"
                        ],
                        respuesta: 0,
                        explicacion: "La logística inversa es el proceso de gestión del flujo de productos desde el punto de consumo hasta el punto de origen para recuperar valor o disponer adecuadamente."
                    },
                    {
                        pregunta: "¿Cuál es el objetivo principal de la transformación digital?",
                        opciones: [
                            "Mejorar la eficiencia operativa y crear nuevas oportunidades de negocio",
                            "Reducir costos únicamente",
                            "Implementar tecnología por moda",
                            "Reemplazar completamente a los empleados"
                        ],
                        respuesta: 0,
                        explicacion: "La transformación digital busca mejorar la eficiencia operativa, optimizar procesos y crear nuevas oportunidades de negocio mediante el uso estratégico de la tecnología."
                    },
                    {
                        pregunta: "¿Qué caracteriza a las tecnologías emergentes?",
                        opciones: [
                            "Son nuevas tecnologías con potencial de impacto significativo",
                            "Son tecnologías obsoletas",
                            "Son tecnologías muy costosas",
                            "Son tecnologías solo para grandes empresas"
                        ],
                        respuesta: 0,
                        explicacion: "Las tecnologías emergentes son aquellas que están en desarrollo o en las primeras etapas de adopción y tienen el potencial de generar un impacto significativo en la sociedad o la industria."
                    }
                ]
            },
            {
                tema: "Tema 2: Caso de Estudio",
                preguntas: [
                    {
                        pregunta: "¿Qué significa EVS?",
                        opciones: [
                            "Estudio de Viabilidad de Sistemas",
                            "Evaluación de Valor de Sistemas",
                            "Estudio de Ventas de Sistemas",
                            "Evaluación de Versión de Sistemas"
                        ],
                        respuesta: 0,
                        explicacion: "EVS significa Estudio de Viabilidad de Sistemas, una metodología estructurada para evaluar la factibilidad técnica, económica y operativa de proyectos de sistemas de información."
                    },
                    {
                        pregunta: "¿Cuál es la fórmula del ROI?",
                        opciones: [
                            "ROI = (Beneficio Neto / Costo de Inversión) × 100",
                            "ROI = Costo de Inversión / Beneficio Neto",
                            "ROI = Beneficio Neto × Costo de Inversión",
                            "ROI = Beneficio Neto - Costo de Inversión"
                        ],
                        respuesta: 0,
                        explicacion: "La fórmula correcta del ROI es: ROI = (Beneficio Neto / Costo de Inversión) × 100, donde el Beneficio Neto son los ingresos generados menos los costos operativos."
                    },
                    {
                        pregunta: "¿Qué significa TIR?",
                        opciones: [
                            "Tasa Interna de Retorno",
                            "Tiempo Interno de Retorno",
                            "Tasa de Inversión de Retorno",
                            "Tiempo de Inversión de Retorno"
                        ],
                        respuesta: 0,
                        explicacion: "TIR significa Tasa Interna de Retorno, que es la tasa de descuento que hace que el VAN de un proyecto sea igual a cero, representando la rentabilidad esperada de la inversión."
                    },
                    {
                        pregunta: "¿Cuál es el objetivo principal del EVS?",
                        opciones: [
                            "Evaluar la viabilidad técnica, económica y operativa de un proyecto",
                            "Calcular únicamente el costo del proyecto",
                            "Seleccionar el mejor proveedor",
                            "Implementar el sistema directamente"
                        ],
                        respuesta: 0,
                        explicacion: "El Estudio de Viabilidad de Sistemas (EVS) tiene como objetivo principal evaluar la factibilidad técnica, económica y operativa de un proyecto antes de su implementación."
                    },
                    {
                        pregunta: "¿Qué incluye el análisis de riesgos en un proyecto?",
                        opciones: [
                            "Identificación, evaluación y planificación de mitigación de riesgos",
                            "Solo la identificación de riesgos",
                            "Únicamente el cálculo de probabilidades",
                            "Solo la evaluación del impacto"
                        ],
                        respuesta: 0,
                        explicacion: "El análisis de riesgos incluye la identificación de riesgos potenciales, la evaluación de su probabilidad e impacto, y la planificación de estrategias de mitigación."
                    }
                ]
            },
            {
                tema: "Tema 3: El Gobierno y la Gestión de las TIC",
                preguntas: [
                    {
                        pregunta: "¿Cuál es la diferencia principal entre Gobierno y Gestión de las TIC?",
                        opciones: [
                            "Gobierno es estratégico, Gestión es táctico",
                            "Gobierno es táctico, Gestión es estratégico",
                            "No hay diferencia",
                            "Gobierno es más importante que Gestión"
                        ],
                        respuesta: 0,
                        explicacion: "El Gobierno de las TIC es estratégico (largo plazo, decisiones de alto nivel), mientras que la Gestión es táctico (corto y medio plazo, implementación diaria)."
                    },
                    {
                        pregunta: "¿Cuántos dominios tiene COBIT 2019?",
                        opciones: [
                            "5 dominios",
                            "4 dominios",
                            "6 dominios",
                            "3 dominios"
                        ],
                        respuesta: 0,
                        explicacion: "COBIT 2019 tiene 5 dominios principales: EDM (Evaluate, Direct, Monitor), APO (Align, Plan, Organize), BAI (Build, Acquire, Implement), DSS (Deliver, Service, Support), y MEA (Monitor, Evaluate, Assess)."
                    },
                    {
                        pregunta: "¿Cuántas prácticas tiene ITIL 4?",
                        opciones: [
                            "34 prácticas",
                            "26 prácticas",
                            "40 prácticas",
                            "30 prácticas"
                        ],
                        respuesta: 0,
                        explicacion: "ITIL 4 tiene 34 prácticas para la gestión del ciclo de vida de servicios de TI, organizadas en 4 dimensiones del modelo de servicio."
                    },
                    {
                        pregunta: "¿Qué es Val IT?",
                        opciones: [
                            "Marco para gestionar el valor de las inversiones en TI",
                            "Sistema de gestión de inventarios",
                            "Herramienta de desarrollo de software",
                            "Metodología de testing"
                        ],
                        respuesta: 0,
                        explicacion: "Val IT es un marco de referencia desarrollado por ISACA para ayudar a las organizaciones a gestionar el valor de sus inversiones en tecnología de la información."
                    },
                    {
                        pregunta: "¿Cuál es la diferencia entre Balanced Scorecard y otros marcos de medición?",
                        opciones: [
                            "Considera múltiples perspectivas: financiera, cliente, procesos internos y aprendizaje",
                            "Solo mide indicadores financieros",
                            "Se enfoca únicamente en procesos internos",
                            "Mide solo la satisfacción del cliente"
                        ],
                        respuesta: 0,
                        explicacion: "El Balanced Scorecard se diferencia por considerar cuatro perspectivas equilibradas: financiera, del cliente, de procesos internos y de aprendizaje y crecimiento."
                    }
                ]
            },
            {
                tema: "Tema 4: El Gobierno Corporativo de las TIC",
                preguntas: [
                    {
                        pregunta: "¿De qué año data la norma ISO/IEC 38500?",
                        opciones: [
                            "2008",
                            "2006",
                            "2009",
                            "2007"
                        ],
                        respuesta: 0,
                        explicacion: "La norma ISO/IEC 38500 fue publicada en junio de 2008, basada en una norma australiana precursora."
                    },
                    {
                        pregunta: "¿Cuántos principios tiene la norma ISO 38500?",
                        opciones: [
                            "6 principios",
                            "5 principios",
                            "7 principios",
                            "4 principios"
                        ],
                        respuesta: 0,
                        explicacion: "La norma ISO 38500 se basa en 6 principios: Responsabilidad, Estrategia, Adquisición, Rendimiento, Conformidad y Factor Humano."
                    },
                    {
                        pregunta: "Según Peter Weill del MIT, ¿qué beneficio económico reporta una buena gobernanza de las TIC?",
                        opciones: [
                            "20% superior",
                            "25% superior",
                            "15% superior",
                            "30% superior"
                        ],
                        respuesta: 0,
                        explicacion: "Peter Weill del MIT asegura que una buena gobernanza de las TIC reporta beneficios económicos directos de un 20% superior a organizaciones con gobernanza poco efectiva."
                    },
                    {
                        pregunta: "¿Cuáles son las tres funciones principales del gobierno de las TIC según ISO 38500?",
                        opciones: [
                            "Evaluación, Dirección y Monitorización",
                            "Planificación, Ejecución y Control",
                            "Análisis, Diseño e Implementación",
                            "Estrategia, Táctica y Operación"
                        ],
                        respuesta: 0,
                        explicacion: "Las tres funciones principales del gobierno de las TIC según ISO 38500 son: Evaluación (analizar el uso actual y futuro), Dirección (establecer políticas y estrategias) y Monitorización (supervisar el cumplimiento)."
                    },
                    {
                        pregunta: "¿Qué principio de ISO 38500 se refiere a la alineación de las TIC con los objetivos estratégicos?",
                        opciones: [
                            "Principio de Estrategia",
                            "Principio de Responsabilidad",
                            "Principio de Rendimiento",
                            "Principio de Conformidad"
                        ],
                        respuesta: 0,
                        explicacion: "El Principio de Estrategia establece que la estrategia de las TIC debe estar alineada con la estrategia de negocio de la organización para asegurar que las inversiones en TIC contribuyan a los objetivos corporativos."
                    }
                ]
            },
            {
                tema: "Tema 5: COBIT",
                preguntas: [
                    {
                        pregunta: "¿Qué organización promovió las guías de buenas prácticas COBIT?",
                        opciones: [
                            "La norma UNE 35800",
                            "The ISATA Organization",
                            "The Control Objectives for Information and related Technology",
                            "The Information Systems Audit and Control Association"
                        ],
                        respuesta: 3,
                        explicacion: "COBIT fue promovido por ISACA (Information Systems Audit and Control Association) en 1996 como una iniciativa para proporcionar un marco de control de objetivos para la tecnología de la información."
                    },
                    {
                        pregunta: "¿En qué año se publicó la primera edición de COBIT?",
                        opciones: [
                            "1996",
                            "1998",
                            "1999",
                            "Ninguna de las anteriores es correcta ya que COBIT no es una norma"
                        ],
                        respuesta: 0,
                        explicacion: "La primera edición de COBIT fue publicada en 1996 como una iniciativa de ISACA. Posteriormente se publicaron ediciones en 1998, 2000, 2005 (4.0), 2007 (4.1) y 2012 (5.0)."
                    },
                    {
                        pregunta: "¿Cuántos procesos tiene COBIT?",
                        opciones: [
                            "34 procesos",
                            "30 procesos",
                            "40 procesos",
                            "28 procesos"
                        ],
                        respuesta: 0,
                        explicacion: "COBIT tiene 34 procesos que cubren 210 objetivos de control (específicos o detallados) clasificados en cuatro dominios: Planificación y Organización, Adquisición e Implantación, Entrega y Soporte, y Supervisión y Evaluación."
                    },
                    {
                        pregunta: "¿A qué dominio pertenece la definición del plan estratégico?",
                        opciones: [
                            "Adquisición e implementación",
                            "Entrega y soporte",
                            "Supervisión y evaluación",
                            "Planificación y organización"
                        ],
                        respuesta: 3,
                        explicacion: "La definición del plan estratégico (PO1) pertenece al dominio de Planificación y Organización (PO), que desarrolla cómo la tecnología de la información colabora en la consecución de objetivos generales de la organización."
                    },
                    {
                        pregunta: "¿A qué dominio pertenece la identificación de soluciones automatizadas?",
                        opciones: [
                            "Adquisición e implementación",
                            "Entrega y soporte",
                            "Supervisión y evaluación",
                            "Planificación y organización"
                        ],
                        respuesta: 0,
                        explicacion: "La identificación de soluciones automatizadas (AI1) pertenece al dominio de Adquisición e Implementación (AI), cuyo objetivo fundamental es la identificación, desarrollo o adquisición e implementación de las soluciones de TI."
                    },
                    {
                        pregunta: "¿A qué dominio pertenece la formación y entrenamiento de usuarios?",
                        opciones: [
                            "Adquisición e implementación",
                            "Entrega y soporte",
                            "Supervisión y evaluación",
                            "Planificación y organización"
                        ],
                        respuesta: 1,
                        explicacion: "La formación y entrenamiento de usuarios (ES6) pertenece al dominio de Entrega y Soporte (ES), que analiza los servicios requeridos por la organización y establece los procesos de soporte necesarios."
                    },
                    {
                        pregunta: "¿A qué dominio pertenece la evaluación del control interno?",
                        opciones: [
                            "Adquisición e implementación",
                            "Entrega y soporte",
                            "Supervisión y evaluación",
                            "Planificación y organización"
                        ],
                        respuesta: 2,
                        explicacion: "La evaluación del control interno (SE2) pertenece al dominio de Supervisión y Evaluación (SE), que tiene como objetivo evaluar regularmente los procesos de la organización para verificar su calidad, integridad y confidencialidad."
                    },
                    {
                        pregunta: "¿Qué versión de COBIT integra Val IT, Risk IT, ITIL e ISO?",
                        opciones: [
                            "COBIT 4.1",
                            "COBIT 5",
                            "COBIT 4.0",
                            "COBIT 3.0"
                        ],
                        respuesta: 1,
                        explicacion: "COBIT 5, publicada en 2012, es la última edición aceptada internacionalmente y se basa en COBIT 4.1, ampliándolo mediante la integración de otros importantes marcos y normas como Val IT, Risk IT, ITIL y las normas ISO relacionadas."
                    },
                    {
                        pregunta: "¿Cuál es la misión de las recomendaciones COBIT?",
                        opciones: [
                            "Investigar, desarrollar y promover los objetivos de control de las tecnologías",
                            "Investigar, relacionar y aplicar los objetivos de control de las tecnologías",
                            "Promulgar, analizar y validar los objetivos de control de las tecnologías",
                            "La A y la C son correctas"
                        ],
                        respuesta: 0,
                        explicacion: "La misión de las recomendaciones COBIT es investigar, desarrollar, publicar y promover un conjunto actualizado de objetivos de control de las tecnologías de la información de manera que facilite su uso a gerentes, usuarios y auditores."
                    },
                    {
                        pregunta: "¿Cuál es el matiz diferenciador de COBIT con respecto a otros marcos?",
                        opciones: [
                            "Su aplicación estricta en buen gobierno corporativo y control de seguridad",
                            "Su enfoque exclusivo en gestión de servicios",
                            "Su aplicación únicamente en grandes empresas",
                            "Su enfoque exclusivamente técnico"
                        ],
                        respuesta: 0,
                        explicacion: "El matiz diferenciador de COBIT radica en su estricta aplicación en lo relativo al buen gobierno corporativo y control de la seguridad dentro de la gestión de los servicios de TI, siendo útil para gerentes, usuarios y auditores."
                    }
                ]
            },
            {
                tema: "Tema 6: ITIL",
                preguntas: [
                    {
                        pregunta: "La orientación a procesos y la orientación a servicios son:",
                        opciones: [
                            "Paradigmas radicalmente opuestos",
                            "Recomendaciones para la programación del software",
                            "Paradigmas que se complementan",
                            "Ninguna de las respuestas anteriores es correcta"
                        ],
                        respuesta: 2,
                        explicacion: "La orientación a procesos y la orientación a servicios son paradigmas que se complementan. Mientras que la orientación a procesos se centra en la consecución de objetivos mediante procesos internos concatenados, la orientación a servicios se centra en la demanda del cliente de TI."
                    },
                    {
                        pregunta: "Bajo el esquema de servicios de TI nos centramos en:",
                        opciones: [
                            "La correcta aplicación de la norma ISO 38500",
                            "La consecución del buen gobierno corporativo",
                            "El análisis de los requisitos del sistema de información",
                            "La posible demanda del cliente"
                        ],
                        respuesta: 3,
                        explicacion: "Bajo el esquema de servicios de TI nos centramos en la posible demanda del cliente. El paradigma orientado a servicios no se centra en la ejecución de procesos sino en la demanda del cliente de TI."
                    },
                    {
                        pregunta: "ITIL alcanzó el rango de norma al ser consolidada por la ISO 38500:",
                        opciones: [
                            "Esta afirmación es correcta",
                            "Esta afirmación es parcialmente correcta, pues sólo se da para la fase de Estrategia",
                            "Esta afirmación es parcialmente correcta, pues sólo se da para la fase de Operación",
                            "Esta afirmación es incorrecta"
                        ],
                        respuesta: 3,
                        explicacion: "Esta afirmación es incorrecta. ITIL no es una norma ISO, es un marco de buenas prácticas. ITIL nació en 1989 como iniciativa del gobierno británico y ha evolucionado como marco de referencia, pero no ha sido consolidado como norma ISO."
                    },
                    {
                        pregunta: "La iniciativa ITIL nació en:",
                        opciones: [
                            "1998",
                            "1989",
                            "1999",
                            "1997"
                        ],
                        respuesta: 1,
                        explicacion: "La iniciativa ITIL nació en 1989 con la publicación de un libro sobre el Service Desk y otro sobre la gestión del nivel de servicio. Ha evolucionado a lo largo de los años extendiéndose a la mayoría de las organizaciones."
                    },
                    {
                        pregunta: "Entre los beneficios que aporta el desarrollo de una arquitectura orientada a servicios, no se encuentra:",
                        opciones: [
                            "La mejora de la calidad",
                            "El enriquecimiento de la comunicación con los usuarios",
                            "La falta de flexibilidad a los cambios",
                            "La mejora en la satisfacción de los clientes"
                        ],
                        respuesta: 2,
                        explicacion: "La falta de flexibilidad a los cambios NO es un beneficio. Por el contrario, una arquitectura orientada a servicios AUMENTA la flexibilidad y en consecuencia se obtiene un mejor alcance de las acciones de la organización cuando se dan cambios en las situaciones del mercado."
                    },
                    {
                        pregunta: "El proceso de Gestión de Eventos pertenece a la fase de:",
                        opciones: [
                            "Estrategia",
                            "Diseño",
                            "Transición",
                            "Operación"
                        ],
                        respuesta: 3,
                        explicacion: "El proceso de Gestión de Eventos pertenece a la fase de Operación del Servicio. Es responsable de monitorizar todos los eventos que acontezcan en la infraestructura TI con el objetivo de asegurar su correcto funcionamiento y ayudar a prever incidencias futuras."
                    },
                    {
                        pregunta: "El proceso de Validación y pruebas pertenece a la fase de:",
                        opciones: [
                            "Estrategia",
                            "Diseño",
                            "Transición",
                            "Operación"
                        ],
                        respuesta: 2,
                        explicacion: "El proceso de Validación y pruebas pertenece a la fase de Transición del Servicio. Es responsable de garantizar que los servicios cumplen los requisitos preestablecidos antes de su paso al entorno de producción."
                    },
                    {
                        pregunta: "El proceso de Seguridad de la información pertenece a la fase de:",
                        opciones: [
                            "Estrategia",
                            "Diseño",
                            "Transición",
                            "Operación"
                        ],
                        respuesta: 1,
                        explicacion: "El proceso de Gestión de la Seguridad de la Información pertenece a la fase de Diseño del Servicio. Es responsable de establecer las políticas de integridad, confidencialidad y disponibilidad de la información."
                    },
                    {
                        pregunta: "El proceso de Gestión de proveedores pertenece a la fase de:",
                        opciones: [
                            "Estrategia",
                            "Diseño",
                            "Transición",
                            "Operación"
                        ],
                        respuesta: 1,
                        explicacion: "El proceso de Gestión de Proveedores pertenece a la fase de Diseño del Servicio. Es responsable de la relación con los proveedores y el cumplimiento de los UC (Underpinning Contracts)."
                    },
                    {
                        pregunta: "El proceso de Gestión Financiera pertenece a la fase de:",
                        opciones: [
                            "Estrategia",
                            "Diseño",
                            "Transición",
                            "Operación"
                        ],
                        respuesta: 0,
                        explicacion: "El proceso de Gestión Financiera pertenece a la fase de Estrategia del Servicio. Es responsable de garantizar la prestación de servicios con unos costes controlados y una correcta relación calidad-precio."
                    },
                    {
                        pregunta: "¿Cuál es el objetivo principal de la fase de Mejora del Servicio?",
                        opciones: [
                            "Ofrecer mejores servicios adaptados a las cambiantes necesidades de los clientes",
                            "Gestionar la infraestructura tecnológica necesaria",
                            "Diseñar nuevos servicios para el catálogo",
                            "Coordinar el proceso de transición de servicios"
                        ],
                        respuesta: 0,
                        explicacion: "El objetivo de la Mejora del servicio es ofrecer mejores servicios adaptados a las siempre cambiantes necesidades de los clientes mediante procesos internos optimizados que permitan mayores retornos a la inversión y mayor satisfacción del cliente."
                    },
                    {
                        pregunta: "¿Cuántos pasos tiene el Proceso de Mejora según ITIL?",
                        opciones: [
                            "5 pasos",
                            "6 pasos",
                            "7 pasos",
                            "8 pasos"
                        ],
                        respuesta: 2,
                        explicacion: "El Proceso de Mejora es un proceso que consta de 7 pasos que describen cómo se deben medir la calidad y rendimiento de los procesos para generar los informes adecuados que permitan la creación de un Plan de Mejora del Servicio (SIP)."
                    }
                ]
            },
            {
                tema: "Tema 7: Sistema de Gestión de Servicios",
                preguntas: [
                    {
                        pregunta: "Si los servicios de TI que presta la organización son inestables, lentos o inexistentes:",
                        opciones: [
                            "La aplicación de la norma mejora su rendimiento sustancialmente.",
                            "Es el resultado de la falta de implicación de la alta dirección.",
                            "Es debido a una falta de aplicación del principio de innovación continua.",
                            "No sirve de nada el modelo de gestión que se implante."
                        ],
                        respuesta: 3,
                        explicacion: "Si los servicios de TI son inestables, lentos o inexistentes, no sirve de nada el modelo de gestión que se implante. La misión esencial de las TI es proveer servicios que faciliten la labor de las áreas de la organización."
                    },
                    {
                        pregunta: "La norma ISO/IEC 20000-1:2005:",
                        opciones: [
                            "Proporciona un catálogo de buenas prácticas en la gestión de servicios TI.",
                            "Regula la calidad del desarrollo de software.",
                            "Regula el control de la calidad de los servicio de TI.",
                            "Regula el sistema de gestión de servicios de TI."
                        ],
                        respuesta: 3,
                        explicacion: "La norma ISO/IEC 20000-1:2005 regula el sistema de gestión de servicios de TI. Fue traducida por AENOR como UNE-ISO/IEC 20000-1:2007 y representa el consenso internacional en la forma de gestionar los servicios de las TI."
                    },
                    {
                        pregunta: "Podemos decir que:",
                        opciones: [
                            "La serie de normas ISO/IEC 20000 ha refrendado a nivel internacional el catálogo de buenas prácticas COBIT.",
                            "El catálogo de buenas prácticas ITIL ha refrendado la serie de normas ISO/IEC 20000.",
                            "La serie de normas ISO/IEC 20000 ha refrendado a nivel internacional el catálogo de buenas prácticas ITIL.",
                            "La norma ISO/IEC 20000-1:2007 aporta un valor añadido a la de la edición 2005."
                        ],
                        respuesta: 2,
                        explicacion: "La serie de normas ISO/IEC 20000 ha refrendado a nivel internacional el catálogo de buenas prácticas ITIL. La norma ISO/IEC 20000-1 representa el consenso internacional sobre cómo gestionar los servicios de TI."
                    },
                    {
                        pregunta: "Esta norma facilita la resolución y gestión de problemáticas como:",
                        opciones: [
                            "Resolución rápida de incidentes en el servicio.",
                            "Realización de cambios de forma segura y eficiente.",
                            "Mejora en la provisión de nuevos servicios.",
                            "Todas las anteriores son correctas."
                        ],
                        respuesta: 3,
                        explicacion: "La norma ISO/IEC 20000-1 facilita la resolución rápida de incidentes, la realización de cambios seguros y eficientes, la mejora en la provisión de nuevos servicios, y muchas otras problemáticas relacionadas con la gestión de servicios TI."
                    },
                    {
                        pregunta: "Entre los principios que rigen la norma no se encuentra:",
                        opciones: [
                            "El cliente.",
                            "El servicio.",
                            "La reducción de costes.",
                            "La comunicación interna."
                        ],
                        respuesta: 2,
                        explicacion: "Los principios que rigen la norma son: el servicio, el cliente, la comunicación interna y los procesos internos. La reducción de costes no es un principio, aunque la norma sí ayuda a identificar y controlar costes."
                    },
                    {
                        pregunta: "Con la idea de evaluar la implantación de la familia de normas 20000 se crearon:",
                        opciones: [
                            "La ISO/IEC TR 20000-2 y 20000-3.",
                            "La ISO/IEC TR 20000-3 y 20000-4.",
                            "La ISO/IEC TR 20000-6 y 20000-8.",
                            "La ISO/IEC TR 20000-4 y 20000-8."
                        ],
                        respuesta: 3,
                        explicacion: "Para evaluar la implantación de las normas se crearon la ISO/IEC TR 20000-8 (Modelo de valoración de gestión del servicio) y la ISO/IEC TR 20000-4 (Modelo de referencia de procesos)."
                    },
                    {
                        pregunta: "La adopción incremental por niveles de la norma viene regulada en:",
                        opciones: [
                            "La ISO/IEC 20000-2.",
                            "La ISO/IEC 20000-3.",
                            "La ISO/IEC 20000-4.",
                            "La ISO/IEC 20000-5."
                        ],
                        respuesta: 3,
                        explicacion: "La adopción incremental mediante la aplicación paulatina de los niveles establecidos viene regulada en la ISO/IEC 20000-5. Esto permite una implementación gradual del sistema de gestión de servicios."
                    },
                    {
                        pregunta: "Entre los procesos en los que se agrupan las actividades de la norma, no se encuentra:",
                        opciones: [
                            "La provisión de servicio.",
                            "El control.",
                            "La configuración del servicio.",
                            "La resolución."
                        ],
                        respuesta: 2,
                        explicacion: "Los procesos en los que se agrupan las actividades son: Diseño y transición de servicios, Provisión del servicio, Control, Resolución y Relación. La configuración del servicio no es un grupo de procesos principal."
                    },
                    {
                        pregunta: "El proceso de generación de informes del servicio se encuentra entre los procesos de:",
                        opciones: [
                            "Provisión del servicio.",
                            "Control.",
                            "Resolución.",
                            "Relación."
                        ],
                        respuesta: 0,
                        explicacion: "El proceso de generación de informes del servicio se encuentra entre los procesos de provisión del servicio, junto con la gestión del nivel de servicio, continuidad y disponibilidad, presupuesto y contabilidad, gestión de capacidad y gestión de seguridad."
                    },
                    {
                        pregunta: "El diseño y transición de servicios nuevos o modificados tiene como misión:",
                        opciones: [
                            "El mantenimiento del nivel de servicio dentro de un óptimo.",
                            "La detección inmediata de errores.",
                            "El mantenerse alineado con la creación y evolución de servicios de negocio.",
                            "La comunicación interna."
                        ],
                        respuesta: 2,
                        explicacion: "El diseño y transición de servicios nuevos o modificados tiene como misión garantizar que los servicios de TI se puedan crear y entregar con la funcionalidad, costes y plazos acordados, manteniéndose alineado con la creación y evolución de servicios de negocio."
                    }
                ]
            }
        ]
    }
};

// Variables globales para el estado de la aplicación
let currentSection = 'conceptosClave';
let currentTest = null;
let testResults = {};
let currentQuestion = 0;

// DOM Elements
let currentTab = 'overview';
let currentTopic = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    setupEventListeners();
    loadTopics();
    updateProgress();
});

function initializeApp() {
    // Set initial tab
    showTab('overview');
}

function setupEventListeners() {
    // Navigation tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            const tabName = this.dataset.tab;
            showTab(tabName);
        });
    });

    // Modal functionality removed - topics now open in separate pages
}

function showTab(tabName) {
    // Update navigation
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

    // Update content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabName).classList.add('active');

    currentTab = tabName;
}

function loadTopics() {
    const topicsGrid = document.getElementById('topicsGrid');
    topicsGrid.innerHTML = '';

    courseData.topics.forEach(topic => {
        const topicCard = createTopicCard(topic);
        topicsGrid.appendChild(topicCard);
    });
}

function createTopicCard(topic) {
    const card = document.createElement('div');
    card.className = `topic-card ${topic.status}`;
    card.onclick = () => openTopicModal(topic.id);

    card.innerHTML = `
        <div class="topic-header">
            <div class="topic-icon" style="background-color: ${topic.color}">
                <i class="${topic.icon}"></i>
            </div>
            <div>
                <div class="topic-title">${topic.title}</div>
            </div>
        </div>
        <div class="topic-description">${topic.description}</div>
        <div class="topic-status">
            <span class="status-badge ${topic.status}">${getStatusText(topic.status)}</span>
        </div>
    `;

    return card;
}

// Funciones eliminadas - ahora se manejan a través del modal

function generateSectionHTML(content) {
    switch (content.title) {
        case 'Conceptos Clave':
            return generateConceptosHTML(content);
        case 'Casos de Estudio':
            return generateCasosHTML(content);
        case 'Autoevaluación':
            return generateAutoevaluacionHTML(content);
        default:
            return '<p>Contenido no disponible</p>';
    }
}

function generateConceptosHTML(content) {
    return content.items.map(item => `
        <div class="concepto-tema">
            <h3>${item.tema}</h3>
            <ul class="conceptos-list">
                ${item.conceptos.map(concepto => `
                    <li><i class="fas fa-check-circle"></i> ${concepto}</li>
                `).join('')}
            </ul>
        </div>
    `).join('');
}

function generateCasosHTML(content) {
    return content.items.map(item => `
        <div class="caso-tema">
            <h3>${item.tema}</h3>
            <div class="casos-grid">
                ${item.casos.map(caso => `
                    <div class="caso-card">
                        <h4>${caso.titulo}</h4>
                        <p class="caso-descripcion">${caso.descripcion}</p>
                        <div class="caso-desarrollo">
                            <h5>Desarrollo:</h5>
                            <p>${caso.desarrollo}</p>
                        </div>
                        <div class="caso-lecciones">
                            <h5>Lecciones aprendidas:</h5>
                            <p>${caso.lecciones}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function generateAutoevaluacionHTML(content) {
    return `
        <div class="autoevaluacion-container">
            <div class="test-selector">
                <h3>Selecciona un tema para evaluar:</h3>
                <div class="test-buttons">
                    ${content.items.map((item, index) => `
                        <button class="test-btn" onclick="startTest(${index})">
                            <i class="fas fa-play"></i>
                            ${item.tema}
                        </button>
                    `).join('')}
                </div>
            </div>
            <div id="test-container" style="display: none;">
                <div class="test-header">
                    <h3 id="test-title"></h3>
                    <div class="test-progress">
                        <span id="question-counter"></span>
                        <div class="progress-bar">
                            <div id="progress-fill"></div>
                        </div>
                    </div>
                </div>
                <div id="question-container"></div>
                <div id="test-results" style="display: none;"></div>
            </div>
        </div>
    `;
}

function startTest(temaIndex) {
    const tema = projectContent.autoevaluacion.items[temaIndex];
    currentTest = tema;
    currentQuestion = 0;
    testResults = { correctas: 0, total: tema.preguntas.length };
    
    document.getElementById('test-container').style.display = 'block';
    document.getElementById('test-title').textContent = tema.tema;
    
    showQuestion();
}

function showQuestion() {
    const pregunta = currentTest.preguntas[currentQuestion];
    const container = document.getElementById('question-container');
    
    container.innerHTML = `
        <div class="question-card">
            <h4>Pregunta ${currentQuestion + 1}</h4>
            <p class="question-text">${pregunta.pregunta}</p>
            <div class="options-container">
                ${pregunta.opciones.map((opcion, index) => `
                    <button class="option-btn" onclick="selectAnswer(${index})">
                        ${opcion}
                    </button>
                `).join('')}
            </div>
        </div>
    `;
    
    updateProgress();
}

function selectAnswer(selectedIndex) {
    const pregunta = currentTest.preguntas[currentQuestion];
    const isCorrect = selectedIndex === pregunta.respuesta;
    
    if (isCorrect) {
        testResults.correctas++;
    }
    
    // Mostrar explicación
    const container = document.getElementById('question-container');
    container.innerHTML = `
        <div class="question-card">
            <h4>Pregunta ${currentQuestion + 1}</h4>
            <p class="question-text">${pregunta.pregunta}</p>
            <div class="answer-explanation ${isCorrect ? 'correct' : 'incorrect'}">
                <h5>${isCorrect ? '✓ Correcto' : '✗ Incorrecto'}</h5>
                <p><strong>Respuesta correcta:</strong> ${pregunta.opciones[pregunta.respuesta]}</p>
                <p><strong>Explicación:</strong> ${pregunta.explicacion}</p>
            </div>
            <button class="next-btn" onclick="nextQuestion()">
                ${currentQuestion < currentTest.preguntas.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}
            </button>
        </div>
    `;
}

function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < currentTest.preguntas.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const percentage = Math.round((testResults.correctas / testResults.total) * 100);
    const container = document.getElementById('test-results');
    
    container.innerHTML = `
        <div class="results-card">
            <h3>Resultados del Test</h3>
            <div class="score-display">
                <div class="score-circle ${percentage >= 70 ? 'good' : percentage >= 50 ? 'average' : 'poor'}">
                    <span class="score-percentage">${percentage}%</span>
                </div>
                <p class="score-text">${testResults.correctas} de ${testResults.total} preguntas correctas</p>
            </div>
            <div class="score-message">
                ${percentage >= 70 ? 
                    '<p class="success">¡Excelente! Has demostrado un buen dominio del tema.</p>' :
                    percentage >= 50 ?
                    '<p class="warning">Bien, pero puedes mejorar. Te recomendamos repasar el contenido.</p>' :
                    '<p class="error">Necesitas estudiar más este tema. Revisa los conceptos clave.</p>'
                }
            </div>
            <div class="test-actions">
                <button class="retry-btn" onclick="retryTest()">
                    <i class="fas fa-redo"></i> Repetir Test
                </button>
                <button class="back-btn" onclick="backToTestSelector()">
                    <i class="fas fa-arrow-left"></i> Volver a Tests
                </button>
            </div>
        </div>
    `;
    
    container.style.display = 'block';
    document.getElementById('question-container').style.display = 'none';
}

// Funciones para manejar los cards principales y el modal
function openSection(sectionName) {
    const content = projectContent[sectionName];
    if (!content) return;
    
    // Configurar el modal
    document.getElementById('modalTitle').textContent = content.title;
    document.getElementById('modalBody').innerHTML = `
        <div class="section-header">
            <i class="${content.icon}"></i>
            <h2>${content.title}</h2>
            <p>${content.description}</p>
        </div>
        <div class="section-body">
            ${generateSectionHTML(content)}
        </div>
    `;
    
    // Mostrar el modal
    document.getElementById('sectionModal').style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeSectionModal() {
    document.getElementById('sectionModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('sectionModal');
    if (event.target === modal) {
        closeSectionModal();
    }
}

// Cerrar modal con tecla Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeSectionModal();
    }
});

// Funciones para manejar los botones del test
function retryTest() {
    if (!currentTest) return;
    
    // Encontrar el índice del tema actual
    const temaIndex = projectContent.autoevaluacion.items.findIndex(item => item.tema === currentTest.tema);
    
    // Reiniciar el test
    startTest(temaIndex);
}

function backToTestSelector() {
    // Ocultar el contenedor del test
    document.getElementById('test-container').style.display = 'none';
    
    // Mostrar el selector de tests
    const testSelector = document.querySelector('.test-selector');
    if (testSelector) {
        testSelector.style.display = 'block';
    }
    
    // Limpiar variables
    currentTest = null;
    currentQuestion = 0;
    testResults = {};
}

function getStatusText(status) {
    const statusTexts = {
        completed: 'Completado',
        'in-progress': 'En Progreso',
        pending: 'Pendiente'
    };
    return statusTexts[status] || 'Desconocido';
}

function openTopicModal(topicId) {
    const topic = courseData.topics.find(t => t.id === topicId);
    
    if (!topic) {
        alert('Tema no encontrado.');
        return;
    }
    
    if (topic.status === 'completed') {
        // Redirigir a la página individual del tema
        window.location.href = `Tema${topicId}/tema${topicId}.html`;
    } else {
        alert('Contenido no disponible aún. Este tema se desarrollará en futuras clases.');
    }
}

// Modal functions removed - topics now open in separate pages

function updateProgress() {
    const completedTopics = courseData.topics.filter(topic => topic.status === 'completed').length;
    const totalTopics = courseData.topics.length;
    const progressPercentage = Math.round((completedTopics / totalTopics) * 100);
    
    document.getElementById('progressFill').style.width = `${progressPercentage}%`;
    document.getElementById('progressText').textContent = `Progreso: ${completedTopics}/${totalTopics} semanas (${progressPercentage}%)`;
    
    // Update progress stats
    document.querySelector('.stat-card:nth-child(1) .stat-number').textContent = `${completedTopics}/${totalTopics}`;
    document.querySelector('.stat-card:nth-child(2) .stat-number').textContent = `3/3`;
    document.querySelector('.stat-card:nth-child(3) .stat-number').textContent = `${progressPercentage}%`;
}

// Global functions available
