(self.webpackChunkarchive_of_10cheon00=self.webpackChunkarchive_of_10cheon00||[]).push([[989],{2747:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(7294),r=n(1883);var o=e=>{return t=(e=>{for(var t=0,n=0;n<e.length;n++)t=e.charCodeAt(n)+((t<<5)+t);return t})(e),n=(16777215&t).toString(16).toUpperCase(),"00000".substring(0,6-n.length)+n;var t,n},c=n(5683);var i=e=>{let{tagName:t,relatedPostsNumber:n,enableLink:i=!0}=e;const l=void 0!==n?"("+n+")":"";let s=t+" "+l;i&&(s=a.createElement(r.Link,{to:"/tags/"+c(t)+"/"},t," ",l));const u=i?"hoverable":"";return a.createElement("span",{className:"tag "+u,style:{backgroundColor:"#"+o(t)}},s)}},6883:function(e,t,n){"use strict";n.r(t),n.d(t,{Head:function(){return b},default:function(){return h}});var a=n(7294),r=n(1883),o=n(8032);var c=()=>{var e;const t=null===(e=(0,r.useStaticQuery)("230163734").site.siteMetadata)||void 0===e?void 0:e.author;return a.createElement("div",{className:"bio"},a.createElement(o.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-icon.png",width:25,height:25,quality:95,alt:"Profile picture",__imageData:n(137)}),(null==t?void 0:t.name)&&a.createElement("span",{className:"bio-author"},a.createElement("strong",null,t.name),", "))},i=n(6004),l=n(9357),s=n(4578);var u=function(e){function t(t){var n;return(n=e.call(this,t)||this).commentsEl=a.createRef(),n.state={status:"pending"},n}(0,s.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){const e=document.createElement("script");e.onload=()=>this.setState({status:"success"}),e.onerror=()=>this.setState({status:"failed"}),e.async=!0,e.src="https://utteranc.es/client.js",e.setAttribute("repo","10cheon00/10cheon00.github.io"),e.setAttribute("issue-term","title");const t=document.body.classList.contains("dark")?"github-dark":"github-light";e.setAttribute("theme",t),e.setAttribute("crossorigin","anonymous"),this.commentsEl.current.appendChild(e)},n.render=function(){const{status:e}=this.state;return a.createElement("div",{className:"comments-wrapper"},"failed"===e&&a.createElement("div",null,"Error. Please try again."),"pending"===e&&a.createElement("div",null,"Loading script..."),a.createElement("div",{ref:this.commentsEl}))},t}(a.Component);let f=function(e){function t(){return e.apply(this,arguments)||this}(0,s.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.updateTableOfContents),Array.from(document.querySelectorAll("div.table-of-contents a")).forEach(((e,t)=>{e.addEventListener("click",(n=>{n.preventDefault();const a=Array.from(document.querySelectorAll('\n            section[itemProp="articleBody"] h1,\n            section[itemProp="articleBody"] h2,\n            section[itemProp="articleBody"] h3\n          ')).find(((n,a)=>n.textContent===e.textContent&&a===t));window.scrollTo({top:a.offsetTop-window.innerHeight/2+1,behavior:"instant"})}))}))},n.updateTableOfContents=function(){const e=document.querySelectorAll('\n      section[itemProp="articleBody"] h1,\n      section[itemProp="articleBody"] h2,\n      section[itemProp="articleBody"] h3\n    '),t=document.querySelectorAll("div.table-of-contents a"),n=window.innerHeight/2,a=Array.from(e).reverse().find((e=>e.getBoundingClientRect().y<n));t.forEach((e=>{const t=decodeURI(new URL(e.href).hash).slice(1);e.textContent===(null==a?void 0:a.textContent)&&t===a.id?e.className="active":e.className=""}))},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.updateTableOfContents)},n.render=function(){return a.createElement("div",{className:"table-of-contents-layout"},a.createElement("div",{className:"table-of-contents",dangerouslySetInnerHTML:{__html:this.props.tableOfContents}}))},t}(a.Component);var d=f,m=n(2747),p=n(231);const b=e=>{let{data:{markdownRemark:t}}=e;return a.createElement(l.Z,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};var h=e=>{var t;let{data:{previous:n,next:o,site:l,markdownRemark:s},location:f}=e;const b=(null===(t=l.siteMetadata)||void 0===t?void 0:t.title)||"Title",h=s.tableOfContents;return a.createElement(i.Z,{location:f,title:b},a.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement("header",{className:"blog-post-header"},a.createElement("h1",{className:"title",itemProp:"headline"},s.frontmatter.title),a.createElement("div",{className:"info"},a.createElement(c,null),a.createElement("span",{className:"date"},s.frontmatter.date)),a.createElement("div",{className:"tags"},s.frontmatter.tags?s.frontmatter.tags.map((e=>a.createElement(m.Z,{key:e,tagName:e}))):null)),a.createElement(d,{tableOfContents:h}),a.createElement("section",{dangerouslySetInnerHTML:{__html:s.html},itemProp:"articleBody"}),a.createElement("hr",null)),a.createElement(u,null),a.createElement("nav",{className:"blog-post-nav"},a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},o&&a.createElement("li",null,a.createElement(r.Link,{to:o.fields.slug,rel:"next"},a.createElement("p",null,a.createElement(p.Wuc,null),"다음 글"),a.createElement("div",null,a.createElement("p",{className:"date"},o.frontmatter.date),a.createElement("p",{className:"title"},o.frontmatter.title)))),n&&a.createElement("li",null,a.createElement(r.Link,{to:n.fields.slug,rel:"prev"},a.createElement("p",null,a.createElement(p.dhL,null),"이전 글"),a.createElement("div",null,a.createElement("p",{className:"date"},n.frontmatter.date),a.createElement("p",{className:"title"},n.frontmatter.title)))))))}},5683:function(e,t,n){var a=1/0,r="[object Symbol]",o=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,c=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,i="\\ud800-\\udfff",l="\\u2700-\\u27bf",s="a-z\\xdf-\\xf6\\xf8-\\xff",u="A-Z\\xc0-\\xd6\\xd8-\\xde",f="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",d="['’]",m="["+f+"]",p="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",b="\\d+",h="["+l+"]",g="["+s+"]",v="[^"+i+f+b+l+s+u+"]",E="(?:\\ud83c[\\udde6-\\uddff]){2}",x="[\\ud800-\\udbff][\\udc00-\\udfff]",y="["+u+"]",w="(?:"+g+"|"+v+")",A="(?:"+y+"|"+v+")",N="(?:['’](?:d|ll|m|re|s|t|ve))?",C="(?:['’](?:D|LL|M|RE|S|T|VE))?",S="(?:"+p+"|\\ud83c[\\udffb-\\udfff])"+"?",O="[\\ufe0e\\ufe0f]?",k=O+S+("(?:\\u200d(?:"+["[^"+i+"]",E,x].join("|")+")"+O+S+")*"),L="(?:"+[h,E,x].join("|")+")"+k,j=RegExp(d,"g"),Z=RegExp(p,"g"),T=RegExp([y+"?"+g+"+"+N+"(?="+[m,y,"$"].join("|")+")",A+"+"+C+"(?="+[m,y+w,"$"].join("|")+")",y+"?"+w+"+"+N,y+"+"+C,b,L].join("|"),"g"),U=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,I="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,R="object"==typeof self&&self&&self.Object===Object&&self,z=I||R||Function("return this")();var P,_=(P={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==P?void 0:P[e]});var B=Object.prototype.toString,D=z.Symbol,H=D?D.prototype:void 0,M=H?H.toString:void 0;function q(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&B.call(e)==r}(e))return M?M.call(e):"";var t=e+"";return"0"==t&&1/e==-a?"-0":t}function G(e){return null==e?"":q(e)}var W,J=(W=function(e,t,n){return e+(n?"-":"")+t.toLowerCase()},function(e){return function(e,t,n,a){var r=-1,o=e?e.length:0;for(a&&o&&(n=e[++r]);++r<o;)n=t(n,e[r],r,e);return n}(function(e,t,n){return e=G(e),void 0===(t=n?void 0:t)?function(e){return U.test(e)}(e)?function(e){return e.match(T)||[]}(e):function(e){return e.match(o)||[]}(e):e.match(t)||[]}(function(e){return(e=G(e))&&e.replace(c,_).replace(Z,"")}(e).replace(j,"")),W,"")});e.exports=J},137:function(e){"use strict";e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/0bd3421c1191939046c27a1da4be19fe/8d696/profile-icon.png","srcSet":"/static/0bd3421c1191939046c27a1da4be19fe/8d696/profile-icon.png 25w,\\n/static/0bd3421c1191939046c27a1da4be19fe/e5610/profile-icon.png 50w","sizes":"25px"},"sources":[{"srcSet":"/static/0bd3421c1191939046c27a1da4be19fe/f04f9/profile-icon.avif 25w,\\n/static/0bd3421c1191939046c27a1da4be19fe/d4bf4/profile-icon.avif 50w","type":"image/avif","sizes":"25px"},{"srcSet":"/static/0bd3421c1191939046c27a1da4be19fe/ce49b/profile-icon.webp 25w,\\n/static/0bd3421c1191939046c27a1da4be19fe/3faea/profile-icon.webp 50w","type":"image/webp","sizes":"25px"}]},"width":25,"height":25}')}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-d5a5a743e1f3c758d254.js.map