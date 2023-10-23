function loco()
{
  gsap.registerPlugin(ScrollTrigger);


  const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
//   smoothMobile: true,
  smooth: true
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
  
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });
}
loco();

function pageLoad() {   
    gsap.from("nav", {
        y: -20,
        opacity:0   
    })
}

pageLoad();

function videoPlay() {
    let v = document.querySelector('.video');
    let play = document.querySelector(".play");
    let pause = 1;
    v.addEventListener('click', function() {
        if (pause === 1) {
            v.play();
            pause = 0;
            play.innerText = "PAUSE";
        }
        else {
            v.pause();
            pause = 1;
            play.innerText = "PLAY";
        }
        
    })
}
videoPlay();

function vidcon() {
    let crsr = document.querySelector('.play');
    let vid = document.querySelector('.vid-container');

    
    vid.addEventListener('mousemove', function (dets) {
        gsap.to(crsr, {
            opacity: 1,
            scale: 1,
            left: dets.x - 60,
            top: dets.y + 50 
        })
    })

    vid.addEventListener('mouseleave', function () {
        gsap.to(crsr, {
            opacity: 0,
            scale: 0
        })
    })

}
vidcon();

function loadAnimation() {
    gsap.to(".bounding h1", {
        transform: 'translateY(-0%)',
        duration: .5,
        delay: 0.5,
        stagger: 0.2
    });

    gsap.from(".page1 video", {
        scale:0.8,
        opacity: 0,
        duration: .4,
        delay: 1.3
    })
}
loadAnimation();

function cursorAnim() {
    let follower = document.querySelector(".cursor");
    let child = document.querySelectorAll(".child");

    child.forEach(function(elem){
        elem.addEventListener('mousemove', function(dets){
            gsap.to(follower,{
                opacity: 1,
                left: dets.x - 50,
                top: dets.y - 50,
                scale:2
            })
        })  

        elem.addEventListener('mouseleave', function(dets) {
            gsap.to(follower,{
                    opacity: 0,
                    scale:0
            })
        })
    })
}
cursorAnim();

function navAnimation() {
    gsap.to(".left svg, .right a", {
        y:-90,
        scrollTrigger: {
            opacity:0,
            duration:1,
            trigger:".left svg",
            scroller: ".main",
            start: "80%",
            end: "40%",
            scrub: .4
        }
    })
}
navAnimation();

function logoAnimation() {
    gsap.from(".two path",{
        opacity: 0,
        rotate: 10,
        scale: 1.1,
        duration: 3,
        stagger: 1,
        duration: 3,
        scrollTrigger: {
            trigger: ".two path",
            scroller: ".main",
            start: "top 95%",
            end: "top 90%",
            scrub: 2,
        }
    })
    
}
logoAnimation();

function menu() {
    let menu = document.querySelector(".ri-menu-line");
    let close = document.querySelector(".ri-close-line");
    let svg = document.querySelectorAll(".left svg");
    let right = document.querySelectorAll(".right a");
    let icon = document.querySelectorAll(".icon, i");
    let iconBg = document.querySelector(".icon");
    let freeze = document.querySelector("body");

    menu.addEventListener("click", function() {


        freeze.style.overflow = "hidden"
        svg.forEach((path)=>{
            path.style.color = "#fff";
        })
        right.forEach((elem) => {
            elem.style.color = "#fff";
        })
        icon.forEach((elem) => {
            elem.style.color = "#fff";
        })
        iconBg.style.backgroundColor = "#000";
        close.style.display = "block";
        menu.style.display = "none";
        gsap.to(".menu", {
            duration:1,
            transform: "translateY(0%)",
            ease: "expo.out",
        })
    })

    close.addEventListener("click", function() {
        
        freeze.style.overflow = "visible"
        svg.forEach((path) => {
            path.style.color = "#000";
        })
        right.forEach((elem) => {
            elem.style.color = "#000";
        })
        icon.forEach((elem) => {
            elem.style.color = "#000";
        })
        iconBg.style.backgroundColor = "#f7f7f7";
        close.style.display = "none";
        menu.style.display = "block";
        gsap.to(".menu", {
            duration:1,
            transform: "translateY(-100%)",
            ease: "expo.out",
        })
    })
}
menu();