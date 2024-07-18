$(function(){
  $('button').on('click',function(){
    const t = $('.readmore-content');
    t.toggleClass('is_open');
    if(t.hasClass('is_open')){
      const h = t.get(0).scrollHeight;
      t.css('height', h);
      $(this).text('Undo')
    }else{
      t.css('height','');
      $(this).text('Read more');
    }
  });
});