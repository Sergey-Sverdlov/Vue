let vm = new Vue({
    el: '#app',
    data: {
        array: [],
        min: 1,
        max: 100,
        count: 1,
        checkequal: true,

    },
    methods: {
        generateNumber: function() {
            this.array = [];
            for (let i = 0; i < this.count; i++) {
                this.number = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
                if (this.checkequal) {
                    if (this.count > this.max - this.min) {
                        alert("Невозможно сгенерировать числа без повторения")
                        return
                    }
                    else {
                        while (this.array.indexOf(this.number) > -1) {
                            this.number = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
                        }
                        this.array.push(this.number);
                    }

                }
                else {
                    this.array.push(this.number);
                }
            }
        }
    },
    watch: {
        count(val) {
            if (val < 1) {
                this.count = 1;
            }
        }
    }
})
