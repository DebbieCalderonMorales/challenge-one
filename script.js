const input = document.querySelector(".input-texto");
const mensaje = document.querySelector(".mensaje");
const imagen = document.querySelector("#desaparece");

document.getElementById("aparece").style.display = 'none';

function encriptar(textoEncriptado){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(textoEncriptado.includes(matrizCodigo[i][0])){
            textoEncriptado = textoEncriptado.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return textoEncriptado;
}

function desencriptar(textoDesencriptado){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(textoDesencriptado.includes(matrizCodigo[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return textoDesencriptado;
}

function btnDesencriptar(){
    const encriptado = desencriptar(input.value);
    mensaje.value = encriptado;
    input.value = "";
    aparece();
}

function btnEncriptar(){
    const encriptado = encriptar(input.value);
    mensaje.value = encriptado;
    input.value = "";
    aparece();
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
}

function aparece() {
    document.getElementById("desaparece").style.display = 'none';
    document.getElementById("aparece").style.display = 'block';
}