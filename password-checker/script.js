let user = prompt("Who is there?");

if(user === "Admin") {
    let password = prompt("Please enter password");
    if(password === "TheMaster") {
        alert("Welcome!!");
    } else if(password === "" || password === null /* This was unnecessary --> function keyPress (e) {
        if(e.key === "Escape") {
            alert("Canceled");
        }
    }*/) {
       alert("Canceled");
    } else {
        alert("Wrong Password!")
    }
} else if(user === "" || user === null) {
   alert("Canceled");
} else {
    alert("I don't know you");
}


