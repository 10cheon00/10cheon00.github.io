"use strict";(self.webpackChunkarchive_of_10cheon00=self.webpackChunkarchive_of_10cheon00||[]).push([[969],{5047:function(e,t,a){a.r(t),a.d(t,{Head:function(){return p},default:function(){return m}});var n=a(4578),r=a(7294),i=a(1883),l=a(3294),o=a(9357);var s=e=>{let{currentPage:t,numPagination:a,paginationPageCount:n}=e;const i=Math.floor((t-1)/a)*a,l=Math.floor((t-1)/a+1)*a+1;let o,s;t>a&&(o=r.createElement("a",{className:"pagination-link pagination-previous",href:"/"+i},"<<")),l<=n&&(s=r.createElement("a",{className:"pagination-link pagination-next",href:"/"+l},">>"));const c=Array(n).fill().map(((e,t)=>t+1)).slice(i,l-1);return r.createElement("div",{className:"pagination"},o,c.map((e=>r.createElement("a",{className:"pagination-link"+(e===t?" pagination-current-link":""),href:"/"+(1!==e?""+e:""),key:e},e))),s)},c=a(2747);let m=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.Z)(t,e),t.prototype.render=function(){var e;const t=(null===(e=this.props.data.site.siteMetadata)||void 0===e?void 0:e.title)||"Title",a=this.props.data.allMarkdownRemark.nodes;return r.createElement(l.Z,{location:{pathname:"/"},title:t},r.createElement("ol",{style:{listStyle:"none"}},a.map((e=>{const t=e.frontmatter.title||e.fields.slug;return r.createElement("li",{key:e.fields.slug},r.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h2",null,r.createElement(i.Link,{to:e.fields.slug,itemProp:"url"},r.createElement("span",{itemProp:"headline"},t),r.createElement("small",{className:"post-date"},e.frontmatter.date))),r.createElement("div",{className:"tags"},e.frontmatter.tags?e.frontmatter.tags.map((e=>r.createElement(c.Z,{key:e,tagName:e}))):null))))}))),r.createElement(s,{currentPage:this.props.pageContext.currentPage,numPagination:this.props.pageContext.numPagination,paginationPageCount:this.props.pageContext.paginationPageCount}))},t}(r.Component);const p=()=>r.createElement(o.Z,{title:"All posts"})}}]);
//# sourceMappingURL=component---src-templates-pagination-js-bbbab4804eb6ebfde30d.js.map