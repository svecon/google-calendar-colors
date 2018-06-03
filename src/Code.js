function recolorCalenar() {
    //---------ONLY EDIT BELOW HERE UNLESS YOU REALLY KNOW WHAT YOU'RE DOING---------
    var calendar = "Planning"; //The name of the calendar you want to modify (WITH quotes)
    var startDate = new Date("2018-06-01"); // new Date("2018-05-26"); //The start of the time range in which the events exist
    var endDate = new Date("2018-06-04");
    //---------ONLY EDIT ABOVE HERE UNLESS YOU REALLY KNOW WHAT YOU'RE DOING---------

    var calendarId = CalendarApp.getCalendarsByName(calendar)[0].getId();

    var optionalArgs = {
        timeMin: startDate.toISOString(),
        timeMax: endDate.toISOString(),
        showDeleted: false,
        singleEvents: true,
        orderBy: 'startTime'
    };

    var response = Calendar.Events.list(calendarId, optionalArgs);
    var events = response.items;

    for (i = 0; i < events.length; i++) {
        try {
            processEvent(calendarId, events[i]);
        }
        catch(e) {
            Logger.log(e);
        }
    }
}

function processEvent(calendarId, event) {
    var category = parseDescriptionForHashtag(calendarId, event);
    if (typeof categoryToColor(category) == 'undefined') {
        category = titleToCategory(event.summary);
    }

    updateEvent(calendarId, event, category);
    return true;
}

function parseDescriptionForHashtag(calendarId, event) {
    if (typeof event.description == 'undefined') {
        return false;
    }
    
    var hashtagPosition = event.description.search('#');
    if (hashtagPosition == -1) {
        return false;
    }

    var category = event.description.substr(hashtagPosition + 1);
    Logger.log("Found hashtag for event '" + event.summary + "':" + category);
    return category;
}

function updateEvent(calendarId, event, category) {
    var color = categoryToColor(category);
    var colorId = colorToNumber(color);

    if (typeof color == 'undefined') {
        Logger.log("Category '" + category + "' was unrecognized for Event '" + event.summary + "'.");
        return false;
    }

    if ((colorId == event.colorId) && ('#' + category == event.description)) {
        Logger.log("Event '" + event.summary + "' has correct color and description.");
        return true;
    }

    event.colorId = colorId;
    event.description = '#' + category;
    Calendar.Events.update(event, calendarId, event.id);
    Logger.log("Event '" + event.summary + "' changed color to " + color);
    return true;
}