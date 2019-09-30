(function(t){function e(e){for(var a,n,s=e[0],c=e[1],l=e[2],u=0,h=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&h.push(i[n][0]),i[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(h.length)h.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var t,e=0;e<r.length;e++){for(var o=r[e],a=!0,s=1;s<o.length;s++){var c=o[s];0!==i[c]&&(a=!1)}a&&(r.splice(e--,1),t=n(n.s=o[0]))}return t}var a={},i={app:0},r=[];function n(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=a,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var d=c;r.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"27ae":function(t,e,o){"use strict";var a=o("bf5a"),i=o.n(a);i.a},"390b":function(t,e,o){},"417f":function(t,e,o){"use strict";var a=o("8b68"),i=o.n(a);i.a},"4ec8":function(t,e,o){},5650:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var a=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{attrs:{fluid:"",id:"app"}},[o("b-row",{staticClass:"py-2 mt-2",staticStyle:{"/* position":"absolute","*/ width":"100vw",margin:"auto"},attrs:{id:"nav"}},[o("b-col",{staticClass:"text-center navvy"},[o("router-link",{attrs:{to:"/photos"}},[t._v("photos")]),o("router-link",{attrs:{to:"/videos"}},[t._v("videos")]),o("router-link",{staticClass:"hide-on-med-and-down",attrs:{to:"/"}},[o("h1",{staticClass:"mx-5"},[t._v("V A S T")])]),o("router-link",{attrs:{to:"/podcasts"}},[t._v("podcasts")]),o("router-link",{attrs:{to:"/articles"}},[t._v("articles")])],1)],1),o("div",{staticClass:"body"},[o("transition",{attrs:{name:"fade",mode:"out-in"}},[o("router-view")],1)],1),o("b-row",[o("b-col",{staticClass:"px-0"},[o("div",{staticClass:"text-center",staticStyle:{height:"150px",width:"100%",background:"#1b1e21","padding-top":"40px"},attrs:{id:"footer"}},[o("p",[t._v("Website by Dillon DuPont and Morgan Dean")]),o("router-link",{attrs:{to:"/"}},[o("p",[t._v("© Vast Storytelling 2019")])])],1)])],1)],1)},r=[],n={name:"App"},s=n,c=(o("5c0b"),o("2877")),l=Object(c["a"])(s,i,r,!1,null,null,null),d=l.exports,u=o("8c4f"),h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("Box",{attrs:{parallax:"","box-class":"text-center","box-style":"padding-top: 200px !important; padding-bottom: 150px !important; height: 100vh",header:"Our Journey","header-style":'\n            font-weight: 200;\n            letter-spacing: 10px;\n            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,\n                        "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",\n                        "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',image:"/img/vast.png"}},[o("a",{staticClass:"btn btn-outline-light",attrs:{href:"#content"}},[t._v("DISCOVER VAST STORYTELLING")])]),o("div",{staticClass:"hide-on-med-and-down"},[o("b-row",{attrs:{id:"content"}},[o("b-col",{attrs:{cols:"4"}},[o("router-link",{attrs:{to:"/photos"}},[o("Box",{attrs:{hover:"",color:"#6fc3df",header:"Photos",body:"look at amazing photos",image:"https://live.staticflickr.com/2813/33706635605_3447401c73_b.jpg",parallax:""}})],1)],1),o("b-col",[o("router-link",{attrs:{to:"/videos"}},[o("Box",{attrs:{hover:"",color:"#8d82c4",header:"Videos",body:"spectate neat videos",image:"https://cdn.pixabay.com/photo/2017/11/28/13/10/maui-2983620_960_720.jpg",parallax:""}})],1)],1)],1),o("b-row",[o("b-col",{attrs:{cols:"8"}},[o("router-link",{attrs:{to:"/podcasts"}},[o("Box",{attrs:{hover:"",color:"#ec8d81",header:"Podcasts",body:"feast your ears on captivating podcasts",image:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Submillimeter_Array_Night.jpg",parallax:""}})],1)],1),o("b-col",[o("router-link",{attrs:{to:"/articles"}},[o("Box",{attrs:{hover:"",color:"#e7b788",header:"Articles",body:"read some interesting texts",image:"https://media.nbcdfw.com/images/1941*1092/AP_19196579152982.jpg",parallax:""}})],1)],1)],1)],1),o("div",{staticClass:"show-on-med-and-down hide-on-med-and-up"},[o("b-row",[o("b-col",[o("router-link",{attrs:{to:"/photos"}},[o("Box",{attrs:{hover:"",color:"#6fc3df",header:"Photos",body:"look at amazing photos",image:"https://live.staticflickr.com/2813/33706635605_3447401c73_b.jpg",parallax:""}})],1)],1),o("b-col",[o("router-link",{attrs:{to:"/videos"}},[o("Box",{attrs:{hover:"",color:"#8d82c4",header:"Videos",body:"spectate neat videos",image:"https://cdn.pixabay.com/photo/2017/11/28/13/10/maui-2983620_960_720.jpg",parallax:""}})],1)],1)],1),o("b-row",[o("b-col",[o("router-link",{attrs:{to:"/podcasts"}},[o("Box",{attrs:{hover:"",color:"#ec8d81",header:"Podcasts",body:"feast your ears on captivating podcasts",image:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Submillimeter_Array_Night.jpg",parallax:""}})],1)],1),o("b-col",[o("router-link",{attrs:{to:"/articles"}},[o("Box",{attrs:{hover:"",color:"#e7b788",header:"Articles",body:"read some interesting texts",image:"https://media.nbcdfw.com/images/1941*1092/AP_19196579152982.jpg",parallax:""}})],1)],1)],1)],1),o("Box",{attrs:{"box-style":"padding-top: 150px !important; padding-bottom: 150px !important; text-align: center",header:"A Storytelling Hub",body:"Content by Digital Journalism students of '19 - '20"}})],1)},p=[],m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-row",{staticClass:"box",style:t.cssProps,on:{click:function(e){return t.goto(t.link)}}},[o("b-col",{class:"px-5 py-5 content "+t.boxClass,style:t.boxStyle},[o("h1",{style:t.headerStyle},[t._v(t._s(t.header))]),t._t("default",[o("p",[t._v(t._s(t.body))])])],2)],1)},b=[],f={props:{color:String,image:String,link:String,"box-style":String,"box-class":String,"header-style":String,header:{type:String,default:"Bruh."},body:{type:String,default:"This is a bruh moment"}},computed:{cssProps:function(){return{"--bg-color":this.color||"#242943","--bg-image":"url(".concat(this.image,")")}}},methods:{goto:function(t){t&&this.$router.push(t)}}},g=f,v=(o("b2fb"),Object(c["a"])(g,m,b,!1,null,"dedbbddc",null)),y=v.exports,w={name:"home",components:{Box:y},mounted:function(){document.getElementById("nav").setAttribute("style","opacity: 1; position: absolute;")}},_=w,x=(o("cccb"),o("417f"),Object(c["a"])(_,h,p,!1,null,"e1688078",null)),k=x.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",{staticClass:"text-center"},[t._v("Work In Progress")])])}],$={name:"About"},P=$,E=Object(c["a"])(P,C,S,!1,null,"fb934e18",null),j=E.exports,B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"template"},[o("b-row",{staticClass:"hide-on-med-and-down"},[o("b-col",{attrs:{cols:"2"}},t._l(t.videos,(function(t,e){return o("video-thumbnail",{key:e,attrs:{id:t.id,width:"100%",height:"200px",title:t.title,desc:t.desc,url:t.url}})})),1),o("b-col",{attrs:{cols:"8"}},[o("VideoEmbed",{attrs:{width:"100%",height:"35vw",url:t.video.url}}),o("b-card",{staticClass:"text-dark text-center"},[o("h1",[t._v(t._s(t.video.title))]),o("div",{staticStyle:{width:"50%",height:"2px","background-color":"#b9b9b9",margin:"auto"}}),o("p",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.video.desc))])])],1),o("b-col",{staticClass:"profile",attrs:{cols:"2"}},[o("b-card",{staticClass:"m-1 text-dark my-0"},[o("div",{staticClass:"avatar"},[o("img",{attrs:{alt:"Person's Photo",src:t.author.avatar}})]),o("div",{staticClass:"bio"},[o("h3",[t._v(t._s(t.author.name))]),o("div",{staticStyle:{width:"50%",height:"2px","background-color":"#b9b9b9",margin:"auto"}}),o("p",{staticClass:"text-black-50",staticStyle:{"margin-top":"5px"}},[t._v(t._s(t.author.bio))])])])],1)],1),o("b-row",{staticClass:"hide-on-med-and-up show-on-med-and-down",staticStyle:{margin:"auto"}},[o("VideoEmbed",{attrs:{width:"100%",height:"50vw",url:t.video.url}}),o("b-card",{staticClass:"text-dark text-center"},[o("h1",[t._v(t._s(t.video.title))]),o("div",{staticStyle:{width:"50%",height:"2px","background-color":"#b9b9b9",margin:"auto"}}),o("p",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.video.desc))])])],1),o("b-row",{staticClass:"hide-on-med-and-up show-on-med-and-down"},[o("b-card",{staticClass:"m-1 text-dark my-0"},[o("div",{staticClass:"avatar"},[o("img",{attrs:{alt:"Person's Photo",src:t.author.avatar}})]),o("div",{staticClass:"bio"},[o("h3",[t._v(t._s(t.author.name))]),o("div",{staticStyle:{width:"50%",height:"2px","background-color":"#b9b9b9",margin:"auto"}}),o("p",{staticClass:"text-black-50",staticStyle:{"margin-top":"5px"}},[t._v(t._s(t.author.bio))])])])],1),o("b-row",{staticClass:"hide-on-med-and-up show-on-med-and-down"},t._l(t.videos,(function(t,e){return o("video-thumbnail",{key:e,staticStyle:{width:"70%",margin:"auto"},attrs:{id:t.id,width:"100%",height:"200px",title:t.title,desc:t.desc,url:t.url}})})),1)],1)},O=[],A=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("iframe",{style:{width:t.width,height:t.height},attrs:{src:"https://www.youtube.com/embed/"+t.videoId,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})},I=[],T=(o("3b2b"),o("a481"),{name:"Video-Embed",props:["url","width","height"],data:function(){return{videoId:this.getId()}},methods:{getId:function(){return this.getParameterByName("v",this.url)},getParameterByName:function(t,e){e||(e=window.location.href),t=t.replace(/[[\]]/g,"\\$&");var o=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)"),a=o.exec(e);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null}}}),M=T,V=Object(c["a"])(M,A,I,!1,null,"f9066acc",null),R=V.exports,D=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"thumb",on:{click:function(e){return t.goto(t.id)}}},[o("img",{style:{width:t.width,height:t.height},attrs:{alt:"Thumbnail for "+t.url,src:"https://img.youtube.com/vi/"+t.videoId+"/maxresdefault.jpg"}}),o("div",{staticClass:"desc"},[o("p",[t._v(t._s(t.title))]),o("span",[t._v(t._s(t.desc.substring(0,32)+"..."))])])])},N=[],L={name:"VideoThumbnail",props:["url","width","height","title","desc","id"],data:function(){return{videoId:this.getId()}},methods:{getId:function(){return this.getParameterByName("v",this.url)},getParameterByName:function(t,e){e||(e=window.location.href),t=t.replace(/[[\]]/g,"\\$&");var o=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)"),a=o.exec(e);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null},goto:function(t){this.$router.push("/video?id=".concat(t))}}},U=L,q=(o("857d"),Object(c["a"])(U,D,N,!1,null,"0b055794",null)),z=q.exports,J={name:"Video",components:{VideoThumbnail:z,VideoEmbed:R},beforeMount:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this.$route.query.id;if(!t)return this.$router.push("/videos");this.video=this.$store.getters.video(this.$route.query.id),this.author=this.$store.getters.person(this.video.author),this.videos=this.$store.getters.videos()}},mounted:function(){document.getElementById("nav").setAttribute("style","opacity: 1; position: sticky;")}},G=J,H=(o("f3d9"),Object(c["a"])(G,B,O,!1,null,"1b59f974",null)),W=H.exports,F=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-container",[o("b-row",t._l(t.videos,(function(t,e){return o("Box",{key:e,attrs:{hover:"",color:"#6fc3df",image:"https://img.youtube.com/vi/"+t.yt_id+"/0.jpg",header:t.title,body:t.desc,link:"/video?id="+t.id}})})),1)],1)],1)},K=[],Y=(o("ac4d"),o("8a81"),o("ac6a"),{name:"Videos",components:{Box:y},beforeMount:function(){this.videos=this.$store.getters.videos();var t=!0,e=!1,o=void 0;try{for(var a,i=this.videos[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var r=a.value;r.yt_id=this.getParameterByName("v",r.url)}}catch(n){e=!0,o=n}finally{try{t||null==i.return||i.return()}finally{if(e)throw o}}},methods:{getParameterByName:function(t,e){e||(e=window.location.href),t=t.replace(/[[\]]/g,"\\$&");var o=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)"),a=o.exec(e);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null}},mounted:function(){document.getElementById("nav").setAttribute("style","opacity: 1; position: sticky;")}}),Q=Y,X=Object(c["a"])(Q,F,K,!1,null,"1fe2354e",null),Z=X.exports,tt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"layout"},[o("div",{staticClass:"thumbnails my-1 hide-on-med-and-down"},t._l(t.podcasts,(function(t,e){return o("SoundCloudThumbnail",{key:e,attrs:{width:"100%",height:"150px",id:t.id,title:t.title,desc:t.desc,url:t.imgLink}})})),1),o("div",{staticClass:"video mr-5"},[o("SoundCloudEmbed",{staticClass:"my-1",attrs:{width:"100%",height:"200px",url:t.podcast.url}}),o("b-card",{staticClass:"text-dark",attrs:{title:t.podcast.title}},[o("p",[t._v(t._s(t.podcast.desc))])])],1),o("div",{staticClass:"profile"},[o("b-card",{staticClass:"m-1 text-dark my-0"},[o("div",{staticClass:"avatar"},[o("img",{attrs:{alt:"Person's Photo",src:t.author.avatar}})]),o("div",{staticClass:"bio"},[o("h3",[t._v(t._s(t.author.name))]),o("div",{staticStyle:{width:"50%",height:"2px","background-color":"#b9b9b9",margin:"auto"}}),o("p",{staticClass:"text-black-50",staticStyle:{"margin-top":"5px"}},[t._v(t._s(t.author.bio))])])])],1),o("div",{staticClass:"thumbnails my-1 show-on-med-and-down hide-on-med-and-up"},t._l(t.podcasts,(function(t,e){return o("SoundCloudThumbnail",{key:e,attrs:{width:"100%",height:"200px",id:t.id,title:t.title,desc:t.desc,url:t.imgLink}})})),1)])},et=[],ot=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("iframe",{attrs:{width:t.width,height:t.height,scrolling:"no",frameborder:"no",src:"https://w.soundcloud.com/player/?url="+t.url+"&color=0066cc"}})},at=[],it={name:"Soundcloud-Embed",props:["url","width","height"],data:function(){return{podcastId:this.getId()}},methods:{getId:function(){return this.getParameterByName("v",this.url)},getParameterByName:function(t,e){e||(e=window.location.href),t=t.replace(/[[\]]/g,"\\$&");var o=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)"),a=o.exec(e);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null}}},rt=it,nt=Object(c["a"])(rt,ot,at,!1,null,"1fbc062f",null),st=nt.exports,ct=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"thumb",on:{click:function(e){return t.goto(t.id)}}},[o("img",{style:{width:t.width,height:t.height},attrs:{alt:"Thumbnail for "+t.url,src:t.url}}),o("div",{staticClass:"desc"},[o("p",[t._v(t._s(t.title))]),o("span",[t._v(t._s(t.desc.substring(0,32)+"..."))])])])},lt=[],dt={name:"SoundCloudThumbnail",props:["url","width","height","title","desc","id"],methods:{goto:function(t){this.$router.push("/podcast?id=".concat(t))}}},ut=dt,ht=(o("d27c"),Object(c["a"])(ut,ct,lt,!1,null,"acaf58ac",null)),pt=ht.exports,mt={name:"Podcast",components:{SoundCloudThumbnail:pt,SoundCloudEmbed:st},beforeMount:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){console.log("Updating Page");var t=this.$route.query.id;if(!t)return this.$router.push("/podcasts");this.podcast=this.$store.getters.podcast(this.$route.query.id),this.author=this.$store.getters.person(this.podcast.author),this.podcasts=this.$store.getters.podcasts()}},mounted:function(){document.getElementById("nav").setAttribute("style","opacity: 1; position: sticky;")}},bt=mt,ft=(o("d552"),Object(c["a"])(bt,tt,et,!1,null,"5d10af01",null)),gt=ft.exports,vt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-container",[o("b-row",{attrs:{"aria-colcount":"4"}},t._l(t.podcasts,(function(t,e){return o("Box",{key:e,attrs:{hover:"",color:"#8d82c4",image:t.imgLink,header:t.title,body:t.desc,link:"/podcast?id="+t.id}})})),1)],1)],1)},yt=[],wt={name:"Podcasts",components:{Box:y},beforeMount:function(){this.podcasts=this.$store.getters.podcasts()},mounted:function(){document.getElementById("nav").setAttribute("style","opacity: 1; position: sticky;")}},_t=wt,xt=Object(c["a"])(_t,vt,yt,!1,null,"59b30cdb",null),kt=xt.exports,Ct=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"layout"},[o("div",{staticClass:"thumbnails hide-on-med-and-down"},t._l(t.photos,(function(t,e){return o("photo-thumbnail",{key:e,attrs:{width:"100%",height:"200px",title:t.title,desc:t.desc,url:t.url}})})),1),o("div",{staticClass:"video"},[o("img",{staticStyle:{width:"100%",height:"35vw"},attrs:{alt:"Photo Alternate",src:t.photo.url}}),o("div",{staticClass:"desc text-center"},[o("h1",[t._v(t._s(t.photo.title))]),o("div",{staticStyle:{width:"50%",height:"2px","background-color":"#b9b9b9",margin:"5px auto 10px auto"}}),o("p",{staticClass:"text-white-50"},[t._v(t._s(t.photo.desc))])])]),o("div",{staticClass:"profile"},[o("div",{staticClass:"avatar"},[o("img",{attrs:{alt:"Person's Photo",src:t.author.avatar}})]),o("div",{staticClass:"bio"},[o("h3",[t._v(t._s(t.author.name))]),o("div",{staticStyle:{width:"50%",height:"2px","background-color":"#b9b9b9",margin:"auto"}}),o("p",{staticClass:"text-white-50",staticStyle:{"margin-top":"5px"}},[t._v(t._s(t.author.bio))])])]),o("div",{staticClass:"thumbnails show-on-med-and-down hide-on-med-and-up"},t._l(t.photos,(function(t,e){return o("photo-thumbnail",{key:e,attrs:{width:"100%",height:"200px",title:t.title,desc:t.desc,url:t.url}})})),1)])},St=[],$t=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"thumb"},[o("img",{style:{width:t.width,height:t.height},attrs:{alt:"Thumbnail for "+t.url,src:t.url}}),o("div",{staticClass:"desc"},[o("p",[t._v(t._s(t.title))]),o("span",[t._v(t._s(t.desc.substring(0,32)+"..."))])])])},Pt=[],Et={name:"PhotoThumbnail",props:["url","width","height","title","desc"]},jt=Et,Bt=(o("27ae"),Object(c["a"])(jt,$t,Pt,!1,null,"5e87dbf7",null)),Ot=Bt.exports,At={name:"Photo",components:{PhotoThumbnail:Ot},beforeMount:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this.$route.query.id;if(!t)return this.$router.push("/photos");this.photo=this.$store.getters.photo(this.$route.query.id),this.author=this.$store.getters.person(this.photo.author),this.photos=this.$store.getters.photos()}},mounted:function(){document.getElementById("nav").setAttribute("style","opacity: 1; position: sticky;")}},It=At,Tt=(o("cd7b"),Object(c["a"])(It,Ct,St,!1,null,"4a433076",null)),Mt=Tt.exports,Vt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-container",[o("b-row",t._l(t.photos,(function(t,e){return o("Box",{key:e,attrs:{hover:"",color:"#96880c",image:t.url,header:t.title,body:t.desc,link:"/photo?id="+t.id}})})),1)],1)],1)},Rt=[],Dt={name:"Photos",components:{Box:y},beforeMount:function(){this.photos=this.$store.getters.photos()},mounted:function(){document.getElementById("nav").setAttribute("style","opacity: 1; position: sticky;")}},Nt=Dt,Lt=Object(c["a"])(Nt,Vt,Rt,!1,null,"184a9100",null),Ut=Lt.exports,qt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},zt=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",{staticClass:"text-center"},[t._v("Work In Progress")])])}],Jt={name:"Article"},Gt=Jt,Ht=Object(c["a"])(Gt,qt,zt,!1,null,"025bc4c6",null),Wt=Ht.exports,Ft=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},Kt=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",{staticClass:"text-center"},[t._v("Work In Progress")])])}],Yt={name:"Articles"},Qt=Yt,Xt=Object(c["a"])(Qt,Ft,Kt,!1,null,"342a235c",null),Zt=Xt.exports;a["default"].use(u["a"]);var te=new u["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:j},{path:"/video",name:"Video",component:W},{path:"/videos",name:"Videos",component:Z},{path:"/podcast",name:"Podcast",component:gt},{path:"/podcasts",name:"Podcasts",component:kt},{path:"/photo",name:"Photo",component:Mt},{path:"/photos",name:"Photos",component:Ut},{path:"/article",name:"Article",component:Wt},{path:"/articles",name:"Articles",component:Zt}]}),ee=(o("7514"),o("2f62"));a["default"].use(ee["a"]);var oe=new ee["a"].Store({state:{people:[{id:"0",name:"Ry Bleckel",email:"rbleckel@hpa.edu",bio:"Videographer, Photographer, Musician",avatar:"http://norapc.org/wp-content/uploads/2015/07/avatar-blank.png",videos:["0"],podcasts:[],articles:[],photos:[]},{id:"1",name:"Sacha Grunberg",email:"sbgrunberg@hpa.edu",bio:"Entrepreneur, Podcaster",avatar:"http://norapc.org/wp-content/uploads/2015/07/avatar-blank.png",videos:[],podcasts:["0"],articles:[],photos:[]},{id:"2",name:"Milla Betzer",email:"mbetzer@hpa.edu",avatar:"http://norapc.org/wp-content/uploads/2015/07/avatar-blank.png",bio:"Explorer",videos:[],podcasts:[],articles:[],photos:["0"]},{id:"3",name:"May-J Bui",email:"hbui@hpa.edu",avatar:"http://norapc.org/wp-content/uploads/2015/07/avatar-blank.png",bio:"Podcaster",videos:[],podcasts:["1"],articles:[],photos:[]}],videos:[{id:"0",title:"CAPPADOCIA",url:"https://www.youtube.com/watch?v=RdoGRjqJxbk",desc:"Balloons",author:"0"}],podcasts:[{id:"0",title:"Sacha Rogan Experience #1",url:"https://soundcloud.com/sacha-grunberg/podcast-episode-0-the-ry-bleckel-experience",imgLink:"https://www.irishexaminer.com/remote/media.central.ie/media/images/p/PodcastCornerLogo_large.jpg",desc:"This podcast features Ry Bleckel telling his story about the struggles he has experienced in baseball season these last couple of years.",author:"1"},{id:"1",title:"My own identity?",url:"https://soundcloud.com/hang-bui-430930714/my-own-identity",imgLink:"https://i1.sndcdn.com/artworks-000605450308-4p49v1-t500x500.jpg",desc:"Most of the time, it's hard to be honest with yourself about who you are and present your authentic true self to the world, but to be able to have the courage to tell the world that you're hiding yourself, that's even harder.\n",author:"3"}],articles:[],photos:[{id:"0",title:"MAKE A CHANGE",desc:"The world is absolutely amazing and filled with a vast variety of beautiful places, but it is not going to stay this way for long. Global warming and pollution are ultimately going to change this world in the utmost negative way. Our overall message is to utilize our youth and make you see the bigger picture.",author:"2",url:"/img/photo-0.jpg"}]},getters:{person:function(t){return function(e){return t.people.find((function(t){return t.id===e}))}},video:function(t){return function(e){return t.videos.find((function(t){return t.id===e}))}},videos:function(t){return function(){return t.videos}},podcast:function(t){return function(e){return t.podcasts.find((function(t){return t.id===e}))}},podcasts:function(t){return function(){return t.podcasts}},article:function(t){return function(e){return t.articles.find((function(t){return t.id===e}))}},articles:function(t){return function(){return t.articles}},photo:function(t){return function(e){return t.photos.find((function(t){return t.id===e}))}},photos:function(t){return function(){return t.photos}}},mutations:{},actions:{}}),ae=(o("5650"),o("5f5b"));a["default"].use(ae["a"]),a["default"].config.productionTip=!1,new a["default"]({router:te,store:oe,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var a=o("e332"),i=o.n(a);i.a},"5da9":function(t,e,o){},"6b0d":function(t,e,o){},"857d":function(t,e,o){"use strict";var a=o("4ec8"),i=o.n(a);i.a},"8b68":function(t,e,o){},"8c29":function(t,e,o){},b2fb:function(t,e,o){"use strict";var a=o("8c29"),i=o.n(a);i.a},bf5a:function(t,e,o){},cccb:function(t,e,o){"use strict";var a=o("d563"),i=o.n(a);i.a},cd7b:function(t,e,o){"use strict";var a=o("390b"),i=o.n(a);i.a},d27c:function(t,e,o){"use strict";var a=o("5da9"),i=o.n(a);i.a},d552:function(t,e,o){"use strict";var a=o("6b0d"),i=o.n(a);i.a},d563:function(t,e,o){},e332:function(t,e,o){},f3d9:function(t,e,o){"use strict";var a=o("f58c"),i=o.n(a);i.a},f58c:function(t,e,o){}});
//# sourceMappingURL=app.6b5957e3.js.map