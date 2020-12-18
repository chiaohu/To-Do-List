var btn = document.querySelector('.btn');
var list = document.querySelector('.list');
var data = JSON.parse(localStorage.getItem('datalist')) || [];

//監聽
btn.addEventListener('click', addList,false);
list.addEventListener('click', deleteList,false);
updateList(data);

//新增代辦事項事件
function addList(e){
  e.preventDefault();
  var txt = document.querySelector('.text').value;
  var todo = {
    content: txt,
    star: false, //增加欄位儲存 star
  };
  data.push(todo);
  localStorage.setItem('datalist', JSON.stringify(data));
  updateList(data);
  document.querySelector('.text').value = "";
}


//更新畫面
function updateList(data){
  var str = "";
  var len = data.length;
  for (var i=0; i<len; i++){
    if (data[i].star) {
      str += '<li><a href="#" class="far fa-trash-alt" data-index="' + i + '"></a> <span>' + data[i].content + '</span><i class="fas fa-star yellow" data-num="' + i + '"></i></li>';
    }else{
      str += '<li><a href="#" class="far fa-trash-alt" data-index="' + i + '"></a> <span>' + data[i].content + '</span><i class="fas fa-star" data-num="' + i + '"></i></li>';
    } 
  }
  list.innerHTML = str;
}

//刪除代辦事項
function deleteList(e){
  e.preventDefault();
  if (e.target.nodeName !== 'A'){return}
  var index = e.target.dataset.index;
  data.splice(index,1);
  localStorage.setItem('datalist', JSON.stringify(data));
  updateList(data);
}