//Elements Dom
const hour = document.querySelector('input#hour');
const minute = document.querySelector('input#minute');
const button = document.querySelector('#button');
const msg = document.querySelector('#msg');

const NDate = new Date();
const Hour = NDate.getHours();
const Minutes = NDate.getMinutes();
const Milli = NDate.getMilliseconds();

function SetTime() {
  const nowDate = new Date();
  const nowHour = nowDate.getHours();
  const nowMinutes = nowDate.getMinutes();

  try {
    console.log((nowHour === parseInt(hour.value) && nowMinutes === parseInt(minute.value)) + "\n" + nowHour + "=" + parseInt(hour.value) + "-----" + nowMinutes + "" + parseInt(minute.value));
    if (nowHour === parseInt(hour.value) && nowMinutes === parseInt(minute.value)) {
      const menssagem = nowHour + ":" + nowMinutes + "!!!\n" + msg.value;
      alert(menssagem);
      console.log(menssagem);
      document.write (menssagem);
    }
  } catch (error) {
    var allElements = document.createElement("span");
		var allTexts = document.createTextNode(error);
		allElements.appendChild(allTexts);
		listElement.appendChild(allElements);

  }
}
var 

function init() {
  var para = document.createElement("p");
  var t = document.createTextNode("This is a paragraph.");
  para.appendChild(t);
  document.getElementById("myDIV").appendChild(para);

  //  refreshIntervalId = setInterval(SetTime, 100);
}

function stop() {
  clearInterval(refreshIntervalId);
}
