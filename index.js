const buttons = document.querySelectorAll('.carouselBtn')
buttons.forEach(button=>{
    button.addEventListener('click', ()=>{
        const changeIndex = button.classList.contains('next') ? 1 : -1
        const activeImage = document.querySelector('[data-active]')
        const slideContainer = button.closest('[data-image-container]').querySelector('[data-image-carousel]')
        let index = [...slideContainer.children].indexOf(activeImage) + changeIndex
        if(index < 0) index = slideContainer.children.length - 1
        if(index >= slideContainer.children.length) index = 0

        slideContainer.children[index].dataset.active = true
        delete activeImage.dataset.active
    })
})
