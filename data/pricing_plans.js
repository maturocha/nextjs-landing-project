const plans = [
    {
        titleInfo: "Plan Anual",
        price: "$5.712.000",
        subtitle: "",
        description: "Acceso ilimitado anual. *Precios incluyen IVA",
        recomendado: true,
        features: [
            {
                name: "Funcionalidades", values: 
                [
                    { check: "true", text: "" }, // Competiciones Digitales
                    { check: "true", text: "" }, // Comunidad Online
                    { check: "true", text: "" }, // Material Digital Taller
                    { check: "true", text: "" }, // Sección de Estudiantes
                    { check: "true", text: "" }, // Sección de Profesores
                    { check: "true", text: "" }  // Webinars Informativos
                ]
            },
            {
                name: "Soporte", values:
                [
                    { check: "true", text: "" }, // Online (foros)
                    { check: "true", text: "" }, // Instructor Digital IA
                    { check: "true", text: "" }  // Ayudante Online
                ]
            },
            {
                name: "General", values: 
                [
                    { check: "none", text: "Ilimitado y anual" }, // Reportes
                    { check: "true", text: "" }, // Certificación
                    { check: "true", text: "" }, // Acceso
                    { check: "none", text: "Activo" }, // Disponibilidad
                    { check: "none", text: "CLP $4.800.000" }, // Valor
                    { check: "none", text: "CLP $5.712.000" }, // Valor (+IVA)
                    { check: "none", text: "CLP $2.400.000" }, // Valores
                    { check: "none", text: "CLP $2.856.000" }, // Valores
                ]
            }
        ]
    },
    {
        titleInfo: "Plan Semestral",
        price: "$4.284.000",
        subtitle: "",
        description: "Acceso ilimitado por un máximo de 6 meses. *Precios incluyen IVA",
        recomendado: false,
        features: [
            {
                name: "funcionalidades", values:
                [
                    { check: "true", text: "" }, // Competiciones Digitales
                    { check: "true", text: "" }, // Comunidad Online
                    { check: "true", text: "" }, // Material Digital Taller
                    { check: "true", text: "" }, // Sección de Estudiantes
                    { check: "true", text: "" }, // Sección de Profesores
                    { check: "true", text: "" }  // Webinars Informativos
                ]
            },
            {
                name: "soporte", values:
                [
                    { check: "true", text: "" }, // Online (foros)
                    { check: "true", text: "" }, // Instructor Digital IA
                    { check: "true", text: "" }  // Ayudante Online
                ]
            },
            {
                name: "general", values:
                [
                    { check: "none", text: "Ilimitado por 6 meses máximo" }, // Reportes
                    { check: "false", text: "" }, // Certificación
                    { check: "true", text: "" }, // Acceso
                    { check: "none", text: "Activo" }, // Disponibilidad
                    { check: "none", text: "CLP $3.600.000" }, // Valor
                    { check: "none", text: "CLP $4.284.000" }, // Valor (+IVA)
                    { check: "none", text: "CLP $1.800.000" }, // Valores
                    { check: "none", text: "CLP $2.142.000" }, // Valores
                ]
            }
        ]
    },
];

export default plans;
