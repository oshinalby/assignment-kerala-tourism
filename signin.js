var form = document.getElementById("frmRegistration");
var name = document.getElementById("name");
var email = document.getElementById("email");
var pass = document.getElementById("pass");
var mobile = document.getElementById("mobile");
var confpass = document.getElementById("confpass");
var icon = document.querySelector("i.fa-check-circle");
var icon1=document.querySelector("i.fa-exclamation-circle")
//password strength bar indicator parameters
var indicator = document.querySelector(".indicator");
var weak = document.querySelector(".weak");
var medium = document.querySelector(".medium");
var strong = document.querySelector(".strong");
var text = document.querySelector(".text");


//username validation
function validateName(){
    var name = document.getElementById("name");
    var parent = name.parentNode;
    var message = parent.querySelector("small");
    var check = parent.querySelector("i.fa-check-circle");
    var check1 = parent.querySelector("i.fa-exclamation-circle");
    
        message.innerText = "";
        check.style.visibility="hidden";
        check1.style.visibility="hidden";
        
        if(name.value.trim()==""){
            
            message.style.visibility = "visible";
            message.innerText = "Name cannot be blank";
            message.style.color="orange";           
            check1.style.visibility="visible";
        } 
        else{
            message.innerText="";
            check.style.visibility="visible";
        }
}

//email validation 
function validateEmail(){
    var email = document.getElementById("email");
    var parent = email.parentNode;
    var message = parent.querySelector("small");
    var check = parent.querySelector("i.fa-check-circle");
    var check1 = parent.querySelector("i.fa-exclamation-circle");

    
        message.innerText = "";
        check.style.visibility="hidden";
        check1.style.visibility="hidden";

        if(email.value.trim()==""){
            email.focus();
            message.style.visibility = "visible";
            message.innerText = "Email cannot be blank";
            message.style.color="orange";
            check1.style.visibility="visible";
        }

        let re = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})$/;
        if(!re.test(email.value)) {
            
            email.focus();
            message.style.visibility = "visible";
            message.innerText = "Invalid Email Id";
            message.style.color="orange";
            check1.style.visibility="visible";
        }
        else{
            message.innerText="";           
            check.style.visibility="visible";
        }
}

//password validation
function validatepwd(){

    var pass = document.getElementById("pass");
    var parent = pass.parentNode;
    var message = parent.querySelector("small");
    var check = parent.querySelector("i.fa-check-circle");
    var check1 = parent.querySelector("i.fa-exclamation-circle");

        message.innerText = "";
        check.style.visibility="hidden";
        check1.style.visibility="hidden";
        indicator.style.display="none";
        text.textContent="";


        if(pass.value.trim()==""){
           
            message.style.visibility = "visible";
            message.innerText = "Password cannot be empty";
            message.style.color="orange";
            check1.style.visibility="visible";
           
        }
    
        else {
            indicator.style.display="block";
            indicator.style.display="flex";
           
        }

        let regWeak = /(?=.*[a-z])/;
        let regMedium = /(?=.*\d)+/;
        let regStrong=/(?=.*[A-Z])/;

        if(pass.value.match(regWeak)||
            pass.value.match(regMedium)||
            pass.value.match(regStrong)) {

            //console.log("weak");
            levelone();
            
        }

        if((pass.value.match(regWeak) && pass.value.match(regMedium))||
           (pass.value.match(regMedium) && pass.value.match(regStrong))||
           (pass.value.match(regWeak) && pass.value.match(regStrong))) 
           {
            //console.log("medium");
            leveltwo();
           }
           else{
               leveltwofail();
           }
        
        if(pass.value.match(regWeak)&&
            pass.value.match(regMedium)&&
            pass.value.match(regStrong)) {

            //console.log("strong");
            levelthree();
       
        }else{
            levelthreefail();
        }
        
}
    function levelone(){
        
        var weak = document.querySelector(".weak");
        var text = document.querySelector(".text");

            weak.classList.add("active");
            text.style.display="block";
            text.textContent= "Your Password is too weak";
            text.classList.add("weak");
            //console.log("level1");
    }

    function leveltwo(){
            medium.classList.add("active");
            text.textContent= "Your Password is medium";
            text.classList.add("medium");
            //console.log("level2");
        }
    function leveltwofail(){
            medium.classList.remove("active");
            text.classList.remove("medium");
        }

    function levelthree(){
        var pass = document.getElementById("pass");
        var parent = pass.parentNode;
        var message = parent.querySelector("small");

        if(pass.value.length>7){
            weak.classList.add("active");
            medium.classList.add("active");
            strong.classList.add("active");
            text.textContent= "Your Password is strong";
            text.classList.add("strong");
        }
        else{
            message.style.visibility="visible";
            message.innerText="Password must contain atleast 8 characters";
            message.style.color="orange";
        }
    }

    function levelthreefail(){
        var pass = document.getElementById("pass");
        var parent = pass.parentNode;
        var message = parent.querySelector("small");
        var check = parent.querySelector("i.fa-check-circle");

            strong.classList.remove("active");
            text.classList.remove("strong");
            message.innerText="";
            check.style.visibility="visible";
            //indicator.style.display="none";
            //text.style.display="none";
    }
    


//conforming password
function validateConfpwd(){
    var confpass = document.getElementById("confpass");
    var parent = confpass.parentNode;
    var message = parent.querySelector("small");
    var check = parent.querySelector("i.fa-check-circle");
    var check1 = parent.querySelector("i.fa-exclamation-circle");

        message.innerText = "";
        check.style.visibility="hidden";
        check1.style.visibility="hidden";

        if(confpass.value.trim()==""){
           
            message.style.visibility = "visible";
            message.innerText = "This field cannot be empty";
            message.style.color="orange";
            check1.style.visibility="visible";
            
        } 
        else if(pass.value != confpass.value){
            message.style.visibility = "visible";
            message.innerText = "Password does not match";
            message.style.color="red";
            check1.style.visibility="visible";
        }
        else{
            message.innerText="";
            check.style.visibility="visible";
        }
}
 

//mobile number validation
function validateMobile(){
    var mobile = document.getElementById("mobile");
    var parent = mobile.parentNode;
    var message = parent.querySelector("small");
    var check = parent.querySelector("i.fa-check-circle");
    var check1 = parent.querySelector("i.fa-exclamation-circle");


        message.innerText = "";
        check.style.visibility="hidden";
        check1.style.visibility="hidden";

        if(mobile.value.trim()==""){
           
            message.style.visibility = "visible";
            message.innerText = "Enter Valid Mobile Number";
            message.style.color="orange";
            check1.style.visibility="visible";
            return false;
        } 
        // else{
        //     message.innerText="";
        //     check.style.visibility="visible";
        // }
    
        // let reg1 = /^\d{3}\.\d{3}\.\d{4}$/;
        // let reg2 = /^\d{3}\-\d{3}\-\d{4}$/;
        // let reg3 = /^\d{3}\_\d{3}\_\d{4}$/;


        var phoneno = /^\(?([0-9]{3})\)?[-._ ]?([0-9]{3})[-._ ]?([0-9]{4})$/;
        if(mobile.value.match(phoneno)){
                message.innerText="";
                check.style.visibility="visible";
                return true;
            }
        else{
                message.style.visibility="visible";
                message.innerText="Invalid Number";
                message.style.color="orange";
                check1.style.visibility="visible";
                return false;
            }

    }   
    
