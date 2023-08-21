let get_input = document.getElementById('get_input')
let buttons = document.querySelectorAll('.button')
let display = document.getElementById('display')
console.log(buttons);
let arr = Array.from(buttons)
let array = []
let string = ''
arr.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(1);
        if(e.target.innerHTML == "="){
            string += `=` + eval(string)
            get_input.value = string
            array.push((string))
            sessionStorage.setItem('array',`${array}`)
        }else if(e.target.innerHTML == "AC"){
            string = ''
            get_input.value = string
        }else if(e.target.innerHTML == "DEL"){
            string = string.slice(0,string.length - 1)
            get_input.value = string
        }else{
            string += e.target.innerHTML
            get_input.value = string
        }
    })
})

let s = 0
document.getElementById('upArrow').addEventListener('click',()=>{
    document.getElementById('display').style.display =" block"
    let session = sessionStorage.getItem('array').split(',')
    console.log(session);
    if(s < session.length){
        document.getElementById('display').innerHTML= session[s++]
    }
})
document.getElementById('downArrow').addEventListener('click',()=>{
    let session = sessionStorage.getItem('array').split(',')
    console.log(session);
    if(s > 0){
        document.getElementById('display').innerHTML= session[--s]
    }
})