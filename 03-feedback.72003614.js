!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=t.parcelRequire4c75;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},t.parcelRequire4c75=a);e(a("1WSnx")).throttle(InputEvent,500);var r=document.querySelector("input");r.addEventListener("input",(function(e){var t={email:r.textContent=e.currentTarget.value,message:r.textContent=e.currentTarget.value};localStorage.setItem("feedback-form-state",JSON.stringify(t))}));var l=localStorage.getItem("feedback-form-state"),u=JSON.parse(l);window.onload=function(){null!==localStorage.getItem("feedback-form-state")&&(document.getElementById("email_input").value=u.email,document.getElementById("message_input").value=u.message)},document.querySelector(".feedback-form").addEventListener("submit",(function(e){e.preventDefault(),document.getElementById("email_input").value="",document.getElementById("message_input").value="",localStorage.getItem("feedback-form-state"),console.log(u),localStorage.removeItem("feedback-form-state")})),console.log("feedback-form-state:",localStorage.getItem("feedback-form-state"))}();
//# sourceMappingURL=03-feedback.72003614.js.map
