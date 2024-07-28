// Function to release balloons
function releaseBalloons() {
    const container = document.getElementById('balloons-container');
    for (let i = 0; i < 5; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        var rgb = getRandomColor();
        balloon.style.backgroundColor = rgb;
        balloon.style.color = rgb;
        const inset = 'inset'; // Ensure inset is defined or replaced with 'inset'
        balloon.style.boxShadow = `${inset} -4px -8px 28px orangered`;
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDuration = `${Math.random() * 3 + 3}s`;
        container.appendChild(balloon);
    }
}

// Function to get a random color
function getRandomColor() {
    const colors = ['#ff6f61', '#ff9f80', '#ffb2a3', '#ffd1b2', '#ffe0cc'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Create canvas and append it to the body once
const myCanvas = document.createElement('canvas');
myCanvas.className = 'confetti-canvas';
document.body.appendChild(myCanvas);

let myConfetti = confetti.create(myCanvas, { resize: true });

// Function to start or add to the confetti effect
function startConfetti() {
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;

    // Create a burst of confetti
    myConfetti({
        particleCount: 500, // Number of particles per burst
        angle: 90,
        spread: 80,
        origin: { x: 0.5, y: 0.8 }
    });
}

// Function to play the first audio
function playAudio1() {
    var audio1 = document.getElementById('background-audio-1');
    audio1.currentTime = 0; // Restart audio from the beginning
    audio1.play();
    audio1.loop = false; // Ensure the audio does not loop
}

// Function to play the second audio
function playAudio2() {
    var audio2 = document.getElementById('background-audio-2');
    audio2.play();
    audio2.loop = true; // Loop the audio
}

// Add event listener to the button
document.getElementById('celebrate').addEventListener('click', function () {
    releaseBalloons(); // Release balloons
    startConfetti(); // Start confetti
    playAudio1();    // Play the first audio (non-looped)

    // Check if the second audio is already playing to prevent restarting it
    var audio2 = document.getElementById('background-audio-2');
    if (audio2.paused) {
        playAudio2(); // Play the second audio (looped) if it's not already playing
    }
});
