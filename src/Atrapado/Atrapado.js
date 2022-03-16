import {removeChildren} from "../remove.js";
import {GoIndex} from "../index.js";
import Cama from '../Assets/cama.jpg';


export const GoAtrapado = () =>{
    const body = document.body;
    if (body.firstChild != null){
        removeChildren(body);
    }
   
    //Header_containers
    const header_container = document.createElement('div');
    const header = document.createElement('h1');

    //body container
    const container = document.createElement('div');
    const rows = document.createElement('div');
    const content = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const lbl = document.createElement('label');
    const pgrss = document.createElement('progress');

    //Footer container
    const footer_container = document.createElement('div');
    const footer = document.createElement('h4');
    const a5 = document.createElement('a');


    //img initialize

    const img_container = document.createElement('div');
    img_container.classList  = "text-center";
    const img = new Image();
    img_container.id = "imagen";
    img.src = Cama;
    img.alt = 'Cama';
    img_container.appendChild(img);


    //Header formatting
    header_container.classList.add('jumbotron','text-center');
    header.innerText = "ATRAPADO";

    //Header adding
    header_container.appendChild(header);

    

    //body formatting
    container.classList.add('container');
    rows.classList.add('row', 'justify-content-center');
    content.classList.add('col-md-6');
    p1.innerHTML = "El impostor ha llegado hacia ti y te ha atrapado! Ni si quiera has dado pelea de lo decepcionado que estás contigo mismo. No logras transmitir palabras no sabes que hacer con tu vida. Lentamente el impostor te va dejando en tu cama hasta que quedas completamente acostado boca arriba. Tu cuerpo permanece quieto,puede que no hayas muerto pero murio tu esperanza de vivir.";
    p2.innerHTML = "El impostor amarra cada una de tus extremidades a la cama y comienza a reirse. Ya se ha calmado pues sabe que tiene una compañia que nunca se podrá ir. Pasaras el resto de tus días aquí acostado sin poder hacer algo y lo más probable es que mueras en este cuarto blanco.";
    p3.innerHTML = "<b>Ese es tu destino...</b>";
    p1.innerHTML = p1.innerHTML.trimEnd();
    p2.innerHTML = p2.innerHTML.trimEnd();
    p3.innerHTML = p3.innerHTML.trimEnd();
    lbl.for = 'progress';
    lbl.innerText = "Paciencia del impostor:  ";
    pgrss.id = "progress";
    pgrss.value = "70";
    pgrss.max = "100";
    pgrss.innerHTML = "70%";
    
    //body adding
    container.appendChild(img_container);
    container.appendChild(rows);
    rows.appendChild(content);
    content.appendChild(p1);
    content.appendChild(p2);
    content.appendChild(p3);
    content.appendChild(lbl);
    content.appendChild(pgrss);

    //footer formatting
    footer_container.classList.add('jumbotron','text-center');
    a5.href = "javascript:void(0);";
    a5.onclick = GoIndex;
    a5.innerText = "El CALABOZO BLANCO";

    //Adding footer
    footer_container.appendChild(footer);
    footer.appendChild(a5);

    //Adding everything
    body.appendChild(header_container);
    body.appendChild(container);
    body.appendChild(footer_container);

}
