(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{aXXq:function(e,t,n){"use strict";var r=n("wx14");var i=n("dI71"),o=n("wTIg"),a=n("q1tI"),c=n("5RMe"),s=n("nRRI"),d=n("qKvR"),p=Object(o.a)("button",{target:"e1nseviy0"})("padding:1em 2em;background:",c.a.blue400,";font-weight:600;color:white;outline:none;border:none;font-size:1rem;border-radius:2px;position:relative;transition:background 100ms ease-in-out;@media(max-width:",s.a.maxwidthMobile,'px){padding:0.8em 1.8em;font-size:1em;}p{margin:0;}&:before{content:"";position:absolute;left:0;top:0;width:100%;height:100%;background:linear-gradient(135deg,',c.a.pink400," 0%,",c.a.purple400," 100%);z-index:-1;}&:hover{cursor:pointer;background:transparent;transition:background 100ms ease-in-out;}&.Button--secondary{background:",c.a.blue200,";color:",c.a.blue600,";padding:0.95em 1.8em;font-size:0.95rem;&:hover{background:",c.a.blue300,";transition:background 100ms ease-in-out;}}"),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props,t=(e.children,function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["children"]));return Object(d.c)(p,Object(r.a)({onClick:this.props.onClick},t),this.props.children)},t}(a.Component);t.a=m},mIYN:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return f}));var r=n("wTIg"),i=n("q1tI"),o=n.n(i),a=n("TJpk"),c=n.n(a),s=n("5RMe"),d=n("Wbzz"),p=n("wG+1"),m=n("aXXq"),l=n("L6Je"),u=n("qKvR");var g=Object(r.a)("div",{target:"e4milqh0"})("background:",s.a.grey200,";display:flex;justify-content:center;align-items:flex-end;overflow:hidden;position:relative;padding-top:2.25em;margin-bottom:3.5em;img{max-width:600px;}"),b=Object(r.a)("div",{target:"e4milqh1"})({name:"1vn4ady",styles:"max-width:550px;margin:0 auto;text-align:center;"}),j=Object(r.a)("div",{target:"e4milqh2"})({name:"8ykxe0",styles:"max-width:550px;margin:0 auto;.block-img{margin-top:3.5em;margin-bottom:0.5em;img{width:100%;}}"}),h=Object(r.a)(d.Link,{target:"e4milqh3"})({name:"1voh43f",styles:"margin-top:3em;display:block;text-align:center;"}),w=function(e){var t=e.project,n=e.meta;return Object(u.c)(o.a.Fragment,null,Object(u.c)(c.a,{title:t.project_title[0].text+" | Projects",titleTemplate:"%s | "+n.title,meta:[{name:"description",content:n.description},{property:"og:title",content:t.project_title[0].text+" | Projects"},{property:"og:description",content:n.description},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.author},{name:"twitter:title",content:n.title},{name:"twitter:description",content:n.description},{name:"og:image",content:n.image},{name:"twitter:image",content:n.image}].concat(n)}),Object(u.c)(l.a,null,Object(u.c)(b,null,p.RichText.render(t.project_title)),t.project_hero_image&&Object(u.c)(g,null,Object(u.c)("img",{src:t.project_hero_image.url,alt:"bees"})),Object(u.c)(j,null,p.RichText.render(t.project_description),Object(u.c)(h,{to:"/work"},Object(u.c)(m.a,{className:"Button--secondary"},"See other work")))))};t.default=function(e){var t=e.data,n=t.prismic.allProjects.edges[0].node,r=t.site.siteMetadata;return Object(u.c)(w,{project:n,meta:r})};var f={id:"4088738224",source:"query ProjectQuery($uid:String){prismic{allProjects(uid:$uid){edges{node{project_title project_preview_description project_preview_thumbnail project_category project_post_date project_hero_image project_description _meta{uid}}}}}site{siteMetadata{title description author}}}",toString:function(){return this.id}}}}]);
//# sourceMappingURL=component---src-templates-project-jsx-0601571ba7822b103e88.js.map