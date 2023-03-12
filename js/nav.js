$(function () {
    // Get reference to the div element
    const myDiv = document.getElementById('navBar');

    // Fetch the content of the file
    fetch('../nav.html')
        .then(response => response.text())
        .then(html => {
            // Set the content of the div element
            myDiv.innerHTML = html;
        })
        .catch(error => {
            console.error(error);
        });
});
function logOut() {
    document.cookie.split(";").forEach(function (c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    window.location.assign('/login');
}

function retentionTool() {
    window.location.assign('/retentiontool');
}

function home() {
    window.location.assign('/dashboard');
}