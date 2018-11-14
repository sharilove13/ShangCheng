var $slider=$("#BANNER_PIC");
function bannerTask(){
    var $li=$("#BANNER_PIC>ul>.show");
    var $ul=$li.parent();
    var $ullater = $ul.next("ul").children("li:first-child");
    var $linext=$li.next();
    // console.log($linext.length);
    if($linext.length){    //如果同个ul中下一个li存在
        $li.removeClass("show");
        $linext.addClass("show");
    }else if($linext.length === 0 && $ul.next().length ===0){ 
        //如果同个ul中下一个li不存在 且 ul为slider的最后一个子元素
        $li.removeClass("show");
        $("#BANNER_PIC>ul:eq(0)>li:eq(0)").addClass("show");
    }else{
        $li.removeClass("show");
        $ullater.addClass("show");
    }
}
var timer=setInterval(bannerTask,3000);
//鼠标进入时轮播暂停
$slider.on("mouseover",function(){
    clearInterval(timer);
});
$slider.on("mouseout",function(){
    var timer=setInterval(bannerTask,3000);
});

