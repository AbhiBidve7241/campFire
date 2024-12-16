const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
})
}




let images = [
    "Assets/hero-images/Iqoo-hero.jpg",
    "Assets/hero-images/s23-hero.jpg",
    "Assets/hero-images/gt7-hero.jpg"
];

let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("Hero-images").style.backgroundImage = `url(${images[currentIndex]})`;
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("Hero-images").style.backgroundImage = `url(${images[currentIndex]})`;
}

function nextImage() {
    changeImage();
}

// Change image every 2 seconds
setInterval(changeImage, 2000);