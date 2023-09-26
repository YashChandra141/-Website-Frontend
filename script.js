const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function firstPageAnim(){
    let tl=gsap.timeline();
    tl.from ("#nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease:Expo.easeOut
    })
    .to(".boundingelem",{
        y:0,
        ease:Expo.easeOut,
        diration:2,
        stagger:0.2,
        delay:-1
    })
    .from("#herofooter",{
        y:-10,
        opacity:0,
        duration:1.5,
        delay:-1,
        ease:Expo.easeOut
    })
};
let timeout;
function circleChaptaKaro(){
    
    //define deafault scale value
    let xscale= 1;
    let yscale= 1;
    let xprev =0;
    let yprev = 0;

    window.addEventListener("mousemove",function(dets){
            clearTimeout(timeout);
            xscale=gsap.utils.clamp(0.8,1.2,dets.clientX-xprev);  
            yscale=gsap.utils.clamp(0.8,1.2,dets.clientY-yprev);
            
            xprev=dets.clientX;
            yprev=dets.clientY;  
            circleMouseFollower(xscale,yscale);
            timeout=setTimeout(function(){
                document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;

            },100);
            
    });
};
function circleMouseFollower(xscale,yscale){
    window.addEventListener("mousemove",function(dets){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    });
};
circleChaptaKaro();
circleMouseFollower();
firstPageAnim();

document.querySelectorAll(".elem").forEach(function(elem) {
    let rotate =0;
    let diffrot=0;
    elem.addEventListener("mouseleave",function(dets){
        rotate =dets.clientX;
        
        gsap.to(elem.querySelector("img"),{
        opacity:0,
        ease:Power3,
        duration:0.5
        
       })

    });
    elem.addEventListener("mousemove",function(dets){
        let diff=dets.clientY-elem.getBoundingClientRect().top;
        diffrot =dets.clientX-rotate;
        rotate =dets.clientX;
        
        gsap.to(elem.querySelector("img"),{
        opacity:1,
        ease:Power3,
        top:diff,
        left:dets.clientX,
        rotate:gsap.utils.clamp(-20,20,diffrot*0.5)
        
       })

    });
    
});

