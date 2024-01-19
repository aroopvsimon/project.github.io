<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
    <title>User Input Table</title>
</head>
<body>

    <form id="userForm">
        <label for="cores">Cores per Processor:</label>
        <input type="number" id="cores" required>
        <br>

        <label for="drives">Count of capacity drives:</label>
        <input type="number" id="drives" required>
        <br>

        <label for="size">Size of each capacity drive in TB:</label>
        <input type="number" id="size" required>
        <br>

        <button type="button" onclick="addRow()">Add to Table</button>
    </form>

    <table id="data-table">
        <thead>
            <tr>
                <th>Cores per Processor</th>
                <th>Count of capacity drives</th>
                <th>Size of each capacity drive in TB</th>
            </tr>
        </thead>
        <tbody>
            <!-- Table entries will be added dynamically -->
        </tbody>
    </table>

    <script>
        function addRow() {
            var coresInput = document.getElementById('cores');
            var drivesInput = document.getElementById('drives');
            var sizeInput = document.getElementById('size');

            var cores = parseInt(coresInput.value) < 16 ? 16 : parseInt(coresInput.value);
            var drives = parseInt(drivesInput.value);
            var size = parseInt(sizeInput.value);

            var table = document.getElementById('data-table');
            var newRow = table.insertRow(table.rows.length);

            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);

            cell1.textContent = cores;
            cell2.textContent = drives;
            cell3.textContent = size;

            // Clear input fields after adding entry
            coresInput.value = '';
            drivesInput.value = '';
            sizeInput.value = '';
        }
    </script>
</body>
</html>
