function createTable() {
    //Write your code here
    let rn = prompt("Input number of rows");
  let cn = prompt("Input number of columns");


  rn = parseInt(rn);
  cn = parseInt(cn);


  if (isNaN(rn) || isNaN(cn)) {
    alert("Please enter valid numeric values.");
    return;
  }
  if (rn <= 0 || cn <= 0) {
    alert("Number of rows and columns must be greater than 0.");
    return;
  }

  
  const table = document.getElementById("myTable");

  
  table.innerHTML = "";

  
  for (let i = 0; i < rn; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < cn; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  
}
