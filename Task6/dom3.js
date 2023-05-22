// var ht=(document.getElementById("header-title"))
// console.log(ht)
// ht.textContent="hello"
// ht.style.borderBottom='solid 3px #000'
// var items=document.getElementsByClassName("list-group-item")
// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight="bold"

// }

// document.querySelectorAll(".list-group-item")[2].style.backgroundColor="green";

// var li= document.getElementsByTagName('li')
// console.log(li)
// li[4].style.fontWeight="bold"

// var input=document.querySelector('input')
// input.value='Hello'
// var submit=document.querySelector('input[type="submit"]');
// submit.value="SEND"
// var secondItem=document.querySelectorAll(".list-group-item")[1]
// secondItem.style.backgroundColor="green"

var thirdItem=document.querySelectorAll(".list-group-item")[1]
 thirdItem.style.color="white"
var odd=document.querySelectorAll("li:nth-child(odd)");

for (let i=0;i<odd.length;i++){
    odd[i].style.backgroundColor="green"

}