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
            "We need to think outside the box",
            "Let's run it up the flagpole",
            "We need to get all our ducks in a row",
            "Let's touch base on this later",
            "Let's not boil the ocean",
            "We need to get buy-in from leadership",
            "Let's take a holistic approach",
            "Let's not open that can of worms just yet",
            "Let's park that for now",
            "Let's peel back the onion",
            "Let's get granular on this",
            "Let's avoid analysis paralysis",
            "Let's blue-sky this for a moment",
            "Let's see if this passes the sniff test",
            "Let's take a helicopter view",
            "Let's not get lost in the weeds"
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
            "We should leverage our collective expertise",
            "Let's ping the team for input",
            "Let's circle the wagons on this",
            "Let's get cross-functional alignment",
            "Let's open the kimono and share transparently",
            "Let's crowdsource some ideas",
            "Let's put our heads together",
            "Let's get this on everyone's radar",
            "Let's keep the lines of communication open",
            "Let's make sure we're rowing in the same direction",
            "Let's build a coalition of the willing"
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
            "We need to deliver value at scale",
            "Let's circle back with actionable insights",
            "Let's double down on our core competencies",
            "Let's pivot as needed",
            "Let's put this into production mode",
            "Let's get boots on the ground",
            "Let's take this to the next level",
            "Let's push the envelope",
            "Let's get this over the finish line",
            "Let's tee this up for success",
            "Let's get this on the fast track",
            "Let's make this a priority action item",
            "Let's get this on the roadmap"
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
            "Let's architect for tomorrow",
            "We're skating to where the puck will be",
            "We're reimagining the art of the possible",
            "We're shifting the paradigm",
            "We're building a best-in-class solution",
            "We're redefining industry standards",
            "We're unlocking new value streams",
            "We're future-casting our roadmap",
            "We're setting the gold standard",
            "We're charting a new course for the industry",
            "We're rewriting the playbook"
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

            // Helper to trim phrase length by about 30%
            function trimPhrase(phrase) {
                // If phrase is long, trim to about 70% of its words
                const words = phrase.split(' ');
                if (words.length > 10) {
                    return words.slice(0, Math.ceil(words.length * 0.7)).join(' ') + (phrase.endsWith('.') ? '' : '...');
                }
                return phrase;
            }

            if (complexity < 0.3) {
                // Simple: Single phrase
                const allPhrases = [
                    ...this.strategicPhrases,
                    ...this.collaborativePhrases,
                    ...this.actionPhrases,
                    ...this.visionaryPhrases
                ];
                slang = trimPhrase(this.getRandomElement(allPhrases));
            } else {
                // Only one phrase per output, but optionally add a context for variety
                const allPhrases = [
                    ...this.strategicPhrases,
                    ...this.collaborativePhrases,
                    ...this.actionPhrases,
                    ...this.visionaryPhrases
                ];
                let phrase = trimPhrase(this.getRandomElement(allPhrases));
                // 40% chance to add a context for flavor
                if (Math.random() < 0.4) {
                    const connector = this.getRandomElement(this.connectors);
                    const context = this.getRandomElement(this.contexts);
                    phrase = `${phrase} ${connector} ${context}`;
                }
                slang = phrase;
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

            // Final trim if too long (over 18 words)
            let words = slang.split(' ');
            if (words.length > 18) {
                slang = words.slice(0, 13).join(' ') + '...';
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
