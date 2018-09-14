window.onload=function(){

    let show_left=document.querySelector(".show .left");
    let show_right=document.querySelector(".show .right");
    let show_ul=document.querySelector(".show ul");
    let lists=document.querySelector(".show ul li");
    let width=parseInt(getComputedStyle(lists,null).width)+2;
    let time=0;
    console.log(show_left,show_right,show_ul,lists,width);
    show_left.onclick=function () {
        time--;
        if(time==-1){
            time=0;
        }
        show_ul.style.transform="translateX("+(-width*time)+"px)";
    }
    show_right.onclick=function () {
        time++;
        if(time>=3){
            time=2;
        }
        show_ul.style.transform="translateX("+(-width*time)+"px)";
    }
}