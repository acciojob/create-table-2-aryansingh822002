function createTable() {
    //Write your code here
  function createTable() {
  // 1. Capture inputs using prompt()
  const rnInput = prompt("Input number of rows");
  const cnInput = prompt("Input number of columns");

  // 2. Convert inputs to numbers
  const rn = parseInt(rnInput);
  const cn = parseInt(cnInput);

  // 3. Edge Case Handling: Check if inputs are non-numeric, 0, or negative
  if (isNaN(rn) || isNaN(cn)) {
    // Ignore input if non-numeric
    return;
  }

  if (rn <= 0 || cn <= 0) {
    alert("Please enter a positive number for both rows and columns.");
    return;
  }

  // 4. Reference the table element
  const table = document.getElementById("myTable");

  // 5. Clear any existing content in the table before creating a new one
  table.innerHTML = "";

  // 6. Nested loops to create rows and columns
  for (let i = 0; i < rn; i++) {
    // Create a table row (tr)
    const row = table.insertRow(i);

    for (let j = 0; j < cn; j++) {
      // Create a table cell (td)
      const cell = row.insertCell(j);
      
      // Set the cell text content following the 0-based index requirement
      cell.innerText = `Row-${i} Column-${j}`;
    }
  }
}
}
