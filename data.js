const DATA = {
  "metadata": {
    "generado": "2025-12-11 00:48",
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
      "nombre": "\"Leader as Teacher\" – Piloto (2-3 líderes, casos reales)",
      "tipo": "Quick Win",
      "area": "Cultura / PIA",
      "esfuerzo": "Bajo",
      "estado": "Idea",
      "plazo": "Corto (≤1 mes)",
      "problema": "En Brinca, los líderes hablan de IA en reuniones y presentaciones, pero rara vez la usan de forma visible frente a sus equipos. Esto envía una señal clara: \"la IA es para otros\"—para técnicos, para PIA, para los que tienen tiempo de experimentar. El resultado es que los equipos perciben la adopción como opcional, no como una capacidad estratégica que se espera de todos.\n\nEl problema de fondo es que **sin modelaje visible del liderazgo, la adopción carece de legitimidad**. Cuando un colaborador ve que su jefe sigue haciendo las cosas \"como siempre\", no hay incentivo para cambiar. Y cuando alguien se atreve a usar IA, lo hace casi en secreto, sin reconocimiento ni validación.\n\n**Modelo mental \"Tone from the top\"**: La adopción de nuevas prácticas en una organización sigue el ejemplo del liderazgo. Si los líderes usan IA, comparten sus casos, y hablan de sus errores, envían una señal poderosa: \"esto es importante, yo lo hago, y tú también puedes\". Sin ese ejemplo, la IA queda relegada a iniciativa de nicho.\n\nEl costo de no actuar es alto: la brecha entre \"discurso de innovación\" y \"práctica real\" se amplía, los equipos se vuelven cínicos ante los mensajes de cambio, y los talentos que quieren innovar se frustran.\n\n---",
      "solucion": "Implementar un programa piloto donde **2-3 líderes enseñan casos reales de uso de IA** a sus equipos y a la organización, demostrando con su ejemplo que la adopción es esperada y valorada:\n\n**Componentes:**\n\n1. **Selección de 2-3 líderes piloto**\n   - Voluntarios entusiastas que ya tienen al menos un caso de uso de IA\n   - Criterios: influencia en su área + disposición a exponerse + tiempo disponible\n   - Perfil: Gerentes, Jefes de área, o líderes de proyecto con equipo a cargo\n\n2. **Formato de microclase (30-45 min)**\n   - Estructura: Contexto → Problema → Cómo usé IA → Resultado → \"Cómo lo puedes aplicar\"\n   - Incluye: decisión tomada, riesgos considerados, métricas de resultado\n   - Espacio para preguntas y discusión\n\n3. **Coaching previo (1:1)**\n   - Ayudar a cada líder a identificar su mejor caso de uso\n   - Estructurar la microclase con plantilla estándar\n   - Ensayo guiado con feedback antes de la sesión real\n\n4. **Audiencia definida**\n   - Equipo directo del líder (asistencia esperada)\n   - Invitados de otras áreas (abierto)\n   - Formato híbrido: presencial + Google Meet para grabación\n\n5. **Documentación para emulación**\n   - Grabación de cada microclase\n   - Slides y materiales compartidos en repositorio (ver Oportunidad 06)\n   - Ficha resumen: caso + herramienta + aprendizajes\n\n6. **Feedback 360°**\n   - Encuesta post-sesión a asistentes (NPS + preguntas abiertas)\n   - Retroalimentación al líder para mejora continua\n   - Identificación de casos para replicar\n\n---",
      "impacto": [
        "Señal cultural: De \"IA es para técnicos o PIA\" → líderes modelan uso en tareas reales de gestión",
        "Legitimidad: De adopción percibida como opcional → \"si mi jefe lo usa y lo enseña, yo también debería\"",
        "Casos replicables: De teoría abstracta en capacitaciones → ejemplos concretos de su propia organización",
        "Confianza para exponerse: De miedo a equivocarse con IA → líderes vulnerables que comparten errores y aprendizajes",
        "Aceleración del aprendizaje: De curva lenta por ensayo-error individual → atajos aprendidos de quien ya probó",
        "Efecto contagio: De iniciativas aisladas → más líderes quieren participar al ver el reconocimiento y valor"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": [
          {
            "id": "01",
            "nombre": "Reconocimiento",
            "relacion": "Líderes ganan puntos en el sistema de gamificación como \"Teachers\""
          },
          {
            "id": "04",
            "nombre": "Show & Tell",
            "relacion": "Microclases destacadas pueden presentarse en sesiones de Show & Tell"
          },
          {
            "id": "06",
            "nombre": "Repositorio de prompts",
            "relacion": "Materiales y casos de microclases se publican en el repositorio"
          }
        ]
      },
      "criterio_exito": {
        "done": [
          "2-3 líderes seleccionados y comprometidos con fecha de microclase",
          "Plantilla de microclase creada y validada",
          "Cada líder tiene caso identificado y microclase estructurada",
          "Calendario de 2-3 sesiones publicado y comunicado",
          "Primera microclase realizada con >10 asistentes"
        ],
        "success": [
          "2-3 microclases realizadas según calendario",
          "NPS promedio de sesiones >7.5",
          ">80% de asistencia del equipo directo de cada líder",
          "Al menos 3 casos replicados por asistentes en su trabajo",
          "2+ líderes adicionales quieren participar en siguiente ronda"
        ]
      },
      "valor": "**Beneficio principal**: Señal cultural desde arriba que normaliza el uso de IA, acelera adopción por imitación, y genera casos replicables documentados. Es una de las intervenciones más poderosas para cambiar la percepción de que \"IA es para otros\".\n\n**Costo de no hacer**: IA se sigue percibiendo como \"cosa de técnicos\"; la adopción avanza lenta; falta legitimidad para experimentar; los equipos no ven ejemplo de sus propios líderes.\n\n**Esfuerzo vs Impacto**: Muy bajo esfuerzo (~8h setup + 2-3h preparación por líder × 2-3 líderes), alto impacto cultural y simbólico. Relación costo-beneficio muy favorable.\n\n---",
      "conexion_ia2": {
        "conexiones": [
          {
            "dimension": "Cultura",
            "subdimension": "Liderazgo y sponsorship",
            "score_actual": "2.1",
            "impacto": "+0.8 a +1.0 (directo)"
          },
          {
            "dimension": "Cultura",
            "subdimension": "Rituales y tiempo protegido",
            "score_actual": "2.1",
            "impacto": "+0.3 (indirecto)"
          },
          {
            "dimension": "Adopción",
            "subdimension": "Penetración",
            "score_actual": "2.3",
            "impacto": "+0.3 (indirecto)"
          }
        ],
        "justificacion": "Leader as Teacher ataca directamente \"Liderazgo y sponsorship\" (hoy en 2.1) al hacer que líderes modelen públicamente el uso de IA. Impacta \"Rituales\" porque crea un espacio formal y recurrente de aprendizaje desde el liderazgo. El efecto en \"Penetración\" viene de que equipos ven a su jefe usar IA, se animan a probar, y tienen casos concretos para replicar."
      },
      "primeros_pasos": [
        "Identificar 2-3 líderes piloto con Gerencia General: buscar voluntarios entusiastas que ya tengan al menos un caso de uso de IA (no tiene que ser sofisticado)",
        "Crear plantilla de microclase: estructura estándar (Contexto → Problema → Cómo usé IA → Resultado → \"Cómo lo puedes aplicar tú\")",
        "Sesión de coaching 1:1 con cada líder: ayudarle a identificar su mejor caso y estructurar la microclase usando la plantilla",
        "Ensayo guiado: práctica de 15-20 min con feedback del coach antes de la sesión real",
        "Calendarizar y comunicar: fechas fijas en calendario compartido, invitación a equipos directos + interesados de otras áreas",
        "Ejecutar primera microclase: grabar sesión, recoger feedback, ajustar formato para siguientes"
      ],
      "kpis": [
        {
          "nombre": "Microclases realizadas",
          "descripcion": "# sesiones dictadas por líderes (baseline: 0, target: 2-3 en primer ciclo)",
          "baseline": "0",
          "target": "2-3 en primer ciclo"
        },
        {
          "nombre": "NPS de sesiones",
          "descripcion": "satisfacción de asistentes con cada microclase (target: >7.5)",
          "target": ">7.5"
        },
        {
          "nombre": "Asistencia del equipo directo",
          "descripcion": "% del equipo de cada líder que asiste a su sesión (target: >80%)",
          "target": ">80%"
        },
        {
          "nombre": "Aplicación post-sesión",
          "descripcion": "# asistentes que replican el caso en su propio trabajo (baseline: desconocido, target: >30%)",
          "baseline": "desconocido",
          "target": ">30%"
        },
        {
          "nombre": "Efecto contagio",
          "descripcion": "# líderes adicionales que quieren participar en siguiente ronda (target: 2+)",
          "target": "2+"
        },
        {
          "nombre": "Documentación",
          "descripcion": "# materiales publicados en repositorio (target: 2-3 fichas + 2-3 grabaciones)",
          "target": "2-3 fichas + 2-3 grabaciones"
        }
      ],
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
            "rol": "Líder participante (2-3)",
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
        "habilitantes": [
          {
            "nombre": "2-3 líderes voluntarios",
            "descripcion": "Gerentes/jefes dispuestos a exponerse enseñando",
            "estado": "⏳ Por identificar"
          },
          {
            "nombre": "Casos reales de uso IA",
            "descripcion": "Cada líder tiene al menos 1 caso propio para compartir",
            "estado": "⏳ Por identificar"
          },
          {
            "nombre": "Coach didáctico",
            "descripcion": "Persona que ayuda a estructurar las microclases",
            "estado": "⏳ Por asignar"
          },
          {
            "nombre": "Plantilla de microclase",
            "descripcion": "Formato estándar para estructurar presentación",
            "estado": "⏳ Por crear"
          },
          {
            "nombre": "Espacio para sesiones",
            "descripcion": "Sala física + Google Meet para grabación",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Tiempo protegido",
            "descripcion": "2-3h de preparación por líder participante",
            "estado": "⚠️ Negociar"
          },
          {
            "nombre": "Patrocinio de Gerencia General",
            "descripcion": "Legitimidad y ejemplo desde arriba",
            "estado": "✅ Comprometido"
          },
          {
            "nombre": "Repositorio para materiales",
            "descripcion": "Donde publicar grabaciones, slides y fichas",
            "estado": "🔄 En diseño (Op. 06)"
          }
        ]
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
      "estado": "POC",
      "plazo": "Corto (≤1 mes)",
      "problema": "En Brinca, cada propuesta comercial es un ejercicio artesanal. Cada líder comercial tiene su propio estilo, sus propias plantillas (o ninguna), y empieza casi desde cero cada vez. El resultado: propuestas inconsistentes en tono, estructura y profundidad técnica. Algunas son excelentes; otras, apenas aceptables. Y todas toman más tiempo del necesario.\n\nEl problema de fondo es que **no existe un proceso estandarizado ni herramientas que aceleren la creación de propuestas**. No hay un banco de casos de éxito para referenciar, ni plantillas por tipo de servicio, ni criterios de calidad comunes. Cada propuesta reinventa la rueda, y el conocimiento de propuestas anteriores queda atrapado en carpetas personales o correos.\n\n**Modelo mental \"Propuesta como producto\"**: Una propuesta comercial no debería ser un documento único cada vez—debería ser una combinación de módulos probados (introducción Brinca, descripción de servicio, metodología, casos de éxito, equipo) que se ensamblan y personalizan según el cliente. La IA puede acelerar dramáticamente este ensamblaje.\n\nEl costo actual es alto: horas invertidas en redacción, inconsistencia de marca, oportunidades perdidas por responder tarde, y frustración de los equipos comerciales que sienten que hacen trabajo repetitivo.\n\n---",
      "solucion": "Desarrollar un **generador de propuestas comerciales asistido por IA** que acelere la creación de propuestas manteniendo consistencia de marca y calidad.\n\n**Estado actual: POC desarrollada**\n\nYa existe un prototipo funcional construido con herramientas no-code (Lovable, v0, Google AI Studio) que genera propuestas a partir de inputs estructurados. La POC aún no se ha probado con una propuesta real, pero demuestra la viabilidad técnica del enfoque.\n\n**Componentes de la solución:**\n\n1. **Aplicación generadora de propuestas**\n   - Interfaz simple donde el usuario ingresa: cliente, servicio, contexto, requerimientos\n   - IA genera borrador de propuesta usando plantillas y tono Brinca\n   - Output en formato editable (Google Docs o Word)\n\n2. **Banco de módulos reutilizables**\n   - Introducción Brinca (quiénes somos, diferenciadores)\n   - Descripciones de servicios por línea (IA, Innovación, Sostenibilidad, Upskill)\n   - Metodologías y frameworks estándar\n   - Casos de éxito por industria/servicio\n   - Perfiles de equipo\n\n3. **Personalización por contexto**\n   - Adaptación de tono según cliente (corporativo, startup, gobierno)\n   - Selección de casos de éxito relevantes\n   - Ajuste de alcance y entregables según presupuesto\n\n4. **Revisión y refinamiento**\n   - Checklist de calidad antes de enviar\n   - Sugerencias de mejora por IA\n   - Historial de propuestas para aprendizaje\n\n---",
      "impacto": [
        "Tiempo de elaboración: De 4-8 horas por propuesta → 1-2 horas (reducción 60-75%)",
        "Consistencia de marca: De propuestas con estilos dispares → tono y estructura \"Brinca Way\" consistente",
        "Velocidad de respuesta: De \"dame unos días\" → respuesta en 24-48h para propuestas estándar",
        "Reutilización de conocimiento: De cada propuesta desde cero → ensamblaje de módulos probados",
        "Calidad del primer borrador: De borrador que requiere reescritura → borrador que requiere solo ajustes",
        "Carga del equipo comercial: De frustración por trabajo repetitivo → tiempo liberado para personalización y relación con cliente"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": [
          {
            "id": "06",
            "nombre": "Repositorio de prompts",
            "relacion": "Prompts del generador se documentan en el repositorio"
          },
          {
            "id": "15",
            "nombre": "Versionado QA",
            "relacion": "Módulos de propuesta siguen estándares de calidad"
          }
        ]
      },
      "criterio_exito": {
        "done": [
          "POC validada con al menos 3 propuestas reales",
          "Banco de módulos cargado (intro, servicios, metodologías, casos)",
          "Flujo de uso documentado para equipo comercial",
          "Al menos 2 líderes comerciales capacitados en el uso",
          "Feedback incorporado de las primeras propuestas"
        ],
        "success": [
          ">50% de propuestas generadas usan la herramienta",
          "Tiempo promedio de elaboración reducido >50%",
          "NPS de usuarios (equipo comercial) >7",
          "Tasa de conversión de propuestas se mantiene o mejora",
          "Al menos 10 propuestas generadas con la herramienta"
        ]
      },
      "valor": "**Beneficio principal**: Reducción dramática del tiempo de elaboración de propuestas (de horas a minutos para el primer borrador), liberando al equipo comercial para tareas de mayor valor como personalización y relación con clientes. Consistencia de marca garantizada.\n\n**Costo de no hacer**: Cada propuesta sigue tomando 4-8 horas; oportunidades perdidas por responder tarde; frustración del equipo; inconsistencia de marca; conocimiento de propuestas anteriores no se reutiliza.\n\n**Esfuerzo vs Impacto**: Bajo esfuerzo adicional dado que la POC ya existe (~15h para validar y cargar módulos), alto impacto en productividad comercial. ROI muy favorable.\n\n---",
      "conexion_ia2": {
        "conexiones": [
          {
            "dimension": "Eficiencia",
            "subdimension": "Horas liberadas",
            "score_actual": "1.6",
            "impacto": "+0.8 a +1.0 (directo)"
          },
          {
            "dimension": "Adopción",
            "subdimension": "Activos reutilizables",
            "score_actual": "2.3",
            "impacto": "+0.5 (directo)"
          },
          {
            "dimension": "Negocio",
            "subdimension": "Impacto comercial",
            "score_actual": "2.0",
            "impacto": "+0.3 a +0.5 (directo)"
          }
        ],
        "justificacion": "El copiloto de propuestas ataca directamente \"Horas liberadas\" (hoy en 1.6) al automatizar una tarea repetitiva y de alto consumo de tiempo. Contribuye a \"Activos reutilizables\" porque los módulos de propuesta quedan documentados y disponibles. El impacto en \"Negocio\" viene de responder más rápido a oportunidades y mejorar consistencia de las propuestas."
      },
      "primeros_pasos": [
        "Agendar reunión de definición de alcance: Kick-off con stakeholders (Comercial + PIA) para definir scope, usuarios objetivo, y criterios de éxito del proyecto",
        "Validar POC con propuesta real: Usar la herramienta existente para generar una propuesta real y evaluar calidad del output",
        "Identificar gaps: Documentar qué falta en la POC (módulos, tono, formato) basado en el piloto",
        "Cargar banco de módulos: Recopilar y estructurar contenido reutilizable (intro Brinca, servicios, casos de éxito, metodologías)",
        "Ajustar prompts y flujo: Iterar la POC incorporando feedback del primer uso real",
        "Capacitar a 2 líderes comerciales: Demo + práctica guiada con caso propio",
        "Escalar gradualmente: Medir adopción y ajustar según feedback continuo"
      ],
      "kpis": [
        {
          "nombre": "Tiempo de elaboración",
          "descripcion": "horas promedio por propuesta (baseline: 4-8h, target: 1-2h)",
          "baseline": "4-8h",
          "target": "1-2h"
        },
        {
          "nombre": "Adopción de la herramienta",
          "descripcion": "% propuestas generadas con el copiloto (baseline: 0%, target: >50%)",
          "baseline": "0%",
          "target": ">50%"
        },
        {
          "nombre": "Propuestas generadas",
          "descripcion": "# propuestas creadas con la herramienta por mes (baseline: 0, target: 5+)",
          "baseline": "0",
          "target": "5+"
        },
        {
          "nombre": "NPS de usuarios",
          "descripcion": "satisfacción del equipo comercial con la herramienta (target: >7)",
          "target": ">7"
        },
        {
          "nombre": "Tasa de conversión",
          "descripcion": "% propuestas enviadas que se ganan (baseline: actual, target: mantener o mejorar)",
          "baseline": "actual",
          "target": "mantener o mejorar"
        },
        {
          "nombre": "Módulos reutilizados",
          "descripcion": "# de módulos en el banco disponibles para ensamblaje (target: 15+)",
          "target": "15+"
        }
      ],
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
        "habilitantes": [
          {
            "nombre": "POC funcional",
            "descripcion": "Prototipo que genera propuestas con IA",
            "estado": "✅ Desarrollada (Lovable/v0/AI Studio)"
          },
          {
            "nombre": "Propuestas históricas",
            "descripcion": "Banco de propuestas anteriores para extraer módulos",
            "estado": "✅ Disponible (disperso)"
          },
          {
            "nombre": "Líderes comerciales disponibles",
            "descripcion": "2 personas para validar y dar feedback",
            "estado": "⏳ Por confirmar"
          },
          {
            "nombre": "Casos de éxito documentados",
            "descripcion": "Casos por industria/servicio para incluir",
            "estado": "⚠️ Parcial - consolidar"
          },
          {
            "nombre": "Descripciones de servicios",
            "descripcion": "Textos estándar por línea de negocio",
            "estado": "⏳ Por estructurar"
          },
          {
            "nombre": "Tono y estilo Brinca",
            "descripcion": "Guía de comunicación para consistencia",
            "estado": "⚠️ Tácito - documentar"
          }
        ]
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
      "tipo": "Proyecto",
      "area": "Gestión Tecnológica",
      "esfuerzo": "Medio",
      "estado": "Idea",
      "plazo": "Medio (≤3 meses)",
      "problema": "En Gestión Tecnológica, la detección de licitaciones y oportunidades de financiamiento es un proceso manual y reactivo. Alguien tiene que acordarse de revisar Mercado Público, CORFO, ChileCompra, y otras fuentes—y cuando lo hace, a veces ya es tarde. El resultado: oportunidades perdidas por no enterarse a tiempo, o esfuerzo desperdiciado en postulaciones sin fit real.\n\nEl problema de fondo es que **no existe un sistema de monitoreo proactivo**. Las licitaciones se detectan por casualidad, por un contacto que avisa, o cuando ya queda poco plazo. No hay criterios claros de cuáles vale la pena perseguir, y el equipo termina evaluando todo en lugar de enfocarse en las de mayor probabilidad de éxito.\n\n**Modelo mental \"Radar de oportunidades\"**: En lugar de buscar licitaciones cuando hay tiempo, tener un radar siempre encendido que detecte, filtre y priorice automáticamente. El equipo recibe alertas solo de oportunidades relevantes, con tiempo suficiente para preparar una postulación de calidad.\n\nEl costo actual es alto: oportunidades de alto valor que se pierden, tiempo invertido en evaluar licitaciones sin fit, postulaciones apresuradas de baja calidad, y frustración del equipo que siente que siempre está corriendo.\n\n---",
      "solucion": "Implementar un **sistema de detección temprana de licitaciones y oportunidades** que monitoree fuentes, filtre por relevancia, y alerte al equipo con tiempo suficiente para actuar:\n\n**Componentes:**\n\n1. **Monitoreo automatizado de fuentes**\n   - Configurar alertas en Mercado Público, CORFO, ChileCompra, y otras fuentes relevantes\n   - Keywords por área de expertise (innovación, tecnología, sostenibilidad, capacitación)\n   - Frecuencia: diaria o en tiempo real según la fuente\n\n2. **Filtro de relevancia (fit)**\n   - Criterios: tema alineado, montos mínimos, plazos factibles, requisitos de elegibilidad\n   - Scoring simple: Alto / Medio / Bajo fit\n   - Descarte automático de oportunidades claramente fuera de scope\n\n3. **Tablero de oportunidades**\n   - Vista consolidada de todas las oportunidades detectadas\n   - Campos: fuente, monto, plazo, fit score, estado (nueva, en evaluación, descartada, postulando)\n   - Alertas de plazos próximos a vencer\n\n4. **Proceso de evaluación rápida**\n   - Checklist de go/no-go para evaluar en <30 min\n   - Template de ficha de oportunidad para decisión\n   - Asignación de owner si se decide postular\n\n5. **Playbook de respuesta**\n   - Guía de qué hacer cuando se detecta una oportunidad de alto fit\n   - Templates de documentos comunes (carta de intención, CV, etc.)\n   - Checklist de requisitos típicos por tipo de licitación\n\n---\n\n**Implementación técnica del monitoreo:**\n\n| Fuente | Método de monitoreo | Herramientas sugeridas |\n|--------|---------------------|------------------------|\n| **Mercado Público** | RSS feed nativo + alertas por email configurables en el portal | Configurar alertas con keywords en el mismo portal; RSS a Slack/email con Zapier |\n| **ChileCompra** | Similar a Mercado Público, tiene sistema de alertas propio | Alertas nativas + Google Alerts como backup |\n| **CORFO** | No tiene RSS; requiere scraping periódico o revisión manual | Script Python con BeautifulSoup que corre diario (cron) y notifica cambios; alternativa: Make/n8n |\n| **Fondos sectoriales** | Varía por fuente; algunos tienen newsletters | Suscribirse a newsletters + Google Alerts por nombre del fondo |\n\n**Flujo técnico simplificado:**\n\n```\n[Fuentes] → [Agregador] → [Filtro keywords] → [Notificación] → [Tablero]\n```\n\n1. **Agregador**: Herramienta que centraliza las alertas (puede ser tan simple como un canal de Slack/Google Chat dedicado, o más sofisticado como n8n/Make)\n2. **Filtro**: Reglas simples por keywords que descartan ruido obvio antes de notificar\n3. **Notificación**: Mensaje a canal con link, título, monto, plazo\n4. **Tablero**: Spreadsheet o Notion donde se registra manualmente cada oportunidad que pasa el filtro inicial\n\n**Opciones de complejidad:**\n\n| Nivel | Descripción | Esfuerzo |\n|-------|-------------|----------|\n| **Básico** | Alertas nativas de portales + revisión manual diaria + spreadsheet | ~10h setup |\n| **Intermedio** | Agregador con Zapier/Make + notificaciones a Slack + tablero Notion | ~25h setup |\n| **Avanzado** | Scraping automatizado + clasificación IA de fit + dashboard integrado | ~60h+ setup |\n\n*Recomendación: Empezar con nivel básico-intermedio y escalar según valor demostrado.*\n\n---",
      "impacto": [
        "Detección de oportunidades: De enterarse tarde o por casualidad → alertas automáticas con días/semanas de anticipación",
        "Tiempo de rastreo: De horas semanales revisando portales manualmente → monitoreo automático con revisión de 15 min/día",
        "Calidad de postulaciones: De postulaciones apresuradas → tiempo suficiente para preparar propuestas de calidad",
        "Foco del equipo: De evaluar todo lo que aparece → enfocarse solo en oportunidades de alto fit",
        "Win-rate: De postular \"a ver qué pasa\" → postular estratégicamente a las de mayor probabilidad de éxito",
        "Visibilidad: De oportunidades en la cabeza de una persona → tablero compartido con estado de cada oportunidad"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": [
          {
            "id": "08",
            "nombre": "Copiloto Propuestas",
            "relacion": "Propuestas para licitaciones pueden usar el generador"
          },
          {
            "id": "14",
            "nombre": "Tablero Pipeline",
            "relacion": "Oportunidades detectadas alimentan el pipeline comercial"
          }
        ]
      },
      "criterio_exito": {
        "done": [
          "Alertas configuradas en al menos 3 fuentes principales (Mercado Público, CORFO, ChileCompra)",
          "Keywords definidas por área de expertise",
          "Tablero de oportunidades funcionando con campos básicos",
          "Checklist de evaluación go/no-go documentado",
          "Al menos 1 persona capacitada en el proceso"
        ],
        "success": [
          ">80% de licitaciones relevantes detectadas antes de 1 semana del cierre",
          "Tiempo de evaluación inicial <30 min por oportunidad",
          "Al menos 5 postulaciones realizadas con el nuevo proceso",
          "Win-rate se mantiene o mejora vs. período anterior",
          "Equipo reporta menos estrés por plazos apretados"
        ]
      },
      "valor": "**Beneficio principal**: No perder oportunidades de alto valor por falta de detección temprana. Tiempo liberado de búsqueda manual. Mejor calidad de postulaciones por tener más tiempo de preparación.\n\n**Costo de no hacer**: Seguir perdiendo licitaciones por enterarse tarde; esfuerzo desperdiciado en postulaciones apresuradas; frustración del equipo; oportunidades de negocio perdidas.\n\n**Esfuerzo vs Impacto**: Esfuerzo medio (~25-40h para nivel intermedio), alto impacto en pipeline comercial. ROI positivo si se gana al menos 1 licitación adicional por el mejor timing.\n\n---",
      "conexion_ia2": {
        "conexiones": [
          {
            "dimension": "Eficiencia",
            "subdimension": "Horas liberadas",
            "score_actual": "1.6",
            "impacto": "+0.3 a +0.5 (directo)"
          },
          {
            "dimension": "Negocio",
            "subdimension": "Impacto comercial",
            "score_actual": "2.0",
            "impacto": "+0.5 a +0.7 (directo)"
          },
          {
            "dimension": "Adopción",
            "subdimension": "Penetración",
            "score_actual": "2.3",
            "impacto": "+0.2 (indirecto)"
          }
        ],
        "justificacion": "El radar de oportunidades impacta directamente \"Negocio\" (hoy en 2.0) al aumentar el pipeline de licitaciones detectadas a tiempo. Contribuye a \"Horas liberadas\" al automatizar la búsqueda manual. El efecto en \"Penetración\" viene de que más personas en GT usan herramientas de automatización."
      },
      "primeros_pasos": [
        "Mapear fuentes prioritarias: Identificar las 3-5 fuentes más relevantes (Mercado Público, CORFO, ChileCompra, fondos sectoriales)",
        "Definir keywords por expertise: Lista de términos que indican oportunidades alineadas (innovación, tecnología, capacitación, sostenibilidad, etc.)",
        "Configurar alertas nativas: Usar las alertas propias de cada plataforma + Google Alerts como complemento",
        "Crear tablero simple: Spreadsheet con campos básicos (fuente, nombre, monto, plazo, fit, estado, owner)",
        "Documentar checklist go/no-go: Criterios claros para decidir si postular en <30 min",
        "Asignar responsable de monitoreo: Persona que revisa alertas diariamente y actualiza tablero"
      ],
      "kpis": [
        {
          "nombre": "Oportunidades detectadas",
          "descripcion": "# licitaciones/fondos identificados por mes (baseline: ~5 informal, target: 15+)",
          "baseline": "~5 informal",
          "target": "15+"
        },
        {
          "nombre": "Lead time de detección",
          "descripcion": "días entre publicación y detección (baseline: variable, target: <3 días)",
          "baseline": "variable",
          "target": "<3 días"
        },
        {
          "nombre": "Tasa de conversión a postulación",
          "descripcion": "% oportunidades detectadas que se postulan (baseline: desconocido, target: 20-30%)",
          "baseline": "desconocido",
          "target": "20-30%"
        },
        {
          "nombre": "Win-rate",
          "descripcion": "% postulaciones ganadas (baseline: actual, target: mantener o mejorar)",
          "baseline": "actual",
          "target": "mantener o mejorar"
        },
        {
          "nombre": "Tiempo de evaluación",
          "descripcion": "minutos para decidir go/no-go (target: <30 min)",
          "target": "<30 min"
        },
        {
          "nombre": "Cobertura de fuentes",
          "descripcion": "# fuentes monitoreadas activamente (target: 5+)",
          "target": "5+"
        }
      ],
      "recursos_habilitantes": {
        "recursos": [
          "Accesos a portales",
          "Curador GT/comercial",
          "Integrador no-code/ETL y dashboards"
        ],
        "horas": [
          {
            "fase": "**Implementación** (6-8 sem)",
            "rol": "Integrador técnico",
            "horas": "4h/sem"
          },
          {
            "fase": "**Implementación** (6-8 sem)",
            "rol": "Curador GT (definición)",
            "horas": "3h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Responsable monitoreo",
            "horas": "3h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Comercial (evaluación)",
            "horas": "1h/sem"
          }
        ],
        "habilitantes": [
          {
            "nombre": "Accesos a portales",
            "descripcion": "Cuentas en Mercado Público, CORFO, ChileCompra",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Lista de fuentes prioritarias",
            "descripcion": "Mapeo de dónde buscar por tipo de oportunidad",
            "estado": "⏳ Por documentar"
          },
          {
            "nombre": "Keywords por expertise",
            "descripcion": "Términos de búsqueda por área de servicio",
            "estado": "⏳ Por definir"
          },
          {
            "nombre": "Criterios de fit",
            "descripcion": "Reglas claras de qué vale la pena perseguir",
            "estado": "⏳ Por documentar"
          },
          {
            "nombre": "Tablero de seguimiento",
            "descripcion": "Spreadsheet o Notion para tracking",
            "estado": "⏳ Por crear"
          },
          {
            "nombre": "Responsable de monitoreo",
            "descripcion": "Persona dedicada a revisar alertas",
            "estado": "⏳ Por asignar"
          },
          {
            "nombre": "Checklist go/no-go",
            "descripcion": "Template para evaluación rápida",
            "estado": "⏳ Por crear"
          }
        ]
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
      "problema": "En Administración y Finanzas, los procesos críticos (facturación, contratos, conciliaciones, reportería) se ejecutan de forma manual y fragmentada. Aunque existe un ERP (Kame), su uso es limitado: el equipo mantiene planillas paralelas en Excel, hace controles uno a uno, y dedica horas a tareas repetitivas que deberían estar automatizadas.\n\nEl problema de fondo es que **los sistemas no están integrados y los procesos no están automatizados**. Cada cierre mensual requiere reconciliar datos entre múltiples fuentes manualmente. Cada factura, cada conciliación bancaria, cada reporte—todo pasa por manos humanas que podrían estar haciendo análisis en lugar de data entry.\n\n**Modelo mental \"Fábrica de documentos\"**: A&F debería funcionar como una línea de producción donde los documentos fluyen automáticamente: se generan, validan, clasifican y archivan sin intervención manual excepto para excepciones. Hoy funciona como un taller artesanal donde cada documento es único.\n\nEl costo es alto: cierres que toman días en lugar de horas, errores de digitación que generan reprocesos, falta de visibilidad en tiempo real del estado financiero, y un equipo atrapado en lo operativo sin tiempo para lo estratégico.\n\n---",
      "solucion": "Implementar **automatización de procesos documentales** en A&F, conectando sistemas existentes y eliminando tareas manuales repetitivas:\n\n**Componentes:**\n\n1. **Integración de sistemas**\n   - Conectar ERP Kame con bancos, facturación electrónica, y otras fuentes\n   - Eliminar planillas paralelas consolidando en una sola fuente de verdad\n   - Herramientas: Power Automate, n8n, o Zapier según complejidad\n\n2. **Automatización de conciliaciones**\n   - Conciliación bancaria automática: cruzar movimientos de banco con registros contables\n   - Alertas de discrepancias para revisión humana solo en excepciones\n   - Reducir de horas de trabajo manual a minutos de validación\n\n3. **Procesamiento inteligente de documentos**\n   - OCR + IA para leer facturas, contratos, y otros documentos\n   - Clasificación y archivo automático según tipo y proveedor\n   - Extracción de datos clave (montos, fechas, RUT) sin digitación manual\n\n4. **Generación automática de reportes**\n   - Reportes de cierre mensual pre-armados\n   - Dashboard de estado financiero en tiempo real\n   - Alertas de vencimientos y anomalías\n\n5. **Flujos de aprobación digitales**\n   - Workflow de aprobación de pagos y documentos\n   - Firma electrónica integrada donde aplique\n   - Trazabilidad completa de quién aprobó qué y cuándo\n\n---",
      "impacto": [
        "Tiempo de conciliaciones: De horas de cruce manual → minutos de validación de excepciones (reducción 70-80%)",
        "Errores de digitación: De errores frecuentes que generan reprocesos → near-zero con validación automática",
        "Cierre mensual: De días de trabajo intensivo → proceso fluido con reportes pre-armados",
        "Visibilidad financiera: De \"esperar el cierre para saber\" → dashboard en tiempo real",
        "Carga del equipo: De atrapados en lo operativo → tiempo liberado para análisis y control",
        "Trazabilidad: De \"buscar en correos y carpetas\" → historial completo y auditable"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": [
          {
            "id": "14",
            "nombre": "Tablero Pipeline",
            "relacion": "Datos financieros alimentan visibilidad de proyectos"
          }
        ]
      },
      "criterio_exito": {
        "done": [
          "Al menos 1 proceso crítico automatizado end-to-end (ej: conciliación bancaria)",
          "Integración funcional entre Kame y fuente externa (banco o facturación)",
          "Dashboard de estado financiero operativo",
          "Equipo A&F capacitado en nuevo flujo",
          "Documentación de procesos automatizados"
        ],
        "success": [
          "Tiempo de cierre mensual reducido >30%",
          "Errores de conciliación reducidos >50%",
          ">80% de documentos procesados sin intervención manual",
          "Equipo A&F reporta menor carga operativa",
          "Al menos 2 procesos adicionales identificados para automatizar"
        ]
      },
      "valor": "**Beneficio principal**: Liberar al equipo A&F de tareas operativas repetitivas para enfocarse en análisis y control. Reducir errores y acelerar cierres. Visibilidad financiera en tiempo real.\n\n**Costo de no hacer**: Equipo sobrecargado con tareas manuales; errores de digitación que generan reprocesos; cierres lentos; falta de visibilidad para toma de decisiones; riesgo de auditoría por falta de trazabilidad.\n\n**Esfuerzo vs Impacto**: Esfuerzo medio-alto (~80-120h con proveedor externo), alto impacto en eficiencia operativa de A&F. ROI positivo en 6-12 meses por horas liberadas.\n\n---",
      "conexion_ia2": {
        "conexiones": [
          {
            "dimension": "Eficiencia",
            "subdimension": "Horas liberadas",
            "score_actual": "1.6",
            "impacto": "+0.8 a +1.2 (directo)"
          },
          {
            "dimension": "Eficiencia",
            "subdimension": "Reducción de errores",
            "score_actual": "1.6",
            "impacto": "+0.5 a +0.7 (directo)"
          },
          {
            "dimension": "Riesgo",
            "subdimension": "Trazabilidad y auditoría",
            "score_actual": "1.2",
            "impacto": "+0.3 (indirecto)"
          }
        ],
        "justificacion": "La automatización documental ataca directamente \"Horas liberadas\" y \"Reducción de errores\" (ambas en Eficiencia, hoy en 1.6) al eliminar trabajo manual repetitivo. Impacta \"Riesgo\" porque mejora la trazabilidad y facilita auditorías. Es una de las oportunidades con mayor potencial de ROI medible."
      },
      "primeros_pasos": [
        "Evaluación técnica de Kame: Validar qué APIs o métodos de extracción existen (API, exportación CSV, acceso BD)",
        "Mapear procesos actuales: Documentar paso a paso cómo se hacen hoy conciliaciones, facturación, reportes",
        "Identificar quick win: Seleccionar 1 proceso de alto impacto y baja complejidad para piloto (ej: conciliación bancaria)",
        "Cotizar proveedores: Obtener 2-3 cotizaciones de especialistas RPA/automatización",
        "Ejecutar piloto: Implementar automatización del proceso seleccionado con proveedor",
        "Medir y expandir: Documentar resultados del piloto y priorizar siguientes procesos"
      ],
      "kpis": [
        {
          "nombre": "Documentos procesados automáticamente",
          "descripcion": "% del total de documentos (baseline: ~0%, target: >80%)",
          "baseline": "~0%",
          "target": ">80%"
        },
        {
          "nombre": "Tiempo de conciliación bancaria",
          "descripcion": "horas por mes (baseline: medir actual, target: reducción >70%)",
          "baseline": "medir actual",
          "target": "reducción >70%"
        },
        {
          "nombre": "Errores de digitación",
          "descripcion": "# errores detectados por mes (baseline: medir actual, target: reducción >50%)",
          "baseline": "medir actual",
          "target": "reducción >50%"
        },
        {
          "nombre": "Tiempo de cierre mensual",
          "descripcion": "días hábiles desde fin de mes hasta cierre (baseline: medir actual, target: reducción >30%)",
          "baseline": "medir actual",
          "target": "reducción >30%"
        },
        {
          "nombre": "Horas operativas liberadas",
          "descripcion": "horas/mes del equipo A&F en tareas automatizadas (target: >20h/mes)",
          "target": ">20h/mes"
        },
        {
          "nombre": "Satisfacción equipo A&F",
          "descripcion": "percepción de carga operativa (encuesta, target: mejora vs. baseline)",
          "target": "mejora vs. baseline"
        }
      ],
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
        "habilitantes": [
          {
            "nombre": "ERP Kame operativo",
            "descripcion": "Sistema contable funcionando con datos actualizados",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Acceso técnico a Kame",
            "descripcion": "API, exportación, o acceso a BD para extraer datos",
            "estado": "⚠️ Por validar"
          },
          {
            "nombre": "Acceso a bancos",
            "descripcion": "Conexión para descargar movimientos bancarios",
            "estado": "⏳ Por configurar"
          },
          {
            "nombre": "Datos maestros limpios",
            "descripcion": "Proveedores, clientes, cuentas contables consistentes",
            "estado": "⚠️ Parcial - revisar"
          },
          {
            "nombre": "Proveedor RPA identificado",
            "descripcion": "Especialista externo para implementación",
            "estado": "⏳ Por cotizar"
          },
          {
            "nombre": "Presupuesto aprobado",
            "descripcion": "Recursos para proveedor externo",
            "estado": "⏳ Por definir"
          },
          {
            "nombre": "Sponsor A&F comprometido",
            "descripcion": "Liderazgo de A&F impulsa el proyecto",
            "estado": "✅ Comprometido"
          }
        ]
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
      "problema": "En EIC, la calidad de los entregables a clientes depende casi enteramente de quién los produce. No existen criterios compartidos de \"qué es un buen entregable\", ni rúbricas de evaluación, ni checklist antes de enviar. La revisión—cuando existe—ocurre tarde, cuando ya hay poco tiempo para corregir.\n\nEl problema de fondo es que **no hay un estándar de calidad explícito ni un proceso de validación sistemático**. Cada consultor tiene su propio criterio de \"suficientemente bueno\". Algunos entregables son excelentes; otros, apenas aceptables. Y el cliente es quien descubre las inconsistencias.\n\n**Modelo mental \"Control de calidad en fábrica\"**: Así como un producto no sale de la línea sin pasar control de calidad, un entregable no debería llegar al cliente sin pasar una validación estructurada. No se trata de burocracia, sino de un checkpoint rápido que detecta problemas antes de que sean visibles al cliente.\n\nEl costo actual: retrabajo por correcciones tardías, inconsistencias que dañan la reputación, frustración de equipos que \"pensaban que estaba bien\", y pérdida de oportunidades de aprendizaje porque los errores no se documentan.\n\n---",
      "solucion": "Implementar un **sistema de evaluación de entregables** que combine checklist, rúbricas, y revisión IA+humana para asegurar calidad antes de enviar al cliente:\n\n**Componentes:**\n\n1. **Rúbricas por tipo de entregable**\n   - Criterios claros de qué evaluar (estructura, contenido, formato, ortografía, alineación con brief)\n   - Escala simple: Cumple / Cumple parcial / No cumple\n   - Adaptadas por tipo: informe, presentación, propuesta, taller, etc.\n\n2. **Checklist pre-envío**\n   - Lista de verificación rápida (<5 min) antes de enviar cualquier entregable\n   - Items obligatorios: ortografía, formato, datos del cliente correctos, versión final\n   - Firma del responsable confirmando que pasó el checklist\n\n3. **Evaluación asistida por IA**\n   - Prompt que revisa entregable contra la rúbrica\n   - Detecta: inconsistencias, errores de formato, secciones faltantes, tono inadecuado\n   - Genera feedback estructurado con sugerencias específicas\n\n4. **Revisión humana (peer review)**\n   - Para entregables de alto riesgo: revisión por un par antes de enviar\n   - Criterios claros de cuándo aplica (monto del proyecto, visibilidad, cliente nuevo)\n   - Feedback constructivo, no punitivo\n\n5. **Registro de hallazgos**\n   - Documentar errores recurrentes para mejora sistemática\n   - Input para capacitación y actualización de rúbricas\n   - Métricas de calidad por equipo/tipo de entregable\n\n---",
      "impacto": [
        "Retrabajo: De correcciones frecuentes post-envío → problemas detectados antes de llegar al cliente",
        "Consistencia: De calidad dependiente del consultor → estándar mínimo garantizado",
        "Tiempo de revisión: De revisiones largas y desestructuradas → checklist de 5 min + IA que detecta obvios",
        "Aprendizaje: De errores que se repiten → registro de hallazgos que alimenta mejora continua",
        "Confianza del equipo: De \"espero que esté bien\" → validación objetiva antes de enviar",
        "Reputación con clientes: De inconsistencias visibles → entregables consistentemente profesionales"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": [
          {
            "id": "06",
            "nombre": "Repositorio de prompts",
            "relacion": "Prompts de evaluación se documentan en el repositorio"
          },
          {
            "id": "16",
            "nombre": "Evals y umbrales",
            "relacion": "Sistema de evals puede extenderse a entregables"
          },
          {
            "id": "15",
            "nombre": "Versionado QA",
            "relacion": "Rúbricas y checklist siguen estándares de QA"
          }
        ]
      },
      "criterio_exito": {
        "done": [
          "Rúbricas definidas para al menos 3 tipos de entregables (informe, presentación, propuesta)",
          "Checklist pre-envío creado y comunicado",
          "Prompt de evaluación IA funcionando para 1 tipo de entregable",
          "Piloto ejecutado en 5 entregables reales",
          "Feedback del equipo incorporado"
        ],
        "success": [
          ">80% de entregables pasan por checklist antes de enviar",
          "Tasa de \"aprobado en primer envío\" mejora >20% vs. baseline",
          "Retrabajo por errores detectables reducido >30%",
          "Equipo percibe el proceso como útil (no como burocracia)",
          "Al menos 2 patrones de error identificados y abordados"
        ]
      },
      "valor": "**Beneficio principal**: Reducir retrabajo y mejorar consistencia de entregables. Cada hora de retrabajo evitada es hora ganada para trabajo productivo. Protege reputación con clientes.\n\n**Costo de no hacer**: Errores siguen llegando al cliente; retrabajo constante; inconsistencia de calidad; frustración del equipo; riesgo reputacional.\n\n**Esfuerzo vs Impacto**: Bajo esfuerzo (~15-20h para crear rúbricas y checklist), impacto directo en calidad de entregas. Quick Win claro.\n\n---",
      "conexion_ia2": {
        "conexiones": [
          {
            "dimension": "Eficiencia",
            "subdimension": "Reducción de errores",
            "score_actual": "1.6",
            "impacto": "+0.5 a +0.7 (directo)"
          },
          {
            "dimension": "Adopción",
            "subdimension": "Activos reutilizables",
            "score_actual": "2.3",
            "impacto": "+0.3 (indirecto)"
          },
          {
            "dimension": "Riesgo",
            "subdimension": "Calidad de outputs",
            "score_actual": "1.2",
            "impacto": "+0.5 (directo)"
          }
        ],
        "justificacion": "La evaluación de entregables ataca directamente \"Reducción de errores\" (hoy en 1.6) y \"Calidad de outputs\" en Riesgo (hoy en 1.2). Las rúbricas y checklist se vuelven activos reutilizables. Es una intervención de bajo costo con impacto visible en calidad."
      },
      "primeros_pasos": [
        "Identificar tipos de entregables: Listar los 3-5 tipos más frecuentes (informe, presentación, propuesta, etc.)",
        "Crear rúbrica para 1 tipo: Empezar con el más común; definir criterios y escala simple",
        "Diseñar checklist pre-envío: Lista de 8-10 items obligatorios antes de cualquier envío",
        "Crear prompt de evaluación IA: Para el tipo de entregable seleccionado; probar con ejemplos históricos",
        "Piloto con 5 entregables: Aplicar rúbrica + checklist + IA en entregables reales; recoger feedback",
        "Ajustar y expandir: Refinar basado en piloto; crear rúbricas para tipos adicionales"
      ],
      "kpis": [
        {
          "nombre": "Tasa de aprobación primer envío",
          "descripcion": "% entregables aceptados por cliente sin correcciones (baseline: medir actual, target: >80%)",
          "baseline": "medir actual",
          "target": ">80%"
        },
        {
          "nombre": "Adopción del checklist",
          "descripcion": "% entregables que pasan por checklist antes de enviar (baseline: 0%, target: >90%)",
          "baseline": "0%",
          "target": ">90%"
        },
        {
          "nombre": "Horas de retrabajo",
          "descripcion": "horas/mes dedicadas a correcciones post-envío (baseline: medir actual, target: reducción >30%)",
          "baseline": "medir actual",
          "target": "reducción >30%"
        },
        {
          "nombre": "Errores detectados pre-envío",
          "descripcion": "# problemas encontrados por checklist/IA antes de llegar al cliente (target: tracking)",
          "target": "tracking"
        },
        {
          "nombre": "Tipos de entregables cubiertos",
          "descripcion": "# tipos con rúbrica definida (baseline: 0, target: 5+)",
          "baseline": "0",
          "target": "5+"
        },
        {
          "nombre": "Percepción del equipo",
          "descripcion": "utilidad percibida del proceso (encuesta, target: >7)",
          "target": ">7"
        }
      ],
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
        "habilitantes": [
          {
            "nombre": "Tipos de entregables identificados",
            "descripcion": "Lista de los tipos más frecuentes",
            "estado": "⏳ Por documentar"
          },
          {
            "nombre": "Ejemplos de entregables buenos",
            "descripcion": "Referencias de calidad para crear rúbricas",
            "estado": "✅ Disponible (disperso)"
          },
          {
            "nombre": "Criterios de calidad implícitos",
            "descripcion": "Conocimiento tácito de qué es \"bueno\"",
            "estado": "⚠️ Tácito - explicitar"
          },
          {
            "nombre": "Herramienta IA",
            "descripcion": "ChatGPT/Claude para evaluación asistida",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Tiempo para evaluación",
            "descripcion": "~30 min por entregable para revisión",
            "estado": "⚠️ Negociar"
          },
          {
            "nombre": "Cultura de feedback",
            "descripcion": "Equipo receptivo a retroalimentación",
            "estado": "⚠️ Variable - reforzar"
          },
          {
            "nombre": "Sponsor EIC/PIA",
            "descripcion": "Liderazgo impulsa adopción del proceso",
            "estado": "✅ Comprometido"
          }
        ]
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
      "nombre": "Piloto Buscador Inteligente de Instrumentos y Casos Análogos [GT]",
      "tipo": "Proyecto",
      "area": "Gestión Tecnológica",
      "esfuerzo": "Medio",
      "estado": "Idea",
      "plazo": "Medio (≤3 meses)",
      "problema": "En Gestión Tecnológica, encontrar el instrumento de financiamiento correcto para cada proyecto es un ejercicio de arqueología documental. Las bases de CORFO, ANID, fondos regionales y otros programas están dispersas en múltiples sitios web, PDFs, y resoluciones. Cada vez que llega un nuevo proyecto, alguien tiene que navegar esta maraña, comparar requisitos de elegibilidad, y buscar casos análogos que sirvan de referencia—todo manualmente.\n\nEl problema de fondo es que **no existe un repositorio unificado y consultable de instrumentos y experiencia previa**. El conocimiento está fragmentado: las bases están en sitios web que cambian, los casos exitosos en carpetas personales, las lecciones aprendidas en la cabeza de quien los ejecutó. Cada postulación \"reinventa la rueda\" en lugar de construir sobre lo ya aprendido.\n\n**Modelo mental \"GPS de financiamiento\"**: Imagina un GPS que conoce todas las rutas de financiamiento disponibles. Le dices tu destino (tipo de proyecto, monto, requisitos) y te muestra las mejores opciones, te alerta de restricciones, y te recomienda rutas que otros han tomado exitosamente. Eso es lo que debería existir para instrumentos de fomento.\n\nEl costo actual: horas de scouting manual por cada proyecto, ventanas de postulación perdidas por no enterarse a tiempo, elegibilidad mal evaluada por no conocer los detalles, y pérdida de aprendizaje organizacional porque los casos anteriores no están documentados.\n\n---",
      "solucion": "Desarrollar un **buscador inteligente de instrumentos de financiamiento** usando herramientas que ya manejan documentos con citas automáticas, sin necesidad de construir infraestructura RAG propia:\n\n**Componentes:**\n\n1. **Corpus curado de instrumentos**\n   - Bases de CORFO (Innovación, Prototipos, Semilla, etc.)\n   - Programas ANID (FONDECYT, FONDEF, etc.)\n   - Fondos regionales y sectoriales\n   - FAQs, resoluciones, instructivos, y aclaraciones\n   - Metadatos: vigencia, montos, requisitos, plazos\n\n2. **Motor de consulta con citas**\n   - Consultas en lenguaje natural (\"¿qué instrumento sirve para un prototipo de $50M con 30% cofinanciamiento?\")\n   - Respuestas con citas verificables a fuentes originales\n   - Comparador de elegibilidad entre instrumentos\n   - Extracción automática de requisitos clave\n\n3. **Repositorio de casos análogos**\n   - Fichas de proyectos anteriores (anonimizados si es necesario)\n   - Qué instrumento usaron, resultado, lecciones aprendidas\n   - Entregables tipo que sirvieron de referencia\n   - Búsqueda por similitud de proyecto\n\n4. **Sistema de alertas**\n   - Ventanas de postulación próximas a abrir/cerrar\n   - Cambios en bases o requisitos de instrumentos monitoreados\n   - Nuevos instrumentos que matchean con perfil GT\n\n5. **Validación de calidad**\n   - Verificación humana de respuestas críticas\n   - Feedback para mejorar el corpus\n   - Documentación de consultas frecuentes\n\n**Herramientas recomendadas:**\n\n| Herramienta | Descripción | Ventajas | Esfuerzo |\n|-------------|-------------|----------|----------|\n| **NotebookLM** (Google) | Carga PDFs y permite consultas con citas automáticas | Cero infraestructura; citas precisas; interfaz simple; gratis | ~10h setup |\n| **Claude Code / Codex** | Agentes CLI que pueden leer archivos locales y responder consultas | Mayor flexibilidad; integración con flujos de trabajo; consultas complejas | ~15h setup |\n| **Gemini con contexto** | Subir documentos y consultar con contexto extendido | Gran ventana de contexto; integración Google Workspace | ~10h setup |\n\n**Arquitectura simplificada con NotebookLM:**\n\n```\n[Corpus PDFs] → [Subir a NotebookLM] → [Notebook por tema]\n                                              ↓\n[Usuario: consulta] → [Respuesta con citas a párrafos específicos]\n```\n\n**Arquitectura con agente CLI:**\n\n```\n[Corpus local organizado] → [Agente CLI (Claude Code/Codex)]\n                                        ↓\n[Usuario: consulta terminal] → [Respuesta + referencias a archivos]\n```\n\n*Recomendación: Empezar con NotebookLM por su simplicidad y citas automáticas. Escalar a agentes CLI si se necesita mayor integración o consultas más complejas.*\n\n---",
      "impacto": [
        "Tiempo de scouting: De horas de búsqueda manual por proyecto → respuestas en segundos con fuentes citadas",
        "Precisión de elegibilidad: De \"creo que aplica\" → evaluación estructurada contra requisitos documentados",
        "Aprendizaje organizacional: De conocimiento en cabezas individuales → repositorio de casos consultable",
        "Ventanas de postulación: De enterarse tarde o por casualidad → alertas proactivas con anticipación",
        "Calidad de formulación: De empezar desde cero → referencia a casos análogos exitosos",
        "Capacidad del equipo: De expertos como cuello de botella → conocimiento democratizado vía buscador"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": [
          {
            "id": "09",
            "nombre": "Radar de Licitaciones",
            "relacion": "Alertas de instrumentos complementan alertas de licitaciones"
          },
          {
            "id": "06",
            "nombre": "Repositorio de prompts",
            "relacion": "Prompts del buscador se documentan en el repositorio"
          },
          {
            "id": "16",
            "nombre": "Evals y umbrales",
            "relacion": "Sistema de evals del buscador puede usar framework común"
          }
        ]
      },
      "criterio_exito": {
        "done": [
          "Corpus de al menos 3 instrumentos principales (CORFO, ANID) cargado y organizado",
          "Buscador funcional con respuestas citadas (nivel básico o intermedio)",
          "Al menos 5 casos análogos documentados y consultables",
          "Equipo GT capacitado en uso del buscador",
          "Proceso de actualización del corpus definido"
        ],
        "success": [
          ">80% de consultas de elegibilidad pasan por el buscador",
          "Tiempo de scouting por proyecto reducido >50%",
          ">90% de respuestas con cita verificable a fuente original",
          "Al menos 10 consultas por mes del equipo GT",
          "Corpus actualizado con 5+ instrumentos"
        ]
      },
      "valor": "**Beneficio principal**: Democratizar el conocimiento de instrumentos de financiamiento, reducir tiempo de scouting, y capturar aprendizaje organizacional de casos anteriores. Cada hora ahorrada en búsqueda es hora ganada para formulación de calidad.\n\n**Costo de no hacer**: Conocimiento sigue fragmentado; cada proyecto busca desde cero; ventanas de postulación perdidas; expertos como cuello de botella; aprendizaje de casos anteriores no se capitaliza.\n\n**Esfuerzo vs Impacto**: Esfuerzo bajo-medio (~15-25h con NotebookLM), alto impacto en eficiencia de GT. ROI positivo si mejora la tasa de éxito en postulaciones.\n\n---",
      "conexion_ia2": {
        "conexiones": [
          {
            "dimension": "Eficiencia",
            "subdimension": "Horas liberadas",
            "score_actual": "1.6",
            "impacto": "+0.5 a +0.7 (directo)"
          },
          {
            "dimension": "Adopción",
            "subdimension": "Activos reutilizables",
            "score_actual": "2.3",
            "impacto": "+0.4 (directo)"
          },
          {
            "dimension": "Negocio",
            "subdimension": "Impacto comercial",
            "score_actual": "2.0",
            "impacto": "+0.3 a +0.5 (indirecto)"
          }
        ],
        "justificacion": "El buscador inteligente ataca directamente \"Horas liberadas\" (hoy en 1.6) al automatizar búsqueda manual. Contribuye a \"Activos reutilizables\" porque el corpus y los casos documentados quedan disponibles para toda GT. El impacto en \"Negocio\" viene de mejorar la tasa de éxito en postulaciones por mejor evaluación de elegibilidad."
      },
      "primeros_pasos": [
        "Mapear instrumentos prioritarios: Identificar los 3-5 instrumentos más usados por GT (ej: CORFO Innovación, Prototipos, FONDEF)",
        "Recopilar corpus: Descargar bases, FAQs, resoluciones de cada instrumento prioritario",
        "Crear notebook en NotebookLM: Subir PDFs de instrumentos; crear un notebook por tema o por instrumento",
        "Documentar 5 casos análogos: Fichas de proyectos anteriores con instrumento usado, resultado, y lecciones aprendidas; agregar al notebook",
        "Validar respuestas: Hacer consultas de prueba; verificar que las citas sean precisas",
        "Pilotear con equipo GT: Usar el buscador en 3 proyectos reales; recoger feedback y ajustar",
        "Definir proceso de actualización: Quién actualiza corpus, con qué frecuencia, cómo se agregan nuevas bases",
        "Evaluar agentes CLI (opcional): Si se necesita mayor integración, probar Claude Code o Gemini CLI con corpus local"
      ],
      "kpis": [
        {
          "nombre": "Tiempo de scouting por proyecto",
          "descripcion": "horas dedicadas a buscar instrumentos (baseline: medir actual ~4-6h, target: <1h)",
          "baseline": "medir actual ~4-6h",
          "target": "<1h"
        },
        {
          "nombre": "Precisión de respuestas",
          "descripcion": "% respuestas con cita verificable a fuente original (baseline: N/A, target: >90%)",
          "baseline": "N/A",
          "target": ">90%"
        },
        {
          "nombre": "Adopción del buscador",
          "descripcion": "% consultas de elegibilidad que pasan por el buscador (baseline: 0%, target: >80%)",
          "baseline": "0%",
          "target": ">80%"
        },
        {
          "nombre": "Cobertura de instrumentos",
          "descripcion": "# instrumentos en el corpus con información actualizada (baseline: 0, target: 5+)",
          "baseline": "0",
          "target": "5+"
        },
        {
          "nombre": "Casos análogos documentados",
          "descripcion": "# proyectos anteriores con ficha consultable (baseline: 0, target: 10+)",
          "baseline": "0",
          "target": "10+"
        },
        {
          "nombre": "Satisfacción del equipo GT",
          "descripcion": "percepción de utilidad del buscador (encuesta, target: >7)",
          "target": ">7"
        }
      ],
      "recursos_habilitantes": {
        "recursos": [
          "Product Owner de Gestión Tecnológica",
          "Curador de corpus (conocimiento de instrumentos)",
          "Cuenta Google (para NotebookLM) o acceso a agente CLI"
        ],
        "horas": [
          {
            "fase": "**Implementación** (4-6 sem)",
            "rol": "Product Owner GT",
            "horas": "3h/sem"
          },
          {
            "fase": "**Implementación** (4-6 sem)",
            "rol": "Curador corpus",
            "horas": "6h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Curador corpus (actualización)",
            "horas": "2h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Product Owner (monitoreo)",
            "horas": "1h/sem"
          }
        ],
        "habilitantes": [
          {
            "nombre": "Acceso a bases de instrumentos",
            "descripcion": "PDFs de CORFO, ANID, fondos sectoriales",
            "estado": "✅ Público"
          },
          {
            "nombre": "Documentos de proyectos anteriores",
            "descripcion": "Fichas, entregables, resultados de postulaciones",
            "estado": "⚠️ Disperso - consolidar"
          },
          {
            "nombre": "Expertise en instrumentos",
            "descripcion": "Conocimiento de elegibilidad y requisitos",
            "estado": "✅ En equipo GT"
          },
          {
            "nombre": "Cuenta Google Workspace",
            "descripcion": "Para acceder a NotebookLM",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Acceso a agente CLI",
            "descripcion": "Claude Code, Codex, o Gemini CLI (opcional)",
            "estado": "⏳ Por evaluar"
          },
          {
            "nombre": "Tiempo para curación",
            "descripcion": "~10-15h para corpus inicial",
            "estado": "⚠️ Negociar"
          },
          {
            "nombre": "Sponsor GT",
            "descripcion": "Liderazgo impulsa adopción",
            "estado": "✅ Comprometido"
          },
          {
            "nombre": "Proceso de actualización",
            "descripcion": "Quién mantiene corpus actualizado",
            "estado": "⏳ Por definir"
          }
        ]
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
      "plazo": "Medio (≤3 meses)",
      "problema": "En Upskill, el cierre de un curso es un proceso con múltiples tareas interdependientes: consolidar asistencia, calcular notas, generar diplomas, enviar encuestas de satisfacción, preparar documentación SENCE, y comunicar resultados a la empresa. Cada tarea depende de datos de diferentes fuentes (plataforma LMS, planillas, firmas electrónicas) y se ejecuta manualmente, lo que genera errores, demoras, y frustración tanto del equipo como de los clientes.\n\nEl problema de fondo es que **no existe un flujo automatizado ni un checklist sistemático de cierre**. Cada operador tiene su propia forma de hacerlo, los pasos se omiten o duplican, y cuando hay errores (un diploma con nombre mal escrito, una nota mal calculada) el retrabajo es costoso. Peor aún: la experiencia del alumno se resiente cuando su diploma llega tarde o con errores.\n\n**Modelo mental \"Línea de ensamblaje de cierre\"**: El cierre de un curso debería funcionar como una línea de producción donde cada estación completa una tarea específica, con controles de calidad automáticos, y el \"producto\" (el cierre completo) avanza hasta llegar al cliente sin intervención manual excepto para excepciones. Hoy es un proceso artesanal donde cada cierre es único.\n\nEl costo actual: horas de trabajo manual por cada curso cerrado, errores que dañan la experiencia del alumno/empresa, demoras que generan reclamos, falta de trazabilidad para auditorías SENCE, y un equipo operativo atrapado en lo repetitivo sin tiempo para mejorar.\n\n---",
      "solucion": "Implementar un **sistema de cierre integral de cursos** que automatice tareas repetitivas, asegure calidad, y genere trazabilidad completa:\n\n**Componentes:**\n\n1. **Checklist de cierre estandarizado**\n   - Lista de tareas obligatorias por tipo de curso (SENCE, no-SENCE, in-company)\n   - Secuencia lógica con dependencias (ej: no generar diploma sin notas validadas)\n   - Estados claros: pendiente, en progreso, completado, bloqueado\n   - Alertas automáticas cuando hay tareas vencidas\n\n2. **Consolidación automática de datos**\n   - Extracción de asistencia y notas desde LMS/planillas\n   - Validación de datos críticos (nombres, RUT, fechas)\n   - Cálculo automático de aprobación según criterios del curso\n   - Detección de inconsistencias antes de generar documentos\n\n3. **Generación automática de documentos**\n   - Diplomas/certificados con datos personalizados\n   - Informes de cierre para la empresa cliente\n   - Documentación SENCE (liquidación, C3, actas)\n   - Merge automático de plantillas con datos validados\n\n4. **Comunicaciones automatizadas**\n   - Email a alumnos con diploma y encuesta de satisfacción\n   - Email a empresa con informe de resultados\n   - Recordatorios de firmas pendientes (Clave Única)\n   - Notificación interna cuando el cierre está completo\n\n5. **Carpeta de evidencias para auditoría**\n   - Consolidación automática de todos los documentos del curso\n   - Estructura estándar por curso (asistencia, notas, diplomas, firmas)\n   - Versionado y trazabilidad de cambios\n   - Lista para inspección SENCE\n\n**Herramientas sugeridas:**\n\n| Componente | Herramienta | Notas |\n|------------|-------------|-------|\n| Checklist | Notion / Monday / ClickUp | Con automatizaciones y estados |\n| Datos | Google Sheets + Apps Script | O integración directa con LMS si hay API |\n| Documentos | Google Docs + merge (Autocrat, DocuSign) | Plantillas con campos dinámicos |\n| Comunicaciones | Gmail + templates / Mailchimp | Automatizar envíos post-cierre |\n| Evidencias | Google Drive estructurado | Carpeta por curso con subcarpetas estándar |\n\n---",
      "impacto": [
        "Tiempo de cierre: De horas de trabajo manual por curso → proceso mayormente automático con validación final",
        "Errores en documentos: De errores frecuentes (nombres, notas, fechas) → validación automática antes de generar",
        "Experiencia del alumno: De diploma tarde y a veces con errores → diploma correcto en tiempo definido",
        "Experiencia de la empresa: De \"¿ya cerraron el curso?\" → informe automático al finalizar",
        "Trazabilidad SENCE: De buscar documentos en carpetas dispersas → carpeta de evidencias estructurada y completa",
        "Carga del equipo: De operadores atrapados en lo repetitivo → tiempo liberado para mejora y atención de excepciones"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": [
          {
            "id": "17",
            "nombre": "Tracking SLA Cierre SENCE",
            "relacion": "Ambas atacan el proceso de cierre; pueden compartir infraestructura"
          },
          {
            "id": "11",
            "nombre": "Evaluación Entregables",
            "relacion": "Checklist de cierre puede usar framework de evaluación"
          }
        ]
      },
      "criterio_exito": {
        "done": [
          "Checklist de cierre estandarizado y documentado por tipo de curso",
          "Al menos 1 tipo de documento (diploma o informe) generándose automáticamente",
          "Comunicación automática a alumnos funcionando",
          "Estructura de carpeta de evidencias definida y aplicada en 5+ cursos",
          "Equipo operativo capacitado en nuevo flujo"
        ],
        "success": [
          ">80% de cierres usando el checklist estandarizado",
          "Tiempo promedio de cierre reducido >40%",
          "Errores en documentos reducidos >60%",
          ">90% de diplomas entregados en plazo definido (ej: 5 días post-curso)",
          "Equipo reporta menor carga operativa"
        ]
      },
      "valor": "**Beneficio principal**: Reducir tiempo y errores en el cierre de cursos, mejorar la experiencia de alumnos y empresas, y generar trazabilidad para auditorías SENCE. Cada hora ahorrada en cierre es hora ganada para mejorar la operación.\n\n**Costo de no hacer**: Cierres lentos y con errores; experiencia de alumno/empresa dañada; reclamos; riesgo en auditorías SENCE por falta de documentación; equipo sobrecargado con tareas repetitivas.\n\n**Esfuerzo vs Impacto**: Esfuerzo medio (~50-80h para checklist + automatización básica), alto impacto en eficiencia operativa de Upskill. ROI positivo en 3-6 meses por horas liberadas.\n\n---",
      "conexion_ia2": {
        "conexiones": [
          {
            "dimension": "Eficiencia",
            "subdimension": "Horas liberadas",
            "score_actual": "1.6",
            "impacto": "+0.6 a +0.8 (directo)"
          },
          {
            "dimension": "Eficiencia",
            "subdimension": "Reducción de errores",
            "score_actual": "1.6",
            "impacto": "+0.5 (directo)"
          },
          {
            "dimension": "Riesgo",
            "subdimension": "Trazabilidad y auditoría",
            "score_actual": "1.2",
            "impacto": "+0.4 (directo)"
          }
        ],
        "justificacion": "El cierre integral ataca directamente \"Horas liberadas\" y \"Reducción de errores\" (ambas en 1.6) al automatizar tareas repetitivas y validar datos antes de generar documentos. Impacta \"Riesgo\" porque mejora la trazabilidad para auditorías SENCE. Es una de las oportunidades con mayor impacto operativo en Upskill."
      },
      "primeros_pasos": [
        "Mapear proceso AS-IS: Documentar paso a paso cómo se cierra un curso hoy (con tiempos y responsables)",
        "Identificar puntos de dolor: Entrevistar a operadores sobre dónde están los errores y demoras más frecuentes",
        "Crear checklist estándar: Lista de tareas obligatorias con secuencia lógica; validar con el equipo",
        "Definir estructura de carpeta de evidencias: Template de carpeta por curso con subcarpetas estándar",
        "Automatizar 1 documento: Empezar con diplomas usando merge (Autocrat o similar) desde planilla de datos validados",
        "Implementar comunicación automática: Template de email para alumnos con diploma y encuesta",
        "Pilotear en 5 cursos: Aplicar nuevo flujo; medir tiempo y errores; ajustar según feedback",
        "Escalar y documentar: Expandir a todos los cursos; crear guía de operación"
      ],
      "kpis": [
        {
          "nombre": "Tiempo de cierre por curso",
          "descripcion": "horas desde fin de curso hasta cierre completo (baseline: medir actual, target: reducción >40%)",
          "baseline": "medir actual",
          "target": "reducción >40%"
        },
        {
          "nombre": "Tasa de cierres sin error",
          "descripcion": "% cierres que no requieren correcciones post-envío (baseline: medir actual, target: >90%)",
          "baseline": "medir actual",
          "target": ">90%"
        },
        {
          "nombre": "Plazo de entrega de diplomas",
          "descripcion": "días desde fin de curso hasta envío de diploma (baseline: medir actual, target: <5 días)",
          "baseline": "medir actual",
          "target": "<5 días"
        },
        {
          "nombre": "Adopción del checklist",
          "descripcion": "% cierres que usan el checklist estandarizado (baseline: 0%, target: >90%)",
          "baseline": "0%",
          "target": ">90%"
        },
        {
          "nombre": "Documentos generados automáticamente",
          "descripcion": "% diplomas/informes generados sin intervención manual (baseline: 0%, target: >80%)",
          "baseline": "0%",
          "target": ">80%"
        },
        {
          "nombre": "NPS de cierre (empresa/alumno)",
          "descripcion": "satisfacción con el proceso de cierre (baseline: medir actual, target: >8)",
          "baseline": "medir actual",
          "target": ">8"
        }
      ],
      "recursos_habilitantes": {
        "recursos": [
          "Líder operativo Upskill (dueño del proceso)",
          "Acceso a datos de alumnos (LMS, planillas)",
          "Plantillas de documentos (diplomas, informes)",
          "Herramientas de automatización (Google Workspace, Autocrat, o similar)"
        ],
        "horas": [
          {
            "fase": "**Implementación** (6-8 sem)",
            "rol": "Líder Upskill",
            "horas": "4h/sem"
          },
          {
            "fase": "**Implementación** (6-8 sem)",
            "rol": "Operador (mapeo y pruebas)",
            "horas": "4h/sem"
          },
          {
            "fase": "**Implementación** (6-8 sem)",
            "rol": "TI/PIA (automatización)",
            "horas": "4h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Operador Upskill",
            "horas": "1h/sem (monitoreo)"
          },
          {
            "fase": "**Operación continua**",
            "rol": "TI (soporte)",
            "horas": "0.5h/sem"
          }
        ],
        "habilitantes": [
          {
            "nombre": "Proceso AS-IS documentado",
            "descripcion": "Mapeo del flujo actual de cierre de cursos",
            "estado": "⏳ Por documentar"
          },
          {
            "nombre": "Datos de alumnos accesibles",
            "descripcion": "Planilla o LMS con asistencia, notas, datos personales",
            "estado": "✅ Disponible (disperso)"
          },
          {
            "nombre": "Plantillas de documentos",
            "descripcion": "Templates de diplomas, informes, actas",
            "estado": "✅ Parcial - estandarizar"
          },
          {
            "nombre": "Google Workspace",
            "descripcion": "Drive, Docs, Sheets para automatización",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Herramienta de merge",
            "descripcion": "Autocrat, DocuSign, o similar para generar documentos",
            "estado": "⏳ Por configurar"
          },
          {
            "nombre": "Checklist de cierre",
            "descripcion": "Lista estándar de tareas por tipo de curso",
            "estado": "⏳ Por crear"
          },
          {
            "nombre": "Sponsor Upskill",
            "descripcion": "Liderazgo impulsa adopción del nuevo flujo",
            "estado": "✅ Comprometido"
          }
        ]
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
      "nombre": "Metodología de Desarrollo de Proyectos IA (idea→POC→piloto→producción)",
      "tipo": "Proyecto",
      "area": "PIA / Innovación",
      "esfuerzo": "Medio",
      "estado": "Idea",
      "plazo": "Medio (≤3 meses)",
      "problema": "En PIA y las áreas de Brinca, las iniciativas de IA surgen de múltiples fuentes: ideas de equipos, solicitudes de clientes, proyectos de innovación, experimentos de consultores. Pero no hay un lugar único donde ver qué existe, en qué estado está, y qué priorizar. El resultado: iniciativas que se duplican, proyectos que se estancan sin que nadie lo note, y decisiones de inversión sin información de contexto.\n\nEl problema de fondo es que **no existe visibilidad centralizada del portafolio de IA**. Cada área lleva sus propios proyectos, nadie sabe qué están haciendo los demás, y no hay criterios compartidos para decidir qué avanza y qué se descarta. Cuando alguien pregunta \"¿qué estamos haciendo en IA?\", la respuesta requiere juntar información de múltiples fuentes.\n\n**Modelo mental \"Embudo de innovación\"**: Las iniciativas de IA deberían fluir por un embudo con etapas claras (idea → POC → piloto → producción) donde en cada etapa se evalúa si continuar, pivotar, o descartar. Sin este embudo visible, las iniciativas se acumulan en todas las etapas sin que nadie las priorice o las cierre.\n\nEl costo actual: recursos dispersos en iniciativas de bajo valor, duplicación de esfuerzos entre áreas, proyectos estancados que consumen atención sin avanzar, falta de datos para decisiones de inversión, y frustración de equipos que no saben si su trabajo será priorizado.\n\n---",
      "solucion": "Definir e implementar una **metodología estándar para el desarrollo de proyectos IA** con etapas claras, criterios de transición, y rituales de revisión. Un tablero de seguimiento da visibilidad al portafolio:\n\n**Componentes:**\n\n1. **Etapas del ciclo de vida**\n   - **Idea**: Propuesta inicial, aún no validada técnica ni comercialmente\n   - **POC**: Prueba de concepto técnica para validar factibilidad\n   - **Piloto**: Implementación controlada con usuarios reales para validar valor\n   - **Producción**: Solución operando, transferida al área, generando valor\n   - **Descartada/Pausada**: Iniciativas que no avanzaron (con razón documentada)\n\n2. **Criterios de transición (gates)**\n   - **Idea → POC**: Problema claro, sponsor identificado, recursos asignados\n   - **POC → Piloto**: Factibilidad técnica demostrada, usuarios piloto comprometidos\n   - **Piloto → Producción**: Valor validado con usuarios, plan de transferencia definido\n   - **→ Descartada**: Decisión explícita con razón documentada (no viable, sin valor, sin recursos)\n\n3. **Rituales de gestión**\n   - Revisión mensual de pipeline con líderes de área\n   - Decisión explícita por iniciativa: continuar, pivotar, o descartar\n   - Reporte trimestral a Gerencia General\n   - Retrospectiva de iniciativas completadas o descartadas\n\n4. **Tablero de seguimiento** (mecanismo de visibilidad)\n   - Campos por iniciativa: nombre, área, owner, etapa, valor, esfuerzo, riesgos, próximo hito\n   - Vistas: general, por área, por etapa (Kanban), \"estancadas\"\n   - Alertas de iniciativas sin movimiento en X semanas\n\n5. **Métricas del portafolio**\n   - Distribución de iniciativas por etapa\n   - Lead time promedio por etapa\n   - Tasa de conversión entre etapas\n   - Valor generado por iniciativas en producción\n\n**Herramientas sugeridas:**\n\n| Opción | Descripción | Pros | Contras |\n|--------|-------------|------|---------|\n| **Notion** | Base de datos con vistas Kanban y tabla | Flexible, colaborativo, bajo costo | Requiere disciplina de actualización |\n| **Monday/ClickUp** | Gestión de proyectos con automatizaciones | Alertas y flujos automáticos | Costo adicional |\n| **Google Sheets** | Planilla simple con gráficos | Familiar, gratis | Limitado en vistas y automatización |\n\n---",
      "impacto": [
        "Visibilidad del portafolio: De \"¿qué estamos haciendo en IA?\" → respuesta en un click con estado actualizado",
        "Priorización: De decisiones ad-hoc → criterios claros y revisión estructurada mensual",
        "Duplicación de esfuerzos: De iniciativas paralelas sin saberlo → visibilidad cruzada entre áreas",
        "Proyectos estancados: De iniciativas que se olvidan → alertas de estancamiento y decisión explícita",
        "Accountability: De \"nadie es responsable\" → owner definido por iniciativa con seguimiento",
        "Reportería ejecutiva: De armar reportes desde cero → dashboard actualizado para Gerencia"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": [
          {
            "id": "09",
            "nombre": "Radar de Licitaciones",
            "relacion": "Oportunidades detectadas pueden alimentar el pipeline"
          },
          {
            "id": "08",
            "nombre": "Copiloto Propuestas",
            "relacion": "Propuestas con IA pueden registrarse en el pipeline"
          },
          {
            "id": "18",
            "nombre": "Marco de Gobierno IA",
            "relacion": "Pipeline alimenta decisiones de gobierno y priorización"
          }
        ]
      },
      "criterio_exito": {
        "done": [
          "Etapas del pipeline definidas y documentadas con criterios de transición",
          "Tablero configurado en herramienta seleccionada (Notion, Monday, o Sheets)",
          "Todas las iniciativas actuales cargadas con campos mínimos",
          "Owner asignado para cada iniciativa",
          "Primera revisión mensual de pipeline realizada"
        ],
        "success": [
          ">90% de iniciativas IA registradas en el tablero",
          "Tablero actualizado (>80% de iniciativas con estado <2 semanas)",
          "Al menos 3 revisiones mensuales realizadas",
          "Decisiones de priorización documentadas basadas en el pipeline",
          "Gerencia usa el tablero para reportería"
        ]
      },
      "valor": "**Beneficio principal**: Visibilidad completa del portafolio IA para tomar mejores decisiones de inversión, evitar duplicación, y asegurar que las iniciativas de alto valor reciban recursos. Habilita gestión profesional de la innovación.\n\n**Costo de no hacer**: Iniciativas dispersas sin visibilidad; duplicación de esfuerzos; proyectos estancados que nadie cierra; decisiones de inversión sin datos; frustración de equipos que no saben si serán priorizados.\n\n**Esfuerzo vs Impacto**: Esfuerzo medio (~30-50h para setup + carga inicial), alto impacto en gestión del portafolio IA. ROI difícil de cuantificar pero alto valor estratégico.\n\n---",
      "conexion_ia2": {
        "conexiones": [
          {
            "dimension": "Adopción",
            "subdimension": "Penetración",
            "score_actual": "2.3",
            "impacto": "+0.3 (indirecto - visibiliza adopción)"
          },
          {
            "dimension": "Negocio",
            "subdimension": "Impacto comercial",
            "score_actual": "2.0",
            "impacto": "+0.3 a +0.5 (prioriza alto valor)"
          },
          {
            "dimension": "Riesgo",
            "subdimension": "Gobierno y control",
            "score_actual": "1.2",
            "impacto": "+0.5 (directo - habilita gestión)"
          }
        ],
        "justificacion": "El tablero de pipeline impacta principalmente \"Riesgo/Gobierno\" (hoy en 1.2) al dar visibilidad y control sobre el portafolio. Contribuye a \"Negocio\" porque permite priorizar iniciativas de alto valor. El efecto en \"Penetración\" viene de hacer visible cuántas iniciativas existen y en qué estado están."
      },
      "primeros_pasos": [
        "Definir etapas y criterios de transición: Documentar qué significa cada etapa y qué se necesita para pasar a la siguiente",
        "Definir campos mínimos: Lista de campos obligatorios por iniciativa (nombre, área, owner, etapa, valor, próximo hito)",
        "Inventariar iniciativas actuales: Recopilar todas las iniciativas IA existentes de cada área",
        "Configurar tablero: Crear base de datos en Notion (o herramienta elegida) con vistas por etapa y por área",
        "Cargar iniciativas: Poblar el tablero con las iniciativas inventariadas; asignar owners",
        "Establecer ritual de revisión: Calendarizar reunión mensual de pipeline con líderes de área",
        "Primera revisión: Ejecutar primera revisión; priorizar y tomar decisiones sobre iniciativas estancadas",
        "Comunicar a la organización: Anunciar el tablero y el proceso de gestión del pipeline"
      ],
      "kpis": [
        {
          "nombre": "Cobertura del pipeline",
          "descripcion": "% iniciativas IA registradas en el tablero (baseline: 0%, target: >90%)",
          "baseline": "0%",
          "target": ">90%"
        },
        {
          "nombre": "Actualización del tablero",
          "descripcion": "% iniciativas con estado actualizado <2 semanas (baseline: N/A, target: >80%)",
          "baseline": "N/A",
          "target": ">80%"
        },
        {
          "nombre": "Iniciativas por etapa",
          "descripcion": "distribución del portafolio por etapa (target: tracking para balance)",
          "target": "tracking para balance"
        },
        {
          "nombre": "Lead time por etapa",
          "descripcion": "semanas promedio en cada etapa (baseline: medir, target: reducir estancamiento)",
          "baseline": "medir",
          "target": "reducir estancamiento"
        },
        {
          "nombre": "Tasa de conversión",
          "descripcion": "% iniciativas que avanzan entre etapas (baseline: medir, target: tracking)",
          "baseline": "medir",
          "target": "tracking"
        },
        {
          "nombre": "Iniciativas en producción",
          "descripcion": "# soluciones operando y generando valor (baseline: medir, target: crecimiento)",
          "baseline": "medir",
          "target": "crecimiento"
        },
        {
          "nombre": "Revisiones realizadas",
          "descripcion": "# revisiones mensuales de pipeline (baseline: 0, target: 12/año)",
          "baseline": "0",
          "target": "12/año"
        }
      ],
      "recursos_habilitantes": {
        "recursos": [
          "Líder PIA (dueño del proceso)",
          "Herramienta de gestión (Notion, Monday, o Sheets)",
          "Tiempo de líderes de área para revisiones mensuales"
        ],
        "horas": [
          {
            "fase": "**Implementación** (4 sem)",
            "rol": "Líder PIA",
            "horas": "4h/sem"
          },
          {
            "fase": "**Implementación** (4 sem)",
            "rol": "Apoyo (configuración)",
            "horas": "4h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Líder PIA (mantenimiento)",
            "horas": "2h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Owners de iniciativas",
            "horas": "0.5h/sem c/u"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Revisión mensual (todos)",
            "horas": "2h/mes"
          }
        ],
        "habilitantes": [
          {
            "nombre": "Inventario de iniciativas",
            "descripcion": "Lista de proyectos IA actuales por área",
            "estado": "⏳ Por recopilar"
          },
          {
            "nombre": "Definición de etapas",
            "descripcion": "Criterios claros de qué es Idea, POC, Piloto, Producción",
            "estado": "⏳ Por definir"
          },
          {
            "nombre": "Herramienta de tablero",
            "descripcion": "Notion, Monday, ClickUp, o Google Sheets",
            "estado": "✅ Disponible (Notion)"
          },
          {
            "nombre": "Tiempo de líderes",
            "descripcion": "2h/mes para revisión de pipeline",
            "estado": "⚠️ Negociar"
          },
          {
            "nombre": "Criterios de priorización",
            "descripcion": "Reglas para decidir qué avanza y qué se descarta",
            "estado": "⏳ Por definir"
          },
          {
            "nombre": "Sponsor ejecutivo",
            "descripcion": "Gerencia General impulsa adopción y usa el tablero",
            "estado": "✅ Comprometido"
          }
        ]
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
      "nombre": "Versionado y QA de Activos IA",
      "tipo": "Proyecto",
      "area": "Transversal (PIA)",
      "esfuerzo": "Medio",
      "estado": "Idea",
      "plazo": "Medio (≤3 meses)",
      "problema": "En Brinca, los activos de IA (prompts, playbooks, templates, flujos automatizados) se crean, modifican y comparten sin control. Alguien mejora un prompt, otro lo copia, un tercero lo modifica para su caso—y pronto hay 5 versiones distintas flotando, ninguna \"oficial\", y nadie sabe cuál funciona mejor. Cuando algo falla, no hay forma de saber qué versión se usó ni quién la modificó.\n\nEl problema de fondo es que **no existe disciplina de versionado ni proceso de QA para activos IA**. A diferencia del código de software (donde el control de versiones es práctica estándar), los activos de IA se tratan como documentos desechables. El resultado: inconsistencia de resultados, errores que se repiten, y pérdida del conocimiento acumulado en cada iteración.\n\n**Modelo mental \"Código de software\"**: Un prompt o playbook exitoso debería tratarse como código: versionado, con dueño responsable, revisado antes de publicarse, y con changelog de cambios. No porque sea complejo, sino porque es valioso y otros dependen de él.\n\nEl costo actual: resultados inconsistentes entre equipos usando \"el mismo\" prompt, errores que se repiten porque las correcciones no se propagan, pérdida de mejoras porque no se documentan, y falta de accountability cuando algo falla.\n\n---",
      "solucion": "Implementar un **sistema de versionado y QA para activos IA** que asegure consistencia, trazabilidad, y mejora continua:\n\n**Componentes:**\n\n1. **Estándar de versionado**\n   - Nomenclatura simple: v1, v2, v3 (no hace falta semver completo)\n   - Changelog breve por versión: qué cambió y por qué\n   - Versión \"oficial\" marcada claramente; versiones experimentales etiquetadas\n   - Historial accesible para rollback si es necesario\n\n2. **Ownership de activos**\n   - Cada activo tiene un owner responsable de su calidad y evolución\n   - Máximo 5 activos por owner para evitar sobrecarga\n   - Owner decide cuándo liberar nueva versión y comunica cambios\n\n3. **Checklist de QA mínimo**\n   - ¿Funciona consistentemente? (probado en 3+ casos)\n   - ¿No contiene PII o información sensible?\n   - ¿Tiene descripción de uso y ejemplo?\n   - ¿Está en el formato estándar de la plantilla?\n   - ¿El changelog está actualizado?\n\n4. **Proceso de liberación**\n   - Cambios menores: owner actualiza y publica\n   - Cambios mayores: revisión por par antes de liberar\n   - Anuncio de nuevas versiones en canal dedicado (#ia-activos o similar)\n   - Período de \"deprecación\" antes de eliminar versiones antiguas\n\n5. **Plantilla estándar de activo**\n   - Nombre y descripción\n   - Versión actual y changelog\n   - Owner y fecha de última actualización\n   - Instrucciones de uso y ejemplo\n   - Casos de uso validados\n   - Limitaciones conocidas\n\n---",
      "impacto": [
        "Consistencia de resultados: De \"cada uno usa su versión\" → versión oficial única y probada",
        "Trazabilidad: De \"no sé qué versión usé\" → historial completo de cambios por activo",
        "Accountability: De \"nadie es responsable\" → owner claro por activo con decisión sobre cambios",
        "Reducción de errores: De errores que se repiten → correcciones que se propagan a todos los usuarios",
        "Reutilización segura: De \"¿puedo confiar en este prompt?\" → activos validados con checklist QA",
        "Mejora continua: De mejoras perdidas → changelog que captura aprendizaje acumulado"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": [
          {
            "id": "11",
            "nombre": "Evaluación Entregables",
            "relacion": "Framework de QA puede extenderse a entregables"
          },
          {
            "id": "16",
            "nombre": "Evals y umbrales",
            "relacion": "Pruebas de regresión pueden usar sistema de evals"
          }
        ]
      },
      "criterio_exito": {
        "done": [
          "Estándar de versionado definido y documentado",
          "Plantilla de activo creada y validada",
          "Checklist de QA mínimo publicado",
          "Owners asignados para al menos 10 activos críticos",
          "Canal de anuncios de cambios habilitado",
          "Al menos 5 activos migrados al nuevo formato"
        ],
        "success": [
          ">80% de activos en uso tienen owner y versión",
          ">90% de cambios mayores pasan por checklist QA",
          "Incidencias por \"versión incorrecta\" reducidas >50%",
          "Equipo reporta mayor confianza en activos del repositorio",
          "Al menos 3 activos con historial de 2+ versiones documentadas"
        ]
      },
      "valor": "**Beneficio principal**: Consistencia y confiabilidad de activos IA que otros dependen de ellos. Cada error evitado por usar la versión correcta es tiempo ahorrado. Captura el aprendizaje acumulado en cada iteración.\n\n**Costo de no hacer**: Múltiples versiones sin control; errores que se repiten; mejoras que se pierden; falta de accountability; desconfianza en activos compartidos.\n\n**Esfuerzo vs Impacto**: Esfuerzo medio (~30-40h para setup + migración inicial), alto impacto en calidad y consistencia. ROI difícil de cuantificar pero alto valor en confiabilidad.\n\n---",
      "conexion_ia2": {
        "conexiones": [
          {
            "dimension": "Adopción",
            "subdimension": "Activos reutilizables",
            "score_actual": "2.3",
            "impacto": "+0.5 (directo - mejora calidad de activos)"
          },
          {
            "dimension": "Riesgo",
            "subdimension": "Calidad de outputs",
            "score_actual": "1.2",
            "impacto": "+0.4 (directo - QA sistemático)"
          },
          {
            "dimension": "Eficiencia",
            "subdimension": "Reducción de errores",
            "score_actual": "1.6",
            "impacto": "+0.3 (indirecto - menos errores por versión incorrecta)"
          }
        ],
        "justificacion": "El versionado y QA impacta directamente \"Activos reutilizables\" (hoy en 2.3) al hacer los activos más confiables y consistentes. Contribuye a \"Calidad de outputs\" en Riesgo porque el checklist QA previene errores. El efecto en \"Reducción de errores\" viene de evitar el uso de versiones incorrectas o no probadas."
      },
      "primeros_pasos": [
        "Definir estándar de versionado: Documentar nomenclatura (v1, v2...), qué constituye cambio mayor vs menor",
        "Crear plantilla de activo: Template con campos obligatorios (nombre, versión, owner, uso, ejemplo, changelog)",
        "Diseñar checklist QA mínimo: 5-7 criterios que todo activo debe cumplir antes de publicarse",
        "Identificar activos críticos: Listar los 10-15 prompts/playbooks más usados que requieren versionado prioritario",
        "Asignar owners: Designar responsable por cada activo crítico (máximo 5 por persona)",
        "Migrar activos al nuevo formato: Convertir activos críticos a la plantilla estándar con versión inicial",
        "Habilitar canal de anuncios: Crear canal (#ia-activos) para comunicar nuevas versiones",
        "Capacitar a owners: Sesión de 30 min sobre proceso de QA y liberación"
      ],
      "kpis": [
        {
          "nombre": "Cobertura de versionado",
          "descripcion": "% activos críticos con versión y owner asignado (baseline: ~0%, target: >80%)",
          "baseline": "~0%",
          "target": ">80%"
        },
        {
          "nombre": "Adopción del proceso QA",
          "descripcion": "% cambios mayores que pasan por checklist antes de liberar (baseline: 0%, target: >90%)",
          "baseline": "0%",
          "target": ">90%"
        },
        {
          "nombre": "Incidencias por versión",
          "descripcion": "# problemas reportados por uso de versión incorrecta o desactualizada (baseline: medir, target: reducción >50%)",
          "baseline": "medir",
          "target": "reducción >50%"
        },
        {
          "nombre": "Activos con changelog",
          "descripcion": "% activos que tienen historial de cambios documentado (baseline: 0%, target: >70%)",
          "baseline": "0%",
          "target": ">70%"
        },
        {
          "nombre": "Tiempo de revisión QA",
          "descripcion": "horas desde solicitud hasta aprobación de cambio mayor (target: <48h)",
          "target": "<48h"
        },
        {
          "nombre": "Satisfacción con activos",
          "descripcion": "confianza del equipo en usar activos del repositorio (encuesta, target: >7)",
          "target": ">7"
        }
      ],
      "recursos_habilitantes": {
        "recursos": [
          "Líder PIA (dueño del proceso)",
          "Repositorio de activos (Notion, Drive, o similar)",
          "Owners por activo crítico (4-5 personas)",
          "Canal de comunicación para anuncios"
        ],
        "horas": [
          {
            "fase": "**Implementación** (4 sem)",
            "rol": "Líder PIA",
            "horas": "4h/sem"
          },
          {
            "fase": "**Implementación** (4 sem)",
            "rol": "Owners (migración)",
            "horas": "2h/sem c/u"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Owner por activo",
            "horas": "0.5h/sem c/u"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Líder PIA (coordinación)",
            "horas": "1h/sem"
          }
        ],
        "habilitantes": [
          {
            "nombre": "Repositorio de activos",
            "descripcion": "Lugar central donde viven los prompts/playbooks",
            "estado": "🔄 En diseño (Op. 06)"
          },
          {
            "nombre": "Inventario de activos críticos",
            "descripcion": "Lista de los 10-15 activos más usados",
            "estado": "⏳ Por identificar"
          },
          {
            "nombre": "Plantilla de activo",
            "descripcion": "Template estándar con campos obligatorios",
            "estado": "⏳ Por crear"
          },
          {
            "nombre": "Checklist QA",
            "descripcion": "Criterios mínimos de calidad",
            "estado": "⏳ Por definir"
          },
          {
            "nombre": "Owners disponibles",
            "descripcion": "4-5 personas con tiempo para mantener activos",
            "estado": "⏳ Por asignar"
          },
          {
            "nombre": "Canal de anuncios",
            "descripcion": "Slack/Teams para comunicar cambios",
            "estado": "✅ Fácil de crear"
          },
          {
            "nombre": "Sponsor PIA",
            "descripcion": "Liderazgo impulsa adopción del proceso",
            "estado": "✅ Comprometido"
          }
        ]
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
      "nombre": "Sistema de Evaluación (Evals) y Umbrales de Calidad para Outputs IA",
      "tipo": "Proyecto",
      "area": "Transversal (PIA)",
      "esfuerzo": "Medio-Alto",
      "estado": "Idea",
      "plazo": "Medio (≤3 meses)",
      "problema": "En Brinca, cuando un prompt o flujo IA genera un entregable para un cliente, la evaluación de calidad es subjetiva: \"se ve bien\", \"parece correcto\", \"a mí me funcionó\". No hay forma objetiva de saber si un output cumple estándares mínimos antes de enviarlo. Peor aún: cuando alguien modifica un prompt \"para mejorarlo\", no hay manera de verificar si realmente mejoró o si introdujo regresiones.\n\nEl problema de fondo es que **no existen métricas ni umbrales objetivos para evaluar outputs de IA**. Sin evaluaciones sistemáticas (evals), cada cambio es un salto de fe. Los errores se detectan cuando el cliente reclama, no antes de enviar. Y cuando un modelo o prompt cambia, nadie sabe si el nuevo es mejor o peor que el anterior.\n\n**Modelo mental \"Control de calidad industrial\"**: En manufactura, ningún producto sale de la línea sin pasar control de calidad con métricas y umbrales definidos. Lo mismo debería aplicar a outputs de IA críticos: antes de ir al cliente, deben pasar un \"examen\" con criterios objetivos. Si no pasan, se revisan; si pasan, hay evidencia de calidad.\n\nEl costo actual: errores que llegan al cliente, retrabajo por outputs de baja calidad, riesgo reputacional, imposibilidad de mejorar sistemáticamente porque no hay baseline, y cambios de modelo/prompt que introducen regresiones sin que nadie lo note.\n\n---",
      "solucion": "Implementar un **sistema de evaluación (evals) con umbrales de calidad** para outputs IA críticos, que permita medir, comparar, y asegurar calidad antes de producción:\n\n**Componentes:**\n\n1. **Identificación de casos críticos**\n   - Outputs que van directo a clientes\n   - Tareas con alto riesgo de error (datos sensibles, cálculos, recomendaciones)\n   - Flujos de alto volumen donde errores se multiplican\n   - Priorizar: 3-5 casos críticos para empezar\n\n2. **Datasets de evaluación**\n   - Conjunto de inputs de prueba representativos (10-20 ejemplos por caso)\n   - Outputs esperados (gold standard) o criterios de evaluación\n   - Casos edge y casos problemáticos conocidos\n   - Actualización periódica con nuevos casos\n\n3. **Métricas de calidad**\n   - **Exactitud**: ¿el output es correcto factualmente?\n   - **Completitud**: ¿incluye toda la información requerida?\n   - **Formato**: ¿cumple estructura y estilo esperado?\n   - **Citabilidad**: ¿tiene fuentes verificables cuando aplica?\n   - **No-toxicidad**: ¿libre de contenido inapropiado?\n   - Métricas específicas por caso (ej: precisión numérica para cálculos)\n\n4. **Umbrales mínimos (gates)**\n   - Score mínimo para aprobar cada métrica\n   - Combinación ponderada para score global\n   - Gate: si no pasa umbral, no va a producción sin revisión humana\n   - Umbrales ajustables según data real\n\n5. **Reportes y monitoreo**\n   - Dashboard de scores por caso/versión/fecha\n   - Tendencia histórica para detectar degradación\n   - Alertas cuando score cae bajo umbral\n   - Comparación entre versiones de prompts/modelos\n\n**Niveles de implementación:**\n\n| Nivel | Descripción | Esfuerzo |\n|-------|-------------|----------|\n| **Básico** | Checklist manual + revisión humana por muestreo | ~15h setup |\n| **Intermedio** | Evals semi-automatizados con LLM-as-judge + dashboard simple | ~40h setup |\n| **Avanzado** | Pipeline automatizado con métricas, umbrales, y CI/CD | ~80h+ setup |\n\n---",
      "impacto": [
        "Calidad objetiva: De \"se ve bien\" → score numérico con criterios claros",
        "Detección temprana: De errores descubiertos por el cliente → problemas detectados antes de enviar",
        "Mejora medible: De \"creo que mejoró\" → comparación cuantitativa entre versiones",
        "Regresiones evitadas: De cambios que rompen sin saberlo → gates que detectan degradación",
        "Retrabajo reducido: De correcciones post-envío → outputs que pasan control de calidad",
        "Evidencia auditable: De \"confía en mí\" → historial de scores y aprobaciones"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": [
          {
            "id": "15",
            "nombre": "Versionado QA",
            "relacion": "Evals validan cambios de versión de activos"
          },
          {
            "id": "11",
            "nombre": "Evaluación Entregables",
            "relacion": "Sistema de evals puede usarse para entregables a clientes"
          },
          {
            "id": "14",
            "nombre": "Metodología Proyectos IA",
            "relacion": "Gates de calidad como criterio de transición POC→Piloto→Producción"
          }
        ]
      },
      "criterio_exito": {
        "done": [
          "Al menos 3 casos críticos identificados y priorizados",
          "Dataset de evaluación creado para cada caso (mínimo 10 ejemplos)",
          "Métricas y umbrales definidos por caso",
          "Proceso de evaluación documentado (manual o semi-automático)",
          "Dashboard básico de scores funcionando",
          "Piloto ejecutado en casos seleccionados"
        ],
        "success": [
          ">80% de outputs críticos pasan por evaluación antes de producción",
          "Errores detectados por cliente reducidos >40%",
          "Al menos 2 comparaciones de versión realizadas con evals",
          "Equipo confía en scores como indicador de calidad",
          "Sistema de evals expandido a 5+ casos"
        ]
      },
      "valor": "**Beneficio principal**: Calidad objetiva y medible de outputs IA antes de ir al cliente. Cada error evitado es retrabajo ahorrado y riesgo reputacional mitigado. Habilita mejora sistemática porque hay baseline contra qué comparar.\n\n**Costo de no hacer**: Calidad subjetiva y variable; errores llegan al cliente; imposible saber si cambios mejoran o empeoran; regresiones no detectadas; riesgo reputacional.\n\n**Esfuerzo vs Impacto**: Esfuerzo medio-alto (~40-60h para nivel intermedio), alto impacto en calidad y confiabilidad. ROI positivo si evita 2-3 incidentes graves con clientes.\n\n---",
      "conexion_ia2": {
        "conexiones": [
          {
            "dimension": "Riesgo",
            "subdimension": "Calidad de outputs",
            "score_actual": "1.2",
            "impacto": "+0.8 a +1.0 (directo)"
          },
          {
            "dimension": "Eficiencia",
            "subdimension": "Reducción de errores",
            "score_actual": "1.6",
            "impacto": "+0.5 (directo)"
          },
          {
            "dimension": "Innovación",
            "subdimension": "Experimentación",
            "score_actual": "1.7",
            "impacto": "+0.3 (indirecto - evals habilitan experimentar con confianza)"
          }
        ],
        "justificacion": "El sistema de evals ataca directamente \"Calidad de outputs\" en Riesgo (hoy en 1.2, la dimensión más baja). Contribuye a \"Reducción de errores\" al detectar problemas antes de producción. El efecto en \"Experimentación\" viene de que los evals dan confianza para probar cambios porque hay forma de medir impacto."
      },
      "primeros_pasos": [
        "Identificar casos críticos: Listar outputs IA que van a clientes; priorizar 3 por riesgo e impacto",
        "Definir métricas por caso: Para cada caso, determinar qué dimensiones de calidad importan (exactitud, completitud, formato, etc.)",
        "Crear dataset de evaluación: 10-20 ejemplos representativos por caso; incluir casos edge y problemáticos conocidos",
        "Establecer umbrales iniciales: Definir score mínimo para aprobar; empezar conservador y ajustar con data",
        "Diseñar proceso de evaluación: Manual (checklist + revisor) o semi-automático (LLM-as-judge)",
        "Ejecutar piloto: Evaluar 10+ outputs reales por caso; calibrar métricas y umbrales",
        "Crear dashboard simple: Visualizar scores por caso/fecha; alertas cuando baja de umbral",
        "Documentar y comunicar: Proceso de evals, cómo interpretar scores, qué hacer si no pasa"
      ],
      "kpis": [
        {
          "nombre": "Cobertura de evals",
          "descripcion": "% casos críticos con sistema de evaluación implementado (baseline: 0%, target: 100% de casos identificados)",
          "baseline": "0%",
          "target": "100% de casos identificados"
        },
        {
          "nombre": "Adopción de gates",
          "descripcion": "% outputs que pasan por evaluación antes de producción (baseline: 0%, target: >80%)",
          "baseline": "0%",
          "target": ">80%"
        },
        {
          "nombre": "Score promedio por caso",
          "descripcion": "puntuación promedio en métricas definidas (baseline: medir, target: mejora continua)",
          "baseline": "medir",
          "target": "mejora continua"
        },
        {
          "nombre": "Tasa de rechazo",
          "descripcion": "% outputs que no pasan umbral mínimo (baseline: medir, target: tracking para calibrar)",
          "baseline": "medir",
          "target": "tracking para calibrar"
        },
        {
          "nombre": "Errores post-producción",
          "descripcion": "# incidentes reportados por cliente en outputs evaluados (baseline: medir, target: reducción >40%)",
          "baseline": "medir",
          "target": "reducción >40%"
        },
        {
          "nombre": "Comparaciones de versión",
          "descripcion": "# veces que se usaron evals para comparar prompt/modelo nuevo vs anterior (target: 2+/mes)",
          "target": "2+/mes"
        }
      ],
      "recursos_habilitantes": {
        "recursos": [
          "Líder PIA (dueño del sistema de evals)",
          "Owner por caso crítico (define métricas y valida resultados)",
          "Curador de datasets de evaluación",
          "Herramienta de evals (puede ser spreadsheet, o frameworks como Ragas)"
        ],
        "horas": [
          {
            "fase": "**Implementación** (8-12 sem)",
            "rol": "Líder PIA",
            "horas": "6h/sem"
          },
          {
            "fase": "**Implementación** (8-12 sem)",
            "rol": "Curador datasets",
            "horas": "6h/sem"
          },
          {
            "fase": "**Implementación** (8-12 sem)",
            "rol": "Owner por caso (3)",
            "horas": "2h/sem c/u"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Líder PIA (coordinación)",
            "horas": "2h/sem"
          },
          {
            "fase": "**Operación continua**",
            "rol": "Owner por caso",
            "horas": "1h/sem c/u"
          }
        ],
        "habilitantes": [
          {
            "nombre": "Lista de casos críticos",
            "descripcion": "Outputs IA que van a clientes con alto riesgo",
            "estado": "⏳ Por identificar"
          },
          {
            "nombre": "Ejemplos históricos",
            "descripcion": "Outputs pasados para construir datasets",
            "estado": "✅ Disponible (disperso)"
          },
          {
            "nombre": "Criterios de calidad por caso",
            "descripcion": "Qué significa \"bueno\" para cada tipo de output",
            "estado": "⏳ Por definir"
          },
          {
            "nombre": "Expertise en evals",
            "descripcion": "Conocimiento de frameworks (HELM, Ragas)",
            "estado": "⚠️ Parcial - capacitar"
          },
          {
            "nombre": "Herramienta de dashboard",
            "descripcion": "Sheets, Notion, o herramienta especializada",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Tiempo para evaluación",
            "descripcion": "~30 min por batch de outputs para evaluar",
            "estado": "⚠️ Negociar"
          },
          {
            "nombre": "Sponsor ejecutivo",
            "descripcion": "Gerencia entiende valor de calidad objetiva",
            "estado": "✅ Comprometido"
          }
        ]
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
      "problema": "En Upskill, el cierre SENCE de un curso involucra múltiples actores (alumnos, empresas, OTICs, plataforma SENCE) con tiempos de respuesta que escapan al control del equipo. Cada cierre tiene una cadena de dependencias: el alumno debe firmar con Clave Única, la empresa debe aprobar la liquidación, SENCE debe validar la documentación—y cualquier eslabón retrasado congela todo el proceso. El equipo no tiene visibilidad de dónde está \"trabado\" cada cierre, y cuando lo descubre, ya pasaron días valiosos.\n\nEl problema de fondo es que **no existe tracking con SLAs diferenciados ni alertas tempranas de riesgo**. El seguimiento es reactivo: alguien pregunta \"¿cómo va el cierre del curso X?\" y recién ahí se investiga. No hay distinción sistemática entre cierres OTIC (con plazos más estrictos y comisiones en juego) y trato directo. El resultado: liquidaciones atrasadas, facturación retrasada, y flujo de caja impredecible.\n\n**Modelo mental \"Torre de control de aeropuerto\"**: Cada cierre de curso es un \"vuelo\" que necesita despegar (liquidar y facturar). La torre de control tiene visibilidad de todos los vuelos, sabe cuáles están en pista, cuáles tienen delay, y cuáles necesitan intervención urgente. Sin esta torre de control, los cierres están volando a ciegas, algunos chocan (vencen sin cerrar), y nadie ve el problema hasta que es demasiado tarde.\n\nEl costo actual: liquidaciones que se retrasan semanas, facturación impredecible que complica la caja, horas de seguimiento manual enviando recordatorios uno a uno, y riesgo de perder el beneficio SENCE si no se cumple el plazo.\n\n---",
      "solucion": "Implementar un **sistema de tracking con SLAs diferenciados** para cierres SENCE que dé visibilidad en tiempo real y active alertas tempranas de riesgo:\n\n**Componentes:**\n\n1. **SLAs diferenciados por tipo de cierre**\n   - SLAs específicos para OTIC vs. trato directo (plazos distintos)\n   - Hitos medibles: fin de curso → firmas → liquidación → OC → factura → pago\n   - Tiempos target por hito según tipo de financiamiento\n   - Umbrales de alerta: verde (en plazo), amarillo (riesgo), rojo (crítico)\n\n2. **Panel de tracking \"Torre de Control\"**\n   - Vista por cohorte/empresa/participante con estado actual\n   - Aging visible: días en cada etapa vs. SLA esperado\n   - Filtros: OTIC vs. directo, en riesgo, bloqueados, próximos a vencer\n   - Proyección de facturación: monto esperado por semana/mes\n   - Campos de cobro: OC, monto, comisión OTIC, estado factura\n\n3. **Sistema de alertas y recordatorios**\n   - Recordatorios automáticos multicanal (email, WhatsApp Business)\n   - Enlaces únicos de firma con Clave Única\n   - Escalamiento progresivo: recordatorio → urgente → llamada telefónica\n   - Alerta interna cuando un cierre entra en zona \"roja\"\n\n4. **Bitácora de gestión**\n   - Registro de cada contacto/gestión realizada\n   - Historial de intentos de firma por participante\n   - Motivos de bloqueo documentados (ej: datos incorrectos, persona no contactable)\n   - Evidencia para auditoría SENCE\n\n5. **Integración y transición gradual**\n   - Conectores con Excel/Monday para equipos en transición\n   - Import/export de datos sin disrumpir flujos actuales\n   - Sincronización con plataforma SENCE donde sea posible\n   - Dashboard compartible con empresas/OTICs para transparencia\n\n---",
      "impacto": [
        "Tiempo de cierre: De semanas indefinidas → ciclo predecible con SLAs medidos",
        "Visibilidad: De \"¿cómo va el cierre?\" → dashboard en tiempo real por cohorte/empresa",
        "Gestión proactiva: De seguimiento reactivo → alertas tempranas antes de entrar en riesgo",
        "Horas operativas: De recordatorios manuales uno a uno → automatización multicanal",
        "Flujo de caja: De facturación impredecible → proyección por semana/mes",
        "Riesgo SENCE: De vencimientos por descuido → alertas de plazo crítico",
        "Auditoría: De buscar evidencias dispersas → bitácora completa por participante"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": [
          {
            "id": "13",
            "nombre": "Cierre Integral Curso",
            "relacion": "Ambas atacan el proceso de cierre; comparten infraestructura y datos"
          },
          {
            "id": "11",
            "nombre": "Evaluación Entregables",
            "relacion": "Framework de checklist puede aplicarse a hitos de cierre"
          }
        ]
      },
      "criterio_exito": {
        "done": [
          "SLAs definidos y documentados por tipo de financiamiento (OTIC/directo)",
          "Panel de tracking configurado con estados y aging",
          "Sistema de alertas y recordatorios automatizado (al menos email)",
          "Bitácora de gestión funcionando",
          "Equipo capacitado en nuevo flujo",
          "Piloto ejecutado en al menos 1 cohorte"
        ],
        "success": [
          ">80% de cierres pasan por el sistema de tracking",
          "Lead time promedio de cierre reducido >30%",
          ">90% de cierres OTIC liquidados dentro de SLA",
          "Proyección de facturación con <15% de error vs. real",
          "Equipo reporta menor carga de seguimiento manual",
          "Cero vencimientos SENCE por falta de seguimiento"
        ]
      },
      "valor": "**Beneficio principal**: Visibilidad en tiempo real del estado de cierres para actuar antes de que se conviertan en problemas. Cada día ganado en liquidación es flujo de caja adelantado. La predictibilidad de facturación mejora la planificación financiera.\n\n**Costo de no hacer**: Cierres que se retrasan sin que nadie lo note; facturación impredecible que complica la caja; horas de seguimiento manual; riesgo de perder franquicia SENCE por vencimiento; comisiones OTIC no cobradas a tiempo.\n\n**Esfuerzo vs Impacto**: Esfuerzo medio (~60-80h para tracking + alertas básicas), alto impacto en eficiencia operativa y flujo de caja. ROI positivo si acelera facturación en >5 días promedio.\n\n---",
      "conexion_ia2": {
        "conexiones": [
          {
            "dimension": "Eficiencia",
            "subdimension": "Horas liberadas",
            "score_actual": "1.6",
            "impacto": "+0.5 a +0.7 (directo)"
          },
          {
            "dimension": "Eficiencia",
            "subdimension": "Reducción de errores",
            "score_actual": "1.6",
            "impacto": "+0.4 (directo - alertas previenen vencimientos)"
          },
          {
            "dimension": "Riesgo",
            "subdimension": "Trazabilidad y auditoría",
            "score_actual": "1.2",
            "impacto": "+0.5 (directo - bitácora completa)"
          },
          {
            "dimension": "Negocio",
            "subdimension": "Impacto comercial",
            "score_actual": "2.0",
            "impacto": "+0.3 (indirecto - mejor flujo de caja)"
          }
        ],
        "justificacion": "El tracking con SLAs ataca directamente \"Horas liberadas\" (hoy en 1.6) al automatizar seguimiento manual. Impacta \"Reducción de errores\" porque las alertas tempranas previenen vencimientos. El efecto en \"Riesgo/Trazabilidad\" viene de la bitácora de gestión que documenta cada acción. El beneficio en \"Negocio\" viene de acelerar facturación y mejorar predictibilidad de caja."
      },
      "primeros_pasos": [
        "Medir baseline actual: Documentar tiempos reales de cierre de las últimas 5-10 cohortes (fin de curso → liquidación → factura → pago)",
        "Definir SLAs por tipo: Acordar tiempos target por hito para OTIC vs. trato directo; validar con equipo operativo que sean realistas",
        "Diseñar panel de tracking: Definir campos mínimos (cohorte, participante, empresa, estado, fecha hito, aging, OC, monto)",
        "Normalizar datos de entrada: Validar que al inicio de cada curso estén completos: RUT, correo, teléfono, empresa, OC",
        "Configurar sistema de alertas: Email automatizado para recordatorios de firma + alerta interna cuando entra en zona \"amarilla\"",
        "Habilitar canales adicionales: WhatsApp Business para escalamiento; verificar remitentes autorizados",
        "Pilotear en 1 cohorte: Aplicar sistema completo; medir lead time vs. baseline; documentar bloqueos",
        "Ajustar y escalar: Calibrar SLAs con datos reales; expandir a todas las cohortes nuevas"
      ],
      "kpis": [
        {
          "nombre": "Lead time cierre completo",
          "descripcion": "días desde fin de curso hasta liquidación cerrada (baseline: medir actual, target: reducción >30%)",
          "baseline": "medir actual",
          "target": "reducción >30%"
        },
        {
          "nombre": "Lead time facturación",
          "descripcion": "días desde OC hasta factura emitida (baseline: medir actual, target: <5 días)",
          "baseline": "medir actual",
          "target": "<5 días"
        },
        {
          "nombre": "Lead time cobro",
          "descripcion": "días desde factura hasta pago recibido (baseline: medir actual, target: tracking)",
          "baseline": "medir actual",
          "target": "tracking"
        },
        {
          "nombre": "Cumplimiento SLA OTIC",
          "descripcion": "% liquidaciones OTIC cerradas dentro del plazo (baseline: medir actual, target: >90%)",
          "baseline": "medir actual",
          "target": ">90%"
        },
        {
          "nombre": "Cumplimiento SLA directo",
          "descripcion": "% liquidaciones trato directo cerradas dentro del plazo (baseline: medir actual, target: >85%)",
          "baseline": "medir actual",
          "target": ">85%"
        },
        {
          "nombre": "Vencimientos SENCE",
          "descripcion": "# cierres que pierden franquicia por vencimiento (baseline: medir actual, target: 0)",
          "baseline": "medir actual",
          "target": "0"
        },
        {
          "nombre": "Horas de seguimiento",
          "descripcion": "horas/semana dedicadas a gestión de cierres (baseline: medir actual, target: reducción >40%)",
          "baseline": "medir actual",
          "target": "reducción >40%"
        },
        {
          "nombre": "Precisión de proyección",
          "descripcion": "% error entre facturación proyectada vs. real (baseline: N/A, target: <15%)",
          "baseline": "N/A",
          "target": "<15%"
        }
      ],
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
        "habilitantes": [
          {
            "nombre": "Acceso a plataforma SENCE",
            "descripcion": "Credenciales para consultar estado de liquidaciones",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Datos de participantes normalizados",
            "descripcion": "RUT, correo, teléfono validados al inicio",
            "estado": "⚠️ Parcial - mejorar validación"
          },
          {
            "nombre": "Plantillas de comunicación",
            "descripcion": "Templates de recordatorio (email, WhatsApp)",
            "estado": "⏳ Por crear"
          },
          {
            "nombre": "Herramienta de panel/tracking",
            "descripcion": "Sheets, Notion, o BI para dashboard",
            "estado": "✅ Disponible (Sheets/Notion)"
          },
          {
            "nombre": "Baseline de tiempos",
            "descripcion": "Datos históricos de lead time por tipo",
            "estado": "⏳ Por medir"
          },
          {
            "nombre": "SLAs acordados",
            "descripcion": "Tiempos target por hito y tipo de financiamiento",
            "estado": "⏳ Por definir"
          },
          {
            "nombre": "WhatsApp Business",
            "descripcion": "Canal para escalamiento de recordatorios",
            "estado": "⚠️ Por habilitar"
          },
          {
            "nombre": "Sponsor Upskill",
            "descripcion": "Liderazgo impulsa adopción del tracking",
            "estado": "✅ Comprometido"
          }
        ]
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
      "problema": "En Brinca, la adopción de IA está creciendo pero las decisiones se toman de forma fragmentada: cada área decide qué herramientas usar, qué datos compartir con modelos, qué controles aplicar (o no). No hay criterios compartidos para evaluar riesgos, ni proceso claro para aprobar pilotos, ni lineamientos sobre qué datos pueden o no usarse con IA. Cuando surge un problema (\"¿puedo usar datos del cliente X con ChatGPT?\"), no hay a quién consultar ni protocolo que seguir.\n\nEl problema de fondo es que **no existe un marco de gobierno que defina roles, controles y límites para el uso de IA**. Esto genera dos riesgos opuestos: por un lado, parálisis por miedo a \"hacer algo mal\"; por otro, uso imprudente por desconocimiento de los riesgos. Ambos frenan la adopción saludable de IA.\n\n**Modelo mental \"Código de circulación\"**: Las calles sin semáforos ni señales generan accidentes o parálisis (nadie se atreve a avanzar). Un código de circulación no prohíbe conducir; establece reglas claras que permiten que todos circulen con confianza. Lo mismo necesita Brinca para IA: no un manual de prohibiciones, sino un marco que habilite uso responsable.\n\nEl costo actual: decisiones ad-hoc que podrían generar riesgos de privacidad o propiedad intelectual; pilotos trabados esperando \"aprobación\" que nadie sabe dar; inconsistencia entre áreas; falta de confianza del cliente en cómo manejamos sus datos; y riesgo regulatorio a futuro cuando exista normativa de IA.\n\n---",
      "solucion": "Implementar un **marco mínimo viable de gobierno de IA** que establezca reglas claras sin burocratizar, permitiendo escalar con confianza:\n\n**Componentes:**\n\n1. **Principios de IA responsable**\n   - 5-7 principios claros y memorables (ej: transparencia, privacidad, supervisión humana)\n   - Ejemplos concretos de qué significa cada principio en el contexto de Brinca\n   - Comunicación simple para toda la organización\n   - Revisión anual para mantener vigencia\n\n2. **Clasificación de riesgo por caso de uso**\n   - Matriz de riesgo: bajo / medio / alto según datos involucrados y autonomía del sistema\n   - Bajo riesgo: autogestión con checklist mínimo\n   - Medio riesgo: revisión por par o líder de área\n   - Alto riesgo: aprobación de comité antes de implementar\n   - Ejemplos pre-clasificados para casos comunes\n\n3. **Checklist de evaluación de riesgos**\n   - ¿Qué datos se usan? (propios, de clientes, sensibles)\n   - ¿Qué modelo/herramienta? (términos de servicio, retención de datos)\n   - ¿Quién supervisa los outputs? (humano en el loop)\n   - ¿Cómo se manejan errores o sesgos?\n   - Checklist diferenciado por nivel de riesgo\n\n4. **Roles y responsabilidades (RACI)**\n   - Responsable de gobierno IA (DPO, CDO, o equivalente)\n   - Comité de IA: Legal, TI, PIA, Operaciones\n   - Owner por caso de uso (accountability de cumplimiento)\n   - Escalamiento claro para consultas y excepciones\n\n5. **Proceso de aprobación ágil**\n   - Fast-track para casos de bajo riesgo (auto-aprobación con registro)\n   - Revisión asíncrona para riesgo medio (<48h)\n   - Comité para alto riesgo (reunión ad-hoc o mensual)\n   - Registro de decisiones para auditoría\n\n6. **Gestión de incidentes**\n   - Qué constituye un incidente de IA (error grave, sesgo, filtración)\n   - Canal de reporte y escalamiento\n   - Protocolo de respuesta y comunicación\n   - Post-mortem y lecciones aprendidas\n\n---",
      "impacto": [
        "Claridad: De \"¿puedo hacer esto?\" → criterios claros y checklist de auto-evaluación",
        "Velocidad: De pilotos trabados esperando aprobación → fast-track para bajo riesgo, <48h para medio",
        "Escalamiento: De decisiones ad-hoc → marco que escala con la organización",
        "Confianza del cliente: De \"¿cómo manejan mis datos?\" → política documentada y comunicable",
        "Protección legal: De exposición desconocida → riesgos identificados y mitigados",
        "Cultura: De miedo o imprudencia → uso responsable normalizado",
        "Preparación regulatoria: De reacción → anticipación a normativa de IA que vendrá"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": [
          {
            "id": "14",
            "nombre": "Metodología Proyectos IA",
            "relacion": "Gates de metodología pueden incluir evaluación de riesgo del marco"
          },
          {
            "id": "16",
            "nombre": "Evals y Umbrales",
            "relacion": "Framework de evals como control de calidad dentro del gobierno"
          },
          {
            "id": "15",
            "nombre": "Versionado QA",
            "relacion": "Control de versiones de activos es parte del gobierno"
          }
        ]
      },
      "criterio_exito": {
        "done": [
          "Principios de IA responsable definidos y publicados",
          "Matriz de clasificación de riesgo documentada con ejemplos",
          "Checklist de evaluación de riesgos disponible",
          "RACI de gobierno IA aprobado; responsable nombrado",
          "Proceso de aprobación documentado (fast-track + comité)",
          "Comité de IA constituido con representantes de áreas clave",
          "Capacitación inicial realizada a líderes de área"
        ],
        "success": [
          ">80% de nuevos casos de uso pasan por evaluación de riesgo",
          "Tiempo promedio de aprobación <48h para riesgo bajo/medio",
          "Cero incidentes graves de IA (filtración, sesgo dañino)",
          "Equipo reporta claridad sobre qué pueden y no pueden hacer",
          "Al menos 1 cliente menciona positivamente el manejo de datos",
          "Marco adaptado a al menos 1 cambio regulatorio o de mercado"
        ]
      },
      "valor": "**Beneficio principal**: Habilitar el escalamiento de IA con confianza, reduciendo tanto la parálisis por miedo como el uso imprudente. Genera confianza con clientes y prepara para regulación futura. Es infraestructura invisible que previene problemas.\n\n**Costo de no hacer**: Riesgos de privacidad y propiedad intelectual no gestionados; pilotos trabados; inconsistencia entre áreas; pérdida de confianza de clientes; exposición legal cuando llegue regulación; incidentes que dañan reputación.\n\n**Esfuerzo vs Impacto**: Esfuerzo alto (~80-120h para marco completo), alto impacto estratégico. ROI difícil de cuantificar pero crítico si evita un solo incidente grave.\n\n---",
      "conexion_ia2": {
        "conexiones": [
          {
            "dimension": "Riesgo",
            "subdimension": "Gobierno y control",
            "score_actual": "1.2",
            "impacto": "+1.0 a +1.5 (directo)"
          },
          {
            "dimension": "Riesgo",
            "subdimension": "Calidad de outputs",
            "score_actual": "1.2",
            "impacto": "+0.3 (indirecto - checklist previene errores)"
          },
          {
            "dimension": "Cultura",
            "subdimension": "Liderazgo y sponsorship",
            "score_actual": "2.1",
            "impacto": "+0.3 (comité legitima adopción)"
          },
          {
            "dimension": "Adopción",
            "subdimension": "Penetración",
            "score_actual": "2.3",
            "impacto": "+0.3 (marco habilita escalar con confianza)"
          }
        ],
        "justificacion": "El marco de gobierno ataca directamente \"Gobierno y control\" (hoy en 1.2, la subdimensión más baja de Riesgo). Es la intervención con mayor potencial de subir el score de Riesgo. También contribuye a \"Cultura/Liderazgo\" porque el comité da legitimidad institucional. El efecto en \"Adopción\" viene de que el marco da claridad para escalar sin miedo."
      },
      "primeros_pasos": [
        "Nombrar responsable de gobierno IA: Definir quién lidera el esfuerzo (CDO, DPO, o rol nuevo); validar con Gerencia",
        "Redactar principios de IA responsable: 5-7 principios claros con ejemplos de Brinca; validar con comité inicial",
        "Crear matriz de clasificación de riesgo: Definir criterios de bajo/medio/alto; pre-clasificar casos comunes",
        "Diseñar checklist de evaluación: Preguntas clave diferenciadas por nivel de riesgo",
        "Documentar proceso de aprobación: Fast-track para bajo riesgo; flujo para medio y alto",
        "Constituir comité de IA: Representantes de Legal, TI, PIA, Operaciones; definir frecuencia de reunión",
        "Capacitar a líderes de área: Sesión de 1h sobre principios, checklist, y proceso",
        "Pilotear con 3 casos: Aplicar marco a casos reales; ajustar según feedback"
      ],
      "kpis": [
        {
          "nombre": "Cobertura de evaluación",
          "descripcion": "% nuevos casos de uso que pasan por checklist de riesgo (baseline: 0%, target: >80%)",
          "baseline": "0%",
          "target": ">80%"
        },
        {
          "nombre": "Tiempo de aprobación bajo/medio riesgo",
          "descripcion": "días desde solicitud hasta decisión (baseline: N/A, target: <48h)",
          "baseline": "N/A",
          "target": "<48h"
        },
        {
          "nombre": "Tiempo de aprobación alto riesgo",
          "descripcion": "días hasta decisión de comité (baseline: N/A, target: <2 semanas)",
          "baseline": "N/A",
          "target": "<2 semanas"
        },
        {
          "nombre": "Incidentes de IA",
          "descripcion": "# incidentes graves (filtración, sesgo, error crítico) (baseline: medir actual, target: 0)",
          "baseline": "medir actual",
          "target": "0"
        },
        {
          "nombre": "Adopción del checklist",
          "descripcion": "% equipos que conocen y usan el checklist (baseline: 0%, target: >90%)",
          "baseline": "0%",
          "target": ">90%"
        },
        {
          "nombre": "Claridad percibida",
          "descripcion": "% equipo que reporta saber qué puede y no puede hacer con IA (encuesta, target: >80%)",
          "target": ">80%"
        },
        {
          "nombre": "Reuniones de comité",
          "descripcion": "# reuniones realizadas vs. programadas (target: 100%)",
          "target": "100%"
        },
        {
          "nombre": "Casos pre-clasificados",
          "descripcion": "# casos de uso con clasificación de riesgo documentada (baseline: 0, target: 20+)",
          "baseline": "0",
          "target": "20+"
        }
      ],
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
        "habilitantes": [
          {
            "nombre": "Sponsor ejecutivo",
            "descripcion": "Gerencia General apoya y legitima el marco",
            "estado": "✅ Comprometido"
          },
          {
            "nombre": "Responsable nombrado",
            "descripcion": "CDO, DPO, o rol equivalente que lidere",
            "estado": "⏳ Por nombrar"
          },
          {
            "nombre": "Asesoría legal básica",
            "descripcion": "Revisión de principios y checklist por abogado",
            "estado": "⚠️ Consultoría puntual disponible"
          },
          {
            "nombre": "Inventario de casos de uso IA",
            "descripcion": "Lista de usos actuales para clasificar",
            "estado": "⏳ Por levantar"
          },
          {
            "nombre": "Política de privacidad existente",
            "descripcion": "Base para extender a IA",
            "estado": "⚠️ Parcial - revisar alcance"
          },
          {
            "nombre": "Representantes de áreas para comité",
            "descripcion": "Disponibilidad de Legal, TI, PIA, Ops",
            "estado": "⏳ Por confirmar"
          },
          {
            "nombre": "Canal de comunicación interna",
            "descripcion": "Donde publicar principios y anuncios",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Tiempo protegido para comité",
            "descripcion": "2h/mes para reuniones",
            "estado": "⚠️ Negociar"
          }
        ]
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
      "problema": "El reporte C3 es un entregable recurrente que requiere consolidar datos de múltiples fuentes, realizar cálculos, generar gráficos, y validar consistencia—todo manualmente. Cada mes el equipo repite el mismo proceso: extraer datos, copiar a la plantilla, calcular indicadores, crear visualizaciones, y revisar que todo cuadre. Los errores son frecuentes (un dato mal copiado, una fórmula rota, un gráfico desactualizado) y se detectan tarde, a veces después de enviar.\n\nEl problema de fondo es que **no existe automatización del flujo de datos ni validación sistemática antes del envío**. El proceso depende de la memoria y cuidado de quien lo ejecuta. No hay bitácora de cambios, la comparación mes a mes es manual, y cuando algo falla, cuesta identificar dónde se introdujo el error.\n\n**Modelo mental \"Factura automática\"**: Imagina que cada mes tuvieras que calcular manualmente cada factura, copiando precios de una planilla, cantidades de otra, y sumando con calculadora. Los errores serían inevitables. Los sistemas de facturación automatizan esto: extraen datos, calculan, validan, y generan el documento listo para enviar. El C3 debería funcionar igual.\n\nEl costo actual: horas de trabajo manual repetitivo cada mes, errores que dañan credibilidad del reporte, falta de comparabilidad histórica, reprocesos cuando se detectan inconsistencias, y un equipo talentoso atrapado en tareas que una máquina debería hacer.\n\n---",
      "solucion": "Implementar un **sistema de automatización del C3 con Auto-QA integrado** que transforme el proceso de horas manuales a generación asistida con validación:\n\n**Componentes:**\n\n1. **Extracción automática de datos**\n   - Conexión a fuentes de datos (planillas, sistemas, APIs)\n   - Extracción programada o bajo demanda\n   - Validación de completitud de inputs antes de procesar\n   - Manejo de excepciones (datos faltantes, formatos incorrectos)\n\n2. **Motor de cálculo y transformación**\n   - Cálculos de indicadores automatizados según reglas definidas\n   - Transformaciones estándar (agregaciones, ratios, variaciones)\n   - Versionado de reglas de cálculo para auditoría\n   - Comparación automática vs. mes anterior\n\n3. **Generación de visualizaciones**\n   - Gráficos estándar generados automáticamente\n   - Plantilla de reporte con campos dinámicos\n   - Actualización de visualizaciones sin intervención manual\n   - Exportación a formatos requeridos (PDF, PPT, Excel)\n\n4. **Auto-QA con reglas de validación**\n   - Checklist automático pre-envío (totales cuadran, rangos válidos, datos completos)\n   - Detección de anomalías (valores fuera de rango histórico)\n   - Alertas de inconsistencias antes de finalizar\n   - Override manual documentado para excepciones legítimas\n\n5. **Panel de desempeño mensual**\n   - Dashboard con indicadores clave del período\n   - Comparación histórica mes a mes\n   - Tendencias y alertas de desviación\n   - Exportable para presentaciones\n\n6. **Bitácora y trazabilidad**\n   - Registro de cada generación de C3 (quién, cuándo, qué versión)\n   - Historial de cambios y correcciones\n   - Versiones anteriores accesibles para comparación\n   - Auditoría completa del proceso\n\n---",
      "impacto": [
        "Tiempo de armado: De horas de trabajo manual por mes → generación en minutos con revisión final",
        "Errores en reporte: De errores frecuentes detectados tarde → validación automática pre-envío",
        "Consistencia: De calidad variable según quién ejecuta → proceso estandarizado y repetible",
        "Comparabilidad: De análisis manual mes a mes → comparación automática con histórico",
        "Trazabilidad: De \"¿quién cambió esto?\" → bitácora completa de modificaciones",
        "Carga del equipo: De talento atrapado en repetición → tiempo liberado para análisis y mejora"
      ],
      "dependencias": {
        "prerrequisitos": [],
        "potencia": [
          {
            "id": "16",
            "nombre": "Evals y Umbrales",
            "relacion": "Framework de Auto-QA puede usar metodología de evals"
          },
          {
            "id": "11",
            "nombre": "Evaluación Entregables",
            "relacion": "Reglas de validación de C3 como caso de evaluación de entregables"
          }
        ]
      },
      "criterio_exito": {
        "done": [
          "Estructura del C3 documentada (campos, cálculos, fuentes)",
          "Extracción automática de datos funcionando",
          "Cálculos y gráficos automatizados",
          "Reglas de Auto-QA definidas e implementadas",
          "Panel de desempeño mensual disponible",
          "Bitácora de cambios funcionando",
          "Equipo capacitado en nuevo flujo"
        ],
        "success": [
          ">80% del proceso de armado automatizado",
          "Tiempo de generación reducido >60%",
          "Errores post-envío reducidos >80%",
          "Comparación mes a mes disponible en <5 min",
          "Equipo reporta menor carga operativa",
          "Al menos 3 meses de histórico comparable en panel"
        ]
      },
      "valor": "**Beneficio principal**: Liberar horas de trabajo manual repetitivo, reducir errores en el reporte, y habilitar análisis histórico automático. Cada hora ahorrada en armado es hora ganada para análisis de valor.\n\n**Costo de no hacer**: Horas mensuales de trabajo manual; errores que dañan credibilidad; falta de comparabilidad histórica; equipo frustrado con tareas repetitivas; riesgo de errores críticos en reporte.\n\n**Esfuerzo vs Impacto**: Esfuerzo alto (~80-120h para automatización completa), alto impacto en eficiencia operativa. ROI positivo si ahorra >5h/mes de trabajo manual.\n\n---",
      "conexion_ia2": {
        "conexiones": [
          {
            "dimension": "Eficiencia",
            "subdimension": "Horas liberadas",
            "score_actual": "1.6",
            "impacto": "+0.6 a +0.8 (directo)"
          },
          {
            "dimension": "Eficiencia",
            "subdimension": "Reducción de errores",
            "score_actual": "1.6",
            "impacto": "+0.5 (directo - Auto-QA)"
          },
          {
            "dimension": "Riesgo",
            "subdimension": "Calidad de outputs",
            "score_actual": "1.2",
            "impacto": "+0.4 (directo - validación pre-envío)"
          }
        ],
        "justificacion": "La automatización del C3 ataca directamente \"Horas liberadas\" y \"Reducción de errores\" (ambas en 1.6) al eliminar trabajo manual y validar automáticamente. Impacta \"Calidad de outputs\" en Riesgo porque el Auto-QA previene errores antes del envío. Es un caso claro de automatización de proceso repetitivo con alto ROI."
      },
      "primeros_pasos": [
        "Documentar estructura actual del C3: Mapear campos, cálculos, fuentes de datos, y flujo actual",
        "Identificar fuentes de datos: Listar todas las planillas/sistemas de donde vienen los datos; evaluar acceso",
        "Diseñar flujo de extracción: Definir cómo se extraen datos (API, export manual, scraping)",
        "Automatizar cálculos: Implementar fórmulas y transformaciones en script o planilla maestra",
        "Automatizar visualizaciones: Conectar gráficos a datos para actualización automática",
        "Definir reglas de Auto-QA: Checklist de validaciones (totales, rangos, completitud)",
        "Implementar validaciones: Script que ejecuta reglas y alerta inconsistencias",
        "Pilotear en 1-2 meses: Generar C3 con nuevo sistema en paralelo al manual; comparar y ajustar"
      ],
      "kpis": [
        {
          "nombre": "Grado de automatización",
          "descripcion": "% del proceso de armado que no requiere intervención manual (baseline: ~0%, target: >80%)",
          "baseline": "~0%",
          "target": ">80%"
        },
        {
          "nombre": "Tiempo de generación",
          "descripcion": "horas desde inicio hasta C3 listo para revisión (baseline: medir actual, target: reducción >60%)",
          "baseline": "medir actual",
          "target": "reducción >60%"
        },
        {
          "nombre": "Errores pre-envío detectados",
          "descripcion": "# inconsistencias atrapadas por Auto-QA antes de enviar (baseline: 0, target: tracking)",
          "baseline": "0",
          "target": "tracking"
        },
        {
          "nombre": "Errores post-envío",
          "descripcion": "# correcciones necesarias después de entregar el C3 (baseline: medir actual, target: reducción >80%)",
          "baseline": "medir actual",
          "target": "reducción >80%"
        },
        {
          "nombre": "Tiempo de comparación histórica",
          "descripcion": "minutos para generar análisis vs. mes anterior (baseline: medir actual, target: <5 min)",
          "baseline": "medir actual",
          "target": "<5 min"
        },
        {
          "nombre": "Cobertura de validación",
          "descripcion": "% reglas de QA implementadas vs. definidas (baseline: 0%, target: 100%)",
          "baseline": "0%",
          "target": "100%"
        },
        {
          "nombre": "Satisfacción del equipo",
          "descripcion": "percepción de mejora en proceso de generación (encuesta, target: >8)",
          "target": ">8"
        },
        {
          "nombre": "Uso del panel",
          "descripcion": "# consultas mensuales al dashboard de desempeño (baseline: 0, target: tracking)",
          "baseline": "0",
          "target": "tracking"
        }
      ],
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
        "habilitantes": [
          {
            "nombre": "Estructura del C3 documentada",
            "descripcion": "Mapeo de campos, cálculos, y flujo actual",
            "estado": "⏳ Por documentar"
          },
          {
            "nombre": "Acceso a fuentes de datos",
            "descripcion": "APIs o exports de sistemas que alimentan el C3",
            "estado": "⚠️ Parcial - evaluar conectividad"
          },
          {
            "nombre": "Plantillas actuales",
            "descripcion": "Templates de reporte C3 vigentes",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Desarrollador de scripts",
            "descripcion": "Persona con capacidad de automatizar (Python, Apps Script)",
            "estado": "⚠️ Parcial - asignar"
          },
          {
            "nombre": "Reglas de validación definidas",
            "descripcion": "Checklist de QA con criterios claros",
            "estado": "⏳ Por definir"
          },
          {
            "nombre": "Histórico de C3 anteriores",
            "descripcion": "Reportes pasados para comparación y testing",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Herramienta de visualización",
            "descripcion": "Sheets, Data Studio, o similar para dashboard",
            "estado": "✅ Disponible"
          },
          {
            "nombre": "Sponsor EIC/PIA",
            "descripcion": "Liderazgo impulsa adopción",
            "estado": "✅ Comprometido"
          }
        ]
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