document.addEventListener('DOMContentLoaded', function() {
    let sendButton = document.getElementById('send');
    let resetButton = document.getElementById('reset');
    let form = document.getElementById('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
    });

    resetButton.addEventListener('click', function () {
        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let message = document.getElementById('message');

        name.value = '';
        email.value = '';
        message.value = '';
    });

    sendButton.addEventListener('click', function () {
        console.log("sent");
        let nameInput = document.getElementById('name');
        let emailInput = document.getElementById('email');
        let messageInput = document.getElementById('message');

        let name = nameInput.value;
        let email = emailInput.value;
        let message = messageInput.value;

        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('message', message);
    });
});

