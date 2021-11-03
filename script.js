/* document.write("1 X 7 = " + 1 * 7 + "<br/>");
document.write("2 X 7 = " + 2 * 7 + "<br/>");
document.write("3 X 7 = " + 3 * 7 + "<br/>");
document.write("4 X 7 = " + 4 * 7 + "<br/>"); */

//LOOP
//start stop increment
//while
let interval = 1;
while (interval <= 12) {
  document.write(interval + " X 7 = " + interval * 7 + "<br/>");
  interval = interval + 1;
}
document.write("<br/><br/>");

//do while
interval = 1;
do {
  document.write(interval + " X 7 = " + interval * 7 + "<br/>");
  interval = interval + 1;
} while (interval <= 12);

document.write("<br/><br/>");
//for
for (interval = 1; interval <= 12; interval++) {
  document.write(interval + " X 7 = " + interval * 7 + "<br/>");
}
