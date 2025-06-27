// Corporate Slang Generator JavaScript

class CorporateSlangGenerator {
    constructor() {
        this.strategicPhrases = [
            "Let's take this offline",
            "At the end of the day",
            "Let's circle back on that",
            "It's a work in progress",
            "We're building the plane while flying it",
            "Let's not reinvent the wheel",
            "We need to level-set expectations",
            "Let's put a pin in that",
            "We need to drill down on this",
            "Let's keep this at a high level",
            "We're moving the needle",
            "This is low-hanging fruit",
            "We need to think outside the box"
        ];

        this.collaborativePhrases = [
            "Just to double-click on that",
            "Great question — let's unpack that",
            "Happy to collaborate on this",
            "Open to feedback",
            "Let's align on next steps",
            "Thanks for bringing that up — let's explore further",
            "Let's sync up on this",
            "We should workshop this together",
            "Let's get everyone on the same page",
            "We need to socialize this idea",
            "Let's create some synergy here",
            "We should leverage our collective expertise"
        ];

        this.actionPhrases = [
            "Let's drive this forward",
            "We're in a good place to move the needle",
            "Let's table this for now",
            "We'll take that under advisement",
            "Let's put some guardrails in place",
            "This needs to be scalable",
            "We need to optimize for impact",
            "Let's fast-track this initiative",
            "We should prioritize quick wins",
            "Time to execute on this",
            "Let's operationalize this strategy",
            "We need to deliver value at scale"
        ];

        this.visionaryPhrases = [
            "We're playing the long game",
            "This is a marathon, not a sprint",
            "Let's think big, start small",
            "We're building for the future",
            "We're solving for X, not just patching Y",
            "This is about transformational change",
            "We're disrupting the status quo",
            "Let's innovate at the speed of business",
            "We're creating a paradigm shift",
            "This positions us for exponential growth",
            "We're future-proofing our approach",
            "Let's architect for tomorrow"
        ];

        this.connectors = [
            "and",
            "so we can",
            "which means",
            "because",
            "while we",
            "as we",
            "to ensure",
            "given that",
            "considering",
            "with the goal of"
        ];

        this.contexts = [
            "delivering value",
            "driving impact",
            "maximizing ROI",
            "ensuring stakeholder alignment",
            "optimizing for growth",
            "maintaining competitive advantage",
            "building sustainable solutions",
            "creating win-win scenarios",
            "fostering innovation",
            "streamlining processes",
            "enhancing customer experience",
            "scaling our operations"
        ];

        this.init();
    }

    init() {
        this.generateBtn = document.getElementById('generate-btn');
        this.copyBtn = document.getElementById('copy-btn');
        this.generatedText = document.getElementById('generated-text');
        
        this.generateBtn.addEventListener('click', () => this.generateSlang());
        this.copyBtn.addEventListener('click', () => this.copyToClipboard());
    }

    getRandomElement(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    generateSlang() {
        // Add loading state
        this.generateBtn.textContent = '🎯 Generating...';
        this.generateBtn.disabled = true;

        setTimeout(() => {
            let slang = '';
            const complexity = Math.random();

            if (complexity < 0.3) {
                // Simple: Single phrase
                const allPhrases = [
                    ...this.strategicPhrases,
                    ...this.collaborativePhrases,
                    ...this.actionPhrases,
                    ...this.visionaryPhrases
                ];
                slang = this.getRandomElement(allPhrases);
            } else if (complexity < 0.7) {
                // Medium: Two phrases connected
                const phrase1 = this.getRandomElement([
                    ...this.strategicPhrases,
                    ...this.collaborativePhrases
                ]);
                const connector = this.getRandomElement(this.connectors);
                const phrase2 = this.getRandomElement([
                    ...this.actionPhrases,
                    ...this.visionaryPhrases
                ]);
                
                slang = `${phrase1} ${connector} ${phrase2.toLowerCase()}`;
            } else {
                // Complex: Multiple phrases with context
                const phrase1 = this.getRandomElement(this.strategicPhrases);
                const connector1 = this.getRandomElement(this.connectors);
                const phrase2 = this.getRandomElement(this.actionPhrases);
                const connector2 = this.getRandomElement(['while', 'as we', 'to ensure']);
                const context = this.getRandomElement(this.contexts);
                
                slang = `${phrase1} ${connector1} ${phrase2.toLowerCase()} ${connector2} ${context}`;
            }

            // Add some variety with sentence starters
            const starters = [
                "I think we should",
                "Moving forward,",
                "To be honest,",
                "From a strategic standpoint,",
                "Given our current position,",
                "Looking ahead,",
                ""
            ];

            if (Math.random() > 0.4) {
                const starter = this.getRandomElement(starters);
                if (starter) {
                    slang = `${starter} ${slang.toLowerCase()}`;
                }
            }

            // Ensure proper capitalization
            slang = slang.charAt(0).toUpperCase() + slang.slice(1);
            
            // Add ending punctuation
            if (!slang.endsWith('.') && !slang.endsWith('!')) {
                slang += '.';
            }

            this.displaySlang(slang);
            this.generateBtn.textContent = '🎯 Generate Corporate Slang';
            this.generateBtn.disabled = false;
        }, 500);
    }

    displaySlang(text) {
        this.generatedText.classList.remove('animate', 'active');
        
        setTimeout(() => {
            this.generatedText.textContent = text;
            this.generatedText.classList.add('animate', 'active');
            this.copyBtn.style.display = 'inline-block';
        }, 100);
    }

    async copyToClipboard() {
        try {
            await navigator.clipboard.writeText(this.generatedText.textContent);
            
            // Show feedback
            const originalText = this.copyBtn.textContent;
            this.copyBtn.textContent = '✅ Copied!';
            this.copyBtn.style.background = '#10b981';
            this.copyBtn.style.color = 'white';
            this.copyBtn.style.borderColor = '#10b981';
            
            setTimeout(() => {
                this.copyBtn.textContent = originalText;
                this.copyBtn.style.background = 'transparent';
                this.copyBtn.style.color = '#667eea';
                this.copyBtn.style.borderColor = '#667eea';
            }, 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
            
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = this.generatedText.textContent;
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            
            try {
                document.execCommand('copy');
                this.copyBtn.textContent = '✅ Copied!';
                setTimeout(() => {
                    this.copyBtn.textContent = '📋 Copy to Clipboard';
                }, 2000);
            } catch (err) {
                console.error('Fallback copy failed: ', err);
            }
            
            document.body.removeChild(textArea);
        }
    }
}

// Initialize the generator when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new CorporateSlangGenerator();
});

// Add some fun easter eggs
document.addEventListener('keydown', (e) => {
    // Secret shortcut: Ctrl/Cmd + Space to generate
    if ((e.ctrlKey || e.metaKey) && e.code === 'Space') {
        e.preventDefault();
        document.getElementById('generate-btn').click();
    }
});

// Add some professional sound effects (optional)
function playClickSound() {
    // Create a subtle click sound using Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

// Add click sound to button (if user interacts first - required for autoplay policies)
document.addEventListener('click', () => {
    try {
        playClickSound();
    } catch (e) {
        // Ignore audio errors
    }
}, { once: true });
