class Counter{
    value = 0;
    constructor() {
        document.getElementById("counter").innerHTML = this.value;
    }
    increase() {
        this.value += 1;
        document.getElementById("counter").innerHTML = this.value;
    }

    resetCounter(){
        this.value = 0;
        document.getElementById("counter").innerHTML = this.value;
    }
  }
c = new Counter();

function increase(){
    c.increase();
}

function reset(){
    c.resetCounter();
}