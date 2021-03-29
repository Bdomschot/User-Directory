(this["webpackJsonpuser-directory"]=this["webpackJsonpuser-directory"]||[]).push([[0],{23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(2),s=n.n(a),r=n(12),c=n.n(r),l=(n(23),n(13)),o=n(14),i=n(15),u=n(18),d=n(17),m=n(0);var h=function(e){return Object(m.jsxs)("div",{className:"jumbotron",style:{background:"white",fontFamily:"ariel",fontWeight:"bolder",textAlign:"center"},children:[Object(m.jsx)("h1",{className:"display-4",children:"Employee Directory"}),Object(m.jsx)("p",{children:"Find Employees in the Company "}),Object(m.jsx)("input",{placeholder:"Search by last name",onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",id:"search"}),Object(m.jsx)("button",{className:"btn m-3",style:{background:"light"},onClick:e.handleFormSubmit,children:"search"})]})};var b=function(e){var t=e.users;return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"card",style:{background:"white",fontFamily:"Ariel",margin:"2rem",borderRadius:"6px"},children:[Object(m.jsx)("div",{className:"card-body",style:{display:"flex",flexWrap:"wrap"},children:Object(m.jsx)("h2",{className:"card-title",style:{textAlign:"center",fontWeight:"bolder"},children:"Employees"})}),Object(m.jsx)("ul",{className:"container mr-md-3",children:t.map((function(e){return Object(m.jsxs)("li",{className:"card-text ml-md-5 pb-5",children:[Object(m.jsx)("span",{className:"font-weight-bold",children:"Employee Name: "}),e.name.title," ",e.name.first," ",e.name.last,Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"font-weight-bold",children:"Employee Email: "})," ",e.email,Object(m.jsx)("br",{}),Object(m.jsx)("span",{className:"font-weight-bold",children:"Employee Cell "})," ",e.cell,Object(m.jsx)("br",{}),Object(m.jsx)("img",{className:"rounded-sm",src:e.picture.large,alt:"Employee"})]},e.login.uuid)}))})]})})};var j=function(e){var t=e.handleButtonLastNameSort,n=e.handleButtonFirstNameSort;return Object(m.jsx)("div",{className:"card mb-5",style:{background:"white",fontWeight:"bolder",textAlign:"center",fontFamily:"ariel"},children:Object(m.jsx)("div",{className:"card-body",children:Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("button",{type:"text",className:"btn m-3",style:{background:"light"},onClick:t,children:"Sort all Employees by Last Name"}),Object(m.jsx)("br",{}),Object(m.jsx)("button",{type:"text",className:"btn m-3",style:{background:"light"},onClick:n,children:"Sort all Employees by First Name"})]})})})},p=n(16),f=n.n(p),g={getUsers:function(){return f.a.get("https://randomuser.me/api/?results=20")}},x=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={users:[],search:""},e.handleInputChange=function(t){var n=t.target,a=n.name,s=n.value;e.setState(Object(l.a)({},a,s))},e.handleFormSubmit=function(t){t.preventDefault(),console.log(e.state.users);var n=e.state.users.filter((function(t){return t.name.last.toUpperCase().includes(e.state.search.toUpperCase())}));e.setState({users:n})},e.handleButtonLastNameSort=function(t){t.preventDefault();var n=e.state.users.sort((function(e,t){return e.name.last>t.name.last?1:-1}));e.setState({users:n})},e.handleButtonFirstNameSort=function(t){t.preventDefault();var n=e.state.users.sort((function(e,t){return e.name.first>t.name.first?1:-1}));e.setState({users:n})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;g.getUsers().then((function(t){e.setState({users:t.data.results}),console.log(t)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(h,{search:this.state.search,handleFormSubmit:this.handleFormSubmit,handleInputChange:this.handleInputChange}),Object(m.jsx)(j,{handleButtonLastNameSort:this.handleButtonLastNameSort,handleButtonFirstNameSort:this.handleButtonFirstNameSort}),Object(m.jsx)(b,{users:this.state.users})]})}}]),n}(s.a.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),r(e),c(e)}))};c.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(x,{})}),document.getElementById("root")),y()}},[[43,1,2]]]);
//# sourceMappingURL=main.f9f24ea1.chunk.js.map