
document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    

    const name = document.getElementById('fname').value;
    const last = document.getElementById('lname').value;
    const age = document.getElementById('age').value;

    if (age >= 18){
    const listItem1 = document.createElement('li');
    listItem1.textContent = `${name}`;
    const listItem2 = document.createElement('li');
    listItem2.textContent = `${last}`;
    const listItem3 = document.createElement('li');
    listItem3.textContent = `${age}`;


    document.getElementById('itemList').appendChild(listItem1);
    document.getElementById('itemList').appendChild(listItem2);
    document.getElementById('itemList').appendChild(listItem3)

    document.getElementById('fname').value = '';
    document.getElementById('lname').value = '';
    document.getElementById('age').value = '';
    } else{
        alert("You should be at least 18! ")
    }

});

