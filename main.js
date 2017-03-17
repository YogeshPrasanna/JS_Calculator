//append numbers to userdisplay
$('.numbers').on('click',function() {
  $('#displayArea').append(Number(this.innerHTML));
});

//append symbols to userdisplay
$('.symbols').on('click',function() {
  $('#displayArea').append(this.innerHTML);
});

//calclation logic
var calculate = function calculate(inputa){
  let output = eval(inputa);
  $('#displayArea').text('');
  $('#displayArea').append(output);
}

//evaluate userinput
$('#calculate').on('click',function(){
  var userInput = $('#displayArea').text();
  calculate(userInput);
});

//clear userinput
$('#clear').on('click',function(){
  $('#displayArea').text('');
})

$('body').on('keypress',function(e){
  if(e.charCode >= 42 && e.charCode <= 57){
      switch(e.charCode){
        case 49 : $('#displayArea').append('1');
                  break;
        case 50 : $('#displayArea').append('2');
                  break;
        case 51 : $('#displayArea').append('3');
                  break;
        case 52 : $('#displayArea').append('4');
                  break;
        case 53 : $('#displayArea').append('5');
                  break;
        case 54 : $('#displayArea').append('6');
                  break;
        case 55 : $('#displayArea').append('7');
                  break;
        case 56 : $('#displayArea').append('8');
                  break;
        case 57 : $('#displayArea').append('9');
                  break;
        case 42 : $('#displayArea').append('*');
                  break;
        case 43 : $('#displayArea').append('+');
                  break;
        case 45 : $('#displayArea').append('-');
                  break;
        case 46 : $('#displayArea').append('.');
                  break;
        case 47 : $('#displayArea').append('/');
                  break;
        default : $("displayArea").append('');
                  break;
      }    
  }else{
    console.log("You just presssed something other than a number");
  }
});

$('body').on('keydown',function(e){
  switch(e.which){
    case 8 : var inputOnBkSpc = $('#displayArea').text().substr(0,$('#displayArea').text().length - 1);
             $('#displayArea').text(inputOnBkSpc);
             break;
    case 13 : var userInput = $('#displayArea').text();
              let output = eval(userInput);
              $('#displayArea').text('');
              $('#displayArea').append(output);
              break;
    default: break;
  }
});