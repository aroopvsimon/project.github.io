function addRow() {
    var table = document.getElementById('data-table');
    var newRow = table.insertRow(table.rows.length);

    // Add input fields with descriptions
    var descriptions = ['Description 1', 'Description 2', 'Description 3'];

    for (var i = 0; i < 3; i++) {
        var cell = newRow.insertCell(i);
        cell.innerHTML = '<input type="text" placeholder="' + descriptions[i] + '">';
    }

    // Add Calculate button
    var resultCell = newRow.insertCell(3);
    resultCell.innerHTML = '<button onclick="calculateResult(this)">Calculate</button>';
}

function calculateResult(button) {
    var row = button.parentNode.parentNode;
    var inputs = row.getElementsByTagName('input');

    var result = 0;
    for (var i = 0; i < inputs.length; i++) {
        var inputValue = parseFloat(inputs[i].value) || 0;
        result += inputValue;
    }

    // Display the result in the last cell
    row.cells[row.cells.length - 1].innerHTML = result;
}
