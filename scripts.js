/*
|---------------------------------------------------------------------------------------------------------------------------------------
| NAVBAR ELEMENTS HIGHLIGHTER
|---------------------------------------------------------------------------------------------------------------------------------------
| Function:         Active Page
| Description:      Highlight the Current Page
|---------------------------------------------------------------------------------------------------------------------------------------
*/
const activePage = document.querySelectorAll('a');

activePage.forEach((element) => {
    element.addEventListener('click', function () {
        activePage.forEach( nav =>  
            nav.classList.remove('active')
        );
        this.classList.add('active');
    });
});

/*
|---------------------------------------------------------------------------------------------------------------------------------------
| NAVIGATION TOGGLE
|---------------------------------------------------------------------------------------------------------------------------------------
| Function:         addClass removeClass
| Description:      Open and Close the Navigation for Tab and Mobile View
|---------------------------------------------------------------------------------------------------------------------------------------
*/
$('#menu-btn').click(function () {
    $('nav .navigation-bar ul').addClass('active')
});

$('#menu-close-btn').click(function(){
    $('nav .navigation-bar ul').removeClass('active')
});

/*
|---------------------------------------------------------------------------------------------------------------------------------------
| LIVE COUNTDOWN
|---------------------------------------------------------------------------------------------------------------------------------------
| Function:         Countdown Date
| Description:      Live Countdown Date for Now and Target Date
|---------------------------------------------------------------------------------------------------------------------------------------
*/
const countDownDate = new Date('Dec 30, 2023 15:58:58').getTime();

const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown-secs').innerHTML = `${seconds} <br> Secs`;
    document.getElementById('countdown-mins').innerHTML = `${minutes} <br> Mins`;
    document.getElementById('countdown-hrs').innerHTML = `${hours} <br> Hrs`;
    document.getElementById('countdown-days').innerHTML = `${days} <br> Days`;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('countdown-secs').innerHTML = '0';
        document.getElementById('countdown-mins').innerHTML = '0';
        document.getElementById('countdown-hrs').innerHTML = '0';
        document.getElementById('countdown-days').innerHTML = '0';
    }
}, 1000);

/*
|---------------------------------------------------------------------------------------------------------------------------------------
| HIGHLIGHTER
|---------------------------------------------------------------------------------------------------------------------------------------
| Function:         Highlight
| Description:      Highlight Current Page
|---------------------------------------------------------------------------------------------------------------------------------------
*/
const sectionAll = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sectionAll.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        console.log(sectionId);
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector('li a[href*="' + sectionId + '"]')
                .classList.add('active');
        } else {
            document
                .querySelector('li a[href*="' + sectionId + '"]')
                .classList.remove('active');
        }
    });
});

/*
|---------------------------------------------------------------------------------------------------------------------------------------
| FEATURES SECTION
|---------------------------------------------------------------------------------------------------------------------------------------
| Function:         Features
| Description:      Render Features' Container Using Map
|---------------------------------------------------------------------------------------------------------------------------------------
*/
const features = [
    {
        title: 'Certification',
        icon: 'fas fa-award',
        desc: 'A document that verifies the bearer has completed a certain training program.'
    },
    {
        title: 'Online Exercise',
        icon: 'fas fa-book',
        desc: 'You may watch it and participate in it at home.'
    },
    {
        title: 'Availability',
        icon: 'fas fa-window-restore',
        desc: 'It may be a mobile-friendly educational platforms'
    }
]
const featuresContainer = document.querySelector('.features-container');
featuresContainer.innerHTML = features.map(function (featureList) {
    return `<div class='features-box'>` +
                `<i class='${featureList.icon}'></i>` +
                `<h3>${featureList.title}</h3>` +
                `<p>${featureList.desc}</p>` +
            `</div>`;
}).join('');

/*
|---------------------------------------------------------------------------------------------------------------------------------------
| EXPERTS SECTION
|---------------------------------------------------------------------------------------------------------------------------------------
| Function:         Experts
| Description:      Render Experts' Container Using Map
|---------------------------------------------------------------------------------------------------------------------------------------
*/
const experts = [
    {
        name: 'Miggy Tuazon',
        role: 'Object Oriented Expert',
        img: '/images/experts/expert-1.png'
    },
    {
        name: 'Alberto Gracia',
        role: 'Python and Algorithm Expert',
        img: '/images/experts/expert-3.png'
    },
    {
        name: 'Samuel Manaloto',
        role: 'Frontend and Designer Expert',
        img: '/images/experts/expert-4.png'
    },
    {
        name: 'Dave Michaels',
        role: 'Backend and Database Expert',
        img: '/images/experts/expert-2.png'
    }
]

const expertsContainer = document.querySelector('.expert-container');
expertsContainer.innerHTML = experts.map(function (expertsList) {
    return `<div class='expert-box'>` +
                `<img src='${expertsList.img}' alt='${expertsList.name}'>` +
                `<h6>${expertsList.name}</h6>` +
                `<p>${expertsList.role}</p>` +
                `<div class='brand-icons'>` +
                    `<i class='fab fa-facebook-f'></i>` +
                    `<i class='fa-brands fa-github'></i>` +
                    `<i class='fab fa-twitter'></i>` +
                `</div>` +
            `</div>`;
}).join('');

/*
|---------------------------------------------------------------------------------------------------------------------------------------
| COURSES SECTION
|---------------------------------------------------------------------------------------------------------------------------------------
| Function:         Courses
| Description:      Render Courses' Container Using Map
|---------------------------------------------------------------------------------------------------------------------------------------
*/
const courses = [
    {
        title: 'The HTML & CSS Bootcamp 2022 Edition',
        author: 'Colt Steele',
        img: '/images/courses/course-1.png',
        total: '70,023',
        date: '10/07/2022',
        price: '59.55'
    },
    {
        title: 'JavaScript - The Complete Guide 2022 (Beginner)',
        author: 'Maximilian Schwarzmüller',
        img: '/images/courses/course-2.png',
        total: '40,237',
        date: '11/13/2022',
        price: '81.24'
    },
    {
        title: 'The Complete Flutter Development with Dart',
        author: 'Dr. Angela Yu',
        img: '/images/courses/course-3.png',
        total: '63,012',
        date: '03/09/2022',
        price: '35.00'
    },
    {
        title: 'React - The Complete Guide (Hooks, Router, Redux)',
        author: 'Maximilian Schwarzmüller',
        img: '/images/courses/course-4.png',
        total: '80,129',
        date: '05/20/2022',
        price: '60.50'
    },
    {
        title: 'Angular - The Complete Guide (2022 Edition)',
        author: 'Maximilian Schwarzmüller',
        img: '/images/courses/course-5.png',
        total: '40,009',
        date: '09/23/2022',
        price: '47.00'
    },
    {
        title: 'Node.js, Express, MongoDB - The Complete Bootcamp 2022',
        author: 'Jonas Schmedtmann',
        img: '/images/courses/course-6.png',
        total: '57,343',
        date: '08/05/2022',
        price: '40.00'
    }
]

const coursesContainer = document.querySelector('.course-box');
coursesContainer.innerHTML = courses.map(function (coursesList) {
    return `<div class='courses'>` +
                `<img src='${coursesList.img}' alt='${coursesList.title}'>` +
                `<div class='course-details'>` +
                    `<span> ${coursesList.date} </span>` +
                    `<h6>${coursesList.title}</h6>` +
                    `<div class='instructor'>${coursesList.author}</div>` +
                    `<div class='rate'>` +
                        `<i class='fas fa-star'></i>` +
                        `<i class='fas fa-star'></i>` +
                        `<i class='fas fa-star'></i>` +
                        `<i class='fas fa-star'></i>` +
                        `<i class='fas fa-star'></i>` +
                        `<span>(${coursesList.total})</span>` +
                    `</div>` +
                `</div>` +
                `<div class='course-price'>$${coursesList.price}</div>` +
            `</div>`;
}).join('');

