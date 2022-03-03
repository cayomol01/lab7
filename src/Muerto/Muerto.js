import {removeChildren} from "../remove.js";
import {GoIndex} from "../index.js";
import './muerto.scss';

export function GoMuerto(){
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
    const lbl = document.createElement('label');
    const pgrss = document.createElement('progress');

    //Footer container
    const footer_container = document.createElement('div');
    const footer = document.createElement('h4');
    const a5 = document.createElement('a');


    //img initialize

    const img_container = document.createElement('div');
    img_container.classList.add("text-center")
    const img = document.createElement('img');
    img.id = "imagen1";
    img_container.id = "img_container1";
    img.src = '../src/Assets/Muerto.jpg';
    img.alt = 'Habitación blanca';
    img_container.appendChild(img);


    //Header formatting
    header_container.classList.add('jumbotron','text-center');
    header.innerText = "HAS MUERTO";
    header.id = "hd";

    //Header adding
    header_container.appendChild(header);
    

    //body formatting
    container.classList.add('container');
    rows.classList.add('row', 'justify-content-center');
    content.classList.add('col-md-6');
    p1.innerHTML = "Lo que has intentando hacer no ha funcionado en lo absoluto. El impostor es lo suficientemente fuerte para ganarte en una lucha. Debido a tu alimentación, no estas nutrido para nada y simplemente no has  crecido como se debería para alguien de tu edad. Debes aprovecharte de tu ambiente y de las debilidades  del impostor para poder ganarle. "
    lbl.for = 'progress';
    lbl.innerText = "Paciencia del impostor:  ";
    pgrss.id = "progress";
    pgrss.value = "0";
    pgrss.max = "100";
    pgrss.innerHTML = "0%";
    
    //body adding
    container.appendChild(img_container);
    container.appendChild(rows);
    rows.appendChild(content);
    content.appendChild(p1);
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