function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},a=t.parcelRequire4c75;null==a&&((a=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return o[e]=a,t.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){n[e]=t},t.parcelRequire4c75=a);e(a("kEUo3")).throttle(InputEvent,500);const l=document.querySelector("input"),r=document.querySelector("textarea");l.addEventListener("input",(e=>{const t=l.textContent=e.currentTarget.value;localStorage.setItem("email",t),console.log(t)})),r.addEventListener("input",(e=>{const t=l.textContent=e.currentTarget.value;localStorage.setItem("message",t),console.log(t)}));const s={email:localStorage.getItem("email"),message:localStorage.getItem("message")};console.log(s),localStorage.setItem("feedback-form-state",JSON.stringify(s));const c=localStorage.getItem("feedback-form-state"),m=JSON.parse(c);window.onload=function(){document.getElementById("email_input").value=m.email,document.getElementById("message_input").value=m.message},localStorage.removeItem("email"),localStorage.removeItem("message");document.querySelector(".feedback-form").addEventListener("submit",(function(e){e.preventDefault(),document.getElementById("email_input").value=m.email,document.getElementById("message_input").value=m.message,console.log(m),localStorage.removeItem("feedback-form-state")})),console.log(localStorage.getItem("feedback-form-state"));
//# sourceMappingURL=03-feedback.e6c38f94.js.map