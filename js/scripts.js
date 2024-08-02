/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

function toggleDescription(courseId) {
    var descriptions = document.getElementsByClassName('course-description');
    for (var i = 0; i < descriptions.length; i++) {
        descriptions[i].style.display = 'none';
    }
    var courseDescription = document.getElementById(courseId);
    courseDescription.style.display = 'block';
}