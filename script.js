function createTable() {
    // Prompt user for rows and columns
    let rn = prompt("Input number of rows");
    let cn = prompt("Input number of columns");

    // Convert input to numbers
    rn = Number(rn);
    cn = Number(cn);

    // Validate input: check if numbers
    if (isNaN(rn) || isNaN(cn)) {
        return; // Ignore non-numeric input
    }

    // Validate input: check for positive values
    if (rn <= 0 || cn <= 0) {
        alert("Please enter positive numbers greater than 0");
        return;
    }

    // Get table reference
    let table = document.getElementById("myTable");

    // Clear existing table content (important for repeated clicks)
    table.innerHTML = "";

    // Create table rows and columns
    for (let i = 0; i < rn; i++) {
        let row = document.createElement("tr");

        for (let j = 0; j < cn; j++) {
            let cell = document.createElement("td");
            cell.textContent = `Row-${i} Column-${j}`;
            row.appendChild(cell);
        }

        table.appendChild(row);
    }
}