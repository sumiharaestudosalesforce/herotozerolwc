import { LightningElement } from 'lwc';

export default class HelloConditionalRendering extends LightningElement {
    isVisible = false
    name

    handleClick(){
        this.isVisible = true
    }

    changeHandle(event){
        this.name = event.target.value
    }

    get helloMethod(){
        return this.name === 'hello'
    }
}