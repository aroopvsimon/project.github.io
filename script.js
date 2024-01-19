function addRow() {
    var cpusInput = document.getElementById('cpus');
    var coresInput = document.getElementById('cores');
    var drivesInput = document.getElementById('drives');
    var sizeInput = document.getElementById('size');
    var quoteYearsSelect = document.getElementById('quoteYears');

    var cpus = parseInt(cpusInput.value);
    var cores = parseInt(coresInput.value) < 16 ? 16 : parseInt(coresInput.value);
    var drives = parseInt(drivesInput.value);
    var size = parseInt(sizeInput.value);
    var quoteYears = parseInt(quoteYearsSelect.value);

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
    updateSummaryTable();

    // Clear input fields after adding entry
    cpusInput.value = '';
    coresInput.value = '';
    drivesInput.value = '';
    sizeInput.value = '';
    quoteYearsSelect.value = '1'; // Reset dropdown to default value
}

function updateSummaryTable() {
    var table = document.getElementById('data-table');
    var summaryTable = document.getElementById('summary-table');
    var summaryRow = summaryTable.rows[1];

    var totalRawStorage = 0;
    var totalCoresForLicenses = 0;

    for (var i = 1; i < table.rows.length; i++) {
        var row = table.rows[i];
        totalRawStorage += parseFloat(row.cells[5].textContent);
        totalCoresForLicenses += parseFloat(row.cells[3].textContent);
    }

    // Update summary table cells
    summaryRow.cells[0].textContent = totalRawStorage.toFixed(2);
    summaryRow.cells[1].textContent = totalCoresForLicenses.toFixed(2);
    summaryRow.cells[2].textContent = totalCoresForLicenses.toFixed(2); // Updated to match the sum of 'Total number of cores per Node'
}
