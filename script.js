var isStatus = document.querySelector("h5")

var add = document.querySelector("#Add")

let check = 0

add.addEventListener("click",function(){
   
    
    if(check == 0){
        isStatus.innerHTML = "Friends" 
        isStatus.style.color = "green"
        check = 1
    }
    else{
        isStatus.innerHTML = "Stranger" 
        isStatus.style.color = "red"
        check = 0
    }
   
})

