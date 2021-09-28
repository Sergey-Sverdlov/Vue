"use strict"

function check_operation(array, string) {
    string = string.toString();
    string = string.slice(1);
    for (let i = 0; i < array.length; i++) {
        if (string.indexOf(array[i]) > -1) {
            return true;
        }
    }
    return false;
}


var vm = new Vue({
    el: '#app',
    data: {
        operations: ['+', '-', '*', '/', '%', '(', ')'],
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
        result: '',
        array: [],
        showOperations: true,
    },
    computed: {
        reactiveAnswer: function () {
            if (this.result === '' || check_operation(this.operations,this.result) == false) {
                return '';
            }
            try {
                return this.result + ' = ' + eval(this.result);
            } catch (e) {
                return this.result
            }
        }
    },
    methods: {
        Reset: function () {
            this.result = '';
        },
        input: function (char) {
            this.result = this.result.toString();
            this.result += char;
        },
        calc: function () {
            try {
                eval(this.result);
            } catch (e) {
                alert("Введите корректный запрос");
                return ;
            }

            if (this.reactiveAnswer !== '') {
                this.array.splice(0, 0, this.result + '=' + eval(this.result));
            }

            this.result = eval(this.result);


        },
    }
})

$('body').on('input', '.input-number', function(){
    this.value = this.value.replace(/[^0-9\.\+\-\*\/\%\(\)]/g, '');
});