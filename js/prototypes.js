function Q(query,response="None",importance = "low",feedback = "Not necessary") {
  this.query = query;
  this.response = response;
  this.importance = importance;
  this.feedback = feedback;
}

var allQ = [birthplace,occupation,nationality,education,religion,maritalStatus,children,pets,drugUse,smoking,alcoholUse,exercise,
  travel,caffeineUse,cancer,emphysema,glaucoma,anemia,bloodTransfusions,mood,diet,sleep,jointPain,medications];

var allexams = [];
//Physical questions
var generalInspection = new Q("General Inspection", "Healthy person", "med");
var vitals = new Q("Vitals", "HR: 72<br> BP: 120/80<br> RR: 12<br> Temp: 36.5C","med");
var cardiovascular = new Q("Cardiovascular", "Normal heart sounds, peripheral pulses");
var respiratory = new Q("Respiratory", "Normal air entry bilaterally with vesicular breath sounds");
var pelvic = new Q("Pelvic exam","Pelvic exam normal");
var dre = new Q("DRE","Normal rectal exam");

//History questions
var birthplace = new Q("Birthplace","Kingston, Ontario");
var occupation = new Q("Occupation","Empire Life Secretary");
var nationality = new Q("Nationality","Canadian");
var education = new Q("Education","College certificate");
var religion = new Q("Religion","Christian, but hasn't been to church in years");
var maritalStatus = new Q("Marital Status","Single");
var children = new Q("Children","No children");
var pets = new Q("Pets","No pets");
var drugUse = new Q("Recreational Drug Use","Never used","med");
var smoking = new Q("Smoking","Never smoked","med");
var alcoholUse = new Q("Alcohol Use","Rarely drinks","med");
var exercise = new Q("Exercise","1-3 times per week");
var travel = new Q("Travel","No recent travel");
var caffeineUse = new Q("Caffeine Use","~1 cup per day");
var cancer = new Q("History of Cancer");
var emphysema = new Q("History of Emphysema");
var glaucoma = new Q("History of Glaucoma");
var anemia = new Q("History of Anemia");
var bloodTransfusions = new Q("History of Blood Transfusions");
var mood = new Q("Mood","Some ups, some downs");
var diet = new Q("Diet","Typical North-American diet");
var sleep = new Q("Sleep","8 hours a night");
var jointPain = new Q("Joint Pain");
var medications = new Q("Medications");
