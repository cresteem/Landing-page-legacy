console.log("c-loaded");let user_activepostion,pageheight=document.body.scrollHeight;function serial_ani_add(e,o){e.forEach((e=>{e.classList.add(o)}))}function serial_ani_rem(e,o){e.forEach((e=>{e.classList.remove(o)}))}function getUserpostion(){return user_activepostion=Math.round(window.scrollY/pageheight*100),console.log(`Current pos is ${user_activepostion}%`),user_activepostion}function createJS(e){var o=document.createElement("script");return o.src=e,o.setAttribute("defer",""),o}body=document.body;