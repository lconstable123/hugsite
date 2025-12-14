(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/Plasma.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Plasma",
    ()=>Plasma,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Renderer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Program.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/core/Mesh.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ogl/src/extras/Triangle.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
const hexToRgb = (hex)=>{
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (!result) return [
        1,
        0.5,
        0.2
    ];
    return [
        parseInt(result[1], 16) / 255,
        parseInt(result[2], 16) / 255,
        parseInt(result[3], 16) / 255
    ];
};
const vertex = `#version 300 es
precision highp float;
in vec2 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;
const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uCustomColor;
uniform float uUseCustomColor;
uniform float uSpeed;
uniform float uDirection;
uniform float uScale;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseInteractive;
out vec4 fragColor;

void mainImage(out vec4 o, vec2 C) {
  vec2 center = iResolution.xy * 0.5;
  C = (C - center) / uScale + center;
  
  vec2 mouseOffset = (uMouse - center) * 0.0002;
  C += mouseOffset * length(C - center) * step(0.5, uMouseInteractive);
  
  float i, d, z, T = iTime * uSpeed * uDirection;
  vec3 O, p, S;

  for (vec2 r = iResolution.xy, Q; ++i < 60.; O += o.w/d*o.xyz) {
    p = z*normalize(vec3(C-.5*r,r.y)); 
    p.z -= 4.; 
    S = p;
    d = p.y-T;
    
    p.x += .4*(1.+p.y)*sin(d + p.x*0.1)*cos(.34*d + p.x*0.05); 
    Q = p.xz *= mat2(cos(p.y+vec4(0,11,33,0)-T)); 
    z+= d = abs(sqrt(length(Q*Q)) - .25*(5.+S.y))/3.+8e-4; 
    o = 1.+sin(S.y+p.z*.5+S.z-length(S-p)+vec4(2,1,0,8));
  }
  
  o.xyz = tanh(O/1e4);
}

bool finite1(float x){ return !(isnan(x) || isinf(x)); }
vec3 sanitize(vec3 c){
  return vec3(
    finite1(c.r) ? c.r : 0.0,
    finite1(c.g) ? c.g : 0.0,
    finite1(c.b) ? c.b : 0.0
  );
}

void main() {
  vec4 o = vec4(0.0);
  mainImage(o, gl_FragCoord.xy);
  vec3 rgb = sanitize(o.rgb);
  
  float intensity = (rgb.r + rgb.g + rgb.b) / 3.0;
  vec3 customColor = intensity * uCustomColor;
  vec3 finalColor = mix(rgb, customColor, step(0.5, uUseCustomColor));
  
  float alpha = length(rgb) * uOpacity;
  fragColor = vec4(finalColor, alpha);
}`;
const Plasma = ({ color = '#ffffff', speed = 1, direction = 'forward', scale = 1, opacity = 1, mouseInteractive = true })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mousePos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Plasma.useEffect": ()=>{
            if (!containerRef.current) return;
            const containerEl = containerRef.current;
            const useCustomColor = color ? 1.0 : 0.0;
            const customColorRgb = color ? hexToRgb(color) : [
                1,
                1,
                1
            ];
            const directionMultiplier = direction === 'reverse' ? -1.0 : 1.0;
            const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Renderer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Renderer"]({
                webgl: 2,
                alpha: true,
                antialias: false,
                dpr: Math.min(window.devicePixelRatio || 1, 2)
            });
            const gl = renderer.gl;
            const canvas = gl.canvas;
            canvas.style.display = 'block';
            canvas.style.width = '100%';
            canvas.style.height = '100%';
            containerRef.current.appendChild(canvas);
            const geometry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$extras$2f$Triangle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Triangle"](gl);
            const program = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Program$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Program"](gl, {
                vertex: vertex,
                fragment: fragment,
                uniforms: {
                    iTime: {
                        value: 0
                    },
                    iResolution: {
                        value: new Float32Array([
                            1,
                            1
                        ])
                    },
                    uCustomColor: {
                        value: new Float32Array(customColorRgb)
                    },
                    uUseCustomColor: {
                        value: useCustomColor
                    },
                    uSpeed: {
                        value: speed * 0.4
                    },
                    uDirection: {
                        value: directionMultiplier
                    },
                    uScale: {
                        value: scale
                    },
                    uOpacity: {
                        value: opacity
                    },
                    uMouse: {
                        value: new Float32Array([
                            0,
                            0
                        ])
                    },
                    uMouseInteractive: {
                        value: mouseInteractive ? 1.0 : 0.0
                    }
                }
            });
            const mesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ogl$2f$src$2f$core$2f$Mesh$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mesh"](gl, {
                geometry,
                program
            });
            const handleMouseMove = {
                "Plasma.useEffect.handleMouseMove": (e)=>{
                    if (!mouseInteractive) return;
                    const rect = containerRef.current.getBoundingClientRect();
                    mousePos.current.x = e.clientX - rect.left;
                    mousePos.current.y = e.clientY - rect.top;
                    const mouseUniform = program.uniforms.uMouse.value;
                    mouseUniform[0] = mousePos.current.x;
                    mouseUniform[1] = mousePos.current.y;
                }
            }["Plasma.useEffect.handleMouseMove"];
            if (mouseInteractive) {
                containerEl.addEventListener('mousemove', handleMouseMove);
            }
            const setSize = {
                "Plasma.useEffect.setSize": ()=>{
                    const rect = containerRef.current.getBoundingClientRect();
                    const width = Math.max(1, Math.floor(rect.width));
                    const height = Math.max(1, Math.floor(rect.height));
                    renderer.setSize(width, height);
                    const res = program.uniforms.iResolution.value;
                    res[0] = gl.drawingBufferWidth;
                    res[1] = gl.drawingBufferHeight;
                }
            }["Plasma.useEffect.setSize"];
            const ro = new ResizeObserver(setSize);
            ro.observe(containerEl);
            setSize();
            let raf = 0;
            const t0 = performance.now();
            const loop = {
                "Plasma.useEffect.loop": (t)=>{
                    let timeValue = (t - t0) * 0.001;
                    if (direction === 'pingpong') {
                        const pingpongDuration = 10;
                        const segmentTime = timeValue % pingpongDuration;
                        const isForward = Math.floor(timeValue / pingpongDuration) % 2 === 0;
                        const u = segmentTime / pingpongDuration;
                        const smooth = u * u * (3 - 2 * u);
                        const pingpongTime = isForward ? smooth * pingpongDuration : (1 - smooth) * pingpongDuration;
                        program.uniforms.uDirection.value = 1.0;
                        program.uniforms.iTime.value = pingpongTime;
                    } else {
                        program.uniforms.iTime.value = timeValue;
                    }
                    renderer.render({
                        scene: mesh
                    });
                    raf = requestAnimationFrame(loop);
                }
            }["Plasma.useEffect.loop"];
            raf = requestAnimationFrame(loop);
            return ({
                "Plasma.useEffect": ()=>{
                    cancelAnimationFrame(raf);
                    ro.disconnect();
                    if (mouseInteractive && containerEl) {
                        containerEl.removeEventListener('mousemove', handleMouseMove);
                    }
                    try {
                        containerEl?.removeChild(canvas);
                    } catch  {
                        console.warn('Canvas already removed from container');
                    }
                }
            })["Plasma.useEffect"];
        }
    }["Plasma.useEffect"], [
        color,
        speed,
        direction,
        scale,
        opacity,
        mouseInteractive
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "plasma-container"
    }, void 0, false, {
        fileName: "[project]/components/Plasma.jsx",
        lineNumber: 200,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Plasma, "r0iWZlJSVKCLdQHRL9OweN9Ifw4=");
_c = Plasma;
const __TURBOPACK__default__export__ = Plasma;
var _c;
__turbopack_context__.k.register(_c, "Plasma");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// {import react compoent here}
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Plasma$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Plasma.jsx [app-client] (ecmascript)");
"use client";
;
;
function Home() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            className: "flex min-h-screen bg-black w-full max-w-3xl flex-col items-center justify-between py-32 px-16  dark:bg-black sm:items-start",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    width: "100%",
                    height: "600px",
                    position: "relative"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Plasma$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    color: "#ff6b35",
                    speed: 2,
                    direction: "forward",
                    scale: 1.1,
                    opacity: 0.8,
                    mouseInteractive: true
                }, void 0, false, {
                    fileName: "[project]/app/page.tsx",
                    lineNumber: 12,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.tsx",
                lineNumber: 11,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/page.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/page.tsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_3a83cc5f._.js.map