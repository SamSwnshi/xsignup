document.getElementById("subscribe").addEventListener("submit",function(e){
    e.preventDefault()
    const email = document.getElementById('email').value;
    localStorage.setItem("SubscribeEmail",email)
    window.location.href = "thank.html"
})