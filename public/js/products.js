window.onload=function(){
    var $pros_list = $("#PRODUCTS_LIST");
    $pros_list.find("li dl").on("mouseover","a",function(){
        var $a = $(this);
        $a.parent().parent().parent().parent().parent().find("div:first()>a>img")
        .attr("src",$a.find("img").attr("src"));
    })
    $pros_list.find("li dl").on("mouseout","a",function(){
        var $a = $(this);
        $a.parent().parent().parent().parent().parent().find("div:first()>a>img").attr("src",$a.parent().parent().find("dd:first() img").attr("src"));
    })
}