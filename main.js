$(document).ready(function() {
$.getJSON("data.json", function(data){//this pulls all the information from the data.Json file 
var array = []//it stores the data
$.each(data, function(_key, val ){//it iterates through the value and grabs the information from there
    array.push("<tr> <td>" + val.name + "</td><td>" + val.description + "</td><td><a href='https://www.google.com/maps?q="  + val.location + "'></a></td></tr>");//it pushes the data from the array into the DOM and sorts it in its positions
    console.log(array);
})
$('table').append(array);//taking the informtaion from the table and appending it to the array

}

)
})

