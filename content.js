
let lupa = []
for(let i = 0; i < document.querySelectorAll('p').length; i++){
    lupa[i]= document.querySelectorAll('p')[i]
    lupa[i].addEventListener('mouseover', aumenta)
    function aumenta(){

        lupa[i].style.fontSize = '40px'       
    }
    lupa[i].addEventListener('mouseout', diminui)

    function diminui(){
        lupa[i].style.fontSize = ''
    }
}