import {removeChildren} from "../remove.js";
import{GoMuerto} from "../Muerto/Muerto.js";
import{GoGolpear} from "../Golpear/Golpear.js";
import {GoIndex} from "../index.js";


export function GoDesastre(){
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
    const urd_list = document.createElement('ul');
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const a1 = document.createElement('a');
    const a2 = document.createElement('a');
    const a3 = document.createElement('a');
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
    img.src = '../src/Assets/Sangre.jpg';
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
    p1.innerHTML = "Piensas que la mejor manera de obtener la atención del impostor es haciendo un desastre y por lo tanto decides darle un poco de color a tu cuarto. Para ello, te empiezas a rascar el brazo de forma rápida y muy fuerte hasta que logras sacar sangre. Te duele como nunca pero decides continuar haciendolo...";
    p2.innerHTML = "Una vez miras que las gotas de sangre saliendo de tu brazo son lo suficientemente grandes, empiezas a dejarlas caer alrededor de tu cuarto. Creando una hermosa pintura creada por ti mismo literalmente. Ahora solo te queda  esperar a que el impostor llegue a ver esta 'obra de arte'.";
    p3.innerHTML = "Cuando llega el impostor, ve el desastre y empieza a gritarte pero las palabras no te hacen sentido, lo unico en lo que piensas es escapar. Piensas con qué deberías pegarle:"
    a1.onclick = GoMuerto;
    a1.href = "javascript:void(0);";
    a1.innerText = "Pegar con tus puños";
    a2.onclick = GoGolpear;
    a2.href = "javascript:void(0);";
    a2.innerText = "Pegar con la palma de tu mano";
    a3.onclick = GoMuerto;
    a3.href = "javascript:void(0);";
    a3.innerText = "Pegar con un libro";
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
    content.appendChild(urd_list);
    urd_list.appendChild(li1);
    urd_list.appendChild(li2);
    urd_list.appendChild(li3);
    li1.appendChild(a1);
    li2.appendChild(a2);
    li3.appendChild(a3);
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
