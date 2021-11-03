function multiplicationTable(multiplier, end) {
  for (let index = 1; index <= end; index++) {
    row = `${index} X ${multiplier} = ${index * multiplier} <br/>`;
    document.write(row);
  }
}

//multiplicationTable(2, 12);
for (let index = 2; index <= 12; index++) {
  multiplicationTable(index, 12);
  document.write("<br/>");
}
