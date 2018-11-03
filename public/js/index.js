/* -----------------------
*         tab标签切换
---------------------------*/
$(".tab:has([data-toggle=tab])")
.on("mouseover","[data-toggle=tab]",function(e){
    e.preventDefault();
    var $tar=$(this);
    if(!$tar.parent().is(".on")){
        $tar.parent().addClass("on")
            .siblings().removeClass("on");
        var id=$tar.attr("href");
        $(id).show()
            .siblings(".floor_tab_main").hide();
    }
})
