window.addEventListener("scroll",function(){
    let stickyHeader= document.getElementById("header-annimate");
    let catagory=document.getElementById("catagory-animate");
    if(window.pageYOffset >0){
        stickyHeader.classList.add("cus-header")
       document.getElementById("formSearch").style.visibility="visible";
   
    }
    
    else{
        stickyHeader.classList.remove("cus-header");
        document.getElementById("formSearch").style.visibility="hidden";
    
    }
    if(window.pageYOffset>100){
        catagory.classList.add("cus-catagory")
        catagory.style.visibility="visible";
    }
    else{
        catagory.classList.remove("cus-catagory");
        catagory.style.visibility="hidden";
    }
    
})
