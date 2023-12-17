


var img = document.getElementsByClassName('toggleBtn')

for(let i=0; i<img.length; i++){
    img[i].addEventListener('click', () => {
    var p = document.querySelectorAll('p');
    // var img = document.querySelector('.toggleBtn');

    if(p[i].classList.contains("hide") === true){
        p[i].classList.remove("hide");
        p[i].classList.add("show");
    }
    else{
        p[i].classList.remove("show");
        p[i].classList.add("hide");
    
    }

    if(img[i].getAttribute('src') === "./assets/images/icon-plus.svg"){
        img[i].setAttribute('src', "./assets/images/icon-minus.svg");
    }
    else{
        img[i].setAttribute('src', "./assets/images/icon-plus.svg");
    }
});
}