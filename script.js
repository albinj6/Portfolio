const projects = [
    {
        title: "Visual Break System",
        description: "An innovative, automated hardware-based system designed to reduce digital eye strain by implementing the 20-20-20 rule. Every 20 minutes, the system covers the screen with a fabric to force the user to look away, providing a 20-second break. The project is currently awaiting patent approval. This project focuses on reducing the risk of eye strain and associated health issues among frequent computer users.",
        tags: "Tinkercad, Arduino, C#",
        icon: "fa-solid fa-microchip"
    },
    {
        title: "Medicine Refill System",
        description: "An award-winning project that secured ₹25,000 in funding at the YIP 5.0 competition, this system provides timely reminders for medicine refills to ensure patients never miss a dose. By leveraging a network of NGO volunteers, we deliver medications directly to the patient's doorstep. The system specifically supports the elderly, eliminating the need for them to travel to pharmacies and preventing delays in treatment caused by forgetfulness.",
        tags: "Innovation, Healthcare Technology, Automation",
        icon: "fa-solid fa-pills"
    },
    {
        title: "Science Excursion Website",
        description: "A live educational platform designed for school students to register for practical science educational visits. The website: <a href='https://scienceexcursion.in/' target='_blank' class='description-link'>scienceexcursion.in</a> provides a seamless registration experience for science learning expeditions. The platform features real-time availability tracking and automated confirmation emails to enhance user experience. It also includes a content management system for educators to upload and manage educational materials related to the excursions.",
        tags: "Web Development, HTML, CSS, JavaScript",
        icon: "fa-solid fa-earth-americas"
    },
    {
        title: "Sign Language Detection",
        description: "An innovative Arduino-powered wearable device that leverages flex sensors to interpret hand gestures and sign language in real-time, effectively bridging communication gaps. Utilizing advanced signal processing, the system accurately recognizes complex sign language gestures and converts them into immediate speech output. This project aims to empower individuals with hearing or speech impairments by facilitating seamless, natural interactions in their daily lives.",
        tags: "Arduino, Sensors, Signal Processing, Wearable Tech",
        icon: "fa-solid fa-hands-asl-interpreting"
    },
    {
        title: "Language Learning Chatbot",
        description: "An intelligent Python-based chatbot designed to facilitate immersive language learning through real-time text and voice interaction. The bot bridges the comprehension gap by providing dual-language responses in both the target language and English, ensuring users remain engaged without losing context. Beyond conversation, the system incorporates a gamified assessment framework to track the user progress. This interactive tool serves as a versatile companion for learners seeking to build confidence and proficiency through consistent, AI-guided practice and measurable milestones.",
        tags: "Python, Natural Language Processing, AI, Chatbot",
        icon: "fa-solid fa-comments"
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
