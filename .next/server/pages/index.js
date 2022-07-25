"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 748:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_FpsCtrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(723);
/* harmony import */ var _utils_useOnScrollEffect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var _utils_getElementRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(752);
/* harmony import */ var _utils_elementSetter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(405);






const AnimatedHeader = ({ text , isLeftPositioned =true , subtitle  })=>{
    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const headerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const spritesContainerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const cursorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const bottomLineRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const subtitleSpriteRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const subtitleRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    function animateTextTyping() {
        const spriteAnimation = new _helpers_FpsCtrl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z(12, ({ frame  })=>{
            if (headerRef.current != null) {
                if (frame === 0) {
                    headerRef.current.childNodes[0].nodeValue = "";
                    headerRef.current.classList.remove("invisible");
                }
                if (!!text[frame]) {
                    headerRef.current.childNodes[0].nodeValue = headerRef.current.childNodes[0].nodeValue + text[frame];
                } else if (frame <= text.length + 4) {
                    const [cursorHeaderElement] = Array.from(headerRef.current.children);
                    switch(frame){
                        case text.length:
                            cursorHeaderElement.style.height = "10px";
                            break;
                        case text.length + 1:
                            cursorHeaderElement.style[isLeftPositioned ? "left" : "right"] = "calc(100% + 40px)";
                            break;
                        case text.length + 2:
                            cursorHeaderElement.style[isLeftPositioned ? "left" : "right"] = "calc(100% + 70px)";
                            cursorHeaderElement.style.height = "18px";
                            cursorHeaderElement.style.width = "18px";
                            break;
                        case text.length + 4:
                            cursorHeaderElement.style[isLeftPositioned ? "left" : "right"] = "calc(100% + 84px)";
                            break;
                        default:
                            break;
                    }
                }
            }
        });
        setTimeout(()=>{
            spriteAnimation.stopAnimation();
        }, 2000);
    }
    function animate() {
        const bottomLineElement = new _utils_elementSetter__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z((0,_utils_getElementRef__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(bottomLineRef));
        bottomLineElement.removeClass("scale-x-0");
        const subtitleElement = new _utils_elementSetter__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z((0,_utils_getElementRef__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(subtitleRef));
        subtitleElement.removeClass([
            "opacity-0",
            "translate-x-full"
        ]);
        const subtitleSpriteElement = new _utils_elementSetter__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z((0,_utils_getElementRef__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(subtitleSpriteRef));
        const animateSubtitleSprite = ()=>{
            subtitleSpriteElement.removeClass([
                "scale-y-[7]",
                "translate-y-[6em]"
            ]);
            subtitleSpriteElement.element.removeEventListener("transitionend", animateSubtitleSprite);
        };
        subtitleSpriteElement.removeClass("invisible").addClass("scale-y-[7]").element.addEventListener("transitionend", animateSubtitleSprite);
        const containerElement = new _utils_elementSetter__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z((0,_utils_getElementRef__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(containerRef));
        const { right , left  } = containerElement.element.getBoundingClientRect();
        const bottomLineWidth = isLeftPositioned ? right : document.documentElement.clientWidth - left;
        const spritesContainerElement = new _utils_elementSetter__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z((0,_utils_getElementRef__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(spritesContainerRef));
        spritesContainerElement.addStyle({
            width: `${bottomLineWidth}px `
        });
        const cursorElement = new _utils_elementSetter__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z((0,_utils_getElementRef__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(cursorRef));
        cursorElement.removeClass("invisible");
        const cursorWidth = cursorElement.element.getBoundingClientRect().width;
        const leftSpace = containerElement.element.getBoundingClientRect().left;
        cursorElement.addStyle({
            transform: `scaleX(${leftSpace / cursorWidth})`
        });
        cursorElement.element.addEventListener("transitionend", ()=>{
            cursorElement.addClass("invisible");
            animateTextTyping();
        });
    }
    (0,_utils_useOnScrollEffect__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(containerRef, animate);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `mb-10 lg:mb-16 ${isLeftPositioned ? "" : "text-right"}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: containerRef,
                className: "relative inline-block mb-4",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        ref: headerRef,
                        className: `relative invisible inline-block leading-[0.7] ${isLeftPositioned ? "mr-20" : "ml-20"} mb-4`,
                        children: [
                            text,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: `absolute w-5 h-11 mx-2 bg-primary top-1/2 -translate-y-1/2 ${isLeftPositioned ? "left-full" : "right-full"}`,
                                children: "\xa0"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        ref: spritesContainerRef,
                        className: `absolute w-full h-full top-1/2 -translate-y-1/2 ${isLeftPositioned ? "right-0" : "left-0"} flex items-baseline`,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: cursorRef,
                                className: `w-4 h-11 bg-primary invisible transition-transform duration-[83ms] delay-[83ms] ${isLeftPositioned ? "origin-left" : "origin-right"}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: bottomLineRef,
                                className: `border-b-2 border-primary w-full scale-x-0 absolute ${isLeftPositioned ? "origin-left" : "origin-right"} bottom-0 duration-1000`
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `flex items-center ${isLeftPositioned ? "" : "flex-row-reverse"}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        ref: subtitleSpriteRef,
                        className: `invisible inline-block w-1 h-[1em] bg-primary align-middle transition-transform duration-500 translate-y-[6em] origin-bottom ${isLeftPositioned ? "mr-28" : "ml-28"}`,
                        children: "\xa0"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "inline-flex items-center overflow-hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            ref: subtitleRef,
                            className: "uppercase inline-block leading-none opacity-0 translate-x-full transition-all duration-700 delay-[417ms] mb-0",
                            children: subtitle
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AnimatedHeader);


/***/ }),

/***/ 869:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_FpsCtrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(723);
/* harmony import */ var _utils_getElementRef__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(752);
/* harmony import */ var _utils_elementSetter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(405);
/* harmony import */ var _utils_useDidUpdate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(596);
/* harmony import */ var _utils_useOnScrollEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);







const Carousel = ({ children , isSlideEffect =false , animateChildren  })=>{
    const contentRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const navigatorRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const navigationRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const sliderRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: activeSlide , 1: setActiveSlide  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const { 0: onSliding , 1: setOnSliding  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const animate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        const carouselAnimation = new _helpers_FpsCtrl__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z(12, ({ frame  })=>{
            const contentElement = new _utils_elementSetter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z((0,_utils_getElementRef__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(contentRef));
            const navigatorElement = new _utils_elementSetter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z((0,_utils_getElementRef__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(navigatorRef));
            const navigationElement = new _utils_elementSetter__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z((0,_utils_getElementRef__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(navigationRef));
            switch(frame){
                case 0:
                    break;
                case 1:
                    contentElement.addStyle({
                        transform: "scale(0.07)",
                        background: "var(--primary-color)"
                    }).removeClass("invisible");
                    break;
                case 2:
                    contentElement.removeStyle("background");
                    break;
                case 3:
                    contentElement.addStyle({
                        transform: "scale(0.15)"
                    });
                    break;
                case 4:
                    contentElement.addStyle({
                        transform: "scale(0.85)"
                    });
                    break;
                case 5:
                    contentElement.addStyle({
                        transform: "scale(0.95)"
                    });
                    navigatorElement.addStyle({
                        opacity: "0.33"
                    }).removeClass("opacity-0");
                    navigationElement.addStyle({
                        opacity: "0.33"
                    }).removeClass("opacity-0");
                    break;
                case 6:
                    contentElement.addStyle({
                        transform: "scale(1)"
                    });
                    navigatorElement.addStyle({
                        opacity: "0.66"
                    });
                    navigationElement.addStyle({
                        opacity: "0.66"
                    });
                    if (!!animateChildren) {
                        animateChildren(activeSlide);
                    }
                    break;
                case 7:
                    navigatorElement.removeStyle("opacity");
                    navigationElement.removeStyle("opacity");
                    break;
                default:
                    break;
            }
        });
        setTimeout(()=>{
            carouselAnimation.stopAnimation();
        }, 1000);
    }, [
        activeSlide,
        animateChildren
    ]);
    (0,_utils_useDidUpdate__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(()=>{
        if (!!animateChildren) {
            animateChildren(activeSlide);
        }
    });
    (0,_utils_useOnScrollEffect__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(contentRef, animate);
    function onClickNavigator(direction) {
        if (direction === "prev" && activeSlide !== 0) {
            setActiveSlide(activeSlide - 1);
        } else if (activeSlide !== react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(children).length - 1) {
            setActiveSlide(activeSlide + 1);
        }
        if (isSlideEffect) {
            const sliderElement = (0,_utils_getElementRef__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(sliderRef);
            let slideLeftAnimation = 0;
            const slideSpeed = sliderElement.offsetWidth * 0.06;
            setOnSliding(true);
            const slideLeft = ()=>{
                slideLeftAnimation = requestAnimationFrame(slideLeft);
                if (sliderElement.scrollLeft > (activeSlide - 1) * sliderElement.offsetWidth) {
                    const nextMovement = sliderElement.scrollLeft - slideSpeed;
                    const lastPointTarget = (activeSlide - 1) * sliderElement.offsetWidth;
                    const isNextMoveBeyondLimit = nextMovement < lastPointTarget;
                    sliderElement.scrollTo({
                        left: isNextMoveBeyondLimit ? lastPointTarget : nextMovement
                    });
                } else {
                    cancelAnimationFrame(slideLeftAnimation);
                    setOnSliding(false);
                }
            };
            let slideRightAnimation = 0;
            const slideRight = ()=>{
                slideRightAnimation = requestAnimationFrame(slideRight);
                if (sliderElement.scrollLeft < (activeSlide + 1) * sliderElement.offsetWidth) {
                    const nextMovement = sliderElement.scrollLeft + slideSpeed;
                    const lastPointTarget = (activeSlide + 1) * sliderElement.offsetWidth;
                    const isNextMoveBeyondLimit = nextMovement > lastPointTarget;
                    sliderElement.scrollTo({
                        left: isNextMoveBeyondLimit ? lastPointTarget : nextMovement
                    });
                } else {
                    cancelAnimationFrame(slideRightAnimation);
                    setOnSliding(false);
                }
            };
            if (direction === "prev" && activeSlide !== 0) {
                slideLeft();
            } else if (activeSlide !== react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(children).length - 1) {
                slideRight();
            }
        }
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative pb-[55.3%]",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: contentRef,
                        className: "absolute bg-secondarybg inset-0 border border-primary invisible",
                        children: isSlideEffect ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "h-full px-2 py-4 lg:px-8 lg:py-10 mx-auto",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: sliderRef,
                                className: "overflow-hidden h-full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "inline whitespace-nowrap",
                                    children: react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(children).map((Child, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "inline-block w-full h-full whitespace-normal",
                                            children: Child
                                        }, index)
                                    )
                                })
                            })
                        }) : react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(children).map((Child, index)=>activeSlide === index ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-full px-2 py-4 lg:px-8 lg:py-10 mx-auto",
                                children: Child
                            }, index) : null
                        )
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        ref: navigatorRef,
                        className: "opacity-0 absolute inset-x-0 inset-y-1/2 -translate-y-1/2 w-full h-1/4 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                title: "Previous",
                                className: " p-0 w-5 h-5 md:w-12 md:h-12 border-primary border-l-2 border-b-2 md:border-l-4 md:border-b-4 rotate-45 -translate-x-full relative before:content-[''] before:absolute before:top-1 before:right-1 md:before:top-2.5 md:before:right-2.5 before:block before:w-full before:h-full before:box-content before:border-l-2 before:border-b-2 md:before:border-l-4 md:before:border-b-4 before:border-secondary disabled:opacity-25",
                                disabled: activeSlide === 0 || onSliding,
                                onClick: ()=>onClickNavigator("prev")
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                title: "Next",
                                className: " p-0 w-5 h-5 md:w-12 md:h-12 border-primary border-r-2 border-t-2 md:border-r-4 md:border-t-4 rotate-45 translate-x-full relative before:content-[''] before:absolute before:bottom-1 before:left-1 md:before:bottom-2.5 md:before:left-2.5 before:block before:w-full before:h-full before:box-content before:border-r-2 before:border-t-2 md:before:border-r-4 md:before:border-t-4 before:border-secondary disabled:opacity-25",
                                disabled: activeSlide === react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(children).length - 1 || onSliding,
                                onClick: ()=>onClickNavigator("next")
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: navigationRef,
                className: "text-right opacity-0",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
                    className: "inline mr-7-",
                    children: react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(children).map((child, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: `list-none inline-block mr-1 h-0.5 w-4 lg:h-1 lg:w-9 ${index === activeSlide ? "bg-primary" : "bg-tertiary"}`
                        }, index)
                    )
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);


/***/ }),

/***/ 325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(869);
/* harmony import */ var _OneScreenContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(291);
/* harmony import */ var _AnimatedHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(748);
/* harmony import */ var _FuturisticEdge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(164);







const CharactersSlider = ({ charactersContent , title: title1 = "Characters" , subtitle  })=>{
    const { 0: activeSlide , 1: setActiveSlide  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
    const animate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((CarouselActiveSlide)=>{
        setActiveSlide(CarouselActiveSlide);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OneScreenContainer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "h-full w-full flex items-center bg-secondarybg",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "container mx-auto",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    id: "characters",
                    className: "relative w-full px-11 lg:px-64",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AnimatedHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            text: title1,
                            subtitle: subtitle
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Carousel__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                            animateChildren: animate,
                            children: charactersContent.map(({ characterImageUrl , id , title , description  }, index)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${index === activeSlide ? "" : "opacity-0 "}h-full flex justify-center items-stretch transtion-opacity duration-250 pointer-events-none`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "w-2/3 lg:w-1/2 flex items-end",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `relative inline-block px-3 py-3 lg:px-7 lg:py-6 transition-transform duration-[416ms] delay-75 ease-out  ${index === activeSlide ? "" : "scale-[0.25]"}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FuturisticEdge__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "bg-secondary py-3 px-3 lg:py-9 lg:px-[3.28rem]",
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                                            className: `transition-opacity duration-[167ms] delay-[333ms] ease-out  ${index === activeSlide ? "" : "opacity-0"}`,
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                                    children: title
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                    className: "line-clamp-[10]",
                                                                    children: description
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "relative w-1/3 lg:w-1/2 flex items-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: `absolute w-[50vw] left-[10%] -mt-[40%] transition-transform duration-[416ms] delay-75 ease-out ${index === activeSlide ? "" : "-translate-x-[8%]"}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                    src: characterImageUrl,
                                                    width: "680px",
                                                    height: "1120px",
                                                    alt: title,
                                                    className: `${index === activeSlide ? "" : "brightness-50 "} transition-filter duration-[416ms] delay-75 ease-out`
                                                })
                                            })
                                        })
                                    ]
                                }, id);
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CharactersSlider);


/***/ }),

/***/ 444:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _OneScreenContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(291);
/* harmony import */ var _AnimatedHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(748);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(869);





const FeaturesSlider = ({ featureImages , title: title1 = "Features" , subtitle  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OneScreenContainer__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container mx-auto h-full w-full flex items-center",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                id: "features",
                className: "px-11 lg:px-64 w-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AnimatedHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        text: title1,
                        subtitle: subtitle
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Carousel__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        isSlideEffect: true,
                        children: featureImages.map(({ url , id , title  })=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-full flex justify-center items-center transition-opacity duration-250`",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    src: url,
                                    width: "945",
                                    height: "477",
                                    objectFit: "contain",
                                    alt: title
                                })
                            }, id);
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturesSlider);


/***/ }),

/***/ 690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ FooterNav)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "@fortawesome/react-fontawesome"
const react_fontawesome_namespaceObject = require("@fortawesome/react-fontawesome");
;// CONCATENATED MODULE: external "@fortawesome/free-brands-svg-icons"
const free_brands_svg_icons_namespaceObject = require("@fortawesome/free-brands-svg-icons");
;// CONCATENATED MODULE: ./components/FooterNav.tsx



const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-secondarybg pt-14 pb-32",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container mx-auto text-primary",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-center mb-16",
                    children: "Contact Us"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "xl:flex",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "grow mb-6 xl:mb-0",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ol", {
                                className: "grid grid-cols-3 gap-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-14 h-14 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mx-auto lg:mr-9",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                                    icon: free_brands_svg_icons_namespaceObject.faTwitter,
                                                    className: "fa-2xl relative top-1/2 -translate-y-1/2"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                className: "lg:hidden"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                children: "Twitter"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-14 h-14 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mx-auto lg:mr-9",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                                    icon: free_brands_svg_icons_namespaceObject.faFacebookF,
                                                    className: "fa-2xl relative top-1/2 -translate-y-1/2"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                className: "lg:hidden"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                className: "inline-block",
                                                children: "Facebook"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-14 h-14 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mx-auto lg:mr-9",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                                    icon: free_brands_svg_icons_namespaceObject.faYoutube,
                                                    className: "fa-2xl relative top-1/2 -translate-y-1/2"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                className: "lg:hidden"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                children: "Youtube"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-14 h-14 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mx-auto lg:mr-9",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                                    icon: free_brands_svg_icons_namespaceObject.faInstagram,
                                                    className: "fa-2xl relative top-1/2 -translate-y-1/2"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                className: "lg:hidden"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                children: "Instagram"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-14 h-14 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mx-auto lg:mr-9",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                                    icon: free_brands_svg_icons_namespaceObject.faDiscord,
                                                    className: "fa-2xl relative top-1/2 -translate-y-1/2"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                className: "lg:hidden"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                children: "Discord"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-14 h-14 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mx-auto lg:mr-9",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                                    icon: free_brands_svg_icons_namespaceObject.faSteam,
                                                    className: "fa-2xl relative top-1/2 -translate-y-1/2"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("br", {
                                                className: "lg:hidden"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                children: "Steam"
                                            })
                                        ]
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "uppercase self-center xl:w-4/12 xl:text-right",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    htmlFor: "",
                                    className: "mb-5 block",
                                    children: "Newsletter"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "email",
                                    placeholder: "input your email",
                                    className: "w-full"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const FooterNav = (Footer);


/***/ }),

/***/ 164:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const FuturisticEdge = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: " absolute inline-block h-full w-6 inset-y-0 left-0 before:content-[''] before:border-t-4 before:border-l-4 before:border-primary before:absolute before:w-full before:h-6 before:top-0 before:inset-x-0 after:content-[''] after:border-b-4 after:border-l-4 after:border-primary after:absolute after:w-full after:h-6 after:bottom-0 after:inset-x-0"
            }),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: " absolute inline-block h-full w-6 inset-y-0 right-0 before:content-[''] before:border-t-4 before:border-r-4 before:border-primary before:absolute before:w-full before:h-6 before:top-0 before:inset-x-0 after:content-[''] after:border-b-4 after:border-r-4 after:border-primary after:absolute after:w-full after:h-6 after:bottom-0 after:inset-x-0"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FuturisticEdge);


/***/ }),

/***/ 68:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_useOnScrollEffect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony import */ var _OneScreenContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(291);
/* harmony import */ var _AnimatedHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(748);






const Gallery = ({ images , title: title1 = "Gallery"  })=>{
    const imagesContainer = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const { 0: animating , 1: setAnimating  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    (0,_utils_useOnScrollEffect__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(imagesContainer, ()=>setAnimating(true)
    );
    const calculateDelayClass = (index)=>{
        if (index < 3) {
            return "delay-[166ms]";
        } else if (index < 6) {
            return "delay-[333ms]";
        } else {
            return "delay-[500ms]";
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OneScreenContainer__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container mx-auto h-full w-full flex items-center",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                id: "gallery",
                className: "px-5 lg:px-64 w-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AnimatedHeader__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        text: title1
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: imagesContainer,
                        className: "grid grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-9",
                        children: images.map(({ url , title , id  }, index)=>index < 9 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "",
                                "aria-label": "show",
                                className: `transition-all duration-[333ms] ${calculateDelayClass(index)} ${animating ? "" : "translate-y-3.5 opacity-0"}`,
                                onClick: (event)=>event.preventDefault()
                                ,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                    src: url,
                                    width: 358,
                                    height: 220,
                                    alt: title
                                })
                            }, id) : null
                        )
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);


/***/ }),

/***/ 206:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const HeaderNav = ()=>{
    const { 0: isExpandedMobile , 1: setIsExpanded  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    function toggleExpanded() {
        setIsExpanded((isExpanded)=>!isExpanded
        );
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
        className: "fixed mt-[2.5%] lg:mt-0 mx-auto w-screen max-w-[95%] lg:max-w-none inset-x-0 top-0 lg:font-bold z-10 lg:bg-secondary",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                "aria-label": "Menu",
                className: `
          lg:hidden
          absolute
          top-0
          left-0
          w-3/12
          p-7
          bg-secondary
          max-w-[100px]
        `,
                onClick: toggleExpanded,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: `
            block
            relative
            w-full
            py-3
            before:content-['']
            before:absolute
            before:block
            before:bg-primary
            before:w-full
            before:h-1
            after:content-['']
            after:absolute
            after:block
            after:bg-primary
            after:w-full
            after:h-1
            ${isExpandedMobile ? "before:top-1/2 before:-translate-y-1/2 before:rotate-45" : "before:top-0"}
            ${isExpandedMobile ? "after:top-1/2 after:-translate-y-1/2 after:-rotate-45" : "after:bottom-0"}
          `,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: `
              block
              bg-primary
              h-1
              w-full
              ${isExpandedMobile ? "invisible" : ""}
            `
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `bg-secondary py-24 lg:py-0 container mx-auto uppercase text-center lg:text-left ${isExpandedMobile ? "" : "hidden"} lg:block`,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "lg:inline-block border-primary border-t-2 lg:border-none",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#story",
                                    className: "inline-block leading-none py-5 px-8 mr-2.5 border border-transparent active:border-primary hover:text-primary hover:border-primary",
                                    children: "Story"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "lg:inline-block border-primary border-t-2 lg:border-none",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#features",
                                    className: "inline-block leading-none py-5 px-8 mr-2.5 border border-transparent active:border-primary hover:text-primary hover:border-primary",
                                    children: "Feature"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "lg:inline-block border-primary border-t-2 lg:border-none",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#characters",
                                    className: "inline-block leading-none py-5 px-8 mr-2.5 border border-transparent active:border-primary hover:text-primary hover:border-primary",
                                    children: "Characters"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "lg:inline-block border-primary border-t-2 lg:border-none",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#gallery",
                                    className: "inline-block leading-none py-5 px-8 mr-2.5 border border-transparent active:border-primary hover:text-primary hover:border-primary",
                                    children: "Gallery"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                className: "lg:inline-block border-primary border-t-2 border-b-2 lg:border-none",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "#news",
                                    className: "inline-block leading-none py-5 px-8 mr-2.5 border border-transparent active:border-primary hover:text-primary hover:border-primary",
                                    children: "News"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderNav);


/***/ }),

/***/ 400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Landing)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./utils/getElementRef.ts
var getElementRef = __webpack_require__(752);
;// CONCATENATED MODULE: ./utils/randomIntFromInterval.ts
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

;// CONCATENATED MODULE: ./helpers/createCanvasLaserElement.ts

const createPrimarycolor = (opacity)=>`rgba(3, 199, 255, ${opacity})`
;
const createSecondarycolor = (opacity)=>`rgba(33, 120, 163, ${opacity})`
;
const createTertiarycolor = (opacity)=>`rgba(11, 74, 106, ${opacity})`
;
const generateColors = (opacity)=>[
        createTertiarycolor(opacity),
        createSecondarycolor(opacity),
        createPrimarycolor(opacity), 
    ]
;
const createLaser = (canvasContext, xPosition)=>{
    return {
        finished: false,
        xPosition,
        beginTipPosition: randomIntFromInterval(-1000, -400),
        height: randomIntFromInterval(250, 400),
        width: randomIntFromInterval(1, 3),
        level: randomIntFromInterval(1, 3),
        opacity: 1,
        get color () {
            return generateColors(this.opacity)[this.level - 1];
        },
        get endTipPosition () {
            return this.beginTipPosition + this.height;
        },
        draw () {
            // ending area is aout 75 to 99 % of canvas height
            const laserEndingArea = randomIntFromInterval(75, 99) / 100 * canvasContext.canvas.height;
            const isEndTipEnteringEndingArea = this.endTipPosition >= laserEndingArea;
            if (isEndTipEnteringEndingArea) {
                // reduce opacity on entering ending area
                this.opacity -= 0.25;
                this.finished = this.opacity <= 0;
            }
            canvasContext.strokeStyle = this.color;
            canvasContext.lineWidth = this.width;
            canvasContext.shadowBlur = 1; //shadow blur always 5
            canvasContext.shadowColor = this.color;
            canvasContext.beginPath();
            canvasContext.moveTo(this.xPosition, this.beginTipPosition);
            canvasContext.lineTo(this.xPosition, this.endTipPosition);
            canvasContext.stroke();
            return this;
        },
        animate (distanceMovement) {
            // make movement value is calculated based on level
            this.beginTipPosition += distanceMovement * this.level;
            return this.draw();
        }
    };
};
/* harmony default export */ const createCanvasLaserElement = (createLaser);

;// CONCATENATED MODULE: ./components/LaserRainBackdrop.tsx





const LaserRainBackdrop = ({ laserDistance =30 , movementSpeed =5  })=>{
    const canvasRef = (0,external_react_.useRef)(null);
    (0,external_react_.useLayoutEffect)(()=>{
        const canvasElement = (0,getElementRef/* default */.Z)(canvasRef);
        canvasElement.setAttribute("width", `${window.innerWidth}`);
        canvasElement.setAttribute("height", `${window.innerHeight}`);
        // initializing canvas
        const canvasContext = canvasElement.getContext("2d");
        let lasers = [];
        function generateLasers(emiterConstant) {
            if (!!canvasContext) {
                let laserGenerationAreaBegin = 0;
                do {
                    const laserGenerationAreaEnd = laserDistance * emiterConstant + laserGenerationAreaBegin;
                    const laserGenerationPoint = randomIntFromInterval(laserGenerationAreaBegin, laserGenerationAreaEnd);
                    lasers.push(createCanvasLaserElement(canvasContext, laserGenerationPoint));
                    laserGenerationAreaBegin = laserGenerationAreaEnd;
                }while (laserGenerationAreaBegin < canvasElement.width);
            }
        }
        let isPaused = false;
        let distanceConstant = 1;
        let observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.intersectionRatio < 0.4) {
                    isPaused = true;
                } else {
                    isPaused = false;
                    distanceConstant = Math.pow(1 / entry.intersectionRatio, 8);
                }
            });
        }, {
            threshold: [
                1,
                0.95,
                0.9,
                0.85,
                0.8,
                0.75,
                0.7,
                0.65,
                0.6,
                0.55,
                0.5,
                0.45,
                0.4,
                0.35,
                0.3,
                0.25,
                0.25,
                0.2,
                0.15,
                0.1,
                0.05,
                0, 
            ]
        });
        observer.observe(canvasElement);
        //start animation
        let animation;
        let distanceMovement = 0;
        const animate = ()=>{
            if (!isPaused) {
                if (!!canvasContext) {
                    // clear canvas before repainting
                    canvasContext.clearRect(0, 0, canvasElement.width, canvasElement.height);
                }
                distanceMovement += movementSpeed;
                const thresholdToGenerateLasers = 250;
                if (distanceMovement > thresholdToGenerateLasers) {
                    generateLasers(distanceConstant);
                    distanceMovement = 0;
                }
                lasers = lasers.filter((laser)=>{
                    return !laser.animate(movementSpeed).finished;
                });
            } else {
                cancelAnimationFrame(animation);
            }
            animation = requestAnimationFrame(animate);
        };
        animate();
    });
    return /*#__PURE__*/ jsx_runtime_.jsx("canvas", {
        ref: canvasRef,
        id: "laser-rain"
    });
};
/* harmony default export */ const components_LaserRainBackdrop = (LaserRainBackdrop);

;// CONCATENATED MODULE: ./components/Landing.tsx



const Landing = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-44",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_LaserRainBackdrop, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mb-60",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/assets/fractured-core-logo.png",
                            width: 950,
                            height: 116,
                            alt: "Fractured core logo"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        role: "button",
                        children: "Play Now"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Landing = (Landing);


/***/ }),

/***/ 416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_News)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./utils/getElementRef.ts
var getElementRef = __webpack_require__(752);
// EXTERNAL MODULE: ./utils/elementSetter.ts
var elementSetter = __webpack_require__(405);
// EXTERNAL MODULE: ./components/FuturisticEdge.tsx
var FuturisticEdge = __webpack_require__(164);
// EXTERNAL MODULE: ./utils/useOnScrollEffect.ts + 1 modules
var useOnScrollEffect = __webpack_require__(39);
// EXTERNAL MODULE: ./utils/useDidUpdate.ts
var useDidUpdate = __webpack_require__(596);
;// CONCATENATED MODULE: ./components/Modal.tsx





const Modal = ({ title , date , content , exit  })=>{
    const containerRef = (0,external_react_.useRef)(null);
    const exitButtonRef = (0,external_react_.useRef)(null);
    const contentRef = (0,external_react_.useRef)(null);
    (0,external_react_.useLayoutEffect)(()=>{
        animate();
    }, []);
    function animate(isEntrance = true, onTransitionEnd) {
        const container = new elementSetter/* default */.Z((0,getElementRef/* default */.Z)(containerRef));
        container.element.focus();
        const contentElement = new elementSetter/* default */.Z((0,getElementRef/* default */.Z)(contentRef));
        if (isEntrance) {
            container.removeClass("scale-0");
            contentElement.removeClass("opacity-0");
            document.body.classList.add("overflow-y-hidden");
        } else {
            container.addClass([
                "scale-0",
                "delay-[167ms]"
            ]);
            contentElement.removeClass("delay-[167ms]");
            contentElement.addClass("opacity-0");
            if (!!onTransitionEnd) {
                contentElement.element.addEventListener("transitionend", onTransitionEnd);
            }
            document.body.classList.remove("overflow-y-hidden");
        }
    }
    function onBackdropClick(event) {
        if (event.target === containerRef.current || event.target === exitButtonRef.current) {
            animate(false, exit);
        }
    }
    function onKeyEscapePressed(event) {
        if (event.key === "Escape") {
            animate(false, exit);
        }
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: containerRef,
        className: "scale-0 transition-transform duration-[167ms] fixed inset-0 backdrop-blur flex justify-center items-center z-20",
        tabIndex: 0,
        onClick: onBackdropClick,
        onKeyUp: onKeyEscapePressed,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "absolute w-10/12 h-4/5 px-9 py-8 ",
            children: /*#__PURE__*/ jsx_runtime_.jsx(FuturisticEdge/* default */.Z, {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "h-full relative",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            ref: exitButtonRef,
                            type: "button",
                            "aria-label": "Close article",
                            className: `
                absolute
                top-0
                right-0
                w-3/12
                p-7
                max-w-[100px]
              `,
                            onClick: onBackdropClick,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: `
                  pointer-events-none
                  block
                  relative
                  w-full
                  py-3
                  before:content-['']
                  before:absolute
                  before:block
                  before:bg-primary
                  before:w-full
                  before:h-1
                  before:top-1/2 before:-translate-y-1/2 before:rotate-45
                  after:content-['']
                  after:absolute
                  after:block
                  after:bg-primary
                  after:w-full
                  after:h-1
                  after:top-1/2 after:-translate-y-1/2 after:-rotate-45
                `
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "h-full bg-tertiary px-44 py-32 overflow-auto overscroll-contain",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                ref: contentRef,
                                className: "opacity-0 transition-opacity duration-[167ms] delay-[167ms]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-primary font-normal",
                                        children: title
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                        className: "text-primary font-normal text-right",
                                        children: date
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        dangerouslySetInnerHTML: {
                                            __html: content
                                        }
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const components_Modal = (Modal);

;// CONCATENATED MODULE: ./components/News.tsx








const News = ({ articles , onLoadMore , loading , error  })=>{
    const titleRevealerRef = (0,external_react_.useRef)(null);
    const titleRef = (0,external_react_.useRef)(null);
    const newsBottomLineRefs = (0,external_react_.useRef)([]);
    const newsTitleRefs = (0,external_react_.useRef)([]);
    const newsDateRefs = (0,external_react_.useRef)([]);
    const newsContentRefs = (0,external_react_.useRef)([]);
    const loadMoreButtonRef = (0,external_react_.useRef)(null);
    newsBottomLineRefs.current = articles.map((_article, i)=>newsBottomLineRefs.current[i] ?? /*#__PURE__*/ (0,external_react_.createRef)()
    );
    newsTitleRefs.current = articles.map((_article, i)=>newsTitleRefs.current[i] ?? /*#__PURE__*/ (0,external_react_.createRef)()
    );
    newsDateRefs.current = articles.map((_article, i)=>newsDateRefs.current[i] ?? /*#__PURE__*/ (0,external_react_.createRef)()
    );
    newsContentRefs.current = articles.map((_article, i)=>newsContentRefs.current[i] ?? /*#__PURE__*/ (0,external_react_.createRef)()
    );
    const { 0: activeNewsItem , 1: setActiveNewsItem  } = (0,external_react_.useState)(-1);
    const lastAnimatedArticleIndex = (0,external_react_.useRef)(0);
    const animateEachNews = (0,external_react_.useCallback)((index)=>{
        const newsBottomLine = new elementSetter/* default */.Z((0,getElementRef/* default */.Z)(newsBottomLineRefs.current[index]));
        newsBottomLine.removeClass("scale-x-0");
        const newsTitle = new elementSetter/* default */.Z((0,getElementRef/* default */.Z)(newsTitleRefs.current[index]));
        newsTitle.removeClass("opacity-0");
        const newsDate = new elementSetter/* default */.Z((0,getElementRef/* default */.Z)(newsDateRefs.current[index]));
        newsDate.removeClass("opacity-0");
        const newsContent = new elementSetter/* default */.Z((0,getElementRef/* default */.Z)(newsContentRefs.current[index]));
        newsContent.removeClass("scale-0");
        const newsText = new elementSetter/* default */.Z(newsContent.element.childNodes[1]);
        newsText.element.addEventListener("transitionend", ()=>{
            if (index + 1 < articles.length) {
                animateEachNews(index + 1);
            } else {
                const loadMoreButton = new elementSetter/* default */.Z((0,getElementRef/* default */.Z)(loadMoreButtonRef));
                loadMoreButton.removeClass("opacity-0");
            }
        });
        newsText.removeClass("opacity-0");
        lastAnimatedArticleIndex.current = index + 1;
    }, [
        articles
    ]);
    function animate() {
        const titleElement = (0,getElementRef/* default */.Z)(titleRef);
        const titleElementRight = titleElement.getBoundingClientRect().right;
        const title = new elementSetter/* default */.Z(titleElement);
        const TitleRevealer = new elementSetter/* default */.Z((0,getElementRef/* default */.Z)(titleRevealerRef));
        TitleRevealer.addStyle({
            width: `${titleElementRight}px`
        }).removeClass("scale-x-0");
        TitleRevealer.element.addEventListener("transitionend", ()=>{
            TitleRevealer.addClass([
                "right-[calc(100%-7px)]",
                "transition-right",
                "duration-[250ms]", 
            ]).removeClass("right-0");
            title.addClass("text-primary").removeClass("text-transparent");
        });
        animateEachNews(0);
    }
    function onClickNewsItem(index) {
        setActiveNewsItem(index);
    }
    (0,useOnScrollEffect/* default */.Z)(titleRef, animate);
    const onArticlesAdded = (0,external_react_.useCallback)(()=>{
        animateEachNews(lastAnimatedArticleIndex.current);
    }, [
        animateEachNews
    ]);
    (0,useDidUpdate/* default */.Z)(onArticlesAdded);
    function formatDate(datestring) {
        const dateObject = new Date(datestring);
        return `${dateObject.getMonth()}//${dateObject.getDate()}//${dateObject.getFullYear()}`;
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "news",
        className: "relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-72",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-center mb-20",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                    ref: titleRef,
                    className: "inline-block mx-auto leading-[0.7] lg:leading-[0.73] relative text-transparent",
                    children: [
                        "News",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            ref: titleRevealerRef,
                            className: "h-full lg:h-[96%] lg:mt-px bg-primary absolute right-0 top-1/2 -translate-y-1/2 scale-x-0 origin-left transition-transform duration-[333ms]"
                        })
                    ]
                })
            }),
            articles.map(({ title , date , content , id  }, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                    className: "grid grid-cols-[1fr_2fr] md:grid-cols-[1fr_40%_1fr] lg:grid-cols-[1fr_20%_1fr] gap-4 lg:gap-16 mb-36",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "text-right text-primary",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    ref: newsTitleRefs.current[index],
                                    className: "opacity-0 transition-opacity duration-[250ms] delay-200 mb-0 font-normal",
                                    children: title
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                                    ref: newsBottomLineRefs.current[index],
                                    className: "my-4 border-primary scale-x-0 origin-left transition-transform duration-[417ms]"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    ref: newsDateRefs.current[index],
                                    className: "opacity-0 transition-opacity duration-[250ms] delay-200 font-normal",
                                    children: formatDate(date)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            ref: newsContentRefs.current[index],
                            className: "relative bg-tertiary p-10 transition-transform scale-0 duration-[167ms]",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "absolute -z-[1] w-[calc(100%+4.2rem)] h-[calc(100%+4.2rem)] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(FuturisticEdge/* default */.Z, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "opacity-0 transition-opacity delay-[250ms]",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "line-clamp-[16] mb-7",
                                            dangerouslySetInnerHTML: {
                                                __html: content
                                            }
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "#",
                                            className: "uppercase text-primary italic text-right float-right",
                                            onClick: (event)=>{
                                                event.preventDefault();
                                                onClickNewsItem(index);
                                            },
                                            children: "Read More//"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }, id)
            ),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    ref: loadMoreButtonRef,
                    className: "text-primary font-normal italic opacity-0 transition-opacity duration-[167ms]",
                    onClick: onLoadMore,
                    disabled: loading || !!error,
                    children: error || "Load more"
                })
            }),
            activeNewsItem >= 0 ? /*#__PURE__*/ jsx_runtime_.jsx(components_Modal, {
                ...articles[activeNewsItem],
                exit: ()=>setActiveNewsItem(-1)
            }) : null
        ]
    });
};
/* harmony default export */ const components_News = (News);


/***/ }),

/***/ 291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const OneScreenContainer = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-screen h-screen min-h-screen left-1/2 right-1/2 -mx-[50vw] relative mb-12 lg:mb-32",
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OneScreenContainer);


/***/ }),

/***/ 991:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _OneScreenContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(291);
/* harmony import */ var _FuturisticEdge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(164);
/* harmony import */ var _utils_useOnScrollEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39);






const Story = ({ intro , title ="Story" , background , children  })=>{
    const containerIntroRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const textIntroRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const imageParentRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const articleRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    function animate() {
        if (containerIntroRef.current != null && textIntroRef.current != null && imageParentRef.current != null && articleRef.current != null) {
            containerIntroRef.current.classList.remove("invisible");
            textIntroRef.current.classList.add("max-w-screen-2xl");
            textIntroRef.current.classList.remove("max-w-xs");
            textIntroRef.current.classList.remove("invisible");
            const imageElement = imageParentRef.current.querySelector("img.clip-path-right");
            if (imageElement != null) {
                imageElement.style.clipPath = "inset(0 0 0 0)";
            }
            articleRef.current.classList.remove("opacity-0");
        }
    }
    (0,_utils_useOnScrollEffect__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(containerIntroRef, animate);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-12 lg:mb-36 text-center uppercase",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    ref: containerIntroRef,
                    className: "inline-block px-12 py-9 relative invisible",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FuturisticEdge__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            ref: textIntroRef,
                            className: "tracking-[0.2em] mb-0 lg:whitespace-nowrap overflow-hidden transition-maxwidth max-w-xs invisible",
                            children: intro
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_OneScreenContainer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
                    id: "story",
                    className: "relative w-full h-full",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            ref: imageParentRef,
                            className: "absolute w-full h-full inset-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                                src: background,
                                alt: "",
                                width: "1920",
                                height: "963",
                                objectFit: "cover",
                                layout: "fill",
                                className: "clip-path-right w-full h-full"
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                            ref: articleRef,
                            className: "mx-auto absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full max-w-sm md:max-w-md lg:max-w-lg transition-opacity opacity-0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-center",
                                    children: title
                                }),
                                children
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Story);


/***/ }),

/***/ 723:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ FpsCtrl)
/* harmony export */ });
class FpsCtrl {
    constructor(fps, callback){
        this.fps = fps;
        this.delay = 1000 / this.fps; // calc. time per frame
        this.time = 0; // start time
        this.frame = -1; // frame count
        this.tref = 0; // rAF time reference
        this.callback = callback;
        this.loop(performance.now());
    }
    loop(timestamp) {
        if (this.time === 0) {
            this.time = timestamp;
        } // init start time}
        const seg = Math.floor((timestamp - this.time) / this.delay); // calc frame no.
        if (seg > this.frame) {
            // moved to next frame?
            this.frame = seg; // update
            this.callback({
                // callback function
                time: timestamp,
                frame: this.frame
            });
        }
        this.tref = requestAnimationFrame(this.loop.bind(this));
    }
    stopAnimation() {
        cancelAnimationFrame(this.tref);
    }
};


/***/ }),

/***/ 339:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
async function fetchNews({ page  }) {
    try {
        const newsResponse = await fetch(`https://fc.engraminteractive.com/wp-json/wp/v2/posts?page=${page}&per_page=2`);
        if (!newsResponse.ok) {
            if (newsResponse.status === 400) {
                throw new Error("There is no more news to show");
            } else {
                throw new Error("Fail to load news, please try again later");
            }
        }
        const newsJSON = await newsResponse.json();
        return newsJSON.map(({ title , date , content , id  })=>({
                title: typeof title === "string" ? "" : title.rendered,
                date,
                content: typeof content === "string" ? "" : content.rendered,
                id
            })
        );
    } catch (error) {
        throw new Error(error.message);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchNews);


/***/ }),

/***/ 644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useFetchNews),
/* harmony export */   "q": () => (/* binding */ INITIAL_PAGE)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fetchNews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(339);


const unionBy = __webpack_require__(830);
const INITIAL_PAGE = 1;
function useFetchNews(initialDataArticles) {
    const { 0: newsPage , 1: setNewsPage  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(INITIAL_PAGE);
    const { 0: loading , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    const { 0: error1 , 1: setError  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
    const { 0: articles1 , 1: setArticles  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialDataArticles);
    const fetchArticles = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(async ()=>{
        setLoading(true);
        try {
            const articlesFetched = await (0,_fetchNews__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
                page: newsPage
            });
            // union the articles by id
            setArticles((articles)=>unionBy(articles, articlesFetched, "id")
            );
        } catch (error) {
            setError(error.message);
        } finally{
            setLoading(false);
        }
    }, [
        newsPage
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        fetchArticles();
    }, [
        fetchArticles
    ]);
    // useDidUpdate(fetchArticles);
    const loadMore = ()=>setNewsPage(newsPage + 1)
    ;
    return [
        articles1,
        loadMore,
        loading,
        error1
    ];
};


/***/ }),

/***/ 186:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(905);
/* harmony import */ var _helpers_useFetchNews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(644);
/* harmony import */ var _helpers_fetchNews__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(339);
/* harmony import */ var _components_HeaderNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(206);
/* harmony import */ var _components_Landing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(400);
/* harmony import */ var _components_Story__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(991);
/* harmony import */ var _components_FeaturesSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(444);
/* harmony import */ var _components_CharactersSlider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(325);
/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68);
/* harmony import */ var _components_News__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(416);
/* harmony import */ var _components_FooterNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(690);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_1__]);
html_react_parser__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












const Home = ({ gallery , story , features , characters , news  })=>{
    const [articles, onLoadMore, loading, error] = (0,_helpers_useFetchNews__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(news);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: "container mx-auto",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HeaderNav__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Landing__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Story__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                ...story,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center",
                    children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_1__["default"])(story.content)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FeaturesSlider__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                ...features
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CharactersSlider__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                ...characters
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Gallery__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                ...gallery
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_News__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                articles,
                onLoadMore,
                loading,
                error
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FooterNav__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);
const getStaticProps = async ()=>{
    const galleryResponse = await fetch("https://fc.engraminteractive.com/wp-json/wp/v2/pages/20");
    const gallery = await galleryResponse.json();
    const parseGallery = ()=>{
        const { title: { rendered  } , acf ,  } = gallery;
        const images = Object.keys(acf).map((key)=>{
            const { url , id , alt  } = acf[key];
            return {
                url,
                id,
                title: alt
            };
        });
        return {
            title: rendered,
            images
        };
    };
    const storyResponse = await fetch("https://fc.engraminteractive.com/wp-json/wp/v2/pages/16?_embed");
    const story = await storyResponse.json();
    const parseStory = ()=>{
        const { title , content , _embedded , acf: { story_introduction  } ,  } = story;
        const background = _embedded["wp:featuredmedia"] ? _embedded["wp:featuredmedia"]["0"].source_url : "";
        return {
            title: title.rendered,
            content: content.rendered,
            background,
            intro: story_introduction
        };
    };
    const featuresResponse = await fetch("https://fc.engraminteractive.com/wp-json/wp/v2/pages/49");
    const features = await featuresResponse.json();
    const parseFeatures = ()=>{
        const { title , acf: { subtitle , pictures  } ,  } = features;
        const pictureKeys = Object.keys(pictures).filter((key)=>!!pictures[key]
        );
        const featureImages = pictureKeys.map((key)=>{
            const { url , id , alt  } = pictures[key];
            return {
                url,
                id,
                title: alt
            };
        });
        return {
            title: title.rendered,
            subtitle,
            featureImages
        };
    };
    const charactersResponse = await fetch("https://fc.engraminteractive.com/wp-json/wp/v2/pages/22?_embed");
    const charactersJSON = await charactersResponse.json();
    const parseCharacters = ()=>{
        const { title: title1 , acf: { subtitle , ...characters } ,  } = charactersJSON;
        const charactersKeys = Object.keys(characters).filter((key)=>characters[key].show_this_characters
        );
        const charactersContent = charactersKeys.map((key)=>{
            const { title , description , image  } = characters[key];
            return {
                title,
                description,
                characterImageUrl: image,
                id: key
            };
        });
        return {
            title: title1.rendered,
            subtitle,
            charactersContent
        };
    };
    const news = await (0,_helpers_fetchNews__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z)({
        page: _helpers_useFetchNews__WEBPACK_IMPORTED_MODULE_2__/* .INITIAL_PAGE */ .q
    });
    return {
        props: {
            gallery: parseGallery(),
            story: parseStory(),
            features: parseFeatures(),
            characters: parseCharacters(),
            news
        },
        revalidate: 60
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class ElementSetter {
    constructor(element){
        this.element = element;
    }
    addStyle(styles) {
        Object.assign(this.element.style, styles);
        return this;
    }
    removeStyle(styleProperties) {
        if (typeof styleProperties === "string") {
            this.element.style.removeProperty(styleProperties);
        } else {
            styleProperties.map((styleProperty)=>{
                this.element.style.removeProperty(styleProperty);
            });
        }
        return this;
    }
    addClass(classNames) {
        if (typeof classNames === "string") {
            this.element.classList.add(classNames);
        } else {
            classNames.map((className)=>{
                this.element.classList.add(className);
            });
        }
        return this;
    }
    removeClass(classNames) {
        if (typeof classNames === "string") {
            this.element.classList.remove(classNames);
        } else {
            classNames.map((className)=>{
                this.element.classList.remove(className);
            });
        }
        return this;
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ElementSetter);


/***/ }),

/***/ 752:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ getElement)
/* harmony export */ });
function getElement(RefElement) {
    if (!!RefElement.current) {
        return RefElement.current;
    }
    throw new Error("Cannot find ELement " + RefElement);
};


/***/ }),

/***/ 596:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDidUpdate(callback) {
    const hasMountForStrictMode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    const hasMount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (hasMountForStrictMode.current) {
            if (hasMount.current) {
                callback();
            } else {
                hasMount.current = true;
            }
        }
        return ()=>{
            hasMountForStrictMode.current = true;
        };
    }, [
        callback
    ]);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useDidUpdate);


/***/ }),

/***/ 39:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ useOnScroll)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./utils/getElementRef.ts
var getElementRef = __webpack_require__(752);
;// CONCATENATED MODULE: ./utils/useOnRender.ts

function useOnRender(callback) {
    const initialRenderRef = (0,external_react_.useRef)(true);
    (0,external_react_.useEffect)(()=>{
        if (initialRenderRef.current) {
            callback();
            initialRenderRef.current = false;
        }
    }, [
        callback
    ]);
};

;// CONCATENATED MODULE: ./utils/useOnScrollEffect.ts



function useOnScroll(contentRef, callback) {
    const onScroll = (0,external_react_.useCallback)(()=>{
        const contentRefTop = (0,getElementRef/* default */.Z)(contentRef).getBoundingClientRect().top;
        if (contentRefTop > 0 && contentRefTop < 0.5 * window.innerHeight) {
            callback();
            window.removeEventListener("scroll", onScroll);
        }
    }, [
        callback,
        contentRef
    ]);
    useOnRender(()=>window.addEventListener("scroll", onScroll)
    );
};


/***/ }),

/***/ 830:
/***/ ((module) => {

module.exports = require("lodash/unionBy");

/***/ }),

/***/ 957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 905:
/***/ ((module) => {

module.exports = import("html-react-parser");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [686,675], () => (__webpack_exec__(186)));
module.exports = __webpack_exports__;

})();