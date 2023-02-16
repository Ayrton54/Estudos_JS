var idade = 10

if(idade >= 16 && idade < 18 || idade >= 65){
    console.log('voto opcional')
}
else if(idade >= 18){
    console.log('voto obrigatorio')
}
else{
    console.log('não pode votar')
}

var men =idade >  18?'loucura':'tristeza'
console.log(men)