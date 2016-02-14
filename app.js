var events = [
    {
        evName: "Jenna Arrives!!",
        evDate: "2016-03-10T08:50:00+11:00",
    },
    {
        evName: "Mum and Dad here",
        evDate: "2016-03-04T17:00:00+11:00"
    },
    {
        evName: "Coming Home!",
        evDate: "2016-03-24T15:30:00+13:00"
    }
];

function getTimeRemaining(eventTime) {
    var t = Date.parse(eventTime) - Date.now();
    var secs = Math.floor((t / 1000) % 60);
    var mins = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
        "total": t,
        "days": days,
        "hours": hours,
        "minutes": mins,
        "seconds": secs
    };
}

var currentInterval = null;

function initializeClock(id, eventTime) {
    var clock = document.getElementById(id);

    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minsSpan = clock.querySelector('.minutes');
    var secsSpan = clock.querySelector('.seconds');

    function updateClock() {
        if (currentInterval && currentInterval != timeInterval) {
            clearInterval(currentInterval);
        }
        var t = getTimeRemaining(eventTime);

        daysSpan.innerHTML = ('0' + t.days).slice(-2);
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minsSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeInterval);
        }
    }

    updateClock();
    var timeInterval = setInterval(updateClock, 1000);
    currentInterval = timeInterval;
}

function initializeEvents(id) {
    var evList = document.getElementById(id);

    events.forEach(function(ev, index, arr) {
        var newEl = document.createElement('li');
        newEl.className = 'eventLink';
        newEl.innerHTML = ev.evName;
        newEl.onclick = function() {
            initializeClock('clockdiv', ev.evDate);
        };
        evList.appendChild(newEl);
    });

    var firstEl = evList.firstElementChild;
    firstEl.onclick().apply(firstEl);
}
