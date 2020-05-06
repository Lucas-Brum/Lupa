
let lupap = []
let lupaspan = []
let lupali = []
let lupah2 = []
let lupah3 = []
let lupah4 = []
let lupah5 = []
let lupah6 = []
let lupatr = []


const size = 30
console.log(size)
// p
for(let i = 0; i < document.querySelectorAll('p').length; i++){
    lupap[i]= document.querySelectorAll('p')[i]
    lupap[i].addEventListener('mouseover', aumenta)
    function aumenta(){
        lupap[i].style.fontSize = size + 'px'  
        lupap[i].style.fontStyle = 'normal'     
        lupap[i].style.fontFamily = 'courier,arial,helvetica' 
        lupap[i].style.lineHeight = size + 'px'
    }
    lupap[i].addEventListener('mouseout', diminui)

    function diminui(){
        lupap[i].style.fontSize = ''
        lupap[i].style.fontStyle = ''     
        lupap[i].style.fontFamily = '' 
        lupap[i].style.lineHeight = ''
    }
}
// span
for(let i = 0; i < document.querySelectorAll('span').length; i++){
    lupaspan[i]= document.querySelectorAll('span')[i]
    lupaspan[i].addEventListener('mouseover', aumenta)
    function aumenta(){
        lupaspan[i].style.fontSize = size + 'px'  
        lupaspan[i].style.fontStyle = 'normal'     
        lupaspan[i].style.fontFamily = 'courier,arial,helvetica' 
        lupaspan[i].style.lineHeight = size + 'px'
    }
    lupaspan[i].addEventListener('mouseout', diminui)

    function diminui(){
        lupaspan[i].style.fontSize = ''
        lupaspan[i].style.fontStyle = ''     
        lupaspan[i].style.fontFamily = '' 
        lupaspan[i].style.lineHeight = ''
    }
}
// li
for(let i = 0; i < document.querySelectorAll('li').length; i++){
    lupali[i]= document.querySelectorAll('li')[i]
    lupali[i].addEventListener('mouseover', aumenta)
    function aumenta(){
        lupali[i].style.fontSize = size + 'px'  
        lupali[i].style.fontStyle = 'normal'     
        lupali[i].style.fontFamily = 'courier,arial,helvetica' 
        lupali[i].style.lineHeight = size + 'px'
    }
    lupali[i].addEventListener('mouseout', diminui)

    function diminui(){
        lupali[i].style.fontSize = ''
        lupali[i].style.fontStyle = ''     
        lupali[i].style.fontFamily = '' 
        lupali[i].style.lineHeight = ''
    }
}
// h2
for(let i = 0; i < document.querySelectorAll('h2').length; i++){
    lupah2[i]= document.querySelectorAll('h2')[i]
    lupah2[i].addEventListener('mouseover', aumenta)
    function aumenta(){
        lupah2[i].style.fontSize = size + 'px'  
        lupah2[i].style.fontStyle = 'normal'     
        lupah2[i].style.fontFamily = 'courier,arial,helvetica' 
        lupah2[i].style.lineHeight = size + 'px'
    }
    lupah2[i].addEventListener('mouseout', diminui)

    function diminui(){
        lupah2[i].style.fontSize = ''
        lupah2[i].style.fontStyle = ''     
        lupah2[i].style.fontFamily = '' 
        lupah2[i].style.lineHeight = ''
    }
}
// h3
for(let i = 0; i < document.querySelectorAll('h3').length; i++){
    lupah3[i]= document.querySelectorAll('h3')[i]
    lupah3[i].addEventListener('mouseover', aumenta)
    function aumenta(){
        lupah3[i].style.fontSize = size + 'px'  
        lupah3[i].style.fontStyle = 'normal'     
        lupah3[i].style.fontFamily = 'courier,arial,helvetica' 
        lupah3[i].style.lineHeight = size + 'px'
    }
    lupah3[i].addEventListener('mouseout', diminui)

    function diminui(){
        lupah3[i].style.fontSize = ''
        lupah3[i].style.fontStyle = ''     
        lupah3[i].style.fontFamily = '' 
        lupah3[i].style.lineHeight = ''
    }
}
// h4
for(let i = 0; i < document.querySelectorAll('h4').length; i++){
    lupah4[i]= document.querySelectorAll('h4')[i]
    lupah4[i].addEventListener('mouseover', aumenta)
    function aumenta(){
        lupah4[i].style.fontStyle = 'normal'     
        lupah4[i].style.fontFamily = 'courier,arial,helvetica' 
        lupah4[i].style.lineHeight = size + 'px'
    }
    lupah4[i].addEventListener('mouseout', diminui)

    function diminui(){
        lupah4[i].style.fontSize = ''
        lupah4[i].style.fontStyle = ''     
        lupah4[i].style.fontFamily = '' 
        lupah4[i].style.lineHeight = ''
    }
}
// h5
for(let i = 0; i < document.querySelectorAll('h5').length; i++){
    lupah5[i]= document.querySelectorAll('h5')[i]
    lupah5[i].addEventListener('mouseover', aumenta)
    function aumenta(){
        lupah5[i].style.fontStyle = 'normal'     
        lupah5[i].style.fontFamily = 'courier,arial,helvetica' 
        lupah5[i].style.lineHeight = size + 'px'
    }
    lupah5[i].addEventListener('mouseout', diminui)

    function diminui(){
        lupah5[i].style.fontSize = ''
        lupah5[i].style.fontStyle = ''     
        lupah5[i].style.fontFamily = '' 
        lupah5[i].style.lineHeight = ''
    }
}
// h6
for(let i = 0; i < document.querySelectorAll('h6').length; i++){
    lupah6[i]= document.querySelectorAll('h6')[i]
    lupah6[i].addEventListener('mouseover', aumenta)
    function aumenta(){
        lupah6[i].style.fontStyle = 'normal'     
        lupah6[i].style.fontFamily = 'courier,arial,helvetica' 
        lupah6[i].style.lineHeight = size + 'px'
    }
    lupah6[i].addEventListener('mouseout', diminui)

    function diminui(){
        lupah6[i].style.fontSize = ''
        lupah6[i].style.fontStyle = ''     
        lupah6[i].style.fontFamily = '' 
        lupah6[i].style.lineHeight = ''
    }
}
// tr
for(let i = 0; i < document.querySelectorAll('tr').length; i++){
    lupatr[i]= document.querySelectorAll('tr')[i]
    lupatr[i].addEventListener('mouseover', aumenta)
    function aumenta(){
        lupatr[i].style.fontStyle = 'normal'     
        lupatr[i].style.fontFamily = 'courier,arial,helvetica' 
        lupatr[i].style.lineHeight = size + 'px'
    }
    lupatr[i].addEventListener('mouseout', diminui)

    function diminui(){
        lupatr[i].style.fontStyle = ''     
        lupatr[i].style.fontFamily = '' 
        lupatr[i].style.lineHeight = ''
    }
}
