


export function removeChildren(parent) {
    if (parent.firstChild != null){
        while (parent.firstChild) {
            console.log("hola");
            parent.removeChild(parent.firstChild);
        }
    }
}
