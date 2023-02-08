/**
 * Created by TJH on 2017/3/8.
 */

/*表示加载完成 才执行的 代码*/
$(function () {
    //1  回到顶部按钮的 点击显示 或者 隐藏
    //  绑定 监听 滚动条 高度的事件
    $(window).scroll(function () {
        //console.log($(this).scrollTop());
        var dH = $(this).scrollTop();
        if(dH>150){
            $("#topcontrol").css({opacity:1});
        }else{
            $("#topcontrol").css({opacity:0});
        }
    });

    //2   实现 根据 屏幕大小自动更改  占位图片div的高度  一自动 缩放图片大小
    $(window).resize(function () {
        //1  自适应图片 大小
        // 获取浏览器宽度 以及 屏幕宽度
        // console.log($(window).width()); 浏览器 最大宽度（需要获取 屏幕的最大宽度）
        // console.log(screen.width);
        if($(window).width()>768){
            var  max_width = screen.width;
            var  curr_width = $(window).width();
            // 计算后  占位 图片的高度
            var  curr_height = 700 * (curr_width/max_width);
            $(".bgImg,.img_text").css({height:curr_height+"px"});
            //  这里是  给  图文列表的 图片进行缩放
            /*$(".article_img img").css({"max-height":335*(curr_width/max_width)+"px"});*/
        }
        // 占位 图片的相应文字
        var  a = $(window).width()/1900;
        var  nowFT = a * 56;
        var  nowFFT = a * 36;
        $(".img_text_title").css({"font-size":nowFT+"px"});
        $(".img_text_son_title").css({"font-size":nowFFT+"px"});
    });


});