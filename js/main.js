// main js

$(function(){
    // main typing text
    let typingBool = false; 
    let typingIdx=0; 
    let typingTxt = $(".typing-txt").text(); // 타이핑될 텍스트
    typingTxt=typingTxt.split(""); // 한글자씩 자름
    if(typingBool==false){ // 타이핑이 진행되지 않으면
       typingBool=true; 
       
       let tyInt = setInterval(typing,100); // 반복동작
     } 
     
     function typing(){ 
       if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복
         $(".typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다
         typingIdx++; 
       } else { 
         clearInterval(tyInt); // 끝나면 반복종료
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