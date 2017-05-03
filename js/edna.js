//History Overrides

//Physical Overrides


ednaJones = {
    "title" : "Edna Jones",
    "stem" : "Elizabeth Long, a forty-five-year-old divorced mother of three teenaged children, comes to you, her family physician, with a six-month history of fatigue. She tells you that she feels tired all the time and that she doesn’t even have the energy to climb the stairs at her apartment.",
    "history" : [mood,diet,sleep,jointPain,medications,maritalStatus,children,drugUse,bloodTransfusions],
    "physical" : [generalInspection,vitals,cardiovascular,respiratory,pelvic,dre],
    "differential" : {
          "Iron Deficiency Anemia" : { "rank": 1, "feedback": "suggested by ..."},
          "Hypothyroidism" : {"rank": 2, "feedback": "so wrong"}
    },
    "investigations" : {
        "CBC": {
            result: "cbc result",
            feedback: "cbc feedback",
            importance: "high",
        },
        "Creatinine": {
            result: "creatinine result",
            feedback: "creatinine feedback",
            importance: "high",
        },
        "Electrolytes": {
            result: "",
            feedback: "",
            importance: "high",
        },
        "Feritin": {
            result: "",
            feedback: "",
            importance: "high",
        },
        "TSH": {
            result: "",
            feedback: "",
            importance: "medium",
        },
        "CT": {
            result: "",
            feedback: "",
            importance: "medium",
        },
        "MRI": {
            result: "![dat mri](http://noranclinicblog.com/wp-content/uploads/2012/10/mri_brain1.gif)",
            feedback: "mri feedback",
            importance: "low",
        },
        "Serum electrophoresis": {
            result: "",
            feedback: "",
            importance: "low",
        },
    }
}
