document.addEventListener('DOMContentLoaded', function () {
    const hero = new HeroSlider('.swiper');
    hero.start();

    new Main();
});

class Main {
    constructor(){
        this.header = document.querySelector('.header');
        this.sides = document.querySelectorAll('.side')
        this.hero = new HeroSlider('.swiper');
        this._observers = [];
        this._init();
    }

    _toggleSlideAnimation(el, inview) {
        if(inview) {
            this.hero.start();
        }else {
            this.hero.stop();
        }
    }

    _init() {
        new MobilMenu;
        this._scrollInit();
    }
    _scrollInit() {
        this._observers.push(
            new ScrollObserver('.nav-trigger', this._navAnimation.bind(this), {noce:false})),
            new ScrollObserver('.main-content', this._sideAnimation.bind(this), {noce:false ,
            rootMargin: "-300px 0px"}),
            new ScrollObserver('.swiper', this._toggleSlideAnimation.bind(this), { noce:false }),
            new ScrollObserver('.cover-slide', this._inviewAnimation),
            new ScrollObserver('.tween-animate-title', this._textanimation)
    }

     _navAnimation(el, inview) {
        if(inview) {
            this.header.classList.remove('triggered');
        }else {
            this.headerl.classList.add('triggered');
        }
    }

    _textanimation(el, inview) {
        if(inview) {
            const ta = new TweenTextAnimation(el);
            ta.animate();
        }
    }

     _inviewAnimation(el, inview) {
        if(inview) {
            el.classList.add('inview');
        }else {
            el.classList.remove('inview');
        }
     }
     _sideAnimation(el, inview) {
        if(inview) {
            this.sides.forEach( side => side.classList.add('inview'))
        }else {
            this.sides.forEach( side => side.classList.remove('inview'))
        }
     }
    }