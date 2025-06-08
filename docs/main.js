const topMenu = document.getElementById('cf-top-menu');
const toggleTopMenuIcon = document.getElementById('cf-toggle-top-menu-icon');

document.addEventListener('click', (e) => {
    console.log(toggleTopMenuIcon);
    if (toggleTopMenuIcon.contains(e.target)) {
        //click to toggle top menu icon
        topMenu.classList.toggle('cf-top-menu-expended');
        topMenu.classList.toggle('hidden');
    } else {
        //click Outside from top menu icon
        if (topMenu.classList.contains('cf-top-menu-expended')) {
            topMenu.classList.remove('cf-top-menu-expended');
            topMenu.classList.add('hidden');                  

        }

    }
});