// Generate a random CAPTCHA code
function generateCaptchaCode(length) {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        captcha += charset[randomIndex];
    }
    return captcha;
}

// Create and display the CAPTCHA
function createCaptcha() {
    const captchaContainer = document.getElementById('captcha');
    const captchaCode = generateCaptchaCode(5); // Change the length as needed
    captchaContainer.textContent = captchaCode;
    return captchaCode;
}

// Verify the CAPTCHA input
function verifyCaptcha(captchaInput, captchaCode) {
    return captchaInput === captchaCode;
}

const captchaForm = document.getElementById('captcha-form');
captchaForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const captchaInput = document.getElementById('captcha-input').value;
    const captchaCode = captchaContainer.textContent;
    
    if (verifyCaptcha(captchaInput, captchaCode)) {
        alert('CAPTCHA verification successful. Form submitted.');
        captchaForm.reset(); // Clear the form
    } else {
        alert('CAPTCHA verification failed. Please try again.');
        createCaptcha(); // Generate a new CAPTCHA
    }
});

// Initial CAPTCHA generation
const captchaContainer = document.getElementById('captcha');
createCaptcha();