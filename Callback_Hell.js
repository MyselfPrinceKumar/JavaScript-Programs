// fetch name and roll no After 2 second
// fetch Age after another 2 second
// fetch Gender after another 2 second
let fetchData = () => {
    setTimeout(func1 = () => {
        let R0ll_No = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let Name = ["prince", "Rock", "Hero", "John", "Raj", "Abhi"]
        // console.log(R0ll_No);
        for (let i in R0ll_No) {
            console.log(R0ll_No[i]);
        }
        for (let j in Name) {
            console.log(Name[j]);
        }
        setTimeout(func2 = () => {
            let Age = [21, 22, 19, 18, 20]
            for (let k in Age) {
                console.log(Age[k]);
            }
            setTimeout(func3 = () => {
                let Gender = "Male"
                console.log(`The Gender is ${Gender}`);
            }, 2000)
        }, 2000)
    }, 2000)
}
fetchData();