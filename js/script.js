"use strict"

const { createApp } = Vue

createApp ({
    data() {
        return {

            textTask: '',

            error: false,

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

            if(this.textTask != ''  && this.textTask.length > 3) {

                this.todos.push( {text: this.textTask} )

                this.textTask = ''

                this.error = false
                
            } else { 
                
                this.error = true
            
                this.textTask = ''
            }

        },

        deleteTask(){
            
        }

    }
}).mount("#app")