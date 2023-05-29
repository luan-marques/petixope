const imgContainer = document.querySelector('.img-container')
const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')
const images = document.querySelectorAll('.img-container img')

let currentSlide = 0
let num_images = images.length

function changeImage() {
    imgContainer.style.transform = `translateX(-${
        currentSlide * imgContainer.offsetWidth
    }px)`
}

function buttomRight(){
    currentSlide++
    currentSlide = (currentSlide + num_images) % num_images
    changeImage()
}

function buttomLeft(){
    currentSlide--
    currentSlide = (currentSlide + num_images) % num_images
    changeImage()
}

 btnRight.addEventListener('click', buttomRight)
 btnLeft.addEventListener('click', buttomLeft)