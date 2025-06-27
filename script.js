// Corporate Slang Generator JavaScript - Simplified Version

class CorporateSlangGenerator {
    constructor() {
        // Organize phrases into categories
        this.categories = {
            strategic: [
                "Let's take this offline.",
                "At the end of the day, it's about maximizing the customer value.",
                "Let's circle back on that after the sprint.",
                "It's a work in progress, but we're moving the needle.",
                "We're building the plane while flying it.",
                "Let's not reinvent the wheel here.",
                "We need to level-set expectations moving forward.",
                "Let's put a pin in that for now.",
                "We need to drill down on this issue.",
                "Let's keep this at a high level for the executive summary.",
                "We're moving the needle on key performance indicators.",
                "This is low-hanging fruit we should capitalize on.",
                "We need to think outside the box on this one.",
                "Let's run it up the flagpole and see who salutes.",
                "We need to get all our ducks in a row before the board meeting.",
                "Let's touch base on this later this week.",
                "Let's not boil the ocean with this initiative."
            ],
            collaborative: [
                "Just to double-click on that point for clarity.",
                "Great question — let's unpack that together.",
                "I'm happy to collaborate on this deliverable.",
                "I'm open to feedback on this proposal.",
                "Let's align on next steps before we adjourn.",
                "Thanks for bringing that up — let's explore further.",
                "Let's sync up on this before we jump into solutions.",
                "We should get more customer feedback.",
                "Let's get everyone on the same page for this.",
                "We need to socialize this idea with leadership.",
                "Let's create some synergy between our departments.",
                "We should leverage our collective expertise on this challenge."
            ],
            action: [
                "Let's drive this forward before end of quarter.",
                "We're in a good place to move the needle on this KPI.",
                "This needs to be scalable for enterprise deployment.",
                "We need to optimize for impact and ROI.",
                "Let's fast-track this initiative as a priority.",
                "We should prioritize quick wins in our roadmap.",
                "It's time to execute on this strategy.",
                "Let's operationalize this strategy.",
                "We need to deliver value at scale.",
                "Let's double down on our core competencies.",
                "Let's pivot our approach based on customer feedback.",
                "Let's get boots on the ground for this rollout.",
                "Let's take this to the next level in next quarter."
            ],
            visionary: [
                "We're playing the long game with this investment.",
                "This is a marathon, not a sprint.",
                "Let's think big, start small, and scale fast.",
                "We're building for the future of the industry.",
                "We're solving for X, not just Y.",
                "This is about transformational change across the organization.",
                "We're disrupting the status quo in our market segment.",
                "Let's innovate at the speed of business.",
                "We're creating a paradigm shift in customer experience.",
                "This positions us for exponential growth in emerging markets.",
                "We're future-proofing our business model.",
                "Let's architect for tomorrow's challenges, not just today's.",
                "We're skating to where the puck will be."
            ],
            unique: [
                "Let's put this in our parking lot for next sprint.",
                "We need to be strategic about resource allocation.",
                "Let's create a V-team to tackle this challenge.",
                "Let's take a step back and look at the big picture.",
                "We need to find the gap in the market.",
                "Let's make sure we're not leaving money on the table.",
                "I'll circle back with you offline about this matter.",
                "We're witnessing a perfect storm of opportunity.",
                "Let's focus on the north star metric.",
                "We need to break down these organizational silos.",
                "Let's dive deeper into the analytics before making a decision.",
                "We need to find the sweet spot between quality and speed.",
                "Let's test this hypothesis with our target demographic.",
                "We need to right-size our expectations for this quarter."
            ],
            caughtOffGuard: [
                "Could you repeat the question? I was on mute.",
                "I was having connectivity issues, but I'm back now.",
                "Let's take this conversation offline and circle back.",
                "That's a great point, we should definitely leverage that.",
                "I think we need to zoom out and look at the bigger picture here.",
                "Can we parking lot this for a deeper dive later?",
                "Let's not get too granular in this forum.",
                "I hear what you're saying, and I think we need to ideate on that.",
                "We should really cascade this information to all stakeholders.",
                "I was actually just about to touch on that point.",
                "Let's put a pin in this and marinate on it overnight.",
                "We need to be more agile in our thought process.",
                "That's exactly what I was thinking, but you said it better.",
                "Let's not get stuck in the weeds here, folks.",
                "We should really do a temperature check with the team.",
                "I may need to hop off soon, but please keep me in the loop.",
                "Can we take a step back and assess the landscape?",
                "Let's avoid analysis paralysis and just pull the trigger.",
                "I think we're all saying the same thing differently.",
                "We should really evaluate the cost-benefit ratio here."
            ]
        };

        // Track the last used category
        this.lastUsedCategory = null;
        this.init();
    }

    init() {
        this.generateBtn = document.getElementById('generate-btn');
        this.copyBtn = document.getElementById('copy-btn');
        this.generatedText = document.getElementById('generated-text');
        
        this.generateBtn.addEventListener('click', () => this.generateSlang());
        this.copyBtn.addEventListener('click', () => this.copyToClipboard());
    }

    getRandomCategory() {
        const categoryNames = Object.keys(this.categories);
        let availableCategories = categoryNames;
        
        // Filter out the last used category if it exists
        if (this.lastUsedCategory) {
            availableCategories = categoryNames.filter(cat => cat !== this.lastUsedCategory);
        }
        
        // Pick a random category from available ones
        const randomIndex = Math.floor(Math.random() * availableCategories.length);
        const selectedCategory = availableCategories[randomIndex];
        
        // Update the last used category
        this.lastUsedCategory = selectedCategory;
        
        return selectedCategory;
    }

    generateSlang() {
        // Add loading state
        this.generateBtn.textContent = '🎯 Generating...';
        this.generateBtn.disabled = true;

        setTimeout(() => {
            // Pick a random category (different from last time)
            const category = this.getRandomCategory();
            
            // Pick a random phrase from the selected category
            const phrases = this.categories[category];
            const randomIndex = Math.floor(Math.random() * phrases.length);
            const slang = phrases[randomIndex];
            
            this.displaySlang(slang);
            this.generateBtn.textContent = 'Generate Corporate Slang';
            this.generateBtn.disabled = false;
        }, 300);
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

// Add keyboard shortcut
document.addEventListener('keydown', (e) => {
    // Secret shortcut: Ctrl/Cmd + Space to generate
    if ((e.ctrlKey || e.metaKey) && e.code === 'Space') {
        e.preventDefault();
        document.getElementById('generate-btn').click();
    }
});
