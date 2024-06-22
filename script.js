
document.addEventListener("DOMContentLoaded", function() {
   
const decrementBtn = document.getElementById("decrement-btn");
const incrementBtn = document.getElementById("increment-btn");
const countEl = document.getElementById("count-el");
const caution = document.getElementById("caution");
const clearBtn = document.getElementById("clear");
let count = 0;


countEl.textContent = count;
caution.innerText="Error:Cannot go below 0"
caution.style.color="rgb(201, 55, 55)"
checkDecrement()

incrementBtn.addEventListener("click", () => {
    count += 1;
    countEl.textContent = count;
    caution.innerText="";
    checkDecrement();
});
decrementBtn.addEventListener("click", function decrement() {
    if(count <= 1){
       caution.innerText="Error:Cannot go below 0"
       caution.style.color="rgb(201, 55, 55)"
    }
    else{
        caution.innerText="";
    }
    count -= 1;
    countEl.textContent = count;
    checkDecrement();
});
clearBtn.addEventListener("click", () => {
    count = 0;
    countEl.textContent = count;
    caution.innerText="Error:Cannot go below 0"
       caution.style.color="rgb(201, 55, 55)"
       checkDecrement();
})

function checkDecrement(){
    if(count == 0){
        clearBtn.style.display = "none";
        decrementBtn.disabled=true;
    }
    else if(count>0){
        clearBtn.style.display = "inline-block";
        decrementBtn.disabled=false;
    }
}
})
