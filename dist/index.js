function validateForm() {
    let name = document.forms["registerForm"]["Name"];
    let phone = document.forms["registerForm"]["Phone"];
    let email = document.forms["registerForm"]["Email"];

    if (name.value == "") {
        alert("Введите имя");
        return false;
    }

    if (phone.value == "") {
        alert("Введите номер телефона");
        return false;
    }

    if (!phone.value.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
        alert("Неверный номер телефона");
        return false;
    }

    if (email.value == "") {
        alert("Введите электронный адрес");
        return false;
    }

    if (!email.value.toLowerCase().match( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        alert("Неверный электронный адрес");
        return false;
    }

}