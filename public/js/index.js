$(function(){

    //轮播图
    $.ajax({
        url:"http://localhost:4000/index/getIndexBanners",
        type:"get",
        dataType:"json",//ajax可自动将json转为obj
        success:function(res){
            console.log(res);
            var {title,chref,img,cbg}=res[0];
            var html=`<li style="background-color:${cbg}" class="show">
                        <a title="${title}" target="_blank" href="${chref}">
                            <img src="${img}" alt="${title}" />
                        </a>
                    </li> `;


            for(var i=1;i<res.length;i++) {
                var {title,chref,img,cbg} = res[i];
                html += `<li style="background-color:${cbg}">
                        <a title="${title}" target="_blank" href="${chref}">
                            <img src="${img}" alt="${title}" />
                        </a>
                    </li> `;
            }
            // var banner=document.querySelector(
            //     "#BANNER_PIC>.banner"
            // );
            // banner.innerHTML=html;
            var $banners = $("#BANNER_PIC>.banner");
            $banners.html(html);


            //特效
            banner("#BANNER_PIC", "100%", "450px", "5000");//轮播图函数 banner(id "高","宽",间隔毫秒数)
        }
    });

    /*登录 */
    $.ajax({
        url:"",
        type:"get",
        success:function(res){
            //绑定登录事件
            $("#REG_LOGIN_WRAP>.nav_login").click(function(e){
                e.preventDefault();
                location.href="login.html?back="+location.href;
            })
            $("#REG_LOGIN_WRAP>.nav_reg").click(function(e){
                e.preventDefault();
                location.href="reg.html?back="+location.href;
            })

            $.ajax({
                url:"http://localhost:4000/users/islogin",
                type:"get",
                dataType:"json",
                success:function(res){
                    //console.log(res);
                    if(res.ok==0){
                        $("#REG_LOGIN_WRAP").show().next().hide();
                    }else{
                        $("#LOGIN_UNAME").html(res.uname);
                        $("#USERS_LOGIN_UNAME").show().prev().hide();
                    }
                }
            })

            /*注销功能 */
            $("#LOGIN_INFO_WRAP>.user_exit").click(function(e){
                e.preventDefault();
                $.ajax({
                    url:"http://localhost:4000/users/signout",
                    type:"get",
                    success:function(){
                        location.reload();
                    }
                })
            })
        }
    });
});


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
    *         分类弹窗
    ---------------------------*/
    $(".sort_lists>li").on("mouseenter",function(){
        $li = $(this);
        $li.parent().next().addClass("sort_detail_box");
    })
    $(".sort_lists>li").on("mouseleave",function(){
        $li = $(this);
        $li.parent().next().removeClass("sort_detail_box");
    })
    $(".sort_detail").on("mouseenter",function(){
        $div = $(this);
        $div.addClass("sort_detail_box");
    })
    $(".sort_detail").on("mouseleave",function(){
        $div = $(this);
        $div.removeClass("sort_detail_box");
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
    $('a[href]:not([href="#"])').click(function() {
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
    })
}


