var img = document.getElementsByClassName('toggleBtn')

for(let i=0; i<img.length; i++){
    img[i].addEventListener('click', () => {
    var p = document.querySelectorAll('p');

    if(p[i].classList.contains("hide") === true){
        p[i].classList.remove("hide");
        p[i].classList.add("show");
        img[i].classList.remove("box");
    }
    else{
        p[i].classList.remove("show");
        p[i].classList.add("hide");
        img[i].classList.add("box");
    }
    var im = document.querySelectorAll('img');
    if(im[i+1].getAttribute('src') === "./assets/images/icon-plus.svg"){
        im[i+1].setAttribute('src', "./assets/images/icon-minus.svg");
    }
    else if(im[i+1].getAttribute('src') === "./assets/images/icon-minus.svg"){
        im[i+1].setAttribute('src', "./assets/images/icon-plus.svg");
    }
});
}