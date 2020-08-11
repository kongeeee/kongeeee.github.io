$(document).ready(function(){
    // 밤하늘
    $("#cover").addClass("loaded");

    var windowWidth = $(window).width();
    var windowHeight = $(window).height();

    // 위쪽 별 배치
    for(var i=0; i<1000; i++){
        var toLeft = Math.round(Math.random() * windowWidth);
        var toTop = Math.round((Math.random() * windowHeight)/2);

        $("<div/>")
        .addClass("star-sm")
        .attr("style","top : "+toTop +"px; left : "+toLeft+"px;")
        .appendTo("#upper");

        if(i%5 == 0){
            $("<div/>")
            .addClass("star-md")
            .attr("style","top : "+toTop +"px; left : "+toLeft+"px;")
            .appendTo("#upper");
        }
        else if(i%25 == 0){
            $("<div/>")
            .addClass("star-lg")
            .attr("style","top : "+toTop +"px; left : "+toLeft+"px;")
            .appendTo("#upper");
        }
    }

    // 아래쪽 별 배치
    for(var i=0; i<500; i++){
        var toLeft = Math.round(Math.random() * windowWidth);
        var toTop = Math.round(Math.random() * windowHeight/2);

        $("<div/>")
        .addClass("star-sm")
        .attr("style","top : "+toTop +"px; left : "+toLeft+"px;")
        .appendTo("#lower");

        if(i%5 == 0){
            $("<div/>")
            .addClass("star-md")
            .attr("style","top : "+toTop +"px; left : "+toLeft+"px;")
            .appendTo("#lower");
        }
        else if(i%25 == 0){
            $("<div/>")
            .addClass("star-lg")
            .attr("style","top : "+toTop +"px; left : "+toLeft+"px;")
            .appendTo("#lower");
        }
    };

    // 복사하기
    $(".list-group-item").click(function(){
        var text = $(this).find("p").text();
        console.log(text);
        var input = $("#clip_target").val(text.split(' ').join(''));
        $("#clip_target").select();
        try {
            var successful = document.execCommand('copy');
            if(successful) {
                alert("복사되었습니다.");
            }
        }catch(err) {
            alert("복사에 실패하였습니다.");
        }
    });

    // 
    $("ul.tabs li").click(function(){
        var tab_id = $(this).attr("data-tab");

        $("ul.tabs li").removeClass("current");
        $(".tab-content").removeClass("current");

        $(this).addClass("current");
        $("#"+tab_id).addClass("current");
    });

}).resize();