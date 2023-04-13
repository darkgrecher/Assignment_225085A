function validateForm() {
  var contactNumber = document.forms["form1"]["contactNumber"].value;
  var email = document.forms["form1"]["email"].value;

  // Regular expressions for validating Mobile Number and email
  var contactNumberRegex = /^\d{10}$/;
  var emailRegex = /^\S+@\S+\.\S+$/;

  try {
    if (!contactNumberRegex.test(contactNumber)) {
      throw new Error("Invalid Mobile Number");
    }
    if (!emailRegex.test(email)) {
      throw new Error("Invalid Email");
    }

    // If both fields are valid, display a success message
    alert("Success..!");

  } catch (error) {
    if (error.message === "Invalid Mobile Number") {
      document.getElementById("pid1").innerHTML = "Invalid Mobile Number";
    } else if (error.message === "Invalid Email") {
      document.getElementById("pid2").innerHTML = "Invalid Email";
    }
    return false;
  }

  // Clear error messages and reset form fields
  document.getElementById("pid1").innerHTML = "";
  document.getElementById("pid2").innerHTML = "";
  document.forms["form1"].reset();
  return true;
}




