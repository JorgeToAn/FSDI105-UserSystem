const KEY = "users";
function saveUser(user){
    let oldData = readUsers(); //reading the data in local storage
    oldData.push(user); //adding the new user to the data
    localStorage.setItem(KEY, JSON.stringify(oldData)); //sending the new data to storage
}
function readUsers(){
    let data = localStorage.getItem(KEY);
    console.log(data); //JSON

    if(!data){
        return [];
    }else{
        //parse the data back into an object
        let list = JSON.parse(data);
        return list;
    }
}