import {removeChildren} from "../remove.js";
import {GoIndex} from "../index.js";

export function GoFinal(){
    const body = document.body;
    if (body.firstChild != null){
        removeChildren(body);
    }
   
    //Header_containers
    const header_container = document.createElement('div');
    const header = document.createElement('h1');
    const head2 = document.createElement('h4');

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
    const lbl = document.createElement('label');
    const pgrss = document.createElement('progress');

    //Footer container
    const footer_container = document.createElement('div');
    const footer = document.createElement('h4');
    const a5 = document.createElement('a');


    //img initialize

    const img_container = document.createElement('div');
    img_container.classList  = "text-center";
    const img = document.createElement('img');
    img_container.id = "imagen";
    img.src = '../src/Assets/Casa.jpg';
    img.alt = 'Libros';
    img_container.appendChild(img);


    //Header formatting
    header_container.classList.add('jumbotron','text-center');
    header.innerText = "FIN";
    head2.innerText = "FIN";

    //Header adding
    header_container.appendChild(header);

    

    //body formatting
    container.classList.add('container');
    rows.classList.add('row', 'justify-content-center');
    content.classList.add('col-md-6');
    p1.innerHTML = "Estas dentro de un hogar común y corriente y por alguna razón te resulta familiar.  Es ahí cuando recuerdas que este en realidad es <b>tu</b> hogar o al menos parece serlo. Es una copia exacta de donde vivías pero... todo es blanco y negro como siempre.";
    p2.innerHTML = "Te resulta difícil comprender que es lo que está pasando. Casi que no te quieres ir,  tienes una sensación de paz por alguna razon. Solo quieres quedarte en tu hogar y ser feliz, como lo eras antes...";
    p3.innerHTML = "Pero No. No puedes quedarte ahi, el impostor te sigue persiguiendo, tienes que buscar la salida y pedir ayuda. Despues de ambular un poco por la casa, encuentras la salida. Por suerte aún es de día. Abres la puerta y miras hacia afuera, hay muchas casas cerca todas iguales a esta, blancas por todas partes." ;  
    p4.innerHTML = "Te comienzas a cuestionar si todas las casas son iguales y por desgracia si lo son. No hay a quien  pedir ayuda. Tu unica opción es correr y salir de esta cuadra. A lo largo de la calle puedes ver que  ya no hay casas blancas y por lo tanto decides correr hacia ahi. Lo unico en lo que piensas es tu  libertad incondicional. Cada vez más cerca, ya casi lo puedes sentir."
    p5.innerHTML = "usto cuando se terminan las casas puedes ver a una persona parada al final de la calle. Es un hombre, con pelo blanco pero vestido de negro. Esta de espaldas por lo que no le puedes ver la cara. Te acercas  a el y lo saludas. Cuando se dá la vuelta, puedes ver que el hombre en realidad es tu papá. No entiendes  que es lo que te esta pasando."
    p6.innerHTML = "El hombre te mira fijamente sin hablar. Hasta que por fin habla y dice:  Felicitaciones hijo! Has pasado la primera prueba, el calabozo blanco.  Es un gusto poder verte despues de tantos años, estoy muy orgulloso de ti.  Estoy seguro que podrás pasar la siguientes pruebas por ello dejame llevarte  a tu siguiente exámen. "
    lbl.for = 'progress';
    lbl.innerText = "Evaluación completada:   ";
    pgrss.id = "progress";
    pgrss.value = "25";
    pgrss.max = "100";
    pgrss.innerHTML = "25%";
    

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
    content.appendChild(head2);
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


