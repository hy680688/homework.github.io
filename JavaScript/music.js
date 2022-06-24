let playList = [
    {
        name: 'スパークル (Movie Ver.)',
        artist: 'RADWIMPS',
        src: './Data/music1.mp3',
        picture: './Data/music1.jpg'
    },
    {
        name: 'Lost Game',
        artist: 'Nulbarich',
        src: './Data/music2.mp3',
        picture: './Data/music2.jpg'
    },
    {
        name: 'ミライのテーマ',
        artist: '山下達郎',
        src: './Data/music3.mp3',
        picture: './Data/music3.jpg'
    }
]

let index = 0
let img = document.querySelector('#img')
let audio = document.querySelector('#audio')

function changeMusic(e) {
    if (e === 'last') {
        if (index > 0) {
            index--
        } else {
            index = playList.length - 1
        }
    }
    if (e === 'next') {
        if (index < playList.length - 1) {
            index++
        } else {
            index = 0
        }
    }
    img.src = playList[index].picture
    audio.src = playList[index].src
}
