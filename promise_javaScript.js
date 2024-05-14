function demo() {
    let prom = new Promise(func = (resolve, reject) => {
        setTimeout(func2 = () => {

            //If the problem is resolve then execute the resolve block code where resolve is a name of parameter variable 
            resolve(`The Problem is Resolve `);
            //If the problem is Not resolve then execute the reject block code where reject is a name of parameter variable 
            reject(`Error Are occured`);
        }, 2000)
    }).then(func3 = (res) => {
        console.log(res);
        document.getElementsByClassName("demo")[0].innerHTML = res;
    }).catch(func4 = (error) => {
        console.log(error);
        document.getElementsByClassName("demo")[0].innerHTML = error;
    })
    /*
     prom.then(func3=(res)=>{
         console.log(res);
         document.getElementsByClassName("demo")[0].innerHTML=res;
     }).catch(func4=(error)=>{
         console.log(error);
         document.getElementsByClassName("demo")[0].innerHTML=error;
     })
     */
}