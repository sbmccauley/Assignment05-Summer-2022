let newEmp = document.getElementById('empForm');


newEmp.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(`ID: ${document.getElementById('id').value}`);
    console.log(`Name: ${document.getElementById('name').value}`);
    console.log(`Extension: ${document.getElementById('ext').value}`);
    console.log(`Email: ${document.getElementById('email').value}`);
    console.log(`Department: ${document.getElementById('department').value}`);
   
})

