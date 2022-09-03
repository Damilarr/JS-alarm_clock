let userAlarm = '';
let alarmArray = [];
let note = '';
let currentHour = '';
let currentMinute = '';
let timer = '';
let mp3 = '';
// let saveAlarmTime;
// let getAlarmTime;
// let saveAlarmDetail;
// let getAlarmDetail;
// let saveAlarmNote;
// let getAlarmNote;
function startFunctions() {
  if (inputTime.value && alarmNote.value) {
    timer = setInterval(push, 1000);
    alarmList.innerHTML = `<p class="showalarm px-2 py-1">Alarm set successfully  for : ${inputTime.value}</p>`;
    // saveAlarmDetail = localStorage.setItem('alarmDetail', alarmList.innerHTML);
    // saveAlarmTime = localStorage.setItem('alarmTime', inputTime.value);
    // saveAlarmNote = localStorage.setItem('alarmNote', alarmNote.value);
  } else {
    alert('Please select a time and description for your alarm :)');
  }
}
// getAlarmDetail = localStorage.getItem('alarmDetail');
// getAlarmTime = localStorage.getItem('alarmTime');
// getAlarmNote = localStorage.getItem('alarmNote');
// localStorage.clear('alarmTime')
// function checkAlarms() {
//   if (getAlarmDetail && getAlarmTime) {
//     alarmList.innerHTML = getAlarmDetail;
//     inputTime.value = getAlarmTime;
//     alarmNote.value = getAlarmNote;
//     startFunctions();
//   }
// }
// checkAlarms();
function pauseAlarm() {
  mp3.pause();
  mp3.currentTime = 0;
  currentHour = '';
  currentMinute = '';
  if (currentHour && currentMinute) {
    startFunctions();
  }
  alarmList.innerHTML = `<p class="showalarm px-2">Alarm stopped<span> </span><i class="fa-solid fa-check-double text-success"></i><span> </span></p>`;
}

function playy() {
  mp3 = new Audio('./audio/fur_elise.mp3');
  mp3.play();
  mp3.loop = true;
}

setInterval(function () {
  let date = new Date();
  date.getSeconds().toString().length == 1
    ? (secondS.innerHTML = '0' + date.getSeconds())
    : (secondS.innerHTML = date.getSeconds());
  date.getMinutes().toString().length == 1
    ? (minuteS.innerHTML = `0${date.getMinutes()}`)
    : (minuteS.innerHTML = date.getMinutes());
  date.getHours().toString().length == 1
    ? (hourS.innerHTML = '0' + date.getHours())
    : (hourS.innerHTML = date.getHours());
}, 1000);

function push() {
  let date2 = new Date();
  currentHour = date2.getHours();
  currentMinute = date2.getMinutes();
  console.log(currentHour, currentMinute);
  userAlarm = inputTime.value;
  alarmArray = userAlarm.split(':');
  if (
    Number(alarmArray[0]) == currentHour &&
    Number(alarmArray[1]) == currentMinute
  ) {
    console.log('TIME UP');
    playy();
    clearInterval(timer);
    alarmList.innerHTML = '';
    dispplay();
  }
}

function dispplay() {
  note = alarmNote.value;
  alarmList.innerHTML += `<h2 class="listAlarm text-white px-3 pt-3 pb-1">Alarm: ${userAlarm}<br><p>Description: ${note}</p><button class="btn btn-danger" id="alarmStop" onclick="pauseAlarm()"><i class="fa-solid fa-times"></i> Dismiss</button></h2>`;
  alarmNote.value = '';
  inputTime.value = '';
}
