//used moments format method to get the current date then used jquery to select the 
//p element that will house it and then set its inner HTML also using jquery 
const currentDate = moment().format("dddd, MMMM Do");
const title = $("#currentDay");
title.html(currentDate);

//used moment to get the current hour in intenger form for future use in styling the textarea 
//of each time block. Currently commented out the moment call to test my function.
const currentHour = 10//moment().hour();

//used jquery to get all the text area elements with the class name row
const timeSlots = $(".row");
//created an empty array then used a for loop to take the elements in timeSlots and push them
//into the new array as jquery objects for easier reference later on
const jqtimeSlots = [];
for(i = 0; i < timeSlots.length; i++)
{ jqtimeSlots.push($(timeSlots[i]));}

setCurrentHours();

//This function will compare the dataset hour variable of each element  to the current hour and 
//toggle the corresponding class depending on the timing. It will also make sure no incorrect classes
//are assigned by removing all possibilities before the comparisson
function setCurrentHours()
{
    for(i = 0; i < timeSlots.length; i++)
    { 
        let hour = jqtimeSlots[i].data("hour");
        console.log(hour);
        jqtimeSlots[i].removeClass("past", "present", "future");
        jqtimeSlots[i].toggleClass("past", hour < currentHour);
        jqtimeSlots[i].toggleClass("present", hour == currentHour);
        jqtimeSlots[i].toggleClass("future", hour > currentHour);
    }
}