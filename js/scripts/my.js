let myhead=document.querySelector('h1')
let welcome=document.querySelector('h2')
let btn=document.querySelector('button')
myhead.textContent="Hellow world"
let imge=document.querySelector('img')
imge.addEventListener('click',function(){
    if(imge.getAttribute('src')==='img/1.jpg'){
        imge.setAttribute('src','img/2.jpg')
    }
    else{
        imge.setAttribute('src','img/1.jpg')
    }
})
function setName(){
    let userName=prompt('welcome to my site')
    if(!userName){
        setName()
    }else{
    localStorage.setItem('name',userName)
    welcome.textContent='welcome to my site,'+""+ userName}
}
if(!localStorage.getItem('name')){
    setName()
}else{
 let name=localStorage.getItem('name')
 welcome.textContent='welcome to my site,'+""+ name
}
btn.addEventListener('click',function(){
    setName()
})