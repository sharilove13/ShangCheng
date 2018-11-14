window.onload=function(){
    /* -----------------------
    *         顶部广告
    ---------------------------*/
    $("#TOP_ACTIVE_BTN").on("click",function(){
        var $ad = $("#TOP_ACTIVE_WRAP");
        var $btn = $("#TOP_ACTIVE_BTN");
        if($ad.hasClass("noblock")){
            $ad.removeClass("noblock");
            $btn.removeClass("btn_close");
            $btn.title="打开";
        }else{
            $ad.addClass("noblock");
            $btn.addClass("btn_close");
            $btn.title="关闭";
        }
    })
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

    /* -----------------------
    *         右侧导航弹框
    ---------------------------*/
    $("#_RIGHT_NAV_ .sidebar_bottom_tabs .sidebar_code")
    .on("mouseenter",function(){
        var $code = $("#_SIDEBAR_CHANGE_CODE_");
        $code.addClass("on");
    });
    $("#_RIGHT_NAV_ .sidebar_bottom_tabs .sidebar_code")
    .on("mouseleave",function(){
        var $code = $("#_SIDEBAR_CHANGE_CODE_")
        $code.removeClass("on");
    });
    $("#_SIDEBAR_CHANGE_CODE_")
    .on("mouseenter",function(){
        var $code = $("#_SIDEBAR_CHANGE_CODE_");
        $code.addClass("on");
    });
    $("#_SIDEBAR_CHANGE_CODE_")
    .on("mouseleave",function(){
        var $code = $("#_SIDEBAR_CHANGE_CODE_");
        $code.removeClass("on");
    });


    /* --------------------------------------------------
    *         左侧滚动条导航和头部浮动fixed出现
    ------------------------------------------------------*/

    function toTop_left_nav(BK){
        var toTop=document.body.scrollTop || document.documentElement.scrollTop;
        
        var win_H=outerHeight   //获取窗口高度
        var BK_H=BK.outerHeight()  //元素的高度
        var BK_T=BK.offset().top //元素距顶的高度
        
        if(toTop>BK_T-innerHeight/2){
            $("#_FLOORS_NAV_").removeClass("noblock");
            $("#_HEADER_LOGIN_").addClass("fixed");
            $("#_SEARCH_HEADER_BOX_").addClass("fixed");
        }else{
            $("#_FLOORS_NAV_").addClass("noblock");
            $("#_HEADER_LOGIN_").removeClass("fixed");
            $("#_SEARCH_HEADER_BOX_").removeClass("fixed");
        }
    }

    /* -----------------------
    *         左侧导航楼层
    ---------------------------*/
    function toTop_left_floor(){
        var toTop=document.body.scrollTop || document.documentElement.scrollTop;

        var $fs = $(".floor_box");
        // var f1 = $fs.eq(0);
        var f =[];
        for(var i=0;i<$fs.length;i++){
            f.push($fs.eq(i));
            var f_H=f[i].outerHeight()  //元素的高度
            var f_T=f[i].offset().top //元素距顶的高度
            if(toTop>f_T-innerHeight/2 && toTop<f_T+f_H){
                $("#_FLOORS_NAV_>.floors_list>li").eq(i).find("a.name").addClass("block");
                $("#_FLOORS_NAV_>.floors_list>li").eq(i).siblings().find("a.name").removeClass("block");
            }else{
                $("#_FLOORS_NAV_>.floors_list>li").eq(i).find("a.name").removeClass("block");
            }
        }

    }


    window.onscroll=function(){  //绑定滚动条动作事件
        toTop_left_nav($("#_SPECIAL_ENTER_"));
        toTop_left_floor();
    }
    /* -----------------------
    *         点击楼层跳转
    ---------------------------*/
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });

}