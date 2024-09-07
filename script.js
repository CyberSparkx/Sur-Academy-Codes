gsap.from("#img1",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:60,
})
gsap.from("#img2",{
    delay:0.4,
    opacity:0,
    duration:1,
    x:40,
})
gsap.from("#img3",{
    delay:0.4,
    opacity:0,
    duration:1,
    y:-60,
})
gsap.from("#center1",{
    delay:0.4,
    opacity:0,
    duration:1,
})
gsap.from(".about",{
    delay:1.5,
    opacity:0,
    duration:3,
    scrollTrigger:{
        trigger:".about-sur-academy",
        start: "top 50%",
        end: "top 20%",
        scroller:"body",
        scrub:2,

    }
})
gsap.from(".about",{
    duration:3,
    scrollTrigger:{
        trigger:".about",
        start: "top 30%",
        end: "top -30%",
        scroller:"body",
        scrub:2,
        pin:true

    }
})
gsap.from(".teacher1",{
    delay:0.4,
    opacity:0,
    duration:1,
    x:60,
    scrollTrigger:{
        trigger:".teacher-card",
        start: "top 50%",
        end: "top 20%",
        scroller:"body",
        scrub:2,
        // markers:true,

    }
})

gsap.from(".courses",{
    delay:0.5,
    opacity:0,
    duration:3,
    x:120,
    scrollTrigger:{
        trigger:".courses",
        start: "top 20%",
        end: "top -60%",
        scroller:"body",
        scrub:2,
        pin:true

    }
})
gsap.from(".picture",{
    delay:0.4,
    opacity:0,
    duration:3,
    y:120,
    scrollTrigger:{
        trigger:".picture",
        start: "top 20%",
        end: "top -20%",
        scroller:"body",
        scrub:2,

    }
})
gsap.from(".course-row",{
    delay:0.4,
    opacity:0,
    duration:3,
    y:120,
    scrollTrigger:{
        trigger:".course-row",
        start: "top 50%",
        end: "top 20%",
        scroller:"body",
        scrub:2,

    }
})

gsap.from(".courses",{
    delay:0.4,
    opacity:0,
    duration:3,
    
    scrollTrigger:{
        trigger:".btn",
        start: "top 50%",
        end: "top 20%",
        scroller:"body",
        scrub:2,

    }
})
gsap.from(".frontend",{
    delay:1,
    opacity:0,
    duration:3,
    x:-100,
    y:50,
    scrollTrigger:{
        trigger:".frontend",
        start: "top 50%",
        end: "top 20%",
        scroller:"body",
        scrub:2,

    }
})
gsap.from(".frontend1",{
    delay:1,
    opacity:0,
    duration:3,
    x:100,
    y:-50,
    scrollTrigger:{
        trigger:".frontend1",
        start: "top 50%",
        end: "top 20%",
        scroller:"body",
        scrub:2,

    }
})
gsap.from(".social",{
    delay:1,
    opacity:0,
    duration:3,
    x:100,
    scrollTrigger:{
        trigger:".social",
        start: "top 25%",
        end: "top -40%",
        scroller:"body",
        scrub:2,
        pin:true

    }
})
gsap.from(".contacrs",{
    delay:1,
    opacity:0,
    duration:3,
    x:-100,
    scrollTrigger:{
        trigger:".contacrs",
        start: "top 45%",
        end: "top 10%",
        scroller:"body",
        scrub:2,

        pin:true

    }
})



