# Goldenlee Livestream Experience — Interactive Concept Prototype

An interactive visual prototype exploring what a distinctive Goldenlee livestream experience could look and feel like. This is a self-contained web-based prototype with no external connections.

## 🎮 Quick Start

### View the Project
Open the `index.html` file in a modern web browser:
1. Download or clone this repository
2. Open `index.html` in your browser (Chrome, Firefox, Safari, or Edge)
3. Use the control buttons at the bottom-left to interact with the prototype

**Direct link:** [View on GitHub Pages](https://goldenlee25.github.io/goldenlee-stream-concept/)

### Features

- **Starting Soon Screen** - Animated countdown with loading bar and mascot
- **Main Livestream Screen** - Gameplay area, webcam section with glitch aura, and chat
- **Subscriber Events** - Test subscriber notifications with glitch effects
- **Glitch Animations** - Digital distortion effects for important events
- **Dark/Green Aesthetic** - Neon green accents on black backgrounds
- **Fully Interactive** - Buttons and keyboard shortcuts for testing

## 🎯 Project Purpose

This prototype demonstrates:
- How a livestream interface can express a brand identity
- The use of glitch effects as an "event language" (calm normally, reactive on important moments)
- Integration of streaming elements (webcam, chat, gameplay, events) into a cohesive visual experience
- A futuristic, digital aesthetic that feels recognizably "Goldenlee"

**This is NOT:** a real streaming tool, Twitch/YouTube integration, or production-ready overlay.

## 🕹️ How to Use

### Control Buttons (Bottom-Left)
- **START STREAM** - Begin countdown from 4:32 to transition from Starting Soon to Main Stream
- **TEST SUBSCRIBER** - Trigger a fake subscriber event with glitch effects
- **TEST GLITCH** - Trigger a glitch effect on the main screen
- **RESET** - Return to Starting Soon screen and reset all values

### Keyboard Shortcuts
- **S** - Start Stream
- **U** - Test Subscriber
- **G** - Test Glitch
- **R** - Reset

### Console Commands (Developer)
Open your browser's developer console (F12) and use:
```javascript
streamDebug.startCountdown()  // Start the countdown
streamDebug.stopCountdown()   // Stop the countdown
streamDebug.testSubscriber()  // Trigger subscriber event
streamDebug.testGlitch()      // Trigger glitch effect
streamDebug.reset()           // Reset everything
streamDebug.state()           // View current state
streamDebug.help()            // Show all commands
```

## 📁 Project Structure

```
goldenlee-stream-concept/
├── index.html          # Main HTML structure
├── style.css           # All styling and animations
├── script.js           # JavaScript interactivity
├── assets/
│   ├── logo.svg        # Goldenlee logo (hexagon design)
│   └── mascot.png      # Mascot character placeholder
└── README.md           # This file
```

## 🎨 Visual Design

### Color Palette
- **Primary Background:** `#0a0a0a` (Black)
- **Accent Green:** `#00ff41` (Neon Green)
- **Secondary Background:** `#1a1a1a` (Dark Gray)
- **Text:** White and light gray

### Key Design Elements

#### Webcam Aura
The webcam is surrounded by a distinctive "digital aura" featuring:
- Soft green glow that pulses
- Scanline effects (subtle horizontal lines)
- Floating particles
- Glows brighter during events

#### Glitch Effects
Used strategically to communicate important moments:
- **Subscriber Event:** Screen shakes, webcam aura intensifies, notification appears
- **General Glitch:** Flash effects and screen distortion
- Always returns to calm state after the event

#### Loading/Countdown
- Animated progress bar that fills from 0-100%
- Countdown timer in MM:SS format
- Percentage display
- Smooth transitions between screens

## 🔧 Customization

### Change Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --accent-green: #00ff41;           /* Change this */
    --primary-bg: #0a0a0a;             /* Or this */
    /* ... other colors ... */
}
```

### Replace Logo
1. Create your logo SVG or PNG
2. Replace `assets/logo.svg` with your file
3. Update image paths in `index.html` if needed

### Replace Mascot
1. Create your mascot image (SVG or PNG recommended)
2. Replace `assets/mascot.png` with your file
3. The mascot can be removed entirely by hiding `.mascot-container` in CSS

### Modify Usernames
Edit the `fakeUsernames` array in `script.js`:
```javascript
const fakeUsernames = [
    'YourUsername1',
    'YourUsername2',
    // ... etc
];
```

### Adjust Animations
Edit keyframes and animation values in `style.css`. For example:
- `@keyframes auraGlow` - Controls webcam aura pulsing
- `@keyframes mascotFloat` - Controls mascot movement
- Animation durations are specified with `animation: name Xseconds`

## 📱 Responsive Design

The prototype is designed primarily for desktop/widescreen displays. It scales reasonably on smaller screens but is optimized for:
- 1920x1080 (Full HD)
- 2560x1440 (2K)
- 3840x2160 (4K)

## 🎬 Animation Behavior

### Starting Soon Screen
1. Logo fades in
2. Mascot scales into view
3. Glow pulses around mascot
4. Countdown and progress bar appear
5. Countdown decrements from 4:32
6. At 0:00, "CONNECTION ESTABLISHED" and transition to main screen

### Main Stream Screen
1. Top bar with logo and "GOLDENLEE LIVE" indicator
2. Left: Webcam with animated glitch aura
3. Center: Gameplay placeholder with subtle scanlines
4. Right: Fictional chat with messages
5. Subscriber event triggers glitch reaction and notification

## 🧪 Testing Subscriber Events

1. Click **START STREAM** (or press S)
2. Wait for countdown (or click **RESET** to skip)
3. Click **TEST SUBSCRIBER** (or press U)
4. Observe:
   - Webcam shakes
   - Gameplay area flashes green
   - Webcam aura glows brighter
   - Notification appears at top-center
   - Random username displayed
   - Message added to chat

## 🔮 Future Enhancement Ideas

### Screens to Add (Not Yet Implemented)
- **BRB Screen** - "CONNECTION PAUSED" while creator takes a break
- **Ending Screen** - "CONNECTION TERMINATED" when stream ends
- **Offline Screen** - Goldenlee-branded offline notification

### Features to Explore
- Sound effects for events (optional)
- More subscriber event variations
- Raid/host notifications
- Donation/tip alerts
- Follower alerts
- Chat highlight animations
- Streaming length timer
- Viewer count display
- Stream title display

### Technical Improvements
- Mobile/tablet view optimization
- Additional color themes
- Animation speed preferences
- Customizable event sounds
- Export as OBS overlay (future)

## 📝 Important Notes

### What This Is NOT
- ❌ Not a real streaming overlay
- ❌ Not connected to Twitch, YouTube, or OBS
- ❌ Not using real subscriber data
- ❌ Not a production-ready tool
- ❌ Not a final brand identity for Goldenlee

### What This IS
- ✅ An experimental creative prototype
- ✅ A visual exploration tool
- ✅ A demonstration of design concepts
- ✅ Fully self-contained (no external dependencies)
- ✅ Easy to customize and modify

## 🎓 For Developers

### Browser Compatibility
- Chrome/Edge: Full support
- Firefox: Full support
- Safari: Full support
- Mobile browsers: Displays but optimized for desktop

### No External Dependencies
This project uses only:
- HTML5
- CSS3 (with animations and gradients)
- Vanilla JavaScript (no frameworks)
- SVG for graphics

### Code Organization
- **HTML:** Clean semantic structure
- **CSS:** Organized by sections with comments
- **JavaScript:** State management + event handlers

## 📄 License

This is a creative prototype project. Feel free to modify and adapt it for your own use.

## 💬 Notes for Collaboration

### The Mascot is Optional
The current mascot is experimental. It can be:
- Easily removed by hiding `.mascot-container`
- Replaced with different artwork
- Adjusted in size, position, or appearance

### Colors Can Change
The neon green accent is the current direction but can be modified:
- Edit CSS variables for quick changes
- Change the entire color scheme if needed

### The Interface Can Evolve
This prototype is designed to be iterated on. You can:
- Add new screens
- Modify animations
- Change layouts
- Add new interactive elements

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/Goldenlee25/goldenlee-stream-concept.git
   cd goldenlee-stream-concept
   ```

2. **Open in browser**
   - Double-click `index.html`, or
   - Use Live Server extension in VS Code, or
   - Run `python -m http.server 8000` and visit `http://localhost:8000`

3. **Start exploring**
   - Click the control buttons
   - Use keyboard shortcuts
   - Open developer console for more commands
   - Modify CSS and JavaScript to customize

## 📞 Questions or Feedback?

This prototype is designed to be understood and modified. All code is well-commented and organized for easy navigation.

---

**Created as an interactive exploration of the Goldenlee brand and livestream experience.**

Made with ❤️ and neon green ✨
