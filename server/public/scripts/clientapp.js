//Global Variables

var num1 = '';
var num2 = '';
var type = 'def' ;

$(document).ready(function() {

//
$('.use').on('click', setNum);

//Save specific operator on click
$('.operators').on('click', function(){
  type = $(this).attr('id');
  $('#num').empty();
});//operator saver close


//Calculate expression
$('#calculate').on('click', calculate);

//Clear button event
$('#clear').on('click', clear);

});//jQuery close

//Function to clear num1, num2, and type
function clear(){
  $('#num').empty();
  num1 = '';
  num2 = '';
  type = 'def';
}

function setNum() {
  $('#num').empty();
  if (type == 'def') {
    num1 += $(this).attr('id');
    console.log(num1);
    $('#num').text(num1);
  } else {
    num2 += $(this).attr('id');
    $('#num').text(num2);
    console.log(num2);
  }
}

function numObj(x, y, type) {
  var variables = {
    x : x,
    y: y,
    type: type
  };
  return variables
}

function calculate(){
$.ajax({
  type: 'POST',
  url: '/calculations/' + type,
  data: numObj(num1, num2, type),
  success: function(solution) {
    clear();
    $('#num').text(solution);
  }
});
}
