var hora = new Date()
var horario = hora.getHours()
var txt = document.querySelector('#texto-hora')
var txt2 = document.querySelector('#texto-saudacao')
var img = document.getElementById('imagem-principal')
function carregar(){
    
    if(horario < 12){
        //bom dia
        txt.innerHTML = `São exatamente ${horario} horas da manhã`
        txt2.innerHTML = `Bom Dia!!`
        img.src = 'imgdia.png'
        document.body.style.background = '#e2cd9f'
    }else if(horario < 18){
        //Boa tarde
        txt.innerHTML = `São exatamente ${horario} da tarde!`
        txt2.innerHTML = `Boa Tarde!!`
        img.src = 'imgtarde.png'
        document.body.style.background = '#b9846f'
        
    } else{
        //Boa noite
        txt.innerHTML = `São exatamente ${horario} da noite`
        txt2.innerHTML = `Boa Noite!!`
        img.src = 'imgnoite.png'
        document.body.style.background = '#515154'
    }
    
}