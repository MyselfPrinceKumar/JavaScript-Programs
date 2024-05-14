class Animal {
    constructor(name) {
        this.name = Animal.Capitalize(name)
    }
    eating() {
        console.log(`${this.name} is walking`)
    }
    static Capitalize(name) {
        // Normally this.name can't used inside the static method 
        return (name.toUpperCase().substr(0, name.length))
    }
}
let A = new Animal("Chimpu");
A.eating();
// We can Access the static method by its class name only
//We can't Access the static method by object name 
console.log(Animal.Capitalize("prince rock"));
