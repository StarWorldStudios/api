document.body.oncopy = function() {
   swal("复制成功！", "若要转载请保留原文链接，感谢支持！", "success");
};
$(document).ready(function(){
   $(".copy-to-clipboard-button").click(function(){
      swal("复制成功！", "若要转载请保留原文链接，感谢支持！", "success");
   });
});
