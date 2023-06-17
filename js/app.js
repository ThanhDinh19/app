var number = 1;

function plusSlides(n){
    showSlides(number = number + n);
    console.log(n);
}




function currentSlides(n){
    showSlides(number=n);

}

function showSlides(n)
{
    var i;
    var slides = document.getElementsByClassName("mySlideShow-img");
    var dots = document.getElementsByClassName("dot");
    if(n > slides.length) {
        number = 1;
    }
    if(n < 1){
        number = slides.length;
    }
    for(i = 0; i < slides.length; i++)
    {
        slides[i].style.display = "none";
    }
    for(i = 0;  i < dots.length; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[number-1].style.display = "block";  
     dots[number-1].className += " active";
}