export class Router {
    constructor() {
        this.routes = {
            '/': 'pages/home.html',
            '/universo': 'pages/universo.html',
            '/exploracao': 'pages/exploracao.html'
        };
    }

    async loadRoute() {
        const path = window.location.pathname;
        const route = this.routes[path] || '404.html';
        try {
            const response = await fetch(route);
            const content = await response.text();
            document.getElementById('app').innerHTML = content;
            this.setActiveLink(path);
        } catch (error) {
            console.error('Erro ao carregar a rota:', error);
        }
    }

    setActiveLink(path) {
        document.querySelectorAll('nav a').forEach(link => {
            link.classList.remove('active');
        });
        const activeLink = document.querySelector(`nav a[href="${path}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
}
