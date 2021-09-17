var slideIndex = 1;

showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Hover sobre las cards

let cardCont = document.querySelectorAll('.card-cont');

cardCont.forEach(card => {
    card.addEventListener('mouseover', () => {
        let a = card.childNodes[3].childNodes[1];
        let b = card.childNodes[3].childNodes[9];
        let c = card.childNodes[3].childNodes[11];
        a.style.display = 'block'
        b.style.display = 'block'
        c.style.display = 'block'
    })
})

cardCont.forEach(card => {
    card.addEventListener('mouseleave', () => {
        let a = card.childNodes[3].childNodes[1];
        let b = card.childNodes[3].childNodes[9];
        let c = card.childNodes[3].childNodes[11];
        
        a.style.display = 'none'
        b.style.display = 'none'
        c.style.display = 'none'
    })
})