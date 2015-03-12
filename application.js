$(document).ready(function(){
  for(i=1; i<21; i++){
    $('#card_holder').append('<div class="card"><p>'+i+'</p></div>');
  }
};
card1="none",
    $('.card').on('click',function(){
      $mycard=$(this).find('p');
      $mycard.css('opacity',1);
      card1=$mycard.html();
    }
    
