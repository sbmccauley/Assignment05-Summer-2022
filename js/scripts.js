let newEmp = document.getElementById('empForm');


newEmp.addEventListener('click', (e) => {
       
    console.log(`ID: ${document.getElementById('id').value}`);
    console.log(`Name: ${document.getElementById('name').value}`);
    console.log(`Extension: ${document.getElementById('ext').value}`);
    console.log(`Email: ${document.getElementById('email').value}`);
    console.log(`Department: ${document.getElementById('department').value}`);
    e.preventDefault();
})

