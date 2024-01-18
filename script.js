function addRow() {
    var nameInput = document.getElementById('name');
    var ageInput = document.getElementById('age');

    var name = nameInput.value;
    var age = ageInput.value;

    if (name && age) {
        var table = document.getElementById('data-table');
        var newRow = table.insertRow(table.rows.length);

        var cell1 = newRow.insertCell(0);
        var cell2 = newRow.insertCell(1);

        cell1.textContent = name;
        cell2.textContent = age;

        // Clear input fields after adding entry
        nameInput.value = '';
        ageInput.value = '';
    } else {
        alert('Please enter both name and age.');
    }
}
