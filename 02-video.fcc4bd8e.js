const e=document.querySelector("iframe"),o=new Vimeo.Player(e);o.on("play",(function(){console.log("played the video!")})),o.getVideoTitle().then((function(e){console.log("title:",e)})),o.on("timeupdate",(function(e){}));localStorage.setItem("videoplayer - current - time");
//# sourceMappingURL=02-video.fcc4bd8e.js.map
