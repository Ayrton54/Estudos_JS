var ano = new Date()
var anoAtual = ano.getFullYear()

var res = document.querySelector('div#res')
var data = document.getElementById('num')
var sexo = document.getElementsByName('sexo')
var btn = document.getElementById('btn')

btn.addEventListener('click', function(){
    if(data.value.length == 0 || data.value > anoAtual){
        alert('[ERRO]! confira os dados')
    }else{
        var idade = anoAtual - data.value
        var gênero = ''
        var img = document.createElement('img')
        if(sexo[0].checked){  
        if(idade >=0 && idade <=12){
            gênero = 'Menino'
            img.setAttribute('src','criança-m.png')
        }else if(idade <=22){
            gênero='Rapaz'
            img.setAttribute('src','jovem-m.png')
        }else if(idade <=55){
            gênero='Adulto'
            img.setAttribute('src','homem.png')
        }else{
            gênero='Idoso'
            img.setAttribute('src','idoso.png')
        }
    }else{
        if(idade >=0 && idade <= 12){
            gênero = 'Menina'
            img.setAttribute('src','criança-f.png')
        }else if(idade <=22 ){
            gênero = 'Moça'
            img.setAttribute('src','jovem-f.png')
        }else if(idade <= 55){
            gênero = 'Mulher'
            img.setAttribute('src','mulher.png')
        }else{
            gênero='Idosa'
            img.setAttribute('src','idosa.png')
        }
    }
        res.innerHTML=`Detectamos um<small>(a)</small> ${gênero} com  ${idade} anos`
        res.appendChild(img)
    }
})