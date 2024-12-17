let items = document.querySelectorAll('.allowActive');
let containerFuild = document.querySelector('.container-fuild');

containerFuild.addEventListener('scroll', ()=>{
    items.forEach(item=>{
        if(item.offsetTop - containerFuild.scrollTop < window.innerHeight*(3/4)){
            item.classList.add('active');
        }
        else{
            item.classList.remove('active');
        }
    })
})

const playButton = document.getElementById('playMusicButton');
const audioElement = document.getElementById('backgroundMusic');
let isPlaying = false;

playButton.addEventListener('click', () => {
    if (!isPlaying) {
        audioElement.play();
        playButton.textContent = "⏸ The Last Of Us Play";
        isPlaying = true;
    } else {
        audioElement.pause();
        playButton.textContent = "▶ The Last Of Us Music Play";
        isPlaying = false;
    }

   
});

