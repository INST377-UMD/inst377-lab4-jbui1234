function alertMe() {
    let name = document.getElementById("name").value;
    if (name.trim() === "") {
        alert("Enter your name.");
    } else {
        alert(`Hi ${name}!`);
    }
}

function changeColor() {
    document.body.style.backgroundColor = 
        (document.body.style.backgroundColor === "darkolivegreen") ? "peru" : "darkolivegreen";
}

function validateText() {
    let text = document.getElementById("textTester").value;
    let validation = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

    if (validation.test(text)) {
        alert("NOT ALLOWED AT ALL");
    } else {
        alert("Yea das cool");
    }
}

function addText() {
    let heading = document.getElementById("main-heading");
    heading.innerHTML += " Add Text";
}
