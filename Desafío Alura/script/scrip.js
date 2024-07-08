let texto = '';
let textoEncriptado = '';


function encriptarTexto() {

    let texto = document.getElementById('texo__input').value;
    console.log(texto);

    textoEncriptado = texto.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    console.log(textoEncriptado);

    document.getElementById('texto__encriptado').innerText = textoEncriptado;

    document.getElementById('desaparecer__imagen').style.display = 'none';
    document.getElementById('desaparecer__texto').style.display = 'none';
    document.getElementById('texto__parrafo').style.display = 'none';
    document.getElementById('aparecer__boton').style.display = 'block';
    document.getElementById('texto__encriptado').style.display = 'block';
}

function desencriptarTexto() {

    let textoEncriptado = document.getElementById('texto__encriptado').innerText;
    let textoOriginal = textoEncriptado.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    console.log(textoOriginal);
    document.getElementById('texto__encriptado').innerText = textoOriginal;
    document.getElementById('texto__encriptado').style.display = 'block';
}

function copiarTexto() {
    let textoEncriptado = document.getElementById('texto__encriptado').innerText;
    navigator.clipboard.writeText(textoEncriptado).then(() => {
        alert('Texto copiado');
    });

}




