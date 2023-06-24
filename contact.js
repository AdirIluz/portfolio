const userName = JSON.parse(localStorage.getItem("user")).name;
const userEmail = JSON.parse(localStorage.getItem("user")).email;
const userMessage = JSON.parse(localStorage.getItem("user")).message;
document.getElementById("box").innerHTML = `<a href="index.html"><i class="fa-solid fa-x"></i></a> <h1>Thank You! ${userName} </h1>
<p>We will contact you at your provided email address : ${userEmail}</p>`