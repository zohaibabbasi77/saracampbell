(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{291:function(t,n,o){"use strict";o.r(n),function(t){o.d(n,"default",(function(){return i}));var e=o(50),r=o(99),a=o(294);var i=function(n){var o,e;function i(){return n.apply(this,arguments)||this}e=n,(o=i).prototype=Object.create(e.prototype),o.prototype.constructor=o,o.__proto__=e;var c=i.prototype;return c.onReady=function(){this.registerContactFormValidation()},c.registerContactFormValidation=function(){var n="form[data-contact-form]",o=Object(r.a)({submit:n+' input[type="submit"]'}),e=t(n);o.add([{selector:n+' input[name="contact_email"]',validate:function(t,n){t(a.a.email(n))},errorMessage:this.context.contactEmail},{selector:n+' textarea[name="contact_question"]',validate:function(t,n){t(a.a.notEmpty(n))},errorMessage:this.context.contactQuestion}]),e.on("submit",(function(t){o.performCheck(),o.areAll("valid")||t.preventDefault()}))},i}(e.a)}.call(this,o(0))},294:function(t,n,o){"use strict";n.a={email:function(t){return/^.+@.+\..+/.test(t)},password:function(t){return this.notEmpty(t)},notEmpty:function(t){return t.length>0}}}}]);
//# sourceMappingURL=theme-bundle.chunk.15.js.map
