<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }

        form {
            text-align: center;
        }

        table {
            margin-top: 20px;
            border-collapse: collapse;
            width: 100%;
        }

        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
    </style>
    <title>Input and Display</title>
</head>
<body>

    <form onsubmit="addEntry(); return false;">
        <label for="input1">Enter Number Of Servers:</label>
        <input type="text" id="input1" required>
        <br>

        <label for="input2">Enter Number Of CPU per Server:</label>
        <input type="text" id="input2" required>
        <br>

        <label for="input3">Enter Number Of Cores per CPU:</label>
        <input type="text" id="input3" required>
        <br>

        <button type="submit">Add Entry</button>
    </form>

    <table id="data-table">
        <thead>
            <tr>
                <th>Enter Number Of Servers:</th>
                <th>Enter Number Of CPU per Server:</th>
                <th>Enter Number Of Cores per CPU:</th>
            </tr>
        </thead>
        <tbody>
            <!-- Table entries will be added dynamically -->
        </tbody>
    </table>

    <script>
        function addEntry() {
            var input1 = document.getElementById('input1').value;
            var input2 = document.getElementById('input2').value;
            var input3 = document.getElementById('input3').value;

            var table = document.getElementById('data-table');
            var newRow = table.insertRow(table.rows.length);

            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);

            cell1.textContent = input1;
            cell2.textContent = input2;
            cell3.textContent = input3;

            // Clear input fields after adding entry
            document.getElementById('input1').value = '';
            document.getElementById('input2').value = '';
            document.getElementById('input3').value = '';
        }
    </script>
</body>
</html>
