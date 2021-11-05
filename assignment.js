for (let index = 1; index <= 12; index++) {
  document.write(
    `
    <div class='col-1'>
        ` +
      iMultiplicationTable(index, 12) +
      `  
    </div>
    `
  );
}
