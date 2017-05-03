//History Overrides
mood.response = "She has been feeling 'depressed.' She admits to losing her temper frequently and finds herself crying at the slightest provocation.";
mood.feedback = "Mood disorders, specifically low mood, can cause fatigue and sleep disturbances.";
mood.importance = "high";
diet.response = "Often misses meals, due to time and money constraints.";
diet.feedback = "Dietary deficiencies can result in fatigue.";
diet.importance = "high";
sleep.response = "She has been sleeping poorly. She uses her 'nerve pills' when particularly fatigued.";
sleep.feedback = "Sleep disturbances, for whatever reason, can cause fatigue. Denies orthopnea, PND, chest pain, leg cramps.";
sleep.importance = "high";
medications.response = "Diazepam 5mg for anxiety NKDA";
medications.feedback = "Important to ask as symptoms may be a meds adverse effect.";
medications.importance = "high";
bloodTransfusions.feedback = "Important if you suspect some form of anemia";
bloodTransfusions.importance = "high";
menstruation.response = "She says her periods have become heavier over the past few years. They occur monthly and last up to 10 days. She soaks up to 10 pads/day for the first 3 days and sometimes passes clots. Her last period was 2 weeks ago.";
menstruation.feedback = "Relevant for her age. Menorrhagia and menopausal symptoms can result in fatigue.";
menstruation.importance = "high";
thyroidSymptoms.feedback = "Common cause of fatigue.";
thyroidSymptoms.importance = "high";
smoking.response = "Has smoked a pack of cigarettes/day for 25 years. Denies drinking alcohol.";
smoking.feedback = "Relevant for fatigue, sleep disturbances."
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
dre.feedback = "Alternate sources of bleeding, presence of anovaginal fistula. Invasive and less important in this case";
Case = {
    "title" : "Elizabeth Long",
    "stem" : "Elizabeth Long, a forty-five-year-old divorced mother of three teenaged children, comes to you, her family physician, with a six-month history of fatigue. She tells you that she feels tired all the time and that she doesn’t even have the energy to climb the stairs at her apartment.",
    "specialty" : "Hematology",
    "presentation" : "Fatigue",
    "history" : [mood,diet,caffeineUse,sleep,jointPain,pets,medications,maritalStatus,children,drugUse,bloodTransfusions,nationality],
    "historyLimit" : 6,
    "physical" : [visualAcuity,vitals,cardiovascular,respiratory,pelvic,dre,generalInspection,moca,neuro],
    "physicalLimit" : 6,
    "differential" : {
          "Iron Deficiency Anemia" : { "rank": 1, "feedback": "Secondary to menorrhagia, diet."},
          "Hypothyroidism" : {"rank": 2, "feedback": "Female presenting with menorrhagia, fatigue."},
          "Perimenopause" : {"rank": 3, "feedback": "Relevant in a woman of her age. Symptoms include fatigue, irregular periods, sleep disturbances."},
          "Uterine Pathology (fibroids, neoplasm)" : {"rank": 4, "feedback": "Cause of menorrhagia."},
          "Major Depressive Disorder" : {"rank": 5, "feedback": "May be cause or consequence of fatigue."}
    },
    "investigations" : {
        "CBC": {
            result: "WBC: 6.5 x 109/L (4.0 – 10.5)<br> Hemoglobin: 98/L (120 – 160)<br> MCV: 73 fL (84.2)<br> Platelets: 464 x 109/L (140 – 400)",
            feedback: "Important to investigate for anemia, given her history of menorrhagia.",
            importance: "high",
        },
        "Creatinine": {
            result: "Normal",
            feedback: "No reason to suspect kidney disease",
            importance: "low",
        },
        "Electrolytes": {
            result: "Normal",
            feedback: "No reason to suspect electrolyte abnormality",
            importance: "low",
        },
        "Feritin": {
            result: "3 mcg/L (13 – 150)",
            feedback: "Most sensitive test for iron-deficiency anemia.",
            importance: "high",
        },
        "TSH": {
            result: "1.7 miU/L (0.40 - 1.50)",
            feedback: "Investigate for hypothyroidism.",
            importance: "high",
        },
        "Endometrial Biopsy": {
            result: "Normal",
            feedback: "Endometrial changes are a common cause of abnormal vaginal bleeding.",
            importance: "med",
        },
        "MRI": {
            result: "![dat mri](http://noranclinicblog.com/wp-content/uploads/2012/10/mri_brain1.gif)",
            feedback: "Not a first-line investigation for fatigue",
            importance: "low",
        },
        "Serum electrophoresis": {
            result: "Normal",
            feedback: "Not important in this case",
            importance: "low",
        },
    }
}
