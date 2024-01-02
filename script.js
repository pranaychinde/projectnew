
var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove", function(dets){
    crsr.style.left=dets.x+20+"px"
    crsr.style.top=dets.y+"px"
})
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
    blur.style.left=dets.x-100 +"px"
    blur.style.top=dets.y-100+"px"
})
var h4all= document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale=3
        crsr.style.border="0.8px solid white" 
        csrs.style.backgroundColor="transparent"
    })
    elem.addEventListener("mouseleave", function(){
        crsr.style.scale=1
        crsr.style.border="0px solid #afa4a4a1" 
        csrs.style.backgroundColor="#afa4a4a1"
    })
})

gsap.to("#nav",{
    backgroundColor:"#2C3E50",
    height:"110px",
    duration:1,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:0.5
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2

    }
})

gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    // stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2

    }
})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    // stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2

    }
})

