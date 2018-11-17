$(function(){
    $("#LOGBTN").on("click",function(){
        var uname=$("#LOGIN_UNAME").val();
        var upwd=$("#LOGIN_UPWD").val();
        (async function(){
            var res = await $.ajax({
                url:"http://localhost:4000/users/signin",
                type:"post",
                data:{uname,upwd},
                dataType:"json"
            })
            if(res.ok==0){
                alert(res.msg);
            }else{
                alert("登录成功,即将返回来时的页面");
                if(location.search.startsWith("?back=")){
                    var url=location.search.slice(6);
                }else{
                    var url="index.html";
                }
                location.href=url;
            }
        })()
    })
})