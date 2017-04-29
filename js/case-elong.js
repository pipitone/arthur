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
          "Iron Deficiency Anemia" : { "rank": 1, "feedback": "Secondary to menorrhagia, diet."},
          "Hypothyroidism" : {"rank": 2, "feedback": "Female presenting with menorrhagia, fatigue."}
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
