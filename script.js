// ===========================
// STATE MANAGEMENT
// ===========================

const state = {
    currentScreen: 'starting', // 'starting' or 'main'
    isStreamActive: false,
    countdownSeconds: 272, // 4:32 in seconds
    countdownInterval: null,
    progressInterval: null,
    progressPercentage: 0,
};

// ===========================
// DOM ELEMENTS
// ===========================

const startingScreen = document.getElementById('startingScreen');
const mainScreen = document.getElementById('mainScreen');
const progressBar = document.getElementById('progressBar');
const percentageDisplay = document.getElementById('percentage');
const countdownDisplay = document.getElementById('countdownTimer');
const subscriberNotification = document.getElementById('subscriberNotification');
const notificationUsername = document.getElementById('notificationUsername');
const chatMessages = document.getElementById('chatMessages');

// Control buttons
const startBtn = document.getElementById('startBtn');
const testSubBtn = document.getElementById('testSubBtn');
const testGlitchBtn = document.getElementById('testGlitchBtn');
const resetBtn = document.getElementById('resetBtn');

// ===========================
// UTILITY FUNCTIONS
// ===========================

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function updateCountdownDisplay() {
    countdownDisplay.textContent = formatTime(state.countdownSeconds);
}

function updateProgressBar() {
    progressBar.style.width = `${state.progressPercentage}%`;
    percentageDisplay.textContent = `${state.progressPercentage}%`;
}

// ===========================
// SCREEN TRANSITIONS
// ===========================

function switchToScreen(screenName) {
    // Add transition glitch effect
    if (state.currentScreen === 'starting' && screenName === 'main') {
        startingScreen.classList.add('transitioning');
        setTimeout(() => {
            startingScreen.classList.remove('transitioning');
            startingScreen.classList.remove('active');
            mainScreen.classList.add('active');
            state.currentScreen = 'main';
            state.isStreamActive = true;
        }, 400);
    } else {
        startingScreen.classList.remove('active');
        mainScreen.classList.add('active');
        state.currentScreen = screenName;
    }
}

// ===========================
// COUNTDOWN & LOADING LOGIC
// ===========================

function startCountdown() {
    state.countdownSeconds = 272; // Reset to 4:32
    state.progressPercentage = 0;
    updateCountdownDisplay();
    updateProgressBar();

    // Clear any existing intervals
    if (state.countdownInterval) clearInterval(state.countdownInterval);
    if (state.progressInterval) clearInterval(state.progressInterval);

    // Countdown timer
    state.countdownInterval = setInterval(() => {
        state.countdownSeconds--;
        updateCountdownDisplay();

        if (state.countdownSeconds <= 0) {
            clearInterval(state.countdownInterval);
            // Countdown complete - show "CONNECTION ESTABLISHED" and transition
            setTimeout(() => {
                switchToScreen('main');
            }, 500);
        }
    }, 1000);

    // Progress bar
    state.progressInterval = setInterval(() => {
        if (state.progressPercentage < 100) {
            state.progressPercentage++;
            updateProgressBar();
        } else {
            clearInterval(state.progressInterval);
        }
    }, 26); // ~272 iterations for 272 seconds
}

function stopCountdown() {
    if (state.countdownInterval) clearInterval(state.countdownInterval);
    if (state.progressInterval) clearInterval(state.progressInterval);
}

// ===========================
// GLITCH EFFECTS
// ===========================

function triggerGlitchEffect() {
    const webcamContainer = document.querySelector('.webcam-container');
    const gameplayArea = document.querySelector('.gameplay-area');
    const aura = document.querySelector('.webcam-aura');

    // Webcam shake
    webcamContainer.classList.add('glitch-active');
    setTimeout(() => webcamContainer.classList.remove('glitch-active'), 300);

    // Gameplay flash
    gameplayArea.classList.add('glitch-active');
    setTimeout(() => gameplayArea.classList.remove('glitch-active'), 400);

    // Aura intensity
    aura.classList.add('intensity-high');
    setTimeout(() => aura.classList.remove('intensity-high'), 300);
}

// ===========================
// SUBSCRIBER EVENT LOGIC
// ===========================

const fakeUsernames = [
    'ShadowCoder',
    'NeonDreams',
    'PixelWanderer',
    'GoldenFan42',
    'StreamVibes',
    'CyberGhost',
    'LunaEclipse',
    'VortexCode',
    'PhantomVoid',
    'SolarFlare',
    'NovaSync',
    'EchoWave',
    'PrismLight',
    'VenomStrike',
    'ZenithPeak'
];

function getRandomUsername() {
    return fakeUsernames[Math.floor(Math.random() * fakeUsernames.length)];
}

function triggerSubscriberEvent() {
    if (!state.isStreamActive) {
        alert('Stream is not active. Start the stream first.');
        return;
    }

    // Step 1: Trigger glitch effect
    triggerGlitchEffect();

    // Step 2: Generate random username
    const username = getRandomUsername();
    notificationUsername.textContent = username;

    // Step 3: Show notification
    subscriberNotification.classList.remove('active');
    // Trigger reflow to restart animation
    void subscriberNotification.offsetWidth;
    subscriberNotification.classList.add('active');

    // Step 4: Add message to chat
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message';
    messageDiv.innerHTML = `
        <span class="username">${username}</span>
        <span class="message">Thanks for the stream!</span>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Step 5: Automatically remove notification class after animation
    setTimeout(() => {
        subscriberNotification.classList.remove('active');
    }, 3000);
}

// ===========================
// CONTROL BUTTON HANDLERS
// ===========================

startBtn.addEventListener('click', () => {
    if (state.currentScreen === 'starting' && !state.isStreamActive) {
        startCountdown();
    }
});

testSubBtn.addEventListener('click', () => {
    triggerSubscriberEvent();
});

testGlitchBtn.addEventListener('click', () => {
    triggerGlitchEffect();
});

resetBtn.addEventListener('click', () => {
    // Stop all intervals
    stopCountdown();

    // Reset state
    state.currentScreen = 'starting';
    state.isStreamActive = false;
    state.countdownSeconds = 272;
    state.progressPercentage = 0;

    // Reset UI
    updateCountdownDisplay();
    updateProgressBar();
    subscriberNotification.classList.remove('active');

    // Switch screens
    mainScreen.classList.remove('active');
    startingScreen.classList.add('active');

    // Reset chat (keep only default messages)
    chatMessages.innerHTML = `
        <div class="chat-message">
            <span class="username">GoldenFan42</span>
            <span class="message">this stream vibe is different</span>
        </div>
        <div class="chat-message">
            <span class="username">PixelWanderer</span>
            <span class="message">love the aesthetic</span>
        </div>
        <div class="chat-message">
            <span class="username">ShadowCoder</span>
            <span class="message">that webcam border tho</span>
        </div>
        <div class="chat-message">
            <span class="username">NeonDreams</span>
            <span class="message">so clean</span>
        </div>
        <div class="chat-message">
            <span class="username">StreamVibes</span>
            <span class="message">pogggg</span>
        </div>
    `;
});

// ===========================
// KEYBOARD SHORTCUTS
// ===========================

document.addEventListener('keydown', (e) => {
    // Press 'S' to start stream
    if (e.key === 's' || e.key === 'S') {
        startBtn.click();
    }
    // Press 'U' for subscriber test
    if (e.key === 'u' || e.key === 'U') {
        testSubBtn.click();
    }
    // Press 'G' for glitch test
    if (e.key === 'g' || e.key === 'G') {
        testGlitchBtn.click();
    }
    // Press 'R' to reset
    if (e.key === 'r' || e.key === 'R') {
        resetBtn.click();
    }
});

// ===========================
// INITIALIZATION
// ===========================

document.addEventListener('DOMContentLoaded', () => {
    // Set initial display
    updateCountdownDisplay();
    updateProgressBar();

    // You can optionally auto-start the countdown for demonstration
    // Uncomment the line below to auto-start:
    // startCountdown();
});

// ===========================
// OPTIONAL: AUTO-DEMO MODE
// ===========================

// Uncomment this section to have the prototype automatically demo itself
/*
window.addEventListener('load', () => {
    console.log('Goldenlee Stream Concept loaded. Starting demo...');
    
    // Start countdown after 2 seconds
    setTimeout(() => {
        startCountdown();
    }, 2000);

    // Test subscriber event 10 seconds after stream starts
    setTimeout(() => {
        triggerSubscriberEvent();
    }, 12000);

    // Test another subscriber event 15 seconds later
    setTimeout(() => {
        triggerSubscriberEvent();
    }, 27000);
});
*/

// ===========================
// CONSOLE HELPERS (For Development)
// ===========================

window.streamDebug = {
    startCountdown: () => startCountdown(),
    stopCountdown: () => stopCountdown(),
    testSubscriber: () => triggerSubscriberEvent(),
    testGlitch: () => triggerGlitchEffect(),
    reset: () => resetBtn.click(),
    state: () => console.table(state),
    help: () => console.log(`
        Available debug commands:
        - streamDebug.startCountdown()  : Start the countdown
        - streamDebug.stopCountdown()   : Stop the countdown
        - streamDebug.testSubscriber()  : Trigger a subscriber event
        - streamDebug.testGlitch()      : Trigger a glitch effect
        - streamDebug.reset()           : Reset everything
        - streamDebug.state()           : View current state
    `)
};

console.log('Goldenlee Stream Concept Ready. Type streamDebug.help() for commands.');
