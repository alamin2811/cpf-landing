(function ($) {
    "use strict";

    // Register GSAP Plugin
    gsap.registerPlugin(ScrollTrigger);


    // if (document.body.classList.contains("smooth-scroll")) {

    //     gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    //     ScrollSmoother.create({
    //         wrapper: "#smooth-wrapper",
    //         content: "#smooth-content",
    //         smooth: 1.5,
    //         effects: true
    //     });

    // }

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

    $(document).ready(function () {
        var FundingAcrossParallax = $(".funding-across-images");
        if (FundingAcrossParallax.length) {
            // Make sure GSAP and ScrollTrigger are loaded
            gsap.registerPlugin(ScrollTrigger);

            // select the parent divs, not the img directly
            gsap.utils.toArray(".funding-across-images img").forEach((div, i) => {
                gsap.to(div, {
                    y: -(i + 1) * 50, // different speed per layer
                    ease: "none",
                    scrollTrigger: {
                        trigger: ".funding-across-section",
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });
        }
    });

})(jQuery);