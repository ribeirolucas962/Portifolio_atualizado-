// Mobile Menu Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

// Certificates Data
let certificatesData = {
    "categories": {
        "python": {
            "title": "Python",
            "description": "Certificados relacionados à programação em Python para análise de dados e ciência de dados",
            "icon": "fab fa-python",
            "iconUrl": "imagens/icons8-python-48.png",
            "certificates": [
                {
                    "courseName": "Python para Análise de Dados",
                    "institution": "Data Science Academy",
                    "filePath": "certificados/Python/Análise de Dados com Python.pdf"
                },
                {
                    "courseName": "Limpeza e Organização de Dados com Python.pd",
                    "institution": "DNC",
                    "filePath": "certificados/Python/Limpeza e Organização de Dados com Python.pdf"
                },
                {
                    "courseName": "Projeto de Criação de modelo de previsao de faturamento.pdf",
                    "institution": "DNC",
                    "filePath": "certificados/Python/Projeto de Criação de modelo de previsao de faturamento.pdf"
                },
                {
                    "courseName": "Projeto",
                    "institution": "DNC",
                    "filePath": "certificados/Python/Projeto.pdf"
                }
            ]
            
             
        },
        "sql": {
            "title": "SQL",
            "description": "Certificados relacionados a banco de dados e consultas SQL",
            "icon": null,
            "iconUrl": "imagens/servidor-sql.png",
            "certificates": [
                {
                    "courseName": "Banco de dados mysql",
                    "institution": "DNC",
                    "filePath": "certificados/SQL/banco de dados mysql.pdf"    
                },
                {
                    "courseName": "SQL para Análise de Dados",
                    "institution": "DNC",
                    "filePath": "certificados/SQL/SQL para Análise de  Dados.pdf"  
                }
            ]
        },
        "power_bi": {
            "title": "Power BI",
            "description": "Certificados relacionados à visualização de dados e business intelligence com Power BI",
            "icon": null,
            "iconUrl": "imagens/icons8-poder-bi-2021-48.png",
            "certificates": [
                {
                    "courseName": "Controle de recalamaçoes",
                    "institution": "DNC",
                    "filePath": "certificados/Power Bi/controle de recalamaçoes.pdf"
                },
                {
                    "courseName": "Excel basico",
                    "institution": "Proway",
                    "filePath": "certificados/Power Bi/excel basico.pdf"
                },
                {
                    "courseName": "Excel intermediario",
                    "institution": "Proway",
                    "filePath": "certificados/Power Bi/excel intermediario.pdf"
                },
                {
                    "courseName": "Inteligência de Mercado",
                    "institution": "DNC",
                    "filePath": "certificados/Power Bi/Inteligência de Mercado.pdf"
                },
                {
                    "courseName": "Projeto de reclamcao",
                    "institution": "DNC",
                    "filePath": "certificados/Power Bi/Projeto de reclamcao.pdf"
                },
                {
                    "courseName": "Teste de excel",
                    "institution": "NIN",
                    "filePath": "certificados/Power Bi/teste de excel.pdf"
                },
                {
                    "courseName": "Análise de Dados com  Excel e Power BI",
                    "institution": "DNC",
                    "filePath": "certificados/Power Bi/Análise de Dados com  Excel e Power BI.pdf"
                }

            ]
        },
        "data_science": {
            "title": "Ciência de Dados",
            "description": "Certificados relacionados à ciência de dados, machine learning e análise estatística",
            "icon": null,
            "iconUrl": "./imagens/ciencia-de-dados.png",
            "certificates": [
                {
                    "courseName": "Análise de Dados",
                    "institution": "DNC",
                    "filePath": "certificados/Data science/Análise de Dados.pdf"
                },
                {
                    "courseName": "CBS dance Factory",
                    "institution": "DNC",
                    "filePath": "certificados/Data science/CBS dance Factory.pdf"
                },
                {
                    "courseName": "Formação de dados",
                    "institution": "DNC",
                    "filePath": "certificados/Data science/Certificado de Conclusão do Curso Formação Completa em Estatística.pdf"
                },
                {
                    "courseName": "Ciência de Dados",
                    "institution": "Data Science Academy",
                    "filePath": "certificados/Data science/Ciência de Dados.pdf"
                },
                {
                    "courseName": "Classifcação em Machine Learning",
                    "institution": "DNC",
                    "filePath": "certificados/Data science/Classifcação em Machine Learning.pdf"
                },
                {
                    "courseName": "Clusterização em  Machine Learning",
                    "institution": "DNC",
                    "filePath": "certificados/Data science/Clusterização em  Machine Learning.pdf"
                },
                {
                    "courseName": "Data Science Full Stack",
                    "institution": "DNC",
                    "filePath": "certificados/Data science/Data Science Full Stack.pdf"
                },
                {
                    "courseName": "Formação Complementar em Ciências de Dados",
                    "institution": "ESTATIDADOS",
                    "filePath": "certificados/Data science/Formação Complementar em DS estatidados.pdf"
                },
                {
                    "courseName": "Introdução a Modelo de  Regressão Linear",
                    "institution": "DNC",
                    "filePath": "certificados/Data science/Introdução a Modelo de  Regressão Linear.pdf"
                },
                {
                    "courseName": "Certificado de Conclusão do Curso Formação Completa em Estatística",
                    "institution": "ESTATIDADOS",
                    "filePath": "certificados/Data science/Certificado de Conclusão do Curso Formação Completa em Estatística.pdf"
                }
            ]
        },
        // SE QUISER CRIAR OUTRAS CATEGORIAS É POSSÍVEL
        "outra_categoria": {
            "title": "Outra Categoria",
            "description": "Categora de exemplo para novos certificados",
            // SE A CATEGORIA TIVER ICONE NO FONTAWESOME É POSSÍVEL USAR O FONTAWESOME COMO ABAIXO
            "icon": "fas fa-certificate",
            // SE A CATEGORIA NÃO TIVER ICONE NO FONTAWESOME É POSSÍVEL USAR UMA IMAGEM DA RAIZ DO PROJEO, OLHE COMO EXEMPLO A CATEGORIA PYTHON
            "iconUrl": null,
            "certificates": [
                // AQUI VAI UMA LISTA DE CERTIFICADOS
                { 
                    "courseName": "Ada tec fundamentos da matematica",
                    "institution": "Ada",
                    "filePath": "certificados/Outras categorias/ada tec fundamentos da matematica.pdf"
                },
                {
                    "courseName": "Certificado - Trilha Digital _ Coders 24 _ Data Science (1)",
                    "institution": "Ada",
                    "filePath": "certificados/Outras categorias/Certificado - Trilha Digital _ Coders 24 _ Data Science (1).pdf"
                },
                {
                    "courseName": "certificado ada tec.",
                    "institution": "Ada",
                    "filePath": "certificados/Outras categorias/certificado ada tec.pdf"
                },                {
                    "courseName": "certificado de IA da proway",
                    "institution": "Proway",
                    "filePath": "certificados/Outras categorias/certificado de IA da proway.pdf"
                },
                {
                    "courseName": "Certificado ILP",
                    "institution": "Proway",
                    "filePath": "certificados/Outras categorias/Certificado ILP.pdf"
                },
                {
                    "courseName": "Certificado LA1",
                    "institution": "Proway",
                    "filePath": "certificados/Outras categorias/Certificado LA1.pdf"
                },
                {
                    "courseName": "Certificado LA2",
                    "institution": "Proway",
                    "filePath": "certificados/Outras categorias/Certificado LA2.pdf"
                },
                {
                    "courseName": "entendimento do mercado",
                    "institution": "Ada",
                    "filePath": "certificados/Outras categorias/entendimento do mercado.pdf"
                },
                {
                    "courseName": "Algoritimo",
                    "institution": "Curso em video",
                    "filePath": "certificados/Outras categorias/LUCAS-RIBEIRO-NEPOMUCENO-DE-ALMEIDA-Algoritmo-40-Horas-Certificado-Curso-em-Video.pdf"
                },
                {
                    "courseName": "CHATGPT",
                    "institution": "Udemy",
                    "filePath": "certificados/Outras categorias/UC-03b79d3b-67ad-44d1-812f-ec29ac884638 CHATTGPT4.pdf"
                },
                {
                    "courseName": "AWS_Academy_Graduate",
                    "institution": "AWS",
                    "filePath": "certificados/Outras categorias/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20250515-27-coe5gz.pdf"
                }
            ]

        }
    }
};

burger.addEventListener('click', () => {
    // Toggle Navigation
    nav.classList.toggle('active');
    burger.classList.toggle('active');

    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Smooth Scrolling for Navigation Links
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

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
        nav.classList.remove('active');
        burger.classList.remove('toggle');
    }
});

// Scroll Animation for Elements
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease-out';
    observer.observe(section);
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Mensagem enviada com sucesso!');
        contactForm.reset();
    });
}

// Profile Image Modal
const profileImg = document.getElementById('profile-img');
const modal = document.getElementById('profile-modal');
const closeModal = document.querySelector('.close-modal');

profileImg.addEventListener('click', () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Text rotation animation
function initTextRotation() {
    const typingText = document.querySelector('.typing-text');
    const texts = JSON.parse(typingText.getAttribute('data-texts'));
    let currentIndex = 0;

    function updateText() {
        // Fade out current text
        typingText.style.opacity = '0';
        typingText.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            // Update text content
            typingText.textContent = texts[currentIndex];
            
            // Fade in new text
            typingText.style.opacity = '1';
            typingText.style.transform = 'translateY(0)';
            
            // Move to next text
            currentIndex = (currentIndex + 1) % texts.length;
        }, 500);
    }

    // Set initial text
    typingText.textContent = texts[0];
    
    // Update text every 5 seconds
    setInterval(updateText, 5000);
}

// Initialize text rotation when the page loads
document.addEventListener('DOMContentLoaded', initTextRotation);

document.addEventListener('DOMContentLoaded', () => {
    const typingTexts = document.querySelectorAll('.typing-text');
    
    typingTexts.forEach((text, index) => {
        text.style.setProperty('--i', index);
        text.style.width = '0';
        text.style.animationDelay = `${index * 1.5}s`;
    });
});

// Certificates Modal
const certificatesModal = document.getElementById('certificates-modal');
const certificatesCloseBtn = certificatesModal.querySelector('.close-modal');

// Load certificates data
function loadCertificatesData() {
    displayCertificateCards();
}

function showCertificatesList(category) {
    displayCertificates(category);
    certificatesModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function displayCertificateCards() {
    const grid = document.getElementById('certificates-grid');
    grid.innerHTML = '';

    Object.entries(certificatesData.categories).forEach(([category, data]) => {
        const card = document.createElement('div');
        card.className = 'certificate-card';
        card.innerHTML = `
            <div class="certificate-icon">
                ${data.iconUrl ? 
                    `<img src="${data.iconUrl}" alt="${data.title} Icon" class="certificate-logo">` : 
                    `<i class="${data.icon}"></i>`
                }
            </div>
            <h3>${data.title}</h3>
            <p>${data.description}</p>
            <button class="certificate-link" onclick="showCertificatesList('${category}')">Exibir Certificados</button>
        `;
        grid.appendChild(card);
    });
}

function displayCertificates(category) {
    const container = certificatesModal.querySelector('.certificates-list-container');
    container.innerHTML = '';

    const categoryData = certificatesData.categories[category];
    
    const categoryHeader = document.createElement('div');
    categoryHeader.className = 'category-header';
    categoryHeader.innerHTML = `
        <div class="category-icon">
            ${categoryData.iconUrl ? 
                `<img src="${categoryData.iconUrl}" alt="${categoryData.title} Icon" class="certificate-logo">` : 
                `<i class="${categoryData.icon}"></i>`
            }
        </div>
        <h3>${categoryData.title}</h3>
    `;
    container.appendChild(categoryHeader);

    // Add certificates list
    categoryData.certificates.forEach(cert => {
        const certificateItem = document.createElement('div');
        certificateItem.className = 'certificate-item';
        certificateItem.innerHTML = `
            <div class="certificate-info">
                <h3>${cert.courseName}</h3>
                <p>Instituição: ${cert.institution}</p>
            </div>
            <button class="view-certificate-btn" onclick="viewCertificate('${cert.filePath}')">Ver Certificado</button>
        `;
        container.appendChild(certificateItem);
    });
}

certificatesCloseBtn.addEventListener('click', () => {
    certificatesModal.classList.remove('active');
    document.body.style.overflow = '';
});

certificatesModal.addEventListener('click', (e) => {
    if (e.target === certificatesModal) {
        certificatesModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Close certificates modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && certificatesModal.classList.contains('active')) {
        certificatesModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Function to view certificate
function viewCertificate(certificatePath) {
    // Create a new window to display the certificate
    const certificateWindow = window.open('', '_blank');
    certificateWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Visualizar Certificado</title>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 100vh;
                    background: #f8f9fa;
                }
                .certificate-container {
                    width: 100%;
                    height: 100vh;
                }
                .certificate-container iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                }
            </style>
        </head>
        <body>
            <div class="certificate-container">
                <iframe src="${certificatePath}"></iframe>
            </div>
        </body>
        </html>
    `);
    certificateWindow.document.close();
}

// Load certificates when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadCertificatesData();
}); 