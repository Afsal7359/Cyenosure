function startAnimations() {
  // global variables

  const SCROLL_TRIGGER_DEFAULT = {
    start: "top center",
    end: "bottom top",
    fastScrollEnd: false,
    once: true,
  };

  const TL_DEFAULT = {
    duration: 0.8,
    ease: "power2",
  };

  // custom utiliy
  function selector(parent, children) {
    const parentElement = gsap.utils.selector(parent);
    return parentElement(children);
  }

  function sectionExists(section, sectionAnimation) {
    if (document.querySelector(section)) {
      sectionAnimation();
    }
  }

  // hero syle 1
  function heroStyle1() {
    const tl = gsap.timeline({
      delay: 1,
      defaults: TL_DEFAULT,
    });

    tl.from(selector(".hero-s3__thumb", "img"), { opacity: 0.5, y: -40 })
      .from(
        selector(".hero-s3__content", ".content-sh"),
        { opacity: 0, y: 40 },
        ">-.2"
      )
      .from(
        selector(".hero-s3__content", ".content-h"),
        { opacity: 0, y: 40 },
        ">-.6"
      )
      .from(
        selector(".hero-s3__content", ".content-d"),
        { opacity: 0, y: 40 },
        ">-.6"
      )
      .from(
        selector(".hero-s3__content", ".btn-group"),
        { opacity: 0 },
        ">-.6"
      );
  }
  sectionExists(".hero-s3", heroStyle1);

  // feature area 4
  function featureArea4() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".feature-area-s2",
        ...SCROLL_TRIGGER_DEFAULT,
      },
      defaults: TL_DEFAULT,
    });

    tl.from(selector(".feature-area-s2", ".s-title-wrap"), {
      opacity: 0,
      y: 20,
    })
      .from(
        selector(".feature-area-inner", ".feature-s4:nth-child(1)"),
        { opacity: 0, y: 40 },
        ">-.3"
      )
      .from(
        selector(".feature-area-inner", ".feature-s4:nth-child(2)"),
        { opacity: 0, y: 40 },
        ">-.6"
      )
      .from(
        selector(".feature-area-inner", ".feature-s4:nth-child(3)"),
        { opacity: 0, y: 40 },
        ">-.6"
      );
  }
  sectionExists(".feature-area-s2 ", featureArea4);

  // feature slider 4
  function featureSlider3() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".features-slider-s3",
        ...SCROLL_TRIGGER_DEFAULT,
      },
      defaults: TL_DEFAULT,
    });

    tl.from(".features-slider-s3", { opacity: 0, y: 30 });
  }
  sectionExists(".features-slider-s3", featureSlider3);

  // about-style 4
  function aboutStyle4() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-s4",
        ...SCROLL_TRIGGER_DEFAULT,
      },
      defaults: TL_DEFAULT,
    });

    tl.from(selector(".about-s4__thumb .p-left", ".img1"), {
      opacity: 0,
      y: 60,
    })
      .from(
        selector(".about-s4__thumb .p-left", ".img2"),
        { opacity: 0, y: 60 },
        ">-.6"
      )
      .from(
        selector(".about-s4__thumb .p-right", "img"),
        { opacity: 0, y: 60 },
        ">-.6"
      );
  }
  sectionExists(".about-s4", aboutStyle4);

  // about-style 5
  function aboutStyle5() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-s5",
        ...SCROLL_TRIGGER_DEFAULT,
      },
      defaults: TL_DEFAULT,
    });

    tl.from(selector(".about-s5__thumb .p-left", ".img1"), {
      opacity: 0,
      y: 60,
    })
      .from(
        selector(".about-s5__thumb .p-left", ".img2"),
        { opacity: 0, y: 70 },
        ">-.6"
      )
      .from(
        selector(".about-s5__thumb .p-right", "img"),
        { opacity: 0, y: 70 },
        ">-.6"
      );
  }
  sectionExists(".about-s5", aboutStyle5);

  // testimonial style 1
  function testimonialStyle1() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonial-area-s1",
        ...SCROLL_TRIGGER_DEFAULT,
      },
      defaults: TL_DEFAULT,
    });

    tl.from(selector(".testimonial-area-s1__content .cont-h", ".s-sub-title"), {
      opacity: 0,
      y: 40,
    })
      .from(
        selector(".testimonial-area-s1__content .cont-h", ".s-title"),
        { opacity: 0, y: 40 },
        ">-.6"
      )
      .from(
        selector(".testimonial-area-s1__content", ".testimonial-s1"),
        { opacity: 0, y: 40 },
        ">-.6"
      )
      .from(
        selector(".testimonial-area-s1__thumb", "img"),
        { opacity: 0, y: -40 },
        ">-.6"
      );
  }
  sectionExists(".testimonial-area-s1", testimonialStyle1);

  // footer style  1
  function footerStyle1() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer-s1",
        start: "top top+=200",
        end: "bottom top",
        fastScrollEnd: false,
        marker: true,
        once: true,
      },
      defaults: {
        ease: "power2",
        duration: 0.8,
      },
    });

    tl.from(selector(".footer-s1", ".widget-1"), { opacity: 0, x: 30 })
      .from(selector(".footer-s1", ".widget-2"), { opacity: 0, x: 30 }, ">-.6")
      .from(selector(".footer-s1", ".widget-3"), { opacity: 0, x: 30 }, ">-.6")
      .from(selector(".footer-s1", ".widget-4"), { opacity: 0, x: 30 }, ">-.6");
  }
  sectionExists(".footer-s1", footerStyle1);
  // hero style 1

  function heroStyle3() {
    const tl = gsap.timeline({
      defaults: TL_DEFAULT,
      delay: 1,
    });

    tl.from(selector(".hero-s1__thumb", ".img"), { opacity: 0, y: -40 })
      .from(selector(".hero-s1 .shapes", ".shp-3"), { opacity: 0 }, ">-.6")
      .from(selector(".hero-s1 .shapes", ".shp-1"), { opacity: 0 }, ">-.6")
      .from(
        selector(".hero-s1__content", ".btn-group"),
        { opacity: 0, y: 40 },
        ">-.6"
      );
  }

  sectionExists(".hero-s1", heroStyle3);

  // about style 1
  function aboutStyle1() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-s1",
        ...SCROLL_TRIGGER_DEFAULT,
      },
      defaults: TL_DEFAULT,
    });

    tl.from(selector(".about-s1", ".about-s1__thumb"), {
      opacity: 0,
      x: -30,
    }).from(
      selector(".about-s1", ".about-s1__content"),
      { opacity: 0, x: 30 },
      ">-.8"
    );
  }
  sectionExists(".about-s1", aboutStyle1);

  // feature area style 1
  function featureStyle1() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".feature-area-s1",
        ...SCROLL_TRIGGER_DEFAULT,
      },
      defaults: {
        duration: 0.8,
      },
    });

    tl.from(".feature-area-s1", { opacity: 0, y: 60 });
  }

  sectionExists(".feature-area-s1", featureStyle1);

  function pricingSection1() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pricing-section-s1",
        ...SCROLL_TRIGGER_DEFAULT,
      },

      defaults: TL_DEFAULT,
    });

    tl.from(selector(".pricing-section-s1", ".s-title-wrap"), {
      opacity: 0,
      y: 40,
    });
  }

  sectionExists(".pricing-section-s1", pricingSection1);

  // about style 2
  function aboutStyle2() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-s2",
        ...SCROLL_TRIGGER_DEFAULT,
      },
      defaults: TL_DEFAULT,
    });

    tl.from(selector(".about-s2", ".about-s2__thumb"), {
      opacity: 0,
      x: -40,
    }).from(
      selector(".about-s2", ".about-s2__content"),
      { opacity: 0, x: 40 },
      ">-.6"
    );
  }
  sectionExists(".about-s2", aboutStyle2);

  // project slider style 1
  function projectSlider1() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".project-slider-area-s1",
        ...SCROLL_TRIGGER_DEFAULT,
      },
      defaults: TL_DEFAULT,
    });

    tl.from(".project-slider-area-s1", { opacity: 0, y: 60 });
  }
  sectionExists(".project-slider-area-s1", projectSlider1);

  // footer style 2
  function footerStyle2() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".footer-s2",
        start: "top top+=200",
        end: "bottom top",
        fastScrollEnd: false,
        marker: true,
        once: true,
      },
      defaults: {
        ease: "power2",
        duration: 0.8,
      },
    });

    tl.from(selector(".footer-s2", ".widget-1"), { opacity: 0, x: 30 })
      .from(selector(".footer-s2", ".widget-2"), { opacity: 0, x: 30 }, ">-.6")
      .from(selector(".footer-s2", ".widget-3"), { opacity: 0, x: 30 }, ">-.6")
      .from(selector(".footer-s2", ".widget-4"), { opacity: 0, x: 30 }, ">-.6");
  }
  sectionExists(".footer-s2", footerStyle2);

  // team

  function teamAreaStyle3() {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".team-area-s1",
        ...SCROLL_TRIGGER_DEFAULT,
      },
      defaults: TL_DEFAULT,
    });

    tl.from(".team-area-s1", { opacity: 0, y: 60 });
  }

  sectionExists(".team-area-s1", teamAreaStyle3);
}
document.addEventListener("DOMContentLoaded", startAnimations);
