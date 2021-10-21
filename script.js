let changeTheme = document.querySelectorAll('.option')
let container = document.querySelector('.container')


changeTheme.forEach(theme => theme.addEventListener('click', ()=>{


    if(theme.textContent === '1') {
        container.classList = "container"
        container.classList.add('dark')
    }
    if(theme.textContent === '2') {
        container.classList = "container"
        container.classList.add('light')
    }
    if(theme.textContent === '3') {
        container.classList = "container"
        container.classList.add('purple')
    }
}))

/* --------------------------------CALCULATOR ---------------------------------*/

let result = document.querySelector('#input')
let calculate = (number) =>{
    
    result.value += number
    
}

let Result=()=>{
    try{
        result.value = eval(result.value)
    }
    catch(err){
        alert('Enter the valid result')
    }
}
let reset = ()=>{
    result.value=""
   
    
}
let del = ()=>{
    result.value = result.value.slice(0, -1)
}