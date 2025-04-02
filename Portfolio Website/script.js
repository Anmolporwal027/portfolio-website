// To Get The RESUME When Clicked
const resume_btn = document.querySelector(".btn");
resume_btn.addEventListener('click',()=>{
    window.open("resume_anmol.pdf","_blank")
})


// FORM VALIDATION
const form = document.querySelector("form");
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const namee = document.querySelector("#name").value.trim()
    const email = document.querySelector("#email").value.trim()
    const subject = document.querySelector("#subject").value.trim()
    const message = document.querySelector("#message").value.trim()


    if(namee === "" || email === "" || subject === "" || message === ""){
        alert("All fields are required");
        return;
    }
    const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailpattern.test(email)){
        alert("Enter correct email");
        return;
    }

    if(message.length < 5){
        alert("Message should be at least 5 characters long.");
        return;
    }
    form.submit();
    form.reset()
    
});


// to update footer year automatically 
document.addEventListener("DOMContentLoaded", function (){
    let yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    else{
        console.log("not found any element year");
        
    }
});


