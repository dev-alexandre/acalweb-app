!function(){function n(n,t){for(var e=0;e<t.length;e++){var o=t[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function t(n,e){return(t=Object.setPrototypeOf||function(n,t){return n.__proto__=t,n})(n,e)}function e(n){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(n){return!1}}();return function(){var e,u=r(n);if(t){var i=r(this).constructor;e=Reflect.construct(u,arguments,i)}else e=u.apply(this,arguments);return o(this,e)}}function o(n,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n):t}function r(n){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)})(n)}function u(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"8VcE":function(n,t,e){"use strict";e.r(t),e.d(t,"CadastroModule",(function(){return m}));var o,r,i=e("3Pt+"),a=e("tR1z"),c=e("aceb"),f=e("vTDv"),l=e("tyNb"),s=e("OTVi"),p=e("fXoL"),d=[{path:"logradouro",canActivate:[s.a],loadChildren:function(){return e.e(5).then(e.bind(null,"vKzg")).then((function(n){return n.LogradouroModule}))}},{path:"matricula",loadChildren:function(){return Promise.all([e.e(1),e.e(5),e.e(0),e.e(10)]).then(e.bind(null,"OsVf")).then((function(n){return n.MatriculaModule}))}},{path:"grupo",loadChildren:function(){return Promise.all([e.e(1),e.e(0),e.e(15)]).then(e.bind(null,"5fGG")).then((function(n){return n.GrupoModule}))}},{path:"contrato",loadChildren:function(){return Promise.all([e.e(1),e.e(0),e.e(14)]).then(e.bind(null,"75hW")).then((function(n){return n.ContratoModule}))}},{path:"cliente",loadChildren:function(){return Promise.all([e.e(1),e.e(3),e.e(0),e.e(13)]).then(e.bind(null,"Gs1x")).then((function(n){return n.ClienteModule}))}}],h=((o=function n(){u(this,n)}).\u0275mod=p.Lb({type:o}),o.\u0275inj=p.Kb({factory:function(n){return new(n||o)},imports:[[l.g.forChild(d)],l.g]}),o),b=e("gqN9"),m=((r=function n(){u(this,n)}).\u0275mod=p.Lb({type:r}),r.\u0275inj=p.Kb({factory:function(n){return new(n||r)},providers:[b.a],imports:[[f.a,c.x,h,c.s,c.P,c.jb,a.a,c.M,i.i,i.u]]}),r)},gqN9:function(o,r,i){"use strict";i.d(r,"a",(function(){return s}));var a=i("x2Ck"),c=i("8Va2"),f=i("fXoL"),l=i("tk/3"),s=function(){var o=function(o){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&t(n,e)}(l,o);var r,i,a,f=e(l);function l(n){var t;return u(this,l),(t=f.call(this,n)).http=n,t}return r=l,(i=[{key:"getModulo",value:function(){return c.b.LOGRADOURO}},{key:"listarTipoLogradouro",value:function(){return[{nome:"Avenida"},{nome:"Assentamento"},{nome:"Ch\xe1cara"},{nome:"Condom\xednio"},{nome:"Conjunto"},{nome:"Estrada"},{nome:"Feira"},{nome:"Loteamento"},{nome:"Pra\xe7a"},{nome:"Quadra"},{nome:"Rodovia"},{nome:"Rua"},{nome:"S\xedtio"},{nome:"Travessa"}]}}])&&n(r.prototype,i),a&&n(r,a),l}(a.Service);return o.\u0275fac=function(n){return new(n||o)(f.Xb(l.b))},o.\u0275prov=f.Jb({token:o,factory:o.\u0275fac}),o}()}}])}();