import 'bootstrap';
import {removeChildren} from "./remove.js";
import{GoMuerto} from "./Muerto/Muerto.js";
import{GoDesastre} from "./Desastre/Desastre.js";
import{GoComentario} from "./Comentario/Comentario.js";
import{GoHablarle} from "./Hablarle/Hablarle.js";
import{GoLeer} from "./LeerLibros/LeerLibros.js";
import White_room from './Assets/White_room.jpg';
import './main.scss';

export const GoIndex = () =>{
    const body = document.body;
    if (body.firstChild != null){
        removeChildren(body);
    }
   
    //Header_containers
    const header_container = document.createElement('div');
    const header = document.createElement('h1');
    const head2 = document.createElement('h2');

    //body container
    const container = document.createElement('div');
    const rows = document.createElement('div');
    const content = document.createElement('div');
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const p6 = document.createElement('p');
    const p7 = document.createElement('p');
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

    const img_container = document.createElement('div');
    img_container.classList  = "text-center";
    const img = new Image();
    img_container.id = "imagen";
    img.src = White_room;
    img.alt = 'Habitación blanca';
    img_container.appendChild(img);


    //Header formatting
    header_container.classList.add('jumbotron','text-center');
    header.innerText = "EL CALABOZO BLANCO";
    head2.innerText = "Por: Cayetano molina";

    //Header adding
    header_container.appendChild(header);
    header_container.appendChild(head2);

    

    //body formatting
    container.classList.add('container');
    rows.classList.add('row', 'justify-content-center');
    content.classList.add('col-md-6');
    p1.innerHTML = "Has estado atrapad@ en este cuarto desde que tienes 12 años. Pero sabes que alguna vez tuviste padres pero ahora   solo tienes a un impostor. Lo unico que ves son cosas blancas todos los días de tu vida, todo absolutamente blanco.  Tu ropa, tu cama, tu baño, tus libros, incluso tu piel se ha puesto tan palida de no recibir sol que parece blanco.</p>";
    p2.innerHTML = " Todo esto por culpa del <b>impostor</b>";
    p3.innerHTML = "No sabes mucho de este tal impostor pero tiene ciertos rasgos particulares. Es un hombre de unos 30 y algo años con una piel muy pálida como la que tienes ahora. Siempre usa lentes de sol por lo que no has visto sus ojos nunca en tu vida. y  obviamente su ropa tambien es jodidamente blanca. Por momentos puede ser una persona muy calmada, pero cuando se enoja puede  volverse todo un monstruo...";
    p4.innerHTML = "Las unicas veces en las que te ha hablado es para gritarte y regñarte por hacer algo mal. Todo esto por su maldito<i> TOC.</i> De lo que has leído, este trastorno obsesivo compulsivo suele demostrarse muchas veces a través de la limpieza y el orden en el  cual todo debe estar como se desea y se debe verificar unas cuantas veces si está bien puesto. Por eso mismo, el impostor llega  por una hora, tres veces al día a tu cuarto, a ver que todo este en orden y a proveer tus alimentos. Claro, durante este tiempo debes quedarte en una esquina con tus manos atadas a la espalda. De no hacerlo la paciencia del impostor se irá disminuyendo y eso solo te perjudicará.";
    p5.innerHTML = "Por eso mismo, decides hacer algo para cambiar tu vida. Quieres escaparte de ahi de alguna forma u otra sin importar lo que pase. Ese es tu sueño desde que entraste aquí, escapar. Pero debes tener cuidado porque si no <span style='color:red'><b>moriras...</b></span>";
    p6.innerHTML = "Por eso has pensado cual sería el mejor plan para poder salir de ese calabozo blanco y has ordenado las ideas dependiendo de tu probabilidad de salir con vida. Pero solo puedes elegir una por el momento asi que elige:"
    p7.innerHTML = "Pero recuerda, ten cuidado con su paciencia porque se puede ir agotando...";
    p1.innerHTML = p1.innerHTML.trimEnd();
    p2.innerHTML = p2.innerHTML.trimEnd();
    p3.innerHTML = p3.innerHTML.trimEnd();
    p4.innerHTML = p4.innerHTML.trimEnd();
    p5.innerHTML = p5.innerHTML.trimEnd();
    p6.innerHTML = p6.innerHTML.trimEnd();
    p7.innerHTML = p7.innerHTML.trimEnd();
    
    a1.onclick = GoDesastre;
    a1.href = "javascript:void(0);";
    a1.innerText = "Crear un desastre";
    a2.onclick = GoMuerto;
    a2.href = "javascript:void(0);";
    a2.innerText = "Golpearlo cuando menos se lo espere";
    a3.onclick = GoHablarle;
    a3.href = "javascript:void(0);";
    a3.innerText = "Hablarle e intentar de empatizar con él";
    a4.onclick = GoLeer;
    a4.href = "javascript:void(0);";
    a4.innerText = "Quedarte leyendo los libros que tienes en tu cuarto";
    lbl.for = 'progress';
    lbl.innerText = "Paciencia del impostor:  ";
    pgrss.id = "progress";
    pgrss.value = "100";
    pgrss.max = "100";
    pgrss.innerHTML = "100%";
    
    //body adding
    container.appendChild(img_container);
    container.appendChild(rows);
    rows.appendChild(content);
    content.appendChild(p1);
    content.appendChild(p2);
    content.appendChild(p3);
    content.appendChild(p4);
    content.appendChild(p5);
    content.appendChild(p6);
    content.appendChild(ord_list);
    ord_list.appendChild(li1);
    ord_list.appendChild(li2);
    ord_list.appendChild(li3);
    ord_list.appendChild(li4);
    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);
    li4.appendChild(a4);
    content.appendChild(p7);
    content.appendChild(lbl);
    content.appendChild(pgrss);

    //footer formatting
    footer_container.classList.add('jumbotron','text-center');
    a5.href = "javascript:void(0);";
    a5.onclick = GoComentario;
    a5.innerText = "Comentario UX";

    //Adding footer
    footer_container.appendChild(footer);
    footer.appendChild(a5);

    //Adding everything
    body.appendChild(header_container);
    body.appendChild(container);
    body.appendChild(footer_container);
    

}

GoIndex();