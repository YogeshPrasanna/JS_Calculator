var disparea = $('#displayArea');

//append numbers to userdisplay
$('.numbers').on('click',function(e) {
var displayAreatext = $('#displayArea').text();

  disparea.append(Number(this.innerHTML));
  if(displayAreatext.length >= 19 && displayAreatext.length <=22){
    disparea.css({'font-size': '40px'});
  }else if(displayAreatext.length >= 23 && displayAreatext.length < 30){
    disparea.css({'font-size': '30px'});
  }else if(displayAreatext.length >= 30){
    disparea.text(disparea.substr(0,30));
  }
});

//append symbols to userdisplay
$('.symbols').on('click',function(e) {
var displayAreatext = $('#displayArea').text();

  disparea.append(' '+this.innerHTML+' ');
  if(displayAreatext.length >= 19 && displayAreatext.length <=22){
    disparea.css({'font-size': '40px'});
  }else if(displayAreatext.length >= 23 && displayAreatext.length < 30){
    disparea.css({'font-size': '30px'});
  }else if(displayAreatext.length >= 30){
    disparea.text(disparea.substr(0,30));
  }
});

//calclation logic
var calculate = function calculate(inputa){
  let output = eval(inputa);
  disparea.text('');
  disparea.append(output);
}

//evaluate userinput
$('#calculate').on('click',function(){
  var userInput = disparea.text();
  $('#displayAreaExpr').text(userInput);
  calculate(userInput);
});

//clear userinput
$('#clear').on('click',function(){
  disparea.text('');
  $('#displayAreaExpr').text('');
})

$('body').on('keypress',function(e){
  if(e.charCode >= 42 && e.charCode <= 57){
      switch(e.charCode){
        case 48 : disparea.append('0');
                  break;
        case 49 : disparea.append('1');
                  break;
        case 50 : disparea.append('2');
                  break;
        case 51 : disparea.append('3');
                  break;
        case 52 : disparea.append('4');
                  break;
        case 53 : disparea.append('5');
                  break;
        case 54 : disparea.append('6');
                  break;
        case 55 : disparea.append('7');
                  break;
        case 56 : disparea.append('8');
                  break;
        case 57 : disparea.append('9');
                  break;
        case 42 : disparea.append(' * ');
                  break;
        case 43 : disparea.append(' + ');
                  break;
        case 45 : disparea.append(' - ');
                  break;
        case 46 : disparea.append('.');
                  break;
        case 47 : disparea.append(' / ');
                  break;
        default : disparea.append('');
                  break;
      }    
  }else{
    console.log("You just presssed something other than a number");
  }
});

$('body').on('keydown',function(e){
  var displayAreatext = $('#displayArea').text();

  //remove history 
  if(displayAreatext.length == 1){
    $('#displayAreaExpr').text('');
  }

  if(displayAreatext.length >= 19 && displayAreatext.length <=22){
    disparea.css({'font-size': '40px'});
  }else if(displayAreatext.length >= 23 && displayAreatext.length < 30){
    disparea.css({'font-size': '30px'});
  }else if(displayAreatext.length >= 30){
    e.preventDefault();
  }


  switch(e.which){
    case 8 : var inputOnBkSpc = disparea.text().substr(0,disparea.text().length - 1);
             disparea.text(inputOnBkSpc);
             break;
    case 13 : var userInput = $('#displayArea').text();
              let output = eval(userInput);
              $('#displayAreaExpr').text(userInput);
              disparea.text('');
              disparea.append(output);
              break;
    default: break;
  }
});