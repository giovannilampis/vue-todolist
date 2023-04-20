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

                this.todos.push( {text: this.textTask, done: false} )

                this.textTask = ''

                this.error = false
                
            } else { 
                
                this.error = true
            
                this.textTask = ''
            }

        },

        deleteTask(i){
            this.todos.splice( i, 1 )
        },

        withdrawText(i){

            if(this.todos[i].done === true){
                this.todos[i].done = false
            } else {this.todos[i].done = true}
            
        }

    }
}).mount("#app")