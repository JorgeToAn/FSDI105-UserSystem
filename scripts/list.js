function displayUsers(usersArray){
    for(let i=0; i<usersArray.length; i++){
        user = usersArray[i];
        row =   `<tr>
                    <td>${user.firstName}</td>
                    <td>${user.lastName}</td>
                    <td>${user.age}</td>
                    <td>${user.address}</td>
                    <td>${user.phone}</td>
                    <td>${user.email}</td>
                    <td>${user.password}</td>
                    <td>${user.payment}</td>
                    <td><input type="color" class="form-control" value="${user.color}" disabled></input></td>
                </tr>`;
        $("tbody").append(row);
    }
}

function init(){
    console.log("Listing registered users...");
    let users = readUsers();
    displayUsers(users);
    //hook events
}
window.onload = init();