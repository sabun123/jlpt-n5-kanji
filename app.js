class KanjiGame {
    constructor(kanjiData) {
        this.kanjiData = kanjiData;
        this.currentKanji = null;
        this.correctReadings = new Set();
        this.selectedReadings = new Set();
        
        this.kanjiElement = document.getElementById('currentKanji');
        this.readingsElement = document.getElementById('readings');
        this.successIndicator = document.getElementById('success-indicator');
        this.themeToggle = document.getElementById('themeToggle');

        // Footer copyright
        const currentYear = new Date().getFullYear();
        const copyrightYear = document.getElementById('copyright-year');
        copyrightYear.textContent = currentYear > 2025 ? `2025-${currentYear}` : '2025';
        
        this.initializeEventListeners();
        this.showNextKanji();

        // Add ARIA attributes to kanji display
        this.kanjiElement.setAttribute('role', 'region');
        this.kanjiElement.setAttribute('aria-label', 'Current kanji character');
        this.readingsElement.setAttribute('role', 'group');
        this.readingsElement.setAttribute('aria-label', 'Kanji readings options');
    }

    initializeEventListeners() {
        this.themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            this.themeToggle.textContent = document.body.classList.contains('dark-mode') ? '暗' : '明';
        });
    }

    getRandomKanji() {
        return this.kanjiData[Math.floor(Math.random() * this.kanjiData.length)];
    }

    getAllPossibleReadings() {
        return this.kanjiData.reduce((acc, kanji) => {
            kanji.readings.onyomi.forEach(reading => acc.add(reading));
            kanji.readings.kunyomi.forEach(reading => acc.add(reading));
            return acc;
        }, new Set());
    }

    getWrongReadings(count) {
        const allReadings = Array.from(this.getAllPossibleReadings())
            .filter(reading => !this.correctReadings.has(reading));
        const shuffled = allReadings.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    showNextKanji() {
        this.currentKanji = this.getRandomKanji();
        this.correctReadings = new Set([
            ...this.currentKanji.readings.onyomi,
            ...this.currentKanji.readings.kunyomi
        ]);
        this.selectedReadings = new Set();
        
        this.kanjiElement.textContent = this.currentKanji.kanji;
        // Add aria-label with meaning for screen readers
        this.kanjiElement.setAttribute('aria-label', 
            `Current kanji: ${this.currentKanji.kanji}, meaning: ${this.currentKanji.meaning}`);
        
        this.successIndicator.classList.add('hidden');
        
        this.displayReadingOptions();
    }

    displayReadingOptions() {
        const allReadings = [
            ...Array.from(this.correctReadings),
            ...this.getWrongReadings(4)
        ].sort(() => 0.5 - Math.random());
    
        this.readingsElement.innerHTML = '';
        
        // Create separate containers for onyomi and kunyomi
        const onyomiReadings = allReadings.filter(reading => 
            reading.match(/[ァ-ン]/)); // Check for katakana
        const kunyomiReadings = allReadings.filter(reading => 
            reading.match(/[ぁ-ん]/)); // Check for hiragana
    
        // Sort readings to ensure consistent layout
        onyomiReadings.sort();
        kunyomiReadings.sort();
        
        // Combine them back maintaining the separation
        const organizedReadings = [...onyomiReadings, ...kunyomiReadings];
    
        organizedReadings.forEach((reading, index) => {
            const button = document.createElement('button');
            button.className = 'reading-option';
            
            // Wrap text in span for hover scaling
            const textSpan = document.createElement('span');
            textSpan.textContent = reading;
            textSpan.style.display = 'inline-block';
            textSpan.style.transition = 'transform 0.3s ease';
            button.appendChild(textSpan);
            
            const readingType = reading.match(/[ァ-ン]/) ? 'onyomi' : 'kunyomi';
            button.dataset.readingType = readingType;
            
            // Add accessibility attributes
            button.setAttribute('role', 'button');
            button.setAttribute('aria-label', 
                `${readingType} reading: ${reading}`);
            
            // Add keyboard handling
            button.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.handleReadingSelection(button, reading);
                }
            });
            
            button.addEventListener('click', () => 
                this.handleReadingSelection(button, reading));
            
            this.readingsElement.appendChild(button);
        });
    }

    handleReadingSelection(button, reading) {
        if (button.classList.contains('disabled')) return;

        if (this.correctReadings.has(reading)) {
            button.classList.add('correct', 'disabled');
            button.setAttribute('aria-disabled', 'true');
            button.setAttribute('aria-pressed', 'true');
            this.selectedReadings.add(reading);
            
            // Announce correct selection to screen readers
            const announcement = document.createElement('div');
            announcement.setAttribute('role', 'alert');
            announcement.textContent = 'Correct reading!';
            document.body.appendChild(announcement);
            setTimeout(() => announcement.remove(), 1000);

            if (this.selectedReadings.size === this.correctReadings.size) {
                this.successIndicator.classList.remove('hidden');
                this.successIndicator.classList.add('visible');
                this.successIndicator.setAttribute('role', 'alert');
                this.successIndicator.setAttribute('aria-label', 'Correct! Moving to next kanji');
                setTimeout(() => {
                    this.successIndicator.classList.remove('visible');
                    this.showNextKanji();
                }, 1000);
            }
        } else {
            button.classList.add('incorrect');
            // Ensure animation can replay if clicked multiple times
            button.addEventListener('animationend', () => {
                button.classList.remove('incorrect');
            }, { once: true });
            
            // Announce incorrect selection to screen readers
            const announcement = document.createElement('div');
            announcement.setAttribute('role', 'alert');
            announcement.textContent = 'Incorrect reading, try again';
            document.body.appendChild(announcement);
            setTimeout(() => announcement.remove(), 500);
        }
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new KanjiGame(kanjiData);
});