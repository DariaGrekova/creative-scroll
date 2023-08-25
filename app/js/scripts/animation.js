

export function animation() {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    if (ScrollTrigger.isTouch !== 1) {
        ScrollSmoother.create({
            wrapper: '.wrapper',
            content: '.content',
            smooth: 1.5,
            effects: true,
        })

        // portfolio
        gsap.fromTo('.hero', { opacity: 1 }, {
            opacity: 0,
            scrollTrigger: {
                trigger: '.hero',
                start: 'center',
                end: 2000,
                scrub: true
            }
        })


        let leftBlock = gsap.utils.toArray('.gallery__left .gallery__item');
        leftBlock.forEach((item) => {
            gsap.fromTo(item, { x: -100, opacity: 0 }, {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: item,
                    start: '-850',
                    end: '-100',
                    scrub: true
                }
            })
        })

        let rightBlock = gsap.utils.toArray('.gallery__right .gallery__item');
        rightBlock.forEach((item) => {
            gsap.fromTo(item, { x: 100, opacity: 0 }, {
                x: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: item,
                    start: '-850',
                    end: '-100',
                    scrub: true
                }
            })
        })
    }
}