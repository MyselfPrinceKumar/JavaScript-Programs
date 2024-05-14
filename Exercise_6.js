btn1.addEventListener("click", (e) => {
    console.log(e)
    let inp11 = inp1.value;
    let inp21 = inp2.value;
    localStorage.setItem("Rock", JSON.stringify([inp11, inp21]))
})
btn2.addEventListener("click", (e) => {

    console.log(e)
    localStorage.removeItem("Rock") 
})
