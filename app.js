const forms = document.querySelectorAll(".singup-form")

// console.log($forms);

const getTemplate = () => {
    return fetch("./template.html")
    .then((response) => response.text());
}
const sendEmailToApi = (adress, template) => {
    fetch(`https://bedu-email-sender-api.herokuapp.com/send`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            address: address,
            template: template,
        }),
    })
    .then((results) => {
        console.log(results.status)
        if(results.status== 200){
            alert("Email send!!");
        }else{
            alert("Send failed");
        }
        //console.log(results);
        document.getElementById("email").value= ""
        // alert("E-mail send!!");
    })
    .catch((error)=> {
        console.error(error);
        document.getElementById("email").value= "";
        alert("Send failed");
    });
};

const sendEmail = (event) => {
    event.preventDefault();
    const email = event.target.querySelector("input").value;
    getTemplate()
        .then((template)=>{
            sendEmailToApi(email, template)
            //console.log(response);
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

