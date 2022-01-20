const menu = document.getElementById('menu');
const pages = document.querySelectorAll('.page-container');

menu.addEventListener('click', function(event){
    const clickedPage = document.getElementById(event.target.className);

    if (!clickedPage) return;
    // Click on the current page
    if (clickedPage.className.includes('visible')) return;
    
    for (let page of pages.values()) {
        if (page.id && clickedPage.id) {
            if (page.className.includes('visible')) {
                page.className = 'page-container hidde';
            }
    
            if (page.id === clickedPage.id) {
                page.className = 'page-container visible';
            }
        }
    }
})