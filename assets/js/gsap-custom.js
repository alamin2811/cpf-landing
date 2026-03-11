(function ($) {
    "use strict";

    // Register GSAP Plugin
    gsap.registerPlugin(ScrollTrigger);

    // smooth-scroll
    if (document.body.classList.contains("smooth-scroll")) {

        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 1,
            effects: true
        });

    }

    // BannerParallax
    gsap.to(".banner-section", {
        backgroundPosition: "center 200px",
        ease: "none",
        scrollTrigger: {
            trigger: ".banner-section",
            start: "top top",
            end: "bottom top",
            scrub: true
        }
    });

    // projectParallax
    var projectParallax = $(".project-section");
    if (projectParallax.length) {
        gsap.to(".project-parallax-bg", {
            y: 300,
            ease: "none",
            scrollTrigger: {
                trigger: ".project-section",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    }

    // productGuideParallax
    var productGuideParallax = $(".product-guide-section");
    if (productGuideParallax.length) {
        gsap.to(".parallax-bg", {
            y: 250,
            ease: "none",
            scrollTrigger: {
                trigger: ".product-guide-section",
                start: "top bottom",
                end: "bottom top",
                scrub: true
            }
        });
    }

    const section = document.querySelector("#fundingAcross");
    const mapImg = document.querySelector(".funding-across-map-img img");
    const images = document.querySelector(".funding-across-images");

    if (section && mapImg && images) {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: "+=700",
                scrub: true,
                pin: section,
                anticipatePin: 1
            }
        });

        // Map zoom out
        tl.fromTo(
            mapImg,
            { scale: 1 },
            { scale: 0.7, ease: "none" },
            0
        );

        // Make images sticky at the top of viewport
        ScrollTrigger.create({
            trigger: section,        // still use section as trigger
            start: "top top",
            end: "top top",       // sticky until the section ends
            pin: images,             // pin the images container
            pinSpacing: false        // no extra spacing added
        });
    }

})(jQuery);