document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        clearErrors();
        
        const validationResult = validateForm();
        
        if (validationResult.isValid) {
            handleFormSubmission(validationResult.formData);
        } else {
            displayErrors(validationResult.errors);
        }
    });
    
    function validateForm() {
        const username = document.getElementById('username').value.trim();
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        const errors = [];
        
        
        if (username.length < 3) {
            errors.push({
                field: 'username',
                message: 'Username must be at least 3 characters long'
            });
        }
        
        if (fullName.length < 2) { 
            errors.push({
                field: 'fullName',
                message: 'Please enter your name'
            });
        }
        
        if (!validateEmail(email)) {
            errors.push({
                field: 'email',
                message: 'Please enter a valid email address'
            });
        }
        
        if (password.length < 8) {
            errors.push({
                field: 'password',
                message: 'Password must be at least 8 characters long'
            });
        }
        
        if (password !== confirmPassword) {
            errors.push({
                field: 'confirmPassword',
                message: 'Passwords do not match'
            });
        }
        
        return {
            isValid: errors.length === 0,
            errors: errors,
            formData: errors.length === 0 ? { username, fullName, email, password } : null
        };
    }
    
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    
    function displayErrors(errors) {
        errors.forEach(error => {
            const field = document.getElementById(error.field);
            const formGroup = field.closest('.form-group');
            
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.textContent = error.message;
            field.classList.add('input-error');
            formGroup.appendChild(errorDiv);
        });
    }
    
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(msg => msg.remove());
        
        const errorInputs = document.querySelectorAll('.input-error');
        errorInputs.forEach(input => input.classList.remove('input-error'));
    }
    
    function handleFormSubmission(formData) {
        console.log('Form submitted:', formData);
        form.reset();
        alert('Account created successfully!'); 
    }
});