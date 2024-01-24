var elInp = document.querySelector('.inp')
var elTitle = document.querySelector('.title')
//FIZZ BUZZ 
function fn() {
    var val = elInp.value
    if(val % 3 == 0 && val % 7 == 0){
        elTitle.textContent = 'FIZZBUZZ'
    }else if(val % 7 == 0){
        elTitle.textContent = 'BUZZ'
    }else if(val % 3 == 0){
        elTitle.textContent = 'FIZZ'
    }
    else{
        elTitle.textContent = 'Bolinmaydi'
    }
    elInp.value = ''
    elInp.focus()
}