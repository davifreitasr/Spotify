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

/* const carrosselMusics = document.querySelector('.carrossel-musics')
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
carrossel(carrosselArtists, leftArtists, rightArtists) */

document.addEventListener('DOMContentLoaded', () => {

    const musicData = [
        {music: 'Aperture', name: 'Harry Styles', image: 'src/images/aperture.jpg'},
        {music: 'ATM', name: 'Don Toliver', image: 'src/images/atm.png'},
        {music: 'Evil Jordan', name: 'Playboy Carti', image: 'src/images/evil-jordan.jpg'},
        {music: 'Parai', name: 'Ursaru, bote', image: 'src/images/parai.jpg'},
        {music: 'CERCEL - Intro', name: 'CERCEL, Lolita', image: 'src/images/cercel.png'},
        {music: 'Admita - Ao vivo', name: 'Matheus & Kauan, Luana Prado', image: 'src/images/admita.jpg'},
        {music: 'NUNCA ESQUECIDO', name: 'Luan Pereira, Léo Foguete, MC Don Juan', image: 'src/images/nunca-esquecido.jpg'},
        {music: 'Esquina', name: 'Felipe e Rodrigo', image: 'src/images/esquina.jpg'},
        {music: 'Calcinha de Renda', name: 'Panda, Gusttavo Lima, MJ Records', image: 'src/images/calcinha-renda.jpg'},
        {music: 'Traz uma Cerveja Urgente', name: 'Naiara Azevedo, Mayara & Maraisa', image: 'src/images/traz-cerveja.jpg'}
    ]

    const artistData = [
        {name: 'The Weekend', image: 'src/images/thw-wekeend.jpg'},
        {name: 'Drake', image: 'src/images/drake.webp'},
        {name: 'Veigh', image: 'src/images/veigh.jpg'},
        {name: 'Babasha', image: 'src/images/babasha.jpg'},
        {name: 'Dani Mocanu', image: 'src/images/dani-mocanu.jpg'},
        {name: 'Scarlxrd', image: 'src/images/scarlxrd.jpg'},
        {name: 'Lil Nas X', image: 'src/images/lil-nas-x.jpg'},
        {name: 'JAY-Z', image: 'src/images/jay-z.jpg'},
        {name: 'Central Cee', image: 'src/images/central-cee.jpg'},
        {name: 'Reed Wonder', image: 'src/images/reed-wonder.jpg'}
    ]

    const artistGrid = document.querySelector('.container-artists')
    const musicGrid = document.querySelector('.container-musics')

    musicData.forEach(music => {
        const musicCard = document.createElement('div')
        musicCard.classList.add('music-card')

        musicCard.innerHTML = `
            <img src="${music.image}" alt="${music.name}" class="musics">
            <h3>${music.music}</h3>
            <div>
                <p class="text-xs font-normal">${music.name}</p>
            </div>`

            musicGrid.appendChild(musicCard)
    })

    artistData.forEach(artist => {
        const artistCard = document.createElement('div')
        artistCard.classList.add('artist-card')

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="${artist.name}" class="artists">
            <div class="flex flex-col">
                <h3>${artist.name}</h3>
                <p class="font-normal text-xs text-[#ccc]">Artist</p>
            </div>`

            artistGrid.appendChild(artistCard)
    })  
})

document.querySelectorAll('.track-musics, .track-artists').forEach(track => {
  [...track.children].forEach(el => track.appendChild(el.cloneNode(true)));
  requestAnimationFrame(() => {
    track.style.setProperty(
      '--distance',
      `-${track.scrollWidth / 2}px`
    );
  });
});
