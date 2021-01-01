


//Carrousel
const carrouselSlide = document.querySelector('.carrousel-slide');
const carrouselImages = document.querySelectorAll('.carrousel-slide img')
const carrouselTransform = () =>{
    carrouselSlide.style.transform = 'translateX(' + (-size *counter) + 'px)'
}
const carrouselAnimation = () =>{
    carrouselSlide.style.transition = 'transform  0.4s ease-in-out'
}
const carrouselReset = () =>{
    carrouselSlide.style.transition = "none"
}
//Buttons
const previousBtn = document.querySelector('#previousBtn')
const nextBtn = document.querySelector('#nextBtn')

nextBtn.addEventListener('click', () =>{
    counter++;
    carrouselTransform()
    carrouselAnimation()
})

previousBtn.addEventListener('click', () =>{
    counter--;
    carrouselTransform()
    carrouselAnimation()
})
//Counter

let counter = 1;
const size = carrouselImages[0].clientWidth;
carrouselTransform()

carrouselSlide.addEventListener('transitionend', ()=>{
    if (carrouselImages[counter].id === 'lastClone'){
        carrouselReset()
        counter = carrouselImages.length-2;
        carrouselTransform()
        }
        if (carrouselImages[counter].id === 'firstClone'){
            carrouselReset()
            counter = carrouselImages.length- counter;
            carrouselTransform()
            }
})