//user constructor
class User{
    constructor(firstName, lastName, email, password, payment, color){
        this.firstName=firstName;
        this.lastName=lastName;
        this.email=email;
        this.password=password;
        this.payment=payment;
        this.color=color;
    }
}

//register function
    //get the values
    //create the user
    //display the user on console
function register(){
    let uFirstName=$("#txtFirstName").val();
    let uLastName=$("#txtLastName").val();
    let uEmail=$("#txtEmail").val();
    let uPass=$("#txtPassword").val();
    let uPayment=$("#txtPayment").val();
    let uColor=$("#txtColor").val();

    user = new User(uFirstName, uLastName, uEmail, uPass, uPayment, uColor);

    console.log(user);
}