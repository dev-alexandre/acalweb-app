!function(){function t(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&e(t,n)}function e(t,n){return(e=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,n)}function n(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,a=o(t);if(e){var i=o(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return r(this,n)}}function r(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function o(t){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function u(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"9mTU":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n("AytR"),o=n("fXoL"),i=n("tk/3"),c=function(){var t=function(){function t(e){a(this,t),this.http=e,this.rota=r.a.apiUrl+"/valor-agua"}return u(t,[{key:"salvar",value:function(t){return this.http.post(this.rota+"/salvar",t)}},{key:"buscarAtual",value:function(){return this.http.get(this.rota+"/buscar/atual")}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o["\u0275\u0275inject"](i.b))},t.\u0275prov=o["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t}()},"9urI":function(t,e,n){"use strict";var r=n("cPvd");n.d(e,"SelecionarModule",(function(){return r.a})),n("PZ3X"),n("nBxe")},B7o2:function(e,r,o){"use strict";o.d(r,"a",(function(){return d}));var i=o("x2Ck"),c=o("8Va2"),l=o("AytR"),f=o("fXoL"),s=o("tk/3"),d=function(){var e=function(e){t(o,e);var r=n(o);function o(t){var e;return a(this,o),(e=r.call(this,t)).http=t,e}return u(o,[{key:"getModulo",value:function(){return c.b.CLIENTE}},{key:"listarPorNome",value:function(t){return this.http.get(l.a.apiUrl+"/cliente/listar/"+t)}}]),o}(i.Service);return e.\u0275fac=function(t){return new(t||e)(f["\u0275\u0275inject"](s.b))},e.\u0275prov=f["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e}()},PZ3X:function(t,e){},cPvd:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n("3Pt+"),o=n("tR1z"),i=n("aceb"),u=n("vTDv"),c=n("B7o2"),l=n("tmjD"),f=n("j9oM"),s=n("sIef"),d=n("fXoL"),p=function(){var t=function t(){a(this,t)};return t.\u0275mod=d["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(e){return new(e||t)},providers:[c.a,f.a,s.a],imports:[[u.a,i.o,o.a,i.H,i.J,l.c.forChild(),r.w,r.k,i.S,i.t,i.fb,i.E]]}),t}()},hwQp:function(t,e,n){"use strict";n.r(e),n.d(e,"FinanceiroModule",(function(){return S}));var r=n("ofXK"),o=n("3Pt+"),i=n("tR1z"),c=n("aceb"),l=n("tmjD"),f=n("vTDv"),s=n("tyNb"),d=n("9mTU"),p=n("fXoL");function v(t,e){if(1&t&&(p["\u0275\u0275elementStart"](0,"div",12),p["\u0275\u0275elementStart"](1,"div",3),p["\u0275\u0275elementStart"](2,"label",4),p["\u0275\u0275text"](3),p["\u0275\u0275pipe"](4,"number"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](5,"input",13),p["\u0275\u0275pipe"](6,"number"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&t){var n=e.$implicit,r=p["\u0275\u0275nextContext"]();p["\u0275\u0275advance"](3),p["\u0275\u0275textInterpolate1"](" ",p["\u0275\u0275pipeBind1"](4,2,n)," Litro(s) "),p["\u0275\u0275advance"](2),p["\u0275\u0275propertyInterpolate"]("value",p["\u0275\u0275pipeBind3"](6,4,r.valor/1e3*n,"1.2-4","pt-BR"))}}var m,h,b,y=function(){return[1,10,100,1e3,1e4,1e5]},g=[{path:"gerar-boleto",loadChildren:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"Q68Q")).then((function(t){return t.GerarBoletoModule}))}},{path:"boleto",loadChildren:function(){return n.e(3).then(n.bind(null,"JP+r")).then((function(t){return t.BoletoModule}))}},{path:"valor-agua",component:(m=function(){function t(e,n){a(this,t),this.service=e,this.toast=n}return u(t,[{key:"ngOnInit",value:function(){var t=this;this.valor=0,this.service.buscarAtual().subscribe((function(e){t.valor=e.valor,t.litrosGratuidade=e.litrosGratuidade}))}},{key:"salvar",value:function(){var t=this;this.service.salvar({valor:this.valor,litrosGratuidade:this.litrosGratuidade}).subscribe((function(){t.toast.success("Salvo","Salvo com sucesso")}),(function(e){t.toast.danger("Erro",e)}))}}]),t}(),m.\u0275fac=function(t){return new(t||m)(p["\u0275\u0275directiveInject"](d.a),p["\u0275\u0275directiveInject"](c.qb))},m.\u0275cmp=p["\u0275\u0275defineComponent"]({type:m,selectors:[["ngx-valor-agua"]],decls:28,vars:4,consts:[["status","success"],[1,"row"],[1,"offset-md-8","col-md-4","col-12"],[1,"form-group"],[1,"label"],["nbInput","","fullWidth","","type","text","prefix","R$ ","mask","separator.2","decimalMarker",",","thousandSeparator",".","placeholder","mil/lt",3,"ngModel","ngModelChange"],["class","col-md-4 col-12",4,"ngFor","ngForOf"],["nbInput","","fullWidth","","type","text","mask","separator.2","decimalMarker",",","thousandSeparator",".","placeholder","qtd lt",3,"ngModel","ngModelChange"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic","type","button"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","success","type","button",3,"click"],[1,"col-md-4","col-12"],["nbInput","","fullWidth","","disabled","","type","text","prefix","R$ ",3,"value"]],template:function(t,e){1&t&&(p["\u0275\u0275elementStart"](0,"nb-card",0),p["\u0275\u0275elementStart"](1,"nb-card-header"),p["\u0275\u0275text"](2," Valor \xc1gua "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](3,"nb-card-body"),p["\u0275\u0275elementStart"](4,"div",1),p["\u0275\u0275elementStart"](5,"div",2),p["\u0275\u0275elementStart"](6,"div",3),p["\u0275\u0275elementStart"](7,"label",4),p["\u0275\u0275text"](8,"* Valor para mil litros de \xe1gua: R$"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](9,"input",5),p["\u0275\u0275listener"]("ngModelChange",(function(t){return e.valor=t})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275element"](10,"hr"),p["\u0275\u0275elementStart"](11,"div",1),p["\u0275\u0275template"](12,v,7,8,"div",6),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](13,"nb-card-body"),p["\u0275\u0275elementStart"](14,"div",1),p["\u0275\u0275elementStart"](15,"div",2),p["\u0275\u0275elementStart"](16,"div",3),p["\u0275\u0275elementStart"](17,"label",4),p["\u0275\u0275text"](18,"Quantidade de Litros de \xc1gua que s\xe3o abonados mensalmente "),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](19,"input",7),p["\u0275\u0275listener"]("ngModelChange",(function(t){return e.litrosGratuidade=t})),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](20,"nb-card-footer"),p["\u0275\u0275elementStart"](21,"div",1),p["\u0275\u0275elementStart"](22,"div",8),p["\u0275\u0275elementStart"](23,"button",9),p["\u0275\u0275text"](24,"voltar"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementStart"](25,"div",10),p["\u0275\u0275elementStart"](26,"button",11),p["\u0275\u0275listener"]("click",(function(){return e.salvar()})),p["\u0275\u0275text"](27,"Salvar"),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"](),p["\u0275\u0275elementEnd"]()),2&t&&(p["\u0275\u0275advance"](9),p["\u0275\u0275property"]("ngModel",e.valor),p["\u0275\u0275advance"](3),p["\u0275\u0275property"]("ngForOf",p["\u0275\u0275pureFunction0"](3,y)),p["\u0275\u0275advance"](7),p["\u0275\u0275property"]("ngModel",e.litrosGratuidade))},directives:[c.q,c.s,c.p,c.I,l.a,o.b,o.q,o.t,r.n,c.r,c.n],pipes:[r.g],encapsulation:2}),m)}],k=((b=function t(){a(this,t)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:b}),b.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||b)},imports:[[s.g.forChild(g)],s.g]}),b),S=((h=function t(){a(this,t)}).\u0275mod=p["\u0275\u0275defineNgModule"]({type:h}),h.\u0275inj=p["\u0275\u0275defineInjector"]({factory:function(t){return new(t||h)},providers:[d.a],imports:[[r.c,f.a,c.t,c.o,c.J,c.fb,i.a,c.H,o.k,o.w,k,c.A,l.c.forChild()]]}),h)},j9oM:function(e,r,o){"use strict";o.d(r,"a",(function(){return d}));var i=o("x2Ck"),c=o("8Va2"),l=o("AytR"),f=o("fXoL"),s=o("tk/3"),d=function(){var e=function(e){t(o,e);var r=n(o);function o(t){var e;return a(this,o),(e=r.call(this,t)).http=t,e}return u(o,[{key:"getModulo",value:function(){return c.b.MATRICULA}},{key:"selecionar",value:function(t){return this.http.get(l.a.apiUrl+"/matricula/selecionar/"+t)}},{key:"listarPorReferencia",value:function(t){return this.http.get(l.a.apiUrl+"/"+this.getModulo()+"/listarPorReferencia/"+t)}},{key:"listarMatriculasHidrometro",value:function(){return this.http.get(l.a.apiUrl+"/"+this.getModulo()+"/listar/hidrometro")}}]),o}(i.Service);return e.\u0275fac=function(t){return new(t||e)(f["\u0275\u0275inject"](s.b))},e.\u0275prov=f["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e}()},nBxe:function(t,e,n){"use strict";n("3Pt+"),n("aceb"),n("vTDv"),n("tmjD"),n("fXoL")},sIef:function(e,r,o){"use strict";o.d(r,"a",(function(){return d}));var i=o("x2Ck"),c=o("8Va2"),l=o("AytR"),f=o("fXoL"),s=o("tk/3"),d=function(){var e=function(e){t(o,e);var r=n(o);function o(t){var e;return a(this,o),(e=r.call(this,t)).http=t,e}return u(o,[{key:"getModulo",value:function(){return c.b.GRUPO}},{key:"selecionar",value:function(){return this.http.get(l.a.apiUrl+"/grupo/selecionar")}},{key:"getCategorias",value:function(){return this.http.get("assets/data/categoria.json")}}]),o}(i.Service);return e.\u0275fac=function(t){return new(t||e)(f["\u0275\u0275inject"](s.b))},e.\u0275prov=f["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e}()},ydCe:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("fXoL"),o=n("tyNb"),i=function(){var t=function(){function t(){a(this,t)}return u(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r["\u0275\u0275defineComponent"]({type:t,selectors:[["ngx-cliente"]],decls:1,vars:0,template:function(t,e){1&t&&r["\u0275\u0275element"](0,"router-outlet")},directives:[o.h],encapsulation:2}),t}()}}])}();