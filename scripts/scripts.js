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
    $('nav .navigation ul').addClass('active')
});
$('#menu-close').click(function(){
    $('nav .navigation ul').removeClass('active')
});