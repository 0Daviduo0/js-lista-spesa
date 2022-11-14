const listaDellaSpesa = ["carote", "patate", "latte", "dentifricio", "carta igienica"]
const contenitoreLista = document.getElementById("lista_spesa")


// ciclo for per elencare lista  !working
console.log(listaDellaSpesa.length)
// for (let i = 0; i < listaDellaSpesa.length; i++) {
//     console.log(listaDellaSpesa[i]);
    
//     const li = document.createElement("li");
//     li.setAttribute("id", "list_item" );
//     li.classList.add("list_item");
//     contenitoreLista.appendChild(li);
    
//     li.innerHTML += listaDellaSpesa[i];

// }

// ciclo while per elencare lista  !working
let i = 0;
while (i < listaDellaSpesa.length){
    console.log(listaDellaSpesa[i]);
    
    const li = document.createElement("li");
    li.setAttribute("id", "list_item" );
    li.classList.add("list_item");
    contenitoreLista.appendChild(li);
    
    li.innerHTML += listaDellaSpesa[i];
    i++;
}

