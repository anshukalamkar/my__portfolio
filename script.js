function scrollToSection() {
    document.getElementById("portfolio").scrollIntoView({ behavior: "smooth" });
}

function sendMessage() {
    alert("Message sent successfully 🚀");
}
function followMe() {
    alert("Follow me on Instagram 💃");
}

function viewWork() {
    alert("Check my projects 🚀");
}
function openImage(img) {
    document.getElementById("popup").style.display = "flex";
    document.getElementById("popup-img").src = img.src;
}

function closeImage() {
    document.getElementById("popup").style.display = "none";
}

function viewWork() {
    alert("My projects coming soon 🚀");
}
function showAlert() {
    alert("Button clicked! 🚀");
}