(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-83c374ae"],{"0e63":function(e,t,n){},1276:function(e,t,n){"use strict";var r=n("d784"),i=n("44e7"),c=n("825a"),a=n("1d80"),s=n("4840"),l=n("8aa5"),u=n("50c4"),o=n("14c3"),p=n("9263"),d=n("d039"),f=[].push,g=Math.min,v=4294967295,h=!d((function(){return!RegExp(v,"y")}));r("split",2,(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=String(a(this)),c=void 0===n?v:n>>>0;if(0===c)return[];if(void 0===e)return[r];if(!i(e))return t.call(r,e,c);var s,l,u,o=[],d=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,h=new RegExp(e.source,d+"g");while(s=p.call(h,r)){if(l=h.lastIndex,l>g&&(o.push(r.slice(g,s.index)),s.length>1&&s.index<r.length&&f.apply(o,s.slice(1)),u=s[0].length,g=l,o.length>=c))break;h.lastIndex===s.index&&h.lastIndex++}return g===r.length?!u&&h.test("")||o.push(""):o.push(r.slice(g)),o.length>c?o.slice(0,c):o}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var i=a(this),c=void 0==t?void 0:t[e];return void 0!==c?c.call(t,i,n):r.call(String(i),t,n)},function(e,i){var a=n(r,e,this,i,r!==t);if(a.done)return a.value;var p=c(e),d=String(this),f=s(p,RegExp),x=p.unicode,m=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(h?"y":"g"),_=new f(h?p:"^(?:"+p.source+")",m),b=void 0===i?v:i>>>0;if(0===b)return[];if(0===d.length)return null===o(_,d)?[d]:[];var y=0,E=0,R=[];while(E<d.length){_.lastIndex=h?E:0;var I,C=o(_,h?d:d.slice(E));if(null===C||(I=g(u(_.lastIndex+(h?0:E)),d.length))===y)E=l(d,E,x);else{if(R.push(d.slice(y,E)),R.length===b)return R;for(var w=1;w<=C.length-1;w++)if(R.push(C[w]),R.length===b)return R;E=y=I}}return R.push(d.slice(y)),R}]}),!h)},"14c3":function(e,t,n){var r=n("c6b6"),i=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var c=n.call(e,t);if("object"!==typeof c)throw TypeError("RegExp exec method returned something other than an Object or null");return c}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},"316a":function(e,t,n){},"44e7":function(e,t,n){var r=n("861d"),i=n("c6b6"),c=n("b622"),a=c("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==i(e))}},5875:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("h1",{staticClass:"text-center pt-5 pb-5",attrs:{id:"title"}},[e._v("Family Recipes Page")]),n("FamilyRecipeList",{staticClass:"RandomRecipes center",attrs:{title:"Family Recipes",server_url:"/users/family-recipes",notFound_msg:"This user has not added family recipes"}})],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"conteinter"},[e.recipes.length>0?n("div",{staticClass:"center"},e._l(e.recipes,(function(e){return n("b-row",{key:e.id},[n("FamilyRecipe",{attrs:{recipe:e}})],1)})),1):n("p",[n("b",[e._v(" No family recipes found for this user.")])])])},a=[],s=n("2909"),l=(n("96cf"),n("1da1")),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container d-flex mb-5"},[e.recipe?n("div",{staticClass:"container_info"},[n("div",{staticClass:"header_info mt-3 mb-4"},[e.isValidImagePath?n("img",{staticClass:"recipe_img",attrs:{src:e.getImage()}}):e._e(),n("div",{staticClass:"header_data"},[n("h1",{staticClass:"text-center"},[e._v(e._s(e.recipe.title))]),n("span",{staticClass:"mt-2"},[n("i",{staticClass:"bi bi-clock mr-2"}),e._v(" "),n("b",[e._v("Ready in: ")]),e._v(" "+e._s(e.recipe.readyInMinutes)+" minutes")]),n("span",{staticClass:"mt-2"},[n("i",{staticClass:"bi bi-c-circle mr-2"}),n("b",[e._v("Invented by: ")]),e._v(" "+e._s(e.recipe.creator)+" ")]),n("span",{staticClass:"mt-2"},[n("i",{staticClass:"bi bi-calendar-check mr-2"}),n("b",[e._v("Typically prepared on: ")]),e._v(" "+e._s(e.recipe.when_to_prepare)+" ")])])]),n("div",{staticClass:"recipe-body"},[n("div",{staticClass:"wrapper"},[n("div",{staticClass:"wrapped"},[n("b",[e._v("Ingredients:")]),n("ul",e._l(e.parsedIngredients,(function(t,r){return n("li",{key:r},[e._v(" "+e._s(t)+" ")])})),0)]),n("div",{staticClass:"wrapped"},[n("b",[e._v("Instructions")]),n("ol",e._l(e.parsedInstructions,(function(t,r){return n("li",{key:r},[e._v(" "+e._s(t)+" ")])})),0)])])])]):e._e()])},o=[],p=(n("ac1f"),n("1276"),{props:{recipe:{type:Object,required:!0}},data:function(){return{image:null}},computed:{parsedIngredients:function(){return this.recipe.ingredients.split(";")},parsedInstructions:function(){return this.recipe.instructions.split(";")},isValidImagePath:function(){return null!==this.getImage()}},methods:{getImage:function(){try{return n("81e7")("./"+this.recipe.image)}catch(e){return null}}}}),d=p,f=(n("9c9e"),n("2877")),g=Object(f["a"])(d,u,o,!1,null,"5882d206",null),v=g.exports,h={name:"FamilyRecipeList",components:{FamilyRecipe:v},props:{title:{type:String,required:!0},server_url:{type:String,required:!0}},data:function(){return{recipes:[]}},mounted:function(){this.updateRecipes()},methods:{updateRecipes:function(){var e=this;return Object(l["a"])(regeneratorRuntime.mark((function t(){var n,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.axios.get(e.$root.store.server_domain+e.server_url,{withCredentials:!0});case 3:r=t.sent,i=r.data,e.recipes=[],(n=e.recipes).push.apply(n,Object(s["a"])(i)),console.log(i),console.log(e.recipes),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()}}},x=h,m=(n("d91e"),Object(f["a"])(x,c,a,!1,null,"5eb87ad7",null)),_=m.exports,b={components:{FamilyRecipeList:_}},y=b,E=(n("64f2"),Object(f["a"])(y,r,i,!1,null,"782db50e",null));t["default"]=E.exports},"64f2":function(e,t,n){"use strict";var r=n("316a"),i=n.n(r);i.a},"81e7":function(e,t,n){var r={"./apple_pie_img.jpeg":"e06c","./chili_con_carne_img.jpeg":"fc33","./lasagna_img.jpg":"b67a"};function i(e){var t=c(e);return n(t)}function c(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}i.keys=function(){return Object.keys(r)},i.resolve=c,e.exports=i,i.id="81e7"},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("ad6d"),i=n("9f7f"),c=RegExp.prototype.exec,a=String.prototype.replace,s=c,l=function(){var e=/a/,t=/b*/g;return c.call(e,"a"),c.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,o=void 0!==/()??/.exec("")[1],p=l||o||u;p&&(s=function(e){var t,n,i,s,p=this,d=u&&p.sticky,f=r.call(p),g=p.source,v=0,h=e;return d&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),h=String(e).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==e[p.lastIndex-1])&&(g="(?: "+g+")",h=" "+h,v++),n=new RegExp("^(?:"+g+")",f)),o&&(n=new RegExp("^"+g+"$(?!\\s)",f)),l&&(t=p.lastIndex),i=c.call(d?n:p,h),d?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=p.lastIndex,p.lastIndex+=i[0].length):p.lastIndex=0:l&&i&&(p.lastIndex=p.global?i.index+i[0].length:t),o&&i&&i.length>1&&a.call(i[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)})),i}),e.exports=s},"9c9e":function(e,t,n){"use strict";var r=n("0e63"),i=n.n(r);i.a},"9f7f":function(e,t,n){"use strict";var r=n("d039");function i(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},b67a:function(e,t,n){e.exports=n.p+"img/lasagna_img.ecfc7b84.jpg"},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),c=n("b622"),a=n("9263"),s=n("9112"),l=c("species"),u=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),o=function(){return"$0"==="a".replace(/./,"$0")}(),p=c("replace"),d=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),f=!i((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,p){var g=c(e),v=!i((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),h=v&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[g]=/./[g]),n.exec=function(){return t=!0,null},n[g](""),!t}));if(!v||!h||"replace"===e&&(!u||!o||d)||"split"===e&&!f){var x=/./[g],m=n(g,""[e],(function(e,t,n,r,i){return t.exec===a?v&&!i?{done:!0,value:x.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:o,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:d}),_=m[0],b=m[1];r(String.prototype,e,_),r(RegExp.prototype,g,2==t?function(e,t){return b.call(e,this,t)}:function(e){return b.call(e,this)})}p&&s(RegExp.prototype[g],"sham",!0)}},d91e:function(e,t,n){"use strict";var r=n("e62b"),i=n.n(r);i.a},e06c:function(e,t,n){e.exports=n.p+"img/apple_pie_img.e867fcf5.jpeg"},e62b:function(e,t,n){},fc33:function(e,t,n){e.exports=n.p+"img/chili_con_carne_img.e53f7ac3.jpeg"}}]);
//# sourceMappingURL=chunk-83c374ae.b63ccf46.js.map