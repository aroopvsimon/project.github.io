// Array to store user inputs
var userData = [];

function addRow() {
    var cpusInput = document.getElementById('cpus');
    var coresInput = document.getElementById('cores');
    var drivesInput = document.getElementById('drives');
    var sizeInput = document.getElementById('size');
    var quoteYearsSelect = document.getElementById('quoteYears');

    var cpus = parseInt(cpusInput.value);
    var cores = parseInt(coresInput.value) < 16 ? 16 : parseInt(coresInput.value);
    var drives = parseInt(drivesInput.value);
    var size = parseFloat(sizeInput.value);
    var quoteYears = parseInt(quoteYearsSelect.value);

    // Create a new row data object
    var rowData = {
        node: 'Node' + (userData.length + 1),
        cores: cores,
        cpus: cpus,
        totalCores: cpus * cores,
        totalStorage: drives * size,
        storageInTiB: (drives * size) / 1.1
    };

    // Add the row data to the array
    userData.push(rowData);

    // Add the row to the first table
    addRowToTable(rowData);

    // Add a row to the second table (summary table)
    updateSummaryTable();

    // Add a row to the third table (user variables and inputs)
    addUserInputsToTable(cpus, cores, drives, size, quoteYears);

    // Clear input fields after adding entry
    cpusInput.value = '';
    coresInput.value = '';
    drivesInput.value = '';
    sizeInput.value = '';
    quoteYearsSelect.value = '1'; // Reset dropdown to default value
}

function addRowToTable(rowData) {
    var table = document.getElementById('data-table');
    var newRow = table.insertRow(table.rows.length);

    var nodeCell = newRow.insertCell(0);
    var coresCell = newRow.insertCell(1);
    var cpusCell = newRow.insertCell(2);
    var totalCoresCell = newRow.insertCell(3);
    var totalStorageCell = newRow.insertCell(4);
    var storageInTiBCell = newRow.insertCell(5);

    // Set cell values
    nodeCell.textContent = rowData.node;
    coresCell.textContent = rowData.cores;
    cpusCell.textContent = rowData.cpus;
    totalCoresCell.textContent = rowData.totalCores;
    totalStorageCell.textContent = rowData.totalStorage.toFixed(2);
    storageInTiBCell.textContent = rowData.storageInTiB.toFixed(2);
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
    
    // Calculate and set vSAN Add On Capacity Required and Difference
    var vsanAddOnCapacityRequiredCell = summaryRow.cells[2];
    var difference = totalRawStorage - totalCoresForLicenses;

    vsanAddOnCapacityRequiredCell.textContent = difference > 0 ? 'Yes (' + difference.toFixed(2) + ')' : 'No';

    // Update VCF Storage Entitled cell
    summaryRow.cells[3].textContent = totalCoresForLicenses.toFixed(2);
    
    // Call calculateVsanAddOnCapacity function
    calculateVsanAddOnCapacity(totalRawStorage, parseFloat(summaryRow.cells[3].textContent));
}

function addUserInputsToTable(cpus, cores, drives, size, quoteYears) {
    var table = document.getElementById('user-inputs-table');
    var newRow = table.insertRow(table.rows.length);
    var inputsCell = newRow.insertCell(0);
    var valueCell = newRow.insertCell(1);

    // Add user variables and inputs to the third table
    //newRow = table.insertRow(table.rows.length);
    inputsCell = newRow.insertCell(0);
    valueCell = newRow.insertCell(1);
    inputsCell.textContent = 'Total Number of CPU per node';
    valueCell.textContent = cpus;

    newRow = table.insertRow(table.rows.length);
    inputsCell = newRow.insertCell(0);
    valueCell = newRow.insertCell(1);
    inputsCell.textContent = 'Number of Cores per CPU (per Node)';
    valueCell.textContent = cores;

    newRow = table.insertRow(table.rows.length);
    inputsCell = newRow.insertCell(0);
    valueCell = newRow.insertCell(1);
    inputsCell.textContent = 'Count of capacity drives per Node';
    valueCell.textContent = drives;

    newRow = table.insertRow(table.rows.length);
    inputsCell = newRow.insertCell(0);
    valueCell = newRow.insertCell(1);
    inputsCell.textContent = 'Size of each capacity drive in TB per Node';
    valueCell.textContent = size;

    newRow = table.insertRow(table.rows.length);
    inputsCell = newRow.insertCell(0);
    valueCell = newRow.insertCell(1);
    inputsCell.textContent = 'Number of Years For Which Quote Required';
    valueCell.textContent = quoteYears;
}
