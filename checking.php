# with-God
영성생활 체크를 위한 웹 사이트 개발
<?php
$year = strval($_GET['year']);
$month = strval($_GET['month']);
$date = strval($_GET['date']);
$today = $year.$month.$date;
echo $year." 년 ".$month." 월 ".$date." 일";
 ?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>오늘의 영성생활 보고!</title>
    <style media="screen">
    body{
      font-family: "배민 을지로10년후체";
      text-align: center;
    }

    </style>
  </head>
  <body>
    <form action="today.jsp" method="post">오늘 기도한 시간<br>
      <input type="hidden" name = "date" value="<?php $today ?>">
      <input type="text" class="text" name="pray"/><br>
      오늘 읽은 말씀<br><input type="text" class="text" name="read"/><br>
      큐티<br>o<input type="radio" name="QT" value="ok">x<input type="radio" name="QT" value="no"><br>
      오늘 느낀 점<br><textarea rows="30" cols="30" class="text" name="feel"></textarea><br><br>
    <input type="submit" value="Send"></form>
  </body>
</html>
