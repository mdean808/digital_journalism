(function(t){function e(e){for(var a,n,r=e[0],l=e[1],c=e[2],h=0,u=[];h<r.length;h++)n=r[h],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(u.length)u.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],a=!0,r=1;r<o.length;r++){var l=o[r];0!==i[l]&&(a=!1)}a&&(s.splice(e--,1),t=n(n.s=o[0]))}return t}var a={},i={app:0},s=[];function n(e){if(a[e])return a[e].exports;var o=a[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=a,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},1043:function(t,e,o){"use strict";var a=o("ba68"),i=o.n(a);i.a},"196d":function(t,e,o){"use strict";var a=o("520e"),i=o.n(a);i.a},3171:function(t,e,o){"use strict";var a=o("e5c9"),i=o.n(a);i.a},3509:function(t,e,o){},"42a4":function(t,e,o){"use strict";var a=o("70bd"),i=o.n(a);i.a},"500f":function(t,e,o){},"520e":function(t,e,o){},"52eb":function(t,e,o){"use strict";var a=o("ec60"),i=o.n(a);i.a},5650:function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("f751"),o("097d");var a=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{attrs:{fluid:"",id:"app"}},[o("b-row",{staticClass:"py-2 mt-2",staticStyle:{"/* position":"absolute","*/ width":"100vw",margin:"auto"},attrs:{id:"nav"}},[o("b-col",{staticClass:"text-center navvy"},[o("router-link",{staticClass:"dshado",attrs:{to:"/photos"}},[t._v("photos")]),o("router-link",{staticClass:"dshado",attrs:{to:"/videos"}},[t._v("videos")]),o("router-link",{staticClass:"hide-on-med-and-down",attrs:{to:"/"}},[o("h1",{staticClass:"mx-5 font-weight-light shado"},[t._v("V A S T")])]),o("router-link",{staticClass:"dshado",attrs:{to:"/podcasts"}},[t._v("podcasts")]),o("router-link",{staticClass:"dshado",attrs:{to:"/articles"}},[t._v("articles")])],1)],1),o("div",{staticClass:"body"},[o("transition",{attrs:{name:"fade",mode:"out-in"}},[o("router-view")],1)],1),o("b-row",[o("b-col",{staticClass:"px-0"},[o("div",{staticClass:"text-center",staticStyle:{height:"150px",width:"100%",background:"#1b1e21","padding-top":"40px"},attrs:{id:"footer"}},[o("p",[t._v("Website by Dillon DuPont and Morgan Dean")]),o("router-link",{attrs:{to:"/"}},[o("p",[t._v("© Vast Storytelling 2019")])])],1)])],1)],1)},s=[],n={name:"App"},r=n,l=(o("5c0b"),o("2877")),c=Object(l["a"])(r,i,s,!1,null,null,null),d=c.exports,h=o("8c4f"),u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t._m(0),t._m(1),o("div",{staticStyle:{"padding-top":"100vh"}},[o("div",{staticClass:"hide-on-med-and-down"},[o("b-row",{attrs:{id:"content"}},[o("b-col",{attrs:{cols:"4"}},[o("router-link",{attrs:{to:"/photos"}},[o("Box",{attrs:{hover:"",color:"#6fc3df",header:"Photos",body:"look at amazing photos",image:"https://live.staticflickr.com/2813/33706635605_3447401c73_b.jpg",parallax:""}})],1)],1),o("b-col",[o("router-link",{attrs:{to:"/videos"}},[o("Box",{attrs:{hover:"",color:"#8d82c4",header:"Videos",body:"spectate neat videos",image:"https://cdn.pixabay.com/photo/2017/11/28/13/10/maui-2983620_960_720.jpg",parallax:""}})],1)],1)],1),o("b-row",[o("b-col",{attrs:{cols:"8"}},[o("router-link",{attrs:{to:"/podcasts"}},[o("Box",{attrs:{hover:"",color:"#ec8d81",header:"Podcasts",body:"feast your ears on captivating podcasts",image:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Submillimeter_Array_Night.jpg",parallax:""}})],1)],1),o("b-col",[o("router-link",{attrs:{to:"/articles"}},[o("Box",{attrs:{hover:"",color:"#e7b788",header:"Articles",body:"read some interesting texts",image:"https://media.nbcdfw.com/images/1941*1092/AP_19196579152982.jpg",parallax:""}})],1)],1)],1)],1),o("div",{staticClass:"show-on-med-and-down hide-on-med-and-up"},[o("b-row",[o("b-col",[o("router-link",{attrs:{to:"/photos"}},[o("Box",{attrs:{hover:"",color:"#6fc3df",header:"Photos",body:"look at amazing photos",image:"https://live.staticflickr.com/2813/33706635605_3447401c73_b.jpg",parallax:""}})],1)],1),o("b-col",[o("router-link",{attrs:{to:"/videos"}},[o("Box",{attrs:{hover:"",color:"#8d82c4",header:"Videos",body:"spectate neat videos",image:"https://cdn.pixabay.com/photo/2017/11/28/13/10/maui-2983620_960_720.jpg",parallax:""}})],1)],1)],1),o("b-row",[o("b-col",[o("router-link",{attrs:{to:"/podcasts"}},[o("Box",{attrs:{hover:"",color:"#ec8d81",header:"Podcasts",body:"feast your ears on captivating podcasts",image:"https://upload.wikimedia.org/wikipedia/commons/9/9a/Submillimeter_Array_Night.jpg",parallax:""}})],1)],1),o("b-col",[o("router-link",{attrs:{to:"/articles"}},[o("Box",{attrs:{hover:"",color:"#e7b788",header:"Articles",body:"read some interesting texts",image:"https://media.nbcdfw.com/images/1941*1092/AP_19196579152982.jpg",parallax:""}})],1)],1)],1)],1)]),o("Box",{attrs:{"box-style":"padding-top: 150px !important; padding-bottom: 150px !important; text-align: center",header:"A Storytelling Hub",body:"Content by Digital Journalism students of '19 - '20"}})],1)},p=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"row"},[o("div",{staticClass:"fullscreen"},[o("div",{staticClass:"video"},[o("div",{staticClass:"wrapper"},[o("iframe",{attrs:{src:"//player.vimeo.com/video/108960330?background=1",width:"500",height:"281",frameborder:"0",webkitallowfullscreen:"",mozallowfullscreen:"",allowfullscreen:""}})])])])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"read-more"},[o("h2",{staticClass:"animated bounce"},[t._v("👇 READ MORE 👇")])])}],m=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-row",{staticClass:"box",style:t.cssProps,on:{click:function(e){return t.goto(t.link)}}},[o("b-col",{class:"px-5 py-5 content "+t.boxClass,style:t.boxStyle},[o("h1",{style:t.headerStyle},[t._v(t._s(t.header))]),t._t("default",[o("p",[t._v(t._s(t.body))])])],2)],1)},g=[],f={props:{color:String,image:String,link:String,"box-style":String,"box-class":String,"header-style":String,header:{type:String,default:"Bruh."},body:{type:String,default:"This is a bruh moment"}},computed:{cssProps:function(){return{"--bg-color":this.color||"#242943","--bg-image":"url(".concat(this.image,")")}}},methods:{goto:function(t){t&&this.$router.push(t)}}},b=f,v=(o("b2fb"),Object(l["a"])(b,m,g,!1,null,"dedbbddc",null)),y=v.exports,w={name:"home",components:{Box:y},mounted:function(){function t(){var t=$(window).height(),e=$(".video").outerHeight(),o=t/e;e<=t&&$(".video").css({"-webkit-transform":"scale("+o+") translateY(-50%)",transform:"scale("+o+") translateY(-50%)"})}document.getElementById("nav").setAttribute("style","opacity: 1; position: absolute;"),$(window).on("load resize",(function(){t()}))}},_=w,x=(o("cccb"),o("f275"),Object(l["a"])(_,u,p,!1,null,"0754bf9e",null)),k=x.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",{staticClass:"text-center"},[t._v("Work In Progress")])])}],P={name:"About"},T=P,E=Object(l["a"])(T,C,S,!1,null,"fb934e18",null),B=E.exports,j=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"template"},[o("b-row",{staticClass:"hide-on-med-and-down"},[o("b-col",{attrs:{cols:"2"}},t._l(t.videos,(function(t,e){return o("video-thumbnail",{key:e,attrs:{id:t.id,width:"100%",height:"9vw",title:t.title,desc:t.desc,url:t.url}})})),1),o("b-col",{attrs:{cols:"8"}},[o("VideoEmbed",{attrs:{width:"100%",height:"35vw",url:t.video.url}}),o("div",{staticClass:"text-light text-center",staticStyle:{"margin-top":"30px"}},[o("h1",[t._v(t._s(t.video.title))]),o("div",{staticStyle:{width:"50%",height:"2px","background-color":"#b0b0b0",margin:"auto"}}),o("p",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.video.desc))])])],1),o("b-col",{staticClass:"profile",attrs:{cols:"2"}},[o("div",{staticClass:"m-1 text-light my-0"},[o("div",{staticClass:"avatar"},[o("img",{attrs:{alt:"Person's Photo",src:t.author.avatar}})]),o("div",{staticClass:"bio"},[o("h3",[t._v(t._s(t.author.name))]),o("div",{staticStyle:{width:"50%",height:"2px","background-color":"#b0b0b0",margin:"auto"}}),o("p",{staticClass:"text-light",staticStyle:{"margin-top":"5px"}},[t._v(t._s(t.author.bio))])])])])],1),o("b-row",{staticClass:"hide-on-med-and-up show-on-med-and-down",staticStyle:{margin:"auto"}},[o("VideoEmbed",{attrs:{width:"100%",height:"50vw",url:t.video.url}}),o("div",{staticClass:"text-light text-center",staticStyle:{"margin-top":"20px"}},[o("h1",[t._v(t._s(t.video.title))]),o("p",{staticStyle:{color:"#bbbbbb"}},[t._v("By "+t._s(t.author.name))]),o("div",{staticStyle:{width:"50%",height:"2px","background-color":"#b0b0b0",margin:"auto"}}),o("p",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.video.desc))])])],1),o("b-row",{staticClass:"hide-on-med-and-up show-on-med-and-down"},t._l(t.videos,(function(t,e){return o("video-thumbnail",{key:e,staticStyle:{width:"80%",margin:"auto"},attrs:{id:t.id,width:"100%",height:"45vw",title:t.title,desc:t.desc,url:t.url}})})),1)],1)},A=[],O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("iframe",{style:{width:t.width,height:t.height},attrs:{src:"https://www.youtube.com/embed/"+t.videoId,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})},I=[],M=(o("3b2b"),o("a481"),{name:"Video-Embed",props:["url","width","height"],data:function(){return{videoId:this.getId()}},methods:{getId:function(){return this.getParameterByName("v",this.url)},getParameterByName:function(t,e){e||(e=window.location.href),t=t.replace(/[[\]]/g,"\\$&");var o=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)"),a=o.exec(e);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null}}}),D=M,W=Object(l["a"])(D,O,I,!1,null,"f9066acc",null),L=W.exports,R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"thumb",on:{click:function(e){return t.goto(t.id)}}},[o("img",{style:{width:t.width,height:t.height},attrs:{alt:"Thumbnail for "+t.url,src:"https://img.youtube.com/vi/"+t.videoId+"/maxresdefault.jpg"}}),o("div",{staticClass:"desc"},[o("p",[t._v(t._s(t.title))]),o("span",[t._v(t._s(t.desc.substring(0,32)+"..."))])])])},q=[],V={name:"VideoThumbnail",props:["url","width","height","title","desc","id"],data:function(){return{videoId:this.getId()}},methods:{getId:function(){return this.getParameterByName("v",this.url)},getParameterByName:function(t,e){e||(e=window.location.href),t=t.replace(/[[\]]/g,"\\$&");var o=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)"),a=o.exec(e);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null},goto:function(t){t&&this.$router.route.params.id!==t&&this.$router.push("/video?id=".concat(t))}}},N=V,z=(o("196d"),Object(l["a"])(N,R,q,!1,null,"452e3bd0",null)),H=z.exports,U={name:"Video",components:{VideoThumbnail:H,VideoEmbed:L},beforeMount:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this.$route.query.id;if(!t)return this.$router.push("/videos");this.video=this.$store.getters.video(this.$route.query.id),this.author=this.$store.getters.person(this.video.author),this.videos=this.$store.getters.videos()}},mounted:function(){document.getElementById("nav").setAttribute("style","opacity: 1; position: sticky;")}},F=U,G=(o("52eb"),Object(l["a"])(F,j,A,!1,null,"cb4726be",null)),J=G.exports,X=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-container",{staticStyle:{padding:"0"}},[o("b-row",[o("b-col",{attrs:{cols:"12"}},t._l(t.videos,(function(e,a){return o("Box",{key:a,attrs:{hover:"",color:t.color(e.title),image:"https://img.youtube.com/vi/"+e.yt_id+"/maxresdefault.jpg",header:e.title,body:e.desc,link:"/video?id="+e.id}})})),1)],1)],1)},Y=[],K=(o("ac4d"),o("8a81"),o("ac6a"),{color:function(t,e,o){var a,i,s=0;if(0===t.length)return s;for(a=0;a<t.length;a++)i=t.charCodeAt(a),s=(s<<5)-s+i,s|=0;var n=1e4*Math.sin(s+2);return"hsl(".concat(360*(n-Math.floor(n)),", ").concat(e,"%, ").concat(o,"%)")}}),Q={name:"Videos",components:{Box:y},beforeMount:function(){this.videos=this.$store.getters.videos();var t=!0,e=!1,o=void 0;try{for(var a,i=this.videos[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var s=a.value;s.yt_id=this.getParameterByName("v",s.url)}}catch(n){e=!0,o=n}finally{try{t||null==i.return||i.return()}finally{if(e)throw o}}},methods:{getParameterByName:function(t,e){e||(e=window.location.href),t=t.replace(/[[\]]/g,"\\$&");var o=new RegExp("[?&]"+t+"(=([^&#]*)|&|#|$)"),a=o.exec(e);return a?a[2]?decodeURIComponent(a[2].replace(/\+/g," ")):"":null},color:function(t){return K.color(t,50,43)}},mounted:function(){document.getElementById("nav").setAttribute("style","opacity: 1; position: sticky;")}},Z=Q,tt=Object(l["a"])(Z,X,Y,!1,null,"8233a9ea",null),et=tt.exports,ot=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"layout"},[o("b-row",{staticClass:"hide-on-med-and-down"},[o("b-col",{attrs:{cols:"2"}},t._l(t.podcasts,(function(t,e){return o("SoundCloudThumbnail",{key:e,attrs:{width:"100%",height:"9vw",id:t.id,title:t.title,desc:t.desc,url:t.imgLink}})})),1),o("b-col",{staticClass:"video",attrs:{cols:"8"}},[o("SoundCloudEmbed",{staticClass:"my-1",attrs:{width:"100%",height:"200px",url:t.podcast.url}}),o("b-card",{staticClass:"text-dark",attrs:{title:t.podcast.title}},[o("p",[t._v(t._s(t.podcast.desc))])])],1),o("b-col",{staticClass:"profile",attrs:{cols:"2"}},[o("b-card",{staticClass:"m-1 text-dark my-0"},[o("div",{staticClass:"avatar"},[o("img",{attrs:{alt:"Person's Photo",src:t.author.avatar}})]),o("div",{staticClass:"bio"},[o("h3",[t._v(t._s(t.author.name))]),o("div",{staticStyle:{width:"50%",height:"2px","background-color":"#b9b9b9",margin:"auto"}}),o("p",{staticClass:"text-black-50",staticStyle:{"margin-top":"5px"}},[t._v(t._s(t.author.bio))])])])],1)],1),o("b-row",{staticClass:"hide-on-med-and-up show-on-med-and-down",staticStyle:{margin:"auto"}},[o("SoundCloudEmbed",{staticClass:"my-1",attrs:{width:"100%",height:"200px",url:t.podcast.url}}),o("b-card",{staticClass:"text-dark",staticStyle:{"margin-top":"20px"},attrs:{title:t.podcast.title}},[o("p",[t._v("By "+t._s(t.author.name))]),o("div",{staticStyle:{width:"50%",height:"2px","margin-bottom":"14px","background-color":"#b0b0b0"}}),o("p",[t._v(t._s(t.podcast.desc))])])],1),o("b-row",{staticClass:"hide-on-med-and-up show-on-med-and-down"},t._l(t.podcasts,(function(t,e){return o("SoundCloudThumbnail",{key:e,staticStyle:{width:"80%",margin:"auto"},attrs:{width:"100%",height:"45vw",id:t.id,title:t.title,desc:t.desc,url:t.imgLink}})})),1)],1)},at=[],it=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("iframe",{attrs:{width:t.width,height:t.height,scrolling:"no",frameborder:"no",src:"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/"+t.url+"&color=242943"}})},st=[],nt={name:"SoundCloud-Embed",props:["url","width","height"]},rt=nt,lt=Object(l["a"])(rt,it,st,!1,null,"5cdfc61d",null),ct=lt.exports,dt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"thumb",on:{click:function(e){return t.goto(t.id)}}},[o("img",{style:{width:t.width,height:t.height},attrs:{alt:"Thumbnail for "+t.url,src:t.url}}),o("div",{staticClass:"desc"},[o("p",[t._v(t._s(t.title))]),o("span",[t._v(t._s(t.desc.substring(0,32)+"..."))])])])},ht=[],ut={name:"SoundCloudThumbnail",props:["url","width","height","title","desc","id"],methods:{goto:function(t){t&&this.$router.push("/podcast?id=".concat(t))}}},pt=ut,mt=(o("42a4"),Object(l["a"])(pt,dt,ht,!1,null,"130fc43d",null)),gt=mt.exports,ft={name:"Podcast",components:{SoundCloudThumbnail:gt,SoundCloudEmbed:ct},beforeMount:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){console.log("Updating Page");var t=this.$route.query.id;if(console.log(t),!t)return this.$router.push("/podcasts");this.podcast=this.$store.getters.podcast(this.$route.query.id),this.author=this.$store.getters.person(this.podcast.author),this.podcasts=this.$store.getters.podcasts()}},mounted:function(){document.getElementById("nav").setAttribute("style","opacity: 1; position: sticky;")}},bt=ft,vt=(o("3171"),Object(l["a"])(bt,ot,at,!1,null,"25b62c96",null)),yt=vt.exports,wt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-container",[o("b-row",t._l(t.podcasts,(function(e,a){return o("Box",{key:a,attrs:{hover:"",color:t.color(e.title),image:e.imgLink,header:e.title,body:e.desc,link:"/podcast?id="+e.id}})})),1)],1)],1)},_t=[],xt={name:"Podcasts",components:{Box:y},beforeMount:function(){this.podcasts=this.$store.getters.podcasts()},methods:{color:function(t){return K.color(t,50,43)}},mounted:function(){document.getElementById("nav").setAttribute("style","opacity: 1; position: sticky;")}},kt=xt,Ct=Object(l["a"])(kt,wt,_t,!1,null,"01d8363c",null),St=Ct.exports,$t=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"template"},[o("b-row",{staticClass:"hide-on-med-and-down"},[o("b-col",{attrs:{cols:"2"}},t._l(t.photos,(function(t,e){return o("photo-thumbnail",{key:e,attrs:{width:"100%",height:"9vw",title:t.title,desc:t.desc,url:t.url,id:e,type:"photo"}})})),1),o("b-col",{attrs:{cols:"8"}},[o("img",{staticStyle:{width:"100%",height:"35vw"},attrs:{alt:"Photo Alternate",src:t.photo.url}}),o("div",{staticClass:"text-light text-center",staticStyle:{margin:"20px 0"}},[o("h1",[t._v(t._s(t.photo.title))]),o("div",{staticStyle:{width:"50%",height:"2px","background-color":"#b0b0b0",margin:"auto"}}),o("p",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.photo.desc))])])]),o("b-col",{staticClass:"profile",attrs:{cols:"2"}},[o("div",{staticClass:"m-1 text-light my-0"},[o("div",{staticClass:"avatar"},[o("img",{attrs:{alt:"Person's Photo",src:t.author.avatar}})]),o("div",{staticClass:"bio"},[o("h3",[t._v(t._s(t.author.name))]),o("div",{staticStyle:{width:"50%",height:"2px","background-color":"#b9b9b9",margin:"auto"}}),o("p",{staticClass:"text-light",staticStyle:{"margin-top":"5px"}},[t._v(t._s(t.author.bio))])])])])],1),o("b-row",{staticClass:"hide-on-med-and-up show-on-med-and-down",staticStyle:{margin:"auto"}},[o("img",{staticStyle:{width:"100%",height:"60vw"},attrs:{alt:"Photo Alternate",src:t.photo.url}}),o("div",{staticClass:"text-light text-center",staticStyle:{"margin-top":"30px"}},[o("h1",[t._v(t._s(t.photo.title))]),o("p",{staticStyle:{color:"#bbbbbb"}},[t._v("By "+t._s(t.author.name))]),o("div",{staticStyle:{width:"50%",height:"2px","background-color":"#b0b0b0",margin:"auto"}}),o("p",{staticStyle:{"margin-top":"10px"}},[t._v(t._s(t.photo.desc))])])]),o("b-row",{staticClass:"hide-on-med-and-up show-on-med-and-down"},t._l(t.photos,(function(t,e){return o("photo-thumbnail",{key:e,staticStyle:{width:"80%",margin:"auto"},attrs:{width:"100%",height:"45vw",title:t.title,desc:t.desc,url:t.url}})})),1)],1)},Pt=[],Tt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"thumb",on:{click:function(e){return t.goto(t.id,t.type)}}},[o("img",{style:{width:t.width,height:t.height},attrs:{alt:"Thumbnail for "+t.url,src:t.url}}),o("div",{staticClass:"desc"},[o("p",[t._v(t._s(t.title))]),o("span",[t._v(t._s(t.desc.substring(0,32)+"..."))])])])},Et=[],Bt={name:"PhotoThumbnail",props:["url","width","height","title","desc","id","type"],methods:{goto:function(t,e){t&&this.$router.push("/".concat(e,"?id=").concat(t))}}},jt=Bt,At=(o("cd07"),Object(l["a"])(jt,Tt,Et,!1,null,"4a4407e4",null)),Ot=At.exports,It={name:"Photo",components:{PhotoThumbnail:Ot},beforeMount:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this.$route.query.id;if(!t)return this.$router.push("/photos");this.photo=this.$store.getters.photo(this.$route.query.id),this.author=this.$store.getters.person(this.photo.author),this.photos=this.$store.getters.photos()}},mounted:function(){document.getElementById("nav").setAttribute("style","opacity: 1; position: sticky;")}},Mt=It,Dt=(o("1043"),Object(l["a"])(Mt,$t,Pt,!1,null,"4a389860",null)),Wt=Dt.exports,Lt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-container",[o("b-row",t._l(t.photos,(function(e,a){return o("Box",{key:a,attrs:{hover:"",color:t.color(e.title),image:e.url,header:e.title,body:e.desc,link:"/photo?id="+e.id}})})),1)],1)],1)},Rt=[],qt={name:"Photos",components:{Box:y},methods:{color:function(t){return K.color(t,50,43)}},beforeMount:function(){this.photos=this.$store.getters.photos(),this.color=K.photo()},mounted:function(){document.getElementById("nav").setAttribute("style","opacity: 1; position: sticky;")}},Vt=qt,Nt=Object(l["a"])(Vt,Lt,Rt,!1,null,"4282a7b3",null),zt=Nt.exports,Ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"template"},[a("b-row",{staticClass:"hide-on-med-and-down"},[a("b-col",{attrs:{cols:"2"}},t._l(t.articles,(function(t,e){return a("photo-thumbnail",{key:e,attrs:{id:e,width:"100%",height:"9vw",title:t.title,desc:t.desc,url:t.url,type:"article"}})})),1),a("b-col",{attrs:{cols:"8"}},[a("div",{staticClass:"text-light mb-4"},[a("b-card",{staticClass:"text-dark px-4"},[a("h1",{staticClass:"text-center mb-4 mt-2"},[t._v(t._s(t.article.title))]),a("p",{staticClass:"article",domProps:{innerHTML:t._s(o("d4cd")({html:!0,linkify:!0,typographer:!0}).render(t.article.desc))}})])],1)]),a("b-col",{staticClass:"profile",attrs:{cols:"2"}},[a("b-card",{staticClass:"m-1 text-dark my-0"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{alt:"Person's Photo",src:t.author.avatar}})]),a("div",{staticClass:"bio"},[a("h3",[t._v(t._s(t.author.name))]),a("div",{staticStyle:{width:"50%",height:"2px","background-color":"#b9b9b9",margin:"auto"}}),a("p",{staticClass:"text-black-50",staticStyle:{"margin-top":"5px"}},[t._v(t._s(t.author.bio))])])])],1)],1),a("b-row",{staticClass:"hide-on-med-and-up show-on-med-and-down",staticStyle:{margin:"auto"}},[a("div",{staticClass:"text-light text-center",staticStyle:{"margin-top":"30px"}},[a("h1",[t._v(t._s(t.article.title))]),a("p",{staticStyle:{color:"#bbbbbb"}},[t._v("By "+t._s(t.author.name))]),a("div",{staticStyle:{width:"50%",height:"2px","background-color":"#b0b0b0",margin:"auto"}}),a("p",{staticClass:"article"},[t._v(t._s(t.article.desc))])])]),a("b-row",{staticClass:"hide-on-med-and-up show-on-med-and-down"},t._l(t.articles,(function(t,e){return a("photo-thumbnail",{key:e,staticStyle:{width:"80%",margin:"auto"},attrs:{width:"100%",height:"45vw",title:t.title,desc:t.desc,url:t.url}})})),1)],1)},Ut=[],Ft={name:"Article",components:{PhotoThumbnail:Ot},beforeMount:function(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData:function(){var t=this.$route.query.id;if(!t)return this.$router.push("/articles");this.article=this.$store.getters.article(this.$route.query.id),this.author=this.$store.getters.person(this.article.author),this.articles=this.$store.getters.articles()}},mounted:function(){document.getElementById("nav").setAttribute("style","opacity: 1; position: sticky;")}},Gt=Ft,Jt=(o("edc3"),Object(l["a"])(Gt,Ht,Ut,!1,null,"14c26352",null)),Xt=Jt.exports,Yt=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("b-container",[o("b-row",t._l(t.articles,(function(t,e){return o("Box",{key:e,attrs:{hover:"",color:"#96880c",image:t.url,header:t.title,body:t.desc.substring(0,150)+"...",link:"/article?id="+t.id}})})),1)],1)],1)},Kt=[],Qt={name:"Articles",components:{Box:y},beforeMount:function(){this.articles=this.$store.getters.articles()},mounted:function(){document.getElementById("nav").setAttribute("style","opacity: 1; position: sticky;")}},Zt=Qt,te=Object(l["a"])(Zt,Yt,Kt,!1,null,"16b42d7b",null),ee=te.exports;a["default"].use(h["a"]);var oe=new h["a"]({base:"/",routes:[{path:"/",name:"Home",component:k},{path:"/about",name:"About",component:B},{path:"/video",name:"Video",component:J},{path:"/videos",name:"Videos",component:et},{path:"/podcast",name:"Podcast",component:yt},{path:"/podcasts",name:"Podcasts",component:St},{path:"/photo",name:"Photo",component:Wt},{path:"/photos",name:"Photos",component:zt},{path:"/article",name:"Article",component:Xt},{path:"/articles",name:"Articles",component:ee}]}),ae=(o("7514"),o("2f62"));a["default"].use(ae["a"]);var ie=new ae["a"].Store({state:{people:[{id:"0",name:"Ry Bleckel",email:"rbleckel@hpa.edu",bio:"Videographer, Photographer, Musician",avatar:"http://norapc.org/wp-content/uploads/2015/07/avatar-blank.png",videos:["0"],podcasts:[],articles:[],photos:[]},{id:"1",name:"Sacha Grunberg",email:"sbgrunberg@hpa.edu",bio:"Entrepreneur, Podcaster",avatar:"http://norapc.org/wp-content/uploads/2015/07/avatar-blank.png",videos:[],podcasts:["0"],articles:[],photos:[]},{id:"2",name:"Milla Betzer",email:"mbetzer@hpa.edu",avatar:"http://norapc.org/wp-content/uploads/2015/07/avatar-blank.png",bio:"Explorer",videos:[],podcasts:[],articles:[],photos:["0"]},{id:"3",name:"May-J Bui",email:"hbui@hpa.edu",avatar:"http://norapc.org/wp-content/uploads/2015/07/avatar-blank.png",bio:"Podcaster",videos:[],podcasts:["1"],articles:[],photos:[]},{id:"4",name:"Morgan Dean",email:"mdean@hpa.edu",avatar:"http://norapc.org/wp-content/uploads/2015/07/avatar-blank.png",bio:"Writer, Programmer",videos:[],podcasts:[],articles:["1"],photos:[]},{id:"5",name:"Dillon DuPont",email:"ddupont@hpa.edu",avatar:"http://norapc.org/wp-content/uploads/2015/07/avatar-blank.png",bio:"Writer, Programmer",videos:[],podcasts:[],articles:["2"],photos:[]}],videos:[{id:"0",title:"CAPPADOCIA",url:"https://www.youtube.com/watch?v=RdoGRjqJxbk",desc:"Balloons",author:"0"}],podcasts:[{id:"0",title:"Sacha Experience #1",url:"https://soundcloud.com/sacha-grunberg/podcast-episode-0-the-ry-bleckel-experience",imgLink:"https://www.irishexaminer.com/remote/media.central.ie/media/images/p/PodcastCornerLogo_large.jpg",desc:"This podcast features Ry Bleckel telling his story about the struggles he has experienced in baseball season these last couple of years.",author:"1"},{id:"1",title:"My own identity?",url:"688834417",imgLink:"https://i1.sndcdn.com/artworks-000605450308-4p49v1-t500x500.jpg",desc:"Most of the time, it's hard to be honest with yourself about who you are and present your authentic true self to the world, but to be able to have the courage to tell the world that you're hiding yourself, that's even harder.\n\n",author:"3"}],articles:[{id:"0",title:"Cookbook",desc:"Many countries that are prominently known for their cuisine revolve around a theme that makes them so well regarded. French food is prided on its simplicity and yet finding the sophistication within the simplicity. The ingredients used are the basics such as butter, olive oil, and other condiments that pair with tasty cuts of meat or seafood. Obviously, it isn’t possible to capture the complexity of French cuisine in a couple of sentences but the essence lies in how detailed and multifaceted flavor combinations can be achieved, with simple ingredients and finesse. On the other end of the spectrum lies Indian cuisine. While the historically Indian food is way more entangled, it is possible to separate it geographically in five general categories: The North, South, East, West, and Northeast. All of these different areas have distinct culinary differences and yet they can be united with the oversimplified and often distorted title of “Indian food”. The importance of understanding the culinary diversity of India is important, but I believe that common ground between all of these different kitchens is how masterpieces could be achieved with the right correct flavor and spice combinations. If French food is based on simplicity and the basics, Indian food is about using historical, generational, and familial knowledge to find the perfect flavor combinations out of a vast world of different tastes, spices, and techniques. The ability to marry these two different ways of cooking from the East, and West so to speak, is the reason why I think Turkish food is so special. Only by understanding the depth and history that forms the culinary composition of a country, can we really understand what makes it so unique. For a lot of people, food is an agent of survival, and survival only. I am privileged enough to look a little bit deeper than that and analyze the implication behind everything that I eat: ethically, culturally, historically, and even emotionally. The tiny bit of background knowledge I provided earlier is an example of what these series of articles will be aiming to accomplish. Diving multiple levels deep into the stories behind what we and how that composes the way that we perceive food around us.",author:"2",url:"/img/photo-0.jpg"},{id:"1",title:"Week in Review: corona time",desc:"On Monday, the US Senate heard statements from both sides of the Donald Trump impeachment trial. This was a precursor to the final vote to charge or acquit Trump of charges on Wednesday. Before the final vote, though, Trump had his State of the Union address on Tuesday, where he boasted of the boosted economy and bills and legislation that he has helped to put into action. While he was speaking, though, Nancy Pelosi did her best to undermine Trump. Every few minutes she would roll her eye, glance at her paper, and mutter something. This went on until the end of the speech, where she eventually decided to tear up her copy of his speech, making a buzz in the media and effectively undermining his speech. On Wednesday, the day everyone was waiting for, where not a single person had any idea what would happen, the Republicans majority in the senate voted to acquit Trump. Shockingly, though, Mitt Romney came out that morning, saying that he would vote against his party lines and vote to remove Trump. Ultimately, it didn’t matter, although the members of the GOP are now calling to ostracize the senator.\n\nOutside of politics, though, Tesla’s stock has gone through the roof, and then crashed again. When the markets opened on Monday, TSLA was worth $650. By the time markets opened on Tuesday, it was worth $914 dollars, and then peaking at $961. Alas, though, Tesla was not meant to go to the moon. (That’s why we have SpaceX) When markets closed on Wednesday, TSLA was worth $734, down $224 from Tuesday. What a roller coaster ride. The members over at r/wallstreetbets were melting down over all of the earnings they were making, and then everything fell apart, leading to an influx of memes and karma farming. \n\nOn everyone’s mind right now is the coronavirus. Over 17,000 people have been infected, with over 500 people dead. Unfortunately, for those of us in the US, we have heard of a few confirmed cases. No one has died yet, but we have bad news for a certain type of music lover. Those who enjoy tunes by pale individuals who talk really fast, will be saddened to hear that Eminem, renowned white rapper who can’t stop whining about nothing, has contracted the coronavirus. In a statement released by doctors, it has been revealed that his palms were sweaty, knees weak and arms were heavy. In a recent photo, it is apparent he has vomited on his sweater already. Initial testing has also revealed it was mum's spaghetti that gave him the virus. Our thoughts are with him and his mom (she must feel really guilty), and we hope that he will be able to overcome the illness with a strong Revival. Perhaps we will finally meet The Real Slim Shady when he completes his Recovery. Luckily, doctors say a Relapse [Deluxe] is unlikely.\n\nThis week isn’t even over (hell, it’s still Wednesday), and we haven’t even touched on other news, like sports, tech, and memes. We here at Morgan Writes some Bullshit are totally exhausted (from lack of sleep) and really think the world could slow down on the news cycles. We believe that all of the news above is enough for one entire week -- not 3 days of one. \n\n",author:"4",url:"https://storage.googleapis.com/gd-wagtail-prod-assets/images/evolving_google_identity_2x.max-4000x2000.jpegquality-90.jpg"},{id:"2",title:"Musik scene: Les Paul",desc:"Lester William Polsfuss, also known as Les Paul, was an inventor, a songwriter, and a pioneer of modern music. His innovative spirit led to the defining of musical styles, many recording innovations, and even the electric guitar.\n\nOutside of politics, though, Tesla’s stock has gone through the roof, and then crashed again. When the markets opened on Monday, TSLA was worth $650. By the time markets opened on Tuesday, it was worth $914 dollars, and then peaking at $961. Alas, though, Tesla was not meant to go to the moon. (That’s why we have SpaceX) When markets closed on Wednesday, TSLA was worth $734, down $224 from Tuesday. What a roller coaster ride. The members over at r/wallstreetbets were melting down over all of the earnings they were making, and then everything fell apart, leading to an influx of memes and karma farming. \n\nEven at a very young age, Les Paul repeatedly demonstrated his talent at music. By the time he became a teenager, he was already a musical prodigy. Lester dropped out of high school in 1934 and performed semi-professionally as a country singer and guitarist. Making money from tips during drive-in playings, Les Paul began sound experiments that would go down in music history.\t\t\t\t\t\n\nAt the time, recording with a full band was cumbersome and greatly limited. Les Paul refused to settle, despite the limitations of the technology, and continued to experiment towards being better. He began utilizing techniques such as multitrack recording and overdubbing, enabling one to combine multiple instrument recordings into one track. Musicians everywhere came to Les Paul, requesting a home recording from him.\t\t\t\t\t\n\nBut tragedy struck in 1948, when the legendary guitarist shattered his right arm and elbow in a near-fatal automobile instrument. The doctors told him that they could not rebuild his elbow, and all mobility was lost. This would mean the end of a musical career, but Les Paul refused to surrender. He requested his arm be put in a 90 degree angle so he could keep playing the guitar. This was evidence that Les Paul refuses to settle, continuing his constant need to experiment.\t\t\t\t\t\n\nLes Paul continued to attract the world’s attention with playing styles such as lick, trills, chording sequences, and fretting techniques. After inventing the solid body electric guitar, he became the only individual to be in both the Rock and Roll Hall of Fame and the National Inventors Hall of Fame. His influences on the musical industry have been used by almost every musician since.",author:"5",url:"https://cdn.pixabay.com/photo/2019/09/29/23/20/les-paul-4514535_960_720.png"}],photos:[{id:"0",title:"MAKE A CHANGE",desc:"The world is absolutely amazing and filled with a vast variety of beautiful places, but it is not going to stay this way for long. Global warming and pollution are ultimately going to change this world in the utmost negative way. Our overall message is to utilize our youth and make you see the bigger picture.",author:"2",url:"/img/photo-0.jpg"}]},getters:{person:function(t){return function(e){return t.people.find((function(t){return t.id===e}))}},video:function(t){return function(e){return t.videos.find((function(t){return t.id===e}))}},videos:function(t){return function(){return t.videos}},podcast:function(t){return function(e){return t.podcasts.find((function(t){return t.id===e}))}},podcasts:function(t){return function(){return t.podcasts}},article:function(t){return function(e){return t.articles.find((function(t){return t.id===e}))}},articles:function(t){return function(){return t.articles}},photo:function(t){return function(e){return t.photos.find((function(t){return t.id===e}))}},photos:function(t){return function(){return t.photos}}},mutations:{},actions:{}}),se=(o("5650"),o("5f5b")),ne=(o("1157"),o("9ce6")),re=o.n(ne);a["default"].use(se["a"]),a["default"].use(re.a),a["default"].config.productionTip=!1,new a["default"]({router:oe,store:ie,render:function(t){return t(d)}}).$mount("#app")},"5c0b":function(t,e,o){"use strict";var a=o("e332"),i=o.n(a);i.a},"70bd":function(t,e,o){},"8c29":function(t,e,o){},b2fb:function(t,e,o){"use strict";var a=o("8c29"),i=o.n(a);i.a},ba68:function(t,e,o){},cccb:function(t,e,o){"use strict";var a=o("d563"),i=o.n(a);i.a},cd07:function(t,e,o){"use strict";var a=o("500f"),i=o.n(a);i.a},d563:function(t,e,o){},df78:function(t,e,o){},e332:function(t,e,o){},e5c9:function(t,e,o){},ec60:function(t,e,o){},edc3:function(t,e,o){"use strict";var a=o("3509"),i=o.n(a);i.a},f275:function(t,e,o){"use strict";var a=o("df78"),i=o.n(a);i.a}});
//# sourceMappingURL=app.b4c64a46.js.map