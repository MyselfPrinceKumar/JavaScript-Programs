function loadData(){

    let xhttp=new XMLHttpRequest();
    // xhttp.open("GET","prince.txt",true);
    xhttp.open("GET","https://jsonplaceholder.typicode.com/users",true);
    xhttp.onreadystatechange=function(){
        if (this.readyState==4 &&this.status==200) {
            document.getElementById("demo").innerHTML=this.responseText;
            console.log(this.responseText);
        }
        else if (this.readyState==4 && this.status==404) {
            console.log("File Not Found")
        }
        else if (this.readyState==4 && this.status==204) {
            console.log("No Content")
        }
    }
    xhttp.send();
}