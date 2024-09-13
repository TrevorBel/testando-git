document.getElementById('services-toggle').addEventListener('click', function () {
     const submenu = document.getElementById('services-subMenu');
     // Toggle the active class to show/hide the submenu
     submenu.classList.toggle('active');

     // Also rotate the arrow
     this.classList.toggle('active');
});

const d = new Date();
let year = d.getFullYear();
document.getElementById("yearDate").innerHTML = year;