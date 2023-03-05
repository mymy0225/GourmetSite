//--- carousel ---//

$(".carousel").slick({
    dots:true,
    autoplay:true,
    autoplaySpeed:2000,
});

//--- modaal ---//
let show_id="";
let modal_id="";

$(".show").on("click",(event)=>{
    show_id= "#"+$(event.currentTarget).attr("id");
    modal_id= "#"+$(event.currentTarget).children("div").attr("id");
    $(show_id).modaal({
        content_source:(modal_id),
        start_open:true,
    });
});

$(".share").click(function(){
    alert(`${$(modal_id).data("id")}をシェアしました♪`);
    $(show_id).modaal("close");
});