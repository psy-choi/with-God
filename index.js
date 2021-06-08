// with-God
//영성생활 체크를 위한 웹 사이트 개발
var date = new Date();
const viewYear = date.getFullYear();
const viewMonth = date.getMonth();
document.querySelector('#year_month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

const prevLast = new Date(viewYear, viewMonth, 0);
const thisLast = new Date(viewYear, viewMonth + 1, 0);

const PLDate = prevLast.getDate(); //날
const PLDay = prevLast.getDay(); //요일

const TLDate = thisLast.getDate();
const TLDay = thisLast.getDay();

const prevDates = [];
const thisDates = [...Array(TLDate + 1).keys()].slice(1); //slice를 통해 0을 없애줌. + keys는 해당 값 도출 즉 0부터 30까지 나
const nextDates = [];

if (PLDay !== 6) { //토요일까지 있으면 바로 주일부터 시작이기 때문에 전 달이 필요가 없음
  for (let i = 0; i < PLDay + 1; i++) {
    prevDates.unshift(PLDate - i);  //하나씩 뒤로 가는 거기 때문에
  }
}
for (let i = 1; i < 7 - TLDay; i++) {
  nextDates.push(i);
}
const dates_arr = prevDates.concat(thisDates, nextDates) //배열을 합치는 함수


for (var date of dates_arr) { //dddd
  var d = document.querySelector('.dates');
  d.insertAdjacentHTML('beforeend', `<div class="date" onclick="small_window();">`+date+`</div>`);
  // dates[i] = `<div class="date" onclick="small_window()">${date}</div>`
}

var already = false
function small_window() {
  var ad = document.querySelector("aside");
  if (already===false){
    var in_t = '<form action="today.jsp" method="post">오늘 기도한 시간<br><input type="text" class="text" name="pray"></input><br>오늘 읽은 말씀<br>\
    <input type="text" class="text" name="read"></input><br>\
    큐티<br>o<input type="radio" name="QT" value="ok">\
    x<input type="radio" name="QT" value="no"><br>\
    오늘 느낀 점<br><textarea rows="30" cols="30" class="text" name="feel"></textarea><br>\
    <input type="submit" value="Send"></form>'
    ad.insertAdjacentHTML('beforeend', in_t);
    already = true
  }
  else{
    ad.empty()
    already = false
  }
}
document.querySelector('.dates').innerHTML = dates.join('');
