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
