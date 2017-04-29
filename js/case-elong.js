//History Overrides
mood.response = "She has been feeling 'depressed.' She admits to losing her temper frequently and finds herself crying at the slightest provocation.";
mood.feedback = "Mood disorders, specifically low mood, can cause fatigue and sleep disturbances.";
mood.importance = "high";

sleep.response = "She has been sleeping poorly. She uses her 'nerve pills' when particularly fatigued.";
sleep.feedback = "Sleep disturbances, for whatever reason, can cause fatigue.  Denies orthopnea, PND, chest pain, leg cramps.";
sleep.importance = "high";

var menstruation = new Q(
    query = "Menstruation", 
    response = "She says her periods have become heavier over the past few " +
    "years. They occur monthly and last up to 10 days. She soaks up to 10 " +
    "pads/day for the firslt 3 days and sometimes passes clots. Her last period " +
    "was 2 weeks ago.", 
    importance = "high",
    feedback = "Relevant for her age. Menorrhagia and menopausal symptoms can " +
    "result in fatigue.")

var hypothyroidism= new Q("Hypothyroidism", 
    "Negative",
    "high", 
    "Common cause of fatique")

var ASOUL = new Q(
    query = "ASOUL", 
    response = "She is divorced and taking care of 3 teenaged children. Works as " +
    "a store clerk and has recently taken additional part-time work as an evening " +
    "office cleaner to make ends meet. However, her fatigue is preventing her " +
    "from working and her manager is requiring a doctor’s certificate to justify " +
    "her absences. With respect to social activities, she visits the local Bingo " +
    "Hall twice a week with her daughter.",
    importance = "high",
    feedback = "Lifestyle changes, external stress, etc. can cause fatigue, sleep " + 
    "disturbances.")

var drugUse = new Q(
    query = "Substance use", 
    response = "Has smoked a pack of cigarettes/day for 25 years. Denies " + 
    "drinking alcohol.",
    importance = "high",
    feedback = "Relevant for fatigue, sleep disturbances.")

diet.response = "Often misses meals, due to time and money constraints.";
diet.feedback = "Dietary deficiencies can result in fatigue.";
diet.importance = "high";

medications.response = "Diazepam, 5mg for anxiety";
medications.feedback = "Different medications can cause sleepiness.";
medications.importance = "high";

bloodTransfusions.feedback = "Important if you suspect some form of anemia";
<<<<<<< HEAD
bloodTransfusions.importance = "high";
=======
bloodTransfusions.importance = "med";

>>>>>>> origin/glitch
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

function shuffle(array) {
    let counter = array.length;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

Case = {
    "title" : "Elizabeth Long",
    "stem" : "Elizabeth Long, a forty-five-year-old divorced mother of three teenaged children, comes to you, her family physician, with a six-month history of fatigue. She tells you that she feels tired all the time and that she doesn’t even have the energy to climb the stairs at her apartment.",
	"history" : shuffle([ 
			mood, sleep, menstruation, hypothyroidism, ASOUL, diet, drugUse,
			medications, bloodTransfusions, birthplace, occupation, travel,
			jointPain]), 
    "physical" : [generalInspection,vitals,cardiovascular,respiratory,pelvic,dre],
    "differential" : {
          "Hypothyroidism" : { rank : 1, feedback : "Female presenting with menorrhagia, fatigue."}, 
          "Iron Deficiency Anemia" : { "rank": 2, "feedback": "Secondary to menorrhagia, diet." },
          "Some uterine pathology (fibroids, polyps, neoplasm)" : { "rank" : 3, feedback : "Cause of menorrhagia."},
          "Perimenopause" : { rank : 4, feedback :  "Relevant in a woman of her age. Symptoms include fatigue, irregular periods, sleep disturbances."}, 
          "Major depressive disorder" : { rank : 5, feedback: "May be cause or consequence of fatigue."}
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
