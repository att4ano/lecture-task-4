(this["webpackJsonpgenerator-simulation"]=this["webpackJsonpgenerator-simulation"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var s=a(1),r=a(3),n=a.n(r),d=a(4),l=a(0);var c=()=>{const[e,t]=Object(s.useState)(1),[a,r]=Object(s.useState)(1),[n,c]=Object(s.useState)(1);return Object(s.useEffect)((()=>{const t=document.getElementById("generatorChart").getContext("2d"),s=new d.a(t,{type:"line",data:{labels:[],datasets:[{label:"\u042d\u0414\u0421",borderColor:"rgb(255, 99, 132)",borderWidth:2,data:[]},{label:"\u0418\u043d\u0434\u0443\u043a\u0446\u0438\u043e\u043d\u043d\u044b\u0439 \u0442\u043e\u043a",borderColor:"rgb(54, 162, 235)",borderWidth:2,data:[]}]},options:{scales:{x:{title:{display:!0,text:"\u0412\u0440\u0435\u043c\u044f"}},y:{title:{display:!0,text:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435"}}}}});return(()=>{const t=[],r=[],d=[];for(let s=0;s<=10;s+=.01){t.push(s.toFixed(2));const l=2*Math.PI*a,c=e*l*n*Math.sin(l*s);r.push(c.toFixed(2));const i=c/n;d.push(i.toFixed(2))}s.data.labels=t,s.data.datasets[0].data=r,s.data.datasets[1].data=d,s.update()})(),()=>{s.destroy()}}),[e,a,n]),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:Object(l.jsxs)("label",{children:["\u0412\u0435\u043b\u0438\u0447\u0438\u043d\u0430 \u043c\u0430\u0433\u043d\u0438\u0442\u043d\u043e\u0433\u043e \u043f\u043e\u043b\u044f:",Object(l.jsx)("input",{type:"number",value:e,onChange:e=>t(parseFloat(e.target.value))})]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("label",{children:["\u0427\u0430\u0441\u0442\u043e\u0442\u0430 \u0432\u0440\u0430\u0449\u0435\u043d\u0438\u044f:",Object(l.jsx)("input",{type:"number",value:a,onChange:e=>r(parseFloat(e.target.value))})]})}),Object(l.jsx)("div",{children:Object(l.jsxs)("label",{children:["\u0421\u043e\u043f\u0440\u043e\u0442\u0438\u0432\u043b\u0435\u043d\u0438\u0435 \u043a\u043e\u043d\u0442\u0443\u0440\u0430:",Object(l.jsx)("input",{type:"number",value:n,onChange:e=>c(parseFloat(e.target.value))})]})}),Object(l.jsx)("canvas",{id:"generatorChart",width:"800",height:"400"})]})};var i=()=>Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"\u041c\u043e\u0434\u0435\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u0433\u0435\u043d\u0435\u0440\u0430\u0442\u043e\u0440\u0430"}),Object(l.jsx)(c,{})]});n.a.render(Object(l.jsx)(i,{}),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.53a202a4.chunk.js.map