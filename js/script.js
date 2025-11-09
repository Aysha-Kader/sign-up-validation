
  const form = document.querySelector("form");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");

  form.addEventListener("submit",function(e) {
    
    if (password.value !== confirmPassword.value) {
      alert("Passwords do not match!!!...");
      e.preventDefault(); 
      
    }

    
    else if (!form.checkValidity()) {
      alert("Please fill in all required fields correctly!");
      e.preventDefault();
     
    }

   else {
   alert("Form submitted successfully!");
   }
  });

