const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, '', event.target.href);
    pageLocationHandler();
};

const routes = {
    404: '/pages/error/404.html',
    '/': '/pages/home/home.html',
    '/about': '/pages/about/about.html',
    '/blog': '/pages/blog/blog.html',
    '/courses': '/pages/courses/courses.html',
    '/contact': '/pages/contact/contact.html',
    '/post1': '/pages/blog/post1.html',
    '/post2': '/pages/blog/post2.html',
    '/post3': '/pages/blog/post3.html',
    '/post4': '/pages/blog/post4.html',
    '/course-info1': '/pages/courses/course-info1.html',
    '/course-info2': '/pages/courses/course-info2.html',
    '/course-info3': '/pages/courses/course-info3.html',
    '/course-info4': '/pages/courses/course-info4.html',
    '/course-info5': '/pages/courses/course-info5.html',
    '/course-info6': '/pages/courses/course-info6.html',
};

const pageLocationHandler = async () => {
    const path = window.location.pathname;
    const route = routes[path] || routes[404];
    const html = await fetch(route).then((data) => data.text());
    document.getElementById('rendered-content').innerHTML = html;
};

window.onpopstate = pageLocationHandler;
window.route = route;

pageLocationHandler();
