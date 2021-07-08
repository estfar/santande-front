const forms = document.querySelectorAll(".singup-form")

// console.log($forms);

const getTemplate = () => {
    return fetch("./template.html")
    .then((response) => response.text())
}
const sendEmail = (miVariable) => {
    miVariable.preventDefault();
    const email = miVariable.target.querySelector("input").value;
    getTemplate()
        .then((response)=>{
            console.log(response);
        })
        .catch((error) => {
            console.log(error, "error al obtener el template")
        })
    // Query== búsqueda
    // Lo que hace query selector es buscar en el html alguna etiqueta, clase o id que se asemeje a lo que estoy pidiendo en el parametro. Si estamos buscando una clase se tiene que poner el punto, por ejemplo ".nombre-clase" o con un id "#nombre-id"
    console.log(email);
}


for(let i=0; i<forms.length; i++){
    // console.log(forms[i]);
    forms[i].addEventListener("submit", sendEmail);
}

