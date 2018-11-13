// 轮播图
window.onload=function(){
    // var $slider_pic=$("#BANNER_PIC");
    // function bannerTask(){
    //     var $li=$("#BANNER_PIC>ul>.show");
    //     var $ul=$li.parent();
    //     var $ullater = $ul.next("ul").children("li:first-child");
    //     var $linext=$li.next();
    //     // console.log($linext.length);
    //     if($linext.length){    //如果同个ul中下一个li存在
    //         $li.removeClass("show");
    //         $linext.addClass("show");
    //     }else if($linext.length === 0 && $ul.next().length ===0){ 
    //         //如果同个ul中下一个li不存在 且 ul为slider的最后一个子元素
    //         $li.removeClass("show");
    //         $("#BANNER_PIC>ul:eq(0)>li:eq(0)").addClass("show");
    //     }else{
    //         $li.removeClass("show");
    //         $ullater.addClass("show");
    //     }
    // }
    // var timer=setInterval(bannerTask,3000);
    // //鼠标进入时轮播暂停
    // $slider_pic.on("mouseover",function(){
    //     clearInterval(timer);
    // });
    // $slider_pic.on("mouseout",function(){
    //     var timer=setInterval(bannerTask,3000);
    // });

    function banner(id,w,h,time){
        var id=$(id).css({"width":w,"height":h,"position":"relative"})
        
        id.children().eq(2).css({"bottom":(h/2)+50})
        var n=id.children().eq(0).children().length-1
        var i=id.children().eq(0).children(".show").prevAll().length  //获取正在显示的轮播为第几张
        //var show=id.children().eq(0).children().eq(i)                 //获取正在显示的轮播
        //console.log(i)
    
        for(var i=0;i<=n;i++){id.children().eq(1).append(`<a href="#">${i+1}</a>`)}   //往bannerPage里插入相同个数的页码,(生成页码)
        var $ban=id.children().eq(0).children()  //获取banner子元素的集
        var $btn=id.children().eq(1).children()  //获取bannerPage子元素的集	
        //console.log($btn)
    
        
        
    //点击显示对应的张数
        id.children().eq(1).on("click","a",function (e){
            $ban.removeClass()//清除正在显示的播放的样式
            $btn.removeClass()//清除正在选中页码的样式
            e.preventDefault()
            var $this=$(this)
            var i=$this.prevAll().length  //获取点击了哪一页
            $ban.eq(i).addClass("show")   //显示对应的张数
            $btn.eq(i).addClass("show")   //显示对应的页码
        })
    
        
    //上一张下一张
    
        
        
    
        id.children().eq(2).children().eq(0).click(function(e){
            e.preventDefault()
            var i=id.children().eq(0).children(".show").prevAll().length
            $ban.eq(i).removeClass()//清除正在显示的播放的样式
            $btn.eq(i).removeClass()//清除正在选中页码的样式
    
            if(i!=0){
                $ban.eq(i-1).addClass("show")   //显示对应的张数
                $btn.eq(i-1).addClass("show")   //显示对应的页码
            }else{
    
                $ban.eq(n).addClass("show")   //显示对应的张数
                $btn.eq(n).addClass("show")   //显示对应的页码		
            }
            
        })
        
        id.children().eq(2).children().eq(1).click(function(e){
            e.preventDefault()
            var i=id.children().eq(0).children(".show").prevAll().length
            $ban.eq(i).removeClass()//清除正在显示的播放的样式
            $btn.eq(i).removeClass()//清除正在选中页码的样式
            
            if(i!=n){
                $ban.eq(i+1).addClass("show")   //显示对应的张数
                $btn.eq(i+1).addClass("show")   //显示对应的页码
            }else{
                $ban.eq(0).addClass("show")   //显示对应的张数
                $btn.eq(0).addClass("show")   //显示对应的页码		
            }
            
        })
        
    //自动翻页
        function showban(){
            var i=id.children().eq(0).children(".show").prevAll().length
            $ban.eq(i).removeClass()//清除正在显示的播放的样式
            $btn.eq(i).removeClass()//清除正在选中页码的样式
            
            if(i<n){
                $ban.eq(i+1).addClass("show")   //显示对应的张数
                $btn.eq(i+1).addClass("show")   //显示对应的页码
            }else{
                $ban.eq(0).addClass("show")   //显示对应的张数
                $btn.eq(0).addClass("show")   //显示对应的页码
            }
        }
        $ban.eq(0).addClass("show")   //显示对应的张数
        $btn.eq(0).addClass("show")   //显示对应的页码
        var jsq=setInterval(showban,time)
        id.mouseenter(function(){clearInterval(jsq)})//停止计时器
        id.mouseleave(function(){jsq=setInterval(showban,time)})//重新启动计时器
    
    }
}

