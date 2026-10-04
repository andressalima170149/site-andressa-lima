// Interatividade do site Dra. Andressa Lima
document.addEventListener('DOMContentLoaded', () => {
    // Menu Mobile Toggle
    const mobileBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Formulário de Contato -> Encaminha direto para WhatsApp
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('formName').value;
            const phone = document.getElementById('formPhone').value;
            const spec = document.getElementById('formSpec').value || 'Não informado';
            const message = document.getElementById('formMessage').value;

            const text = `Olá, Dra. Andressa! Meu nome é *${name}* (${phone}), especialidade/área: *${spec}*.

*Mensagem:* ${message}

(Enviado através do site oficial)`;
            const encoded = encodeURIComponent(text);
            window.open(`https://wa.me/5521992005555?text=${encoded}`, '_blank');
        });
    }
});
