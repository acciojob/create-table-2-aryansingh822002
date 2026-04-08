function createTable() {
    //Write your code here
  function createTable() {
  // 1. Get row and column counts from the user
  // Note: The prompt text must match the test expectation exactly
  const rowInput = prompt("Input number of rows");
  const colInput = prompt("Input number of columns");

  // 2. Convert to numbers
  const rows = parseInt(rowInput);
  const cols = parseInt(colInput);

  // 3. Validation
  if (isNaN(rows) || isNaN(cols)) {
    return; // Ignore non-numeric input
  }

  if (rows <= 0 || cols <= 0) {
    alert("Please enter a positive number.");
    return;
  }

  // 4. Target the table
  const table = document.getElementById("myTable");
  
  // Clear existing content to allow re-generation
  table.innerHTML = "";

  // 5. Generate Table
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement("tr");
    for (let j = 0; j < cols; j++) {
      const td = document.createElement("td");
      td.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}
}
