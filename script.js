const setTheme = () => {
    [...document.querySelectorAll( '*' )].forEach( elem => {
        elem.classList.toggle( '__theme-dark' );
    });
}

document.addEventListener( 'DOMContentLoaded', () => {

    const toggler = document.addEventListener( '#themeCheckerButton' );
    toggler.addEventListener( 'click', e => {
        e.preventDefault();
        setTheme();
    });
});