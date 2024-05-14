// We can search by the class name like this index passing is required
// document.getElementsByClassName("chapter7")[0].style.color="yellow"


// We can search by the id name like this index passing is not required
// document.getElementById("rock").style.color="green"
// document.getElementById("raj").style.color="yellow"
// document.getElementById("vrk").style.color="red"
// document.getElementById("hello").style.color="blue"


// We can search by the Tag name like this index passing is required
// document.getElementsByTagName("ul")[0].style.color="red"


/*Problem-3. Create an Element with three children and change 
the color of hte first and the last element in js
*/ 
document.getElementsByTagName("ul")[0].firstElementChild.style.color="red"
document.getElementsByTagName("ul")[0].lastElementChild.style.color="blue"
