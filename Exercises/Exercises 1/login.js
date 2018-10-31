function validate() {
    event.preventDefault();
    var ph = document.getElementById("phone");
    var user = document.getElementById("name");
    var em = document.getElementById("ema");
    if (user.value == "")
        alert("Enter a valid name");
    var phoneno = /^\d{10}$/;
    if ((!ph.value.match(phoneno.value)))
        alert("Enter a valid phone number");
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(em.value)) {
        alert("Enter a valid email address");
    }
    else {
        console.log(user.value);
        console.log(ph.value);
        console.log(ema.value);
        alert("Successfully loaded");
        window.location.href = "contacts.html";
    }

}