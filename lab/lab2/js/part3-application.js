/* =====================
  Lab 2, part3: a full application (stretch goal)

  We're going to use the skills we've just been practicing to write a full application
  which is responsive to user input.
  At your disposal are a set of variables which we use to track user input (see
  part3-main.js and part3-setup.js for more details on how this is done — we'll
  cover this topic at a later date). Their values will be logged to console to
  aid in debugging.

  In this lab, which is very much open-ended, your task is to use the value of
  these variables to define the functions below. Try to come up with interesting
  uses of the provided user input.

  Some ideas:
    There are two numeric fields: can you write this application to filter
    using both minimum and maximum?
    There is a boolean (true/false) field: can you write your code to filter according
    to this boolean? (Try to think about how you could chop up this data to make this meaningful.)
    There is a string field: can you write your code to filter/search based on user
    input?

  Remember, this is open-ended. Try to see what you can produce.
===================== */

/* =====================
  Define a resetMap function to remove markers from the map and clear the array of markers
===================== */
var resetMap = function() {
  /* =====================
    Fill out this function definition
  ===================== */
  for(var i = 0; i< myMarkers.length; i++)
  {
    map.removeLayer(myMarkers[i]);
  }
};

/* =====================
  Define a getAndParseData function to grab our dataset through a jQuery.ajax call ($.ajax). It
  will be called as soon as the application starts. Be sure to parse your data once you've pulled
  it down!
===================== */
var getAndParseData = function() {
  /* =====================
    Fill out this function definition
  ===================== */
  myData = $.ajax("https://raw.githubusercontent.com/MUSA611-CPLN692-spring2020/datasets/master/json/philadelphia-bike-crashes-snippet.json");
  myData.done(function(data){myData = JSON.parse(data) });
};

/* =====================
  Call our plotData function. It should plot all the markers that meet our criteria (whatever that
  criteria happens to be — that's entirely up to you)
===================== */
var plotData = function() {
  /* =====================
    Fill out this function definition
  ===================== */
  var makers_1 = [];
  for(var i = 0; i<myData.length; i++)
  {
    if(!booleanField)
    {
      var mark = L.marker([myData[i].LAT, myData[i].LNG]);
      makers_1.push(mark);
    }
    else if(booleanField && myData[i][stringField]>=numericField1 && myData[i][stringField]<=numericField2)
    {
      var mark = L.marker([myData[i].LAT, myData[i].LNG]);
      makers_1.push(mark);
    }
  }
  myMarkers = makers_1;
  for(var i = 0; i<myMarkers.length; i++)
  {
    myMarkers[i].addTo(map);
  }
};
