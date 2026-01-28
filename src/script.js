const menu = document.getElementById('menu-mob')
const burguer = document.getElementById('burguer')

burguer.addEventListener('click', (e) => {
    e.stopPropagation()
    menu.classList.toggle('active')
})

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target)) {
        menu.classList.remove('active')
    }
})

const carrosselMusics = document.querySelector('.carrossel-musics')
const leftMusics = document.querySelector('.chevron-left-musics')
const rightMusics = document.querySelector('.chevron-right-musics')

const carrosselArtists = document.querySelector('.carrossel-artists')
const leftArtists = document.querySelector('.chevron-left-artists')
const rightArtists = document.querySelector('.chevron-right-artists')

function carrossel(carrossel, left, right) {
    right.addEventListener('click', () => {
        carrossel.scrollBy({ left: 750, behavior: 'smooth' })
    })

    left.addEventListener('click', () => {
        carrossel.scrollBy({ left: -750, behavior: 'smooth' })
    })
}

carrossel(carrosselMusics, leftMusics, rightMusics)
carrossel(carrosselArtists, leftArtists, rightArtists)