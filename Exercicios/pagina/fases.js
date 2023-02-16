function Carregar()
   { var h = new Date()
    var hora = h.getHours()
    
    var m = document.getElementById('msg')
    var i = document.getElementById('img')

    if (hora >= 5 && hora <= 12) {
        m.innerHTML = `Bom dia! é ${hora} horas`
        i.innerHTML = '<img src="manha.jpg" alt="manha">'
        document.body.style.background= '#7fffd4'
    } else if (hora > 12 && hora <= 18) {
        m.innerHTML = `Boa tarde! é ${hora} horas`
        i.innerHTML = '<img src="tarde.jpg" alt="Tarde">'
    
    document.body.style.background ='#d5e480'
    } else if (hora > 18 && hora <= 23) {
        m.innerHTML = `Boa noite! é ${hora} horas`
        i.innerHTML = '<img src="noite.jpg" alt="noite">'
        document.body.style.background='#535353'
    } else {
        m.innerHTML = `Boa madrugada! é ${hora} horas`
        i.innerHTML = '<img src="noite.jpg" alt="madrugada">'
        document.body.style.background='#1a1919'
    }
}