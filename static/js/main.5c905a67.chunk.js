(this["webpackJsonpmy-counter"]=this["webpackJsonpmy-counter"]||[]).push([[0],{12:function(t,n,e){},13:function(t,n,e){},15:function(t,n,e){"use strict";e.r(n);var r=e(1),c=e.n(r),a=e(7),i=e.n(a),o=(e(12),e(2)),u=e(3),s=e(5),l=e(4),j=(e(13),e(0)),v=function(t){Object(s.a)(e,t);var n=Object(l.a)(e);function e(t){var r;Object(o.a)(this,e),r=n.call(this,t);var c=t.value;return r.state={counter:c},r}return Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.interval=setInterval((function(){t.setState((function(t){return{counter:t.counter-1}}))}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var t=this.state.counter;return Object(j.jsx)("p",{children:t<=0?"\u23f3 0":"\u23f3 ".concat(t)})}}]),e}(r.Component),h=function(t){Object(s.a)(e,t);var n=Object(l.a)(e);function e(){return Object(o.a)(this,e),n.apply(this,arguments)}return Object(u.a)(e,[{key:"render",value:function(){var t=this.props,n=t.value,e=t.onChange;return Object(j.jsx)("input",{type:"number",value:n,onChange:e,placeholder:"Insira os segundos"})}}]),e}(r.Component),b=function(t){Object(s.a)(e,t);var n=Object(l.a)(e);function e(){var t;return Object(o.a)(this,e),(t=n.call(this)).state={working:!1,input:""},t}return Object(u.a)(e,[{key:"render",value:function(){var t=this,n=this.state,e=n.working,r=n.input;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"TRYMER"}),Object(j.jsx)("div",{children:e?Object(j.jsx)(v,{value:r}):Object(j.jsx)(h,{value:r,onChange:function(n){var e=n.target.value;return t.setState({input:e})}})}),Object(j.jsx)("button",{type:"button",onClick:function(){e&&t.setState({input:""}),t.setState((function(t){return{working:!t.working}}))},children:e?"Desligar contador":"Ligar contador"})]})}}]),e}(r.Component),p=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,16)).then((function(n){var e=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;e(t),r(t),c(t),a(t),i(t)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(b,{})}),document.getElementById("root")),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.5c905a67.chunk.js.map