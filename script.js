function addRow() {
    var nameInput = document.getElementById('cpu');
    var ageInput = document.getElementById('cores');

    var cpu = nameInput.value;
    var cores = ageInput.value;

    if (cpu && cores) {
        var table = document.getElementById('data-table');
        var newRow = table.insertRow(table.rows.length);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);

        cell1.textContent = cpu;
        cell2.textContent = cores;

        // Clear input fields after adding entry
        nameInput.value = '';
        ageInput.value = '';
    } else {
        alert('Please enter both cpu and cores.');
    }
}
