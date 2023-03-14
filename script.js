(function() {
    // Define personal information
    const myself = [
      { about: "Name", value: "Mohd Wasim" },
      { about: "Age", value: "22" },
      { about: "DOB", value: "20-Jun-2000" },
      { about: "Email", value: "mohdwasim368@gmail.com" },
      { about: "Company", value: "Gemini Solutions Pvt Ltd." }
    ];
    

    // Create table element
    const table = document.createElement("table");
    table.style.borderCollapse = "collapse";
  
    // Create table headers
    const headRow = document.createElement("tr");
    for (let i = 0; i < 5 ; i++) {
      const headerCell = document.createElement("th");
      headerCell.style.border = "2px solid black";
      headerCell.style.padding = "12px";
      headerCell.style.fontWeight = '600';
      headerCell.style.fontSize = '30px';
      headerCell.style.textAlign = 'center';
      const textCell = document.createTextNode(myself[i].about);
      headerCell.appendChild(textCell);
      headRow.appendChild(headerCell);
    }
    table.appendChild(headRow);
  
    // Create table rows
    
    for (let i = 0; i < 5; i++) {
      const row = document.createElement("tr");
      for (let j = 0; j < 5; j++) {
        const cells = document.createElement("td");
        cells.style.border = "2px solid black";
        cells.style.padding = "10px";
        cells.style.fontSize = '20px';
        cells.style.textAlign = 'center';
        const textCell = document.createTextNode( myself[j].value);
        cells.appendChild(textCell);
        row.appendChild(cells);
      }
      table.appendChild(row);
    }
  
    // Add table to the document
    document.body.appendChild(table);
})();