
let play = document.querySelector('#play')
let pause = document.querySelector('#pause')
let prev = document.querySelector('#prev')
let next = document.querySelector('#next')
let playtime = document.querySelector('#playtime')
let coverimg = document.querySelector('.coverimg')
let title = document.querySelector('#title')
let menu = document.querySelector('#menu')
let playlists = document.querySelector('.playlists')
let songslist = document.querySelector('.songs')
let songslistadd = ''



let songsarr = [{name:'People-You-Know-Selena-Gomez.mp3',coverimg:'https://i.ytimg.com/vi/IP17UBlBFBo/maxresdefault.jpg'},{name:'Starboy-Slowed-Reverb.mp3',coverimg:'https://i.ytimg.com/vi/JGsgHHV0WGI/maxresdefault.jpg'}, { name: 'Time-Traveller(PagalWorldl).mp3', coverimg: 'https://i.scdn.co/image/ab67616d0000b27312688eea38599b12629a5f57' },{ name: "Mi-Amor(PagalWorldl).mp3", coverimg: 'https://i.ytimg.com/vi/HYb4FGDTBmw/maxresdefault.jpg' },{name:'tu-hai-kahaan.mp3',coverimg:'https://i.ytimg.com/vi/AX6OrbgS8lI/sddefault.jpg'},{name:'Way-Down-We-Go(PagalWorldl).mp3',coverimg:'https://pbs.twimg.com/media/F09LH8QXsAUGYIx?format=jpg&name=large'}]



var currentindx = 0

var song = new Audio('songs/' + songsarr[currentindx].name)

function showplaylist(){

    songsarr.forEach((song,indx)=>{

        // console.log(indx)
    
        songslistadd += `<div id='${indx}'  class="song"><img id='${indx}' src="${song.coverimg}" alt=""><h1 id='${indx}'>#${indx+1} ${song.name.replace('.mp3','')}</h1></div>`
    
    })

    songslist.innerHTML = songslistadd

    
}
showplaylist()


function playlistsongsplay(){
    let songs = document.querySelectorAll('.song')
    
    songs.forEach((elem) => {

        // console.log(elem.)

        elem.addEventListener('click',(e) => {

            song.pause()

            currentindx = Number.parseInt(e.target.id)
            
            // console.log(typeof currentindx)
            song = new Audio('songs/' + songsarr[currentindx].name)
            playsong()
        
            
        if (song.paused || song.currentTime <= 0) {
        
           
            playlists.style.display = 'none'
            menu.classList.replace('ri-menu-4-line','ri-menu-line')
            play.style.display = 'none'
            pause.style.display = 'block'
            coverimg.style.display = 'block'
            document.querySelector('.disc').style.display = 'block' 
            song.play()
            
            
            
            
            }
            
            

        })
     
    })

}

playlistsongsplay()



//------------FUNCTION TO PLAY SONGS-----------------------

function playsong() {

    // playtime.value = '0'

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
//    console.log((song.currentTime/song.duration)*100)

playtime.value = progress

if (song.currentTime === song.duration){

    currentindx += 1
    song = new Audio('songs/' + songsarr[currentindx].name)
    playsong()

    
if (song.paused || song.currentTime <= 0) {

   
    
    play.style.display = 'none'
    pause.style.display = 'block'
    coverimg.style.display = 'block'
    document.querySelector('.disc').style.display = 'block' 
    song.play()
    
    
    
    
    }
    

}



})





}

playsong()


//---------------endfunc---------------------------------------------------------------------

next.addEventListener('click',  () => {

// song.pause()
let indx = currentindx + 1
if(indx<=songsarr.length-1){
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
playtime.style.opacity = 0

if (song.played){  

    setTimeout(() => {

        playtime.style.opacity = 1

    },500)

}

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

    playtime.style.opacity = 0

song.play()

play.style.display = 'none'
pause.style.display = 'block'
playtime.value = 0
document.querySelector('.disc').style.display = 'block' 


if (song.played){

    setTimeout(() =>  {

        playtime.style.opacity = 1

    },500)

  


}


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



menu.addEventListener('click',() => {

if (playlists.style.display == 'block'){

    playlists.style.display = 'none'
    playlists.classList.add('playlistanim')
    menu.classList.replace('ri-menu-4-line','ri-menu-line')
  
    

}

else{

    playlists.style.display = 'block'
    playlists.classList.add('playlistanim')
  
    menu.classList.replace('ri-menu-line','ri-menu-4-line')
}


})

 
 
