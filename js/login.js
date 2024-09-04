document.getElementById('submit-button').addEventListener('click', function() {
    //  user Email get
 const userInput = document.getElementById("user-email");
 const userEmail = userInput.value;
  
//  user password get
    const passwordInputField = document.getElementById("user-password");
    const userPassword = passwordInputField.value;
   
    

    if (userEmail == 'admin@gmail.com' && userPassword == '123456'){
        alert("Login Successfull");
        window.location.href = "../banking.html"
    }else if(userEmail != 'admin@gmail.com' && userPassword != '123456'){
        alert("username or password is not valid")
    }
    
    
    
})

