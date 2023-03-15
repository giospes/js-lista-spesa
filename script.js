const spesa = [
    "carne",
    "pesce",
    "pasta",
    "broccoli"
]
const listEl = document.querySelector('ul')
let i=0, list="";

while(i<spesa.length){
    list +=`<li class='fs-3'>${spesa[i]}</li>` ;
    i++;

}

listEl.innerHTML = list
