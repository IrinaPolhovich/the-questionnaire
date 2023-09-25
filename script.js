const form = document.querySelector(".form");
const userName = document.querySelector("#name");
const userSecondName = document.querySelector("#secondName");
const userPhone = document.querySelector("#phone");
const userEmail = document.querySelector("#email");
const userAgree = document.querySelector("#agree");

form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();

    fetch('https://polinashneider.space/user', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: IrinaPolhovich'
            },
            body: JSON.stringify({
                name: userName.value,
                secondName: userSecondName.value,
                phone: userPhone.value,
                email: userEmail.value,
                agree: userAgree.value
            })
        })
        .then((result) => {
            return result.json();
        })
        .then((data) => {
            console.log(data);
            const div = document.createElement('div');
            div.classList.add('message');
            div.textContent = `${userName.value}, Вы успешно зарегистрированы!`;
            document.body.append(div);
            form.reset();
        })
        .catch((error) => {
            console.log(error);
            const div = document.createElement('div');
            div.classList.add('message');
            div.textContent = `${userName.value}, возникла ошибка`;
            document.body.append(div);
        })
});