// let inputs = document.getElementById("inp");
// let text = document.querySelector(".text");

// function Add(){
//     if(inputs.value == ""){
//         alert('Please Enter Task')
//     }else{
//         let newEle = document.createElement("ul");
//         newEle.innerHTML =`${ inputs.value } <i class="fa-solid fa-trash"></i>`;
//         text.appendChild(newEle);
//         inputs.value ="";
//         newEle.querySelector("i").addEventListener("click", remove);
//         function remove(){
//             newEle.remove()
//         }
//     }
// }        

// let inputs = document.getElementById("inp")
// inputs.addEventListener('click', function () {
//     alert(); 0
// })
// let text = document.querySelector(".text")
// let newEle = document.createElement("ul")
// newEle.innerHTML = `${ inputs.value } <i class="fa-solid fa-trash"></i>`;

let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
    if (inputs.value.trim() === "") {
        alert('Please Enter Task');
    } else {
        let newEle = document.createElement("li");
        newEle.innerHTML = `${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(newEle);
        inputs.value = "";

        newEle.querySelector("i").addEventListener("click", function() {
            newEle.remove();
        });
    }
}


