import {removeChildren} from "../remove.js";
import {GoIndex} from "../index.js";

export function GoLeer(){
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
    const d1 = document.createElement('details');
    const d2 = document.createElement('details');
    const d3 = document.createElement('details');
    const d4 = document.createElement('details');
    const s1 = document.createElement('summary');
    const s2 = document.createElement('summary');
    const s3 = document.createElement('summary');
    const s4 = document.createElement('summary');
    const i1 = document.createElement('img');
    const i2 = document.createElement('img');
    const i3 = document.createElement('img');
    const i4 = document.createElement('img');
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
    img.src = '../src/Assets/Libros.jpg';
    img.alt = 'libros';
    img_container.appendChild(img);


    //Header formatting
    header_container.classList.add('jumbotron','text-center');
    header.innerText = "LEER";


    //Header adding
    header_container.appendChild(header);
    

    //body formatting
    container.classList.add('container');
    rows.classList.add('row', 'justify-content-center');
    content.classList.add('col-md-6');

    s1.innerText = "Minismalismus";
    s2.innerText = "Never Love a Gambler";
    s3.innerText = "Split Tooth";
    s4.innerText = "Hope with OCD";

    i1.src = "../src/Assets/Minismalismus.jpg";
    i2.src = "../src/Assets/NLG.jpg";
    i3.src = "../src/Assets/SplitTooth.jpg";
    i4.src = "../src/Assets/OCD.jpg";

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
    content.appendChild(d1);
    content.appendChild(d2);
    content.appendChild(d3);
    content.appendChild(d4);
    d1.appendChild(s1);
    d1.appendChild(i1);
    d2.appendChild(s2);
    d2.appendChild(i2);
    d3.appendChild(s3);
    d3.appendChild(i3);
    d4.appendChild(s4);
    d4.appendChild(i4);
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