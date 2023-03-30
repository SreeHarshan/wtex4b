function clr(){
    var btn = document.getElementById("sub");
    btn.style.color="black";
  }
  function validate3() {
    var btn = document.getElementById("sub")
    var em = document.getElementById("em");
    if (!ValidateEmail(em)) {
      sub.style.color="red";
      return;
    }
    var pass = document.getElementById("pass");
    var enter_pass = validate_pass(pass);
    if (enter_pass) {
      var pass2 = document.getElementById("pass2");
      if (!validate_pass2(pass2, enter_pass)) {
        sub.style.color="red";
        return;
      }
    } else {
      sub.style.color="red";
      return;
    }
    var ph = document.getElementById("ph");
    if (!validate_num(ph)) {
      sub.style.color="red";
      return;
    }
    sub.style.color="green";
  }
  
  function validate2() {
    var nm = document.getElementById("nm");
    if(nm.value===""){
    alert("Invalid name");
    return;
    }
    var em = document.getElementById("em");
    if (!ValidateEmail(em)) {
      alert("Invalid email address");
      return;
    }
    var pass = document.getElementById("pass");
    var enter_pass = validate_pass(pass);
    if (enter_pass) {
      var pass2 = document.getElementById("pass2");
      if (!validate_pass2(pass2, enter_pass)) {
        alert("Password don't match");
        return;
      }
    } else {
      alert("Invalid password,minimum 8 chars");
      return;
    }
    var ph = document.getElementById("ph");
    if (!validate_num(ph)) {
      alert("Invalid Phone number");
      return;
    }
    alert("Successfully submitted");
  }
  function ValidateEmail(input) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!input.value.match(validRegex)) {
      return false;
    }
    return true;
  }
  function validate_pass(input) {
    if (input.value.length <= 7) {
      return false;
    } else {
      return input.value;
    }
  }
  function validate_pass2(input, pass) {
    if (input.value !== pass) {
      return false;
    }
    return true;
  }
  function validate_num(input) {
    if (input.value.length != 10 || isNaN(input.value)) {
      return false;
    }
    return true;
  }