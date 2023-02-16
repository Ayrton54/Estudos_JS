var hora = new Date()
var agora = hora.getHours()
var h = 13

if(h > 4 && h < 12){
    console.log('Bom dia!')
}else if(h > 12 && h < 18){
    console.log('Boa tarde!')
}
else if(h > 18 && h < 23){
    console.log('Boa noite!')
}else{
    console.log('Boa madrugada!')
}