(function(e){function t(t){for(var r,c,i=t[0],s=t[1],a=t[2],p=0,d=[];p<i.length;p++)c=i[p],Object.prototype.hasOwnProperty.call(l,c)&&l[c]&&d.push(l[c][0]),l[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,a||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==l[s]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},l={app:0},o=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var a=0;a<i.length;a++)t(i[a]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"3bb4":function(e,t,n){"use strict";n("ad7f")},"54fc":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function l(e,t,n,l,o,c){var i=Object(r["j"])("SignupForm");return Object(r["h"])(),Object(r["c"])(i)}var o=Object(r["f"])("label",null,"Email:",-1),c=Object(r["f"])("label",null,"Password:",-1),i={key:0,class:"error"},s=Object(r["f"])("label",null,"Role:",-1),a=Object(r["f"])("option",{value:"frontendDev"},"Frontend Developer",-1),u=Object(r["f"])("option",{value:"uiDesigner"},"UI Designer",-1),p=Object(r["f"])("option",{value:"backendDev"},"Backend Developer",-1),d=Object(r["f"])("option",{value:"dataAnalyst"},"Data Analyst",-1),b=[a,u,p,d],f=Object(r["f"])("label",null,[Object(r["g"])("Skills: (Hit "),Object(r["f"])("b",null,"spacebar"),Object(r["g"])(" to add skill)")],-1),O=["onClick"],j={class:"terms"},m=Object(r["f"])("label",null,"Accept Terms & Conditions",-1),h=Object(r["f"])("div",{class:"submit"},[Object(r["f"])("button",null,"Create Account")],-1);function k(e,t,n,l,a,u){return Object(r["h"])(),Object(r["e"])("form",{onSubmit:t[6]||(t[6]=Object(r["p"])((function(){return u.handleSubmit&&u.handleSubmit.apply(u,arguments)}),["prevent"])),onkeydown:"return event.key !='Enter';"},[o,Object(r["o"])(Object(r["f"])("input",{type:"email",required:"","onUpdate:modelValue":t[0]||(t[0]=function(e){return a.email=e})},null,512),[[r["n"],a.email]]),c,Object(r["o"])(Object(r["f"])("input",{type:"password",required:"","onUpdate:modelValue":t[1]||(t[1]=function(e){return a.password=e})},null,512),[[r["n"],a.password]]),a.passwordError?(Object(r["h"])(),Object(r["e"])("div",i,Object(r["k"])(a.passwordError),1)):Object(r["d"])("",!0),s,Object(r["o"])(Object(r["f"])("select",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return a.role=e}),required:""},b,512),[[r["m"],a.role]]),f,Object(r["o"])(Object(r["f"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(e){return a.tempSkill=e}),onKeyup:t[4]||(t[4]=function(){return u.addSkill&&u.addSkill.apply(u,arguments)})},null,544),[[r["n"],a.tempSkill]]),(Object(r["h"])(!0),Object(r["e"])(r["a"],null,Object(r["i"])(a.skills,(function(e){return Object(r["h"])(),Object(r["e"])("div",{class:"pill",key:e},[Object(r["f"])("span",{onClick:function(t){return u.deleteSkill(e)}},Object(r["k"])(e),9,O)])})),128)),Object(r["f"])("div",j,[Object(r["o"])(Object(r["f"])("input",{type:"checkbox",reuired:"","onUpdate:modelValue":t[5]||(t[5]=function(e){return a.terms=e})},null,512),[[r["l"],a.terms]]),m]),h],32)}n("caad"),n("2532"),n("4de4"),n("d3b7");var v={data:function(){return{email:"",password:"",role:"frontendDev",terms:!1,tempSkill:"",skills:[],passwordError:""}},methods:{addSkill:function(e){" "===e.key&&this.tempSkill&&(this.skills.includes(this.tempSkill)||this.skills.push(this.tempSkill),this.tempSkill="")},deleteSkill:function(e){this.skills=this.skills.filter((function(t){return e!==t}))},handleSubmit:function(){this.passwordError=this.password.length>5?"":"Password must be at least 6 characters long",this.passwordError||(console.log("email: ".concat(this.email)),console.log("password: ".concat(this.password)),console.log("role: ".concat(this.role)),console.log("skills: ".concat(this.skills)),console.log("terms accepted: ".concat(this.terms)))}}},y=(n("3bb4"),n("6b0d")),w=n.n(y);const g=w()(v,[["render",k]]);var S=g,P={name:"App",components:{SignupForm:S},data:function(){return{}},methods:{}};n("ca75");const x=w()(P,[["render",l]]);var D=x;Object(r["b"])(D).mount("#app")},ad7f:function(e,t,n){},ca75:function(e,t,n){"use strict";n("54fc")}});
//# sourceMappingURL=app.1d29beb1.js.map