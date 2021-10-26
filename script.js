//Set and Display Date
    //used moment to get the curret date in string form and added it into a p tag using jquery
    const currentDate = moment().format("dddd, MMMM Do");
    const title = $("#currentDay");
    title.html(currentDate);
//spacing

//Determine The Time of Day
    //used moment to get the current hour in intenger form for comparison when color coding each section
    const currentHour = moment().hour();

    //used jquery to get all the text area elements with the class name row
    const timeSlots = $(".row");

    //created a new array of jquery objects to be able to use jquery methods on each individual element
    const jqTimeSlots = [];
    for(let i = 0; i < timeSlots.length; i++ )
    {jqTimeSlots.push($(timeSlots[i]));};
    
    //This function compares the integer value of the moment object currentHour against a dataset attribute 
    //of each element. It  then uses jquery to add the corresponding class for correct color coding
    function setCurrentHours()
    {
        for(i = 0; i < timeSlots.length; i++)
        { 
            let hour = jqTimeSlots[i].data("hour");
            console.log(hour);
            jqTimeSlots[i].removeClass("past", "present", "future");
            jqTimeSlots[i].toggleClass("past", hour < currentHour);
            jqTimeSlots[i].toggleClass("present", hour == currentHour);
            jqTimeSlots[i].toggleClass("future", hour > currentHour);
        }
    };
    setCurrentHours();
//spacing

//Persisting Event Data

    //established a global variable array that will house an object with event information locally
    const events = 
    [{description: ''},{description: ''},{description: ''},
    {description: ''},{description: ''},{description: ''},
    {description: ''},{description: ''},{description: ''}];

    //start the app by calling these functions which should ensure local both localStorage
    //and our local variable are up to date
    checkStorage();
    pullStorage();
    setEvents();

    //this function checks if local storage contains the item that will be referenced by the other functions.
    function checkStorage()
    {
        if (localStorage.getItem("savedEvents")=== null)
        {localStorage.setItem("savedEvents", JSON.stringify(events));};
    };

    //this function will pull any saved event text from local storage and set the corresponding values in our local array
    function pullStorage()
    {
        let savedEvents = JSON.parse(localStorage.savedEvents);
        for(let i = 0; i < savedEvents.length; i++)
        {events[i].description = savedEvents[i].description;};
    };

    //this function will run through our array of saved event data and fill out the corresponding text areas using jquery
    function setEvents()
    {
        for(let i = 0; i < events.length; i++)
        { jqTimeSlots[i].val(events[i].description);};
    }

    //this function will take any text inside the corresponding text area and push it into our local array as well as local storage
    function saveEvent()
    {
        let index = event.currentTarget.dataset.index;
        let newValue = jqTimeSlots[index].val();
        events[index].description = newValue;
        localStorage.setItem("savedEvents", JSON.stringify(events));
       console.log(events);
    };
//spacing




