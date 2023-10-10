"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[887],{7887:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,o,a,i,s,d,p,c,l,x,u,f=t(2791),h=t(9434),g=t(4270),b=t(6916),m=function(n){return n.contacts.items},w=function(n){return n.contacts.isLoading},v=function(n){return n.contacts.error},y=(0,b.P1)([m,function(n){return n.filter.filter}],(function(n,e){return n.filter((function(n){return n.name.toLowerCase().includes(e.toLowerCase())}))})),Z=t(208),j=t(9439),k=t(5984),C=t(168),P=t(5867),z=P.ZP.input(r||(r=(0,C.Z)(["\n  width: 200px;\n  height: 30px;\n  border-radius: 8px;\n  color: grey;\n  padding-left: 10px;\n  border-color: #e7ecf2;\n  border-width: 1px;\n"]))),A=P.ZP.label(o||(o=(0,C.Z)(["\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  padding-left: 10px;\n  & ::placeholder {\n    font-size: 12px;\n  }\n"]))),L=P.ZP.form(a||(a=(0,C.Z)(["\n  display: flex;\n  gap: 20px;\n  flex-direction: column;\n  align-items: center;\n"]))),q=P.ZP.button(i||(i=(0,C.Z)(["\n  align-items: center;\n  appearance: none;\n  background-color: #e7ecf2;\n  border-radius: 4px;\n  border-width: 0;\n  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,\n    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n  box-sizing: border-box;\n  color: #36395a;\n  cursor: pointer;\n  display: inline-flex;\n  height: 48px;\n  justify-content: center;\n  line-height: 1;\n  list-style: none;\n  overflow: hidden;\n  padding-left: 16px;\n  padding-right: 16px;\n  position: relative;\n  text-align: left;\n  text-decoration: none;\n  transition: box-shadow 0.15s, transform 0.15s;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  white-space: nowrap;\n  will-change: box-shadow, transform;\n  font-size: 18px;\n  margin: 20px 0 20px 0;\n\n  &:focus {\n    box-shadow: #d6d6e7 0 0 0 1.5px inset, rgba(45, 35, 66, 0.4) 0 2px 4px,\n      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n  }\n\n  &:hover {\n    box-shadow: rgba(45, 35, 66, 0.4) 0 4px 8px,\n      rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n    transform: translateY(-2px);\n  }\n\n  &:active {\n    box-shadow: #d6d6e7 0 3px 7px inset;\n    transform: translateY(2px);\n  }\n"]))),N=t(184),S=function(){var n=(0,f.useState)(""),e=(0,j.Z)(n,2),t=e[0],r=e[1],o=(0,f.useState)(""),a=(0,j.Z)(o,2),i=a[0],s=a[1],d=(0,h.I0)(),p=(0,h.v9)(m),c=function(n){var e=n.currentTarget,t=e.name,o=e.value;"name"===t&&r(o),"number"===t&&s(o)},l=function(){r(""),s("")};return(0,N.jsxs)(L,{onSubmit:function(n){n.preventDefault(),function(n){var e=n.name;p.find((function(n){return n.name.toLowerCase()===e.toLowerCase()}))?alert("".concat(e," is already in contacts.")):d((0,Z.uK)({id:(0,k.x0)(),name:e,number:i}))}({id:(0,k.x0)(),name:t,number:i}),l()},children:[(0,N.jsxs)(A,{children:["Name",(0,N.jsx)(z,{type:"text",value:t,onChange:c,name:"name",placeholder:"Your name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' \\-][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),"Number",(0,N.jsx)(z,{type:"tel",name:"number",placeholder:"Phone number",value:i,onChange:c,pattern:"\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,N.jsx)(q,{type:"submit",children:"Add Contact"})]})},_=t(3430),F=P.ZP.ul(s||(s=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 50px 0 50px 0;\n  background-color: #ffffff;\n  margin: auto;\n  width: 350px;\n  border-radius: 8px;\n  gap: 15px;\n  margin-top: 5px;\n"]))),I=P.ZP.ul(d||(d=(0,C.Z)(["\n  display: flex;\n  gap: 15px;\n  align-items: center;\n  border: 1px solid grey;\n  box-shadow: 5px 5px 5px grey;\n  width: 100%;\n  padding: 20px;\n  justify-content: space-around;\n  border-radius: 8px;\n"]))),Y=P.ZP.button(p||(p=(0,C.Z)(["\n  background: #e7ecf2;\n  border-width: 0;\n  border-radius: 6px;\n  box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px,\n    rgba(45, 35, 66, 0.3) 0 7px 13px -3px, #d6d6e7 0 -3px 0 inset;\n  box-sizing: border-box;\n  color: #36395a;\n  cursor: pointer;\n  display: inline-block;\n  font-family: nunito, roboto, proxima-nova, 'proxima nova', sans-serif;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 16px;\n  min-height: 40px;\n  outline: 0;\n  padding: 12px 14px;\n  text-align: center;\n  text-rendering: geometricprecision;\n  text-transform: none;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  vertical-align: middle;\n\n  &:hover,\n  &:active {\n    background-color: initial;\n    background-position: 0 0;\n    color: #ff4742;\n    opacity: 0.5;\n  }\n"]))),D=(0,N.jsx)(_.g4,{height:"80",width:"80",radius:"9",color:"#a7b1ba",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0}),E=function(){var n=(0,h.I0)();(0,f.useEffect)((function(){n((0,Z.yF)())}),[n]);var e=(0,h.v9)(w),t=(0,h.v9)(v),r=(0,h.v9)(y);return(0,N.jsxs)(F,{children:[e&&D,t&&(0,N.jsx)("b",{children:t}),!e&&r.map((function(e){return(0,N.jsxs)(I,{children:[e.name,": ",e.number,(0,N.jsx)(Y,{type:"button",onClick:function(){n((0,Z.GK)(e.id))},children:"Delete"})]},e.id)}))]})},J=P.ZP.div(c||(c=(0,C.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #ffffff;\n  width: 700px;\n  margin: auto;\n  margin-top: 50px;\n  padding-top: 50px;\n"]))),K=P.ZP.h1(l||(l=(0,C.Z)(["\n  margin-bottom: 20px;\n"]))),R=P.ZP.h2(x||(x=(0,C.Z)(["\n  margin: 20px 0 20px 0;\n"]))),B=(0,P.vJ)(u||(u=(0,C.Z)(["\nbody {\n  background-color: #e7ecf2;\n  font-family: 'Roboto', sans-serif;\n  font-weight: 400;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\np {\n  margin: 0;\n}\n\nul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\nbutton{\n  padding: 0;\n}\n"])));function G(){var n=(0,h.I0)(),e=(0,h.v9)(w);return(0,f.useEffect)((function(){n((0,Z.yF)())}),[n]),(0,N.jsxs)(J,{children:[(0,N.jsx)(g.q,{children:(0,N.jsx)("title",{children:"Contacts"})}),(0,N.jsx)(K,{children:"Phonebook"}),(0,N.jsx)(S,{}),(0,N.jsx)(R,{children:"Contacts"}),(0,N.jsx)("div",{children:e&&"Request in progress..."}),(0,N.jsx)(E,{}),(0,N.jsx)(B,{})]})}}}]);
//# sourceMappingURL=887.83c6774d.chunk.js.map