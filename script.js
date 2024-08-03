function profileAnimation() {

    let tl = gsap.timeline();

    tl.from("#name h1", {
        y: 100,
        duration: 1,
        opacity: 0,
        delay: 0.5,
    });
    gsap.from("#profileSkill h2", {
        y: 100,
        duration: 1,
        delay: 1,
        opacity: 0,
        duration: 1.5,
    });
    gsap.from(".profile-img img", {
        opacity: 0,
        delay: 0.5,
    });

    let soctl = gsap.timeline();
    soctl.from("nav-logo img, #Home, #Project, #About, #Contact", {
        y: -100,
        duration: 0.8,
        delay: 0.3,
        opacity: 0,
        stagger: 0.2,
    });

    let imgAni = gsap.timeline();
    imgAni.from("#img", {
        x: -150,
        delay: 0.3,
        duration: 0.8,
    });

}

function social_anim() {

    gsap.from(".social-media i", {
        y: 100,
        duration: 0.5,
        delay: 0.2,
        scrollTrigger: {
            trigger: "#linkedin, #twitter, #github, #discord",
            scroller: "body",
            start: "end 90%",
            end: "end 80%",
        }
    });

}

profileAnimation();
social_anim();
// cross_animation();