let date = new Date();

const renderCalender = () => {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();

  document.querySelector('.year-month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();

  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

  const dates = prevDates.concat(thisDates, nextDates);
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);

  dates.forEach((date, i) => {
    const condition = i >= firstDateIndex && i < lastDateIndex + 1
                      ? 'this'
                      : 'other';
    dates[i] = `<div class="date" onclick = "checking(${viewYear},${viewMonth + 1},${date});"><span class=${condition}>${date}</span></div>`;
  });

  document.querySelector('.dates').innerHTML = dates.join('');

  const today = new Date();
  if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
    for (let date of document.querySelectorAll('.this')) {
      if (+date.innerText === today.getDate()) {
        date.classList.add('today');
        break;
      }
    }
  }
};

renderCalender();

const prevMonth = () => {
  date.setMonth(date.getMonth() - 1);
  renderCalender();
};

const nextMonth = () => {
  date.setMonth(date.getMonth() + 1);
  renderCalender();
};

const goToday = () => {
  date = new Date();
  renderCalender();
};

// var already = false
// function small_window() {
//   var ad = document.querySelector("aside");
//   if (already===false){
//     var in_t = '<form action="today.jsp" method="post">오늘 기도한 시간<br><input type="text" class="text" name="pray"></input><br>오늘 읽은 말씀<br>\
//     <input type="text" class="text" name="read"></input><br>\
//     큐티<br>o<input type="radio" name="QT" value="ok">\
//     x<input type="radio" name="QT" value="no"><br>\
//     오늘 느낀 점<br><textarea rows="30" cols="30" class="text" name="feel"></textarea><br>\
//     <input type="submit" value="Send"></form>'
//     ad.insertAdjacentHTML('beforeend', in_t);
//     already = true
//   }
//   else{
//     ad.empty()
//     already = false
//   }
// }
function checking(a, b, c) {
  location = "/checking.php?year="+a+"&month="+b+"&date="+c+""
}



document.querySelector('.dates').innerHTML = dates.join('');
