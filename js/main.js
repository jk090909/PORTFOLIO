// main js

$(function(){
    // main typing text
    var typingBool = false; 
    var typingIdx=0; 
    var typingTxt = $(".typing-txt").text();
    typingTxt=typingTxt.split("");
    if(typingBool==false){
       typingBool=true; 
       
       var tyInt = setInterval(typing,100);
     } 
     
     function typing(){ 
       if(typingIdx<typingTxt.length){
         $(".typing").append(typingTxt[typingIdx]);
         typingIdx++; 
       } else{ 
         clearInterval(tyInt);
       } 
     }
});

$(function(){
    AOS.init();
  });

$(function(){
    let dutation = 0;
    // all
  $('#btn-all').on('click', function(){
    $('#works .list li').show(dutation);
  })
  
  // mobile
  $('#btn-mobile').on('click', function(){
    $('#works .list li')
      .hide(dutation)
      .filter('.mobile')
      .show(dutation);
  })

    // homepage
  $('#btn-homepage').on('click', function(){
    $('#works .list li')
      .hide(dutation)
      .filter('.homepage')
      .show(dutation);
  })
})