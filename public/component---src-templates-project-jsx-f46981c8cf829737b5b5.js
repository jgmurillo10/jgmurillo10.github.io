(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{aXXq:function(t,e,r){"use strict";var n=r("wx14");var i=r("dI71"),o=r("wTIg"),a=r("q1tI"),c=r("5RMe"),d=r("nRRI"),s=r("qKvR"),p=Object(o.a)("button",{target:"e15qz7ka0"})("padding:1em 2em;background:",c.a.blue400,";font-weight:600;color:white;outline:none;border:none;font-size:1rem;border-radius:2px;position:relative;transition:background 100ms ease-in-out;@media(max-width:",d.a.maxwidthMobile,'px){padding:0.8em 1.8em;font-size:1em;}p{margin:0;}&:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(135deg,',c.a.pink400," 0%,",c.a.purple400," 100%);z-index:-1;}&:hover{cursor:pointer;background:transparent;transition:background 100ms ease-in-out;}&.Button--secondary{background:",c.a.blue200,";color:",c.a.blue600,";padding:0.95em 1.8em;font-size:0.95rem;&:hover{background:",c.a.blue300,";transition:background 100ms ease-in-out;}}"),u=function(t){function e(){return t.apply(this,arguments)||this}return Object(i.a)(e,t),e.prototype.render=function(){var t=this.props,e=(t.children,function(t,e){if(null==t)return{};var r,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(i[r]=t[r]);return i}(t,["children"]));return Object(s.c)(p,Object(n.a)({onClick:this.props.onClick},e),this.props.children)},e}(a.Component);e.a=u},mIYN:function(t,e,r){"use strict";r.r(e),r.d(e,"query",(function(){return v}));var n=r("wTIg"),i=r("q1tI"),o=r.n(i),a=r("TJpk"),c=r.n(a),d=r("5RMe"),s=r("Wbzz"),p=r("wG+1"),u=r("aXXq"),m=r("L6Je"),l=r("qKvR");var g=Object(n.a)("div",{target:"e27vm1d0"})("background:",d.a.grey200,";display:flex;justify-content:center;align-items:flex-end;overflow:hidden;position:relative;padding-top:2.25em;margin-bottom:3.5em;img{max-width:600px;}"),b=Object(n.a)("div",{target:"e27vm1d1"})({name:"1vn4ady",styles:"max-width:550px;margin:0 auto;text-align:center;"}),j=Object(n.a)("div",{target:"e27vm1d2"})({name:"8ykxe0",styles:"max-width:550px;margin:0 auto;.block-img{margin-top:3.5em;margin-bottom:0.5em;img{width:100%;}}"}),h=Object(n.a)(s.Link,{target:"e27vm1d3"})({name:"1voh43f",styles:"margin-top:3em;display:block;text-align:center;"}),w=function(t){var e=t.project,r=t.meta;return Object(l.c)(o.a.Fragment,null,Object(l.c)(c.a,{title:e.project_title[0].text+" | Prist, Gatsby & Prismic Starter",titleTemplate:"%s | "+r.title,meta:[{name:"description",content:r.description},{property:"og:title",content:e.project_title[0].text+" | Prist, Gatsby & Prismic Starter"},{property:"og:description",content:r.description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:r.author},{name:"twitter:title",content:r.title},{name:"twitter:description",content:r.description}].concat(r)}),Object(l.c)(m.a,null,Object(l.c)(b,null,p.RichText.render(e.project_title)),e.project_hero_image&&Object(l.c)(g,null,Object(l.c)("img",{src:e.project_hero_image.url,alt:"bees"})),Object(l.c)(j,null,p.RichText.render(e.project_description),Object(l.c)(h,{to:"/work"},Object(l.c)(u.a,{className:"Button--secondary"},"See other work")))))};e.default=function(t){var e=t.data,r=e.prismic.allProjects.edges[0].node,n=e.site.siteMetadata;return Object(l.c)(w,{project:r,meta:n})};var v={id:"4088738224",source:"query ProjectQuery($uid:String){prismic{allProjects(uid:$uid){edges{node{project_title project_preview_description project_preview_thumbnail project_category project_post_date project_hero_image project_description _meta{uid}}}}}site{siteMetadata{title description author}}}",toString:function(){return this.id}}}}]);
//# sourceMappingURL=component---src-templates-project-jsx-f46981c8cf829737b5b5.js.map