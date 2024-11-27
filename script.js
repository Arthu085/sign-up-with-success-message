function validarEmail(email) {
	const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return regex.test(email);
}

document.getElementById('button').addEventListener('click', function(event) {
	event.preventDefault(); 

	const emailInput = document.getElementById('email');
	const email = emailInput.value;
	const messageElement = document.getElementById('message');
	emailInput.classList.remove('input-error');

	if (validarEmail(email)) {
		setTimeout(function() {
      window.location.href = 'success_page.html'; 
    }, 0);  

	} else {
		messageElement.textContent = 'Por favor, insira um email válido.';
		messageElement.className = 'error';
		emailInput.classList.add('input-error');
	}
});