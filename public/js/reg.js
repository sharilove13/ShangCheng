window.onload = function(){
    var $reg_suc_time =$("#COUNTDOWN");
    var end = parseInt($reg_suc_time.html());
    function downTask(){
        if(end>0){
            end--;
            $reg_suc_time.html(end);
        }else{
            clearInterval(downTimer);
            $reg_suc_time.html("0");
        }
    }
    var downTimer=setInterval(downTask,1000);
}