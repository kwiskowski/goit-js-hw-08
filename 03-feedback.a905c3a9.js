var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequire4c75;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var l={id:e,exports:{}};return t[e]=l,n.call(l.exports,l,l.exports),l.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},e.parcelRequire4c75=n);var l=n("kEUo3").throttle;const a=document.querySelector("input"),r=document.querySelector("textarea");const u={email:undefined,message:undefined};l(InputEvent,[wait=500]),a.addEventListener("input",(e=>{const t=a.textContent=e.currentTarget.value;console.log(t)})),r.addEventListener("input",(e=>{const t=a.textContent=e.currentTarget.value;console.log(t)})),console.log(u),localStorage.setItem("feedback-form-state",JSON.stringify(u));const i=localStorage.getItem("feedback-form-state"),c=JSON.parse(i);window.onload=function(){document.getElementById("email_input").value=c.email,document.getElementById("message_input").value=c.message},localStorage.removeItem("email"),localStorage.removeItem("message");document.querySelector(".feedback-form").addEventListener("submit",(function(e){e.preventDefault(),console.log(i),document.getElementById("email_input").value="",document.getElementById("message_input").value=""})),console.log("local Storage",localStorage);
//# sourceMappingURL=03-feedback.a905c3a9.js.map