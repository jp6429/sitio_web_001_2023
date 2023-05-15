$(document).ready(function() {

    //Crear la estructura de la tabla
    //Obtener la referencia del lugar donde va a quedar la tabla
    let tabla_usuarios = document.getElementById("tabla_randomuserme");

    //Crer los elementos de la tabla <tabla>, <thead>, <tbody>
    let tabla = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");

    //Crear la sección de encabezados de la tabla.
    let encabezados = ["ID","NOMBRE","EMAIL","PAIS","EDAD","IMAGEN"];
    let fila_head = document.createElement("tr");
    for(let i=0; i < encabezados.length; i++){
        //crear una celda por cada encabezado
        let celda_head = document.createElement("th");
        let texto_celda = document.createTextNode(encabezados[i]);
        celda_head.appendChild(texto_celda);
        fila_head.appendChild(celda_head);
    }
    thead.appendChild(fila_head);

    let cantidad = 50;
    let urlRandomUserMe = `https://randomuser.me/api/?results=${cantidad}&nat=us,dk,fr,gb`;

    fetch(urlRandomUserMe)
    .then(response => response.json())
    .then(data => {
        //Crear la estructura de cada fila/registro que obtuvimos
        for(const user of data.results){
            //Crear una fila por cada registro
            let fila_body = document.createElement("tr");

            //ID
            let celda_id = document.createElement("td");
            let texto_id = document.createTextNode(user.id.value);
            celda_id.appendChild(texto_id);
            fila_body.appendChild(celda_id);
            tbody.appendChild(fila_body);

            //Nombre
            let celda_nombre = document.createElement("td");
            let texto_nombre = document.createTextNode(user.name.first + " " + user.name.last);
            celda_nombre.appendChild(texto_nombre);
            fila_body.appendChild(celda_nombre);
            tbody.appendChild(fila_body);

            //EMAIL
            let celda_email = document.createElement("td");
            let texto_email = document.createTextNode(user.email);
            celda_email.appendChild(texto_email);
            fila_body.appendChild(celda_email);
            tbody.appendChild(fila_body);

            //PAIS
            let celda_pais = document.createElement("td");
            let texto_pais = document.createTextNode(user.location.country);
            celda_pais.appendChild(texto_pais);
            fila_body.appendChild(celda_pais);
            tbody.appendChild(fila_body);

            //EDAD
            let celda_edad = document.createElement("td");
            let texto_edad = document.createTextNode(user.dob.age);
            celda_edad.appendChild(texto_edad);
            fila_body.appendChild(celda_edad);
            tbody.appendChild(fila_body);

            //IMAGEN
            let celda_imagen = document.createElement("td");
            let src_imagen = document.createElement("img")
            src_imagen.src = user.picture.medium;
            celda_imagen.appendChild(src_imagen);
            fila_body.appendChild(celda_imagen);
            tbody.appendChild(fila_body);
        }
    
    })

    //Mostrar la tabla
    tabla.appendChild(thead);
    tabla.appendChild(tbody);
    tabla_usuarios.appendChild(tabla);


    tabla.setAttribute("class","table table-bordered table-hover");
    thead.setAttribute("class","table-dark text-center");
    tbody.setAttribute("id", "table_body");

});

$(document).ready(function() {
    $("#texto-buscado").on("keyup", function(){
        let texto = $(this).val().toLowerCase();
        $("#table_body tr").filter(function({
            $(this).toggle($(this).text(.toLowerCase().indexOf(texto) > -1))
        }));
    });
});