gsap.set("#im",{
    top:"160%",
    
}
)

gsap.to("#im",{
    scrollTrigger:{
       trigger:"#sec",
       start:"top 100%",
   
       end:"top 60%",
       scrub: 3
    },
    rotate:"-170deg",
    top:"-30vw",
    duration:2,
    ease:Power0.easeInOut
}
)

gsap.to("#smcircle",{
    scrollTrigger:{
       trigger:"#sec",
       start:"30% 100%",
       end:"50% 40%",
      
       scrub:2
    },
    rotate:"-360deg",
    scale:1.5,
    ease:Expo.easeInOut
})

gsap.to("#fcirc",{
    scrollTrigger:{
       trigger:"#sec",
       start:"top 100%",
       end:"63% 40%",
      
       scrub:2
    },
    rotate:"360deg",
    ease:Power0.easeIn
})

gsap.to("#scirc",{
    scrollTrigger:{
       trigger:"#sec",
       start:"top 100%",
       end:"73% 40%",
     
       scrub:2
    },
    rotate: "-180deg",
    ease:Power0.easeInOut
})

gsap.to("#tcirc",{
    scrollTrigger:{
       trigger:"#sec",
       start:"top 100%",
       end:"83% 40%",
      
       scrub:2
    },
    rotate: "90deg",
    ease:Power0.easeInout
})

var tl = gsap.timeline({
    
    scrollTrigger:{
        trigger:"#three",
        start: "23% 30%",
        end:"40% 40.6%",
        scrub:2
    },

})

tl.to("#imgm",{
    top:"10%",
    rotate:"720deg",
    ease:Circ.easeInOut
})

tl.to("#n",{
   
    
    left:"65%",
    ease:Circ.easeInOut
})

tl.to("#imgm",{
   
    left:"-100%",
    ease:Power0.easeInOut

},"yash")


tl.to("#n",{
   
    
    left:"-100%",
    ease:Power0.easeInOut
},"yash")

var tl2 = gsap.timeline({
    
    scrollTrigger:{
        trigger:"#four",
        start: "center center",
        end:"55% 40.6%",
    
        pin:true,
        scrub:2
    },

})

tl2.to("#four h1 span",{
    stagger:0.2,
    top:"40%",
    ease:  Power0.easeInOut
},"yash")

tl2.to("#imgstrip img",{
   
    stagger:0.2,
   opacity:1,
    ease:Power0.easeInOut
},"yash")

document.querySelectorAll("#right a")
