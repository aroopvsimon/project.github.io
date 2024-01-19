<script>
    function addRow() {
        var coresInput = document.getElementById('cores');
        var cpusInput = document.getElementById('cpus');
        var drivesInput = document.getElementById('drives');
        var sizeInput = document.getElementById('size');

        var cores = parseInt(coresInput.value) < 16 ? 16 : parseInt(coresInput.value);
        var cpus = parseInt(cpusInput.value);
        var drives = parseInt(drivesInput.value);
        var size = parseInt(sizeInput.value);

        var table = document.getElementById('data-table');
        var newRow = table.insertRow(table.rows.length);

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

        // Clear input fields after adding entry
        coresInput.value = '';
        cpusInput.value = '';
        drivesInput.value = '';
        sizeInput.value = '';
    }
</script>
