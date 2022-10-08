function carregar(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = 15 //data.getHours()
//var minutos = data.getMinutes()
msg.innerHTML = `Agora são ${hora}h`
if (hora >= 0 && hora <12){
    //Bom dia
    img.src = 'imagens/manha.jpg'
    document.body.style.background= '#dfae76'
}
else if (hora >= 12 && hora <18) {
    //Boa tarde
    img.src = 'imagens/tarde.jpg'
    document.body.style.background= '#738d9c'
}
else{
    //Boa noite
    img.src = 'imagens/noite.jpg'
    document.body.style.background = ' #342a43'
}
}
