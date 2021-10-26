//Set and Display Date
     //used moments format method to get the current date then used jquery to select the 
     //p element that will house it and then set its inner HTML also using jquery 
    const currentDate = moment().format("dddd, MMMM Do");
    const title = $("#currentDay");
    title.html(currentDate);
//spacing

//Determine The Time of Day
    //used moment to get the current hour in intenger form for future use in styling the textarea 
    //of each time block. Currently commented out the moment call to test my function.
    const currentHour = 12//moment().hour();


    //used jquery to get all the text area elements with the class name row
    const timeSlots = $(".row");
    const jqTimeSlots = [];
    for(let i = 0; i < timeSlots.length; i++ )
    {jqTimeSlots.push($(timeSlots[i]));};
    
    

    //This function will compare the dataset hour variable of each element  to the current hour and 
    //toggle the corresponding class depending on the timing. It will also make sure no incorrect classes
    //are assigned by removing all possibilities before the comparisson
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
//spacing

const events = 
[{description: ''},{description: ''},{description: ''},
{description: ''},{description: ''},{description: ''},
{description: ''},{description: ''},{description: ''}];
console.log

checkStorage();
pullStorage();

function checkStorage()
{
    if (localStorage.getItem("savedEvents")=== null)
    {localStorage.setItem("savedEvents", JSON.stringify(events));};
};

function pullStorage()
{
    let savedEvents = JSON.parse(localStorage.savedEvents);
    for(let i = 0; i < savedEvents.length; i++)
    {events[i].description = savedEvents[i].description;};
};

setEvents();

function setEvents()
{
    for(let i = 0; i < events.length; i++)
    { jqTimeSlots[i].val(events[i].description);};
}

function saveEvent()
{
    let index = event.currentTarget.dataset.index;
    let newValue = jqTimeSlots[index].val();
    events[index].description = newValue;
    localStorage.setItem("savedEvents", JSON.stringify(events));
   console.log(events);
};


setCurrentHours();



