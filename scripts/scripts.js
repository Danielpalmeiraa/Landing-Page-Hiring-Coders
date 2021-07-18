function getData() {
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');

    localStorage.setItem('Nome', nameInput.value);
    localStorage.setItem('E-Mail', emailInput.value);

    
    alert('Obrigado! Cadastro efetuado. Em breve você receberá as nossas promoções.');
}
