/*
    Para pegar a hora do computador
var agora = new Date() 
var hora = agora.getHours()
*/ 

var hora = 18
console.log(`Agora são exatamente ${hora}h.`)
if (hora<12){
    console.log('Bom dia!')
}else if (hora<18){
    console.log('Boa tarde')
}else{
    console.log('Boa noite') 
}  