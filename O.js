var cli=true;
$("document").ready(function(){
$("#menu").click(function(){
 if(cli==true){
 $("#draw").attr("style","left:0px")} 
 else{
  $("#draw").attr("style","left:-400px");}
 cli=!cli;
});

var sc=0;
var t=setInterval(function(){
if($(window).width()<600){
    sc+=373;
    if(sc<1200){
        $("#des").scrollLeft(sc)
    } 
    else{
        sc=-1492;
    } }
else if($(window).width()>=600 && $(window).width()<928){
    sc+=700;
    if(sc<2800){
        $("#des").scrollLeft(sc)
    } 
    else{
        sc=-3492;
    }
  
}
 else if($(window).width()>=928){
     sc+=988;
    if(sc<3600){
        $("#des").scrollLeft(sc)
    } 
    else{
        sc=-4592;
    }
}
    
},3000);
var sho=true;
$("#draw li:nth-child(2)").click(function(){
 if(sho==true){
    $("#tex").hide();}
    else{
    $("#tex").show();}
    sho=!sho;
})
var mo=setInterval(function(){
   var scroll_do=$("#whole_site").scrollTop();
   //console.log(scroll_do)
    $("#train").attr("style","left:"+scroll_do*0.4+"px")
    
   if($(window).width()<600){
    if(scroll_do>198){
    $("#all_work,#bow,#foll").attr("style","opacity:1;");
    $("#plane").attr("style","top:114%");
    }
    else{
        $("#all_work,#bow,#foll").attr("style","opacity:0");
    $("#plane").attr("style","top:4%");
    }}
    
    else if($(window).width()>600){
   $("#train").attr("style","left:"+scroll_do*4+"px")
    $("#all_work,#bow,#foll").attr("style","opacity:1;");
    $("#plane").attr("style","top:50%;")
    }
    },100)
    
});