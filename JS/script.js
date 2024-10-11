document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Ambil nilai dari input
    const date = document.getElementById('date').value;
    const week = document.getElementById('week').value;
    const month = document.getElementById('month').value;
    const year = document.getElementById('year').value;
    const msisdn = document.getElementById('msisdn').value;
    const category = document.getElementById('category').value;
    const issue = document.getElementById('issue').value;
    const location = document.getElementById('location').value;
    const branch = document.getElementById('branch').value;
    const nop = document.getElementById('nop').value;
    const action = document.getElementById('action').value;
    const status = document.getElementById('status').value;

    // Buat baris baru di tabel
    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Tambahkan sel ke baris baru
    newRow.insertCell(0).textContent = date;
    newRow.insertCell(1).textContent = week;
    newRow.insertCell(2).textContent = month;
    newRow.insertCell(3).textContent = year;
    newRow.insertCell(4).textContent = msisdn;
    newRow.insertCell(5).textContent = category;
    newRow.insertCell(6).textContent = issue;
    newRow.insertCell(7).textContent = location;
    newRow.insertCell(8).textContent = branch;
    newRow.insertCell(9).textContent = nop;
    newRow.insertCell(10).textContent = action;
    newRow.insertCell(11).textContent = status;

    // Reset form
    document.getElementById('dataForm').reset();
});
