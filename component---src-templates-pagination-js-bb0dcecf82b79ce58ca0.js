(self.webpackChunkarchive_of_10cheon00=self.webpackChunkarchive_of_10cheon00||[]).push([[969],{2747:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(7294),r=n(1883);var o=e=>{return t=(e=>{for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)+t);return t})(e),n=(16777215&t).toString(16).toUpperCase(),"00000".substring(0,6-n.length)+n;var t,n},u=n(5683);var i=e=>{let{tagName:t,relatedPostsNumber:n,enableLink:i=!0}=e;const l=void 0!==n?"("+n+")":"";let c=t+" "+l;i&&(c=a.createElement(r.Link,{to:"/tags/"+u(t)+"/"},t," ",l));const f=i?"hoverable":"";return a.createElement("span",{className:"tag "+f,style:{backgroundColor:"#"+o(t)}},c)}},5047:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return s},default:function(){return f}});var a=n(4578),r=n(7294),o=n(1883),u=n(6004),i=n(9357);var l=e=>{let{currentPage:t,numPagination:n,paginationPageCount:a}=e;const o=Math.floor((t-1)/n)*n,u=Math.floor((t-1)/n+1)*n+1;let i,l;t>n&&(i=r.createElement("a",{className:"pagination-link pagination-previous",href:"/"+o},"<<")),u<=a&&(l=r.createElement("a",{className:"pagination-link pagination-next",href:"/"+u},">>"));const c=Array(a).fill().map(((e,t)=>t+1)).slice(o,u-1);return r.createElement("div",{className:"pagination"},i,c.map((e=>r.createElement("a",{className:"pagination-link"+(e===t?" pagination-current-link":""),href:"/"+(1!==e?""+e:""),key:e},e))),l)},c=n(2747);let f=function(e){function t(){return e.apply(this,arguments)||this}return(0,a.Z)(t,e),t.prototype.render=function(){var e;const t=(null===(e=this.props.data.site.siteMetadata)||void 0===e?void 0:e.title)||"Title",n=this.props.data.allMarkdownRemark.nodes;return r.createElement(u.Z,{location:{pathname:"/"},title:t},r.createElement("ol",{style:{listStyle:"none",padding:"0"}},n.map((e=>{const t=e.frontmatter.title||e.fields.slug;return r.createElement("li",{key:e.fields.slug},r.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h2",null,r.createElement(o.Link,{to:e.fields.slug,itemProp:"url"},r.createElement("span",{itemProp:"headline"},t),r.createElement("small",{className:"post-date"},e.frontmatter.date))),r.createElement("div",{className:"tags"},e.frontmatter.tags?e.frontmatter.tags.map((e=>r.createElement(c.Z,{key:e,tagName:e}))):null))))}))),r.createElement(l,{currentPage:this.props.pageContext.currentPage,numPagination:this.props.pageContext.numPagination,paginationPageCount:this.props.pageContext.paginationPageCount}))},t}(r.Component);const s=()=>r.createElement(i.Z,{title:"All posts"})},5683:function(e,t,n){var a=1/0,r="[object Symbol]",o=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,u=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i="\\ud800-\\udfff",l="\\u2700-\\u27bf",c="a-z\\xdf-\\xf6\\xf8-\\xff",f="A-Z\\xc0-\\xd6\\xd8-\\xde",s="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",p="['’]",d="["+s+"]",g="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",m="\\d+",x="["+l+"]",h="["+c+"]",E="[^"+i+s+m+l+c+f+"]",b="(?:\\ud83c[\\udde6-\\uddff]){2}",v="[\\ud800-\\udbff][\\udc00-\\udfff]",y="["+f+"]",A="(?:"+h+"|"+E+")",k="(?:"+y+"|"+E+")",C="(?:['’](?:d|ll|m|re|s|t|ve))?",j="(?:['’](?:D|LL|M|RE|S|T|VE))?",N="(?:"+g+"|\\ud83c[\\udffb-\\udfff])"+"?",O="[\\ufe0e\\ufe0f]?",Z=O+N+("(?:\\u200d(?:"+["[^"+i+"]",b,v].join("|")+")"+O+N+")*"),P="(?:"+[x,b,v].join("|")+")"+Z,S=RegExp(p,"g"),L=RegExp(g,"g"),U=RegExp([y+"?"+h+"+"+C+"(?="+[d,y,"$"].join("|")+")",k+"+"+j+"(?="+[d,y+A,"$"].join("|")+")",y+"?"+A+"+"+C,y+"+"+j,m,P].join("|"),"g"),I=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,z="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,R="object"==typeof self&&self&&self.Object===Object&&self,T=z||R||Function("return this")();var w,M=(w={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==w?void 0:w[e]});var D=Object.prototype.toString,G=T.Symbol,_=G?G.prototype:void 0,H=_?_.toString:void 0;function Y(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&D.call(e)==r}(e))return H?H.call(e):"";var t=e+"";return"0"==t&&1/e==-a?"-0":t}function J(e){return null==e?"":Y(e)}var $,F=($=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,a){var r=-1,o=e?e.length:0;for(a&&o&&(n=e[++r]);++r<o;)n=t(n,e[r],r,e);return n}(function(e,t,n){return e=J(e),void 0===(t=n?void 0:t)?function(e){return I.test(e)}(e)?function(e){return e.match(U)||[]}(e):function(e){return e.match(o)||[]}(e):e.match(t)||[]}(function(e){return(e=J(e))&&e.replace(u,M).replace(L,"")}(e).replace(S,"")),$,"")});e.exports=F}}]);
//# sourceMappingURL=component---src-templates-pagination-js-bb0dcecf82b79ce58ca0.js.map