function createTable() {
    //Write your code here
    let rn = prompt("Input number of rows");
  let cn = prompt("Input number of columns");

  // Convert to numbers
  rn = parseInt(rn);
  cn = parseInt(cn);

  // Validation
  if (isNaN(rn) || isNaN(cn)) {
    alert("Please enter valid numeric values.");
    return;
  }
  if (rn <= 0 || cn <= 0) {
    alert("Number of rows and columns must be greater than 0.");
    return;
  }

  // Get table element
  const table = document.getElementById("myTable");

  // Clear old table if any
  table.innerHTML = "";

  // Create new rows and columns
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
