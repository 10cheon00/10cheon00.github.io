"use strict";(self.webpackChunkarchive_of_10cheon00=self.webpackChunkarchive_of_10cheon00||[]).push([[989],{2171:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return h}});var r=n(7294),a=n(1883),l=n(5683),s=n.n(l),i=n(8771),c=n(3309),o=n(9357),m=n(4578);var u=function(e){function t(t){var n;return(n=e.call(this,t)||this).commentsEl=r.createRef(),n.state={status:"pending"},n}(0,m.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){const e=document.createElement("script");e.onload=()=>this.setState({status:"success"}),e.onerror=()=>this.setState({status:"failed"}),e.async=!0,e.src="https://utteranc.es/client.js",e.setAttribute("repo","10cheon00/10cheon00.github.io"),e.setAttribute("issue-term","title");const t=document.body.classList.contains("dark")?"github-dark":"github-light";e.setAttribute("theme",t),e.setAttribute("crossorigin","anonymous"),this.commentsEl.current.appendChild(e)},n.render=function(){const{status:e}=this.state;return r.createElement("div",{className:"comments-wrapper"},"failed"===e&&r.createElement("div",null,"Error. Please try again."),"pending"===e&&r.createElement("div",null,"Loading script..."),r.createElement("div",{ref:this.commentsEl}))},t}(r.Component),d=n(9286);const p=e=>{let{data:{markdownRemark:t}}=e;return r.createElement(o.Z,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};var h=e=>{var t;let{data:{previous:n,next:l,site:o,markdownRemark:m},location:p}=e;const h=(null===(t=o.siteMetadata)||void 0===t?void 0:t.title)||"Title";return r.createElement(c.Z,{location:p,title:h},r.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h1",{itemProp:"headline"},m.frontmatter.title),r.createElement("p",null,m.frontmatter.date)),r.createElement("div",{className:"tags"},r.createElement("ul",null,m.frontmatter.tags?m.frontmatter.tags.map((e=>r.createElement("li",{key:s()(e),style:{backgroundColor:"#"+(0,d.Z)(e)}},r.createElement(a.Link,{to:"/tags/"+s()(e)},s()(e))))):null)),r.createElement("section",{dangerouslySetInnerHTML:{__html:m.html},itemProp:"articleBody"}),r.createElement("hr",null),r.createElement("footer",null,r.createElement(i.Z,null))),r.createElement(u,null),r.createElement("nav",{className:"blog-post-nav"},r.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.createElement("li",null,n&&r.createElement(a.Link,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),r.createElement("li",null,l&&r.createElement(a.Link,{to:l.fields.slug,rel:"next"},l.frontmatter.title," →")))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-0fe0de1f4842d1e041ad.js.map