function addRow() {
    var table = document.getElementById('data-table');
    var newRow = table.insertRow(table.rows.length);
    
    for (var i = 0; i < 3; i++) {
        var cell = newRow.insertCell(i);
        var input = document.createElement('input');
        input.type = 'text';
        cell.appendChild(input);
    }

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

    row.cells[row.cells.length - 1].innerHTML = result;
}
