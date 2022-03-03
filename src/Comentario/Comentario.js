import {removeChildren} from "../remove.js";
import {GoIndex} from "../index.js";
import libros from '../Assets/Libros.jpg';

export function GoComentario(){
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

    //Footer container
    const footer_container = document.createElement('div');
    const footer = document.createElement('h4');
    const a5 = document.createElement('a');


    //img initialize

    const img_container = document.createElement('div');
    img_container.classList  = "text-center";
    const img = new Image();
    img_container.id = "imagen";
    img.src = libros;
    img.alt = 'Libros';
    img_container.appendChild(img);


    //Header formatting
    header_container.classList.add('jumbotron','text-center');
    header.innerText = "COMENTARIO UX";
    head2.innerText = "Cayetano molina";

    //Header adding
    header_container.appendChild(header);
    header_container.appendChild(head2);

    

    //body formatting
    container.classList.add('container');
    rows.classList.add('row', 'justify-content-center');
    content.classList.add('col-md-6');
    p1.innerHTML = "Se pueden ver varios beneficios de aprender UX design. De primero se puede ver que es un trabajo que siempre va a proveer. Muchas compañias siempre tratan de hace ya sean apps o incluso páginas web. Debido a esto es muy posible que se pueda encontrar trabajo muy rápido ya que está en alta demanda. Por otro lado, la paga también puede ser muy buena dependiendo del lugar en el que se trabaje.";
    p2.innerHTML = " Claro, aprender UX tampoco es fácil. Se requiere de dedicación, creatividad, teoría y ser observador. Además nunca se dejará de aprender pues siempre se irán cambiando las prácticas necesarias para realizar un buen UX design. ";
    p3.innerHTML = "Una vez se tenga esto en mente se puede empezar en el ámbito del UX design. Pero, para que sirve estudiar esto aparte de ganar dinero y pues hacer cosas bonitas. El UX (User Experience) se basa en la experiencia del usuario tal y como lo dic su nombre. Por eso mismo, no solo es importante que las cosas se vean bonitas sin que sean funcionales para varios grupos de personas con distintas habilidades. Po ejemplo, es necesario tomar en cuenta a las personas daltónicas en el uso de colore y también a personas con discapacidades en el ámbito de que tan cerca se encuentren los botónes unos de los otros. Incluso sin irse tan lejos, hay que saber como la personas reaccionaran incluso a la forma de un botón o al orden de las cosas. Por l tanto es bueno saber sobre este tema se dedique uno a esto o no. Mejorará nuestr relaciones con humanos y nos hará más empáticos en general." ;  

    //body adding
    container.appendChild(img_container);
    container.appendChild(rows);
    rows.appendChild(content);
    content.appendChild(p1);
    content.appendChild(p2);
    content.appendChild(p3);



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


