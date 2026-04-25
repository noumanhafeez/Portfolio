(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/useInView.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useSectionInView",
    ()=>useSectionInView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-intersection-observer/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$containers$2f$active$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/containers/active-section.tsx [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function useSectionInView(sectionName, threshold = 0.75) {
    _s();
    const { ref, inView } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])({
        threshold
    });
    const { setActiveSection, timeOfLastClick } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$containers$2f$active$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveSectionContext"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useSectionInView.useEffect": ()=>{
            if (inView && Date.now() - timeOfLastClick > 1000) {
                setActiveSection(sectionName);
            }
        }
    }["useSectionInView.useEffect"], [
        inView,
        setActiveSection,
        timeOfLastClick,
        sectionName
    ]);
    return {
        ref
    };
}
_s(useSectionInView, "+ERYUQA4Upqr2oCfox7CwXVjtT8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$containers$2f$active$2d$section$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActiveSectionContext"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/intro.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Intro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useInView.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Intro() {
    _s();
    const { ref } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSectionInView"])("#home", 0.5);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "home",
        ref: ref,
        className: "mb-28 max-w-[75rem] mx-auto scroll-mt-20 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: " relative rounded-3xl border border-teal-300/40 bg-gradient-to-br from-teal-100/60 via-sky-200/40 to-violet-200/30 backdrop-blur-xl backdrop-saturate-150 shadow-[0_30px_90px_rgba(56,189,248,0.35)] px-10 py-14 text-center ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "aria-hidden": true,
                    className: "pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/70 to-transparent opacity-25"
                }, void 0, false, {
                    fileName: "[project]/components/intro.tsx",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "relative z-10 mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "block text-4xl sm:text-5xl font-playfair font-bold tracking-tight text-slate-900",
                            children: "Nouman Hafeez"
                        }, void 0, false, {
                            fileName: "[project]/components/intro.tsx",
                            lineNumber: 33,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-8 max-w-3xl mx-auto text-[17px] font-inter font-medium text-slate-800 leading-relaxed",
                            children: "Hello! Glad to see you here. This is a collection of my personal projects created during my MS studies, combining what I learned in class with my own curiosity and creativity."
                        }, void 0, false, {
                            fileName: "[project]/components/intro.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/intro.tsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/intro.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/intro.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_s(Intro, "vuV2Oqy/m5Sj7a/N+PFePPf5wkY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSectionInView"]
    ];
});
_c = Intro;
var _c;
__turbopack_context__.k.register(_c, "Intro");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/about.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>About
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useInView.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function About() {
    _s();
    const { ref } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSectionInView"])("#about");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "about",
        ref: ref,
        className: "mb-28 max-w-[75rem] mx-auto scroll-mt-20 px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: " relative rounded-3xl border border-teal-300/30 bg-gradient-to-br from-teal-100/40 via-sky-100/30 to-violet-100/20 backdrop-blur-xl backdrop-saturate-150 shadow-[0_30px_90px_rgba(56,189,248,0.25)] px-10 py-14 ",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    "aria-hidden": true,
                    className: "pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/50 to-transparent opacity-25"
                }, void 0, false, {
                    fileName: "[project]/components/about.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-slate-900",
                            children: "About Me"
                        }, void 0, false, {
                            fileName: "[project]/components/about.tsx",
                            lineNumber: 35,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid lg:grid-cols-[1fr_2fr] gap-8 mt-8 items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/me.jpeg",
                                        alt: "Nouman Hafeez portrait",
                                        width: 350,
                                        height: 480,
                                        priority: false,
                                        className: "rounded-3xl object-cover w-[350px] h-[480px]"
                                    }, void 0, false, {
                                        fileName: "[project]/components/about.tsx",
                                        lineNumber: 40,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/about.tsx",
                                    lineNumber: 39,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-left text-base text-slate-900 leading-relaxed",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: [
                                                "I’m ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Nouman Hafeez"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/about.tsx",
                                                    lineNumber: 53,
                                                    columnNumber: 21
                                                }, this),
                                                ", a software engineer currently pursuing a Master’s in Computer Science at",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "FAST NUCES"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/about.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 17
                                                }, this),
                                                ", Lahore. I have hands-on experience in machine learning, web scraping, and mobile application development, working on scalable and efficient solutions."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/about.tsx",
                                            lineNumber: 52,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-4",
                                            children: [
                                                "I’ve worked as a",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Machine Learning Intern at Arbisoft"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/about.tsx",
                                                    lineNumber: 62,
                                                    columnNumber: 17
                                                }, this),
                                                " and as an",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Associate Software Engineer at Sortup Dev"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/about.tsx",
                                                    lineNumber: 63,
                                                    columnNumber: 17
                                                }, this),
                                                ", bridging data-driven intelligence with user-friendly applications. I enjoy solving complex problems and writing clean, maintainable code."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/about.tsx",
                                            lineNumber: 60,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-6",
                                            children: [
                                                "Feel free to reach out at",
                                                " ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "mailto:noumanhafeez@email.com",
                                                    className: "text-blue-600 hover:underline",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "noumanhafeez@email.com"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/about.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 19
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/about.tsx",
                                                    lineNumber: 71,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/about.tsx",
                                            lineNumber: 69,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/about.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/about.tsx",
                            lineNumber: 37,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                            className: "mt-32 border-t-2 border-gray-300 w-1/2 mx-auto"
                        }, void 0, false, {
                            fileName: "[project]/components/about.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/about.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/about.tsx",
            lineNumber: 15,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/about.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_s(About, "vuV2Oqy/m5Sj7a/N+PFePPf5wkY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSectionInView"]
    ];
});
_c = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "links",
    ()=>links,
    "projectsData",
    ()=>projectsData
]);
const links = [
    {
        nameEng: "Home",
        hash: "#home"
    },
    {
        nameEng: "About",
        hash: "#about"
    },
    {
        nameEng: "Projects",
        hash: "#projects"
    },
    {
        nameEng: "Get In Touch",
        hash: "#connect"
    }
];
const projectsData = [
    {
        title: "Machine Learning Specialization by Andrew Ng",
        description: "",
        tags: [
            "Certifications"
        ],
        imageUrl: "/machine_learning.png",
        link: "https://coursera.org/share/f9bcd7be95aaf6073d4f5f798f63d523"
    },
    {
        title: "Deep Learning Specialization by Andrew Ng",
        description: "",
        tags: [
            "Certifications"
        ],
        imageUrl: "/Deep_learning.png",
        link: "https://coursera.org/share/4cdb2ab9b6238c3ac01e0b9308ee2b6d"
    },
    {
        title: "Google Data Analytics Professional Certificate",
        description: "",
        tags: [
            "Certifications"
        ],
        imageUrl: "/data_analytics.png",
        link: "https://coursera.org/share/c77a904040320faad7d8dbc4edbfe968"
    },
    {
        title: "Introduction to TensorFlow",
        description: "",
        tags: [
            "Certifications"
        ],
        imageUrl: "/tensorflow.png",
        link: "https://coursera.org/share/44d233ddf7c6bdaf2464717f78c4c83b"
    },
    {
        title: "Pyhton for Everybody",
        description: "",
        tags: [
            "Certifications"
        ],
        imageUrl: "/python.jpg",
        link: "https://example.com/climate"
    },
    {
        title: "Data Science Orientation",
        description: "",
        tags: [
            "Certifications"
        ],
        imageUrl: "/orientation.png",
        link: "https://coursera.org/share/18cb4108cf750008b5799f7dceab87e2"
    },
    {
        title: "Introduction to Databases",
        description: "",
        tags: [
            "Certifications"
        ],
        imageUrl: "/meta.jpg",
        link: "https://coursera.org/share/856512bbf239f1957d9c5cb67c5a42b5"
    },
    {
        title: "Introduction to TensorFlow",
        description: "",
        tags: [
            "Certifications"
        ],
        imageUrl: "/tensorflow.png",
        link: "https://coursera.org/share/44d233ddf7c6bdaf2464717f78c4c83b"
    },
    {
        title: "Data Structures and Algorithms",
        description: "",
        tags: [
            "Certifications"
        ],
        imageUrl: "/algo.png",
        link: "https://certificate.algoexpert.io/AE-89974bae0a"
    },
    {
        title: "Siameese Neural Networks with triplet loss",
        description: "",
        tags: [
            "Coursera Projects"
        ],
        imageUrl: "/coursera.png",
        link: "https://coursera.org/share/d76292fe26adb112d0fcb2934da7492c"
    },
    {
        title: "Linear Regression with multiple variables",
        description: "",
        tags: [
            "Coursera Projects"
        ],
        imageUrl: "/cor.png",
        link: "https://coursera.org/share/7210f28bd5966f55d4c6bb639a743a28"
    },
    {
        title: "Neural Network Visualizer",
        description: "",
        tags: [
            "Coursera Projects"
        ],
        imageUrl: "/coursera.png",
        link: "https://coursera.org/share/d4065f9510248ce941ffff73b9f85b09"
    },
    {
        title: "Diabetic Retinopathy Detection",
        description: "",
        tags: [
            "Coursera Projects"
        ],
        imageUrl: "/cor.png",
        link: "https://coursera.org/share/8cc1f74eaff2860fba79cd5bf21964fa"
    },
    {
        title: "Accident Visualization Using Streamlit",
        description: "",
        tags: [
            "Coursera Projects"
        ],
        imageUrl: "/coursera.png",
        link: "https://coursera.org/share/f6fa0cdc5277bf85cb024b7e96c8bce9"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/projects.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
const categories = [
    "Certifications",
    "Coursera Projects",
    "Data Visualization",
    "Data Science"
];
const comingSoonCategories = [
    "Data Visualization",
    "Data Science"
];
function ProjectsSection() {
    _s();
    const [activeCategory, setActiveCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(categories[0]);
    const filteredProjects = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ProjectsSection.useMemo[filteredProjects]": ()=>{
            return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projectsData"].filter({
                "ProjectsSection.useMemo[filteredProjects]": (project)=>project.tags.some({
                        "ProjectsSection.useMemo[filteredProjects]": (tag)=>tag.toLowerCase() === activeCategory.toLowerCase()
                    }["ProjectsSection.useMemo[filteredProjects]"])
            }["ProjectsSection.useMemo[filteredProjects]"]);
        }
    }["ProjectsSection.useMemo[filteredProjects]"], [
        activeCategory
    ]);
    const isComingSoon = comingSoonCategories.includes(activeCategory);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex flex-col items-center min-h-[700px] px-4 sm:px-6 max-w-[75rem] mx-auto scroll-mt-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full mb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: " relative rounded-3xl border border-teal-300/30 bg-gradient-to-br from-teal-100/40 via-sky-100/30 to-violet-100/20 backdrop-blur-xl backdrop-saturate-150 shadow-[0_20px_60px_rgba(56,189,248,0.25)] px-6 py-4 flex justify-center overflow-x-auto ",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap sm:flex-nowrap justify-center sm:justify-between space-x-4 sm:space-x-8 font-bold text-xs sm:text-sm uppercase tracking-wide",
                        children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveCategory(cat),
                                className: `
                  whitespace-nowrap
                  transition-colors
                  px-4 py-2 rounded-full relative overflow-hidden
                  ${activeCategory === cat ? "text-pink-600 bg-white/20 backdrop-blur-xl" : "text-black hover:text-gray-700"}
                `,
                                children: [
                                    activeCategory === cat && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": true,
                                        className: "absolute inset-0 bg-white/25 backdrop-blur-xl rounded-full pointer-events-none"
                                    }, void 0, false, {
                                        fileName: "[project]/components/projects.tsx",
                                        lineNumber: 61,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "relative z-10",
                                        children: cat
                                    }, void 0, false, {
                                        fileName: "[project]/components/projects.tsx",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, cat, true, {
                                fileName: "[project]/components/projects.tsx",
                                lineNumber: 45,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/projects.tsx",
                        lineNumber: 43,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/projects.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/projects.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            isComingSoon ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center items-center h-64",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 text-lg font-medium animate-pulse",
                    children: [
                        "🚧 ",
                        activeCategory,
                        " projects coming soon!"
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/projects.tsx",
                    lineNumber: 76,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/projects.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex flex-col gap-4",
                children: filteredProjects.map((project, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: " relative rounded-3xl border border-teal-200/30 bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-xl backdrop-saturate-150 shadow-[0_20px_60px_rgba(56,189,248,0.15)] px-6 py-4 transition-transform hover:scale-[1.02] cursor-pointer ",
                        onClick: ()=>window.open(project.link, "_blank"),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "aria-hidden": true,
                                className: "pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/40 to-transparent opacity-20"
                            }, void 0, false, {
                                fileName: "[project]/components/projects.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10 flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-semibold text-slate-900",
                                        children: project.title
                                    }, void 0, false, {
                                        fileName: "[project]/components/projects.tsx",
                                        lineNumber: 104,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-gray-700",
                                        children: project.tags.join(", ")
                                    }, void 0, false, {
                                        fileName: "[project]/components/projects.tsx",
                                        lineNumber: 107,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/projects.tsx",
                                lineNumber: 103,
                                columnNumber: 15
                            }, this)
                        ]
                    }, idx, true, {
                        fileName: "[project]/components/projects.tsx",
                        lineNumber: 83,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/projects.tsx",
                lineNumber: 81,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                className: "mt-32 border-t-2 border-gray-300 w-3/4 mx-auto"
            }, void 0, false, {
                fileName: "[project]/components/projects.tsx",
                lineNumber: 117,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/projects.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_s(ProjectsSection, "hJvCQ170P7h7J+G++/NE6ZDdPF8=");
_c = ProjectsSection;
var _c;
__turbopack_context__.k.register(_c, "ProjectsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/section-heading.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function SectionHeading({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: "text-3xl capitalize mb-8 font-bold text-black text-center",
        children: children
    }, void 0, false, {
        fileName: "[project]/components/section-heading.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
_c = SectionHeading;
var _c;
__turbopack_context__.k.register(_c, "SectionHeading");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/skills.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConnectWithMe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/useInView.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/section-heading.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ConnectWithMe() {
    _s();
    const { ref } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSectionInView"])("#connect");
    const links = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/nouman-hafeez/",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaLinkedin"], {
                size: 28
            }, void 0, false, {
                fileName: "[project]/components/skills.tsx",
                lineNumber: 14,
                columnNumber: 13
            }, this),
            color: "text-blue-600"
        },
        {
            name: "GitHub",
            url: "https://github.com/noumanhafeez",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaGithub"], {
                size: 28
            }, void 0, false, {
                fileName: "[project]/components/skills.tsx",
                lineNumber: 20,
                columnNumber: 13
            }, this),
            color: "text-gray-900"
        },
        {
            name: "Medium",
            url: "https://medium.com/@noumanhafeez095",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaMedium"], {
                size: 28
            }, void 0, false, {
                fileName: "[project]/components/skills.tsx",
                lineNumber: 26,
                columnNumber: 13
            }, this),
            color: "text-black"
        },
        {
            name: "Twitter",
            url: "https://x.com/Nouman1256",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaTwitter"], {
                size: 28
            }, void 0, false, {
                fileName: "[project]/components/skills.tsx",
                lineNumber: 32,
                columnNumber: 13
            }, this),
            color: "text-sky-500"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "connect",
        ref: ref,
        className: "mb-28 max-w-[53rem] mx-auto scroll-mt-28 px-4 text-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$section$2d$heading$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                children: "Connect With Me"
            }, void 0, false, {
                fileName: "[project]/components/skills.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "flex flex-wrap justify-center gap-6",
                children: links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            onClick: ()=>window.open(link.url, "_blank"),
                            className: " relative rounded-3xl px-6 py-4 flex items-center gap-2 cursor-pointer bg-gradient-to-br from-white/20 via-white/10 to-white/5 backdrop-blur-xl backdrop-saturate-150 border border-white/30 shadow-[0_15px_40px_rgba(56,189,248,0.15)] transition-transform duration-300 hover:scale-105 ",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    "aria-hidden": true,
                                    className: "pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-b from-white/50 to-transparent opacity-20"
                                }, void 0, false, {
                                    fileName: "[project]/components/skills.tsx",
                                    lineNumber: 64,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `relative z-10 flex items-center gap-2 ${link.color}`,
                                    children: [
                                        link.icon,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-medium",
                                            children: link.name
                                        }, void 0, false, {
                                            fileName: "[project]/components/skills.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/skills.tsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/skills.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this)
                    }, link.name, false, {
                        fileName: "[project]/components/skills.tsx",
                        lineNumber: 47,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/skills.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/skills.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
_s(ConnectWithMe, "vuV2Oqy/m5Sj7a/N+PFePPf5wkY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$useInView$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSectionInView"]
    ];
});
_c = ConnectWithMe;
var _c;
__turbopack_context__.k.register(_c, "ConnectWithMe");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_f60df755._.js.map