function createTable() {
    //Write your code here
  function createTable() {
    // 1. Get user input via prompts
    let rn = prompt("Input number of rows");
    let cn = prompt("Input number of columns");

    // 2. Convert inputs to numbers
    rn = parseInt(rn);
    cn = parseInt(cn);

    // 3. Validation: Handle non-numeric, zero, or negative values
    if (isNaN(rn) || isNaN(cn)) {
        // Ignore input if non-numeric
        return; 
    }
    if (rn <= 0 || cn <= 0) {
        alert("Please enter positive numbers greater than 0.");
        return;
    }

    // 4. Reference the table element and clear any existing content
    const table = document.getElementById("myTable");
    table.innerHTML = "";

    // 5. Build the table using nested loops
    for (let i = 0; i < rn; i++) {
        // Create a new row
        let row = table.insertRow(i);
        
        for (let j = 0; j < cn; j++) {
            // Create a new cell in the current row
            let cell = row.insertCell(j);
            
            // Set the cell text using 0-based indices
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}
}
