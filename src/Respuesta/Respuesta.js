import {removeChildren} from "../remove.js";
import{GoMuerto} from "../Muerto/Muerto.js";
import{GoDesastre} from "../Desastre/Desastre.js";
import{GoEscapar} from "../Escapar/Escapar.js";
import{GoAtrapado} from "../Atrapado/Atrapado.js";
import{GoIndex} from "../index.js";
import audio from '../Assets/Respuesta.mp3';
import '../main.scss';

export const GoRespuesta = () =>{
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
    const ord_list = document.createElement('ol');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const a1 = document.createElement('a');
    const a2 = document.createElement('a');
    const a3 = document.createElement('a');
    const a4 = document.createElement('a');
    const lbl = document.createElement('label');
    const pgrss = document.createElement('progress');

    //Footer container
    const footer_container = document.createElement('div');
    const footer = document.createElement('h4');
    const a5 = document.createElement('a');


    //img initialize

    const aud_container = document.createElement('div');
    aud_container.classList  = "text-center";
    const aud = new Audio();
    aud.controls = true;
    aud.preload = true;
    aud.autoplay = true;
    aud_container.id = "aud";
    aud.src = audio;
    aud.alt = 'Habitación blanca';
    aud_container.appendChild(aud);


    //Header formatting
    header_container.classList.add('jumbotron','text-center');
    header.innerText = "RESPUESTA DEL IMPOSTOR";

    //Header adding
    header_container.appendChild(header);

    

    //body formatting
    container.classList.add('container');
    rows.classList.add('row', 'justify-content-center');
    content.classList.add('col-md-6');
    p1.innerHTML = "Por lo que has visto, el impostor no se ha puesto para nada enojado pero si te da miedo. Sientes que algo malo va a pasar en especial por que se está riendo despiadadamente mientras camina hacia ti. Su caminar es lento, pero por alguna razón sientes una amenaza increíble. Sabes que debes hacer algo, pero no sabes que.";
    p1.innerHTML = p1.innerHTML.trimEnd();
    
    a1.onclick = GoEscapar;
    a1.href = "javascript:void(0);";
    a1.innerText = "Correr";
    a2.onclick = GoDesastre;
    a2.href = "javascript:void(0);";
    a2.innerText = "Pegarle con la palma de tu mano";
    a3.onclick = GoMuerto;
    a3.href = "javascript:void(0);";
    a3.innerText = "Pegarle con tu puño";
    a4.onclick = GoAtrapado;
    a4.href = "javascript:void(0);";
    a4.innerText = "No hacer nada de lo asustado que estas";
    lbl.for = 'progress';
    lbl.innerText = "Paciencia del impostor:  ";
    pgrss.id = "progress";
    pgrss.value = "100";
    pgrss.max = "100";
    pgrss.innerHTML = "100%";
    
    //body adding
    container.appendChild(aud_container);
    container.appendChild(rows);
    rows.appendChild(content);
    content.appendChild(p1);
    content.appendChild(ord_list);
    ord_list.appendChild(li1);
    ord_list.appendChild(li2);
    ord_list.appendChild(li3);
    ord_list.appendChild(li4);
    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);
    li4.appendChild(a4);
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
