window.matchMedia("(max-width: 1024px)").matches&&document.body.appendChild(createJS("/script/m-com.js")),window.matchMedia("(min-width: 1025px)").matches&&(document.body.appendChild(createJS("/script/com.js")),document.body.appendChild(createJS("/script/about.js")));let team_head=document.querySelector("#team > h1"),mem_profiles=document.querySelectorAll("#team .mem-profile"),mem_names=document.querySelectorAll("#team .mem-name"),mem_skills=document.querySelectorAll("#team .mem-skills"),mem_lkinlink=document.querySelectorAll(".lkin "),mem_instalink=document.querySelectorAll(".insta"),mem_ytlink=document.querySelectorAll(".yt"),work_varea=document.querySelector("#work-varea > :is(source, img)"),tbrand_logo=document.querySelector("#t-brand-logo"),formarea_head=document.querySelector("#form-area > h1"),formarea_quote=document.querySelector("#form-area > #quote");function setWarning(e,t){e.style.borderColor="red",e.value="",e.setAttribute("placeholder",t),e.addEventListener("focus",(function(){this.style.borderColor="#4E4FEB"}),{once:!0})}function isValidEmail(e){return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e)}function clearquote(){nameInput.value="",phoneInput.value="",emailInput.value="",reqInput.value=""}nameInput=document.getElementById("c-name"),phoneInput=document.getElementById("c-phone"),emailInput=document.getElementById("c-email"),reqInput=document.getElementById("creq"),sendButton=document.getElementById("send-btn"),sendButton.addEventListener("click",(()=>{if(phoneInput.value.length>10||10!==phoneInput.value.length)return void setWarning(phoneInput,"10 digits only");if(!isValidEmail(emailInput.value))return void setWarning(emailInput,"Invalid Email");if(nameInput.value.length>100)return void setWarning(nameInput,"Try shorter name");if(""===reqInput.value)return void setWarning(reqInput,"Requirement?");const e=new FormData;e.append("cname",nameInput.value),e.append("cphone",phoneInput.value),e.append("cemail",emailInput.value),e.append("creq",reqInput.value),clearquote(),fetch("/server/getform.php",{method:"POST",body:e}).then((e=>{1===e?alert("Thanks for your interest :)"):alert("Sorry :( we failed to get your request.\nKindly Try Again.")})).catch((e=>{}))}));