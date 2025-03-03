// Question #3
let userPassword = "ssswnalWadqQ";
//let userPassword = "TechUp";
//let userPassword = "abcde";

checkPasswordStrength = (password) => {
  let result = "";

  if (password.length < 6) {
    result = "Weak";
  } else if (password.length >= 6 && password.length <= 10) {
    result = "Medium";
  } else {
    result = "Strong";
  }
  return result;
};

console.log(checkPasswordStrength(userPassword)); // "Strong"
