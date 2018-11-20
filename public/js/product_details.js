$(function () {

    // 放大镜功能移动功能
    var $mImg=$("#ITEM_IMG_SHOW"),//中图片
        $lgDiv=$("#MASK_IMG_LG"),//大图片
        $mask=$("#MASK"),//半透明遮罩
        $smask=$("#SUPER_MASK");//透明玻璃板
    var MSIZE=200,//mask的大小
        MAX=450-MSIZE;//top和left的最大值
    $smask
        .hover(
            function(){
                $mask.toggleClass("noblock");
                $lgDiv.toggleClass("noblock");
            }
        )
        .mousemove(function(e){
            var left=e.offsetX-MSIZE/2;
            var top=e.offsetY-MSIZE/2;
            if(left<0) left=0;
            else if(left>MAX) left=MAX;
            if(top<0) top=0;
            else if(top>MAX) top=MAX;
            $mask.css({left,top});
            $lgDiv.css("background-position",
                `-${16/9*left}px -${16/9*top}px`)
        })
});