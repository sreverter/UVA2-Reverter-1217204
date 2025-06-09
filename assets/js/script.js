// Contact Form Validation Script
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contacto-form');
    
    // Get modal elements
    const modal = document.getElementById('responseModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalMessage = document.getElementById('modalMessage');
    const closeModalBtn = document.getElementById('closeModal');
    const okButton = document.getElementById('modalOkButton');
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Validation function
    function validateForm() {
        const nombre = document.getElementById('nombre').value.trim();
        const email = document.getElementById('email').value.trim();
        const mensaje = document.getElementById('mensaje').value.trim();
        
        const errors = [];
        
        // Validate name
        if (!nombre || nombre.length < 2) {
            errors.push('El nombre debe tener al menos 2 caracteres');
        }
        
        // Validate email
        if (!email) {
            errors.push('El email es requerido');
        } else if (!emailRegex.test(email)) {
            errors.push('Por favor ingrese un email válido');
        }
        
        // Validate message
        if (!mensaje || mensaje.length < 10) {
            errors.push('El mensaje debe tener al menos 10 caracteres');
        }
        
        return errors;
    }
    
    // Show modal function
    function showModal(isSuccess, title, message) {
        modalTitle.textContent = title;
        modalMessage.textContent = message;
        
        // Add appropriate styling
        if (isSuccess) {
            modalTitle.className = 'modal-title success-title';
        } else {
            modalTitle.className = 'modal-title error-title';
        }
        
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    
    // Hide modal function
    function hideModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
    
    // Event listener for form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission
        
        const errors = validateForm();
        
        if (errors.length > 0) {
            // Show error modal
            const errorMessage = errors.join('\n• ');
            showModal(false, 'Error en el formulario', '• ' + errorMessage);
        } else {
            // Show success modal
            showModal(true, '¡Mensaje enviado!', 'Gracias por enviar tu mensaje. Te responderemos a la brevedad.');
            
            // Clear form after successful submission
            form.reset();
        }
    });
    
    // Event listeners for closing modal
    closeModalBtn.addEventListener('click', hideModal);
    okButton.addEventListener('click', hideModal);
    
    // Close modal when clicking outside of it
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            hideModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            hideModal();
        }
    });
});

// Creacion de modo oscuro y claro

let darkMode = document.querySelector('#moon');
let lightMode = document.querySelector('#sun');
const navbar = document.getElementById('navbar');
const root = document.documentElement;

function changeDarkMode() {
    root.style.setProperty('--color-principal', '#102a43');
    root.style.setProperty('--color-secundario', '#486581');
    navbar.style.backgroundColor = 'var(--color-secundario) !important';
    lightMode.classList.remove('hidden');
    darkMode.classList.add('hidden');
}

function changeLightMode() {
    root.style.setProperty('--color-principal', '#446D9C');
    root.style.setProperty('--color-secundario', '#e6c39e');
    lightMode.classList.add('hidden');
    darkMode.classList.remove('hidden');
}

if (darkMode && lightMode) {
    darkMode.addEventListener('click', changeDarkMode);
    lightMode.addEventListener('click', changeLightMode);
}

