(this.webpackJsonpchatbot=this.webpackJsonpchatbot||[]).push([[0],{19:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a(3),n=a.n(s),d=a(5),i=a(6),u=a(9),g=a(8),l=(a(19),a(11)),o=a.n(l),c=a(1),b=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).state={name:"",gender:"",age:""},r}return Object(i.a)(a,[{key:"componentWillMount",value:function(){var e=this.props.steps,t=e.name,a=e.gender,r=e.age;this.setState({name:t,gender:a,age:r})}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.gender,r=e.age;return Object(c.jsxs)("div",{style:{width:"100%"},children:[Object(c.jsx)("h3",{children:"Summary"}),Object(c.jsx)("table",{children:Object(c.jsxs)("tbody",{children:[Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Name"}),Object(c.jsx)("td",{children:t.value})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Gender"}),Object(c.jsx)("td",{children:a.value})]}),Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:"Age"}),Object(c.jsxs)("td",{children:[r.value," years old"]})]})]})})]})}}]),a}(r.Component);b.defaultProps={steps:void 0};var j=function(e){Object(u.a)(a,e);var t=Object(g.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return Object(c.jsx)(o.a,{steps:[{id:"1",message:"What is your name?",trigger:"name"},{id:"name",user:!0,trigger:"3"},{id:"3",message:"Hi {previousValue}! What is your gender?",trigger:"gender"},{id:"gender",options:[{value:"Male",label:"Male",trigger:"5"},{value:"Female",label:"Female",trigger:"5"}]},{id:"5",message:"How old are you?",trigger:"age"},{id:"age",user:!0,trigger:"7",validator:function(e){return isNaN(e)?"value must be a number":e<0?"value must be positive":!(e>120)||"".concat(e,"? Come on!")}},{id:"7",message:"Great! Check out your summary",trigger:"review"},{id:"review",component:Object(c.jsx)(b,{}),asMessage:!0,trigger:"update"},{id:"update",message:"Would you like to update some field?",trigger:"update-question"},{id:"update-question",options:[{value:"yes",label:"Yes",trigger:"update-yes"},{value:"no",label:"No",trigger:"end-message"}]},{id:"update-yes",message:"What field would you like to update?",trigger:"update-fields"},{id:"update-fields",options:[{value:"name",label:"Name",trigger:"update-name"},{value:"gender",label:"Gender",trigger:"update-gender"},{value:"age",label:"Age",trigger:"update-age"},{value:"no updates",label:"None",trigger:"end-message"}]},{id:"update-name",update:"name",trigger:"7"},{id:"update-gender",update:"gender",trigger:"7"},{id:"update-age",update:"age",trigger:"7"},{id:"end-message",message:"Thanks! Your data was submitted successfully!",end:!0}]})}}]),a}(r.Component),m=j,p=document.getElementById("root");n.a.render(Object(c.jsx)(j,{}),p);var h=document.getElementById("root");n.a.render(Object(c.jsx)(r.StrictMode,{children:Object(c.jsx)(m,{})}),h)}},[[26,1,2]]]);
//# sourceMappingURL=main.8ce77d18.chunk.js.map