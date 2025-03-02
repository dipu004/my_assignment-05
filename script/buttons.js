
const incrementCount = document.getElementById("increment");
const decrementCount = document.getElementById("decrement");
const convertedIncrement = parseInt(incrementCount.innerText);
const convertedDecrement = parseInt(decrementCount.innerText);

let count = 0;

const blueButtons = document.querySelectorAll(".blue-btn");
    for(const btn of blueButtons){
        btn.addEventListener("click", function(event){
            
            count++;
           alert("board updated successfully");
           
        

          
            event.target.setAttribute("disabled","true")
             event.target.style.opacity = "0.1";

       
            
        
             const decrementNumber = convertedDecrement - count;
             decrementCount.innerText = decrementNumber;
            

              const incrementNumber = convertedIncrement + count;
             incrementCount.innerText = incrementNumber;
             

         const paragraph = event.target.parentElement.parentElement.querySelector("h1").innerText;
            const addHistoy = document.getElementById("empty");
            const p = document.createElement("p")
            p.innerHTML = `
                 You have Complete The Task ${paragraph}.at ${new Date().toLocaleString()};
            `
            p.style.backgroundColor = 'cyan';
            p.style.color = 'black';
            p.style.padding = '4px';
            p.style.marginTop = '10px';
            p.style.borderRadius = '8px'
        
            addHistoy.appendChild(p);
            if(decrementNumber === 0){
                alert("congrates!!! You have complete all the current task")
               }
            
        })
    }
