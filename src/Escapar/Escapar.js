import {removeChildren} from "../remove.js";
import {GoIndex} from "../index.js";
import{GoAtrapado} from "../Atrapado/Atrapado.js";
import Puerta from '../Assets/Puerta.jpg';


export const GoEscapar = () =>{
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
    const a1 = document.createElement('a');
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
    img.src = Puerta;
    img.alt = 'Habitación blanca';
    img_container.appendChild(img);


    //Header formatting
    header_container.classList.add('jumbotron','text-center');
    header.innerText = "CORRER";

    //Header adding
    header_container.appendChild(header);

    

    //body formatting
    container.classList.add('container');
    rows.classList.add('row', 'justify-content-center');
    content.classList.add('col-md-6');
    p1.innerHTML = "Tu primer instincto ha sido correr hacia la salida. Logras alejarte lo suficiente del impostor. Ya puedes ver tu libertad, estas a punto de salir y por lo que ves no te pueden alcanzar.".trimEnd();
    p2.innerHTML = "Llegas en frente de la puerta y llegas a la manija pero no abre... De los nervios se te ha olvidado que el impostor siempre usa una llave para salir del lugar. Quedas inmóvil, todos tus esfuerzos fueron tirados a la basura y no puedes hacer nada más que rendirte. Poco a poco el impostor se acerca a ti pero no tienes las energías para seguir batallando.".trimEnd();
    p3.innerHTML = "Lo unico que puedes hacer es esperar tu ".trimEnd();
    lbl.for = 'progress';
    lbl.innerText = "Paciencia del impostor:  ";
    pgrss.id = "progress";
    pgrss.value = "70";
    pgrss.max = "100";
    pgrss.innerHTML = "70%";
    a1.innerText = 'destino...';
    a1.href = 'javascript:void(0);';
    a1.onclick = GoAtrapado;
    
    //body adding
    container.appendChild(img_container);
    container.appendChild(rows);
    rows.appendChild(content);
    content.appendChild(p1);
    content.appendChild(p2);
    content.appendChild(p3);
    p3.append(a1);
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
