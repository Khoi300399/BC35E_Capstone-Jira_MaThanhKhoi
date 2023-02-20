"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[295],{3090:function(e,n,r){var t=r(1413),s=r(4925),a=(r(2791),r(1087)),i=r(184),o=["children","onClick","className","isLoading"];n.Z=function(e){var n=e.children,r=e.onClick,l=e.className,c=void 0===l?"":l,d=e.isLoading,u=void 0!==d&&d,x=(0,s.Z)(e,o),h=u?(0,i.jsx)("div",{className:"w-8 h-8 rounded-full border-4 border-white border-t-transparent border-b-transparent animate-spin"}):n,m="text-base font-semibold rounded-xl flex items-center justify-center";switch(x.kind){case"primary":m+=" bg-gradient-to-r from-[#00a7b4] to-[#a4d96c] text-white p-4 min-h-[56px]";break;case"secondary":m+=" bg-secondary bg-opacity-20 text-secondary p-4 min-h-[56px]";break;case"cancel":m+=" bg-stock hover:bg-gray-100 transition-all text-text3 text-base font-medium font-mono px-4 py-2 rounded-lg";break;case"success":m+=" bg-blue-500 hover:bg-opacity-80  text-white px-4 py-2 font-mono";break;case"delete":m+=" bg-red-500 hover:bg-opacity-80 text-white px-4 py-2 font-mono"}return x.href?(0,i.jsx)(a.rU,{to:x.href,className:m+" "+c,children:n}):(0,i.jsx)("button",(0,t.Z)((0,t.Z)({onClick:r,className:"cursor-pointer ".concat(m+" "+(u?"opacity-50 pointer-events-none":"")," ").concat(c)},x),{},{children:h}))}},8336:function(e,n,r){r(2791);var t=r(184);n.Z=function(e){var n=e.onChange;return(0,t.jsxs)("div",{className:"bg-gray-100 rounded-full shadow-[10px_10px_20px_rgba(218,_213,_213,_0.15)] p-2 w-full  flex items-center",children:[(0,t.jsx)("div",{className:"flex-1 px-5",children:(0,t.jsx)("input",{onChange:n,type:"text",placeholder:"Search...",className:"bg-transparent w-full text-sm text-text1 placeholder:text-text4 "})}),(0,t.jsx)("div",{className:"w-[72px] rounded-full bg-secondary bg-opacity-20 text-secondary h-10 flex items-center justify-center flex-shrink-0",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})})})]})}},4307:function(e,n,r){var t=r(1413),s=r(9439),a=r(4925),i=(r(2791),r(5705)),o=r(7470),l=r(5242),c=r(184),d=["children","className"];n.Z=(0,o.withErrorBoundary)((function(e){var n=e.children,r=e.className,o=void 0===r?"bg-bgInput":r,l=(0,a.Z)(e,d),u=(0,i.U$)(l),x=(0,s.Z)(u,2),h=x[0],m=x[1];return(0,c.jsxs)("div",{className:"relative ",children:[(0,c.jsx)("input",(0,t.Z)((0,t.Z)({className:"w-full px-6 py-4 border  rounded-xl text-sm font-medium placeholder:text-text4 dark:placeholder:text-text-2 ".concat(o," ").concat(m.touched&&m.error?"border-error text-error":"border-strock text-text1 dark:border-darkStoke"," ").concat(n?"pr-14":"")},l),h)),m.touched&&m.error?(0,c.jsx)("span",{className:"absolute bottom-0 left-1 translate-y-6 text-sm text-error font-medium pointer-events-none error-input",children:m.error}):null,n&&(0,c.jsx)("span",{className:" absolute right-6 top-2/4 -translate-y-2/4 cursor-pointer select-none",children:n})]})}),{FallbackComponent:l.Z})},9702:function(e,n,r){r(2791);var t=r(184);n.Z=function(e){var n=e.children,r=e.htmlFor,s=void 0===r?"":r,a=e.onClick;return(0,t.jsx)("label",{onClick:a,htmlFor:s,className:"text-sm text-left font-medium  text-text2 dark:text-text3 cursor-pointer inline-block mt-5",children:n})}},8902:function(e,n,r){r.d(n,{Z:function(){return l}});var t=r(2791),s=r(4164),a=r(184);var i=function(){var e=document.createElement("div");return e.id="portal-wrapper",e}(),o=function(e){var n=e.containerClassName,r=void 0===n?"":n,o=e.bodyClassName,l=void 0===o?"":o,c=e.containerStyle,d=void 0===c?{}:c,u=e.bodyStyle,x=void 0===u?{}:u,h=e.onClose,m=e.visible,p=void 0!==m&&m,f=e.children;(0,t.useEffect)((function(){document.body.appendChild(i)}),[]);var v=(0,a.jsxs)("div",{className:"fixed inset-0 z-[99]  ".concat(p?"":"opacity-0 invisible"," ").concat(r),style:d,children:[(0,a.jsx)("div",{className:"overlay absolute inset-0 bg-black bg-opacity-30 ",onClick:h}),(0,a.jsx)("div",{className:"content relative z-10 ".concat(l),style:x,children:f})]});return(0,s.createPortal)(v,i)},l=function(e){var n=e.visible,r=e.children,t=e.onClose;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(o,{visible:n,onClose:t,containerClassName:"flex items-center justify-center",children:r})})}},5242:function(e,n,r){r(2791);var t=r(184);n.Z=function(e){return(0,t.jsx)("div",{className:"text-red-500 bg-red-100 p-5 rounded-lg",children:"Look like component is error"})}},4256:function(e,n,r){r(2791);var t=r(184);n.Z=function(e){var n=e.children;return(0,t.jsx)("div",{className:"flex flex-col gap-y-2 lg:gap-y-3 mb-4 lg:mb-5",children:n})}},4333:function(e,n,r){r(2791);var t=r(184);n.Z=function(e){var n=e.onClick,r=void 0===n?function(){}:n;return(0,t.jsx)("span",{className:"flex items-center justify-center w-10 h-10 borderborder-transparent rounded cursor-pointer text-error hover:bg-error hover:bg-opacity-20 transition-all ease-linear",onClick:r,children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"})})})}},645:function(e,n,r){r(2791);var t=r(184);n.Z=function(e){var n=e.onClick,r=void 0===n?function(){}:n;return(0,t.jsx)("span",{className:"flex items-center justify-center w-10 h-10 border border-transparent text-blue-600 hover:bg-blue-200 transition-all ease-linear rounded cursor-pointer select-none",onClick:r(),children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"w-5 h-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"2",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"})})})}},5962:function(e,n,r){r(2791);var t=r(184);n.Z=function(){return(0,t.jsx)("span",{className:"text-red-500",children:(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",className:"w-6 h-6",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})})})}},8263:function(e,n,r){r(2791);var t=r(184);n.Z=function(e){var n=e.open,r=void 0!==n&&n,s=e.onClick,a=void 0===s?function(){}:s;return r?(0,t.jsx)("span",{children:(0,t.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:a,children:[(0,t.jsx)("path",{d:"M3 12C3 12 6.27273 5 12 5C17.7273 5 21 12 21 12C21 12 17.7273 19 12 19C6.27273 19 3 12 3 12Z",stroke:"#A2A2A8",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z",stroke:"#A2A2A8",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})]})}):(0,t.jsx)("span",{children:(0,t.jsxs)("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",onClick:a,children:[(0,t.jsx)("path",{d:"M13.7345 13.855C13.5098 14.1129 13.2388 14.3198 12.9378 14.4632C12.6367 14.6067 12.3116 14.6839 11.9821 14.6901C11.6525 14.6963 11.3251 14.6315 11.0195 14.4994C10.7139 14.3674 10.4362 14.1709 10.2031 13.9216C9.97007 13.6724 9.78632 13.3755 9.66287 13.0486C9.53942 12.7217 9.47879 12.3716 9.48461 12.0192C9.49042 11.6667 9.56256 11.3191 9.69672 10.9971C9.83087 10.6751 10.0243 10.3853 10.2655 10.145M16.86 17.1975C15.4614 18.3376 13.7584 18.9693 12 19C6.27273 19 3 12 3 12C4.01773 9.97167 5.42929 8.19955 7.14 6.80252L16.86 17.1975ZM10.2818 5.21002C10.845 5.06904 11.4216 4.99857 12 5.00002C17.7273 5.00002 21 12 21 12C20.5033 12.9937 19.911 13.9292 19.2327 14.7913L10.2818 5.21002Z",stroke:"#A2A2A8",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M3 2.5L21 21",stroke:"#A2A2A8",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})]})})}},5514:function(e,n,r){r.d(n,{Z:function(){return a}});var t=r(9439),s=r(2791);function a(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=(0,s.useState)(e),r=(0,t.Z)(n,2),a=r[0],i=r[1],o=function(){i(!a)};return{value:a,handleToggleValue:o}}},1295:function(e,n,r){r.r(n);var t=r(4165),s=r(5861),a=r(9439),i=r(2791),o=r(5705),l=r(2797),c=r(4333),d=r(645),u=r(1087),x=r(8336),h=r(7381),m=r(9434),p=r(5265),f=r(3090),v=r(5962),j=r(8902),b=r(4256),w=r(9702),g=r(4307),k=r(8263),y=r(5514),N=r(8964),Z=r(184);n.default=function(e){var n=/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,r=(0,y.Z)(),C=r.value,L=r.handleToggleValue,S=(0,m.I0)(),W=(0,h.pm)().add,A=(0,i.useState)(""),F=(0,a.Z)(A,2),M=F[0],P=F[1],_=(0,m.v9)((function(e){return e.userReducer})).userAll,B=(0,i.useState)(!1),I=(0,a.Z)(B,2),z=I[0],E=I[1],U=(0,i.useState)(!1),V=(0,a.Z)(U,2),q=V[0],D=V[1],H=(0,i.useState)(!1),R=(0,a.Z)(H,2),T=R[0],X=R[1],J=(0,i.useState)([]),O=(0,a.Z)(J,2),Y=O[0],$=O[1];(0,i.useEffect)((function(){S((0,p.XF)())}),[]);var G=(0,i.useState)(1),K=(0,a.Z)(G,2),Q=K[0],ee=K[1],ne=(0,i.useState)([]),re=(0,a.Z)(ne,2),te=re[0],se=re[1];(0,i.useEffect)((function(){se(_?null===_||void 0===_?void 0:_.slice(0,6):[])}),[_]);var ae;return(0,Z.jsxs)(Z.Fragment,{children:[z&&(0,Z.jsx)(j.Z,{visible:z,onClose:function(){E(!1)},children:T?(0,Z.jsx)("div",{className:"w-8 h-8 rounded-full border-4 border-blue-300 border-t-transparent animate-spin"}):(0,Z.jsx)(Z.Fragment,{children:Y.map((function(e){var n=e.name,r=e.userId;return(0,Z.jsxs)("div",{className:"relative bg-white max-w-[500px] w-[400px] max-h-[350px]  overflow-hidden rounded-lg shadow-sdSecondary",children:[(0,Z.jsxs)("div",{className:"flex gap-x-2 p-6",children:[(0,Z.jsx)(v.Z,{}),(0,Z.jsx)("div",{className:"flex-1",children:(0,Z.jsxs)("h3",{className:"text-xl font-mono font-semibold",children:["Delete ",n,"?"]})})]}),(0,Z.jsxs)("div",{className:"text-sm text-text2 leading-6 px-6",children:[(0,Z.jsx)("p",{className:"mb-3",children:"You're about to permanently delete this user, its comments and attachments, and all of its data."}),(0,Z.jsx)("p",{children:"If you're not sure, you can resolve or close this issue instead."})]}),(0,Z.jsxs)("div",{className:"flex items-start justify-end gap-x-3 px-6 py-5",children:[(0,Z.jsx)(f.Z,{kind:"cancel",type:"button",onClick:function(){E(!1)},children:"Cancel"}),(0,Z.jsx)(f.Z,{kind:"delete",type:"button",onClick:(0,s.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return X(!0),e.next=3,S((0,p.h8)(r));case 3:return e.next=5,S((0,p.XF)());case 5:X(!1),E(!1),W({type:"success",message:"Delete ".concat(n," successfully"),duration:3e3,position:"topRight"});case 8:case"end":return e.stop()}}),e)}))),children:"Delete"})]})]},r)}))})}),q&&Y.map((function(e){e.avatar;var r=e.name,a=e.userId,i=e.email,c=e.phoneNumber,d={id:a,email:i,name:r,phoneNumber:c,passWord:"",confirmPassWord:""};return(0,Z.jsx)(j.Z,{visible:q,onClose:function(){D(!1)},children:T?(0,Z.jsx)("div",{className:"w-8 h-8 rounded-full border-4 border-blue-300 border-t-transparent animate-spin"}):(0,Z.jsx)(o.J9,{initialValues:d,validationSchema:l.Ry().shape({name:l.Z_().required("name cannot be blank !"),email:l.Z_().required("email cannot be blank !").email("email is invalid !"),phoneNumber:l.Z_().required("phone number cannot be blank !").matches(n,"Phone number is not valid"),passWord:l.Z_().required("pasword cannot be blank !").min(8,"Password must be 8 character "),confirmPassWord:l.Z_().required("password confirm cannot be blank !").oneOf([l.iH("passWord"),null],"Both password need to be the same")}),onSubmit:function(){var e=(0,s.Z)((0,t.Z)().mark((function e(n,r){var a,i,o,l,c,d;return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=n.id,i=n.passWord,o=n.email,l=n.name,c=n.phoneNumber,d=r.setSubmitting,setTimeout((0,s.Z)((0,t.Z)().mark((function e(){return(0,t.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,S((0,p.H6)({id:a,passWord:i,email:o,name:l,phoneNumber:c}));case 3:return e.next=5,S((0,p.XF)());case 5:D(!1),W({type:"success",message:"Update user successfully",duration:3e3,position:"topCenter"});case 7:case"end":return e.stop()}}),e)}))));case 3:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),children:function(e){var n=e.isSubmitting;e.errors,e.setFieldValue;return(0,Z.jsx)(o.l0,{children:(0,Z.jsxs)("div",{className:"relative bg-white min-w-[750px] max-h-[650px] overflow-x-hidden overflow-y-auto rounded-lg shadow-sdSecondary scrollbar-none",children:[(0,Z.jsxs)("div",{className:"flex items-start justify-between mx-5 mt-5",children:[(0,Z.jsxs)("div",{className:" flex items-center gap-x-3",children:[(0,Z.jsx)("div",{className:"text-text2 font-medium",children:"ID :"}),(0,Z.jsx)("span",{className:"flex items-center justify-center min-w-[45px] h-[45px] rounded-lg shadow-sdThirty text-text2 font-semibold select-none",children:a})]}),(0,Z.jsx)("span",{className:"text-text2 hover:text-error select-none cursor-pointer",onClick:function(){D(!1)},children:(0,Z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,Z.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})})})]}),(0,Z.jsx)("div",{className:"bg-white rounded-xl py-10 px-[66px]",children:(0,Z.jsxs)("div",{className:"text-center",children:[(0,Z.jsx)("h1",{className:"py-4 px-14  bg-text4 bg-opacity-5 rounded-xl font-bold text-[25px] inline-block",children:"Edit User \ud83d\udcdd"}),(0,Z.jsxs)(b.Z,{children:[(0,Z.jsx)(w.Z,{htmlFor:"name",children:"Name"}),(0,Z.jsx)(g.Z,{id:"name",name:"name",type:"text",placeholder:r})]}),(0,Z.jsxs)(b.Z,{children:[(0,Z.jsx)(w.Z,{htmlFor:"email",children:"Email"}),(0,Z.jsx)(g.Z,{id:"email",name:"email",type:"text",placeholder:i})]}),(0,Z.jsxs)(b.Z,{children:[(0,Z.jsx)(w.Z,{htmlFor:"phoneNumber",children:"Phone Number"}),(0,Z.jsx)(g.Z,{id:"phoneNumber",name:"phoneNumber",type:"text",placeholder:c})]}),(0,Z.jsxs)(b.Z,{children:[(0,Z.jsx)(w.Z,{htmlFor:"passWord",children:"Password"}),(0,Z.jsx)(g.Z,{id:"passWord",name:"passWord",type:C?"text":"password",placeholder:"Please enter your password ...",children:(0,Z.jsx)(k.Z,{open:C,onClick:L})})]}),(0,Z.jsxs)(b.Z,{children:[(0,Z.jsx)(w.Z,{htmlFor:"confirmPassWord",children:"Password confirm"}),(0,Z.jsx)(g.Z,{id:"confirmPassWord",name:"confirmPassWord",type:C?"text":"password",placeholder:"Please confirm password ..."})]}),(0,Z.jsx)("div",{className:" flex items-center justify-center",children:(0,Z.jsx)(f.Z,{isLoading:n,type:"submit",className:" my-3",kind:"success",children:"Submit"})})]})})]})})}})},a)})),(0,Z.jsxs)("div",{className:"w-full overflow-x-auto",children:[(0,Z.jsxs)("div",{className:"mb-2 bg-white rounded-3xl flex items-center justify-between py-8 px-10",children:[(0,Z.jsx)("div",{className:"w-2/12 hover:w-2/6 focus-within:w-2/6  transition-all ease-out",children:(0,Z.jsx)(x.Z,{onChange:function(e){P(e.currentTarget.value)}})}),(0,Z.jsxs)("div",{className:"flex items-start gap-x-6",children:[(0,Z.jsx)(u.rU,{to:"/add-project",className:"flex items-center justify-center rounded-full w-14 h-14 text-white bg-secondary bg-opacity-60 hover:bg-[#352A65] hover:-translate-y-1 transition-all ease-linear ",children:(0,Z.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,Z.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 4.5v15m7.5-7.5h-15"})})}),(0,Z.jsxs)("div",{className:"flex-1",children:[(0,Z.jsx)("h1",{className:"text-text1 font-semibold text-[22px] mb-2",children:"Create Your Project"}),(0,Z.jsx)("p",{className:"text-text3 text-sm mb-2",children:"Jump right into our editor and create your first project!"}),(0,Z.jsx)(u.rU,{to:"#",className:"text-sm text-primary ",children:"Need any help? Learn More..."})]})]})]}),_?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)("table",{className:"table-user",children:[(0,Z.jsx)("thead",{children:(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("th",{children:"No."}),(0,Z.jsx)("th",{children:"Name"}),(0,Z.jsx)("th",{children:"ID"}),(0,Z.jsx)("th",{children:"Email"}),(0,Z.jsx)("th",{children:"Phone Number"}),(0,Z.jsx)("th",{children:"Actions"})]})}),(0,Z.jsx)("tbody",{children:(ae=te,null===ae||void 0===ae?void 0:ae.filter((function(e){var n;return null===(n=e.name)||void 0===n?void 0:n.toLowerCase().includes(M)}))).map((function(e,n){var r=e.userId,t=e.email,s=e.name,a=e.phoneNumber;return(0,Z.jsxs)("tr",{children:[(0,Z.jsx)("td",{children:n+1}),(0,Z.jsx)("td",{className:"truncate",children:s}),(0,Z.jsx)("td",{children:r}),(0,Z.jsx)("td",{children:t}),(0,Z.jsx)("td",{children:a}),(0,Z.jsx)("td",{children:(0,Z.jsxs)("div",{className:"flex items-center text-gray-500 gap-x-3",children:[(0,Z.jsx)("span",{onClick:function(){var e;e=r,X(!0),D(!0),$(_.filter((function(n){return n.userId===e}))),X(!1)},children:(0,Z.jsx)(d.Z,{})}),(0,Z.jsx)("span",{onClick:function(){var e;e=r,X(!0),E(!0),$(_.filter((function(n){return n.userId===e}))),X(!1)},children:(0,Z.jsx)(c.Z,{})})]})})]},r)}))})]}),(0,Z.jsx)("div",{className:"flex items-center justify-end my-5",children:(0,Z.jsx)(N.Z,{hideOnSinglePage:!0,defaultCurrent:1,onChange:function(e){ee(e),se(null===_||void 0===_?void 0:_.slice(6*(e-1),6*(e-1)+6))},current:Q,pageSize:6,total:_.length,className:"pl-5 ml-5"})})]}):(0,Z.jsx)("div",{className:"flex justify-center items-center bg-lite h-[400px]",children:(0,Z.jsxs)("div",{className:"loader bg-lite p-5 rounded-full flex space-x-3",children:[(0,Z.jsx)("div",{className:"w-5 h-5 bg-error rounded-full animate-bounce"}),(0,Z.jsx)("div",{className:"w-5 h-5 bg-primary rounded-full animate-bounce"}),(0,Z.jsx)("div",{className:"w-5 h-5 bg-blue-500 rounded-full animate-bounce"})]})})]})]})}}}]);
//# sourceMappingURL=295.2a819375.chunk.js.map