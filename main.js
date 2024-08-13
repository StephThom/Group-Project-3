const activePage = window.location.pathname;
const menu = document.querySelectorAll('menu a').forEach(link=> {
    if(link.href.includes(`${activePage}`)){
        link.classList.add('active');
    }
})