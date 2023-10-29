let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let symbols = document.getElementById("symbols");
let number = document.getElementById("number");
let genBtn = document.getElementById("genBtn");
let copyicon = document.getElementById("copyIcon");

// showing input slider value
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
  sliderValue.textContent = inputSlider.value;
});

genBtn.addEventListener("click", () => {
  passBox.value = generatePassword();
});

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allNumebrs = "0123456789";
let allSymbols = "!@#$%^&*";

// funciton to generate password
function generatePassword() {
  let genPassword = "";
  let allChars = "";

  allChars += lowercase.checked ? lowerChars : "";
  allChars += uppercase.checked ? upperChars : "";
  allChars += number.checked ? allNumebrs : "";
  allChars += symbols.checked ? allSymbols : "";

  if (allChars == "" || allChars.length == 0) {
    return genPassword;
  }
  let i = 1;
  while (i <= inputSlider.value) {
    genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    i++;
  }
  return genPassword;
}

copyicon.addEventListener('click',()=>{
  if(passBox.value != "" || passBox.value.length >=1)
  navigator.clipboard.writeText(passBox.value);
  copyicon.innerText="check";
  copyicon.title ="Password Copied";

  setTimeout(() => {
    copyicon.innerHTML="content_copy";
    copyicon.title = "";
  }, 2000);
});
