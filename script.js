<script>
    function addRow() {
        var cpusInput = document.getElementById('cpus');
        var coresInput = document.getElementById('cores');
        var drivesInput = document.getElementById('drives');
        var sizeInput = document.getElementById('size');

        var cpus = parseInt(cpusInput.value);
        var cores = parseInt(coresInput.value) < 16 ? 16 : parseInt(coresInput.value);
        var drives = parseInt(drivesInput.value);
        var size = parseInt(sizeInput.value);

        var table = document.getElementById('data-table');
        var summaryTable = document.getElementById('summary-table');
        var newRow = table.insertRow(table.rows.length);
        var summaryRow = summaryTable.rows[1];

        var nodeCell = newRow.insertCell(0);
        var coresCell = newRow.insertCell(1);
        var cpusCell = newRow.insertCell(2);
        var totalCoresCell = newRow.insertCell(3);
        var totalStorageCell = newRow.insertCell(4);
        var storageInTiBCell = newRow.insertCell(5);

        // Calculate total cores and total storage
        var totalCores = cpus * cores;
        var totalStorage = drives * size;

        // Calculate storage in TiB
        var storageInTiB = totalStorage / 1.1;

        // Set cell values
        nodeCell.textContent = 'Node' + (table.rows.length - 1);
        coresCell.textContent = cores;
        cpusCell.textContent = cpus;
        totalCoresCell.textContent = totalCores;
        totalStorageCell.textContent = totalStorage;
        storageInTiBCell.textContent = storageInTiB.toFixed(2);

        // Update summary table
        summaryRow.cells[0].textContent = calculateTotal('Total Raw Storage Capacity Per Node in TiB');
        summaryRow.cells[1].textContent = calculateTotal('Total number of cores per Node');
        summaryRow.cells[2].textContent = calculateTotal('Total Raw Storage Capacity Per Node in TiB') / 1.1;
        
        // Clear input fields after adding entry
        cpusInput.value = '';
        coresInput.value = '';
        drivesInput.value = '';
        sizeInput.value = '';
    }

    function calculateTotal(columnName) {
        var table = document.getElementById('data-table');
        var total = 0;
        for (var i = 1; i < table.rows.length; i++) {
            total += parseFloat(table.rows[i].cells[table.rows[0].cells.length - 1].textContent);
        }
        return total.toFixed(2);
    }
</script>
