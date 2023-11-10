
let play = document.querySelector('#play')
let pause = document.querySelector('#pause')
let prev = document.querySelector('#prev')
let next = document.querySelector('#next')
let playtime = document.querySelector('#playtime')
let coverimg = document.querySelector('.coverimg')
let title = document.querySelector('#title')


let songsarr = [ { name: 'Time-Traveller(PagalWorldl).mp3', coverimg: 'https://i.scdn.co/image/ab67616d0000b27312688eea38599b12629a5f57' },{ name: "Mi-Amor(PagalWorldl).mp3", coverimg: 'https://i.ytimg.com/vi/HYb4FGDTBmw/maxresdefault.jpg' },{name:'tu-hai-kahaan.mp3',coverimg:'https://i.ytimg.com/vi/AX6OrbgS8lI/sddefault.jpg'},{name:'Way-Down-We-Go(PagalWorldl).mp3',coverimg:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjeZ_jFZK3WTbQKTbOmnrbzmbP8EyRSdfoqqo3U2Sqhq1UTdA7qYB3XAsc6e1vefyydQE&usqp=CAU'}]



var currentindx = 0

var song = new Audio('songs/' + songsarr[currentindx].name)


function playsong() {

    playtime.value = '0'

    coverimg.style.backgroundImage = `url('${songsarr[currentindx].coverimg}')`
   

    title.textContent = songsarr[currentindx].name.replace('.mp3','_BeatWave_')





//-----------play----pause-----------------------------------------------

    play.addEventListener("click", () => {



        if (song.paused || song.currentTime <= 0) {



            song.play()

            play.style.display = 'none'
            pause.style.display = 'block'
            document.querySelector('.disc').style.display = 'block' 
            // coverimg.classList.add('dim')

            //    console.log(songsarr[0].name)
            //    console.log(song.pause())

        }




    })


    pause.addEventListener('click', () => {

        song.pause()
        pause.style.display = 'none'
        play.style.display = 'block'
        document.querySelector('.disc').style.display = 'none'
        // coverimg.classList.remove('dim')

    
    })


  
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
coverimg.style.display = 'none'


currentindx = currentindx + 1
song = new Audio('songs/' + songsarr[currentindx].name)

// coverimg.style.display = 'block'



if (song.paused || song.currentTime <= 0) {

song.play()

play.style.display = 'none'
pause.style.display = 'block'
coverimg.style.display = 'block'
document.querySelector('.disc').style.display = 'block' 




}


}
playsong()

})



//---------------------------------------------------

prev.addEventListener('click', async () => {



if (currentindx > 0) {

song.pause()
pause.style.display = 'none'
play.style.display = 'block'


currentindx = currentindx - 1
song = new Audio('songs/'+ songsarr[currentindx].name)


if (song.paused || song.currentTime <= 0) {



song.play()

play.style.display = 'none'
pause.style.display = 'block'
playtime.value = 0
document.querySelector('.disc').style.display = 'block' 




}

}

playsong()

})






playtime.addEventListener('change', (e) => {

song.currentTime = ( playtime.value * song.duration ) / 100

})


//----------volume------------------

let volume = document.getElementById('volume')
let volslider  = document.getElementById('volslider')

volume.addEventListener('click' , () => {


    volume.style.display = 'none'
    volslider.style.display = 'block'
    
    let vol = song.volume*100
    volslider.value = vol

    setTimeout(()=>{

        volume.style.display = 'block'
        volslider.style.display = 'none'


    },5000)



})



volslider.addEventListener('change' , (e)=>{


  song.volume = volslider.value/100

   


})