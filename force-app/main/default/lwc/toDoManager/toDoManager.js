import { LightningElement, track } from 'lwc';

export default class ToDoManager extends LightningElement {
    @track time = "04:17 PM";
    @track greeting = "Hola holita";
    @track todos = [];
    
    connectedCallback(){
        this.getTime();

        setInterval (() => {
            this.getTime();

        }, 1000 * 60);
    }

    getTime(){
        const date = new Date();
        const hour = date.getHours();
        const min = date.getMinutes();

        this.time = `${this.getHour(hour)}:${this.getDoubleDigit(min)} ${this.getMidDay(hour)}`;

        this.setGreeting(hour);
    }

    getHour(hour){
        return hour === 0 ? 12 : hour > 12 ? (hour-12) : hour;
    }

    getMidDay(hour){
        return hour>=12 ? "PM" : "AM";
    }

    getDoubleDigit(digit){
        return digit<10 ? "0"+digit : digit;
    }

    setGreeting(hour){
        if(hour < 12){
            this.greeting = "Buenos días vecinito";
        } else if(hour >= 12 && hour < 17){
            this.greeting = "Buenas tardes vecinito";
        } else {
            this.greeting = "Buenas noches vecinito";
        }
    }

    addTodoHandler(){
        const inputBox = this.template.querySelector("lightning-input");
        console.log('current value ', inputBox.value);

        this.todos.push(inputBox.value);
        inputBox.value = "";
    }
}