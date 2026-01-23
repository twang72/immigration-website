// CRS Calculator
function calculateCRS() {
    const age = parseInt(document.getElementById('age').value) || 0;
    const education = parseInt(document.getElementById('education').value) || 0;
    const language = parseInt(document.getElementById('language').value) || 0;
    const experience = parseInt(document.getElementById('experience').value) || 0;
    
    // Age points (simplified)
    let agePoints = 0;
    if (age >= 18 && age <= 35) {
        agePoints = 110;
    } else if (age >= 36 && age <= 39) {
        agePoints = 105 - (age - 36) * 5;
    } else if (age >= 40 && age <= 45) {
        agePoints = 95 - (age - 40) * 5;
    }
    
    const totalScore = agePoints + education + language + experience;
    
    // Display result
    const resultBox = document.getElementById('crsResult');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const scoreMessage = document.getElementById('scoreMessage');
    
    scoreDisplay.textContent = totalScore;
    resultBox.style.display = 'block';
    
    // Score interpretation
    if (totalScore >= 470) {
        scoreMessage.textContent = 'Excellent! Your score is competitive for Express Entry.';
        scoreMessage.style.color = '#28a745';
    } else if (totalScore >= 400) {
        scoreMessage.textContent = 'Good score! You may be invited in future draws.';
        scoreMessage.style.color = '#ffc107';
    } else {
        scoreMessage.textContent = 'Consider improving your score through education, language, or work experience.';
        scoreMessage.style.color = '#dc3545';
    }
    
    // Scroll to result
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Processing Time Estimator
function showProcessingTime() {
    const program = document.getElementById('program').value;
    const resultBox = document.getElementById('processingResult');
    const processingTime = document.getElementById('processingTime');
    
    const processingTimes = {
        'express': '6 months (complete application to PR)',
        'pnp': '15-19 months (including provincial nomination)',
        'family': '12-14 months for spousal sponsorship',
        'study': '8-12 weeks (varies by country)',
        'work': '8-12 weeks (varies by work permit type)'
    };
    
    if (program && processingTimes[program]) {
        processingTime.textContent = processingTimes[program];
        resultBox.style.display = 'block';
    } else {
        resultBox.style.display = 'none';
    }
}

// Eligibility Check
function checkEligibility() {
    const check1 = document.getElementById('check1').checked;
    const check2 = document.getElementById('check2').checked;
    const check3 = document.getElementById('check3').checked;
    const check4 = document.getElementById('check4').checked;
    
    const resultBox = document.getElementById('eligibilityResult');
    const message = document.getElementById('eligibilityMessage');
    
    const checkedCount = [check1, check2, check3, check4].filter(Boolean).length;
    
    resultBox.style.display = 'block';
    
    if (checkedCount === 4) {
        message.textContent = '✅ Congratulations! You appear to meet the basic eligibility criteria for Express Entry. Contact us for a detailed assessment.';
        message.style.color = '#28a745';
    } else if (checkedCount >= 2) {
        message.textContent = '⚠️ You meet some requirements but may need to improve in certain areas. We recommend a consultation to explore your options.';
        message.style.color = '#ffc107';
    } else {
        message.textContent = '❌ You may not currently meet the basic eligibility requirements. Contact us to discuss alternative immigration pathways.';
        message.style.color = '#dc3545';
    }
    
    resultBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formMessage = document.getElementById('formMessage');
        const submitButton = contactForm.querySelector('button[type="submit"]');
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Disable submit button
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
        
        try {
            // Send to backend
            const response = await fetch('http://localhost:3000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            
            if (result.success) {
                formMessage.textContent = result.message;
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                contactForm.reset();
            } else {
                formMessage.textContent = result.message || 'Failed to send message. Please try again.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
            }
        } catch (error) {
            console.error('Error:', error);
            formMessage.textContent = 'Unable to connect to server. Please try again later or contact us directly.';
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
        } finally {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = 'Send Message';
            
            // Hide message after 5 seconds
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
