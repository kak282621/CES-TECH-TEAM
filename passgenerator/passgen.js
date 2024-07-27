const passbox = document.getElementById("pass-box");
const totalChar = document.getElementById("total-char");
const upperinput = document.getElementById("uppercase");
const lowerinput = document.getElementById("lowercase");
const numberinput = document.getElementById("number");
const symbolinput = document.getElementById("symbols");

const getRandomData = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)];
};

const generatePass = () => {
    let password = ""; // Initialize an empty password

    if (upperinput?.checked) {
        password += getRandomData("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    if (lowerinput?.checked) {
        password += getRandomData("abcdefghijklmnopqrstuvwxyz");
    }
    if (numberinput?.checked) {
        password += getRandomData("123456789");
    }
    if (symbolinput?.checked) {
        password += getRandomData("!#$%^&()_+?/~");
    }

    
    while (password.length < totalChar.value) {
        password += getRandomData("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789!#$%^&()_+?/~");
    }

    
    passbox.value = password;
};

document.getElementById("btn").addEventListener("click", generatePass);