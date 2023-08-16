let password = prompt("please type password");
if (password.length >= 6) {
    if (password.indexOf(' ') !== -1) {
        console.log("Valid Password");
    } else {
        console.log("password connot include spaces");
    }
} else {
    console.log("password to short");
}