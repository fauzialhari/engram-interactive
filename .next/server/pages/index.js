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
        const spriteAnimation = new _helpers_FpsCtrl__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z(12, ({ frame  })=>{
            if (headerRef.current != null && bottomLineRef.current != null && cursorRef.current != null && containerRef.current != null && subtitleSpriteRef.current != null && subtitleRef.current != null) {
                const leftSpace = containerRef.current.getBoundingClientRect().left;
                const containerWidth = containerRef.current.getBoundingClientRect().width;
                switch(frame){
                    case 1:
                        bottomLineRef.current.style.transform = "scaleX(3.9%)";
                        cursorRef.current.style.visibility = "visible";
                        containerRef.current.style.width = `${containerWidth}px`;
                        subtitleSpriteRef.current.style.transform = "translateY(6rem) scaleY(0.5)";
                        subtitleSpriteRef.current.style.transformOrigin = "bottom";
                        subtitleSpriteRef.current.classList.remove("invisible");
                        break;
                    case 2:
                        bottomLineRef.current.style.transform = "scaleX(12.74%)";
                        const cursorWidth = cursorRef.current.getBoundingClientRect().width;
                        cursorRef.current.style.transform = `scaleX(${leftSpace / cursorWidth})`;
                        subtitleSpriteRef.current.style.transform = "translateY(6rem) scaleY(1.5)";
                        break;
                    case 3:
                        bottomLineRef.current.style.transform = "scaleX(25.61%)";
                        cursorRef.current.style.removeProperty("visibility");
                        subtitleSpriteRef.current.style.transform = "translateY(3rem) scaleY(3)";
                        subtitleSpriteRef.current.style.transformOrigin = "top";
                        animateTextTyping();
                        break;
                    case 4:
                        bottomLineRef.current.style.transform = "scaleX(36.65%)";
                        break;
                    case 5:
                        bottomLineRef.current.style.transform = "scaleX(57.16%)";
                        subtitleSpriteRef.current.style.transform = "translateY(100%) scaleY(1.25)";
                        subtitleRef.current.style.transform = "translateX(85.8%)";
                        subtitleRef.current.style.opacity = "25%";
                        break;
                    case 6:
                        bottomLineRef.current.style.transform = "scaleX(69.78%)";
                        subtitleSpriteRef.current.style.removeProperty("transform");
                        subtitleRef.current.style.transform = "translateX(71.5%)";
                        subtitleRef.current.style.opacity = "50%";
                        break;
                    case 7:
                        bottomLineRef.current.style.transform = "scaleX(87.01%)";
                        subtitleRef.current.style.transform = "translateX(57.2%)";
                        subtitleRef.current.style.opacity = "75%";
                        break;
                    case 8:
                        bottomLineRef.current.style.transform = "scaleX(95.75%)";
                        subtitleRef.current.style.transform = "translateX(42.9%)";
                        subtitleRef.current.style.opacity = "100%";
                        break;
                    case 9:
                        bottomLineRef.current.style.transform = "scaleX(98.42%)";
                        subtitleRef.current.style.transform = "translateX(28.6%)";
                        break;
                    case 10:
                        bottomLineRef.current.style.transform = "scaleX(100%)";
                        subtitleRef.current.style.transform = "translateX(14.3%)";
                        break;
                    case 11:
                        subtitleRef.current.style.transform = "translateX(0)";
                        break;
                    default:
                        break;
                }
            }
        });
        setTimeout(()=>{
            spriteAnimation.stopAnimation();
        }, 1000);
    }
    (0,_utils_useOnScrollEffect__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(containerRef, animate);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        if (containerRef.current != null && spritesContainerRef.current != null && bottomLineRef.current != null) {
            const { right , left  } = containerRef.current.getBoundingClientRect();
            const bottomLineWidth = isLeftPositioned ? right : document.documentElement.clientWidth - left;
            spritesContainerRef.current.style.width = `${bottomLineWidth}px `;
        }
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `mb-24 ${isLeftPositioned ? "" : "text-right"}`,
        onClick: animate,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                ref: containerRef,
                className: "relative inline-block mb-5",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                        ref: headerRef,
                        className: `relative invisible inline-block leading-[0.7] ${isLeftPositioned ? "mr-28" : "ml-28"} mb-5`,
                        children: [
                            text,
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: `absolute w-6 h-[60px] mx-2.5 bg-primary top-1/2 -translate-y-1/2 ${isLeftPositioned ? "left-full" : "right-full"}`,
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
                                className: `w-6 h-[58px] bg-primary invisible ${isLeftPositioned ? "origin-right" : "origin-left"}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                ref: bottomLineRef,
                                className: `border-b-2 border-primary w-full scale-x-0 absolute ${isLeftPositioned ? "origin-left" : "origin-right"} bottom-0`
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
                        className: `inline-block invisible w-[5px] h-[1em] bg-primary align-middle ${isLeftPositioned ? "mr-36" : "ml-36"}`,
                        children: "\xa0"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "inline-flex items-center overflow-hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            ref: subtitleRef,
                            className: "uppercase inline-block leading-none opacity-0 translate-x-full",
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

/***/ 682:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Carousel)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./helpers/FpsCtrl.ts
var FpsCtrl = __webpack_require__(723);
// EXTERNAL MODULE: ./utils/getElementRef.ts
var getElementRef = __webpack_require__(752);
// EXTERNAL MODULE: ./utils/elementSetter.ts
var elementSetter = __webpack_require__(405);
;// CONCATENATED MODULE: ./utils/useDidUpdate.ts

function useDidUpdate(callback) {
    const hasMount = (0,external_react_.useRef)(false);
    (0,external_react_.useEffect)(()=>{
        if (hasMount.current) {
            callback();
        } else {
            hasMount.current = true;
        }
    }, [
        callback
    ]);
}
/* harmony default export */ const utils_useDidUpdate = (useDidUpdate);

// EXTERNAL MODULE: ./utils/useOnScrollEffect.ts + 1 modules
var useOnScrollEffect = __webpack_require__(39);
;// CONCATENATED MODULE: ./components/Carousel.tsx







const Carousel = ({ children , animateChildren  })=>{
    const contentRef = (0,external_react_.useRef)(null);
    const navigatorRef = (0,external_react_.useRef)(null);
    const navigationRef = (0,external_react_.useRef)(null);
    const { 0: activeSlide , 1: setActiveSlide  } = (0,external_react_.useState)(0);
    const animate = (0,external_react_.useCallback)(()=>{
        const carouselAnimation = new FpsCtrl/* default */.Z(12, ({ frame  })=>{
            const contentElement = new elementSetter/* default */.Z((0,getElementRef/* default */.Z)(contentRef));
            const navigatorElement = new elementSetter/* default */.Z((0,getElementRef/* default */.Z)(navigatorRef));
            const navigationElement = new elementSetter/* default */.Z((0,getElementRef/* default */.Z)(navigationRef));
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
    utils_useDidUpdate(()=>{
        if (!!animateChildren) {
            animateChildren(activeSlide);
        }
    });
    (0,useOnScrollEffect/* default */.Z)(contentRef, animate);
    function onClickNavigator(direction) {
        if (direction === "prev" && activeSlide !== 0) {
            setActiveSlide(activeSlide - 1);
        } else if (activeSlide !== external_react_.Children.toArray(children).length - 1) {
            setActiveSlide(activeSlide + 1);
        }
    }
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "mb-28",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative pb-[55.3%]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        ref: navigatorRef,
                        className: "opacity-0 absolute inset-x-0 inset-y-1/2 -translate-y-1/2 w-full h-1/4 flex justify-between items-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                title: "Previous",
                                className: " p-0 h-4 w-4 border-primary w-16 h-16 border-primary border-l-[5px] border-b-[5px] rotate-45 -translate-x-full relative before:content-[''] before:absolute before:top-2.5 before:right-2.5 before:block before:w-full before:h-full before:box-content before:border-l-[5px] before:border-b-[5px] before:border-secondary disabled:opacity-25",
                                disabled: activeSlide === 0,
                                onClick: ()=>onClickNavigator("prev")
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                type: "button",
                                title: "Next",
                                className: " p-0 h-4 w-4 border-primary w-16 h-16 border-primary border-r-[5px] border-t-[5px] rotate-45 translate-x-full relative before:content-[''] before:absolute before:bottom-2.5 before:left-2.5 before:block before:w-full before:h-full before:box-content before:border-r-[5px] before:border-t-[5px] before:border-secondary disabled:opacity-25",
                                disabled: activeSlide === external_react_.Children.toArray(children).length - 1,
                                onClick: ()=>onClickNavigator("next")
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        ref: contentRef,
                        className: "absolute bg-secondarybg inset-0 border border-primary invisible",
                        children: external_react_.Children.toArray(children).map((Child, index)=>activeSlide === index ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "h-full px-11 py-14 mx-auto",
                                children: Child
                            }, index) : null
                        )
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                ref: navigationRef,
                className: "text-right opacity-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ol", {
                    className: "inline mr-9",
                    children: external_react_.Children.toArray(children).map((child, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                            className: `list-none inline-block mr-2 h-1.5 w-12 ${index === activeSlide ? "bg-primary" : "bg-tertiary"}`
                        }, index)
                    )
                })
            })
        ]
    });
};
/* harmony default export */ const components_Carousel = (Carousel);


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
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(682);
/* harmony import */ var _AnimatedHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(748);
/* harmony import */ var _FuturisticEdge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(164);






const CharactersSlider = ({ charactersContent  })=>{
    const { 0: activeSlide , 1: setActiveSlide  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
    const animate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((CarouselActiveSlide)=>{
        setActiveSlide(CarouselActiveSlide);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        id: "characters",
        className: "mx-auto relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-44 bg-secondarybg pt-9 pb-[0.5px]",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container px-24 mx-auto",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AnimatedHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    isLeftPositioned: false,
                    text: "Characters",
                    subtitle: "variety of mod chips & psionics to choose"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Carousel__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    animateChildren: animate,
                    children: charactersContent.map(({ characterImageUrl , id , title , description  }, index)=>{
                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `${index === activeSlide ? "" : "opacity-0 "}h-full flex justify-center items-stretch transtion-opacity duration-250 pointer-events-none`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative w-1/2 flex items-center",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `absolute w-[50vw] right-[10%] -mt-[40%] transition-transform duration-[416ms] delay-75 ease-out ${index === activeSlide ? "" : "-translate-x-[8%]"}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            src: characterImageUrl,
                                            width: "907px",
                                            height: "1506px",
                                            alt: title,
                                            className: `${index === activeSlide ? "" : "brightness-50 "} transition-filter duration-[416ms] delay-75 ease-out`
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-1/2 flex items-end",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `relative inline-block px-9 py-8 transition-transform duration-[416ms] delay-75 ease-out  ${index === activeSlide ? "" : "scale-[0.25]"}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FuturisticEdge__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "bg-secondary py-12 px-[4.375rem]",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
                                                    className: `transition-opacity duration-[167ms] delay-[333ms] ease-out  ${index === activeSlide ? "" : "opacity-0"}`,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                                            children: title
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                            className: "",
                                                            children: description
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        }, id);
                    })
                })
            ]
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AnimatedHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(748);
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(682);





const FeaturesSlider = ({ featureImages  })=>{
    const { 0: activeSlide , 1: setActiveSlide  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(-1);
    const animate = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((CarouselActiveSlide)=>{
        setActiveSlide(CarouselActiveSlide);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: "features",
        className: "px-24 mb-[26rem]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AnimatedHeader__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                text: "Features",
                subtitle: "variety of mod chips & psionics to choose"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Carousel__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                animateChildren: animate,
                children: featureImages.map(({ url , id , title  }, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${index === activeSlide ? "" : "opacity-0 "}h-full flex justify-center items-center transition-opacity duration-250`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: url,
                            width: "1260",
                            height: "637",
                            objectFit: "contain",
                            alt: title
                        })
                    }, id);
                })
            })
        ]
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
        className: "relative w-screen left-1/2 right-1/2 -mx-[50vw] bg-secondarybg pt-20 pb-44",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container mx-auto text-primary",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    className: "text-center mb-24",
                    children: "Contact Us"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "xl:flex",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "grow mb-8 xl:mb-0",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ol", {
                                className: "grid grid-cols-3 gap-3",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-20 h-20 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mr-12",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                                    icon: free_brands_svg_icons_namespaceObject.faTwitter,
                                                    className: "fa-2xl relative top-1/2 -translate-y-1/2"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                children: "Twitter"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-20 h-20 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mr-12",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                                    icon: free_brands_svg_icons_namespaceObject.faFacebookF,
                                                    className: "fa-2xl relative top-1/2 -translate-y-1/2"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                className: "inline-block",
                                                children: "Facebook"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-20 h-20 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mr-12",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                                    icon: free_brands_svg_icons_namespaceObject.faYoutube,
                                                    className: "fa-2xl relative top-1/2 -translate-y-1/2"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                children: "Youtube"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-20 h-20 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mr-12",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                                    icon: free_brands_svg_icons_namespaceObject.faInstagram,
                                                    className: "fa-2xl relative top-1/2 -translate-y-1/2"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                children: "Instagram"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-20 h-20 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mr-12",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                                    icon: free_brands_svg_icons_namespaceObject.faDiscord,
                                                    className: "fa-2xl relative top-1/2 -translate-y-1/2"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "",
                                                children: "Discord"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "w-20 h-20 inline-block align-middle border border-primary rounded-sm bg-secondary text-center mr-12",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_namespaceObject.FontAwesomeIcon, {
                                                    icon: free_brands_svg_icons_namespaceObject.faSteam,
                                                    className: "fa-2xl relative top-1/2 -translate-y-1/2"
                                                })
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
                                    className: "mb-7 block",
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
                className: " absolute inline-block h-full w-8 inset-y-0 left-0 before:content-[''] before:border-t-8 before:border-l-8 before:border-primary before:absolute before:w-full before:h-8 before:top-0 before:inset-x-0 after:content-[''] after:border-b-8 after:border-l-8 after:border-primary after:absolute after:w-full after:h-8 after:bottom-0 after:inset-x-0"
            }),
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: " absolute inline-block h-full w-8 inset-y-0 right-0 before:content-[''] before:border-t-8 before:border-r-8 before:border-primary before:absolute before:w-full before:h-8 before:top-0 before:inset-x-0 after:content-[''] after:border-b-8 after:border-r-8 after:border-primary after:absolute after:w-full after:h-8 after:bottom-0 after:inset-x-0"
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
/* harmony import */ var _AnimatedHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(748);





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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: "gallery",
        className: "px-24 mb-96",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_AnimatedHeader__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                text: title1
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                ref: imagesContainer,
                className: "grid grid-cols-3 gap-12",
                children: images.map(({ url , title , id  }, index)=>index < 9 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "#",
                        title: "Show",
                        className: `transition-all duration-[333ms] ${calculateDelayClass(index)} ${animating ? "" : "translate-y-3.5 opacity-0"}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: url,
                            width: 478,
                            height: 293,
                            alt: title
                        })
                    }, id) : null
                )
            })
        ]
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

const HeaderNav = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "mx-auto fixed w-screen inset-x-0 top-0 bg-secondary font-bold z-10",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "container mx-auto",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ol", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "inline-block",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#story",
                                className: "inline-block leading-none py-5 px-10 mr-3.5 border border-transparent active:border-primary hover:text-primary hover:border-primary",
                                children: "Story"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "inline-block",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#features",
                                className: "inline-block leading-none py-5 px-10 mr-3.5 border border-transparent active:border-primary hover:text-primary hover:border-primary",
                                children: "Feature"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "inline-block",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#characters",
                                className: "inline-block leading-none py-5 px-10 mr-3.5 border border-transparent active:border-primary hover:text-primary hover:border-primary",
                                children: "Characters"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "inline-block",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#gallery",
                                className: "inline-block leading-none py-5 px-10 mr-3.5 border border-transparent active:border-primary hover:text-primary hover:border-primary",
                                children: "Gallery"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: "inline-block",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "#news",
                                className: "inline-block leading-none py-5 px-10 mr-3.5 border border-transparent active:border-primary hover:text-primary hover:border-primary",
                                children: "News"
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeaderNav);


/***/ }),

/***/ 14:
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

const createLaser = (canvasContext, xPosition, color)=>({
        xPosition,
        beginTipPosition: randomIntFromInterval(-1000, -400),
        height: randomIntFromInterval(250, 400),
        width: randomIntFromInterval(1, 3),
        color,
        get endTipPosition () {
            return this.beginTipPosition + this.height;
        },
        draw () {
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
            this.beginTipPosition += distanceMovement;
            return this.draw();
        }
    })
;
/* harmony default export */ const createCanvasLaserElement = (createLaser);

;// CONCATENATED MODULE: ./utils/detectScrollDirection.ts
let oldValue = 0;
let newValue = 0;
function getScrollDirection() {
    newValue = window.pageYOffset;
    if (oldValue < newValue) {
        return "down";
    }
    oldValue = newValue;
    return "up";
};

// EXTERNAL MODULE: ./helpers/FpsCtrl.ts
var FpsCtrl = __webpack_require__(723);
;// CONCATENATED MODULE: ./components/LaserRainBackdrop.tsx






console.log(getScrollDirection);

const LaserRainBackdrop = ({ laserDistance =60 , movementSpeed =20  })=>{
    const canvasRef = (0,external_react_.useRef)(null);
    (0,external_react_.useLayoutEffect)(()=>{
        const canvasElement = (0,getElementRef/* default */.Z)(canvasRef);
        canvasElement.setAttribute("width", `${window.innerWidth}`);
        canvasElement.setAttribute("height", `${window.innerHeight}`);
        // initializing canvas
        const canvasContext = canvasElement.getContext("2d");
        const PRIMARY_COLOR = "#03c7ff";
        const SECONDARY_COLOR = "#2e7299";
        let lasers = [];
        function generateLasers() {
            if (!!canvasContext) {
                let laserGenerationArea = 0;
                do {
                    const laserGenerationPoint = randomIntFromInterval(laserGenerationArea, laserGenerationArea + laserDistance);
                    const color = randomIntFromInterval(0, 1) ? PRIMARY_COLOR : SECONDARY_COLOR;
                    lasers.push(createCanvasLaserElement(canvasContext, laserGenerationPoint, color));
                    laserGenerationArea += laserDistance;
                }while (laserGenerationArea < canvasElement.width);
            }
        }
        let isPaused = false;
        window.addEventListener("scroll", (e)=>{
            if (getScrollDirection() === "down") {
                isPaused = true;
            } else {
                isPaused = false;
            }
        });
        //start animation
        let animation;
        let distanceMovement = 0;
        const laserRainAnimation = new FpsCtrl/* default */.Z(36, ()=>{
            if (!isPaused) {
                if (!!canvasContext) {
                    // clear canvas before repainting
                    canvasContext.clearRect(0, 0, canvasElement.width, canvasElement.height);
                }
                distanceMovement += movementSpeed;
                if (distanceMovement > 400) {
                    generateLasers();
                    distanceMovement = 0;
                }
                lasers = lasers.filter((laser)=>{
                    laser.animate(movementSpeed);
                    return laser.endTipPosition <= randomIntFromInterval(75, 99) / 100 * canvasElement.height;
                });
            }
        });
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
        className: "mx-auto relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-44",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_LaserRainBackdrop, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mb-80",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: "/assets/fractured-core-logo.png",
                            width: 1265,
                            height: 155,
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
;// CONCATENATED MODULE: ./components/Modal.tsx





const Modal = ({ title , date , content , exit  })=>{
    const containerRef = (0,external_react_.useRef)(null);
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
        }
    }
    function onBackdropClick(event) {
        if (event.target === containerRef.current) {
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
        className: "scale-0 transition-transform duration-[167ms] fixed inset-0 backdrop-blur flex justify-center items-center",
        tabIndex: 0,
        onClick: onBackdropClick,
        onKeyUp: onKeyEscapePressed,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "absolute w-10/12 h-4/5 px-9 py-8 ",
            children: /*#__PURE__*/ jsx_runtime_.jsx(FuturisticEdge/* default */.Z, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
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
            })
        })
    });
};
/* harmony default export */ const components_Modal = (Modal);

;// CONCATENATED MODULE: ./components/News.tsx







const News = ({ articles  })=>{
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
    function animateEachNews(index) {
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
    }
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        id: "news",
        className: "mx-auto relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-96",
        onClick: animate,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-center mb-28",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                    ref: titleRef,
                    className: "inline-block mx-auto leading-[0.7] relative text-transparent",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                        "News",
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            ref: titleRevealerRef,
                            className: "h-[57px] mt-[2px] bg-primary absolute right-0 top-1/2 -translate-y-1/2 scale-x-0 origin-left transition-transform duration-[333ms]"
                        })
                    ]
                })
            }),
            articles.map(({ title , date , content , id  }, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                    className: "grid grid-cols-3 gap-24 mb-48",
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
                                    className: "my-6 border-primary scale-x-0 origin-left transition-transform duration-[417ms]"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    ref: newsDateRefs.current[index],
                                    className: "opacity-0 transition-opacity duration-[250ms] delay-200 font-normal",
                                    children: date
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            ref: newsContentRefs.current[index],
                            className: "relative bg-tertiary p-14 transition-transform scale-0 duration-[167ms]",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "absolute -z-[1] w-[calc(100%+5.6rem)] h-[calc(100%+5.6rem)] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(FuturisticEdge/* default */.Z, {})
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "opacity-0 transition-opacity delay-[250ms]",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "line-clamp-[16] mb-9",
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
                    children: "Load more"
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
/* harmony import */ var _FuturisticEdge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(164);
/* harmony import */ var _utils_useOnScrollEffect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39);





const Story = ({ intro , title , background , children  })=>{
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
    (0,_utils_useOnScrollEffect__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(containerIntroRef, animate);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        id: "story",
        className: "mx-auto relative w-screen left-1/2 right-1/2 -mx-[50vw] mb-44",
        onClick: animate,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-52 text-center uppercase",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    ref: containerIntroRef,
                    className: "inline-block px-16 py-12 relative invisible",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_FuturisticEdge__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                            ref: textIntroRef,
                            className: "tracking-[0.2em] mb-0 whitespace-nowrap overflow-hidden transition-maxwidth max-w-xs invisible",
                            children: intro
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        ref: imageParentRef,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                            src: background,
                            alt: "",
                            width: "1920",
                            height: "963",
                            objectFit: "cover",
                            className: "clip-path-right"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
                        ref: articleRef,
                        className: "mx-auto absolute inset-y-[15%] w-full transition-opacity opacity-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "container mx-auto",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    className: "text-center",
                                    children: title
                                }),
                                children
                            ]
                        })
                    })
                ]
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(905);
/* harmony import */ var _components_HeaderNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(206);
/* harmony import */ var _components_Landing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _components_Story__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(991);
/* harmony import */ var _components_FeaturesSlider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(444);
/* harmony import */ var _components_CharactersSlider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(325);
/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(68);
/* harmony import */ var _components_News__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(416);
/* harmony import */ var _components_FooterNav__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(690);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([html_react_parser__WEBPACK_IMPORTED_MODULE_2__]);
html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];











const Home = ({ gallery , story  })=>{
    const { 0: articles  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([
        {
            id: "1",
            title: "Sebvah Judul",
            date: "Semacam tgl",
            content: `<p>Breaking News</p>
      <p>Update fix 4.0 .12 A</p>
      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
      <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going.</p>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat quo non tempora beatae dolores eum, voluptatum ut rerum consectetur quidem mollitia, reiciendis iure adipisci natus assumenda quia expedita! Pariatur, dignissimos?</p>
      `
        },
        {
            id: "2",
            title: "Sebvah Judul",
            date: "Semacam tgl",
            content: `<p>Ini paragraph</p>`
        }, 
    ]);
    console.log((0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__["default"])(story.content));
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
        className: "container mx-auto",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_HeaderNav__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Landing__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Story__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                ...story,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "text-center",
                    children: (0,html_react_parser__WEBPACK_IMPORTED_MODULE_2__["default"])(story.content)
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_FeaturesSlider__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                featureImages: [
                    {
                        url: "/assets/features-placeholder.png",
                        id: "1",
                        title: "Placeholder"
                    },
                    {
                        url: "/assets/character2.png",
                        id: "2",
                        title: "Placeholder 2"
                    },
                    {
                        url: "/assets/BG.png",
                        id: "3",
                        title: "Placeholder 3"
                    },
                    {
                        url: "/assets/features-placeholder.png",
                        id: "4",
                        title: "Placeholder"
                    }, 
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_CharactersSlider__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                charactersContent: [
                    {
                        characterImageUrl: "/assets/character2.png",
                        id: "1",
                        title: "Placeholder 1",
                        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere
              culpa, ut optio reprehenderit dolore itaque fuga perferendis magni ea
              dicta voluptas provident vitae molestiae? Obcaecati dolorum iusto neque
              rerum?`
                    },
                    {
                        characterImageUrl: "/assets/character.png",
                        id: "2",
                        title: "Placeholder 2",
                        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere
              culpa, ut optio reprehenderit dolore itaque fuga perferendis magni ea
              dicta voluptas provident vitae molestiae? Obcaecati dolorum iusto neque
              rerum?`
                    },
                    {
                        characterImageUrl: "/assets/character.png",
                        id: "3",
                        title: "Placeholder 3",
                        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, facere
              culpa, ut optio reprehenderit dolore itaque fuga perferendis magni ea
              dicta voluptas provident vitae molestiae? Obcaecati dolorum iusto neque
              rerum?`
                    }, 
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Gallery__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                ...gallery
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_News__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                articles: articles
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
                alt
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
    return {
        props: {
            gallery: parseGallery(),
            story: parseStory()
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