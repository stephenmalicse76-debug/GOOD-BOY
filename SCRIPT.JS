const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const questionContainer = document.getElementById("questionContainer");
const resultContainer = document.getElementById("resultContainer");
const heartLoader = document.getElementById("heartLoader");

// Move No button when mouse gets close
noBtn.addEventListener("mouseover", () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "fixed";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

// Also move when clicked (for phones)
noBtn.addEventListener("click", () => {
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "fixed";
    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

// Yes button
yesBtn.addEventListener("click", () => {

    questionContainer.style.display = "none";
    resultContainer.style.display = "block";

    heartLoader.style.display = "flex";

});