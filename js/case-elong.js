Case = {
    "title" : "Elizabeth Long",
    "stem" : "Elizabeth Long, a forty-five year old divorced mother of three teenaged children, comes to you, her family physician, with a six-month history of fatigue. She tells you that she feels tired all the time and that she doesn’t even have the energy to climb the stairs at her apartment.",
    "history" : {
        "Mood" : {
            "response": "I've been feeling a little low.",
            "feedback": "Important to explore possible mood disorder, and impact of illness.",
            "importance": "high"
        },
        "Diet" : {
            "response": "I miss meals frequently.",
            "feedback": "Important. Suspect nutritional (iron, B12/folate) deficiency.",
            "importance": "high"
        },
        "Sleep" : {
            "response": "I've been so sleepy and sleeping all the time.",
            "feedback": "Important. Suspect sleep disorders.",
            "importance": "high"
        },
        "Joint Pain" : {
            "response": "None",
            "feedback": "Not very important in this case unless suggested elsewhere.",
            "importance": "low"
        },
        "Medications" : {
            "response" : "Diazepam 5mg for anxiety NKDA",
            "feedback": "Important to ask as symptoms may be a meds adverse effect.",
            "importance": "high"
        },
        "ASOUL" : {
            "response": "45 year old divorced mother of three teenaged children living in a house in north Kingston",
            "feedback": "Always useful to ask to understand context, and often reveals clues about how illness manifests, and should be managed.",
            "importance": "high"
        },
        "Substance Use" : {
            "response": "None",
            "feedback": "Important.",
            "importance": "high"
        },
    },
    "physical" : {

    },
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
            result: "",
            feedback: "",
            importance: "",
        },
        "Electrolytes": {
            result: "",
            feedback: "",
            importance: "",
        },
        "Feritin": {
            result: "",
            feedback: "",
            importance: "",
        },
        "TSH": {
            result: "",
            feedback: "",
            importance: "",
        },
        "CT": {
            result: "",
            feedback: "",
            importance: "",
        },
        "MRI": {
            result: "![dat mri](http://www.arizonastateradiology.com/images/home/grid/MRI-head-zoom-38266824-3.jpg)",
            feedback: "mri result",
            importance: "low",
        },
        "Serum electrophoresis": {
            result: "",
            feedback: "",
            importance: "",
        },
    }
}
