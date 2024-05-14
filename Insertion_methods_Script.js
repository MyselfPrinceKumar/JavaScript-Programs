// First way to insert Element inside a HTML

// let a=document.getElementsByTagName("div")[0]
// a.innerHTML=a.innerHTML+'<h>Bhag Madharchod </h>';
// document.getElementsByTagName("div")[0].style.color="red"
// document.getElementsByTagName("div")[0].style.backgroundColor="blue"
// document.getElementsByTagName("div")[0].style.fontSize="50px"
// document.getElementsByTagName("div")[0].style.textAlign="center"

// Second way to insert Element inside a HTML this way is more convenient

let a = document.getElementsByTagName('div')[0]
let div = document.createElement('div')
div.innerHTML = '<p>Hellow Worlds!! </p>'
//appent insert the element  at the last
// a.append(div)

//prepend insert the element at the first
// a.prepend(div)

//before insert the element at before the div tag
a.before(div)

// after insert the element at after the div tag
// a.after(div)