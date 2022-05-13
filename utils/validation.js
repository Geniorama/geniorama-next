const ValidateEmail = (text) => {

    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
    if (text.match(validRegex)) {
      return true;  
    }

    return false
  
}

export {ValidateEmail}