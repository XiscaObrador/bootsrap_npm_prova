var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: false
})

document.querySelector('#anterior').addEventListener('click',function(){
 carousel.prev();
})
document.querySelector('#seguent').addEventListener('click',function(){
    carousel.next();
})

var myModal = document.querySelector('#exampleModal')
var modal = new bootstrap.Modal(myModal,{
    backdrop : 'static'
})

document.querySelector('#openModal').addEventListener('click',function(){
    modal.show();
})

