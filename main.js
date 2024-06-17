var msg = document.getElementById('result');
var img = document.getElementById('gif');
var audioF = new Audio('audio/friend.mp3');
var audioL = new Audio('audio/love.mp3');
var audioA = new Audio('audio/affection.mp3');
var audioM = new Audio('audio/marriage.mp3');
var audioE = new Audio('audio/enemy.mp3');
var audioS = new Audio('audio/sister.mp3');
var pop = new Audio('audio/pop.mp3');
var final = new Audio('audio/final.mp3');

let icons = document.querySelectorAll('.icons');
let history = document.getElementById("history-btn");
let historyContainer = document.getElementById('history-container')
let historyContent = document.getElementById('history-content')
let closeBtn = document.getElementById('close-btn')
let clear = document.getElementById('clr-btn')
const enterBtn = document.getElementById('enter-btn');


let start = function(){
//setting defaults....
icons[0].style.backgroundColor = "#E36588";
icons[1].style.backgroundColor = "#E36588";
icons[2].style.backgroundColor = "#E36588";
icons[3].style.backgroundColor = "#E36588";
icons[4].style.backgroundColor = "#E36588";
icons[5].style.backgroundColor = "#E36588";
img.src = "assets/default1.gif";
msg.innerHTML = "FLAMES"

let user = document.getElementById('user').value;
let crush = document.getElementById('crush').value;
if(user==0||crush==0){
  alert("please enter names!");
  return;
}
if(/^[a-z A-Z]*$/.test(user) == false){
alert('enter a valid user name')
return
}
else if(/^[a-z A-Z]*$/.test(crush) == false){
alert('enter a valid crush name')
return
}
UserName = user.toLowerCase().split('');
CrushName = crush.toLowerCase().split('');

console.log(UserName);
console.log(CrushName);
let number = UserName.length + CrushName.length;
console.log(number);
//checking spaces in user inputs and removing them
for (const key1 in UserName) {
  if (UserName[key1] == ' ')
  {  number--;
     delete UserName[key1];
}
}
for (const key2 in CrushName) {
  if (CrushName[key2] == ' ')
 {   number--;
     delete CrushName[key2];
 }
}
console.log(UserName);
console.log(CrushName);
console.log(number);
//checking common letters and and removing them
if (UserName.length >= CrushName.length) {
  for (const key in UserName) {
    for (let j = 0; j <= CrushName.length; j++) {
      if (UserName[key] == CrushName[j]) {
        number = number - 2;
        delete CrushName[j];
        break;
      }

    }
  }
}
else if (UserName.length < CrushName.length) {
  for (const key in CrushName) {
    for (let j = 0; j <= UserName.length; j++) {
      if (CrushName[key] == UserName[j]) {
        number = number - 2;
        delete UserName[j];
        break;
      }

    }
  }
}
//console.log(number)//working fine
console.log(number);
let i = 0;
let lim = 1;
let flames = ['F', 'L', 'A', 'M', 'E', 'S'];
let removedArray = [];

while (number >= lim) {
  if (number == lim) {
   removedArray.push(flames[i]);
   flames.splice(i, 1);
    
    lim = 1;
}
    if (flames[i] == flames[flames.length])
    {
      lim--;
    }

  console.log(flames);
  lim++;
  i++;

  if (flames.length <= i) {
    i = 0;

  }
  if (flames.length == 1)
    break;
}  

let op = flames[0];
console.log(op);

console.log(removedArray);

// let sendMail = (params) => {
//   let details = {
//     user_name: document.getElementById('user').value,
//     crush_name: document.getElementById('crush').value,
//     message: op,
//   };
//   emailjs.send('push_mail','template_3uejhkg',details).then(function(res){
//     console.log("email successfully send",res.status);
    
//    })
//  }  
// sendMail()

let k = 0;
let value = 0;
const myInterval = setInterval(() =>{
  value = removedArray[k]
  k++;
  switch (value) {
    case 'F':
      icons[0].style.backgroundColor = "#DA9F93";
      pop.play();
      break;
    case 'L':
      icons[1].style.backgroundColor = "#DA9F93";
      pop.play();
      break;

    case 'A':
      icons[2].style.backgroundColor = "#DA9F93";
      pop.play();
      break;

    case 'M':
      icons[3].style.backgroundColor = "#DA9F93";
      pop.play();
      break;

    case 'E':
      icons[4].style.backgroundColor = "#DA9F93";
      pop.play();
      break;

    case 'S':
      icons[5].style.backgroundColor = "#DA9F93";
      pop.play();
      break;

    default:
      console.log('default');
  }
if(k==5){
clearInterval(myInterval);
setTimeout(() => final.play(),500)
switch(op){
  case 'F':
    op = "F-FRIEND";
    img.src="assets/friend1.gif";
    setTimeout(() => audioF.play(),500);
    break;
  case 'L':
    op = "L-LOVER";
    img.src="assets/love1.gif";
    setTimeout(() => audioL.play(),500);
 
    break;
  case 'A':
    op = "A-AFFECTION";
    img.src="assets/affection1.gif";
    setTimeout(() => audioA.play(),500);
    break;     
  case 'M':
    op = "M-MARRIAGE";
    img.src="assets/marriage1.gif";
    setTimeout(() => audioM.play(),500);
    break;     
  case 'E':
    op = "E-ENEMY";
    img.src="assets/enemy2.gif";
    setTimeout(() => audioE.play(),500);
    break;     
  case 'S':
    op = "S-SISTER";
    img.src="assets/sister1.gif";
    setTimeout(() => audioS.play(),500);
    break;     
   default:
    img.src = "assets/default1.gif";
 }
msg.innerHTML = op;
//saving user inputs in local storage
localStorage.setItem(user+crush,"Name: "+user+"\nCrush: "+crush+ "\n Relationship: "+op+"\n");

}
},500)

};

//move to focus to next element...
document.getElementById("user").addEventListener('keydown', (e) => {
  if (e.keyCode == 13)
    document.getElementById("crush").focus()
});
//closes on screen keyboard and start calculating
document.getElementById("crush").addEventListener('keydown', (e) => {
  if (e.keyCode == 13){
   document.getElementById("crush").blur(); 
   start();
  }
});

function openHistory(){
  historyContainer.style.display = "block";
  getLocalStorage(); 
}
function closeHistory(){
  historyContainer.style.display = "none";
  historyContent.innerText = "";
}
function clearHistory(){
  for(let i=0;i<localStorage.length;i++){
    if(localStorage.key(i)!="firebase:host:flames-app-8e0cf-default-rtdb.firebaseio.com")
    localStorage.removeItem(localStorage.key(i))
   }
   historyContent.innerText = "";
}
function getLocalStorage(){
  for(let i=0;i<localStorage.length;i++){
   if(localStorage.key(i)!="firebase:host:flames-app-8e0cf-default-rtdb.firebaseio.com")
   historyContent.innerText = historyContent.innerText+ "\n"+ localStorage.getItem(localStorage.key(i));
   console.log(localStorage.key(i))
  }
}
history.addEventListener('click',openHistory);
closeBtn.addEventListener('click',closeHistory);
clear.addEventListener('click',clearHistory)
enterBtn.addEventListener('click',start);