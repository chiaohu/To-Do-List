$(document).ready(function () {   
    $('.list').click(function (e) {
      var i = e.target.dataset.num;
      var item = $('.fa-star')[i];
      $(this).find(item).toggleClass('yellow');
      data[i].star = true; 
      localStorage.setItem('datalist', JSON.stringify(data));
    });
});