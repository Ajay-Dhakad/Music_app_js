
let play = document.querySelector('#play')
let pause = document.querySelector('#pause')
let prev = document.querySelector('#prev')
let next = document.querySelector('#next')
let playtime = document.querySelector('#playtime')
let coverimg = document.querySelector('.coverimg')
let title = document.querySelector('#title')


let songsarr = [{ name: "Mi-Amor(PagalWorldl).mp3", coverimg: 'https://i.ytimg.com/vi/HYb4FGDTBmw/maxresdefault.jpg' }, { name: 'Time-Traveller(PagalWorldl).mp3', coverimg: 'https://i.scdn.co/image/ab67616d0000b27312688eea38599b12629a5f57' },{name:'tu-hai-kahaan.mp3',coverimg:'https://i.ytimg.com/vi/AX6OrbgS8lI/sddefault.jpg'},{name:'Way-Down-We-Go(PagalWorldl).mp3',coverimg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsHC-9iITmS21rRf0n6KJcidQR2Nifqc7IRCmZeJMBX7kAdxk7Nng0rQRoC_8m5U0i2ug&usqp=CAU'}]



var currentindx = 0

var song = new Audio('songs/' + songsarr[currentindx].name)


function playsong() {

    
    playtime.value = '0'

    coverimg.style.backgroundImage = `url('${songsarr[currentindx].coverimg}')`
   

    title.textContent = songsarr[currentindx].name





//-----------play----pause-----------------------------------------------

    play.addEventListener("click", () => {



        if (song.paused || song.currentTime <= 0) {



            song.play()

            play.style.display = 'none'
            pause.style.display = 'block'

            //    console.log(songsarr[0].name)
            //    console.log(song.pause())

        }




    })


    pause.addEventListener('click', () => {

        song.pause()
        pause.style.display = 'none'
        play.style.display = 'block'
    })


   
    // nextsong()
    // prevsong()
    // timeupdate()
    // changesongtime()
  

    song.addEventListener('timeupdate', (time) => {

     
let progress = parseInt((song.currentTime / song.duration) * 100)
//    console.log(progress)

playtime.value = progress



})





}

playsong()


//---------------endfunc---------------------------------------------------------------------











next.addEventListener('click',  () => {

// song.pause()
let indx = currentindx + 1
if(indx<songsarr.length){
song.pause()
pause.style.display = 'none'
play.style.display = 'block'


currentindx = currentindx + 1
song = new Audio('songs/' + songsarr[currentindx].name)


if (song.paused || song.currentTime <= 0) {

song.play()

play.style.display = 'none'
pause.style.display = 'block'

}


}
playsong()

})





prev.addEventListener('click', async () => {



if (currentindx > 0) {

song.pause()
pause.style.display = 'none'
play.style.display = 'block'


currentindx = currentindx - 1
song = new Audio('songs/'+ songsarr[currentindx].name)

//-----------------------------


if (song.paused || song.currentTime <= 0) {



song.play()

play.style.display = 'none'
pause.style.display = 'block'


}

}

playsong()

})






playtime.addEventListener('change', (e) => {

song.currentTime = ( playtime.value * song.duration ) / 100

})
