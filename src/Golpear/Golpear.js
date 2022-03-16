import {removeChildren} from "../remove.js";
import {GoIndex} from "../index.js";
import {GoFinal} from "../Final/Final.js";
import NarizSangrando from '../Assets/NarizSangrando.jpg';


export function GoGolpear(){
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
    const p4 = document.createElement('p');
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
    img.src = NarizSangrando;
    img.alt = 'Habitación blanca';
    img_container.appendChild(img);


    //Header formatting
    header_container.classList.add('jumbotron','text-center');
    header.innerText = "DESASTRE";

    //Header adding
    header_container.appendChild(header);

    

    //body formatting
    container.classList.add('container');
    rows.classList.add('row', 'justify-content-center');
    content.classList.add('col-md-6');
    p1.innerHTML = "Le has pegado en la nariz al impostor con la palma de tu mano. Ese es su punto débil. A causa de esto le empieza a sangrar la nariz y se vuelve loco. No sabe como arreglar este desastre, está en shock, inmóvil con la boca abierta como sifuese a gritar pero no puede. Tiene los ojos abiertos pero su cerebro ya no procesaningun tipo de información.";
    p2.innerHTML = "Esta es tu oportunidad! Debes aprovecharla. Por ello empiezas a buscar dentro de su  ropa intentando encontrar la llave que abre la puerta de esta tortura blanca. Después un tiempo encuentras la llave justo en su zapato y la agarras. Mientras vas corriendo  hacia la puerta puedes ver oir que el impostor se está levantando.";
    p3.innerHTML = "llegas a la puerta y la intentas abrir pero no puedes introducir la llave a la manija de lo asustado que estas. El impostor se logra levantar y empieza a caminar hacia ti  con la nariz completamente ensangrientada. Su cara parece la de un muerto, tiene los  ojos abiertos como si pudiera ver el futuro. Por ello te apresuras abrir la puerta y  logras meter la llave.";
    p4.innerHTML = "Justo cuando el impostor se encuentra a 2 metros de ti, logras abrir la puerta y finalmente logras ver lo que hay al otro lado de la misma. Unas escalareas empinadas. Te apresuras a subirlas y llegas a lo que parece ser un ";
    p1.innerHTML = p1.innerHTML.trimEnd();
    p2.innerHTML = p2.innerHTML.trimEnd();
    p3.innerHTML = p3.innerHTML.trimEnd();
    p4.innerHTML = p4.innerHTML.trimEnd();
    lbl.for = 'progress';
    lbl.innerText = "Paciencia del impostor:  ";
    pgrss.id = "progress";
    pgrss.value = "0";
    pgrss.max = "100";
    pgrss.innerHTML = "0%";
    a1.innerText = 'Hogar';
    a1.href = 'javascript:void(0);';
    a1.onclick = GoFinal;
    
    //body adding
    container.appendChild(img_container);
    container.appendChild(rows);
    rows.appendChild(content);
    content.appendChild(p1);
    content.appendChild(p2);
    content.appendChild(p3);
    content.appendChild(p4);
    p4.append(a1);
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
