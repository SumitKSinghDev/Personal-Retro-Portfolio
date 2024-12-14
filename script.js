const images = document.querySelectorAll('.expand-img');

const modal = document.getElementById('myModal');
const modalImg = document.getElementById('img01');
const caption = document.getElementById('caption');
const closeBtn = document.getElementsByClassName('close')[0];

images.forEach((img) => {
    img.onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        caption.innerHTML = this.alt;
    };
});

closeBtn.onclick = function () {
    modal.style.display = "none";
};