const DATA = {
  "metadata": {
    "generado": "2025-12-10 23:45",
    "total": 19,
    "indice_ia2_general": 1.8
  },
  "oportunidades": [
    {
      "id": "01",
      "nombre": "Reconocimiento a Quienes Enseñan y Comparten",
      "tipo": "Quick Win",
      "area": "Cultura",
      "esfuerzo": "Bajo",
      "estado": "Idea",
      "plazo": "Corto (≤1 mes)",
      "problema": "El conocimiento sobre IA en Brinca está concentrado en pocos \"héroes\" que resuelven problemas, crean prompts efectivos y descubren mejores prácticas, pero este conocimiento rara vez se documenta o transfiere. **No existen incentivos visibles para compartir**: quienes invierten tiempo en enseñar, documentar o curar activos no reciben reconocimiento diferenciado frente a quienes solo consumen.\n\nEsto genera un círculo vicioso: los expertos no tienen motivación para compartir → el conocimiento queda tácito → otros reinventan la rueda → la adopción es desigual y lenta → el repositorio de activos no crece ni mejora.\n\nSin un sistema de reconocimiento, la cultura de compartir no se sostiene y Brinca pierde la oportunidad de convertir el conocimiento individual en capacidad organizacional.\n\n---",
      "solucion": "Implementar un **sistema de gamificación ligero** que haga visible y valore las contribuciones al ecosistema de IA:\n\n**Componentes:**\n1. **Badges por tipo de contribución:**\n   - 🎯 *Contributor*: Publica prompt/playbook validado al repositorio\n   - 🎓 *Teacher*: Dicta microclase, Office Hour o resuelve caso en vivo\n   - 🔧 *Problem Solver*: Resuelve caso documentado de otro equipo\n   - 📚 *Curator*: Revisa y mejora activos existentes\n\n2. **Sistema de puntos simple:**\n   - Publicar prompt curado: 10 pts\n   - Resolver caso en Office Hours: 15 pts\n   - Dictar microclase (15-30 min): 25 pts\n   - Curar/mejorar activo existente: 5 pts\n\n3. **Visibilidad:**\n   - Tablero mensual público en Google Sheets con top contributors\n   - Pantalla de Brinca mostrando rankings y ejemplos destacados de contribuciones\n   - Mención en Show & Tell IA mensual\n   - Reconocimiento en All Hands trimestral para top 3\n\n4. **Beneficios tangibles:**\n   - Conversión de puntos del sistema a Puntos Brinca (canjeables por beneficios existentes)\n   - Prioridad en capacitaciones avanzadas de IA\n   - Input en decisiones de roadmap IA\n\n---",
      "impacto": [
        "Mayor volumen de contribuciones: De ~2-3 activos/mes a 8-10 activos/mes en el repositorio",
        "Mejor calidad promedio: Incentivo a curar, no solo publicar; activos revisados por pares",
        "Distribución del conocimiento: Reducir dependencia de 3-4 \"héroes\" a red de 10-15 contributors activos",
        "Cultura de generosidad: Normalizar que compartir es parte del trabajo, no extra",
        "Pipeline de AI Champions: Identificar naturalmente a quienes podrían liderar la red formal",
        "Más ejemplos replicables: Casos documentados que otros equipos pueden adaptar"
      ],
      "dependencias": {
        "prerrequisitos": [
          {
            "id": "06",
            "nombre": "Repositorio de prompts",
            "relacion": "Necesario para que las contribuciones tengan dónde publicarse"
          }
        ],
        "potencia": [
          {
            "id": "02",
            "nombre": "Office Hours",
            "relacion": "Espacio donde se pueden ganar puntos como Teacher/Problem Solver"
          },
          {
            "id": "04",
            "nombre": "Show & Tell",
            "relacion": "Foro para dar visibilidad a top contributors mensualmente"
          },
          {
            "id": "05",
            "nombre": "Red AI Champions",
            "relacion": "Los top contributors son candidatos naturales para la red"
          }
        ]
      },
      "criterio_exito": {
        "done": [
          "Sistema de badges y puntos definido y documentado",
          "Tablero de tracking publicado y accesible a todos",
          "Formulario de registro de contribuciones funcionando",
          "Comunicación de lanzamiento enviada a toda la organización",
          "Al menos 5 contribuciones registradas (pueden ser retroactivas)"
        ],
        "success": [
          ">10 contribuciones/mes sostenidas por 2+ meses",
          ">8 autores distintos activos",
          "Sistema mencionado en al menos 2 All Hands",
          "Al menos 1 persona ha alcanzado nivel \"Teacher\" o superior"
        ]
      },
      "valor": "**Beneficio principal**: Cultura de compartir que habilita todas las otras iniciativas de IA; sin esto, el repositorio queda vacío y los Office Hours sin casos.\n\n**Costo de no hacer**: Conocimiento sigue concentrado en 3-4 \"héroes\"; adopción desigual entre áreas; repositorio de activos no crece; otros reinventan la rueda.\n\n**Esfuerzo vs Impacto**: Bajo esfuerzo (~6h setup + 1h/mes operación), alto impacto cultural y habilitador.\n\n---",
      "conexion_ia2": {
        "conexiones": [
          {
            "dimension": "Cultura",
            "subdimension": "Incentivos y reconocimiento",
            "score_actual": "2.1",
            "impacto": "+0.8 a +1.2 (directo)"
          },
          {
            "dimension": "Cultura",
            "subdimension": "Comunidad de práctica",
            "score_actual": "2.1",
            "impacto": "+0.3 a +0.5 (directo)"
          },
          {
            "dimension": "Adopción",
            "subdimension": "Activos reutilizables",
            "score_actual": "2.3",
            "impacto": "+0.5 (indirecto)"
          }
        ],
        "justificacion": "Esta oportunidad ataca directamente \"Incentivos y reconocimiento\" (hoy en 2.1) al crear un sistema formal de badges y puntos que hace visible quién contribuye. El impacto en \"Comunidad de práctica\" viene de identificar y conectar a los contributors activos. El efecto en \"Activos reutilizables\" es indirecto: más incentivos → más contribuciones → más activos en el repositorio."
      },
      "primeros_pasos": [
        "Definir criterios de contribución válida con equipo PIA: qué cuenta como contribución, qué calidad mínima, cómo evitar gaming",
        "Diseñar sistema de badges y puntos en documento compartido; validar con 2-3 personas de distintas áreas",
        "Crear tablero en Google Sheets con fórmulas de cálculo automático y formulario de registro de contribuciones",
        "Comunicar lanzamiento en All Hands con ejemplo de primeras contribuciones (reconocer retroactivamente a quienes ya han compartido)",
        "Integrar revisión mensual al Show & Tell: anunciar top contributors, entregar badges acumulados"
      ],
      "kpis": [
        {
          "nombre": "Contribuciones/mes",
          "descripcion": "# prompts + playbooks + casos publicados (baseline: ~2-3, target: 8-10)",
          "baseline": "~2-3",
          "target": "8-10"
        },
        {
          "nombre": "Autores activos",
          "descripcion": "# personas distintas que contribuyen por mes (baseline: ~2, target: 10-15)",
          "baseline": "~2",
          "target": "10-15"
        },
        {
          "nombre": "Tasa de reutilización",
          "descripcion": "% activos usados por alguien que no es el autor (baseline: desconocido, target: >30%)",
          "baseline": "desconocido",
          "target": ">30%"
        },
        {
          "nombre": "Engagement del sistema",
          "descripcion": "% colaboradores que revisan el tablero mensual (target: >50%)",
          "target": ">50%"
        }
      ],
      "recursos_habilitantes": {
        "recursos": [
          "Comunicación interna",
          "Tablero en Google Sheets"
        ],
        "horas": [
          {
            "fase": "**Implementación** (2 sem)",
            "rol": "Comunicación interna",
            "horas": "2h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Administrador tablero",
            "horas": "0.5h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Revisión mensual",
            "horas": "0.5h/mes"
          }
        ],
        "habilitantes": [
          {
            "nombre": "Canales de comunicación interna",
            "descripcion": "Medio para publicar tablero y reconocimientos (Google Chat, correo, All Hands)",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Pantalla de Brinca",
            "descripcion": "Pantalla física para transmitir información; ideal para mostrar rankings y ejemplos destacados",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Espacios de transmisión de conocimiento",
            "descripcion": "Office Hours, Show & Tell u otros foros donde se pueda enseñar y reconocer",
            "estado": "🔄 En diseño (ver fichas 02, 04)"
          },
          {
            "nombre": "Repositorio de activos IA",
            "descripcion": "Lugar centralizado donde publicar prompts/playbooks para que cuenten como contribución",
            "estado": "🔄 En diseño (ver ficha 06)"
          },
          {
            "nombre": "Criterios claros de contribución",
            "descripcion": "Definición de qué cuenta como \"contribución válida\" para evitar gaming",
            "estado": "⏳ Por definir"
          },
          {
            "nombre": "Herramienta de tracking",
            "descripcion": "Google Sheets para registrar puntos y badges (no requiere sistema complejo)",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Patrocinio de liderazgo",
            "descripcion": "Gerencia debe dar visibilidad y legitimidad al sistema; mencionar en reuniones",
            "estado": "✅ Comprometido"
          },
          {
            "nombre": "Sistema Puntos Brinca",
            "descripcion": "Sistema de puntos existente asociado a beneficios; permite dar valor tangible al reconocimiento",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Tiempo protegido para contribuir",
            "descripcion": "Sin tiempo asignado, nadie va a documentar; requiere acuerdo con jefaturas",
            "estado": "⚠️ Crítico - negociar"
          }
        ]
      },
      "riesgos": [
        {
          "riesgo": "Nadie contribuye activos al repositorio",
          "mitigacion": "Comenzar con reconocimiento a contribuciones existentes; no esperar nuevas"
        },
        {
          "riesgo": "Sistema de puntos se percibe como burocrático",
          "mitigacion": "Mantenerlo simple: máximo 3-4 categorías de badges"
        },
        {
          "riesgo": "Falta de tiempo para administrar el sistema",
          "mitigacion": "Automatizar con formulario + sheet; revisión mensual de 30 min"
        },
        {
          "riesgo": "Reconocimiento sin valor real (solo simbólico)",
          "mitigacion": "Vincular a Puntos Brinca y beneficios tangibles (prioridad en capacitaciones, reconocimiento en All Hands)"
        }
      ],
      "owner": {
        "responsable": "Líder de Cultura / Personas",
        "sponsor": "Gerencia General"
      }
    },
    {
      "id": "02",
      "nombre": "Office Hours Quincenales Multiárea",
      "tipo": "Quick Win",
      "area": "Cultura / PIA",
      "esfuerzo": "Bajo",
      "estado": "Idea",
      "plazo": "Corto (≤1 mes)",
      "problema": "Cuando alguien en Brinca se bloquea usando IA —un prompt que no funciona, una tarea que no sabe cómo abordar, una herramienta que no entiende— **no tiene dónde acudir de forma estructurada**. La ayuda llega de manera ad-hoc: preguntando en Google Chat sin respuesta garantizada, interrumpiendo al \"experto\" del área, o simplemente abandonando el intento.\n\nEsta dinámica genera varios problemas:\n- **Tiempo perdido**: Cada persona resuelve (o no) el mismo problema por separado\n- **Conocimiento desperdiciado**: Las soluciones encontradas no se documentan ni comparten\n- **Adopción desigual**: Quienes tienen acceso a los \"héroes\" avanzan; el resto se estanca\n- **Frustración**: Sin soporte visible, la IA se percibe como difícil o poco confiable\n- **Carga concentrada**: Los pocos expertos se convierten en cuello de botella\n\nFalta una **ventanilla transversal y predecible** donde cualquier persona pueda traer sus dudas, ver cómo otros resuelven problemas, y llevarse aprendizajes aplicables.\n\n---",
      "solucion": "Implementar **Office Hours de IA quincenales** (45-60 min) como espacio abierto para resolver dudas, revisar prompts en vivo y compartir aprendizajes entre áreas:\n\n**Formato:**\n1. **Apertura (5 min)**: Recordar propósito y reglas; revisar backlog de preguntas previas\n2. **Casos en vivo (35-40 min)**: 2-3 casos traídos por participantes, resueltos con facilitador\n3. **Tips rápidos (10 min)**: 1-2 aprendizajes o trucos del facilitador\n4. **Cierre (5 min)**: Resumen de lo aprendido; llamado a contribuir al repositorio\n\n**Mecánica:**\n- **Backlog de preguntas**: Formulario abierto donde cualquiera puede enviar casos/dudas antes de la sesión\n- **Facilitadores rotativos**: 2-3 personas capacitadas que se turnan (evitar dependencia de uno solo)\n- **Grabación y minutas**: Cada sesión se graba; minuta breve con problema → solución → prompt resultante\n- **Canal de seguimiento**: Google Chat/Teams donde continuar discusiones post-sesión\n\n**Tipos de casos a resolver:**\n- \"Este prompt no me da buenos resultados\" → ajuste en vivo\n- \"¿Cómo uso IA para [tarea específica]?\" → demostración práctica\n- \"¿Qué herramienta uso para [necesidad]?\" → recomendación y comparación\n- \"¿Alguien ya resolvió [problema similar]?\" → conexión con casos previos\n\n---",
      "impacto": [
        "Resolución más rápida de bloqueos: De días esperando ayuda informal a máximo 2 semanas hasta el próximo Office Hour",
        "Aprendizaje cruzado entre áreas: EIC aprende trucos de GT; Upskill ve cómo Comercial usa IA",
        "Documentación incremental: Cada sesión genera 2-3 soluciones documentadas para el repositorio",
        "Incremento de confianza: Ver a otros resolver problemas similares reduce la barrera de entrada",
        "Identificación de patrones: Preguntas recurrentes revelan gaps de capacitación o herramientas",
        "Descompresión de expertos: Canal formal reduce interrupciones ad-hoc a los \"héroes\"",
        "Comunidad de práctica emergente: Base para futura red de AI Champions"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": [
          {
            "id": "06",
            "nombre": "Repositorio de prompts",
            "relacion": "Lugar donde publicar las soluciones documentadas de cada sesión"
          },
          {
            "id": "01",
            "nombre": "Reconocimiento a quienes enseñan",
            "relacion": "Facilitadores ganan puntos como Teachers; casos resueltos generan contribuciones"
          },
          {
            "id": "05",
            "nombre": "Red AI Champions",
            "relacion": "Office Hours es espacio donde AI Champions pueden emerger y practicar facilitación"
          }
        ]
      },
      "criterio_exito": {
        "done": [
          "Calendario de sesiones definido y publicado (mínimo 6 sesiones programadas)",
          "Al menos 2 facilitadores identificados y comprometidos",
          "Formulario de backlog de preguntas creado y comunicado",
          "Plantilla de minuta diseñada y probada",
          "Primera sesión realizada con al menos 5 participantes"
        ],
        "success": [
          "Asistencia promedio >8 personas por sesión",
          ">80% de sesiones realizadas según calendario",
          ">15 casos resueltos y documentados",
          "NPS del espacio >7 (encuesta trimestral)"
        ]
      },
      "valor": "**Beneficio principal**: Canal estructurado de soporte que reduce frustración, acelera resolución de bloqueos y genera documentación incremental de soluciones replicables.\n\n**Costo de no hacer**: Bloqueos sin resolver por días o semanas; conocimiento queda tácito en quienes resuelven solos; los \"héroes\" siguen sobrecargados con interrupciones ad-hoc; la adopción de IA se estanca en quienes ya saben.\n\n**Esfuerzo vs Impacto**: Bajo esfuerzo (~3h setup + 2h/quincena operación), alto impacto en adopción y cultura.\n\n---",
      "conexion_ia2": {
        "conexiones": [
          {
            "dimension": "Cultura",
            "subdimension": "Rituales y tiempo protegido",
            "score_actual": "2.1",
            "impacto": "+0.5 a +0.8 (directo)"
          },
          {
            "dimension": "Cultura",
            "subdimension": "Comunidad de práctica",
            "score_actual": "2.1",
            "impacto": "+0.3 a +0.5 (directo)"
          },
          {
            "dimension": "Adopción",
            "subdimension": "Habilitación por rol",
            "score_actual": "2.3",
            "impacto": "+0.3 (directo)"
          },
          {
            "dimension": "Adopción",
            "subdimension": "Sostenimiento",
            "score_actual": "2.3",
            "impacto": "+0.2 (indirecto)"
          }
        ],
        "justificacion": "Los Office Hours crean un ritual quincenal protegido donde la organización invierte tiempo explícito en resolver problemas de IA, atacando directamente la subdimensión \"Rituales y tiempo protegido\" (hoy en 2.1). El formato multiárea fomenta la comunidad de práctica emergente al conectar personas de distintas áreas. El impacto en Adopción viene de desbloquear a quienes se estancan y habilitar que más personas usen IA efectivamente en sus roles."
      },
      "primeros_pasos": [
        "Definir horario y facilitadores con equipo PIA: elegir bloque quincenal que funcione para todas las áreas; identificar 2-3 facilitadores rotativos y confirmar su compromiso",
        "Crear formulario de backlog en Google Forms con campos: descripción del problema, contexto/área, herramienta usada, nivel de urgencia",
        "Diseñar plantilla de minuta estándar: Caso → Contexto → Solución → Prompt/recurso resultante → Tags para búsqueda futura",
        "Compilar FAQ inicial con las 10 preguntas más frecuentes basadas en conversaciones en Google Chat y consultas previas al equipo PIA",
        "Comunicar y lanzar primera sesión con tema semilla preparado; invitar a toda la organización vía correo y Google Chat con instrucciones claras de cómo participar"
      ],
      "kpis": [
        {
          "nombre": "Asistencia promedio",
          "descripcion": "# participantes por sesión (baseline: 0, target: >8)",
          "baseline": "0",
          "target": ">8"
        },
        {
          "nombre": "Casos resueltos/mes",
          "descripcion": "# problemas abordados y documentados por mes (baseline: 0, target: 4-6)",
          "baseline": "0",
          "target": "4-6"
        },
        {
          "nombre": "Contribuciones al repositorio",
          "descripcion": "# prompts/soluciones publicadas desde Office Hours (baseline: 0, target: 2-3/mes)",
          "baseline": "0",
          "target": "2-3/mes"
        },
        {
          "nombre": "NPS del espacio",
          "descripcion": "Satisfacción de participantes medida trimestralmente (target: >7)",
          "target": ">7"
        },
        {
          "nombre": "Tasa de asistencia repetida",
          "descripcion": "% de asistentes que vuelven a una segunda sesión (target: >50%)",
          "target": ">50%"
        }
      ],
      "recursos_habilitantes": {
        "recursos": [
          "Facilitadores capacitados (2-3 personas con conocimiento amplio de IA y habilidad para explicar)",
          "Bloque de calendario quincenal protegido (45-60 min)",
          "Google Forms para backlog de preguntas",
          "Google Meet con grabación habilitada",
          "Plantilla de minuta en Google Docs",
          "Canal de Google Chat para seguimiento post-sesión"
        ],
        "horas": [
          {
            "fase": "**Implementación** (2 sem)",
            "rol": "Líder PIA (setup)",
            "horas": "3h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Facilitador (sesión quincenal)",
            "horas": "1.5h/sem promedio"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Documentador (minutas)",
            "horas": "0.5h/sem promedio"
          }
        ],
        "habilitantes": [
          {
            "nombre": "Bloque de calendario protegido",
            "descripcion": "Horario fijo quincenal que todos puedan bloquear; idealmente horario que funcione para todas las áreas",
            "estado": "⏳ Por agendar"
          },
          {
            "nombre": "Facilitadores capacitados",
            "descripcion": "2-3 personas con conocimiento amplio de IA y habilidad para explicar; deben rotar",
            "estado": "🔄 Identificar candidatos"
          },
          {
            "nombre": "Formulario de backlog",
            "descripcion": "Google Form o similar para recibir preguntas antes de cada sesión",
            "estado": "✅ Fácil de crear"
          },
          {
            "nombre": "Herramienta de videollamada con grabación",
            "descripcion": "Google Meet con grabación habilitada o similar",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Canal de comunicación post-sesión",
            "descripcion": "Google Chat/Teams para seguimiento de temas que quedaron pendientes",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Plantilla de minuta",
            "descripcion": "Formato estándar: Caso → Contexto → Solución → Prompt/recurso resultante",
            "estado": "⏳ Por diseñar"
          },
          {
            "nombre": "Repositorio de activos IA",
            "descripcion": "Lugar donde publicar las soluciones documentadas de cada sesión",
            "estado": "🔄 En diseño (ver ficha 06)"
          },
          {
            "nombre": "Patrocinio de jefaturas",
            "descripcion": "Líderes deben permitir/promover que sus equipos asistan",
            "estado": "✅ Comprometido"
          },
          {
            "nombre": "FAQ inicial",
            "descripcion": "Documento con las 10 preguntas más frecuentes para no repetir en cada sesión",
            "estado": "⏳ Por crear"
          }
        ]
      },
      "riesgos": [
        {
          "riesgo": "Baja asistencia / nadie tiene preguntas",
          "mitigacion": "Preparar tema de respaldo; enviar recordatorio con \"pregunta de la quincena\""
        },
        {
          "riesgo": "Facilitadores no disponibles",
          "mitigacion": "Rotar entre 2-3 personas; grabar sesiones para quienes no asistan"
        },
        {
          "riesgo": "Preguntas muy básicas o repetitivas",
          "mitigacion": "Crear FAQ inicial; derivar a documentación existente"
        },
        {
          "riesgo": "Se convierte en sesión de quejas sin solución",
          "mitigacion": "Establecer formato: problema → solución → siguiente paso concreto"
        }
      ],
      "owner": {
        "responsable": "Líder PIA",
        "sponsor": "Gerencia General"
      }
    },
    {
      "id": "03",
      "nombre": "Captura de Conocimiento en Reuniones",
      "tipo": "Quick Win",
      "area": "Cultura / EIC / PIA",
      "esfuerzo": "Bajo",
      "estado": "Idea",
      "plazo": "Corto (≤1 mes)",
      "problema": "Las reuniones en Brinca generan decisiones, compromisos y aprendizajes valiosos que **quedan en la memoria de los asistentes o en notas dispersas** sin formato estándar. Cuando alguien necesita recuperar qué se acordó en una reunión de hace dos semanas, la información simplemente no está disponible o requiere preguntar a múltiples personas.\n\nEste problema se agrava cuando queremos usar IA para ayudar: sin transcripciones ni datos estructurados, la IA no tiene insumos de calidad para generar resúmenes, extraer acciones o identificar patrones. **Es el clásico \"basura entra, basura sale\"**.\n\nLa situación genera un círculo vicioso: no hay datos limpios → la IA genera resultados pobres → se abandona el uso de IA para reuniones → se sigue perdiendo información → nadie documenta porque \"total, nadie lo lee\".\n\nSin hábitos comunes de grabación, transcripción y documentación estructurada, Brinca pierde conocimiento organizacional valioso y no puede aprovechar la IA para automatizar tareas de seguimiento.\n\n---",
      "solucion": "Implementar un **paquete de hábitos IA-first** para documentación de reuniones que genere datos estructurados listos para ser procesados por IA:\n\n**Componentes:**\n\n1. **Grabación con consentimiento**\n   - Protocolo claro de cuándo grabar (kick-offs, retrospectivas, sesiones de diseño)\n   - Aviso explícito al inicio de cada reunión grabada\n   - Checklist de consentimiento para cumplir con normas de privacidad\n\n2. **Transcripción automática**\n   - Activar transcripción nativa de Google Meet\n   - Transcripción se guarda automáticamente en Drive asociado a la reunión\n\n3. **Plantilla de minuta IA-ready**\n   - Formato estándar con secciones: Asistentes, Contexto, Decisiones, Tareas (con dueño y fecha), Próximos pasos\n   - Diseñada para que un prompt pueda extraer información estructurada\n\n4. **Convención de nombres y metadatos**\n   - Nomenclatura: `[ÁREA]-[PROYECTO]-[TIPO]-YYYYMMDD` (ej: `EIC-ProyectoX-Kickoff-20241215`)\n   - Tags obligatorios: área, proyecto, tipo de reunión\n\n5. **Repositorio centralizado**\n   - Carpeta única en Drive con estructura por área\n   - Subcarpetas por proyecto y tipo de reunión\n   - Índice navegable con links a transcripciones y minutas\n\n**Mecánica:**\n1. Al agendar reunión → facilitador decide si se graba (según criterio)\n2. Al iniciar → activa grabación y anuncia a asistentes\n3. Al terminar → transcripción se procesa con prompt estándar para generar minuta borrador\n4. Facilitador revisa, completa y publica en repositorio con nombre y tags\n\n---",
      "impacto": [
        "Tiempo en generar minutas: De ~30 min redactando manualmente a ~5 min revisando resumen generado por IA",
        "Trazabilidad de decisiones: De \"alguien dijo algo en alguna reunión\" a registro con fecha, contexto y responsable",
        "Datos para IA: De 0 transcripciones procesables a repositorio de conocimiento estructurado y buscable",
        "Consistencia entre áreas: De cada equipo con su formato (o sin formato) a plantilla estándar Brinca",
        "Recuperación de información: De preguntar a 3 personas a buscar en repositorio con tags",
        "Aprendizaje organizacional: Patrones y decisiones pasadas accesibles para nuevos integrantes"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": [
          {
            "id": "06",
            "nombre": "Repositorio de prompts",
            "relacion": "Prompts validados para procesar transcripciones y generar minutas"
          },
          {
            "id": "01",
            "nombre": "Reconocimiento a quienes enseñan",
            "relacion": "Equipos que adopten consistentemente los hábitos ganan puntos"
          },
          {
            "id": "02",
            "nombre": "Office Hours",
            "relacion": "Espacio para resolver dudas sobre implementación de los hábitos"
          }
        ]
      },
      "criterio_exito": {
        "done": [
          "Plantilla de minuta publicada en Drive compartido",
          "Checklist de consentimiento creado y comunicado",
          "Carpeta centralizada con estructura y convención de nombres definida",
          "Transcripción habilitada en cuentas Google Meet",
          "Prompt para procesar transcripciones validado",
          "Piloto iniciado con 3 equipos"
        ],
        "success": [
          ">50% de reuniones tipo kick-off/retrospectiva grabadas en equipos piloto",
          ">80% de minutas usan plantilla estándar en equipos piloto",
          "Al menos 20 transcripciones procesadas con IA",
          "Feedback positivo de usuarios (NPS >7)"
        ]
      },
      "valor": "**Beneficio principal**: Datos estructurados que alimentan a la IA para generar resúmenes, extraer acciones y habilitar aprendizaje organizacional. Sin datos limpios, la IA no puede ayudar.\n\n**Costo de no hacer**: Información sigue dispersa en memorias y notas personales; la IA genera resultados pobres por falta de insumos; se sigue perdiendo conocimiento valioso en cada reunión.\n\n**Esfuerzo vs Impacto**: Bajo esfuerzo (~10h setup + 2h/sem operación inicial), alto impacto en calidad de datos para IA y trazabilidad organizacional.\n\n---",
      "conexion_ia2": {
        "conexiones": [
          {
            "dimension": "Cultura",
            "subdimension": "Rituales y tiempo protegido",
            "score_actual": "2.1",
            "impacto": "+0.3 a +0.5 (directo)"
          },
          {
            "dimension": "Adopción",
            "subdimension": "Activos reutilizables",
            "score_actual": "2.3",
            "impacto": "+0.3 (directo)"
          },
          {
            "dimension": "Eficiencia",
            "subdimension": "Calidad/retrabajo",
            "score_actual": "1.6",
            "impacto": "+0.2 (indirecto)"
          }
        ],
        "justificacion": "Esta oportunidad crea un ritual de documentación que genera datos estructurados reutilizables. Las transcripciones y minutas son insumos directos para que la IA funcione bien, atacando el problema de \"basura entra, basura sale\". El impacto en Eficiencia es indirecto: menos tiempo buscando información y menos retrabajo por decisiones olvidadas."
      },
      "primeros_pasos": [
        "Validar capacidad de transcripción con TI: revisar qué incluye el plan actual de Google Workspace; confirmar que Meet puede transcribir automáticamente",
        "Diseñar plantilla de minuta IA-ready en Google Docs: crear formato con secciones estándar (Asistentes, Contexto, Decisiones, Tareas, Próximos pasos); probar que un prompt pueda procesarla",
        "Definir convención de nombres y estructura de carpeta en Drive: crear carpeta raíz, subcarpetas por área, documentar nomenclatura en README",
        "Crear checklist de consentimiento para grabación: definir qué reuniones SÍ grabar por defecto, template de aviso al inicio, protocolo si alguien se opone",
        "Lanzar piloto de 4 semanas con 3 equipos: seleccionar equipos motivados (ej: PIA, un equipo de EIC, un equipo de GT); medir adopción semanalmente; ajustar basado en feedback"
      ],
      "kpis": [
        {
          "nombre": "% reuniones clave grabadas",
          "descripcion": "% de kick-offs, retrospectivas y sesiones de diseño grabadas con consentimiento (baseline: ~5%, target: >50% en equipos piloto)",
          "baseline": "~5%",
          "target": ">50% en equipos piloto"
        },
        {
          "nombre": "% minutas con plantilla estándar",
          "descripcion": "% de minutas que usan el formato definido con decisiones y dueños (baseline: ~10%, target: >80% en equipos piloto)",
          "baseline": "~10%",
          "target": ">80% en equipos piloto"
        },
        {
          "nombre": "Transcripciones procesadas con IA/mes",
          "descripcion": "# de transcripciones convertidas en minutas usando el prompt estándar (baseline: 0, target: 20+)",
          "baseline": "0",
          "target": "20+"
        },
        {
          "nombre": "Tiempo promedio en generar minuta",
          "descripcion": "minutos desde fin de reunión hasta minuta publicada (baseline: ~30 min manual, target: <10 min con IA)",
          "baseline": "~30 min manual",
          "target": "<10 min con IA"
        }
      ],
      "recursos_habilitantes": {
        "recursos": [
          "Licencias Meet con transcripción",
          "Plantillas en Docs",
          "Curador de conocimiento",
          "Encargado por área",
          "Soporte TI para permisos y accesos"
        ],
        "horas": [
          {
            "fase": "**Implementación** (3 sem)",
            "rol": "Líder PIA + TI",
            "horas": "4h/sem"
          },
          {
            "fase": "**Implementación** (3 sem)",
            "rol": "Curador conocimiento",
            "horas": "2h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Encargado por área (4 áreas)",
            "horas": "0.5h/sem c/u"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Curador conocimiento",
            "horas": "1h/sem"
          }
        ],
        "habilitantes": [
          {
            "nombre": "Licencias Google Meet con transcripción",
            "descripcion": "Capacidad de transcribir automáticamente reuniones",
            "estado": "⏳ Por validar (revisar plan actual)"
          },
          {
            "nombre": "Plantilla de minuta estándar",
            "descripcion": "Formato IA-ready con decisiones, tareas, dueños",
            "estado": "⏳ Por crear"
          },
          {
            "nombre": "Carpeta centralizada en Drive",
            "descripcion": "Repositorio único con estructura por área",
            "estado": "✅ Disponible (crear estructura)"
          },
          {
            "nombre": "Convención de nombres",
            "descripcion": "Nomenclatura estándar para archivos",
            "estado": "⏳ Por definir"
          },
          {
            "nombre": "Prompt para procesar transcripciones",
            "descripcion": "Prompt validado para extraer acciones de transcripción",
            "estado": "🔄 En diseño (ver ficha 06)"
          },
          {
            "nombre": "Checklist de consentimiento",
            "descripcion": "Protocolo legal y comunicación a equipos",
            "estado": "⏳ Por crear"
          },
          {
            "nombre": "Patrocinio de jefaturas",
            "descripcion": "Líderes promueven la práctica en sus equipos",
            "estado": "✅ Comprometido"
          },
          {
            "nombre": "Equipos piloto identificados",
            "descripcion": "3 equipos motivados para probar primero",
            "estado": "⏳ Por seleccionar"
          }
        ]
      },
      "riesgos": [
        {
          "riesgo": "Resistencia a grabar reuniones (privacidad)",
          "mitigacion": "Hacer opt-in; definir qué reuniones SÍ grabar (ej: kick-offs, retrospectivas)"
        },
        {
          "riesgo": "Problemas legales por grabación sin consentimiento",
          "mitigacion": "Crear checklist de consentimiento explícito; avisar al inicio de cada reunión"
        },
        {
          "riesgo": "Transcripciones de baja calidad",
          "mitigacion": "Usar herramientas probadas (Google Meet nativo, Otter.ai); revisar antes de publicar"
        },
        {
          "riesgo": "Nadie lee las minutas generadas",
          "mitigacion": "Formato ejecutivo: máximo 1 página, decisiones + dueños + fechas"
        },
        {
          "riesgo": "Falta de licencias de transcripción",
          "mitigacion": "Validar qué incluye Google Workspace actual; presupuestar si falta"
        }
      ],
      "owner": {
        "responsable": "Líder PIA + TI",
        "sponsor": "Gerencia General"
      }
    },
    {
      "id": "04",
      "nombre": "Show & Tell IA Mensual",
      "tipo": "Quick Win",
      "area": "Cultura / EIC / PIA",
      "esfuerzo": "Bajo",
      "estado": "Idea",
      "plazo": "Corto (≤1 mes)",
      "problema": "En Brinca, los equipos están experimentando con IA de forma independiente: Comercial usa transcripciones automáticas, EIC comienza a utilizar asistentes para propuestas, Personas automatizó interpretación de reportes. **Pero nadie más se entera de estos avances**. El conocimiento queda atrapado en silos y otros equipos reinventan las mismas soluciones semanas después.\n\nSin un foro regular de visibilidad, se pierde la oportunidad de:\n- Aprender de los éxitos (y fracasos) de otros\n- Identificar patrones que funcionan transversalmente\n- Motivar a equipos que aún no experimentan\n- Detectar duplicación de esfuerzos antes de que ocurra\n\nActualmente operamos como \"islas\"—cada área navega sola hacia la adopción de IA. Un Show & Tell crea \"puentes\" mensuales que conectan estas islas y aceleran el aprendizaje colectivo.\n\nEl costo de no hacer esto es alto: equipos que podrían beneficiarse de soluciones ya probadas siguen trabajando manualmente, mientras quienes innovan no reciben reconocimiento visible por sus contribuciones.\n\n---",
      "solucion": "Crear un **evento mensual de 45 minutos** donde equipos muestran casos reales de uso de IA, con formato estandarizado que prioriza la replicabilidad:\n\n**Componentes:**\n\n1. **Sesión mensual fija (45 min)**\n   - Horario predecible: mismo día/hora cada mes\n   - Formato híbrido: presencial + streaming para quienes no pueden asistir\n   - Grabación automática para consulta posterior\n\n2. **3 mini-demos por sesión (10 min c/u + 5 min Q&A)**\n   - Formato estricto para evitar presentaciones largas\n   - Rotación de áreas: asegurar diversidad de casos\n   - Incluir tanto éxitos como \"fracasos instructivos\"\n\n3. **Plantilla obligatoria de presentación**\n   - Problema que resolviste (2 min)\n   - Herramienta y solución (3 min)\n   - Métricas de impacto (2 min)\n   - \"Cómo puedes usarlo tú\" (3 min) ← sección clave para replicabilidad\n\n4. **Documentación y difusión**\n   - Grabaciones en Drive compartido\n   - Highlights en Google Chat post-sesión\n   - Prompts/playbooks mostrados van al repositorio (ver Oportunidad 06)\n\n5. **Backlog de ponencias**\n   - Pipeline de casos identificados para próximos meses\n   - Formulario para que equipos propongan sus demos\n   - Curación por PIA para asegurar calidad y diversidad\n\n---",
      "impacto": [
        "Visibilidad de innovación: De 0 casos compartidos org-wide → 3 casos/mes visibles a toda Brinca",
        "Replicación de prácticas: De \"cada área por su lado\" → prácticas probadas que escalan entre equipos",
        "Motivación y reconocimiento: De esfuerzo invisible → presentadores reconocidos públicamente cada mes",
        "Aprendizaje de fracasos: De errores ocultos → lecciones compartidas que evitan repetir problemas",
        "Detección de sinergias: De duplicación silenciosa → identificación temprana de esfuerzos paralelos",
        "Cultura de experimentación: De \"solo los expertos usan IA\" → normalizar que todos pueden probar y compartir"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": [
          {
            "id": "06",
            "nombre": "Repositorio de prompts",
            "relacion": "Donde publicar prompts/playbooks mostrados en las demos"
          },
          {
            "id": "01",
            "nombre": "Reconocimiento",
            "relacion": "Presentadores ganan puntos como \"Teachers\" en el sistema de gamificación"
          },
          {
            "id": "05",
            "nombre": "Red AI Champions",
            "relacion": "Espacio natural para que Champions lideren o moderen sesiones"
          }
        ]
      },
      "criterio_exito": {
        "done": [
          "Calendario de 6 sesiones publicado (fechas fijas para próximo semestre)",
          "Plantilla de presentación creada y compartida",
          "Backlog con al menos 6 casos identificados para primeros meses",
          "Primera sesión realizada con >10 asistentes",
          "Grabación y highlights de primera sesión publicados"
        ],
        "success": [
          "Asistencia promedio >15 personas por sesión",
          ">80% de sesiones realizadas según calendario (no cancelaciones)",
          "Al menos 3 casos replicados por otras áreas después de verlos en Show & Tell",
          "NPS del evento >7 (encuesta post-sesión)",
          "Al menos 6 áreas distintas han presentado"
        ]
      },
      "valor": "**Beneficio principal**: Transferencia de conocimiento entre áreas; prácticas que escalan de un equipo a toda la organización. Único foro regular donde la innovación en IA se hace visible.\n\n**Costo de no hacer**: Silos persisten; equipos reinventan soluciones ya probadas por otros; quienes innovan no reciben reconocimiento; la adopción de IA avanza de forma desigual y descoordinada.\n\n**Esfuerzo vs Impacto**: Bajo esfuerzo (~4h setup + 2h/mes operación), alto impacto en cultura y alineamiento organizacional.\n\n---",
      "conexion_ia2": {
        "conexiones": [
          {
            "dimension": "Cultura",
            "subdimension": "Comunidad de práctica",
            "score_actual": "2.1",
            "impacto": "+0.5 a +0.8 (directo)"
          },
          {
            "dimension": "Cultura",
            "subdimension": "Rituales y tiempo protegido",
            "score_actual": "2.1",
            "impacto": "+0.3 a +0.5 (directo)"
          },
          {
            "dimension": "Adopción",
            "subdimension": "Sostenimiento",
            "score_actual": "2.3",
            "impacto": "+0.2 a +0.3 (indirecto)"
          }
        ],
        "justificacion": "El Show & Tell crea un ritual mensual que fortalece directamente \"Comunidad de práctica\" (hoy 2.1) al conectar equipos que antes operaban aislados. También impacta \"Rituales y tiempo protegido\" al establecer un espacio fijo para IA en el calendario organizacional. El efecto en \"Sostenimiento\" es indirecto: al visibilizar éxitos, se refuerza el valor de seguir invirtiendo en adopción."
      },
      "primeros_pasos": [
        "Definir fecha y formato con PIA: elegir día/hora fija mensual, decidir si es presencial/híbrido, confirmar duración (45 min recomendado)",
        "Crear plantilla de presentación en Google Slides: secciones obligatorias (Problema, Solución, Métricas, \"Cómo usarlo tú\")",
        "Identificar primeros 6 casos para backlog: hablar con áreas que ya experimentan (EIC, Cultura, Operaciones)",
        "Comunicar lanzamiento vía Google Chat y All Hands: fecha de primera sesión, cómo proponer demos",
        "Ejecutar primera sesión piloto con 3 casos ya validados; grabar y documentar",
        "Publicar highlights y grabación en canales internos; solicitar feedback con encuesta NPS"
      ],
      "kpis": [
        {
          "nombre": "Asistencia promedio",
          "descripcion": "# personas por sesión (baseline: 0, target: >15)",
          "baseline": "0",
          "target": ">15"
        },
        {
          "nombre": "Casos presentados",
          "descripcion": "# demos realizadas por mes (baseline: 0, target: 3)",
          "baseline": "0",
          "target": "3"
        },
        {
          "nombre": "Tasa de cumplimiento",
          "descripcion": "% sesiones realizadas vs programadas (baseline: N/A, target: >80%)",
          "baseline": "N/A",
          "target": ">80%"
        },
        {
          "nombre": "Casos replicados",
          "descripcion": "# prácticas adoptadas por otra área después de verlas (baseline: 0, target: 1-2/trimestre)",
          "baseline": "0",
          "target": "1-2/trimestre"
        },
        {
          "nombre": "Diversidad de presentadores",
          "descripcion": "# áreas distintas que han presentado (baseline: 0, target: 6+ en 6 meses)",
          "baseline": "0",
          "target": "6+ en 6 meses"
        },
        {
          "nombre": "NPS del evento",
          "descripcion": "satisfacción de asistentes en encuesta post-sesión (target: >7)",
          "target": ">7"
        }
      ],
      "recursos_habilitantes": {
        "recursos": [
          "Host del evento",
          "Guía de presentaciones",
          "Tiempo protegido"
        ],
        "horas": [
          {
            "fase": "**Implementación** (2 sem)",
            "rol": "Líder PIA (setup)",
            "horas": "2h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Host (mensual)",
            "horas": "2h/mes (0.5h/sem)"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Presentadores (3/mes)",
            "horas": "1h prep c/u"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Documentador",
            "horas": "1h/mes"
          }
        ],
        "habilitantes": [
          {
            "nombre": "Bloque calendario mensual",
            "descripcion": "Horario fijo protegido para la sesión; mismo día/hora cada mes",
            "estado": "⏳ Por agendar"
          },
          {
            "nombre": "Plantilla de presentación",
            "descripcion": "Formato estándar en Google Slides para demos",
            "estado": "⏳ Por crear"
          },
          {
            "nombre": "Google Meet con grabación",
            "descripcion": "Para transmitir y grabar sesiones",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Canal de difusión",
            "descripcion": "Google Chat para anuncios y highlights post-sesión",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Backlog de casos",
            "descripcion": "Pipeline de presentaciones identificadas para próximos meses",
            "estado": "⏳ Por crear"
          },
          {
            "nombre": "Repositorio de grabaciones",
            "descripcion": "Carpeta en Drive para guardar sesiones pasadas",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Patrocinio de jefaturas",
            "descripcion": "Gerentes permiten y promueven asistencia",
            "estado": "✅ Comprometido"
          },
          {
            "nombre": "Casos reales para presentar",
            "descripcion": "Al menos 3 equipos con experiencias IA para compartir",
            "estado": "⚠️ Identificar"
          }
        ]
      },
      "riesgos": [
        {
          "riesgo": "Nadie quiere presentar",
          "mitigacion": "Comenzar con casos ya conocidos; ofrecer apoyo en preparación"
        },
        {
          "riesgo": "Presentaciones muy largas o técnicas",
          "mitigacion": "Formato estricto: 10 min máx + plantilla obligatoria"
        },
        {
          "riesgo": "Baja asistencia",
          "mitigacion": "Horario fijo mensual; vincular a almuerzo o after-office"
        },
        {
          "riesgo": "Se vuelve rutinario y pierde interés",
          "mitigacion": "Rotar formatos: demo en vivo, panel, \"fracasos del mes\""
        },
        {
          "riesgo": "Casos no son replicables",
          "mitigacion": "Exigir sección \"cómo puedes usarlo tú\" en cada presentación"
        }
      ],
      "owner": {
        "responsable": "Líder PIA",
        "sponsor": "Gerencia General"
      }
    },
    {
      "id": "05",
      "nombre": "Red de AI Champions",
      "tipo": "Proyecto",
      "area": "Cultura / Personas",
      "esfuerzo": "Medio",
      "estado": "Idea",
      "plazo": "Medio (≤3 meses)",
      "problema": "En Brinca, la adopción de IA avanza de forma desigual: mientras algunas áreas (EIC, Comercial) experimentan activamente, otras no saben por dónde empezar o a quién preguntar. El conocimiento está concentrado en 3-4 \"héroes\" que resuelven todo, creando un cuello de botella insostenible.\n\nEl problema de fondo es que **no existen referentes locales en cada área**. Cuando alguien de Upskill tiene una duda sobre IA, no tiene a quién recurrir en su propio equipo. Tiene que esperar a que alguien de PIA esté disponible, o simplemente se queda sin respuesta. Esta fricción ralentiza la adopción y reduce la confianza para experimentar.\n\n**Modelo mental \"Hub & Spoke\"**: Actualmente operamos con un modelo centralizado—todo pasa por PIA (el \"hub\"). Lo que necesitamos es una red distribuida: un facilitador central + champions en cada área (los \"spokes\"). Esto multiplica la capacidad de soporte sin multiplicar proporcionalmente el esfuerzo central.\n\nSin esta red, el costo es claro: los \"héroes\" se queman, las áreas sin soporte se quedan atrás, y el conocimiento sigue siendo tácito en lugar de documentado y escalable.\n\n---",
      "solucion": "Crear una **red formal de AI Champions**—personas designadas en cada área que actúan como referentes locales de IA, con tiempo protegido y mandato claro:\n\n**Componentes:**\n\n1. **Selección de Champions (1 por área)**\n   - Criterios: influencia en su área + curiosidad técnica + disponibilidad de tiempo\n   - Áreas: EIC, GT, Upskill, A&F, Comercial (5 champions total)\n   - Proceso: auto-nominación + validación con gerente de área\n\n2. **Charter claro**\n   - Mandato: ser primer punto de contacto IA en su área\n   - Tiempo asignado: 2h/semana protegidas\n   - Expectativas: resolver X casos/mes, documentar aprendizajes\n   - Beneficios: reconocimiento, capacitación prioritaria, input en roadmap\n\n3. **Rituales quincenales (1h)**\n   - Sesión de todos los champions + facilitador central\n   - Agenda: casos de la quincena, bloqueos, patrones comunes\n   - Compartir soluciones entre áreas\n\n4. **Canal de soporte**\n   - Space en Google Chat \"AI Champions\" para consultas día a día\n   - Respuesta esperada: <24h hábiles\n   - Escalamiento a PIA para casos complejos\n\n5. **Documentación de casos**\n   - Plantilla simple: Problema → Solución → Resultado\n   - Publicación en repositorio (ver Oportunidad 06)\n   - Meta: 2-3 casos documentados/champion/mes\n\n6. **Métricas de red**\n   - Dashboard básico en Sheets: casos resueltos, participación, áreas activas\n   - Revisión mensual por facilitador central\n\n---",
      "impacto": [
        "Soporte distribuido: De 3-4 \"héroes\" centrales sobrecargados → red de 6 personas (5 champions + 1 facilitador)",
        "Tiempo de respuesta: De \"esperar a que alguien sepa\" → respuesta en <24h vía canal de champions",
        "Cobertura por área: De áreas rezagadas sin soporte → cada área con al menos 1 referente activo",
        "Documentación: De conocimiento tácito en cabezas → casos documentados y reutilizables en repositorio",
        "Confianza local: De \"no sé si puedo usar IA para esto\" → champion cercano que entiende el contexto del área",
        "Adopción sostenible: De dependencia de PIA → capacidad instalada en cada área que se mantiene a largo plazo"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": [
          {
            "id": "01",
            "nombre": "Reconocimiento",
            "relacion": "Champions ganan puntos por casos resueltos y documentados"
          },
          {
            "id": "02",
            "nombre": "Office Hours",
            "relacion": "Champions pueden liderar o co-facilitar sesiones de su área"
          },
          {
            "id": "04",
            "nombre": "Show & Tell",
            "relacion": "Espacio para que champions presenten casos destacados de sus áreas"
          },
          {
            "id": "06",
            "nombre": "Repositorio de prompts",
            "relacion": "Donde publicar casos documentados por champions"
          }
        ]
      },
      "criterio_exito": {
        "done": [
          "Champions seleccionados (1 por área: EIC, GT, Upskill, A&F, Comercial)",
          "Charter y expectativas documentadas y comunicadas",
          "Canal Google Chat \"AI Champions\" creado y activo",
          "Primera sesión quincenal realizada",
          "Plantilla de documentación de casos definida y compartida",
          "Dashboard de métricas básico funcionando"
        ],
        "success": [
          ">80% de sesiones quincenales realizadas según calendario",
          ">10 casos documentados en repositorio por la red",
          "Cada champion ha resuelto al menos 3 casos de su área",
          "NPS de usuarios que recibieron soporte >7",
          "Al menos 2 champions han presentado en Show & Tell",
          "100% de áreas con al menos 1 champion activo"
        ]
      },
      "valor": "**Beneficio principal**: Red de soporte distribuido que escala la capacidad de ayuda sin sobrecargar a PIA. Cada área tiene un referente local que entiende su contexto, reduciendo fricción y acelerando adopción.\n\n**Costo de no hacer**: Adopción sigue siendo desigual entre áreas; 3-4 personas sobrecargadas eventualmente se queman; áreas sin soporte local se quedan atrás; conocimiento no se documenta.\n\n**Esfuerzo vs Impacto**: Esfuerzo medio (~20h setup + ~14h/sem operación distribuida: 4h facilitador + 2h x 5 champions), alto impacto estructural en capacidad organizacional.\n\n---",
      "conexion_ia2": {
        "conexiones": [
          {
            "dimension": "Cultura",
            "subdimension": "Comunidad de práctica",
            "score_actual": "2.1",
            "impacto": "+0.8 a +1.0 (directo)"
          },
          {
            "dimension": "Cultura",
            "subdimension": "Incentivos y reconocimiento",
            "score_actual": "2.1",
            "impacto": "+0.3 (indirecto)"
          },
          {
            "dimension": "Adopción",
            "subdimension": "Sostenimiento",
            "score_actual": "2.3",
            "impacto": "+0.5 a +0.7 (directo)"
          },
          {
            "dimension": "Adopción",
            "subdimension": "Penetración",
            "score_actual": "2.3",
            "impacto": "+0.3 (indirecto)"
          }
        ],
        "justificacion": "La red de Champions es la intervención más directa en \"Comunidad de práctica\" (hoy en 2.1) al crear una estructura formal de soporte distribuido. Impacta fuertemente \"Sostenimiento\" porque cada área tiene un referente local que mantiene viva la adopción. El efecto en \"Incentivos\" viene del reconocimiento que reciben los champions; en \"Penetración\", de que más personas en más áreas comienzan a usar IA con soporte cercano."
      },
      "primeros_pasos": [
        "Definir criterios de selección con PIA: perfil ideal (influencia en área + curiosidad técnica + disponibilidad de 2h/sem)",
        "Identificar candidatos en cada área (EIC, GT, Upskill, A&F, Comercial); validar disponibilidad y motivación con gerentes de área",
        "Crear charter de champions: documento con expectativas, tiempo asignado, métricas de éxito, beneficios (reconocimiento, capacitación prioritaria)",
        "Diseñar rituales: frecuencia de sesiones (quincenal recomendado), agenda tipo, cómo documentar casos resueltos",
        "Lanzar la red: comunicación en All Hands, crear canal Google Chat \"AI Champions\", primera sesión quincenal con todos",
        "Establecer métricas: dashboard simple en Sheets para tracking de casos, participación, áreas activas"
      ],
      "kpis": [
        {
          "nombre": "Casos resueltos/mes",
          "descripcion": "# consultas atendidas por la red de champions (baseline: ~5 informales, target: >15)",
          "baseline": "~5 informales",
          "target": ">15"
        },
        {
          "nombre": "Tiempo de respuesta",
          "descripcion": "horas desde consulta hasta primera respuesta útil (target: <24h hábiles)",
          "target": "<24h hábiles"
        },
        {
          "nombre": "Cobertura de áreas",
          "descripcion": "% áreas con al menos 1 champion activo (baseline: 0%, target: 100%)",
          "baseline": "0%",
          "target": "100%"
        },
        {
          "nombre": "Participación en rituales",
          "descripcion": "% champions que asisten a sesiones quincenales (target: >80%)",
          "target": ">80%"
        },
        {
          "nombre": "Casos documentados",
          "descripcion": "# casos publicados en repositorio por trimestre (baseline: 0, target: 10+)",
          "baseline": "0",
          "target": "10+"
        },
        {
          "nombre": "NPS de usuarios",
          "descripcion": "satisfacción de quienes recibieron soporte de un champion (target: >7)",
          "target": ">7"
        }
      ],
      "recursos_habilitantes": {
        "recursos": [
          "Tiempo protegido (2 h/semana)",
          "Plantillas de registro",
          "Líder por área (10-15% FTE)",
          "Facilitador central",
          "Espacio comunidad",
          "AI Playbooks"
        ],
        "horas": [
          {
            "fase": "**Implementación** (4 sem)",
            "rol": "Facilitador central",
            "horas": "6h/sem"
          },
          {
            "fase": "**Implementación** (4 sem)",
            "rol": "Líderes de área",
            "horas": "2h/sem c/u"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Facilitador central",
            "horas": "4h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Champion por área (5)",
            "horas": "2h/sem c/u"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Sesiones quincenales",
            "horas": "1h/sem promedio"
          }
        ],
        "habilitantes": [
          {
            "nombre": "Tiempo protegido (2h/sem)",
            "descripcion": "Jefaturas liberan tiempo para que champions cumplan su rol",
            "estado": "⚠️ Crítico - negociar"
          },
          {
            "nombre": "Canal Google Chat",
            "descripcion": "Space para consultas y coordinación entre champions",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Facilitador central",
            "descripcion": "Persona de PIA que coordina la red y facilita rituales",
            "estado": "⏳ Por asignar"
          },
          {
            "nombre": "Plantilla de casos",
            "descripcion": "Formato simple para documentar casos resueltos",
            "estado": "⏳ Por crear"
          },
          {
            "nombre": "Repositorio de casos",
            "descripcion": "Donde publicar documentación (ver Oportunidad 06)",
            "estado": "🔄 En diseño"
          },
          {
            "nombre": "Dashboard de métricas",
            "descripcion": "Google Sheets para tracking de casos y participación",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Patrocinio de gerencias",
            "descripcion": "Apoyo visible de liderazgo al rol de champion",
            "estado": "✅ Comprometido"
          },
          {
            "nombre": "Criterios de selección",
            "descripcion": "Perfil definido y proceso claro para elegir champions",
            "estado": "⏳ Por definir"
          },
          {
            "nombre": "Charter documentado",
            "descripcion": "Expectativas, beneficios y métricas del rol",
            "estado": "⏳ Por crear"
          }
        ]
      },
      "riesgos": [
        {
          "riesgo": "Jefaturas no liberan 2h/semana para champions",
          "mitigacion": "Negociar con sponsors; empezar con 1h/semana; mostrar ROI temprano"
        },
        {
          "riesgo": "Champions sin perfil adecuado (técnico o influencia)",
          "mitigacion": "Definir criterios claros; permitir auto-nominación + validación"
        },
        {
          "riesgo": "Red se vuelve club exclusivo sin impacto",
          "mitigacion": "Métricas de casos resueltos; rotación anual de champions"
        },
        {
          "riesgo": "Burnout de champions por carga extra",
          "mitigacion": "Reconocimiento visible; limitar scope; distribuir carga"
        },
        {
          "riesgo": "Falta de coordinación central",
          "mitigacion": "Asignar facilitador dedicado (aunque sea parcial)"
        }
      ],
      "owner": {
        "responsable": "Líder PIA (coordinador central)",
        "sponsor": "Gerencia General"
      }
    },
    {
      "id": "06",
      "nombre": "Repositorio Mínimo de Prompts y Playbooks (con dueños)",
      "tipo": "Quick Win",
      "area": "PIA",
      "esfuerzo": "Bajo",
      "estado": "Idea",
      "plazo": "Corto (≤1 mes)",
      "problema": "En Brinca, los prompts de IA están dispersos—y la mayoría ni siquiera están documentados: viven en conversaciones de Gemini o ChatGPT que solo su autor puede encontrar. Algunos pocos están en Drives personales o chats de Google, pero sin estructura ni contexto. Cuando alguien necesita un prompt para una tarea común, tiene dos opciones: preguntarle a alguien que \"sabe\" o crear uno desde cero. Ambas son ineficientes.\n\nEl resultado es **duplicación de esfuerzo y calidad desigual**: tres personas pueden tener tres versiones distintas del mismo prompt, ninguna necesariamente la mejor. Peor aún, cuando alguien encuentra algo que funciona bien, ese conocimiento queda atrapado en su historial de chat—inaccesible para cualquier otro.\n\n**Modelo mental \"Biblioteca curada\"**: Lo que necesitamos es un lugar central donde los activos que funcionan estén validados, documentados y accesibles. No basta con un Drive compartido—necesita curaduría: alguien que revise, organice y mantenga actualizado.\n\nSin este repositorio, cada nuevo proyecto empieza casi de cero, y el conocimiento acumulado se pierde cuando alguien cambia de rol o deja la organización.\n\n---",
      "solucion": "Crear un **repositorio curado de prompts y playbooks** en Google Drive, organizado por dominio/proceso, con estructura clara y responsables definidos:\n\n**Componentes:**\n\n1. **Estructura en Drive**\n   - Carpeta central \"Activos IA Brinca\" accesible a todos\n   - Subcarpetas por dominio: EIC, GT, Upskill, Comercial, A&F, Transversal\n   - Nomenclatura estándar: `[DOMINIO]-[TIPO]-[NOMBRE]-v[VERSION]`\n\n2. **Plantilla de prompt/playbook**\n   - Campos obligatorios: Contexto, Instrucciones, Ejemplo de uso, Resultado esperado\n   - Metadata: Owner, Fecha de creación, Última revisión, Tags\n   - Sección \"Cuándo usar\" y \"Cuándo NO usar\"\n\n3. **Proceso de curaduría**\n   - Criterios mínimos para publicar (documentado, probado, con ejemplo)\n   - Revisión por curador de dominio antes de publicar\n   - Feedback estructurado para mejora\n\n4. **Sistema de owners**\n   - Cada activo tiene 1 responsable que lo mantiene actualizado\n   - Owner recibe notificación trimestral para revisar vigencia\n   - Si owner cambia de rol, se reasigna\n\n5. **Guía de búsqueda y uso**\n   - Índice por casos de uso comunes\n   - Tags para búsqueda rápida\n   - \"Top 10 prompts más usados\" destacado\n\n6. **Ciclo de revisión**\n   - Revisión trimestral de vigencia\n   - Activos sin uso en 6 meses → archivar o actualizar\n\n---",
      "impacto": [
        "Acceso a activos: De atrapados en chats de Gemini/ChatGPT → centralizados y buscables en <5 min",
        "Reducción de duplicación: De \"cada uno crea su versión\" → reutilización de lo que ya funciona",
        "Calidad consistente: De prompts sin validar → activos curados con criterios mínimos",
        "Onboarding acelerado: De \"cada uno descubre solo\" → guía de uso + activos listos para nuevos colaboradores",
        "Preservación de conocimiento: De \"se va la persona, se va el prompt\" → activos documentados que persisten",
        "Mejora continua: De feedback perdido → ciclo de revisión trimestral con mejoras incrementales"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": [
          {
            "id": "01",
            "nombre": "Reconocimiento",
            "relacion": "Contribuir prompts curados da puntos en el sistema de gamificación"
          },
          {
            "id": "02",
            "nombre": "Office Hours",
            "relacion": "Casos resueltos en Office Hours se documentan como playbooks"
          },
          {
            "id": "04",
            "nombre": "Show & Tell",
            "relacion": "Prompts mostrados en demos van al repositorio"
          },
          {
            "id": "05",
            "nombre": "Red AI Champions",
            "relacion": "Champions documentan casos de sus áreas en el repositorio"
          }
        ]
      },
      "criterio_exito": {
        "done": [
          "Estructura de carpetas creada en Drive con permisos configurados",
          "Plantilla de prompt/playbook publicada y documentada",
          "20 activos críticos cargados con owners asignados",
          "Guía de uso y búsqueda publicada",
          "Comunicación de lanzamiento enviada a toda la organización"
        ],
        "success": [
          ">30 activos curados en repositorio",
          ">70% de activos con owner activo asignado",
          ">50 accesos/mes al repositorio (proxy de uso)",
          "Al menos 5 activos reutilizados por alguien que no es el autor original",
          "Satisfacción de usuarios >7 (encuesta)"
        ]
      },
      "valor": "**Beneficio principal**: Reducir tiempo buscando y creando prompts; asegurar calidad consistente; preservar conocimiento organizacional. Base fundamental para todas las otras iniciativas de adopción.\n\n**Costo de no hacer**: Duplicación de esfuerzo continúa; calidad desigual entre áreas; conocimiento se pierde cuando personas cambian de rol; nuevos colaboradores tardan más en ser productivos con IA.\n\n**Esfuerzo vs Impacto**: Bajo esfuerzo (~12h setup + 4h/sem curaduría distribuida entre 4 curadores), alto impacto como habilitante de otras iniciativas.\n\n---",
      "conexion_ia2": {
        "conexiones": [
          {
            "dimension": "Adopción",
            "subdimension": "Activos reutilizables",
            "score_actual": "2.3",
            "impacto": "+0.8 a +1.0 (directo)"
          },
          {
            "dimension": "Adopción",
            "subdimension": "Sostenimiento",
            "score_actual": "2.3",
            "impacto": "+0.3 (indirecto)"
          },
          {
            "dimension": "Cultura",
            "subdimension": "Comunidad de práctica",
            "score_actual": "2.1",
            "impacto": "+0.3 (indirecto)"
          }
        ],
        "justificacion": "El repositorio ataca directamente \"Activos reutilizables\" (hoy en 2.3) al crear un lugar central curado donde lo que funciona está validado y accesible. Impacta \"Sostenimiento\" porque facilita que nuevas personas adopten IA rápidamente. El efecto en \"Comunidad de práctica\" viene de que compartir conocimiento se vuelve más fácil y visible."
      },
      "primeros_pasos": [
        "Definir taxonomía con PIA: máximo 5-6 categorías iniciales (por dominio: EIC, GT, Upskill, Comercial, A&F, Transversal)",
        "Crear estructura en Drive: carpeta central \"Activos IA Brinca\", subcarpetas por dominio, plantilla de prompt/playbook",
        "Identificar 20 activos críticos: hablar con cada área para curar prompts/playbooks que ya existen y funcionan",
        "Asignar curadores: 1 persona por dominio responsable de revisar y mantener calidad (idealmente los AI Champions)",
        "Publicar guía de uso: documento con cómo buscar, cómo contribuir, criterios de calidad mínimos",
        "Comunicar lanzamiento: Google Chat + All Hands con ejemplos concretos de uso del repositorio"
      ],
      "kpis": [
        {
          "nombre": "Activos curados",
          "descripcion": "# prompts + playbooks en repositorio (baseline: ~5 dispersos, target: 30+)",
          "baseline": "~5 dispersos",
          "target": "30+"
        },
        {
          "nombre": "Cobertura de owners",
          "descripcion": "% activos con owner asignado y activo (baseline: 0%, target: >70%)",
          "baseline": "0%",
          "target": ">70%"
        },
        {
          "nombre": "Uso del repositorio",
          "descripcion": "# accesos o búsquedas/mes (baseline: 0, target: >50)",
          "baseline": "0",
          "target": ">50"
        },
        {
          "nombre": "Tasa de reutilización",
          "descripcion": "% activos usados por alguien que no es el autor (baseline: desconocido, target: >30%)",
          "baseline": "desconocido",
          "target": ">30%"
        },
        {
          "nombre": "Satisfacción de usuarios",
          "descripcion": "NPS de quienes usan el repositorio (target: >7)",
          "target": ">7"
        },
        {
          "nombre": "Actualización",
          "descripcion": "% activos revisados en últimos 3 meses (target: >80%)",
          "target": ">80%"
        }
      ],
      "recursos_habilitantes": {
        "recursos": [
          "Drive o Notion",
          "Curadores por dominio",
          "Editor"
        ],
        "horas": [
          {
            "fase": "**Implementación** (3 sem)",
            "rol": "Líder PIA (estructura)",
            "horas": "4h/sem"
          },
          {
            "fase": "**Implementación** (3 sem)",
            "rol": "Curadores (carga inicial)",
            "horas": "3h/sem c/u"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Curador por dominio (4)",
            "horas": "1h/sem c/u"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Revisión quincenal",
            "horas": "1h/sem promedio"
          }
        ],
        "habilitantes": [
          {
            "nombre": "Google Drive compartido",
            "descripcion": "Carpeta central accesible a toda la organización",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Plantilla de prompt/playbook",
            "descripcion": "Formato estándar con campos obligatorios",
            "estado": "⏳ Por crear"
          },
          {
            "nombre": "Taxonomía definida",
            "descripcion": "Categorías claras para organizar activos por dominio",
            "estado": "⏳ Por definir"
          },
          {
            "nombre": "Curadores por dominio",
            "descripcion": "1 persona por área que revisa y mantiene calidad",
            "estado": "⏳ Por asignar"
          },
          {
            "nombre": "Criterios de calidad",
            "descripcion": "Qué debe tener un prompt para ser publicado",
            "estado": "⏳ Por definir"
          },
          {
            "nombre": "Guía de nomenclatura",
            "descripcion": "Cómo nombrar archivos consistentemente",
            "estado": "⏳ Por crear"
          },
          {
            "nombre": "Tiempo para curar",
            "descripcion": "Curadores tienen ~1h/sem asignada para revisión",
            "estado": "⚠️ Negociar"
          },
          {
            "nombre": "Patrocinio de PIA",
            "descripcion": "Liderazgo impulsa uso y contribución al repositorio",
            "estado": "✅ Comprometido"
          }
        ]
      },
      "riesgos": [
        {
          "riesgo": "Nadie contribuye prompts",
          "mitigacion": "Comenzar con curaduría de lo existente; no esperar contribuciones nuevas"
        },
        {
          "riesgo": "Repositorio se llena de prompts de baja calidad",
          "mitigacion": "Definir criterios mínimos; proceso de revisión antes de publicar"
        },
        {
          "riesgo": "Prompts quedan desactualizados",
          "mitigacion": "Asignar owner por prompt; revisión trimestral obligatoria"
        },
        {
          "riesgo": "Demasiadas categorías / taxonomía compleja",
          "mitigacion": "Empezar con máximo 5 categorías; expandir según demanda"
        },
        {
          "riesgo": "Usuarios no encuentran lo que buscan",
          "mitigacion": "Incluir ejemplos de uso y casos reales; habilitar búsqueda por keywords"
        }
      ],
      "owner": {
        "responsable": "Líder PIA",
        "sponsor": "Gerencia General"
      }
    },
    {
      "id": "07",
      "nombre": "\"Leader as Teacher\" – Piloto (5 líderes, casos reales)",
      "tipo": "Quick Win",
      "area": "Cultura / PIA",
      "esfuerzo": "Bajo",
      "estado": "Idea",
      "plazo": "Corto (≤1 mes)",
      "problema": "El liderazgo no modela el uso de IA y envía señales débiles de cambio. Sin ejemplo práctico, la adopción se percibe como moda y no como capacidad estratégica de la organización.\n\n---",
      "solucion": "Cinco líderes imparten microclases con casos propios, explicitando decisión, riesgos y métricas. Feedback 360° y publicación de materiales para emulación.\n\n---",
      "impacto": [
        "Señal cultural fuerte",
        "Adopción más rápida",
        "Mejores decisiones informadas por IA",
        "Aprendizaje acelerado por ejemplo",
        "Alineación de expectativas",
        "Mayor adopción de buenas prácticas"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": []
      },
      "criterio_exito": {
        "done": [],
        "success": []
      },
      "valor": "",
      "conexion_ia2": {
        "conexiones": [],
        "justificacion": ""
      },
      "primeros_pasos": [
        "Seleccionar líderes",
        "Diseñar microclases",
        "Ensayo guiado",
        "Agenda y retroalimentación"
      ],
      "kpis": [],
      "recursos_habilitantes": {
        "recursos": [
          "Coaching didáctico",
          "Curador de contenidos"
        ],
        "horas": [
          {
            "fase": "**Implementación** (3 sem)",
            "rol": "Coach didáctico",
            "horas": "4h/sem"
          },
          {
            "fase": "**Implementación** (3 sem)",
            "rol": "Curador contenidos",
            "horas": "2h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Líder participante (5)",
            "horas": "2h prep + 1h sesión c/u"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Coach (soporte)",
            "horas": "1h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Curador (documentación)",
            "horas": "1h/sem"
          }
        ],
        "habilitantes": []
      },
      "riesgos": [
        {
          "riesgo": "Líderes no quieren exponerse enseñando",
          "mitigacion": "Ofrecer coaching previo; empezar con voluntarios entusiastas"
        },
        {
          "riesgo": "Líderes no tienen casos propios de IA",
          "mitigacion": "Ayudarles a identificar un caso simple; co-crear la microclase"
        },
        {
          "riesgo": "Microclases de baja calidad didáctica",
          "mitigacion": "Proveer plantilla + ensayo guiado; feedback constructivo post-sesión"
        },
        {
          "riesgo": "Audiencia no asiste o no participa",
          "mitigacion": "Hacer obligatorio para equipos de cada líder; formato interactivo"
        },
        {
          "riesgo": "Se percibe como carga adicional sin valor",
          "mitigacion": "Vincular a objetivos de liderazgo; reconocimiento público"
        }
      ],
      "owner": {
        "responsable": "Líder de Cultura / Personas",
        "sponsor": "Gerencia General"
      }
    },
    {
      "id": "08",
      "nombre": "Copiloto de Propuestas Comerciales [Upskill/Brinca]",
      "tipo": "Quick Win",
      "area": "Comercial [Upskill/Brinca]",
      "esfuerzo": "Bajo",
      "estado": "Idea",
      "plazo": "Corto (≤1 mes)",
      "problema": "La creación de propuestas comerciales se realiza de manera artesanal y descentralizada. Esto genera diferencias en tono, estructura y profundidad técnica, además de duplicar esfuerzos y provocar retrabajo.\n\nEl proceso carece de plantillas IA, banco de casos y criterios de calidad comunes, lo que dificulta mantener una narrativa coherente, eficiente y alineada al \"Brinca Way\".\n\n---",
      "solucion": "Diseñar un copiloto interno basado en ChatGPT (o herramienta equivalente) que integre prompts y plantillas predefinidas de Brinca para redactar, adaptar y revisar propuestas comerciales.\n\nEl sistema incluirá un repositorio de prompts, macros o plantillas por tipo de servicio (IA, Innovación, Sostenibilidad, etc.), con posibilidad de personalización por cliente o sector.\n\n---",
      "impacto": [
        "Reducción del tiempo de preparación de propuestas en un 40-60%",
        "Aumento de la consistencia y calidad de los entregables comerciales",
        "Mejora en la velocidad de respuesta ante licitaciones y cotizaciones",
        "Consolidación del \"Brinca Way\" como estándar de comunicación comercial"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": []
      },
      "criterio_exito": {
        "done": [],
        "success": []
      },
      "valor": "",
      "conexion_ia2": {
        "conexiones": [],
        "justificacion": ""
      },
      "primeros_pasos": [
        "Identificar 5-7 tipos de propuestas más frecuentes",
        "Crear prompts tipo base y plantillas de formato visual Word/PDF",
        "Validar el flujo con 2 líderes comerciales",
        "Publicar en repositorio compartido (ej. Notion, Teams, Confluence)",
        "Monitorear adopción y recoger feedback"
      ],
      "kpis": [],
      "recursos_habilitantes": {
        "recursos": [
          "1 facilitador IA para diseño de prompts",
          "1 persona de marketing o comercial para tono y coherencia",
          "Herramienta ChatGPT",
          "Librería de documentos históricos Brinca"
        ],
        "horas": [
          {
            "fase": "**Implementación** (3 sem)",
            "rol": "Facilitador IA (prompts)",
            "horas": "6h/sem"
          },
          {
            "fase": "**Implementación** (3 sem)",
            "rol": "Comercial/Marketing",
            "horas": "3h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Facilitador IA (mantención)",
            "horas": "1h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Comercial (feedback)",
            "horas": "0.5h/sem"
          }
        ],
        "habilitantes": []
      },
      "riesgos": [
        {
          "riesgo": "Propuestas genéricas / sin personalización",
          "mitigacion": "Incluir campos obligatorios de contexto cliente; revisar outputs antes de enviar"
        },
        {
          "riesgo": "Líderes comerciales no adoptan la herramienta",
          "mitigacion": "Demostrar ahorro de tiempo con caso piloto; hacerlo más fácil que el proceso actual"
        },
        {
          "riesgo": "Prompts no capturan el \"Brinca Way\"",
          "mitigacion": "Co-crear con líderes comerciales; iterar con feedback de propuestas reales"
        },
        {
          "riesgo": "Información confidencial en prompts",
          "mitigacion": "Definir qué datos NO incluir; usar herramientas con políticas de privacidad adecuadas"
        },
        {
          "riesgo": "Dependencia de una sola herramienta (ChatGPT)",
          "mitigacion": "Documentar prompts agnósticos; probar en Claude/Gemini como backup"
        }
      ],
      "owner": {
        "responsable": "Líder Comercial (Upskill o Brinca)",
        "sponsor": "Gerencia Comercial"
      }
    },
    {
      "id": "09",
      "nombre": "Revisión de Licitaciones y Oportunidades (detección temprana) [GT]",
      "tipo": "Quick Win",
      "area": "Gestión Tecnológica",
      "esfuerzo": "Bajo",
      "estado": "Idea",
      "plazo": "Corto (≤1 mes)",
      "problema": "La detección de licitaciones es manual y tardía; se puede postular sin fit o fuera de plazo. Falta un sistema que monitoree fuentes, alerte a tiempo y priorice por probabilidad de éxito, reduciendo el riesgo de perder ventanas y esfuerzo en oportunidades de bajo valor.\n\n---",
      "solucion": "Monitor con alertas por palabras clave, clasificación IA-assisted de fit (tema, elegibilidad, plazo) y tablero de priorización. Genera recordatorios, checklist de requisitos y handoff al equipo para abrir ficha en CRM/PMO. Playbook de respuesta rápida y métricas de win-rate.\n\n---",
      "impacto": [
        "Más oportunidades calificadas",
        "Mejor timing",
        "Enfoque en alto valor",
        "Menos tiempo de rastreo"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": []
      },
      "criterio_exito": {
        "done": [],
        "success": []
      },
      "valor": "",
      "conexion_ia2": {
        "conexiones": [],
        "justificacion": ""
      },
      "primeros_pasos": [
        "Definir fuentes y keywords",
        "Configurar alertas y canal de notificación",
        "Entrenar clasificador de fit v0",
        "Armar tablero de scoring",
        "Publicar playbook de respuesta"
      ],
      "kpis": [],
      "recursos_habilitantes": {
        "recursos": [
          "Accesos a portales",
          "Curador GT/comercial",
          "Integrador no-code/ETL y dashboards"
        ],
        "horas": [
          {
            "fase": "**Implementación** (3 sem)",
            "rol": "Integrador no-code",
            "horas": "6h/sem"
          },
          {
            "fase": "**Implementación** (3 sem)",
            "rol": "Curador GT",
            "horas": "3h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Curador GT (monitoreo)",
            "horas": "2h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Comercial (evaluación)",
            "horas": "1h/sem"
          }
        ],
        "habilitantes": []
      },
      "riesgos": [
        {
          "riesgo": "\"Entrenar clasificador\" es muy técnico para Quick Win",
          "mitigacion": "Simplificar a reglas manuales + keywords primero; ML después"
        },
        {
          "riesgo": "Fuentes de licitaciones cambian o son difíciles de scrapear",
          "mitigacion": "Empezar con fuentes estables (Mercado Público, CORFO); alertas manuales como backup"
        },
        {
          "riesgo": "Demasiadas alertas = ruido",
          "mitigacion": "Definir criterios estrictos de fit; revisar y ajustar semanalmente"
        },
        {
          "riesgo": "Oportunidades detectadas pero no se actúa a tiempo",
          "mitigacion": "Asignar owner por alerta; SLA de respuesta (ej: 48h para evaluar)"
        },
        {
          "riesgo": "No hay capacidad para postular a todo lo detectado",
          "mitigacion": "Scoring de priorización; enfocarse en top 3-5 por mes"
        }
      ],
      "owner": {
        "responsable": "Líder Gestión Tecnológica",
        "sponsor": "Gerencia General"
      }
    },
    {
      "id": "10",
      "nombre": "Automatización documental (Facturación, contratos, conciliaciones)",
      "tipo": "Proyecto",
      "area": "Administración y Finanzas",
      "esfuerzo": "Medio",
      "estado": "Idea",
      "plazo": "Medio (≤3 meses)",
      "problema": "Administración y Finanzas ejecuta procesos manuales y descentralizados (facturación, contratos, conciliaciones, reportería). El uso limitado del ERP Kame obliga a planillas paralelas y controles uno a uno, elevando carga operativa, riesgo de errores y lentitud en cierres; la falta de integración reduce trazabilidad e indicadores consolidados.\n\n---",
      "solucion": "Automatización (Power Automate/n8n) conectando ERP Kame con fuentes financieras y administrativas. Extraer, clasificar y conciliar documentos; generar reportes y alertas de errores; aplicar IA para leer, validar y categorizar documentos y para conciliaciones y agregaciones en lenguaje natural.\n\n---",
      "impacto": [
        "Reducción del tiempo de conciliaciones y reportes (30-50%)",
        "Disminución de errores humanos en registro y control",
        "Aceleración de cierres mensuales y flujos de pago",
        "Liberación de capacidad para tareas analíticas y de control"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": []
      },
      "criterio_exito": {
        "done": [],
        "success": []
      },
      "valor": "",
      "conexion_ia2": {
        "conexiones": [],
        "justificacion": ""
      },
      "primeros_pasos": [
        "Evaluar conexiones disponibles entre Kame y n8n, otros",
        "Mapear procesos críticos: facturación, conciliaciones y reportería",
        "Definir flujos piloto (por ejemplo, conciliación bancaria automatizada)",
        "Implementar prototipo con proveedor",
        "Medir resultados e iterar (reducción de horas operativas, exactitud)"
      ],
      "kpis": [],
      "recursos_habilitantes": {
        "recursos": [
          "1 especialista externo en RPA / Power Automate (Vendor)",
          "1 analista financiero interno para validación de flujos",
          "Soporte TI para permisos e integraciones",
          "ERP Kame y acceso a datos contables / bancarios"
        ],
        "horas": [
          {
            "fase": "**Implementación** (8-12 sem)",
            "rol": "Vendor RPA",
            "horas": "12-16h/sem"
          },
          {
            "fase": "**Implementación** (8-12 sem)",
            "rol": "Analista A&F",
            "horas": "6h/sem"
          },
          {
            "fase": "**Implementación** (8-12 sem)",
            "rol": "Soporte TI",
            "horas": "2h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Analista A&F (monitoreo)",
            "horas": "2h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "TI (soporte)",
            "horas": "1h/sem"
          }
        ],
        "habilitantes": []
      },
      "riesgos": [
        {
          "riesgo": "ERP Kame no tiene API o es limitada",
          "mitigacion": "Validar capacidades técnicas ANTES de iniciar; evaluar alternativas (exportar CSV, RPA de UI)"
        },
        {
          "riesgo": "Datos maestros de baja calidad",
          "mitigacion": "Limpiar datos críticos como prerequisito; definir estándares de ingreso"
        },
        {
          "riesgo": "Resistencia del equipo A&F al cambio",
          "mitigacion": "Involucrar desde el diseño; mostrar beneficio personal (menos trabajo manual)"
        },
        {
          "riesgo": "Costo de proveedor RPA excede presupuesto",
          "mitigacion": "Cotizar 2-3 opciones; empezar con proceso pequeño como prueba"
        },
        {
          "riesgo": "Automatización introduce errores nuevos",
          "mitigacion": "Validación humana en paralelo durante 2-3 meses; rollback plan"
        }
      ],
      "owner": {
        "responsable": "Líder Administración y Finanzas",
        "sponsor": "Gerencia de Administración"
      }
    },
    {
      "id": "11",
      "nombre": "Evaluación de Entregables según Mejores Prácticas [EIC/PIA]",
      "tipo": "Quick Win",
      "area": "EIC / PIA",
      "esfuerzo": "Bajo",
      "estado": "Idea",
      "plazo": "Corto (≤1 mes)",
      "problema": "La calidad de entregables es heterogénea y la revisión es tardía. Sin rúbricas ni checklist, aumentan retrabajos y riesgos de inconsistencias frente a clientes.\n\n---",
      "solucion": "Evaluador IA+humano con rúbricas por tipo de entregable, checklist previo y feedback estructurado. Registro de hallazgos para mejora sistemática.\n\n---",
      "impacto": [
        "Menos retrabajo",
        "Mayor consistencia",
        "Aprendizaje continuo por práctica"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": []
      },
      "criterio_exito": {
        "done": [],
        "success": []
      },
      "valor": "",
      "conexion_ia2": {
        "conexiones": [],
        "justificacion": ""
      },
      "primeros_pasos": [
        "Definir tipo de proyectos para piloto",
        "Definir rúbricas",
        "Implementar checklist",
        "Piloto en 2 proyectos"
      ],
      "kpis": [],
      "recursos_habilitantes": {
        "recursos": [
          "Curadores por práctica",
          "Plantillas y ejemplos"
        ],
        "horas": [
          {
            "fase": "**Implementación** (3 sem)",
            "rol": "Líder EIC/PIA",
            "horas": "4h/sem"
          },
          {
            "fase": "**Implementación** (3 sem)",
            "rol": "Curadores (rúbricas)",
            "horas": "2h/sem c/u"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Curador por práctica",
            "horas": "1h/sem c/u"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Evaluación por entregable",
            "horas": "0.5-1h c/u"
          }
        ],
        "habilitantes": []
      },
      "riesgos": [
        {
          "riesgo": "Rúbricas demasiado rígidas / no aplican a todos los casos",
          "mitigacion": "Crear rúbricas por tipo de entregable; permitir excepciones documentadas"
        },
        {
          "riesgo": "Evaluación IA da falsos positivos/negativos",
          "mitigacion": "Siempre incluir revisión humana; IA como primera pasada, no decisión final"
        },
        {
          "riesgo": "Equipos perciben evaluación como control punitivo",
          "mitigacion": "Enmarcar como herramienta de mejora; feedback constructivo, no ranking"
        },
        {
          "riesgo": "No hay tiempo para evaluar todos los entregables",
          "mitigacion": "Priorizar entregables de alto riesgo o alta visibilidad; muestreo para el resto"
        },
        {
          "riesgo": "Criterios de \"mejores prácticas\" no están definidos",
          "mitigacion": "Documentar primero las prácticas actuales; evolucionar con el tiempo"
        }
      ],
      "owner": {
        "responsable": "Líder EIC o PIA",
        "sponsor": "Gerencia de Operaciones"
      }
    },
    {
      "id": "12",
      "nombre": "Piloto Buscador Inteligente de Instrumentos y Casos Análogos",
      "tipo": "Proyecto",
      "area": "Gestión Tecnológica",
      "esfuerzo": "Medio",
      "estado": "Idea",
      "plazo": "Mediano (2-6 meses)",
      "problema": "La identificación y comparación de instrumentos (CORFO/ANID/otros) y casos análogos se realiza manualmente y dispersa en múltiples fuentes. Esto consume horas, aumenta el riesgo de perder ventanas de postulación y genera variabilidad en la calidad de elegibilidad y aprendizaje entre proyectos. Falta un repositorio consultable y citable que capture experiencia previa.\n\n---",
      "solucion": "Motor de búsqueda con RAG sobre corpus curado (bases, FAQs, resoluciones, instructivos, fichas internas y entregables previos). Permite consultas en lenguaje natural con respuestas citadas, comparador de elegibilidad por criterios, extracción de requisitos clave, alertas de ventanas y casos análogos internos/externos. Integración con Drive/Pipedrive y panel de Evals para calidad.\n\n---",
      "impacto": [
        "Reducción del tiempo de scouting",
        "Mayor tasa de aciertos en elegibilidad",
        "Reutilización del conocimiento y menos retrabajo",
        "Visibilidad proactiva de ventanas y requisitos",
        "Base para Evals y QA de formulaciones",
        "Enfoque en alto valor"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": []
      },
      "criterio_exito": {
        "done": [],
        "success": []
      },
      "valor": "",
      "conexion_ia2": {
        "conexiones": [],
        "justificacion": ""
      },
      "primeros_pasos": [
        "Definir alcance v1 (CORFO/ANID + 2 instrumentos)",
        "Curar corpus y metadatos (fuente, vigencia, versión)",
        "Prototipo RAG con respuestas citadas y comparador",
        "Diseñar Evals y ajustar prompts",
        "Pilotear en 3 postulaciones reales"
      ],
      "kpis": [],
      "recursos_habilitantes": {
        "recursos": [
          "Product Owner de Gestión Tecnológica",
          "Encargado de armar el modelo que entiende textos y entrena/ajusta prompts",
          "Base de datos vectorial",
          "LLM"
        ],
        "horas": [
          {
            "fase": "**Implementación** (8-12 sem)",
            "rol": "Product Owner GT",
            "horas": "4h/sem"
          },
          {
            "fase": "**Implementación** (8-12 sem)",
            "rol": "Encargado RAG/prompts",
            "horas": "12-16h/sem"
          },
          {
            "fase": "**Implementación** (8-12 sem)",
            "rol": "Curador corpus",
            "horas": "4h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Curador corpus (actualización)",
            "horas": "2h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Encargado RAG (mantención)",
            "horas": "2h/sem"
          }
        ],
        "habilitantes": []
      },
      "riesgos": [
        {
          "riesgo": "Corpus desactualizado (bases cambian frecuentemente)",
          "mitigacion": "Definir proceso de actualización mensual; alertas de vencimiento"
        },
        {
          "riesgo": "RAG genera \"alucinaciones\" o citas incorrectas",
          "mitigacion": "Exigir citas verificables; validación humana de respuestas críticas"
        },
        {
          "riesgo": "Complejidad técnica subestimada (requiere ML/infra)",
          "mitigacion": "Empezar con búsqueda keyword + filtros; RAG como fase 2"
        },
        {
          "riesgo": "Bajo volumen de uso no justifica inversión",
          "mitigacion": "Validar demanda real con usuarios GT antes de construir"
        },
        {
          "riesgo": "Información sensible de clientes en el corpus",
          "mitigacion": "Definir qué documentos SÍ incluir; anonimizar casos internos"
        }
      ],
      "owner": {
        "responsable": "Líder Gestión Tecnológica",
        "sponsor": "Gerencia General"
      }
    },
    {
      "id": "13",
      "nombre": "Cierre Integral de Curso (docs, diplomas, encuestas) [Upskill]",
      "tipo": "Proyecto",
      "area": "Operaciones (Upskill)",
      "esfuerzo": "Medio",
      "estado": "Idea",
      "plazo": "Corto (≤3 meses)",
      "problema": "El cierre involucra múltiples tareas y fuentes, propensas a errores y demoras. La experiencia de alumnos y clientes se resiente y la trazabilidad es limitada.\n\n---",
      "solucion": "Asistente que orquesta checklist de cierre, genera documentos y comunicaciones automáticas, y consolida evidencias para auditoría.\n\n---",
      "impacto": [
        "Eficiencia operativa",
        "Menos errores",
        "Mejor experiencia alumno/cliente"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": []
      },
      "criterio_exito": {
        "done": [],
        "success": []
      },
      "valor": "",
      "conexion_ia2": {
        "conexiones": [],
        "justificacion": ""
      },
      "primeros_pasos": [
        "Definir checklist estándar",
        "Automatizar plantillas",
        "Medir tiempos y errores"
      ],
      "kpis": [],
      "recursos_habilitantes": {
        "recursos": [
          "Datos de alumnos",
          "Accesos plataformas",
          "Plantillas"
        ],
        "horas": [
          {
            "fase": "**Implementación** (6-8 sem)",
            "rol": "Líder Upskill",
            "horas": "4h/sem"
          },
          {
            "fase": "**Implementación** (6-8 sem)",
            "rol": "TI (automatización)",
            "horas": "6h/sem"
          },
          {
            "fase": "**Implementación** (6-8 sem)",
            "rol": "PIA (prompts/asistente)",
            "horas": "4h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Operador Upskill",
            "horas": "2h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "TI (soporte)",
            "horas": "1h/sem"
          }
        ],
        "habilitantes": []
      },
      "riesgos": [
        {
          "riesgo": "Proceso actual no está documentado",
          "mitigacion": "Mapear proceso AS-IS antes de automatizar; involucrar a operadores"
        },
        {
          "riesgo": "Múltiples plataformas sin integración",
          "mitigacion": "Identificar conectores disponibles; aceptar pasos manuales donde no haya API"
        },
        {
          "riesgo": "Datos de alumnos incompletos o incorrectos",
          "mitigacion": "Validación al inicio del curso; bloquear cierre si faltan campos críticos"
        },
        {
          "riesgo": "Dependencia de firmas con Clave Única (externo)",
          "mitigacion": "Recordatorios automatizados; escalar a empresa si hay demora"
        },
        {
          "riesgo": "Cambios en normativa SENCE",
          "mitigacion": "Diseñar proceso flexible; revisión post-actualización normativa"
        }
      ],
      "owner": {
        "responsable": "Líder Upskill (Operaciones)",
        "sponsor": "Gerencia Upskill"
      }
    },
    {
      "id": "14",
      "nombre": "Tablero de Pipeline IA (idea→POC→piloto→transferencia)",
      "tipo": "Proyecto",
      "area": "PIA / Innovación",
      "esfuerzo": "Medio",
      "estado": "Idea",
      "plazo": "Medio (≤3 meses)",
      "problema": "No hay visibilidad integral del portafolio IA; las iniciativas se duplican, se estancan o carecen de criterios claros de priorización por valor.\n\n---",
      "solucion": "Tablero único con etapas, dueños, valor estimado, riesgos y métricas. Vistas por área y SLA por fase. Revisión mensual para priorizar según impacto.\n\n---",
      "impacto": [
        "Toma de decisiones más ágil",
        "Centraliza el portafolio",
        "Habilita seguimiento de flujo",
        "Aumenta transparencia y responsabilidad",
        "Permite reportes ejecutivos periódicos"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": []
      },
      "criterio_exito": {
        "done": [],
        "success": []
      },
      "valor": "",
      "conexion_ia2": {
        "conexiones": [],
        "justificacion": ""
      },
      "primeros_pasos": [
        "Definir etapas y campos del tablero",
        "Configurar en Notion o PowerBI y estimar valor/impacto",
        "Cargar iniciativas actuales",
        "Asignar owners por fase",
        "Publicar dashboard trimestral"
      ],
      "kpis": [],
      "recursos_habilitantes": {
        "recursos": [
          "Herramienta BI/Notion/Sheet",
          "Rol PMO ligero",
          "Data analyst",
          "Gestor de portafolio"
        ],
        "horas": [
          {
            "fase": "**Implementación** (4 sem)",
            "rol": "Líder PIA",
            "horas": "4h/sem"
          },
          {
            "fase": "**Implementación** (4 sem)",
            "rol": "Data analyst",
            "horas": "6h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "PMO ligero",
            "horas": "2h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Owners de iniciativas",
            "horas": "0.5h/sem c/u"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Revisión mensual",
            "horas": "2h/mes"
          }
        ],
        "habilitantes": []
      },
      "riesgos": [
        {
          "riesgo": "Nadie actualiza el tablero (queda obsoleto)",
          "mitigacion": "Asignar responsable claro; vincular a rituales existentes (ej: reunión semanal)"
        },
        {
          "riesgo": "Demasiados campos / complejidad excesiva",
          "mitigacion": "Empezar con mínimo viable (5 campos); agregar según necesidad"
        },
        {
          "riesgo": "Iniciativas no se registran (sesgo de selección)",
          "mitigacion": "Hacer obligatorio para todo proyecto que use IA; auditar mensualmente"
        },
        {
          "riesgo": "Falta consenso en definición de etapas",
          "mitigacion": "Definir criterios de transición claros; validar con líderes antes de lanzar"
        },
        {
          "riesgo": "No hay valor percibido en reportar",
          "mitigacion": "Mostrar insights del tablero en reuniones; vincular a decisiones de inversión"
        }
      ],
      "owner": {
        "responsable": "Líder PIA",
        "sponsor": "Gerencia General"
      }
    },
    {
      "id": "15",
      "nombre": "Versionado y QA de Activos IA (v0.2)",
      "tipo": "Proyecto",
      "area": "Transversal",
      "esfuerzo": "Medio",
      "estado": "Idea",
      "plazo": "Medio (≤3 meses)",
      "problema": "Prompts y playbooks se modifican sin trazabilidad, con resultados inconsistentes entre equipos. No hay criterios uniformes de calidad ni responsables por activo, lo que dificulta mejorar y medir.\n\n---",
      "solucion": "Estándar de versionado con checklist QA, owners por activo y pruebas de regresión antes de liberar cambios. Historial mínimo y anuncio de cambios en canal dedicado.\n\n---",
      "impacto": [
        "Consistencia de resultados",
        "Menos errores en uso",
        "Reutilización segura y auditable",
        "Mejor auditoría/aprendizaje"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": []
      },
      "criterio_exito": {
        "done": [],
        "success": []
      },
      "valor": "",
      "conexion_ia2": {
        "conexiones": [],
        "justificacion": ""
      },
      "primeros_pasos": [
        "Definir plantilla de activo",
        "Crear checklist QA",
        "Asignar owners y capacitar curadores",
        "Habilitar control de versiones y canal de cambios"
      ],
      "kpis": [],
      "recursos_habilitantes": {
        "recursos": [
          "Repositorio compartido",
          "Roles de owner/QA",
          "Plantillas de QA y release notes",
          "Tiempo protegido"
        ],
        "horas": [
          {
            "fase": "**Implementación** (4 sem)",
            "rol": "Líder PIA",
            "horas": "4h/sem"
          },
          {
            "fase": "**Implementación** (4 sem)",
            "rol": "QA owners (capacitación)",
            "horas": "2h/sem c/u"
          },
          {
            "fase": "**Operación continua**",
            "rol": "QA owner por dominio (4-5)",
            "horas": "1h/sem c/u"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Revisión quincenal",
            "horas": "1h/sem promedio"
          }
        ],
        "habilitantes": []
      },
      "riesgos": [
        {
          "riesgo": "Proceso de QA se vuelve cuello de botella",
          "mitigacion": "Definir SLA de revisión (ej: 48h); delegar a owners de dominio"
        },
        {
          "riesgo": "Usuarios evitan el proceso y usan prompts \"no oficiales\"",
          "mitigacion": "Hacer el repositorio oficial más fácil y rápido que crear desde cero"
        },
        {
          "riesgo": "Versionado demasiado formal para el contexto",
          "mitigacion": "Simplificar: v1, v2, v3 con changelog breve; no hace falta semver completo"
        },
        {
          "riesgo": "No hay criterios claros de QA",
          "mitigacion": "Crear checklist mínimo: funciona, no tiene PII, tiene ejemplo de uso"
        },
        {
          "riesgo": "Owners no tienen tiempo para mantener activos",
          "mitigacion": "Limitar ownership a máximo 5 activos por persona; redistribuir si hay sobrecarga"
        }
      ],
      "owner": {
        "responsable": "Líder PIA",
        "sponsor": "Gerencia General"
      }
    },
    {
      "id": "16",
      "nombre": "Generación de entregables con evals y umbrales",
      "tipo": "Proyecto",
      "area": "PIA / EIC / GT / Upskill",
      "esfuerzo": "Medio",
      "estado": "Idea",
      "plazo": "Medio (≤3 meses)",
      "problema": "La calidad de resultados IA en tareas sensibles es variable y subjetiva. Sin evals ni umbrales objetivos, aumentan riesgos de error, sesgo y retrabajo al cambiar prompts o modelos.\n\n---",
      "solucion": "Diseñar evals por caso crítico con datasets de prueba, métricas y umbrales mínimos. Reportes automáticos y tendencia por versión; gate de calidad previo a producción.\n\n---",
      "impacto": [
        "Calidad consistente",
        "Menor riesgo reputacional",
        "Menos retrabajo",
        "Aprendizaje controlado por versión",
        "Evidencia para auditorías"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": []
      },
      "criterio_exito": {
        "done": [],
        "success": []
      },
      "valor": "",
      "conexion_ia2": {
        "conexiones": [],
        "justificacion": ""
      },
      "primeros_pasos": [
        "Seleccionar 3 casos críticos",
        "Definir métricas/umbrales",
        "Construir dataset",
        "Automatizar reporte y ejecutar piloto",
        "Publicar reporte y gates"
      ],
      "kpis": [],
      "recursos_habilitantes": {
        "recursos": [
          "Curador de datos",
          "Infra de prueba",
          "Owner por caso",
          "Herramienta de evals"
        ],
        "horas": [
          {
            "fase": "**Implementación** (8-12 sem)",
            "rol": "Líder PIA",
            "horas": "6h/sem"
          },
          {
            "fase": "**Implementación** (8-12 sem)",
            "rol": "Curador de datos",
            "horas": "8h/sem"
          },
          {
            "fase": "**Implementación** (8-12 sem)",
            "rol": "Owner por caso (3)",
            "horas": "2h/sem c/u"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Curador evals",
            "horas": "3h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Owner por caso",
            "horas": "1h/sem c/u"
          }
        ],
        "habilitantes": []
      },
      "riesgos": [
        {
          "riesgo": "Crear datasets de prueba es costoso en tiempo",
          "mitigacion": "Empezar con 10-20 ejemplos por caso; expandir iterativamente"
        },
        {
          "riesgo": "Métricas no capturan calidad real (gaming)",
          "mitigacion": "Combinar métricas automáticas con revisión humana periódica"
        },
        {
          "riesgo": "Umbrales demasiado estrictos bloquean producción",
          "mitigacion": "Empezar con umbrales bajos; ajustar según data real"
        },
        {
          "riesgo": "Umbrales demasiado laxos no detectan problemas",
          "mitigacion": "Monitorear incidentes en producción; correlacionar con scores"
        },
        {
          "riesgo": "Falta expertise para diseñar evals",
          "mitigacion": "Capacitar a 1-2 personas en frameworks (HELM, Ragas); empezar simple"
        }
      ],
      "owner": {
        "responsable": "Líder PIA",
        "sponsor": "Gerencia de Operaciones"
      }
    },
    {
      "id": "17",
      "nombre": "Tracking y SLA de Cierre SENCE [Upskill]",
      "tipo": "Proyecto",
      "area": "Upskill",
      "esfuerzo": "Medio",
      "estado": "Idea",
      "plazo": "Mediano (2-6 meses)",
      "problema": "Cierres dependen de gestiones manuales y firmas con Clave Única; baja visibilidad por participante/empresa retrasa liquidación y facturación. Falta control de SLA y alertas diferenciadas para OTIC vs. trato directo, generando reprocesos y riesgo de caja.\n\n---",
      "solucion": "Orquestación automática de cierres con timers de SLA, recordatorios multicanal y escalamientos; panel por cohorte/empresa/participante con estado, aging y proyección de facturación; checklists y evidencias para auditoría; campos de cobro (OTIC/directo, OC, monto, comisión, estado de factura); conectores con Excel/Monday para transición gradual.\n\n---",
      "impacto": [
        "Reducción del tiempo de cierre y liquidación",
        "Disminución de horas operativas en seguimiento",
        "Aceleración de facturación y menor riesgo de caja",
        "Trazabilidad y cumplimiento auditable SENCE"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": []
      },
      "criterio_exito": {
        "done": [],
        "success": []
      },
      "valor": "",
      "conexion_ia2": {
        "conexiones": [],
        "justificacion": ""
      },
      "primeros_pasos": [
        "Acordar SLA por financiamiento (OTIC/directo) y reglas de escalamiento",
        "Estandarizar checklist y plantillas; normalizar datos (IDs, correos, RUT)",
        "Implementar recordatorios y enlaces únicos de firma; habilitar remitentes/WhatsApp Business",
        "Construir tablero mínimo viable (estado, aging, OC, factura, bloqueos) y bitácora de contacto",
        "Ejecutar piloto con una cohorte; medir baseline vs. mejora y ajustar reglas"
      ],
      "kpis": [],
      "recursos_habilitantes": {
        "recursos": [
          "Accesos SENCE",
          "Plantillas de comunicación",
          "Panel BI"
        ],
        "horas": [
          {
            "fase": "**Implementación** (10-14 sem)",
            "rol": "Líder Upskill",
            "horas": "4h/sem"
          },
          {
            "fase": "**Implementación** (10-14 sem)",
            "rol": "TI (panel + automatización)",
            "horas": "8h/sem"
          },
          {
            "fase": "**Implementación** (10-14 sem)",
            "rol": "PIA (orquestación)",
            "horas": "4h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Operador seguimiento",
            "horas": "4h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "TI (soporte)",
            "horas": "1h/sem"
          }
        ],
        "habilitantes": []
      },
      "riesgos": [
        {
          "riesgo": "SLAs no son realistas para el proceso actual",
          "mitigacion": "Medir baseline actual antes de definir SLAs; ajustar con datos"
        },
        {
          "riesgo": "Empresas/participantes no responden a recordatorios",
          "mitigacion": "Escalar a contacto telefónico; definir protocolo de follow-up"
        },
        {
          "riesgo": "Datos de contacto incorrectos o desactualizados",
          "mitigacion": "Validar al inicio del curso; proceso de actualización"
        },
        {
          "riesgo": "Integración con plataforma SENCE es compleja",
          "mitigacion": "Empezar con tracking manual + alertas; automatizar gradualmente"
        },
        {
          "riesgo": "Resistencia del equipo a ser medido por SLA",
          "mitigacion": "Enmarcar como herramienta de gestión, no de castigo; celebrar cumplimiento"
        }
      ],
      "owner": {
        "responsable": "Líder Upskill (Operaciones)",
        "sponsor": "Gerencia Upskill"
      }
    },
    {
      "id": "18",
      "nombre": "Marco de Gobierno de Datos e IA Responsable",
      "tipo": "Épica",
      "area": "Transversal",
      "esfuerzo": "Alto",
      "estado": "Idea",
      "plazo": "Largo (>3 meses)",
      "problema": "Las decisiones sobre IA están fragmentadas y sin lineamientos comunes. Falta un marco para roles, controles y manejo de riesgos que habilite escalar con confianza y cumplimiento.\n\n---",
      "solucion": "Política mínima viable: roles, procesos, controles y gestión de incidentes. Comité y rituales. Alineado a estándares y a regulación aplicable.\n\n---",
      "impacto": [
        "Escalamiento seguro",
        "Reduce riesgo",
        "Acelera aprobaciones de pilotos",
        "Eleva confianza del cliente",
        "Estandariza buenas prácticas"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": []
      },
      "criterio_exito": {
        "done": [],
        "success": []
      },
      "valor": "",
      "conexion_ia2": {
        "conexiones": [],
        "justificacion": ""
      },
      "primeros_pasos": [
        "Nombrar responsable",
        "Definir principios",
        "Crear checklist de riesgos",
        "Acordar proceso de aprobación",
        "Socializar y entrenar"
      ],
      "kpis": [],
      "recursos_habilitantes": {
        "recursos": [
          "Asesoría legal básica",
          "RACI y sponsorship",
          "Data governance"
        ],
        "horas": [
          {
            "fase": "**Implementación** (12-16 sem)",
            "rol": "CDO / Responsable",
            "horas": "6h/sem"
          },
          {
            "fase": "**Implementación** (12-16 sem)",
            "rol": "Comité (Legal, TI, PIA, Ops)",
            "horas": "2h/sem c/u"
          },
          {
            "fase": "**Implementación** (12-16 sem)",
            "rol": "Asesoría legal (puntual)",
            "horas": "4h/mes"
          },
          {
            "fase": "**Operación continua**",
            "rol": "CDO / Responsable",
            "horas": "2h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Comité (reunión mensual)",
            "horas": "2h/mes c/u"
          }
        ],
        "habilitantes": []
      },
      "riesgos": [
        {
          "riesgo": "Nadie tiene autoridad clara para aprobar políticas",
          "mitigacion": "Definir RACI explícito; sponsor ejecutivo con poder de decisión"
        },
        {
          "riesgo": "Marco demasiado burocrático frena innovación",
          "mitigacion": "Diseñar proceso ágil: checklist rápido para bajo riesgo, revisión profunda solo para alto riesgo"
        },
        {
          "riesgo": "Falta de expertise legal en IA/datos",
          "mitigacion": "Consultoría puntual para definir principios; no necesita abogado full-time"
        },
        {
          "riesgo": "Políticas se crean pero nadie las sigue",
          "mitigacion": "Integrar a procesos existentes; auditorías periódicas ligeras"
        },
        {
          "riesgo": "Resistencia cultural (\"esto es para empresas grandes\")",
          "mitigacion": "Mostrar riesgos reales con ejemplos; empezar con lo mínimo viable"
        }
      ],
      "owner": {
        "responsable": "Chief Data Officer o equivalente (por nombrar)",
        "sponsor": "Gerencia General"
      }
    },
    {
      "id": "19",
      "nombre": "Automatización C3 con Auto-QA y Medición Mensual [PIA / EIC]",
      "tipo": "Épica",
      "area": "Operaciones (PIA/EIC/Sostenibilidad)",
      "esfuerzo": "Alto",
      "estado": "Idea",
      "plazo": "Medio (≤3 meses)",
      "problema": "El armado del C3 consume horas y presenta errores recurrentes; la comparación mensual es manual. Falta trazabilidad de cambios y controles previos al envío.\n\n---",
      "solucion": "Automatizar extracción, cálculo y armado del C3 con validaciones automáticas, bitácora de cambios y panel mensual de desempeño. QA previo con reglas.\n\n---",
      "impacto": [
        "Reducción de tiempos",
        "Calidad estable",
        "Comparabilidad mes a mes"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": []
      },
      "criterio_exito": {
        "done": [],
        "success": []
      },
      "valor": "",
      "conexion_ia2": {
        "conexiones": [],
        "justificacion": ""
      },
      "primeros_pasos": [
        "Documentar plantilla C3",
        "Automatizar cálculos y gráficos",
        "Definir reglas QA",
        "Publicar panel"
      ],
      "kpis": [],
      "recursos_habilitantes": {
        "recursos": [
          "Plantillas actuales",
          "Scripts/LLM",
          "Curador QA"
        ],
        "horas": [
          {
            "fase": "**Implementación** (8-12 sem)",
            "rol": "Líder EIC/PIA",
            "horas": "6h/sem"
          },
          {
            "fase": "**Implementación** (8-12 sem)",
            "rol": "Desarrollador scripts",
            "horas": "12h/sem"
          },
          {
            "fase": "**Implementación** (8-12 sem)",
            "rol": "Curador QA",
            "horas": "4h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Curador QA",
            "horas": "2h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Desarrollador (mantención)",
            "horas": "2h/sem"
          }
        ],
        "habilitantes": []
      },
      "riesgos": [
        {
          "riesgo": "Estructura del C3 no está documentada",
          "mitigacion": "Mapear formato actual en detalle antes de automatizar"
        },
        {
          "riesgo": "Fuentes de datos para C3 son inconsistentes",
          "mitigacion": "Estandarizar inputs; validar completitud antes de procesar"
        },
        {
          "riesgo": "Reglas de validación incorrectas generan falsos positivos",
          "mitigacion": "Iterar reglas con usuarios; permitir override manual documentado"
        },
        {
          "riesgo": "Automatización rompe con cambios de formato",
          "mitigacion": "Diseñar tolerante a cambios; alertas cuando hay anomalías"
        },
        {
          "riesgo": "Dependencia de scripts/LLM sin mantenedor",
          "mitigacion": "Documentar código; asignar owner técnico; no depender de \"héroe\""
        }
      ],
      "owner": {
        "responsable": "Líder EIC / PIA",
        "sponsor": "Gerencia de Operaciones"
      }
    }
  ]
};