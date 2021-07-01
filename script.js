const resume = document.querySelector(".wrapper");
const button = document.getElementById('button');
const onshow = document.querySelector('.ondisplay');

function generatePdf () {
  html2pdf(resume, opt);
  onshow.style.display = "block";
}

const opt = {
  margin: 0,
  filename: "myResume.pdf",
  image: { type: 'jpeg', quality: 0.98},
  html2canvas: { scale: 4},
  jsPDF: { format: 'a4', orientation:  'portrait'}
}

button.addEventListener('click', generatePdf);

window.onclick = function(event) {
    if (event.target == onshow) {
        onshow.style.display = "none";
    }
}