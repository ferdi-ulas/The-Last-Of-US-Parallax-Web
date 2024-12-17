// Get all items with the class 'allowActive'
let items = document.querySelectorAll('.allowActive');

// Get the container that has the class 'container-fuild'
let containerFuild = document.querySelector('.container-fuild');

// Add scroll event listener to the container
containerFuild.addEventListener('scroll', () => {
    // Loop through all items with the 'allowActive' class
    items.forEach(item => {
        // If the item is in the viewport, add the 'active' class
        if (item.offsetTop - containerFuild.scrollTop < window.innerHeight * (3 / 4)) {
            item.classList.add('active');
        } else {
            // Otherwise, remove the 'active' class
            item.classList.remove('active');
        }
    });
});

// Get the play button and audio element
const playButton = document.getElementById('playMusicButton');
const audioElement = document.getElementById('backgroundMusic');

// Track the music playback state
let isPlaying = false;

// Add event listener to the play button
playButton.addEventListener('click', () => {
    if (!isPlaying) {
        // Play the music and update the button text
        audioElement.play();
        playButton.textContent = "⏸ The Last Of Us Play";
        isPlaying = true;
    } else {
        // Pause the music and update the button text
        audioElement.pause();
        playButton.textContent = "▶ The Last Of Us Music Play";
        isPlaying = false;
    }
});
