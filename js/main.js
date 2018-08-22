$(function () {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: 'AIzaSyAmxvaKLLlesn2ehjcFti33sOsHZghSqt8',
        events: {
            googleCalendarId: '54q9ta0da7716nv325uer1ftn8@group.calendar.google.com',
            className: 'gcal-event' // an option!
        },
        header: {
            left: 'title',
            center: 'agendaDay,agendaWeek,month',
            right: 'prev,next today'
        },
        firstDay: 1,


        editable: false, // Don't allow editing of events
        handleWindowResize: true,
        // weekends: true, // Hide weekends
        defaultView: 'agendaWeek', // Only show week view
        // // header: false, // Hide buttons/titles
        minTime: '07:30:00', // Start time for the calendar
        maxTime: '24:00:00', // End time for the calendar

        displayEventTime: true, // Display event time
        header: {
            left: 'title',
            center: 'agendaDay,agendaWeek,month',
            right: 'prev,next today'
        },
        editable: false,
        firstDay: 1, //  1(Monday) this can be changed to 0(Sunday) for the USA system
        selectable: true,
        defaultView: 'month',

        axisFormat: 'h:mm',

        allDaySlot: false,
    });
});
function myMap() {
    myCenter = new google.maps.LatLng(41.878114, -87.629798);
    var mapOptions = {
        center: myCenter,
        zoom: 12, scrollwheel: false, draggable: false,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapOptions);

    var marker = new google.maps.Marker({
        position: myCenter,
    });
    marker.setMap(map);
}

// Modal Image Gallery
function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function () { myFunction() };
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-opacity" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-opacity w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}
$(document).ready(function () {
    $(".fc-left").addClass("col-md-4");
    $(".fc-center").addClass("col-md-4");
    $(".fc-right").addClass("col-md-4");
});