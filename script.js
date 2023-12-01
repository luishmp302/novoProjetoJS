function showPage(pageId) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('contato').style.display = 'none';
    document.getElementById('areaAdmin').style.display = 'none';

    document.getElementById(pageId).style.display = 'block';
}

document.getElementById('name').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

document.getElementById('email').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

document.getElementById('msgEnviar').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var msg = document.getElementById('msgEnviar').value;

    if (name === '' || email === '' || msg === '') {
        alert('[ERRO] Por favor, preencha todos os campos antes de enviar a mensagem.');
        return; 
    }

    var message = name + '( ' + email + ')' + ': ' + msg;

    var messagesDiv = document.getElementById('messages');
    messagesDiv.innerHTML += '<p>' + message + '</p>';
}

function adminLogin() {
    var username = document.getElementById('adminUsername').value;
    var password = document.getElementById('adminPassword').value;

    if (username === 'admin' && password === 'admin') {
        // Exibir mensagens recebidas na área admin
        var adminMessagesDiv = document.getElementById('adminMessages');
        adminMessagesDiv.innerHTML = document.getElementById('messages').innerHTML;
    } else {
        alert('Login inválido. Tente novamente.');
    }
}
