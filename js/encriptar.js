let textoEncriptado = document.querySelector('#textoResultado');
let encriptador = [
    {
        "e": "enter",
        "i": "iems",
        "a": "ai",
        "o": "ober",
        "u": "ufat" 
    }
];

function asignarElemento(elementoId, texto){
    let message = document.querySelector(elementoId);
    message.innerHTML = texto;
}

function encriptar(){
    let palabraEncriptar = document.getElementById("textoEncriptar").value;
    let textoEncriptado = document.querySelector("#textoResultado").innerHTML;
    let textoMuestra = "";
    let imgMuñeco = document.getElementById("imgMuñeco");
    let subMessage = document.querySelector(".submessage");
    const mayus = /[A-Z]/g;
    const fund = palabraEncriptar.match(mayus);

    if(fund != null){
        asignarElemento('#messageError', 'Solo se aceptan letas minusculas y sin acentos, intentalo de nuevo porfavor');
        document.getElementById('messageError').style.color = "red";
        console.log(fund)
    }else{
        console.log(palabraEncriptar.length);
        for(var i = 0;i < palabraEncriptar.length; i++){
            if(palabraEncriptar.charAt(i) == 'a'){
                console.log(`Se encontro una A en la cadena`);
                textoMuestra += 'ai';
                console.log(textoMuestra)
            }else if(palabraEncriptar.charAt(i) == 'e'){
                console.log(`Se encontro una E en la cadena`);
                textoMuestra += 'enter';
                console.log(textoMuestra)
            }else if(palabraEncriptar.charAt(i) == 'i'){
                console.log(`Se encontro una I en la cadena`);
                textoMuestra += 'iems';
                console.log(textoMuestra)
            }else if(palabraEncriptar.charAt(i) == 'u'){
                console.log(`Se encontro una U en la cadena`);
                textoMuestra += 'ufat';
                console.log(textoMuestra)
            }else if(palabraEncriptar.charAt(i) == 'o'){
                console.log(`Se encontro una O en la cadena`);
                textoMuestra += 'ober';
                console.log(textoMuestra)
            }else{
                //imgMuñeco.remove();
                //subMessage.remove();
                textoMuestra += palabraEncriptar.charAt(i)
            }
        }
        asignarElemento('#textoResultado', `${textoMuestra}`)
    }
}

function desencriptar(){
    let palabraEncriptar = document.getElementById("textoEncriptar").value;
    let textoMuestra = "";
    const mayus = /[A-Z]/g;
    const fund = palabraEncriptar.match(mayus);

    if(fund != null){
        asignarElemento('#messageError', 'Solo se aceptan letas minusculas y sin acentos, intentalo de nuevo porfavor');
        document.getElementById('messageError').style.color = "red";
        console.log(fund)
    }else{
        console.log(palabraEncriptar.length);
        for(var i = 0;i < palabraEncriptar.length; i++){
            if(palabraEncriptar.substr(i, 2) === 'ai'){
                console.log(`Se encontro una A en la cadena`);
                textoMuestra += 'a';
                i++;
                console.log(textoMuestra)
            }else if(palabraEncriptar.substr(i, 5) === 'enter'){
                console.log(`Se encontro una E en la cadena`);
                textoMuestra += 'e';
                i += 4;
                console.log(textoMuestra)
            }else if(palabraEncriptar.substr(i, 4) === 'iems'){
                console.log(`Se encontro una I en la cadena`);
                textoMuestra += 'i';
                i += 3;
                console.log(textoMuestra)
            }else if(palabraEncriptar.substr(i, 4) === 'ufat'){
                console.log(`Se encontro una U en la cadena`);
                textoMuestra += 'u';
                i += 3;
                console.log(textoMuestra)
            }else if(palabraEncriptar.substr(i, 4) === 'ober'){
                console.log(`Se encontro una O en la cadena`);
                textoMuestra += 'o';
                i += 3;
                console.log(textoMuestra)
            }else{
                //imgMuñeco.remove();
                //subMessage.remove();
                textoMuestra += palabraEncriptar.charAt(i)
            }
        }
        asignarElemento('#textoResultado', `${textoMuestra}`)
    }
}