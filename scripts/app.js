//user constructor
class User{
    constructor(firstName, lastName, age, address, phone, email, password, payment, color){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.address=address;
        this.phone=phone;
        this.email=email;
        this.password=password;
        this.payment=payment;
        this.color=color;
    }

    isValid(){
        let valid = true;
        $("div.form-container input").removeClass("is-invalid");

        if(this.firstName.length==0){
            $("#txtFirstName").addClass("is-invalid");
            valid = false;
        }
        if(this.age<0 || this.age.length==0){
            $("#numAge").addClass("is-invalid");
            valid=false;
        }
        if(this.email.length==0){
            $("#txtEmail").addClass("is-invalid");
            valid = false;
        }
        if(this.password.length<7){
            $("#txtPassword").addClass("is-invalid");
            $("#txtConfirmPass").addClass("is-invalid");
            valid = false;
        }
        if(this.password!=$("#txtConfirmPass").val()){
            $("#txtPassword").addClass("is-invalid");
            $("#txtConfirmPass").addClass("is-invalid");
            valid = false;
        }
        return valid;
    }
}

function register(){
    let uFirstName=$("#txtFirstName").val();
    let uLastName=$("#txtLastName").val();
    let uAge=$("#numAge").val();
    let uAddress=$("#txtAddress").val();
    let uPhone=$("#txtPhone").val();
    let uEmail=$("#txtEmail").val();
    let uPass=$("#txtPassword").val();
    let uPayment=$("#txtPayment").val();
    let uColor=$("#txtColor").val();

    let user = new User(uFirstName, uLastName, uAge, uAddress, uPhone, uEmail, uPass, uPayment, uColor);

    if(user.isValid()){
        saveUser(user);
        clearForm();
    }
}

function clearForm(){
    $("#txtFirstName").val("");
    $("#txtLastName").val("");
    $("#numAge").val("");
    $("#txtAddress").val("");
    $("#txtPhone").val("");
    $("#txtEmail").val("");
    $("#txtPassword").val("");
    $("#txtConfirmPass").val("");
    $("#warning-span").html("");
}

function validatePassword(){
    let elementPass = $("#txtPassword");
    let password = elementPass.val();
    let warningSpan = $("#pass-warning");

    if(password.length<7 ){
        elementPass.css("border-color","#ff3d43");
        warningSpan.html("Password level: LOW");
        warningSpan.css("color","#ff3d44")
    } else{
        elementPass.css("border-color","#49f569");
        elementPass.removeClass("is-invalid");
        warningSpan.html("Password level: HIGH");
        warningSpan.css("color","#49f569");
    }
}

function init(){
    //hiding the register form
    $("#registerForm").hide();

    $("#newUser").on("click", function(){
        $("#registerForm").fadeToggle(400, function(){
            if($("#newUser").html()=="Sign up"){
                $("#newUser").html("Hide registration");
            } else{
                $("#newUser").html("Sign up");
            }
        });
    })

    $("#txtPassword").keyup(validatePassword);
}

window.onload = init;