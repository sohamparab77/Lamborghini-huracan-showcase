let crsr = document.querySelector("#cursor")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x - 250 + "px"
    crsr.style.top = dets.y - 250 + "px"
})

gsap.to("#nav",{
    backgroundColor: "black",
    height: "100px",
    duration:0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
       // markers: true,
        start: "top -10%",
        top: "top -11%",
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger: {
        trigger: "#main",
        scoller: "body",
       // markers:true,
        start: "top -30%",
        end: "top -80%",
        scrub:2
    }
})

gsap.from("#about-us img, #about-us-in", {
    y: 50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        //markers:true,
        start:"top 60%",
        end: "top 58%",
        scrub:2
    }
})
gsap.from(".card", {
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        //markers:true,
        start:"top 70%",
        end: "top 68%",
        scrub:1
    }
})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
      //  markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})
gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger: "#colon1",
        scroller: "body",
       // markers:true,
        start: "top 55%",
        end: "top 45%",
        scrub: 4
    }
})
gsap.from("#page4 h1",{
    y:70,
    scrollTrigger:{
        trigger: "#page4 h1",
        scroller: "body",
        //markers:true,
        start: "top 85%",
        end: "top 70%",
        scrub: 3
    }
} )