document.getElementById('saveButton').addEventListener('click', function () {
    let username = document.getElementById('usernameInput').value.trim();
    let password = document.getElementById('passwordInput').value.trim();
    let messageElement = document.getElementById('message');


    if (!/^[A-Za-z]+$/.test(username)) {
        messageElement.textContent = 'Имя пользователя';
        return;
    }


    if (!/^(?=.*[A-Za-z])(?=.*\d).+$/.test(password)) {
        messageElement.textContent = 'Пароль ';
        return;
    }


    messageElement.textContent = 'Ваши данные записаны';
});
