const projects = [
    {
        title: "Visual Break System",
        description: "An innovative automated hardware-based system designed to reduce digital eye strain by implementing the 20-20-20 rule. Every 20 minutes, the system reminds users to look at something 20 feet away for 20 seconds.",
        tags: "Tinkercad, Arduino, C#",
        icon: "fa-solid fa-microchip",
        features: [
            "Automated eye strain detection and reminder system",
            "Arduino-based hardware implementation",
            "Real-time monitoring and notifications",
            "Patent-pending innovative design",
            "User-friendly interface with customizable settings"
        ]
    },
    {
        title: "Medicine Refill System",
        description: "An award-winning project that won ₹25,000 in funding at YIP 5.0 competition. The system provides timely reminders for medicine refills, ensuring patients never miss their medications.",
        tags: "Innovation, Healthcare Technology, Automation",
        icon: "fa-solid fa-pills",
        features: [
            "Automated medicine refill alerts and reminders",
            "Integration with pharmacy systems",
            "Multi-user support with family tracking",
            "Won YIP 5.0 competition - ₹25,000 funding",
            "Recognized for healthcare innovation impact"
        ]
    },
    {
        title: "Science Excursion Website",
        description: "A live educational platform designed for school students to register for practical science educational visits. The website: <a href='https://scienceexcursion.in/' target='_blank' class='description-link'>scienceexcursion.in</a> provides a seamless registration experience for science learning expeditions.",
        tags: "Web Development, HTML, CSS, JavaScript",
        icon: "fa-solid fa-earth-americas",
        features: [
            "User-friendly registration interface",
            "Real-time availability tracking",
            "Automated confirmation and notifications",
            "Educational content management system",
            "Mobile-responsive design for all devices"
        ]
    },
    {
        title: "Sign Language Detection",
        description: "An innovative Arduino wearable device equipped with flex sensors to detect and interpret hand gestures and sign language in real-time, bridging communication gaps.",
        tags: "Arduino, Sensors, Signal Processing, Wearable Tech",
        icon: "fa-solid fa-hands-asl-interpreting",
        features: [
            "Real-time gesture recognition using flex sensors",
            "Arduino-based wearable device",
            "Accurate sign language interpretation",
            "Wireless connectivity for data transmission",
            "Accessibility-focused technology implementation"
        ]
    },
    {
        title: "Language Learning Chatbot",
        description: "An intelligent chatbot developed in Python to assist users with language learning. The bot provides interactive lessons, vocabulary exercises, and conversational practice for language acquisition.",
        tags: "Python, Natural Language Processing, AI, Chatbot",
        icon: "fa-solid fa-comments",
        features: [
            "Interactive language learning conversations",
            "Vocabulary and grammar exercises",
            "Real-time language correction and feedback",
            "Multiple language support",
            "Adaptive learning based on user progress"
        ]
    }
];

// Get modal elements
const modal = document.getElementById('projectModal');
const closeBtn = document.querySelector('.close');
const projectCards = document.querySelectorAll('.project-card');

// Open modal when project card is clicked
projectCards.forEach(card => {
    card.addEventListener('click', function() {
        const projectIndex = this.getAttribute('data-project');
        if (projectIndex !== null) {
            showModal(parseInt(projectIndex));
        }
    });
});

// Function to show modal with project details
function showModal(index) {
    const project = projects[index];
    
    // Set modal content
    document.getElementById('modalTitle').textContent = project.title;
    document.getElementById('modalDescription').innerHTML = project.description;
    document.getElementById('modalTags').textContent = project.tags;
    
    // Set icon
    const modalIcon = document.querySelector('.modal-icon');
    modalIcon.className = 'modal-icon ' + project.icon;
    
    // Set features list
    const featuresList = document.getElementById('modalFeatures');
    featuresList.innerHTML = '';
    project.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        featuresList.appendChild(li);
    });
    
    // Show modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close modal when close button is clicked
closeBtn.addEventListener('click', function() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
});

// Close modal when clicking outside the modal content
modal.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// Close modal when pressing Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && modal.classList.contains('show')) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});
