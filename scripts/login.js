function login(){
    //get the values from the inputs
    let email=$("#loginEmail").val();
    let password=$("#loginPass").val();
    
    //use a flag
    let loggedIn=false;

    //get the users from the local storage
    let users = readUsers();

    //travel the user list until we find a match or we finish the array
    for(let i=0; i<users.length && !loggedIn; i++){
        //compare the input values with the ones from local storage
        if(email==users[i].email && password==users[i].password){
            loggedIn=true;
        }
    }

    if(loggedIn){
        window.location="users.html";
    } else{
        $("#warning").fadeToggle(500);
        setTimeout(function(){
            $("#warning").fadeToggle(500);
        },3000);
    }
}

function init(){
    $("#loginBtn").click(login);
    $("#warning").hide();
}

window.onload = init;