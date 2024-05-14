/*
class animal {
    constructor(nname) {
        this.name = nname;
    }
    jump() {
        console.log(`${this.name} is Jumping`);
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
    Hang() {
        console.log(`${this.name} is Hanging`);
    }
}
class Monkey extends animal {
    EatBanana() {
        console.log(`${this.name} is Eating Banana`);
    }

    Sleeping() {
        console.log(`${this.name} is Sleeping`);
    }
}
// let r = new animal("Chimpu");
// r.jump();
// r.Hang();
// r.eat();

let rock = new Monkey("Chimpu");
rock.jump();
rock.Hang();
rock.eat();
rock.EatBanana();
rock.Sleeping();
*/
/*
 Understanding super keyword
 super(arguments);  // calls the parent constructor (only inside the constructor)
 super.parentMethod(arguments);  // calls a parent method
*/
class Emloyee {
    constructor(name) {
        this.name = name;
        console.log(`${this.name} is the constructor`)
    }
    Login() {
        console.log(`${this.name} is logged In`)
    }
    LogOut() {
        console.log(`${this.name} is logged Out`)
    }
}
class prince extends Emloyee {
    constructor() {

        super("hello")
        //We can call the methods and constructors of the parent class by using super keyword in the constructor of child class
        super.LogOut();
    }
    RequestLeave(leave) {
        this.leave = leave;
        console.log(`${this.name} Your Leave is Approved for ${this.leave} Days`)
    }
    // @override mrthod
    Login() {
        console.log(`${this.name} is login Request is Failed`)
    }
}
let myEmployee = new prince();
myEmployee.Login();
// myEmployee.LogOut();
myEmployee.RequestLeave(8);