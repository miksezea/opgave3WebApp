Vue.createApp({
    data() {
        return {
            inputWord: '',
            words: [],
            error: ""
        }
    },
    methods: {
        submitWord() {
            console.log("Show " + this.inputWord + " " + this.inputWord.length)
            if (this.inputWord == null || this.inputWord.trim().length == 0)
            {
                this.error = "No word"
                this.words = []
            }
            else
            {
                this.words.push({
                    original: this.inputWord,
                    lowercase: this.inputWord.toLowerCase(),
                    uppercase: this.inputWord.toUpperCase(),
                    capitalized: this.capitalize(this.inputWord),
                    endCapitalized: this.endCapitalize(this.inputWord),
                    reversed: this.reverse(this.inputWord)
                })
            }
            this.inputWord = ''
        },
        capitalize(word) {
            return word.charAt(0).toUpperCase() + word.slice(1)
        },
        endCapitalize(word) {
            return word.slice(0, -1) + word.slice(-1).toUpperCase()
        },
        reverse(word) {
            return word.split('').reverse().join('')
        }
    }
}).mount("#app")