document.body.oncopy = function() {
   swal("复制成功！", "若要转载请保留原文链接，感谢支持！", "success");
};
document.getElementByClassName("copy-to-clipboard-button").onclick = function()
{
    swal("复制成功！", "若要转载请保留原文链接，感谢支持！", "success");
};
