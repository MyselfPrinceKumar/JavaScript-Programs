function LoadData(){
    let obj={
        title:"foo",
        body:"bar",
        userId:1
    }
    fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
            'content-type':'application/json'
        }
    }).then(func1=(response)=>{
        return response.json();
    }).then(func2=(result)=>{
        console.log(result);
        // document.write(result);
        for(let i in result){
            //Ye Document me undefind show karega b/c ye server pe data permanently save nii hua h
            document.write(result[i].userId)
            document.write("<br>")
        }
    })
}  