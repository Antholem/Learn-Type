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