"use strict"

const { createApp } = Vue

createApp ({
    data() {
        return {

            textTask: '',

            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]

        }
    },

    created(){

    },

    methods: {

        addTask(){
            this.todos.push(this.textTask)
        }

    }
}).mount("#app")