(this.webpackJsonpanimals=this.webpackJsonpanimals||[]).push([[0],{30:function(t,e,a){t.exports={animal:"Animale_animal__qzzqE"}},31:function(t,e,a){t.exports={container:"Container_container__2hmA5"}},33:function(t,e,a){t.exports={card:"Main_card__2LYJL"}},34:function(t,e,a){t.exports={liked:"Liked_liked__3wNX9"}},35:function(t,e,a){t.exports={header:"Header_header__2XmdO"}},43:function(t,e,a){},71:function(t,e,a){"use strict";a.r(e);var n=a(1),i=a(0),c=a(28),r=a.n(c),s=a(9),l=(a(43),a(11)),d=a(12),o=a(14),u=a(13),h=a(37),j=a(17),b=a.n(j),f=a(29),p=a(30),m=a.n(p),O=function(t){var e=t.imgSrc,a=null;return t.display||(a={display:"none"}),Object(n.jsx)("div",{style:a,className:m.a.animal,children:Object(n.jsx)("img",{src:e,alt:""})})},k=a(31),x=a.n(k),v=function(t){var e=t.children;return Object(n.jsx)("div",{className:x.a.container,id:"container",children:e})},g=a(32),y=a.n(g),_=a(33),N=a.n(_),S=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={data:["https://cdn2.thecatapi.com/images/MTc5MTY4MA.jpg"]},t.getData=Object(f.a)(b.a.mark((function e(){var a,n,i=arguments;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=i.length>0&&void 0!==i[0]?i[0]:3,n=0;case 2:if(!(n<a)){e.next=8;break}return e.next=5,y.a.get("https://api.thecatapi.com/v1/images/search?limit=1&size=full&sub_id=demo-ca64b5").then((function(e){for(var n=!0,i=0;i<t.state.data.length;i++)t.state.data[i]===e.data[0].url&&(i=t.state.data.length,a++,n=!1);if(n){var c=t.state.data;c.push(e.data[0].url),t.setState({data:c})}}));case 5:n++,e.next=2;break;case 8:case"end":return e.stop()}}),e)}))),t}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var t=this;this.getData().then((function(e){return t.getData(7)}))}},{key:"render",value:function(){var t=this,e=this.state.data.map((function(t,e){var a=0===e;return Object(n.jsx)(O,{imgSrc:t,display:a},t.substring(t.lastIndexOf("/")+1))})),a=function(e){var a=t.state.data[0],n=t.state.data;if(n.shift(),t.setState({data:n}),t.state.data.length<12&&t.getData(20),"like"===e){for(var i=Object(h.a)(t.props.liked),c=!0,r=0;r<i.length;r++)i[r]===a&&(r=i.length,c=!1);c&&(i.unshift(a),t.props.setLike(i),localStorage.setItem("liked",JSON.stringify(i)))}};return Object(n.jsx)("div",{children:Object(n.jsxs)("div",{className:N.a.card,children:[Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:"btn btn-success",onClick:function(){return a("like")},children:"Like"})}),Object(n.jsx)(v,{children:e}),Object(n.jsx)("div",{children:Object(n.jsx)("button",{className:"btn btn-danger",onClick:function(){return a("dislike")},children:"Dislike"})})]})})}}]),a}(i.Component),L=a(34),w=a.n(L),D=function(t){var e=t.liked.map((function(t){return Object(n.jsx)(O,{imgSrc:t,display:!0},t)}));return Object(n.jsx)("div",{className:w.a.liked,children:e})},A=a(35),C=a.n(A),J=function(){return Object(n.jsxs)("div",{className:C.a.header,children:[Object(n.jsx)("a",{href:"https://ebakoyan.github.io/cat/liked",className:"btn btn-primary",children:"Liked"}),Object(n.jsx)("a",{href:"https://ebakoyan.github.io/cat/",className:"btn btn-primary",children:"Home"})]})},M=a(2),I=function(t){Object(o.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(l.a)(this,a);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={liked:JSON.parse(localStorage.getItem("liked"))||[]},t.setLike=function(e){t.setState({liked:e})},t}return Object(d.a)(a,[{key:"render",value:function(){var t=this;return Object(n.jsxs)(s.a,{children:[Object(n.jsx)(J,{}),Object(n.jsxs)(M.c,{children:[Object(n.jsx)(M.a,{path:"/cat/",exact:!0,children:Object(n.jsx)(S,{setLike:function(e){return t.setLike(e)},liked:this.state.liked})}),Object(n.jsx)(M.a,{path:"/cat/liked/",exact:!0,children:Object(n.jsx)(D,{liked:this.state.liked})})]})]})}}]),a}(i.Component);r.a.render(Object(n.jsx)(s.a,{children:Object(n.jsx)(I,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.4be660f2.chunk.js.map