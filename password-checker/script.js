let user = prompt("Who is there?");
/*let cancel = alert("Canceled");
let password = prompt("Please enter password");
let other = alert("I don't know you");*/

function keyPress (e) {
    if(e.key === "Escape") {
        alert("Canceled");
    }
}


if (user === "Admin") {
    prompt("Please enter password");
} else if(user == "" || null) {
    alert("Canceled");
} else {
    alert("I don't know you");
}


