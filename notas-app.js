const frases = [];

//elementtos html

const addButton = document.querySelector('#add-button');
const inputAutor = document.querySelector('.input');
const inputFrase = document.querySelector('.texto-frase');



// btnAgregar.addEventListener('click', () => {
//     const autor = inputAutor.value;
//     frases.push(autor);
//     console.log(frases);
// });

// console.dir(inputAutor);


addButton.addEventListener('click', () => {
    const autor = inputAutor.value;
    const frase = inputFrase.value;
    const fraseObj = new Frase(autor, frase);
    frases.push(fraseObj);
    console.log(frases);
    renderizarFrase();

}); 

function renderizarFrase(){
    const notasAgrupadas= document.querySelector('#notas-agrupadas');
    notasAgrupadas.innerHTML = '';
    frases.forEach((frase) => {
        const div = document.createElement('div');
        div.innerHTML = ` <div class="nueva-nota">
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
          <button>Eliminar</button>
          <div class="index">
            <p>${frase.id}</p>`;
        notasAgrupadas.appendChild(div);
    });

}
renderizar = () => {    
    const notasAgrupadas = document.querySelector('#notas-agrupadas');
    notasAgrupadas.innerHTML = '';
    frases.forEach((frase) => {
        const div = document.createElement('div');
        div.innerHTML = `<h1>${frase.autor}</h1>`;
        notasAgrupadas.appendChild(div);
    });
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

    crearFrase(){
        
    }
    
}



const frase1 = new Frase('Albert Einstein', 'La imaginación es más importante que el conocimiento');
console.log(frase1);
const frase2 = new Frase('Albert Einstein', 'La imaginación es más importante que el conocimiento');
console.log(frase2);