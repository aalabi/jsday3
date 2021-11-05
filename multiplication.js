function multiplicationTable(multiplier, end) {
  for (let index = 1; index <= end; index++) {
    row = `${index} X ${multiplier} = ${index * multiplier} <br/>`;
    document.write(row);
  }
}

function iMultiplicationTable(multiplier, end) {
  let row = ``;
  for (let index = 1; index <= end; index++) {
    row = row + `${index} X ${multiplier} = ${index * multiplier} <br/>`;
  }
  return row;
}

//document.write(iMultiplicationTable(2, 12));
/* for (let index = 2; index <= 12; index++) {
  multiplicationTable(index, 12);
  document.write("<br/>");
}
 */
