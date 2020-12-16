(()=>{"use strict";function e(e,t){t in e||(e[t]=[],function(e){let t=document.querySelector("#proSelect"),i=document.createElement("option");i.setAttribute("id",`selector${e}`),i.setAttribute("value",`${e}`),i.textContent=`${e}`,t.appendChild(i)}(t))}function t(e){let t=document.querySelector("#proSelect").value,i=document.querySelector("#listDisplay"),o=0;for(;i.firstChild;)i.removeChild(i.firstChild);for(let i=0;i<e[t].length;i++)0==e[t][i].edit?(l(i),1==e[t][i].expanded&&(r(i),o+=1)):(n(i),o+=1);function l(l){i.style.cssText=`grid-template-rows: repeat(${l+1+o}, 22px)`;let r=document.createElement("label");r.setAttribute("id",`titleNo${l+1+o}`),r.setAttribute("class","titleDis"),r.textContent=e[t][l].title,e[t][l].checked?r.style.textDecoration="line-through":r.style.textDecoration="none",r.style.gridArea=`${l+1+o}/1/${l+1+o}/2`;let n=document.createElement("label");n.setAttribute("id",`dueDateNo${l+1+o}`),n.setAttribute("class","dateDis"),n.textContent=e[t][l].dueDate,e[t][l].checked?n.style.textDecoration="line-through":n.style.textDecoration="none",n.style.gridArea=`${l+1+o}/2/${l+1+o}/3`;let c=document.createElement("button");c.setAttribute("id",`expandNo${l+1+o}`),c.setAttribute("class","expandDis"),e[t][l].expandedVal?c.textContent="/\\":c.textContent="\\/",c.style.gridArea=`${l+1+o}/3/${l+1+o}/4`;let d=document.createElement("button");d.setAttribute("id",`deleteNo${l+1+o}`),d.setAttribute("class","deleteDis"),d.textContent="Del",d.style.gridArea=`${l+1+o}/4/${l+1+o}/5`;let a=document.createElement("button");a.setAttribute("id",`priorityNo${l+1+o}`),a.setAttribute("class","priorityDis"),a.style.gridArea=`${l+1+o}/5/${l+1+o}/6`,a.style.backgroundColor=`${e[t][l].priority}`;let u=document.createElement("input");u.setAttribute("type","checkbox"),u.setAttribute("id",`checkNo${l+1+o}`),u.setAttribute("class","checkDis"),e[t][l].checked?u.checked=!0:u.checked=!1,u.style.gridArea=`${l+1+o}/6/${l+1+o}/7`,i.appendChild(r),i.appendChild(n),i.appendChild(c),i.appendChild(d),i.appendChild(a),i.appendChild(u)}function r(l){let r=document.createElement("label");r.setAttribute("id",`descripLabelNo${l+2+o}`),r.setAttribute("class","descripLabel"),r.textContent=e[t][l].description,e[t][l].checked?r.style.textDecoration="line-through":r.style.textDecoration="none",r.style.gridArea=`${l+2+o}/1/${l+2+o}/2`;let n=document.createElement("label");n.setAttribute("id",`proNameLabelNo${l+2+o}`),n.setAttribute("class","proNameLabel"),n.textContent=e[t][l].proName,e[t][l].checked?n.style.textDecoration="line-through":n.style.textDecoration="none",n.style.gridArea=`${l+2+o}/2/${l+2+o}/3`;let c=document.createElement("button");c.setAttribute("id",`editButtonNo${l+2+o}`),c.setAttribute("class","editButton"),c.textContent="Edit",c.style.gridArea=`${l+2+o}/4/${l+2+o}/5`,i.appendChild(r),i.appendChild(n),i.appendChild(c)}function n(l){i.style.cssText=`grid-template-rows: repeat(${l+1+o}, 22px)`;let r=document.createElement("input");r.setAttribute("id",`input1No${l+1+o}`),r.setAttribute("class","editInputTitle"),r.value=e[t][l].title,r.style.gridArea=`${l+1+o}/1/${l+1+o}/2`;let n=document.createElement("input");n.setAttribute("id",`input2No${l+1+o}`),n.setAttribute("class","editInputDue"),n.value=e[t][l].dueDate,n.style.gridArea=`${l+1+o}/2/${l+1+o}/3`;let c=document.createElement("button");c.setAttribute("id",`editPriorityNo${l+1+o}`),c.setAttribute("class","editPriorityDis"),c.style.gridArea=`${l+1+o}/5/${l+1+o}/6`,c.style.backgroundColor=`${e[t][l].priority}`;let d=document.createElement("input");d.setAttribute("id",`input3No${l+2+o}`),d.setAttribute("class","editInputDescrip"),d.value=e[t][l].description,d.style.gridArea=`${l+2+o}/1/${l+2+o}/2`;let a=document.createElement("input");a.setAttribute("id",`input4No${l+2+o}`),a.setAttribute("class","editInputProName"),a.value=e[t][l].proName,a.style.gridArea=`${l+2+o}/2/${l+2+o}/3`;let u=document.createElement("button");u.setAttribute("id",`saveButtonNo${l+2+o}`),u.setAttribute("class","saveButtonDis"),u.textContent="Save",u.style.gridArea=`${l+2+o}/4/${l+2+o}/5`,i.appendChild(r),i.appendChild(n),i.appendChild(c),i.appendChild(d),i.appendChild(a),i.appendChild(u)}}let i={main:[]};function o({title:e,dueDate:t,description:i,proName:o,priority:l,checked:r}){this.title=e,this.dueDate=t,this.description=i,this.proName=o,this.priority=l,this.checked=r,this.expanded=!1,this.edit=!1}o.prototype.prioritySwitch=function(){switch(this.priority){case"yellow":this.priority="orange";break;case"orange":this.priority="red";break;case"red":this.priority="yellow";break;default:console.log(this.priority)}},o.prototype.expandedSwitch=function(){this.expanded?this.expanded=!1:this.expanded=!0},o.prototype.checkedSwitch=function(){this.checked?this.checked=!1:this.checked=!0},o.prototype.editSwitch=function(){this.edit?this.edit=!1:this.edit=!0},function(){function l(){!function(){let e=document.querySelector("#proSelect").value,o=0;for(let r=0;r<i[e].length;r++)0==i[e][r].edit?document.querySelector(`#expandNo${r+1+o}`).addEventListener("click",(o=>{i[e][r].expandedSwitch(),t(i),l()})):1==i[e][r].edit&&console.log("edit is true expand"),1==i[e][r].expanded&&(o+=1)}(),function(){let e=document.querySelector("#proSelect").value,o=0;for(let r=0;r<i[e].length;r++)0==i[e][r].edit?document.querySelector(`#priorityNo${r+1+o}`).addEventListener("click",(o=>{i[e][r].prioritySwitch(),window.localStorage.clear(),window.localStorage.setItem("save",JSON.stringify(i)),t(i),l()})):1==i[e][r].edit&&console.log("edit is true priorityNormal"),1==i[e][r].expanded&&(o+=1)}(),function(){let e=document.querySelector("#proSelect").value,o=0;for(let r=0;r<i[e].length;r++)0==i[e][r].edit?document.querySelector(`#checkNo${r+1+o}`).addEventListener("click",(o=>{i[e][r].checkedSwitch(),window.localStorage.clear(),window.localStorage.setItem("save",JSON.stringify(i)),t(i),l()})):1==i[e][r].edit&&console.log("edit is true toggle"),1==i[e][r].expanded&&(o+=1)}(),function(){let e=document.querySelector("#proSelect").value,t=0;for(let o=0;o<i[e].length;o++)0==i[e][o].edit?document.querySelector(`#deleteNo${o+1+t}`).addEventListener("click",(t=>{r(e,o)})):1==i[e][o].edit&&console.log("edit is true delete"),1==i[e][o].expanded&&(t+=1)}(),function(){let e=document.querySelector("#proSelect").value,o=0;for(let r=0;r<i[e].length;r++)0==i[e][r].edit&&1==i[e][r].expanded?(document.querySelector(`#editButtonNo${r+2+o}`).addEventListener("click",(o=>{i[e][r].editSwitch(),window.localStorage.clear(),window.localStorage.setItem("save",JSON.stringify(i)),t(i),l()})),o+=1):1==i[e][r].edit&&1==i[e][r].expanded&&(o+=1)}(),function(){let o=document.querySelector("#proSelect").value,n=0,c=!1,d=[];for(let r=0;r<i[o].length;r++){if(1==i[o][r].edit){let u=document.querySelector(`#saveButtonNo${r+2+n}`),s=document.querySelector(`#input1No${r+1+n}`),p=document.querySelector(`#input2No${r+1+n}`),h=document.querySelector(`#input3No${r+2+n}`),y=document.querySelector(`#input4No${r+2+n}`);u.addEventListener("click",(n=>{i[o][r].title=s.value,i[o][r].dueDate=p.value,i[o][r].description=h.value,i[o][r].proNameVal!=y.value?(i[o][r].proName=y.value,i[o][r].editSwitch(),i[o][r].expandedSwitch(),e(i,y.value),i[y.value].push(i[o][r]),d.push(r),1==c&&a(d),c=!1):(i[o][r].editSwitch(),window.localStorage.clear(),window.localStorage.setItem("save",JSON.stringify(i)),t(i),l())})),n+=1}else 1==i[o][r].expanded&&(n+=1);r+1==i[o].length&&(c=!0)}function a(e){for(let t=0;t<e.length;t++)console.log("dubbeltest"),r(o,e[t]),console.log(i)}}()}function r(e,o){if(i[e].splice(o,1),0==i[e].length&&"main"!=e){let t=document.querySelector("#proSelect"),o=document.querySelector(`#selector${e}`);t.removeChild(o),delete i[e]}window.localStorage.clear(),window.localStorage.setItem("save",JSON.stringify(i)),t(i),l()}document.querySelector("#makeButton").addEventListener("click",(r=>{let n=function(){let e=[],t=document.querySelector("#titleInput");e.push(t.value);let i=document.querySelector("#dueInput");e.push(i.value);let o=document.querySelector("#descrInput");e.push(o.value);let l=document.querySelector("#proNameInput");e.push(l.value);let r=document.querySelector("#priorityInput");return e.push(r.value),e}();const c=new o({title:n[0],dueDate:n[1],description:n[2],proName:n[3],priority:n[4],checked:!1});console.log(c),e(i,n[3]),i[n[3]].push(c),window.localStorage.clear(),window.localStorage.setItem("save",JSON.stringify(i)),t(i),l()})),document.querySelector("#proSelect").addEventListener("click",(e=>{t(i),l()})),document.querySelector("#sync").addEventListener("click",(r=>{if(window.localStorage.getItem("save")){let r=window.localStorage.getItem("save");!function(t){for(let l in t)if(0!=t[l].length)for(let r=0;r<t[l].length;r++){let n=t[l][r].title,c=t[l][r].dueDate,d=t[l][r].description,a=t[l][r].proName;const u=new o({title:n,dueDate:c,description:d,proName:a,priority:t[l][r].priority,checked:t[l][r].checked});e(i,a),i[l].push(u)}}(JSON.parse(r)),t(i),l()}}))}()})();