const text = ["Web Developer 💻", "Java Developer ⚡", "Creative Designer 🎨"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (i < text.length) {
        if (!isDeleting && j <= text[i].length) {
            currentText = text[i].substring(0, j++);
        }
        if (isDeleting && j >= 0) {
            currentText = text[i].substring(0, j--);
        }

        document.querySelector(".typing").innerHTML = currentText;

        if (j == text[i].length) isDeleting = true;
        if (j == 0 && isDeleting) {
            isDeleting = false;
            i++;
        }
    } else {
        i = 0;
    }
    setTimeout(type, 100);
}
type();

function showSection(id){

    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    let selected = document.getElementById(id);
    selected.classList.add('active');

    selected.scrollIntoView({behavior: "smooth"});
}


document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name && mobile && email && message){
        document.getElementById("successPopup").style.display = "flex";
        document.getElementById("contactForm").reset();
    }
});

function closePopup(){
    document.getElementById("successPopup").style.display = "none";
}