(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{aXXq:function(e,t,r){"use strict";var n=r("wx14");var i=r("dI71"),o=r("wTIg"),a=r("q1tI"),c=r("5RMe"),p=r("nRRI"),s=r("qKvR"),d=Object(o.a)("button",{target:"e1nseviy0"})("padding:1em 2em;background:",c.a.blue400,";font-weight:600;color:white;outline:none;border:none;font-size:1rem;border-radius:2px;position:relative;transition:background 100ms ease-in-out;@media(max-width:",p.a.maxwidthMobile,'px){padding:0.8em 1.8em;font-size:1em;}p{margin:0;}&:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(135deg,',c.a.pink400," 0%,",c.a.purple400," 100%);z-index:-1;}&:hover{cursor:pointer;background:transparent;transition:background 100ms ease-in-out;}&.Button--secondary{background:",c.a.blue200,";color:",c.a.blue600,";padding:0.95em 1.8em;font-size:0.95rem;&:hover{background:",c.a.blue300,";transition:background 100ms ease-in-out;}}"),l=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props,t=(e.children,function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,["children"]));return Object(s.c)(d,Object(n.a)({onClick:this.props.onClick},t),this.props.children)},t}(a.Component);t.a=l},mIYN:function(e,t,r){"use strict";r.r(t),r.d(t,"query",(function(){return y}));var n=r("wTIg"),i=r("q1tI"),o=r.n(i),a=r("TJpk"),c=r.n(a),p=r("5RMe"),s=r("Wbzz"),d=r("wG+1"),l=r("aXXq"),m=r("L6Je"),u=r("qKvR");var g=Object(n.a)("div",{target:"e4milqh0"})("background:",p.a.grey200,";display:flex;justify-content:center;align-items:flex-end;overflow:hidden;position:relative;padding-top:2.25em;margin-bottom:3.5em;img{max-width:600px;}"),b=Object(n.a)("div",{target:"e4milqh1"})({name:"1vn4ady",styles:"max-width:550px;margin:0 auto;text-align:center;"}),j=Object(n.a)("div",{target:"e4milqh2"})({name:"8ykxe0",styles:"max-width:550px;margin:0 auto;.block-img{margin-top:3.5em;margin-bottom:0.5em;img{width:100%;}}"}),h=Object(n.a)(s.Link,{target:"e4milqh3"})({name:"1voh43f",styles:"margin-top:3em;display:block;text-align:center;"}),w=function(e){var t=e.project,r=e.meta;return Object(u.c)(o.a.Fragment,null,Object(u.c)(c.a,{title:t.project_title[0].text+" | Projects",titleTemplate:"%s | "+r.title,meta:[{name:"description",content:r.description},{property:"og:title",content:t.project_title[0].text+" | Projects"},{property:"og:description",content:r.description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.author},{name:"twitter:title",content:r.title},{name:"twitter:description",content:r.description},{property:"og:image",content:r.image},{property:"twitter:image",content:r.image}].concat(r)}),Object(u.c)(m.a,null,Object(u.c)(b,null,d.RichText.render(t.project_title)),t.project_hero_image&&Object(u.c)(g,null,Object(u.c)("img",{src:t.project_hero_image.url,alt:"bees"})),Object(u.c)(j,null,d.RichText.render(t.project_description),Object(u.c)(h,{to:"/work"},Object(u.c)(l.a,{className:"Button--secondary"},"See other work")))))};t.default=function(e){var t=e.data,r=t.prismic.allProjects.edges[0].node,n=t.site.siteMetadata;return Object(u.c)(w,{project:r,meta:n})};var y={id:"4050464475",source:"query ProjectQuery($uid:String){prismic{allProjects(uid:$uid){edges{node{project_title project_preview_description project_preview_thumbnail project_category project_post_date project_hero_image project_description _meta{uid}}}}}site{siteMetadata{title description author image}}}",toString:function(){return this.id}}}}]);
//# sourceMappingURL=component---src-templates-project-jsx-6eb196a3135f66f0fb47.js.map