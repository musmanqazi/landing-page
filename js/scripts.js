/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function toggleDescription(courseId) {
    var descriptions = document.getElementsByClassName('course-description');
    var courseDescription = document.getElementById(courseId);
    var isCurrentlyDisplayed = courseDescription.style.display === 'block';

    // Hide all descriptions
    for (var i = 0; i < descriptions.length; i++) {
        descriptions[i].style.display = 'none';
    }

    // Toggle the selected description
    if (!isCurrentlyDisplayed) {
        courseDescription.style.display = 'block';
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const path = window.location.pathname;
    const host = window.location.host;
    const isLocal = host.startsWith('127.0.0.1') || host.startsWith('localhost');

    if (isLocal) {
        // Local development routing
        if (!path.endsWith('.html') && !path.endsWith('/')) {
            window.location.replace(path + '.html');
        }
    } else {
        // Production routing
        if (path.endsWith('.html')) {
            window.history.replaceState({}, '', path.slice(0, -5));
        }
    }
});