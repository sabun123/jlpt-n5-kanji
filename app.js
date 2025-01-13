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
    }

    initializeEventListeners() {
        this.themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
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
    
        organizedReadings.forEach(reading => {
            const button = document.createElement('button');
            button.className = 'reading-option';
            button.textContent = reading;
            
            // Add a data attribute to identify reading type
            button.dataset.readingType = reading.match(/[ァ-ン]/) ? 'onyomi' : 'kunyomi';
            
            button.addEventListener('click', () => this.handleReadingSelection(button, reading));
            this.readingsElement.appendChild(button);
        });
    }

    handleReadingSelection(button, reading) {
        if (button.classList.contains('disabled')) return;

        if (this.correctReadings.has(reading)) {
            button.classList.add('correct', 'disabled');
            this.selectedReadings.add(reading);
            
            if (this.selectedReadings.size === this.correctReadings.size) {
                this.successIndicator.classList.remove('hidden');
                setTimeout(() => this.showNextKanji(), 1000);
            }
        } else {
            button.classList.add('incorrect');
            setTimeout(() => button.classList.remove('incorrect'), 500);
        }
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new KanjiGame(kanjiData);
});