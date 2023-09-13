let yourName = prompt("What is your name?");
let thereName = prompt("What is there name?");

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore);

if (loveScore <= 30) {
  alert(
    "The love score for " +
      yourName +
      " and " +
      thereName +
      " is " +
      loveScore +
      "% - Damn!!! you should rethink this relationship"
  );
} else if (loveScore > 30 && loveScore <= 50) {
  alert(
    "The love score for " +
      yourName +
      " and " +
      thereName +
      " is " +
      loveScore +
      "% - put more effort to grow this relationship"
  );
} else if (loveScore > 50 && loveScore <= 70) {
  alert(
    "Wow!!! This is a serious love between " +
      yourName +
      " and " +
      thereName +
      " your love is " +
      loveScore +
      "%"
  );
} else {
  alert(
    "Your love score is  " +
      loveScore +
      "% " +
      " What a magnificent love between " +
      yourName +
      " and " +
      thereName +
      " , This love will last forever"
  );
}
//
