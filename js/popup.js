var endpageTopOffset = $(".eop").offset().top; //in jquery this offset method gets the value of the horizontally and vertically 
console.log(endpageTopOffset);
$(window).scroll(function() {       //when window is scrolled do this
    if(window.pageYOffset > endpageTopOffset +200) {

        alert("how you doing!");
    }
})   

//////I need it to work only one time 
