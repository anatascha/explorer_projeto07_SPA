import { Router } from './router.js';

document.addEventListener('DOMContentLoaded', () => {
    const router = new Router();
    document.querySelectorAll('a[data-link]').forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            history.pushState(null, '', link.href);
            router.loadRoute();
        });
    });
    router.loadRoute(); // Carrega a rota inicial e define o link ativo
});

window.addEventListener('popstate', () => {
    const router = new Router();
    router.loadRoute();
});
