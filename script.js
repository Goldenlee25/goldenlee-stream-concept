// ===========================
// STATE MANAGEMENT
// ===========================

const state = {
    currentScreen: 'starting', // 'starting' or 'main'
    isStreamActive: false,
    loadingDuration: 20000, // 20 seconds in milliseconds
    loadingStartTime: null,
    loadingInterval: null,
};

// ===========================
// DOM ELEMENTS
// ===========================

const startingScreen = document.getElementById('startingScreen');
const mainScreen = document.getElementById('mainScreen');
const progressBar = document.getElementById('progressBar');
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

function updateProgressBar() {
    if (!state.loadingStartTime) return;
    
    const elapsed = Date.now() - state.loadingStartTime;
    const progress = Math.min((elapsed / state.loadingDuration) * 100, 100);
    
    progressBar.style.width = `${progress}%`;
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
// LOADING BAR LOGIC
// ===========================

function startLoading() {
    state.loadingStartTime = Date.now();
    state.isStreamActive = false;
    progressBar.style.width = '0%';

    // Clear any existing interval
    if (state.loadingInterval) clearInterval(state.loadingInterval);

    // Update progress bar smoothly
    state.loadingInterval = setInterval(() => {
        updateProgressBar();

        // When bar is full (20 seconds), transition to main screen
        const elapsed = Date.now() - state.loadingStartTime;
        if (elapsed >= state.loadingDuration) {
            clearInterval(state.loadingInterval);
            progressBar.style.width = '100%';
            
            // Transition to main screen after a brief delay
            setTimeout(() => {
                switchToScreen('main');
            }, 500);
        }
    }, 50); // Update every 50ms for smooth animation
}

function stopLoading() {
    if (state.loadingInterval) clearInterval(state.loadingInterval);
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
        startLoading();
    }
});

testSubBtn.addEventListener('click', () => {
    triggerSubscriberEvent();
});

testGlitchBtn.addEventListener('click', () => {
    triggerGlitchEffect();
});

resetBtn.addEventListener('click', () => {
    // Stop loading
    stopLoading();

    // Reset state
    state.currentScreen = 'starting';
    state.isStreamActive = false;
    state.loadingStartTime = null;

    // Reset UI
    progressBar.style.width = '0%';
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
    // Set initial progress bar
    progressBar.style.width = '0%';
});

// ===========================
// CONSOLE HELPERS (For Development)
// ===========================

window.streamDebug = {
    startLoading: () => startLoading(),
    stopLoading: () => stopLoading(),
    testSubscriber: () => triggerSubscriberEvent(),
    testGlitch: () => triggerGlitchEffect(),
    reset: () => resetBtn.click(),
    state: () => console.table(state),
    help: () => console.log(`
        Available debug commands:
        - streamDebug.startLoading()    : Start the 20-second loading bar
        - streamDebug.stopLoading()     : Stop the loading bar
        - streamDebug.testSubscriber()  : Trigger a subscriber event
        - streamDebug.testGlitch()      : Trigger a glitch effect
        - streamDebug.reset()           : Reset everything
        - streamDebug.state()           : View current state
    `)
};

console.log('Goldenlee Stream Concept Ready. Type streamDebug.help() for commands.');
