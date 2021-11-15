let email = document.getElementById("email");
let pwd = document.getElementById("pwd");
let form = document.getElementById("frmLogin");


function validate(form)
  {
    if(email.value == "") {
      alert("Error: Email cannot be blank!");
      form.email.focus();
      return false;
    }
    
    re = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})$/;
    if(!re.test(email.value)) {
      alert("Error: Invalid Id!");
      email.focus();
      return false;
    }

    if(pwd.value != "") {
      if(pwd.value.length < 8) {
        alert("Error: Password must contain at least eight characters!");
        pwd.focus();
        return false;
      }
      
      re = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;
      if(!re.test(pwd.value)) {
        alert("Invalid Password");
        pwd.focus();
        return false;
      }
      
    } else {
      alert("Error: Please check that you've entered your password!");
      pwd.focus();
      return false;
    }
    
    
    return true;
    
    
  }
  
