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
    editarFrase();
    
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
        const divElement = document.querySelector(`#n${id}`);
        const index = frases.findIndex((frase) => frase.id == e.target.id);
        
        if (index !== -1){
            frases.splice(index, 1);           
            divElement.remove();
        }
        
    });
    
});

};

function editarFrase(){
    const btnsEditar = document.querySelectorAll(".btns-editar");
    btnsEditar.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            accessKey = e.target.accessKey;
            const input = document.querySelector(`#input-${e.target.id}`);
            const textArea = document.querySelector(`#content-${e.target.id}`);
            const btnSave = document.querySelector(`#save-${e.target.id}`);
           
            const btnEdit = document.querySelector('[accesskey="'+accessKey+'"]');
            // console.log(e.target.id);
            // console.dir(e.target);
            input.style.pointerEvents = 'auto';
            textArea.style.pointerEvents = 'auto';
            btnEdit.style.display = 'none';
            btnSave.style.display = 'block';
            //TODO: PENDIENTE LLAMAR A LA FUNCION GUARDAR
            
            // console.log('hola');
            // console.log(input);
            // console.log(btnSave);
        });
    });
};



function renderizarFrase(){
    const notasAgrupadas= document.querySelector('#notas-agrupadas');
    notasAgrupadas.innerHTML = '';
    frases.forEach((frase) => {
        const div = document.createElement('div');
        div.innerHTML = ` <div class="nueva-nota" id="n${frase.id}">
        <div class="wave-group">
        <input required="" type="text" class="input" maxlength="20" value="${frase.autor}" id="input-${frase.id}" >
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
              <textarea name="content" id="content-${frase.id}" placeholder="Escribe tu Nota" maxlength="100">${frase.frase}</textarea>
              <div class="botones-edicion">
              
              <button class="btns-editar" id="${frase.id}" accessKey="${frase.id}">Editar</button>
              <button id="save-${frase.id}">Guardar</button>
              <button class="btns-eliminar" id="${frase.id}">Eliminar</button>
              <div class="index">
              <p id="num-id">${frase.id}</p>`;
              notasAgrupadas.appendChild(div);
              //div.accessKey = frase.id;
              
              //console.dir(div);
            });

           ;

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



// const frase1 = new Frase('Albert Einstein', 'La imaginación es más importante que el conocimiento');
// console.log(frase1);
// const frase2 = new Frase('Albert Einstein', 'La imaginación es más importante que el conocimiento');
// console.log(frase2);


