


var img = document.getElementsByClassName('toggleBtn')

for(let i=0; i<img.length; i++){
    img[i].addEventListener('click', () => {
    var p = document.querySelectorAll('p');
    const img = document.querySelector('.toggleBtn');

    if(p[i].classList.contains("hide") === true){
        p[i].classList.remove("hide");
        p[i].classList.add("show");
    }
    else{
        p[i].classList.remove("show");
        p[i].classList.add("hide");
    
    }
    // p.classList.toggle("hide");
    console.log(img.classList.src);
    img.classList.src = "faq-accordion-main/assets/images/icon-minus.svg"
});
}