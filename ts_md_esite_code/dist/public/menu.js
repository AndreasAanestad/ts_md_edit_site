//function for opening/closing the menu
function openNavf() {
    const sidenav = document.getElementById("idSidenav");
    sidenav.style.width = "250px";
}
const opennavbutton = document.getElementById('openNav');
opennavbutton.onclick = openNavf;
function closeNavf() {
    const sidenav = document.getElementById("idSidenav");
    sidenav.style.width = "0";
}
const closenavbutton = document.getElementById('closeNav');
closenavbutton.onclick = closeNavf;
//function for editing the files in the menu
async function editmenuf() {
    const response = await fetch("/userroleraw");
    const data = await response.json();
    console.log(data);
    if (data == "admin") {
        var x = document.getElementById("sidenavbtns");
        if (x.style.display === "none") {
            x.style.display = "block";
        }
        else {
            x.style.display = "none";
        }
        const y = document.querySelectorAll('input[type="checkbox"]');
        y.forEach(y => {
            y.style.display = y.style.display === 'none' ? 'inline-block' : 'none';
        });
    }
    else {
        return console.log("Invalid role: " + data);
    }
}
const editbutton = document.getElementById('editmenubtn');
editbutton.onclick = editmenuf;
export {};
//# sourceMappingURL=menu.js.map