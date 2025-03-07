const projects = [
    {
        title: "Tic Tac Toe",
        description: "Simple tic-tac-toe game. This has play with pc and play with a friend.",
        image: "assets/projects/tic-tac-toe.png",
        technologies: ["HTML", "CSS", "JS"],
        link: "https://sadeepanherath.github.io/Tic-Tac-Toe/"
    },
    {
        title: "Ceylon-Burgers",
        description: "A full-featured e-commerce platform with real-time inventory management and secure payment processing.",
        image: "assets/projects/Ceylon-Burgers.png",
        technologies: ["HTML", "CSS", "JS","AOS"],
        link: "https://sadeepanherath.github.io/Ceylon-Burgers/"
    },
    {
        title: "Chat-Duo-AI",
        description: "A chat-bot created using Gemini API.",
        image: "assets/projects/ChatDuo-AI.png",
        technologies: ["Dart", "Flutter", "C++"],
        link: "https://github.com/SadeepaNHerath/Chat-Duo-AI"
    },
    {
        title: "inkless-insight",
        description: "A blog site. Able to upload blogs and other users can read it.",
        image: "assets/projects/inkless-insight.png",
        technologies: ["React", "Next-js", "TypeScript", "Tailwind", "css", "SupaBase"],
        link: "https://github.com/SadeepaNHerath/inkless-insight"
    },
    {
        title: "TaskMaster-ElectronJS",
        description: "A simple task management app built using ElectronJS.",
        image: "assets/projects/task-master.png",
        technologies: ["ElectronJS", "HTML", "CSS"],
        link: "https://sadeepanherath.github.io/TaskMaster-ElectronJS/"
    },
    {
        title: "Portfolio-Flutter",
        description: "A personal portfolio built showcasing my work and skills.",
        image: "assets/projects/portfolio-flutter",
        technologies: ["Dart", "Flutter", "C++"],
        link: "https://github.com/SadeepaNHerath/Portfolio-Flutter"
    }
    
];

const articles = [
    {
        title: "Industry Minds Pre-Launch",
        description: "Presented our project at the Industry Minds pre-launch event and received valuable feedback from industry experts.",
        image: "assets/articles/industry-minds.jpg",
        category: "Group Projects",
        link: "https://www.linkedin.com/posts/sadeepanherath_icetlife-icet-industryminds-activity-7229843192387371008-5QdD?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE8xmWIBOGaAYQiyeyd4DF0hVHzFot5NtWY"
    },
    {
        title: "Earth Summit 2025",
        description: "SAFE APP for the safety of both humans and elephants 🐘🌿",
        image: "assets/articles/earth-summit.jpg",
        category: "Events",
        link: "https://www.linkedin.com/posts/sadeepanherath_earthsummit-crowdsourcing-wildlifeconservation-activity-7296207187574509568-Tw7r?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE8xmWIBOGaAYQiyeyd4DF0hVHzFot5NtWY"
    },
    {
        title: "🚀 GIT 𝘃𝘀 GitHub",
        description: "Mastering Git ensures you can manage and maintain code effectively. Leveraging GitHub helps you collaborate, showcase your work, and innovate faster.",
        image: "assets/articles/git -github.jpg",
        category: "GitHub",
        link: "https://www.linkedin.com/posts/sadeepanherath_git-vs-github-activity-7286782485063974912-dLMY?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE8xmWIBOGaAYQiyeyd4DF0hVHzFot5NtWY"
    },
    {
        title: "🐘 𝗧𝗵𝗿𝗶𝗹𝗹𝗲𝗱 𝘁𝗼 𝗨𝗻𝘃𝗲𝗶𝗹: 𝗦𝗮𝗳𝗲 𝗔𝗽𝗽",
        description: "𝘑𝘰𝘪𝘯 𝘶𝘴 𝘪𝘯 𝘳𝘦𝘷𝘰𝘭𝘶𝘵𝘪𝘰𝘯𝘪𝘻𝘪𝘯𝘨 𝘸𝘪𝘭𝘥𝘭𝘪𝘧𝘦 𝘤𝘰𝘯𝘴𝘦𝘳𝘷𝘢𝘵𝘪𝘰𝘯 𝘵𝘩𝘳𝘰𝘶𝘨𝘩 𝘵𝘦𝘤𝘩𝘯𝘰𝘭𝘰𝘨𝘺! 🌿",
        image: "assets/articles/safe-app.jpg",
        category: "Mobile Application",
        link: "https://www.linkedin.com/posts/syigen-ltd_wildlifeconservation-techforgood-machinelearning-activity-7298899491888185344-5TQm?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAE8xmWIBOGaAYQiyeyd4DF0hVHzFot5NtWY"
    }
];

function loadArticles() {
    const container = document.getElementById("articles-container");
    container.innerHTML = "";

    articles.forEach(article => {
        const articleCard = document.createElement("article");
        articleCard.className = "group bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:-translate-y-1 transition-transform snap-center w-[300px] flex-shrink-0";

        articleCard.innerHTML = `
            <div class="aspect-w-16 aspect-h-9">
                <img src="${article.image}" alt="${article.title}" class="object-cover w-full h-full">
            </div>
            <div class="p-6">
                <div class="flex items-center space-x-2 text-sm text-gray-400 mb-4">
                    <span>${article.category}</span>
                    <span>•</span>
                    <span>${article.readTime}</span>
                </div>
                <h3 class="text-xl font-semibold mb-2">${article.title}</h3>
                <p class="text-gray-400 mb-4">${article.description}</p>
                <a href="${article.link}" class="text-custom hover:text-custom/80 inline-flex items-center space-x-2">
                    <span>Read More</span>
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        container.appendChild(articleCard);
    });
}

function loadProjects() {
    const container = document.getElementById("projects-container");
    container.innerHTML = "";

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.className = "group bg-gray-800/50 rounded-lg overflow-hidden hover:transform hover:-translate-y-1 transition-transform snap-center w-[300px] flex-shrink-0";

        projectCard.innerHTML = `
            <div class="aspect-w-16 aspect-h-9">
                <img src="${project.image}" alt="${project.title}" class="object-cover w-full h-full">
            </div>
            <div class="p-6">
                <h3 class="text-xl font-semibold mb-2">${project.title}</h3>
                <p class="text-gray-400 mb-4">${project.description}</p>
                <div class="flex flex-wrap gap-2 mb-4">
                    ${project.technologies.map(tech => `<span class="px-3 py-1 text-sm bg-gray-700 rounded-full">${tech}</span>`).join("")}
                </div>
                <a href="${project.link}" class="text-custom hover:text-custom/80 inline-flex items-center space-x-2">
                    <span>View Project</span>
                    <i class="fas fa-arrow-right"></i>
                </a>
            </div>
        `;
        container.appendChild(projectCard);
    });
}

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.init("PUBLIC_KEY");

    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("SERVICE_ID", "TEMPLATE_ID", formData)
        .then(function(response) {
            alert("Message sent successfully!");
            document.getElementById("contactForm").reset();
        }, function(error) {
            alert("Failed to send message. Try again later.");
        });
});

document.addEventListener("DOMContentLoaded", loadProjects);
document.addEventListener("DOMContentLoaded", loadArticles);

document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".skill-bar");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                bar.style.width = bar.getAttribute("data-width");
                bar.style.transition = "width 1.5s ease-in-out";
                observer.unobserve(bar); // Stop observing once animated
            }
        });
    }, { threshold: 0.3 });

    skillBars.forEach((bar) => {
        bar.style.width = "0"; // Start with 0 width
        observer.observe(bar);
    });
});