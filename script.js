// Helper: get current language
function getLang() {
    return localStorage.getItem('canaquest_lang') || 'en';
}

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
    const lang = getLang();
    
    scoreDisplay.textContent = totalScore;
    resultBox.style.display = 'block';
    
    // Score interpretation
    if (totalScore >= 470) {
        scoreMessage.textContent = lang === 'zh'
            ? '非常好！您的分数在快速通道中具有竞争力。'
            : 'Excellent! Your score is competitive for Express Entry.';
        scoreMessage.style.color = '#28a745';
    } else if (totalScore >= 400) {
        scoreMessage.textContent = lang === 'zh'
            ? '不错！您可能会在未来的抽签中被邀请。'
            : 'Good score! You may be invited in future draws.';
        scoreMessage.style.color = '#ffc107';
    } else {
        scoreMessage.textContent = lang === 'zh'
            ? '建议通过提升教育、语言或工作经验来提高分数。'
            : 'Consider improving your score through education, language, or work experience.';
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
    const lang = getLang();
    
    const processingTimes = {
        'express': {
            en: '6 months (complete application to PR)',
            zh: '6 个月（从完成申请到永久居留）'
        },
        'pnp': {
            en: '15-19 months (including provincial nomination)',
            zh: '15-19 个月（包括省提名）'
        },
        'family': {
            en: '12-14 months for spousal sponsorship',
            zh: '配偶担保 12-14 个月'
        },
        'study': {
            en: '8-12 weeks (varies by country)',
            zh: '8-12 周（因国家而异）'
        },
        'work': {
            en: '8-12 weeks (varies by work permit type)',
            zh: '8-12 周（因工作许可类型而异）'
        }
    };
    
    if (program && processingTimes[program]) {
        processingTime.textContent = processingTimes[program][lang];
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
    const lang = getLang();
    
    const checkedCount = [check1, check2, check3, check4].filter(Boolean).length;
    
    resultBox.style.display = 'block';
    
    if (checkedCount === 4) {
        message.textContent = lang === 'zh'
            ? '✅ 恭喜！您似乎满足快速通道的基本资格条件。请联系我们进行详细评估。'
            : '✅ Congratulations! You appear to meet the basic eligibility criteria for Express Entry. Contact us for a detailed assessment.';
        message.style.color = '#28a745';
    } else if (checkedCount >= 2) {
        message.textContent = lang === 'zh'
            ? '⚠️ 您满足部分要求，但可能需要在某些方面进行提升。我们建议您进行咨询以探索您的选择。'
            : '⚠️ You meet some requirements but may need to improve in certain areas. We recommend a consultation to explore your options.';
        message.style.color = '#ffc107';
    } else {
        message.textContent = lang === 'zh'
            ? '❌ 您目前可能不满足基本资格要求。请联系我们讨论其他移民途径。'
            : '❌ You may not currently meet the basic eligibility requirements. Contact us to discuss alternative immigration pathways.';
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
        const lang = getLang();
        submitButton.disabled = true;
        submitButton.textContent = lang === 'zh' ? '发送中...' : 'Sending...';
        
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
                formMessage.textContent = lang === 'zh' ? '消息发送成功！我们会尽快与您联系。' : result.message;
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                contactForm.reset();
            } else {
                formMessage.textContent = lang === 'zh'
                    ? '发送失败，请重试。'
                    : (result.message || 'Failed to send message. Please try again.');
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
            }
        } catch (error) {
            console.error('Error:', error);
            formMessage.textContent = lang === 'zh'
                ? '无法连接到服务器。请稍后重试或直接联系我们。'
                : 'Unable to connect to server. Please try again later or contact us directly.';
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
        } finally {
            // Re-enable submit button
            submitButton.disabled = false;
            submitButton.textContent = lang === 'zh' ? '发送消息' : 'Send Message';
            
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
