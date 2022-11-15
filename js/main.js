const listaDellaSpesa = ["carote", "patate", "latte", "dentifricio", "carta igienica"];
const contenitoreLista = document.getElementById("lista_spesa");
let submit = document.getElementById("aggiungiAllaLista");


// ciclo for per elencare lista  !working 
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

// Pulsante per aggiungere elementi alla lista + cancellare elementi per riscrivere il nuovo array
    submit.addEventListener("click", function addToLista() {
        console.log("pulsante cliccato");

        let userValue = document.getElementById('user_input').value;
        listaDellaSpesa.push(userValue);  
        console.log(listaDellaSpesa);
        console.log(listaDellaSpesa.length)

        const Elim_elem_list = document.querySelectorAll('.list_item');
        Elim_elem_list.forEach(list_item => {
            list_item.remove();
    });


    // ciclo for per elencare lista  !working
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


    
})

    