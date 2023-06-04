const frases = [];

//elementtos html

const addButton = document.querySelector('#add-button');
const inputAutor = document.querySelector('.input');
const inputFrase = document.querySelector('.texto-frase');






addButton.addEventListener('click', () => {
    const autor = inputAutor.value;
    const frase = inputFrase.value;
    const fraseObj = new Frase(autor, frase);
    frases.push(fraseObj);
    console.log(frases);
    renderizarFrase();
    resetearFormulario();
    eliminarFrase();
    
}); 




function resetearFormulario(){
    inputAutor.value = '';
    inputFrase.value = '';
}

function eliminarFrase(){
   const btnsEliminar = document.querySelectorAll(".btns-eliminar");
   
   btnsEliminar.forEach((btn) => {
    btn.addEventListener('click', (e) => {
    
        id = e.target.id;
        console.log(id);
        const divElement = document.querySelector(`#${id}`);
        console.log(`hola soy el boton ${e.target.id}`);
        console.log(divElement);
        const index = frases.findIndex((frase) => frase.id == e.target.id);
        
        console.log(index);
        if (index !== -1){
            frases.splice(index, 1);           
            
        }
        console.log(frases);
        
        
        
            //     const id = e.target.id;
        //     const idNum = id.split('-')[1];
        //     const index = frases.findIndex((frase) => frase.id == idNum);
        //     frases.splice(index, 1);
        //     renderizarFrase();
        //     eliminarFrase();
        // });
    });
    
});

}



function renderizarFrase(){
    const notasAgrupadas= document.querySelector('#notas-agrupadas');
    notasAgrupadas.innerHTML = '';
    frases.forEach((frase) => {
        const div = document.createElement('div');
        div.innerHTML = ` <div class="nueva-nota" id="${frase.id}">
        <div class="wave-group">
        <input required="" type="text" class="input" maxlength="20" value=${frase.autor} >
        <span class="bar"></span>
        <label class="label">
        <span class="label-char" style="--index: 0">T</span>
              <span class="label-char" style="--index: 1">í</span>
              <span class="label-char" style="--index: 2">t</span>
              <span class="label-char" style="--index: 3">u</span>
              <span class="label-char" style="--index: 3">l</span>
              <span class="label-char" style="--index: 3">o</span>
              </label>
              </div>
              <textarea name="content" id="content" placeholder="Escribe tu Nota" maxlength="100">${frase.frase}</textarea>
              <div class="botones-edicion">
              
              <button id="btn-editar">Editar</button>
              <button id="btn-guardar">Guardar</button>
              <button class="btns-eliminar" id="${frase.id}">Eliminar</button>
              <div class="index">
              <p id="num-id">${frase.id}</p>`;
              notasAgrupadas.appendChild(div);
              div.accessKey = frase.id;
              console.log(div);
              
              
              console.dir(div);
            });

            // for(let i = 0; i < notasAgrupadas.childNodes.length; i++){
                //     notasAgrupadas.style.display = 'block';
                // if(i % 4 === 0){
                    //     notasAgrupadas.style.display = 'none';
                    // }
                    
                    // console.log(notasAgrupadas.childNodes.length);
                    
                    // console.dir(notasAgrupadas);
                }
                
                
                
                
                
                class Frase{
                    
                    static counter = 1;
                    
                    constructor(autor, frase,){
                        
                        
                        this.autor = autor;
                        this.frase = frase;
                        this.id = Frase.getNextId();
    }
    
    static getNextId(){
        
        return Frase.counter++;    
    }
    
}



const frase1 = new Frase('Albert Einstein', 'La imaginación es más importante que el conocimiento');
console.log(frase1);
const frase2 = new Frase('Albert Einstein', 'La imaginación es más importante que el conocimiento');
console.log(frase2);


