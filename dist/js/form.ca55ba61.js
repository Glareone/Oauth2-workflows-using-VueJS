(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["form"],{"0aec":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-panel"},[r("h4",[e._v("LinkedIn Credentials:")]),r("div",{staticClass:"form-panel"},[r("label",{attrs:{for:"username"}},[e._v("Username:")]),r("input",{attrs:{id:"username",type:"text"}}),r("br"),r("label",{attrs:{for:"password"}},[e._v("Password:")]),r("input",{attrs:{id:"password",type:"password"}}),r("br"),r("input",{attrs:{type:"checkbox",id:"use-default"}}),r("label",{attrs:{for:"use-default"}},[e._v("Use default values?")]),r("br"),r("button",[e._v("Get Code")]),r("br"),r("button",[e._v("Get Token")])])])}],s={name:"LinkedIn"},o=s,i=r("2877"),l=Object(i["a"])(o,n,a,!1,null,"4efbdcc4",null);t["default"]=l.exports},"127e":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-panel",attrs:{id:"signin"}},[r("h4",[e._v("Firebase Credentials:")]),r("div",{staticClass:"signin-form form-panel"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit(t)}}},[r("div",{staticClass:"input"},[r("label",{attrs:{for:"email"}},[e._v("E-mail:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],attrs:{id:"email",type:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}})]),r("div",{staticClass:"input"},[r("label",{attrs:{for:"password"}},[e._v("Password:")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{id:"password",type:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}})]),r("div",{staticClass:"submit"},[r("button",{class:{disabled:!e.email||!e.password},attrs:{type:"submit"}},[e._v("Submit")])])])])])},a=[],s=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),o=r("2f62");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(r,!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c={data:function(){return{email:"glareone@gmail.com",password:"qwerty12345"}},name:"Firebase",methods:l({},Object(o["b"])({signIn:"firebaseSignIn"}),{onSubmit:function(){if(this.email&&this.password){var e={email:this.email,password:this.password};this.signIn(e)}}})},u=c,d=(r("9bf3"),r("2877")),f=Object(d["a"])(u,n,a,!1,null,"5e565e14",null);t["default"]=f.exports},"26ab":function(e,t,r){},"3fe2":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-panel"},[r("h4",[e._v("Google Credentials:")]),r("div",{staticClass:"form-panel"},[e._m(0),e.code?r("div",[e._m(1)]):r("div",[r("button",{on:{click:e.signInRedirect}},[e._v("Sign in with Google")]),r("br")]),e._m(2),e.token?e._e():r("button",{on:{click:e.getToken}},[e._v("Get Token")]),e.token?r("p",[r("b",[e._v("You've finally get token! See in Info Block")])]):e._e()])])},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("b",[e._v("Step 1")]),e._v(": Get Code from google via clicking on 'Sign in with Google' button.")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("b",[e._v("You have already earned Code! See in Info Block")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("b",[e._v("Step 2")]),e._v(": Get Token.")])}],s=(r("8e6e"),r("ac6a"),r("456d"),r("a481"),r("bd86")),o=r("5fb0"),i=r("2f62");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(r,!0).forEach((function(t){Object(s["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={name:"Google",computed:{code:function(){return this.$store.getters.googleCode},token:function(){return this.$store.getters.googleToken}},methods:c({},Object(i["b"])({getToken:"getGoogleToken"}),{signInRedirect:function(){window.location=o["b"]}}),beforeCreate:function(){this.$route.query.code&&(this.$store.dispatch("setCode",this.$route.query.code),this.$router.replace(c({},this.$router.currentRoute,{query:{}})))}},d=u,f=r("2877"),p=Object(f["a"])(d,n,a,!1,null,"223693b9",null);t["default"]=p.exports},"6c9e":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-panel"},[r("h4",[e._v("Facebook Credentials:")]),r("div",{staticClass:"form-panel"},[r("label",{attrs:{for:"username"}},[e._v("Username:")]),r("input",{attrs:{id:"username",type:"text"}}),r("br"),r("label",{attrs:{for:"password"}},[e._v("Password:")]),r("input",{attrs:{id:"password",type:"password"}}),r("br"),r("input",{attrs:{type:"checkbox",id:"use-default"}}),r("label",{attrs:{for:"use-default"}},[e._v("Use default values?")]),r("br"),r("button",[e._v("Get Code")]),r("br"),r("button",[e._v("Get Token")])])])}],s={name:"Facebook"},o=s,i=r("2877"),l=Object(i["a"])(o,n,a,!1,null,"3e28616c",null);t["default"]=l.exports},"879c":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"form-panel"},[r("h4",[e._v("PayPal Credentials:")]),r("div",{staticClass:"form-panel"},[r("label",{attrs:{for:"username"}},[e._v("Username:")]),r("input",{attrs:{id:"username",type:"text"}}),r("br"),r("label",{attrs:{for:"password"}},[e._v("Password:")]),r("input",{attrs:{id:"password",type:"password"}}),r("br"),r("input",{attrs:{type:"checkbox",id:"use-default"}}),r("label",{attrs:{for:"use-default"}},[e._v("Use default values?")]),r("br"),r("button",[e._v("Get Code")]),r("br"),r("button",[e._v("Get Token")])])])}],s={name:"Paypal"},o=s,i=r("2877"),l=Object(i["a"])(o,n,a,!1,null,"42b50599",null);t["default"]=l.exports},"9bf3":function(e,t,r){"use strict";var n=r("26ab"),a=r.n(n);a.a}}]);
//# sourceMappingURL=form.ca55ba61.js.map