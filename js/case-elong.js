//History Overrides
mood.response = "I've been feeling a little low";
mood.feedback = "Important to explore possible mood disorder";
mood.importance = "high";
diet.response = "I miss meals frequently";
diet.feedback = "Suspect nutritional (iron, B12/folate) deficiency";
diet.importance = "high";
sleep.response = "I've been so sleepy and sleeping all the time.";
sleep.feedback = "Important. Suspect sleep disorders.";
sleep.importance = "high";
medications.response = "Diazepam 5mg for anxiety NKDA";
medications.feedback = "Important to ask as symptoms may be a meds adverse effect.";
medications.importance = "high";
bloodTransfusions.feedback = "Important if you suspect some form of anemia";
bloodTransfusions.importance = "high";
//Physical Overrides
generalInspection.response = "You see a thin, pale woman who appears her stated age. She is evidently anxious.";
generalInspection.feedback = "Initial impression of the health of the pagient";
vitals.response = "HR: 90<br> BP: 120/80 supine, no postural change<br> Weight: 52 kg<br> Height: 173cm";
vitals.feedback = "Vitals are vital";
vitals.importance = "high";
cardiovascular.response = "Her mucous membranes are pale. She has a grade 2/6 apical systolic murmur. There are no other significant findings";
cardiovascular.feedback = "Possible cardiac cause for her fatigue. May show signs of anemia.";
cardiovascular.importance = "high";
respiratory.response = "Air entry is normal. There are occasional scattered wheezes throughout both lung fields.";
respiratory.feedback = "Relevant given her smoking history.";
respiratory.importance = "high";
pelvic.response = "Vaginal exam is normal. Bimanual exam reveals a slightly enlarged, non-tender uterus.";
pelvic.feedback = "Look for abnormalities that may indicate the source of the bleeding.";
pelvic.importance = "high";
dre.response = "Negative for occult blood.";
dre.feedback = "Alternate sources of bleeding, presence of anovaginal fistula";
dre.importance = "med";
Case = {
    "title" : "Elizabeth Long",
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
