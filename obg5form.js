function validateForm() {

    var name = document.forms["form"]["name"];
    var phone = document.forms["form"]["phone"];
    var email = document.forms["form"]["email"];
    var adresse = document.forms["form"]["adresse"];
    var message = document.forms["form"]["message"];
    var e = document.getElementById("subject");
    var userChoice = e.options[e.selectedIndex].text;

    if (name.value == "") {
        alert("Vennligst fyll ut navn");
        return false;
    }
    if (adresse.value == "") { 
        window.alert("Vennligst fyll ut addresse."); 
        return false; 
    }  
    if (phone.value == "") { 
        window.alert("Vennligst fyll ut telefonnummeret ditt"); 
        return false; 
    } 
    if (email.value == "") { 
        window.alert("Vennligst fyll inn en gyldig epost-adresse"); 
        return false; 
    }
    if (email.value.indexOf("@", 0) < 0) { 
        window.alert("Vennligst fyll inn en gyldig epost-adresse");
        return false; 
    }
    if (email.value.indexOf(".", 0) < 0) { 
        window.alert("Vennligst fyll inn en gyldig epost-adresse");
        return false; 
    }

    if(userChoice=="Velg")
    {
        alert("Vennligst velg et tema");
        return false; 
    }
    if (message.value == "") { 
        window.alert("Vennligst fyll inn en beskjed"); 
        return false; 
    }
    if(!this.form.checkbox.checked)
    {
        alert('Trykk på knappen!!!');
        return false;
    }
    return true; 
}