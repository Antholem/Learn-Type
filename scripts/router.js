const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, '', event.target.href);
    pageLocationHandler();
};

const routes = {
    404: '/pages/404.html',
    '/': '/pages/home.html',
    '/about': '/pages/about.html',
    '/blog': '/pages/blog.html',
    '/courses': '/pages/courses.html',
    '/contact': '/pages/contact.html',
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
