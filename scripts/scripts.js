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