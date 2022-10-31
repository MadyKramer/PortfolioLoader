const typeWriterContent = document.getElementById("portfolioEvolving");
const stayTuned = document.getElementById("stayTuned");
const txt =
  " Quoi?! Il semblerait que le PortFolio WordPress soit en train d'évoluer en React !";
const txtEnd = "Stay Tuned !";

const typeWriter = (word, index) => {
  if (index < word.length) {
    setTimeout(() => {
      typeWriterContent.innerHTML += `<span>${word[index]}</span>`;
      typeWriter(txt, index + 1);
    }, 65);
  }
};

const typeWriterEnd = (word, index) => {
  if (index < word.length) {
    setTimeout(() => {
      stayTuned.innerHTML += `<span>${word[index]}</span>`;
      typeWriterEnd(txtEnd, index + 1);
    }, 65);
  }
};

setTimeout(() => {
  typeWriter(txt, 0);
}, 900);

setTimeout(() => {
  typeWriterEnd(txtEnd, 0);
}, 8000);
