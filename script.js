function addRow() {
    var table = document.getElementById('data-table');
    var newRow = table.insertRow(table.rows.length);
    var columnsCount = table.rows[0].cells.length;

    for (var i = 0; i < columnsCount; i++) {
        var cell = newRow.insertCell(i);
        cell.innerHTML = '<input type="text">';
    }
}
