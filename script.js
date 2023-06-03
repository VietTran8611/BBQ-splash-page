let emailCollectionForm= document.getElementById("Email-collector");

emailCollectionForm.addEventListener("submit",event => {
  event.preventDefault();
  console.log("hello");

  let ourFormData= new FormData(event.target);

  let userFirstName=ourFormData.get("Firstname")
  let userEmail=ourFormData.get("Email")

   let updatedHtmlContent = `
       <h2>Congratulations, ${userFirstName}!</h2>

        <p>You're on your way to becoming a BBQ Master!</p>

        <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmail}</p>
                    
        <p class="fine-print">We'll never share your information without your permission</p>
   `
   let ourMainContent=document.getElementById("Main-COntent");
   ourMainContent.innerHTML=updatedHtmlContent;

})

fetch("https://www.timeapi.io/api/Time/current/zone?timeZone=Europe/Amsterdam")
      .then(res=>res.json())
      .then(data=> console.log(data))
