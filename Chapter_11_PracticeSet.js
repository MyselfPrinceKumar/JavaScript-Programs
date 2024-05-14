// class cpmplex {
//     constructor(real, imagenary) {
//         this.real = real;
//         this.imagenary = imagenary;
//     }
//     add(num) {
//         this.real = this.real + num.real;
//         this.imagenary = this.imagenary + num.imagenary;
//     }
// }
// let cn1 = new cpmplex(8, 6)
// let cn2 = new cpmplex(2, 4)
// cn1.add(cn2);
// console.log(cn1.real + ":" + cn1.imagenary);
/*
Problem-3. Create a class Student From a class Human
Override the methid and see the changes.
*/
class Human {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log(`${this.name} is Walking`)
    }
    run() {
        console.log(`${this.name} is Running`)

    }

}
class Student extends Human {
    run() {
        console.log(`${this.name} is Not Running`)
    }
}
// let H=new Human("Chimpu");
let H = new Student("Chimpu");
H.run()
let r = 30;
console.log(H instanceof Human)    //true
console.log(H instanceof Student)     //true
console.log(r instanceof Student)      //false
