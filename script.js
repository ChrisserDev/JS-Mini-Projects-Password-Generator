const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", 
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_",
"-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

//GRABBING HOLD OF THE DOM ELEMENTS

const generatePasswordsBtn = document.querySelector(".genereate-password-btn");
const firstPasswordValue = document.getElementById("first-password");
const secondPasswordValue = document.getElementById("second-password");
const copyBtn1 = document.getElementById("copy-pass-one");
const copyBtn2 = document.getElementById("copy-pass-two");
const copiedToClipboard = document.getElementById("copied-to-clipboard");
const failedToCopy = document.getElementById("failed-to-copy");
const warningMessage = document.getElementById("warning");

//GENERATE RANDOM PASSWORD BASED ON THE ARRAY (FUNCTION)

const generateRandomPassword = () => {
    let password = "";
    for (let i = 0; i < 16; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
};

generatePasswordsBtn.addEventListener("click", function () {
    firstPasswordValue.textContent = generateRandomPassword();
    secondPasswordValue.textContent = generateRandomPassword();
});

// EVENT LISTENERS FOR BOTH COPY TO CLIPBOARD BUTTONS

copyBtn1.addEventListener("click", function(){
    const textToCopy = firstPasswordValue.textContent;
    copyToClipboard(textToCopy);
});

copyBtn2.addEventListener("click", function(){
    const textToCopy = secondPasswordValue.textContent;
    copyToClipboard(textToCopy);
});

//MAIN FUNCTION OF THE COPY TO CLIPBOARD FUNCTIONALITY

const copyToClipboard= (text) => {
    navigator.clipboard.writeText(text).then(() => {
        if(firstPasswordValue.textContent){
            copiedToClipboard.style.display = "block";
        } else{
            warningMessage.style.display = "block";
        }
        setTimeout(() => {
            copiedToClipboard.style.display = "none";
            warningMessage.style.display = "none";
        }, 3000)
    }).catch(() => {
        failedToCopy.style.display = "block";
        setTimeout(() => {
            failedToCopy.style.display = "none";
        }, 3000)
    });
};