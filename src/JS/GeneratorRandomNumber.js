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
            if (this.min > this.max) {
                this.min += this.max;
                this.max = this.min - this.max;
                this.min = this.min - this.max;
            }

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
        },
        AnimationStart: function (el) {
            el.style.opacity = 0
            el.style.transformOrigin = 'left'
        },
        enter: function (el, done) {
            Velocity(el, { opacity: 1, fontSize: '3.4em' }, { duration: 300 })
            Velocity(el, { fontSize: '3em' }, { complete: done })
        },
        AnimationFinish: function (el, done) {
            Velocity(el, { translateX: '15px', rotateZ: '50deg', opacity: 0 }, { duration: 500 })
            Velocity(el, { rotateZ: '100deg' }, { complete: done })
            Velocity(el, {
                rotateZ: '100deg',
                translateY: '50px',
                translateX: '70px',
                opacity: 0
            },  { complete: done })
        },
    },

    watch: {
        count(val) {
            if (val < 1) {
                this.count = 1;
            }
        }
    }
})
