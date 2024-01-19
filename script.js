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

    // Add the row to the table
    addRowToTable(rowData);

    // Update summary table
    updateSummaryTable();

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
    summaryRow.cells[2].textContent = totalCoresForLicenses.toFixed(2); // Updated to match the sum of 'Total number of cores per Node'
}

// Function to export data to PDF (assuming jsPDF is included)
function exportToPDF() {
    var doc = new jsPDF();
   
    // Add content to the PDF
    doc.text('User Inputs:', 10, 10);
    
    for (var i = 0; i < userData.length; i++) {
        var rowData = userData[i];
        doc.text('Node: ' + rowData.node, 10, 20 + i * 10);
        doc.text('Number of Cores per CPU: ' + rowData.cores, 10, 30 + i * 10);
        doc.text('Total Number of CPU: ' + rowData.cpus, 10, 40 + i * 10);
        doc.text('Total number of cores per Node: ' + rowData.totalCores, 10, 50 + i * 10);
        doc.text('Total Raw Storage Capacity Per Node: ' + rowData.totalStorage.toFixed(2), 10, 60 + i * 10);
        doc.text('Total Raw Storage Capacity Per Node in TiB: ' + rowData.storageInTiB.toFixed(2), 10, 70 + i * 10);
        
        // Add a line break
        doc.text('', 10, 80 + i * 10);
    }

    // Save the PDF
    doc.save('exported_data.pdf');
}
