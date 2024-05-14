
LoadTime=()=>{
    let d= new Date();
    let h=d.getHours();
    let m=d.getMinutes();
    let s=d.getSeconds();
    let ampm;
    if (h>=12) {
        ampm="PM";
    }
    else{
        ampm="AM";
    }
    console.log(h+":"+m+":"+s+"  "+ampm);
    // console.log(d);
    document.getElementsByClassName("clock")[0].innerHTML=(h+":"+m+":"+s+"  "+ampm);
}
// LoadTime();
