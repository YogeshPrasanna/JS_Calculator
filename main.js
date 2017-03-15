$('.numbers').on('click',function() {
  $('#displayArea').append(Number(this.innerHTML));
});
$('.symbols').on('click',function() {
  $('#displayArea').append(this.innerHTML);
});

$('#calculate').on('click',function(){
  var inputval = $('#displayArea').text();
  var output = eval(inputval);
  $('#displayArea').text('');
  $('#displayArea').append(output);
})
$('#clear').on('click',function(){
  $('#displayArea').text('');
})

$('body').on('keypress',function(e){
  if(e.charCode >= 49 && e.charCode <= 57){
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
        default : $("displayArea").append('');
                  break;
      }    
  }else{
    console.log("You just presssed something other than a number");
  }
})