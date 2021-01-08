// Assignment Code
var generateBtn = document.querySelector("#generate");
// a list of var for accepted password char.. 

// var lowerCase = ("abcdefghijklmnopqrstuvwxyz");
// var upperCase = ("ABCDEGHIJKLMNOPQRSTUVWXYZ");
// var specialChar = ("!@#$%^&*()_+><,./'")
// var numbers = ("1234567890")

// Empty Var bc ths will enable the new password to continue to pass through
// var newPassword = "";
// var passwordCharset = "";

function writePassword() {
  // var password = generatePassword();
  passwordText.value = newpassword;
  var passwordText = document.querySelector("#password");
}

function generatePassword() {
  
  var newPassword = "";
  var passwordCharset = [];
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var specialChar = ["!","@","#","$","%","^","&","*","()","_","+",">","<"]
  var numbers = ["1","2","3","4","5","6","7","8","9","0"]
  
  
  var userPasswordLength = prompt("Hello how many characters would you like to use for your password.");
  
  if (userPasswordLength < 8) {
    alert("Please enter a password count at Least 8-128 characters long.");
    return;
  }
  
  // if (Number(userPasswordLength) < 8) | Number(userPasswordLength > 128) | isNaN(userPasswordLength);
  //   alert("Your password must be 8-128 characters long."); 
  //   return;
  // }
  // prompt user
  var lowerCaseChoice = confirm("Would you like to use Lowercase Letters in your Password? ");
  
  // check propmt 
  if (lowerCaseChoice) {
    //add charaters to master character set. 
    passwordCharset.push(lowerCase);
    alert("Ok Great");
  }

  else {
    alert("No Lowercase will be included.");
  }

  var upperCaseChoice = confirm("Would you like to use Uppercase Letters in your Password? ");

  if (upperCaseChoice) {
    passwordCharset.push(upperCase);
    alert("Ok Great");
  }

  else {
    alert("No Uppercase Items will be included.");
  }

  var numericChoice = confirm("Would you like to use Numbers in your Password? ");

  if (numericChoice) {
    passwordCharset.push(numbers);
    alert("Ok Great");
  }

  else {
    alert("No Numbers will be included.");
  }

  var specialCharChoice = confirm("Would you like to use Special Characters in your Password? ");

  if (specialCharChoice) {
    passwordCharset.push(specialChar);
    alert("Ok Great");
  }

  else {
    alert("No Special Characters will be included.");
  }

  console.log(userPasswordLength);
  console.log(lowerCaseChoice);
  console.log(upperCaseChoice);
  console.log(numericChoice);
  console.log(specialCharChoice);


  var passwordText = document.querySelector("#password");
  for (var i = 0; i < userPasswordLength; i++) {
  //  newPassword + passwordCharset(Math.floor(Math.random() + 1));
  
  switch (selectPasswordBank()) {
       case 1:
        newPassword += passwordCharset[1][Math.floor(Math.random() * 25)]
         break;
         case 2:
      newPassword += passwordCharset[2][Math.floor(Math.random() * 13)]
       break;
       case 3:
      newPassword += passwordCharset[3][Math.floor(Math.random() * 10)]
       break;
     default:
      newPassword += passwordCharset[0][Math.floor(Math.random() * 25)]
       break;
   }
   //newPassword += passwordCharset[0][Math.floor(Math.random() * 25)]


    // todo: concat new password array 
 //document.textarea.placeholder.setAttribute.
 ///document.getElementsByTagName("placeholder")[0].setAttribute("newPassword")
  }
  // join password array into string
console.log(newPassword)

document.getElementById("password").textContent = newPassword
  // add new password string to wherever it's supposed to do.
}


function selectPasswordBank(){
  return Math.floor(Math.random() * 4)
}

//   passwordText.value = password;

// document.getElementById("myBtn").addEventListener("click", writePassword);

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


