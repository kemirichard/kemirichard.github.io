const validatedata = () => {
    let fullname = document.contactform.fullname.value;
    let msg = document.contactform.msg.value;
    let invalidName = document.getElementById("fullname");
    let invalidMsg = document.getElementById("msg");
  
    if (fullname === null || fullname === "") {
      invalidName.textContent = "You have to write your name";
      return false;
    }  else {
      invalidMsg.textContent = "correct" 
    }
    if (fullname.length < 4) {
      invalidName.textContent = "Name should contain atleast 4 characters";
      return false;
    }  else {
      invalidMsg.textContent = "correct" 
    }
    if (msg == null || msg == "") {
      invalidMsg.textContent = "You have to write a message";
      return false;
    }  else {
      invalidMsg.textContent = "correct"
    }
    if (msg.length < 20) {
      invalidMsg.textContent = "Message should contain atleast 20 characters";
      return false;
    } else {
      invalidMsg.textContent = "correct" 
    }
  };