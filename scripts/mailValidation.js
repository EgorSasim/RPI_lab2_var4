$mail = document.getElementById('userMail');
$sendMailBtn = document.getElementById('sendMail');
$successMessage = document.querySelector('.successMessage');
$incorrectMailMessage = document.querySelector('.incorrectMailMessage');

$sendMailBtn.onclick = () =>{
    if(validateEmail($mail.value)){
        showSuccessMessage();
    } else{
        showIncorrectMailMessage();
    }
}


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

function showSuccessMessage(){
    $successMessage.style.opacity = 1;
    $successMessage.style.marginLeft = "200px";
    setTimeout(() => {
        $successMessage.style.opacity = 0;
        $successMessage.style.marginLeft = "0px"
    }, 5000);
}

function showIncorrectMailMessage(){
    $incorrectMailMessage.style.opacity = 1;
    $incorrectMailMessage.style.marginLeft = "200px";
    setTimeout(() => {
        $incorrectMailMessage.style.opacity = 0;
        $incorrectMailMessage.style.marginLeft = "0px";
    }, 5000);
    
}