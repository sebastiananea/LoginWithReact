(this.webpackJsonpalkemy=this.webpackJsonpalkemy||[]).push([[0],{203:function(e,r,t){},204:function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n),s=t(21),c=t.n(s),o=t(36),i=t.n(o),l=t(70),d=t(14),u=t(25),m=t(26),j=(t(182),t(76)),b=t.n(j),p=window.localStorage,h=function(e){return b.a.post("http://challenge-react.alkemy.org/",e).then((function(e){console.log(e.data),p.setItem("Token",e.data.token)})).catch((function(e){return console.log("error"),!1})),!0},x=t(1);var O=function(){var e=u.a().shape({email:u.b().email("Correo invalido").required("Debes ingresar tu direcci\xf3n correo"),password:u.b().required("Debes ingresar la contrase\xf1a")});return Object(x.jsx)("div",{className:"container p-5",children:Object(x.jsx)("div",{className:"pt-5 row justify-content-center ",children:Object(x.jsxs)("div",{className:"col-6",children:[Object(x.jsx)("h3",{className:"text-center",children:"Bienvenido"}),Object(x.jsx)(d.c,{initialValues:{email:"",password:""},validationSchema:e,onSubmit:function(){var e=Object(l.a)(i.a.mark((function e(r,t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.resetForm,e.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:h(r)||(n({values:""}),m.b.error("Los datos no son validos para ingresar!",{position:m.b.POSITION.BOTTOM_CENTER}));case 4:case"end":return e.stop()}}),e)})));return function(r,t){return e.apply(this,arguments)}}(),children:function(e){var r=e.errors,t=e.touched;return Object(x.jsxs)(d.b,{className:"cont rounded",children:[Object(x.jsxs)("div",{className:" row form-group mb-3 text-center",children:[Object(x.jsx)(d.a,{name:"email",type:"email",placeholder:"Email"}),r.email&&t.email?Object(x.jsx)("div",{className:"text-danger",children:r.email}):null]}),Object(x.jsxs)("div",{className:"row form-group mb-3  text-center",children:[Object(x.jsx)(d.a,{name:"password",type:"password",placeholder:"Password"}),r.password&&t.password?Object(x.jsx)("div",{className:"text-danger",children:r.password}):null]}),Object(x.jsx)("button",{type:"submit",className:"btn btn-primary col-12 rounded",children:"Enviar"}),Object(x.jsx)(m.a,{})]})}})]})})})};var v=function(){return Object(x.jsx)(O,{})};t(202),t(203);c.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(v,{})}),document.getElementById("root"))}},[[204,1,2]]]);
//# sourceMappingURL=main.9fdee9ad.chunk.js.map