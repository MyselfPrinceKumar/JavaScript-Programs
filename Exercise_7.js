/*
Create a JavaScript Program that capable of Generating a Password 
Which contains Atleast one lowercase character, One Special Characters
And one Digit.Create a Password class to Achieve the Same.
*/

class Password {
    constructor() {
        this.pass = "";
    }

    generatePassword(len) {
        let chars = "abcdefghijklmnopqrstuvwxyz"
        let numbers = "1234567890";
        let special_chars = "!@#$%^&*()";
        // console.log(chars.length)
        // console.log(chars[7])
        // console.log(numbers.length)
        // console.log(special_chars.length)
        // console.log(chars[Math.floor(Math.random()*chars.length)])
        if (len < 3) {
            console.log("Password Should Must Be Atleast 3 characters")
        }
        else {
            let i = 0;
            while (i < len) {
                this.pass += chars[Math.floor(Math.random() * chars.length)];
                this.pass += numbers[Math.floor(Math.random() * numbers.length)];
                this.pass += special_chars[Math.floor(Math.random() * special_chars.length)];
                i += 3;
            }
            this.pass = this.pass.substring(0, len)
            return this.pass;
        }
    }
}
let p = new Password();
// p.generatePassword();
console.log(p.generatePassword(7))