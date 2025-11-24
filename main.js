const input = document.getElementById("input");
const button = document.getElementById("button");
const errorMess = document.getElementById("errorMess");

const emailPattern = /^[^\s@]+@[^\s]+\.[^\s@]+$/;


button.addEventListener("click", () =>{
    const email = input.value.trim();

    if(!emailPattern.test(email)) {
        errorMess.style.display = "flex";
        input.classList.remove("active");
        input.style.border = "1px solid red";
    } else {
        errorMess.style.display = "none";
        input.classList.add("active");
        input.style.border = "1px solid pink";

        alert("Your email have been submitted");

        location.reload();
    }
 
    
   input.addEventListener("input", () => {
    if(!emailPattern.test(email)) {
         errorMess.style.display = "none";
        input.classList.add("active");
        input.style.border = "1px solid pink";
    } else {
        errorMess.style.display = "flex";
        input.classList.remove("active");
        input.style.border = "1px solid red";
    }
       
    });
 
});