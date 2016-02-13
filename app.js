var jen = {
    evName: "Jenna Arrives!!",
    evDate: "2016-03-10T08:50:00+11:00",
};

function getTimeRemaining(eventTime) {
    var t = Date.parse(eventTime) - Date.parse(new Date());
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

function initializeClock(id, eventTime) {
    var clock = document.getElementById(id);

    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minsSpan = clock.querySelector('.minutes');
    var secsSpan = clock.querySelector('.seconds');

    function updateClock() {
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
}
