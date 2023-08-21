let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('.button');
let array = []

let string = "";
let arr = Array.from(buttons);
console.log(arr);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string += '='+ eval(string);
            input.value = string;
            array.push((string))
            sessionStorage.setItem('array',`${array}`)
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})


let s = 0

document.getElementById('upArrow').addEventListener('click',()=>{
    document.getElementById('displayHistory').style.display ='block'

    let sessionstorage = sessionStorage.getItem('array')
    
    let sesion = sessionstorage.split(',')
   console.log(sesion);
//    document.getElementById('displayHistory').innerHTML += (sesion[s++]) + `<br>`
    if(s < sesion.length ){
        document.getElementById('displayHistory').innerHTML = (sesion[s++]);
    } 
})
document.getElementById('downArrow').addEventListener('click',()=>{
    let sessionstorage = sessionStorage.getItem('array')
    let sesion = sessionstorage.split(',')
    // document.getElementById('displayHistory').innerHTML = (sesion[--s]);
    if(s > 0 ){
        document.getElementById('displayHistory').innerHTML = (sesion[--s]);
    } 
})
