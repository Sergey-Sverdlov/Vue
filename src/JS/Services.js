let vm = new Vue({
    el: '#app',
    data: {
        services: [
            {
                name: 'Математика(профиль)',
                price: 8000,
                active: false,
            },
            {
                name: 'Информатика',
                price: 4500,
                active: false,
            },
            {
                name: 'Русский язык',
                price: 7000,
                active: false,
            },
            {
                name: 'География',
                price: 3000,
                active: false,
            },
        ]
    },
    computed: {
        total: function() {
            let price = 0;
            for (let i = 0, n = this.services.length; i < n; i++) {
                if (this.services[i].active) {
                    price += this.services[i].price;
                }
            }
            return price;
        }
    },
    methods: {
        toggleActive: function (s) {
            s.active = !s.active;
        }
    },
})