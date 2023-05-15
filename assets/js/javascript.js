function mostrarFechaActualizable() {
    let fecha = new Date();
    document.getElementById('fecha').innerHTML = 'Hola hoy es ' + fecha;
    let tiempo = setTimeout(function() {
        mostrarFechaActualizable()
    },1000);
}

function sumar() {
    let valor1 = document.getElementById('num1').value;
    let valor2 = document.getElementById('num2').value;

    try{
        if(valor1 === '' || valor2 === '' ) throw "Debes ingresar todos los valores solicitados";

        if(isNaN(valor1) || isNaN(valor2)) throw "Debes ingresar solo valores numéricos";

        let resultado = Number(valor1) + Number(valor2);
        
        document.getElementById('error').style.display = 'none';
        document.getElementById('resultado').style.display = 'block';
        document.getElementById('resultado').innerHTML = `${valor1} + ${valor2} = ${resultado}`;
    }
    catch(error){
        document.getElementById('resultado').style.display = 'none';
        document.getElementById('error').style.display = 'block';
        document.getElementById('error').innerHTML = error;
    }
}

function restar() {
    let valor1 = document.getElementById('num1').value;
    let valor2 = document.getElementById('num2').value;

    try{
        if(valor1 === '' || valor2 === '' ) throw "Debes ingresar todos los valores solicitados";

        if(isNaN(valor1) || isNaN(valor2)) throw "Debes ingresar solo valores numéricos";

        let resultado = Number(valor1) - Number(valor2);
        
        document.getElementById('error').style.display = 'none';
        document.getElementById('resultado').style.display = 'block';
        document.getElementById('resultado').innerHTML = `${valor1} + ${valor2} = ${resultado}`;
    }
    catch(error){
        document.getElementById('resultado').style.display = 'none';
        document.getElementById('error').style.display = 'block';
        document.getElementById('error').innerHTML = error;
    }
}

function multiplicar() {
    let valor1 = document.getElementById('num1').value;
    let valor2 = document.getElementById('num2').value;

    try{
        if(valor1 === '' || valor2 === '' ) throw "Debes ingresar todos los valores solicitados";

        if(isNaN(valor1) || isNaN(valor2)) throw "Debes ingresar solo valores numéricos";

        let resultado = Number(valor1) * Number(valor2);
        
        document.getElementById('error').style.display = 'none';
        document.getElementById('resultado').style.display = 'block';
        document.getElementById('resultado').innerHTML = `${valor1} + ${valor2} = ${resultado}`;
    }
    catch(error){
        document.getElementById('resultado').style.display = 'none';
        document.getElementById('error').style.display = 'block';
        document.getElementById('error').innerHTML = error;
    }
}

function dividir() {
    let valor1 = document.getElementById('num1').value;
    let valor2 = document.getElementById('num2').value;

    try{
        if(valor1 === '' || valor2 === '' ) throw "Debes ingresar todos los valores solicitados";

        if(isNaN(valor1) || isNaN(valor2)) throw "Debes ingresar solo valores numéricos";

        if(valor2 == 0) throw "No se puede dividir por 0 (cero)";

        let resultado = Number(valor1) / Number(valor2);
        
        document.getElementById('error').style.display = 'none';
        document.getElementById('resultado').style.display = 'block';
        document.getElementById('resultado').innerHTML = `${valor1} + ${valor2} = ${resultado}`;
    }
    catch(error){
        document.getElementById('resultado').style.display = 'none';
        document.getElementById('error').style.display = 'block';
        document.getElementById('error').innerHTML = error;
    }
}

function limpiar(){
    document.getElementById('num1').value = 0;
    document.getElementById('num2').value = 0;
    document.getElementById('resultado').style.display = 'none';
    document.getElementById('error').style.display = 'none';
}

function indicadoresEconomicos() {
    fetch('https://mindicador.cl/api').then(function(response) {
        return response.json();
    }).then(function(dailyIndicators) {
        document.getElementById("UF").innerHTML = 'El valor actual de la UF es $' + dailyIndicators.uf.valor;
        document.getElementById("DolarO").innerHTML = 'El valor actual del Dólar observado es $' + dailyIndicators.dolar.valor;
        document.getElementById("DolarA").innerHTML = 'El valor actual del Dólar acuerdo es $' + dailyIndicators.dolar_intercambio.valor;
        document.getElementById("Euro").innerHTML = 'El valor actual del Euro es $' + dailyIndicators.euro.valor;
        document.getElementById("IPC").innerHTML = 'El valor actual del IPC es ' + dailyIndicators.ipc.valor;
        document.getElementById("UTM").innerHTML = 'El valor actual de la UTM es $' + dailyIndicators.utm.valor;
        document.getElementById("IVP").innerHTML = 'El valor actual del IVP es $' + dailyIndicators.ivp.valor;
        document.getElementById("Imacec").innerHTML = 'El valor actual del Imacec es ' + dailyIndicators.imacec.valor;
    }).catch(function(error) {
        console.log('Requestfailed', error);
    });
}