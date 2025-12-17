const images = [
  '/assets/images/HeroImages/Background_edited.jpg',
  '/assets/images/HeroImages/R5__0113_WebLarge-scaled.jpg',
  '/assets/images/HeroImages/Shells-with-barcode-downsample.jpg'
];

images.forEach(src => { const img = new Image(); img.src = src; });

let index = 0;
const slideA = document.getElementById('slideA');
const slideB = document.getElementById('slideB');

slideA.style.backgroundImage = `url(${images[0]})`;
slideA.classList.add("visible");

function changeHero() {
  index = (index + 1) % images.length;

  if (slideA.classList.contains("visible")) {
    slideB.style.backgroundImage = `url(${images[index]})`;
    slideB.classList.add("visible");
    slideA.classList.remove("visible");
  } else {
    slideA.style.backgroundImage = `url(${images[index]})`;
    slideA.classList.add("visible");
    slideB.classList.remove("visible");
  }
}

setInterval(changeHero, 5000);