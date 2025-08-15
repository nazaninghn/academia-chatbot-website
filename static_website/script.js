// ACADEMIA - AI Chatbot Website JavaScript

// Language translations
const translations = {
    en: {
        logo: "ACADEMIA",
        nav_about: "About",
        nav_services: "Services", 
        nav_features: "Features",
        nav_contact: "Contact",
        hero_script: "Smart",
        hero_title: "AI CHATBOTS FOR BUSINESS",
        hero_subtitle: "Transform your customer service with intelligent AI chatbots that understand your business, engage customers 24/7, and boost sales automatically.",
        hero_btn: "Start Building",
        services_script: "Our",
        services_title: "CHATBOT SOLUTIONS",
        service1_title: "CUSTOMER SUPPORT",
        service2_title: "SALES ASSISTANT", 
        service3_title: "LEAD GENERATION",
        about_script: "Why Choose",
        about_title: "AI CHATBOTS?",
        about_p1: "AI chatbots revolutionize customer engagement by providing instant, personalized responses 24/7. They handle multiple conversations simultaneously, reduce response times, and never take a break.",
        about_p2: "Our intelligent chatbots learn from every interaction, becoming smarter over time. They can qualify leads, book appointments, answer FAQs, and seamlessly transfer complex queries to human agents when needed.",
        about_btn: "Learn More",
        features_script: "Key",
        features_title: "CHATBOT FEATURES",
        feature1_title: "24/7 AVAILABILITY",
        feature2_title: "MULTI-LANGUAGE",
        feature3_title: "SMART ANALYTICS",
        results_script: "Proven",
        results_title: "BUSINESS RESULTS",
        results_btn: "Get Started",
        stat1: "Increase in Lead Generation",
        stat2: "Reduction in Response Time", 
        stat3: "Customer Support Coverage",
        contact_script: "Get in",
        contact_title: "TOUCH",
        form_name: "Your Name",
        form_email: "Your Email",
        form_message: "Tell us about your business needs",
        form_submit: "Send Message",
    },
    tr: {
        logo: "ACADEMIA",
        nav_about: "Hakkında",
        nav_services: "Hizmetler",
        nav_features: "Özellikler", 
        nav_contact: "İletişim",
        hero_script: "Akıllı",
        hero_title: "İŞLETMELER İÇİN YAPAY ZEKA BOTLARI",
        hero_subtitle: "İşinizi anlayan, müşterilerinizle 7/24 etkileşim kuran ve satışları otomatik olarak artıran akıllı yapay zeka chatbotları ile müşteri hizmetlerinizi dönüştürün.",
        hero_btn: "Başlayalım",
        services_script: "Bizim",
        services_title: "CHATBOT ÇÖZÜMLERİMİZ",
        service1_title: "MÜŞTERİ DESTEĞİ",
        service2_title: "SATIŞ ASİSTANI",
        service3_title: "POTANSIYEL MÜŞTERİ",
        about_script: "Neden",
        about_title: "YAPAY ZEKA BOTLARI?",
        about_p1: "Yapay zeka chatbotları, 7/24 anında ve kişiselleştirilmiş yanıtlar sağlayarak müşteri etkileşiminde devrim yaratır. Aynı anda birden fazla konuşmayı yönetir, yanıt sürelerini azaltır ve hiç mola vermez.",
        about_p2: "Akıllı chatbotlarımız her etkileşimden öğrenir ve zamanla daha akıllı hale gelir. Potansiyel müşterileri değerlendirebilir, randevu alabilir, sık sorulan soruları yanıtlayabilir ve karmaşık sorguları gerektiğinde insan acentelere sorunsuz bir şekilde aktarabilir.",
        about_btn: "Daha Fazla",
        features_script: "Temel",
        features_title: "CHATBOT ÖZELLİKLERİ",
        feature1_title: "7/24 ERİŞİM",
        feature2_title: "ÇOK DİLLİ DESTEK",
        feature3_title: "AKILLI ANALİTİK",
        results_script: "Kanıtlanmış",
        results_title: "İŞ SONUÇLARI",
        results_btn: "Başlayın",
        stat1: "Potansiyel Müşteri Artışı",
        stat2: "Yanıt Süresinde Azalma",
        stat3: "Müşteri Destek Kapsamı",
        contact_script: "İletişime",
        contact_title: "GEÇİN",
        form_name: "Adınız",
        form_email: "E-posta Adresiniz",
        form_message: "İş ihtiyaçlarınızı bize anlatın",
        form_submit: "Mesaj Gönder",
    }
};

// Current language
let currentLang = localStorage.getItem("lang") || "en";

// Cache DOM elements for better performance
const langElements = {
    i18n: document.querySelectorAll("[data-i18n]"),
    placeholder: document.querySelectorAll("[data-i18n-placeholder]")
};

// Language switching function
function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    document.documentElement.lang = lang;
    
    const langData = translations[lang];
    
    // Update text content
    langElements.i18n.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (langData[key]) {
            el.textContent = langData[key];
        }
    });
    
    // Update placeholders
    langElements.placeholder.forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (langData[key]) {
            el.placeholder = langData[key];
        }
    });
    
    // Update language button
    const langBtn = document.getElementById("lang-btn");
    if (langBtn) {
        langBtn.textContent = lang === "en" ? "TR" : "EN";
        langBtn.title = lang === "en" ? "Türkçe'ye geç" : "Switch to English";
    }
}

// Header scroll effect
function handleScroll() {
    const header = document.getElementById('header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Contact form handling
function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Simple validation
            if (!name || !email || !message) {
                alert(currentLang === 'en' ? 'Please fill in all fields.' : 'Lütfen tüm alanları doldurun.');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert(currentLang === 'en' ? 'Please enter a valid email address.' : 'Lütfen geçerli bir e-posta adresi girin.');
                return;
            }
            
            // Success message
            alert(currentLang === 'en' ? 
                'Thank you for your message! We will get back to you soon.' : 
                'Mesajınız için teşekkürler! En kısa sürede size dönüş yapacağız.');
            
            // Reset form
            form.reset();
        });
    }
}

// Intersection Observer for animations
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for fade-in animation
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language
    setLanguage(currentLang);
    
    // Initialize smooth scrolling
    initSmoothScrolling();
    
    // Initialize contact form
    initContactForm();
    
    // Initialize animations
    initAnimations();
    
    // Language button event listener
    const langBtn = document.getElementById("lang-btn");
    if (langBtn) {
        langBtn.addEventListener("click", (e) => {
            // Visual feedback
            e.target.style.transform = 'scale(0.95)';
            setTimeout(() => {
                e.target.style.transform = '';
            }, 150);
            
            // Switch language
            setLanguage(currentLang === "en" ? "tr" : "en");
        });
    }
    
    // Scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial scroll check
    handleScroll();
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handler
window.addEventListener('scroll', debounce(handleScroll, 10));