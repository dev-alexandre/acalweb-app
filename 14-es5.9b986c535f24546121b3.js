!function(){function e(t,r,a,o){return(e="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(e,t,r,a){var o,i=n(e,t);if(i){if((o=Object.getOwnPropertyDescriptor(i,t)).set)return o.set.call(a,r),!0;if(!o.writable)return!1}if(o=Object.getOwnPropertyDescriptor(a,t)){if(!o.writable)return!1;o.value=r,Object.defineProperty(a,t,o)}else!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(a,t,r);return!0})(t,r,a,o)}function t(e,r,a){return(t="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var a=n(e,t);if(a){var o=Object.getOwnPropertyDescriptor(a,t);return o.get?o.get.call(r):o.value}})(e,r,a||e)}function n(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var a=l(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return i(this,n)}}function i(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{TP08:function(n,a,i){"use strict";i.r(a),i.d(a,"HidrometroModule",(function(){return he}));var u,s,m=i("3Pt+"),f=i("oG2T"),p=i("tR1z"),v=i("aceb"),h=i("BxTH"),b=i("XStL"),g=i("vTDv"),S=i("tmjD"),y=i("j9oM"),E=i("hwQp"),x=i("fXoL"),w=i("tyNb"),k=((u=function(){function e(){c(this,e)}return d(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||u)},u.\u0275cmp=x["\u0275\u0275defineComponent"]({type:u,selectors:[["ngx-hidrometro"]],decls:1,vars:0,template:function(e,t){1&e&&x["\u0275\u0275element"](0,"router-outlet")},directives:[w.h],encapsulation:2}),u),C=i("x2Ck"),I=i("CCLK"),O=i("tk/3"),M=((s=function(e){r(n,e);var t=o(n);function n(e){var r;return c(this,n),(r=t.call(this,e)).http=e,r}return d(n,[{key:"getModulo",value:function(){return I.a.HIDROMETRO}}]),n}(C.Service)).\u0275fac=function(e){return new(e||s)(x["\u0275\u0275inject"](O.b))},s.\u0275prov=x["\u0275\u0275defineInjectable"]({token:s,factory:s.\u0275fac}),s),R=i("9mTU"),P=i("wd/R"),j=i("NdjQ"),A=i("ofXK"),L=i("vDW2"),B=i("uG+8");function _(e,t){if(1&e&&(x["\u0275\u0275elementContainerStart"](0),x["\u0275\u0275elementStart"](1,"nb-list"),x["\u0275\u0275elementStart"](2,"nb-list-item"),x["\u0275\u0275text"](3),x["\u0275\u0275pipe"](4,"number"),x["\u0275\u0275element"](5,"br"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](6,"nb-list-item"),x["\u0275\u0275text"](7),x["\u0275\u0275pipe"](8,"number"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementContainerEnd"]()),2&e){var n=x["\u0275\u0275nextContext"]();x["\u0275\u0275advance"](3),x["\u0275\u0275textInterpolate1"](" Valor da \xc1gua para mil litros ",x["\u0275\u0275pipeBind4"](4,2,null==n.valorAgua?null:n.valorAgua.valor,"1.2-4","pt-BR","R$")," "),x["\u0275\u0275advance"](4),x["\u0275\u0275textInterpolate1"](" Quantidade de \xc1gua em litros considerada para Abono ",x["\u0275\u0275pipeBind4"](8,7,null==n.valorAgua?null:n.valorAgua.litrosGratuidade,"1.0","pt-BR","Lts")," ")}}function G(e,t){if(1&e&&(x["\u0275\u0275elementStart"](0,"tr"),x["\u0275\u0275elementStart"](1,"td"),x["\u0275\u0275text"](2),x["\u0275\u0275pipe"](3,"matricula"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](4,"td"),x["\u0275\u0275text"](5),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;x["\u0275\u0275advance"](2),x["\u0275\u0275textInterpolate1"](" ",x["\u0275\u0275pipeBind1"](3,2,n.matricula)," "),x["\u0275\u0275advance"](3),x["\u0275\u0275textInterpolate1"](" ",n.matricula.hidrometro," ")}}function D(e,t){if(1&e&&(x["\u0275\u0275elementStart"](0,"tbody"),x["\u0275\u0275template"](1,G,6,4,"tr",13),x["\u0275\u0275elementEnd"]()),2&e){var n=x["\u0275\u0275nextContext"]();x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngForOf",n.contratos)}}var W,F,T,V=((T=function(){function e(t,n,r,a,o,i){c(this,e),this.toast=t,this.contratoService=n,this.hidrometroService=r,this.activeRouter=a,this.router=o,this.valorAguaService=i,this.storage=sessionStorage}return d(e,[{key:"ngOnInit",value:function(){this.load(),this.loadData()}},{key:"load",value:function(){this.referencia=JSON.parse(this.storage.getItem("[hidrometro][adicionar]")),this.storage.removeItem("[hidrometro][adicionar]"),this.referencia||this.router.navigate(["./listar"],{relativeTo:this.activeRouter.parent}),this.referenciaAnterior=this.getReferenciaAnterior(this.referencia)}},{key:"loadValorAgua",value:function(){var e=this;this.valorAguaService.buscarAtual().subscribe((function(t){e.valorAgua=t,e.loadData()}))}},{key:"getReferenciaAnterior",value:function(e){return P(e,"",!0).subtract(1,"M").format("MMYYYY")}},{key:"loadData",value:function(){var e=this;this.hidrometros=[],this.contratoService.listarMatriculasPorContrato(this.referencia).subscribe((function(t){e.contratos=t}))}},{key:"validar",value:function(){return this.hidrometros.forEach((function(e){e.hidrometro.atual<e.hidrometro.anterior&&(e.valido=!1)})),this.hidrometros.some((function(e){return!e.valido}))}},{key:"hidrometroByReferencia",value:function(e,t){return e.hidrometroList||(e.hidrometroList=[]),e.hidrometroList.find((function(e){return e.referencia===t}))}},{key:"salvar",value:function(){}},{key:"voltar",value:function(){this.router.navigate(["./listar"],{relativeTo:this.activeRouter.parent})}}]),e}()).\u0275fac=function(e){return new(e||T)(x["\u0275\u0275directiveInject"](v.qb),x["\u0275\u0275directiveInject"](j.a),x["\u0275\u0275directiveInject"](M),x["\u0275\u0275directiveInject"](w.a),x["\u0275\u0275directiveInject"](w.c),x["\u0275\u0275directiveInject"](R.a))},T.\u0275cmp=x["\u0275\u0275defineComponent"]({type:T,selectors:[["ngx-hidrometro-adicionar"]],decls:35,vars:5,consts:[["status","success"],[1,"float-left"],[1,"float-right"],[4,"ngIf"],[1,"table-responsive"],[1,"table","table-sm","table-striped"],["scope","col",1,"align-middle","font-weight-bold"],["scope","col","colspan","5"],[1,"row"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic","type","button",3,"click"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","success","type","submit",3,"click"],[4,"ngFor","ngForOf"]],template:function(e,t){1&e&&(x["\u0275\u0275elementStart"](0,"nb-card",0),x["\u0275\u0275elementStart"](1,"nb-card-header"),x["\u0275\u0275elementStart"](2,"div",1),x["\u0275\u0275text"](3," Registro "),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](4,"div",2),x["\u0275\u0275text"](5),x["\u0275\u0275pipe"](6,"referenciaPipe"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](7,"nb-card-body"),x["\u0275\u0275template"](8,_,9,12,"ng-container",3),x["\u0275\u0275elementStart"](9,"div",4),x["\u0275\u0275elementStart"](10,"table",5),x["\u0275\u0275elementStart"](11,"thead"),x["\u0275\u0275elementStart"](12,"tr"),x["\u0275\u0275elementStart"](13,"th",6),x["\u0275\u0275text"](14," Matr\xedcula: "),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](15,"th",6),x["\u0275\u0275text"](16," Hidrometro: "),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](17,"th",6),x["\u0275\u0275text"](18," Atual: "),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](19,"th",6),x["\u0275\u0275text"](20," Consumo: "),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](21,"th",6),x["\u0275\u0275text"](22," Valor: "),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275template"](23,D,2,1,"tbody",3),x["\u0275\u0275elementStart"](24,"tfoot"),x["\u0275\u0275elementStart"](25,"tr"),x["\u0275\u0275element"](26,"th",7),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](27,"nb-card-footer"),x["\u0275\u0275elementStart"](28,"div",8),x["\u0275\u0275elementStart"](29,"div",9),x["\u0275\u0275elementStart"](30,"button",10),x["\u0275\u0275listener"]("click",(function(){return t.voltar()})),x["\u0275\u0275text"](31,"voltar"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](32,"div",11),x["\u0275\u0275elementStart"](33,"button",12),x["\u0275\u0275listener"]("click",(function(){return t.salvar()})),x["\u0275\u0275text"](34,"Salvar"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()),2&e&&(x["\u0275\u0275advance"](5),x["\u0275\u0275textInterpolate1"](" ",x["\u0275\u0275pipeBind1"](6,3,t.referencia)," "),x["\u0275\u0275advance"](3),x["\u0275\u0275property"]("ngIf",t.valorAgua),x["\u0275\u0275advance"](15),x["\u0275\u0275property"]("ngIf",t.contratos))},directives:[v.q,v.s,v.p,A.o,v.r,v.n,v.Q,v.R,A.n],pipes:[L.a,A.g,B.a],styles:[".nb-theme-default   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}.nb-theme-cosmic   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#fff}.nb-theme-corporate   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}"]}),T),H=((F=function e(){c(this,e)}).\u0275fac=function(e){return new(e||F)},F.\u0275cmp=x["\u0275\u0275defineComponent"]({type:F,selectors:[["ngx-hidrometro-deletar"]],decls:12,vars:0,consts:[["status","danger"],[1,"row"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","danger","type","button"]],template:function(e,t){1&e&&(x["\u0275\u0275elementStart"](0,"nb-card",0),x["\u0275\u0275elementStart"](1,"nb-card-header"),x["\u0275\u0275text"](2," Hidr\xf4metro "),x["\u0275\u0275elementEnd"](),x["\u0275\u0275element"](3,"nb-card-body"),x["\u0275\u0275elementStart"](4,"nb-card-footer"),x["\u0275\u0275elementStart"](5,"div",1),x["\u0275\u0275elementStart"](6,"div",2),x["\u0275\u0275elementStart"](7,"button",3),x["\u0275\u0275text"](8,"voltar"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](9,"div",4),x["\u0275\u0275elementStart"](10,"button",5),x["\u0275\u0275text"](11,"Deletar"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]())},directives:[v.q,v.s,v.p,v.r,v.n],encapsulation:2}),F),N=((W=function e(){c(this,e)}).\u0275fac=function(e){return new(e||W)},W.\u0275cmp=x["\u0275\u0275defineComponent"]({type:W,selectors:[["ngx-hidrometro-editar"]],decls:16,vars:0,consts:[["novalidate","",1,"needs-validation"],["status","warning"],[1,"row"],[1,"col-md-3","col-12"],[1,"form-group"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic","type","reset"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","success","type","submit"]],template:function(e,t){1&e&&(x["\u0275\u0275elementStart"](0,"form",0),x["\u0275\u0275elementStart"](1,"nb-card",1),x["\u0275\u0275elementStart"](2,"nb-card-header"),x["\u0275\u0275text"](3," Hidr\xf4metro "),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](4,"nb-card-body"),x["\u0275\u0275elementStart"](5,"div",2),x["\u0275\u0275elementStart"](6,"div",3),x["\u0275\u0275element"](7,"div",4),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](8,"nb-card-footer"),x["\u0275\u0275elementStart"](9,"div",2),x["\u0275\u0275elementStart"](10,"div",5),x["\u0275\u0275elementStart"](11,"button",6),x["\u0275\u0275text"](12,"voltar"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](13,"div",7),x["\u0275\u0275elementStart"](14,"button",8),x["\u0275\u0275text"](15,"Salvar"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]())},directives:[m.w,m.p,m.q,v.q,v.s,v.p,v.r,v.n],encapsulation:2}),W),Y=i("8Va2"),q=i("NGTt");function J(e,t){1&e&&x["\u0275\u0275element"](0,"nb-icon",15)}function Q(e,t){1&e&&x["\u0275\u0275element"](0,"nb-icon",16)}function X(e,t){if(1&e&&(x["\u0275\u0275elementContainerStart"](0),x["\u0275\u0275template"](1,J,1,0,"nb-icon",13),x["\u0275\u0275template"](2,Q,1,0,"nb-icon",14),x["\u0275\u0275elementContainerEnd"]()),2&e){var n=x["\u0275\u0275nextContext"]();x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngIf",n.filtro.matricula.asc),x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngIf",!n.filtro.matricula.asc)}}function z(e,t){1&e&&x["\u0275\u0275element"](0,"nb-icon",15)}function $(e,t){1&e&&x["\u0275\u0275element"](0,"nb-icon",16)}function K(e,t){if(1&e&&(x["\u0275\u0275elementContainerStart"](0),x["\u0275\u0275template"](1,z,1,0,"nb-icon",13),x["\u0275\u0275template"](2,$,1,0,"nb-icon",14),x["\u0275\u0275elementContainerEnd"]()),2&e){var n=x["\u0275\u0275nextContext"]();x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngIf",n.filtro.referencia.asc),x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngIf",!n.filtro.referencia.asc)}}function U(e,t){1&e&&x["\u0275\u0275element"](0,"nb-icon",15)}function Z(e,t){1&e&&x["\u0275\u0275element"](0,"nb-icon",16)}function ee(e,t){if(1&e&&(x["\u0275\u0275elementContainerStart"](0),x["\u0275\u0275template"](1,U,1,0,"nb-icon",13),x["\u0275\u0275template"](2,Z,1,0,"nb-icon",14),x["\u0275\u0275elementContainerEnd"]()),2&e){var n=x["\u0275\u0275nextContext"]();x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngIf",n.filtro.atual.asc),x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngIf",!n.filtro.atual.asc)}}function te(e,t){1&e&&x["\u0275\u0275element"](0,"nb-icon",15)}function ne(e,t){1&e&&x["\u0275\u0275element"](0,"nb-icon",16)}function re(e,t){if(1&e&&(x["\u0275\u0275elementContainerStart"](0),x["\u0275\u0275template"](1,te,1,0,"nb-icon",13),x["\u0275\u0275template"](2,ne,1,0,"nb-icon",14),x["\u0275\u0275elementContainerEnd"]()),2&e){var n=x["\u0275\u0275nextContext"]();x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngIf",n.filtro.anterior.asc),x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngIf",!n.filtro.anterior.asc)}}function ae(e,t){if(1&e){var n=x["\u0275\u0275getCurrentView"]();x["\u0275\u0275elementStart"](0,"tr"),x["\u0275\u0275elementStart"](1,"td",18),x["\u0275\u0275text"](2),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](3,"td",18),x["\u0275\u0275text"](4),x["\u0275\u0275pipe"](5,"referenciaPipe"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](6,"td",18),x["\u0275\u0275text"](7),x["\u0275\u0275pipe"](8,"number"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](9,"td",18),x["\u0275\u0275text"](10),x["\u0275\u0275pipe"](11,"number"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](12,"td",18),x["\u0275\u0275text"](13),x["\u0275\u0275pipe"](14,"number"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](15,"td",18),x["\u0275\u0275text"](16),x["\u0275\u0275pipe"](17,"currency"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](18,"td",18),x["\u0275\u0275elementStart"](19,"button",19),x["\u0275\u0275listener"]("click",(function(){x["\u0275\u0275restoreView"](n);var e=x["\u0275\u0275nextContext"](2);return e.editar(e.data)})),x["\u0275\u0275element"](20,"nb-icon",20),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](21,"td",18),x["\u0275\u0275elementStart"](22,"button",21),x["\u0275\u0275listener"]("click",(function(){x["\u0275\u0275restoreView"](n);var e=x["\u0275\u0275nextContext"](2);return e.deletar(e.data)})),x["\u0275\u0275element"](23,"nb-icon",22),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit;x["\u0275\u0275advance"](2),x["\u0275\u0275textInterpolate1"](" ",r.matricula," "),x["\u0275\u0275advance"](2),x["\u0275\u0275textInterpolate1"](" ",x["\u0275\u0275pipeBind1"](5,6,r.referencia)," "),x["\u0275\u0275advance"](3),x["\u0275\u0275textInterpolate1"](" ",x["\u0275\u0275pipeBind1"](8,8,r.anterior)," "),x["\u0275\u0275advance"](3),x["\u0275\u0275textInterpolate1"](" ",x["\u0275\u0275pipeBind1"](11,10,r.atual)," "),x["\u0275\u0275advance"](3),x["\u0275\u0275textInterpolate1"](" ",x["\u0275\u0275pipeBind1"](14,12,r.atual-r.anterior)," "),x["\u0275\u0275advance"](3),x["\u0275\u0275textInterpolate1"](" ",x["\u0275\u0275pipeBind3"](17,14,(r.atual-r.anterior)*r.valorLitroAgua,"BRL","symbol")," ")}}function oe(e,t){if(1&e&&(x["\u0275\u0275elementStart"](0,"tbody"),x["\u0275\u0275template"](1,ae,24,18,"tr",17),x["\u0275\u0275elementEnd"]()),2&e){var n=x["\u0275\u0275nextContext"]();x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngForOf",n.table.content)}}function ie(e,t){1&e&&(x["\u0275\u0275elementStart"](0,"tbody"),x["\u0275\u0275elementStart"](1,"tr"),x["\u0275\u0275elementStart"](2,"td",23),x["\u0275\u0275text"](3," Nenhum registro encontrado "),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]())}var le,ce,ue,de,se=((le=function(n){r(i,n);var a=o(i);function i(e,t,n){var r;return c(this,i),(r=a.call(this,e,t,n)).router=e,r.activeRouter=t,r.service=n,r}return d(i,[{key:"ngOnInit",value:function(){t(l(i.prototype),"init",this).call(this),this.initFiltro(),function(t,n,r,a,o){if(!e(t,n,r,a||t)&&o)throw new Error("failed to set property")}(l(i.prototype),"filtro",this.filtro,this,!0)}},{key:"initFiltro",value:function(){this.filtro={page:0,size:5,ativo:{valor:null,asc:null},matricula:{valor:null,asc:null},referencia:{valor:null,asc:null},atual:{valor:null,asc:null},anterior:{valor:null,asc:null},valorLitroAgua:{valor:null,asc:null},litrosGratuidade:{valor:null,asc:null}}}},{key:"order",value:function(e){"matricula"===e?this.filtro.matricula.asc?this.filtro.matricula.asc=!this.filtro.matricula.asc:(this.filtro.matricula.asc=!0,this.filtro.matricula.order=["matricula"]):(this.filtro.matricula.asc=null,this.filtro.matricula.order=null),"referencia"===e?this.filtro.referencia.asc?this.filtro.referencia.asc=!this.filtro.referencia.asc:(this.filtro.referencia.asc=!0,this.filtro.referencia.order=["referencia"]):(this.filtro.referencia.asc=null,this.filtro.referencia.order=null),"atual"===e?this.filtro.atual.asc?this.filtro.atual.asc=!this.filtro.atual.asc:(this.filtro.atual.asc=!0,this.filtro.atual.order=["atual"]):(this.filtro.atual.asc=null,this.filtro.atual.order=null),"anterior"===e?this.filtro.anterior.asc?this.filtro.anterior.asc=!this.filtro.anterior.asc:(this.filtro.anterior.asc=!0,this.filtro.anterior.order=["anterior"]):(this.filtro.anterior.asc=null,this.filtro.anterior.order=null),"valorLitroAgua"===e?this.filtro.valorLitroAgua.asc?this.filtro.valorLitroAgua.asc=!this.filtro.valorLitroAgua.asc:(this.filtro.valorLitroAgua.asc=!0,this.filtro.valorLitroAgua.order=["valorLitroAgua"]):(this.filtro.valorLitroAgua.asc=null,this.filtro.valorLitroAgua.order=null),"litrosGratuidade"===e?this.filtro.litrosGratuidade.asc?this.filtro.litrosGratuidade.asc=!this.filtro.litrosGratuidade.asc:(this.filtro.litrosGratuidade.asc=!0,this.filtro.litrosGratuidade.order=["litrosGratuidade"]):(this.filtro.litrosGratuidade.asc=null,this.filtro.litrosGratuidade.order=null),this.load()}},{key:"getModulo",value:function(){return Y.b.HIDROMETRO}},{key:"selecionar",value:function(){this.router.navigate(["./selecionar"],{relativeTo:this.activeRouter.parent})}}]),i}(C.ListarComponent)).\u0275fac=function(e){return new(e||le)(x["\u0275\u0275directiveInject"](w.c),x["\u0275\u0275directiveInject"](w.a),x["\u0275\u0275directiveInject"](M))},le.\u0275cmp=x["\u0275\u0275defineComponent"]({type:le,selectors:[["ngx-hidrometro-listar"]],features:[x["\u0275\u0275InheritDefinitionFeature"]],decls:45,vars:16,consts:[[3,"loading","title","table","filtro","buscar"],[1,"table","table-sm","table-striped"],["scope","col",1,"align-middle","font-weight-bold",3,"click"],[4,"ngIf"],["scope","col",1,"align-middle","font-weight-bold"],["scope","col","colspan","2"],["nbButton","","outline","","fullWidth","","status","success",3,"click"],["icon","plus-outline"],["nbInput","","fullWidth","","type","text",1,"form-control",3,"ngModel","keydown.enter","ngModelChange"],["colspan","2"],["nbButton","","outline","","fullWidth","","status","info",3,"click"],["icon","search-outline"],["scope","col","colspan","6"],["icon","arrow-downward-outline",4,"ngIf"],["icon","arrow-upward-outline",4,"ngIf"],["icon","arrow-downward-outline"],["icon","arrow-upward-outline"],[4,"ngFor","ngForOf"],[1,"align-middle"],["nbButton","","outline","","fullWidth","","status","warning",3,"click"],["icon","edit-outline"],["nbButton","","outline","","fullWidth","","status","danger",3,"click"],["icon","trash-2-outline"],["colspan","8",1,"align-middle"]],template:function(e,t){1&e&&(x["\u0275\u0275elementStart"](0,"ngx-table",0),x["\u0275\u0275listener"]("buscar",(function(){return t.load()})),x["\u0275\u0275elementStart"](1,"table",1),x["\u0275\u0275elementStart"](2,"thead"),x["\u0275\u0275elementStart"](3,"tr"),x["\u0275\u0275elementStart"](4,"th",2),x["\u0275\u0275listener"]("click",(function(){return t.order("matricula")})),x["\u0275\u0275text"](5," Matr\xedcula: "),x["\u0275\u0275template"](6,X,3,2,"ng-container",3),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](7,"th",2),x["\u0275\u0275listener"]("click",(function(){return t.order("referencia")})),x["\u0275\u0275text"](8," Refer\xeancia: "),x["\u0275\u0275template"](9,K,3,2,"ng-container",3),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](10,"th",2),x["\u0275\u0275listener"]("click",(function(){return t.order("atual")})),x["\u0275\u0275text"](11," Atual: "),x["\u0275\u0275template"](12,ee,3,2,"ng-container",3),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](13,"th",2),x["\u0275\u0275listener"]("click",(function(){return t.order("anterior")})),x["\u0275\u0275text"](14," Anterior: "),x["\u0275\u0275template"](15,re,3,2,"ng-container",3),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](16,"th",4),x["\u0275\u0275text"](17," Consumo: "),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](18,"th",4),x["\u0275\u0275text"](19," Valor: "),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](20,"th",5),x["\u0275\u0275elementStart"](21,"button",6),x["\u0275\u0275listener"]("click",(function(){return t.selecionar()})),x["\u0275\u0275element"](22,"nb-icon",7),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](23,"thead"),x["\u0275\u0275elementStart"](24,"tr"),x["\u0275\u0275elementStart"](25,"th"),x["\u0275\u0275elementStart"](26,"input",8),x["\u0275\u0275listener"]("keydown.enter",(function(){return t.load()}))("ngModelChange",(function(e){return t.filtro.matricula.valor=e})),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](27,"th"),x["\u0275\u0275elementStart"](28,"input",8),x["\u0275\u0275listener"]("keydown.enter",(function(){return t.load()}))("ngModelChange",(function(e){return t.filtro.referencia.valor=e})),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](29,"th"),x["\u0275\u0275elementStart"](30,"input",8),x["\u0275\u0275listener"]("keydown.enter",(function(){return t.load()}))("ngModelChange",(function(e){return t.filtro.atual.valor=e})),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](31,"th"),x["\u0275\u0275elementStart"](32,"input",8),x["\u0275\u0275listener"]("keydown.enter",(function(){return t.load()}))("ngModelChange",(function(e){return t.filtro.anterior.valor=e})),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](33,"th"),x["\u0275\u0275elementStart"](34,"input",8),x["\u0275\u0275listener"]("keydown.enter",(function(){return t.load()}))("ngModelChange",(function(e){return t.filtro.anterior.valor=e})),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](35,"th"),x["\u0275\u0275elementStart"](36,"input",8),x["\u0275\u0275listener"]("keydown.enter",(function(){return t.load()}))("ngModelChange",(function(e){return t.filtro.anterior.valor=e})),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](37,"th",9),x["\u0275\u0275elementStart"](38,"button",10),x["\u0275\u0275listener"]("click",(function(){return t.load()})),x["\u0275\u0275element"](39,"nb-icon",11),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275template"](40,oe,2,1,"tbody",3),x["\u0275\u0275template"](41,ie,4,0,"tbody",3),x["\u0275\u0275elementStart"](42,"tfoot"),x["\u0275\u0275elementStart"](43,"tr"),x["\u0275\u0275element"](44,"th",12),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()),2&e&&(x["\u0275\u0275property"]("loading",t.loading)("title","Grupo")("table",t.table)("filtro",t.filtro),x["\u0275\u0275advance"](6),x["\u0275\u0275property"]("ngIf",null!==t.filtro.matricula.asc),x["\u0275\u0275advance"](3),x["\u0275\u0275property"]("ngIf",null!==t.filtro.referencia.asc),x["\u0275\u0275advance"](3),x["\u0275\u0275property"]("ngIf",null!==t.filtro.atual.asc),x["\u0275\u0275advance"](3),x["\u0275\u0275property"]("ngIf",null!==t.filtro.anterior.asc),x["\u0275\u0275advance"](11),x["\u0275\u0275property"]("ngModel",t.filtro.matricula.valor),x["\u0275\u0275advance"](2),x["\u0275\u0275property"]("ngModel",t.filtro.referencia.valor),x["\u0275\u0275advance"](2),x["\u0275\u0275property"]("ngModel",t.filtro.atual.valor),x["\u0275\u0275advance"](2),x["\u0275\u0275property"]("ngModel",t.filtro.anterior.valor),x["\u0275\u0275advance"](2),x["\u0275\u0275property"]("ngModel",t.filtro.anterior.valor),x["\u0275\u0275advance"](2),x["\u0275\u0275property"]("ngModel",t.filtro.anterior.valor),x["\u0275\u0275advance"](4),x["\u0275\u0275property"]("ngIf",t.table&&!(null!=t.table&&t.table.empty)),x["\u0275\u0275advance"](1),x["\u0275\u0275property"]("ngIf",null==t.table?null:t.table.empty))},directives:[q.a,A.o,v.n,v.F,v.I,m.a,m.o,m.r,A.n],pipes:[L.a,A.g,A.d],styles:[".nb-theme-default   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}.nb-theme-cosmic   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#fff}.nb-theme-corporate   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}"]}),le),me=i("FPPW"),fe=function(){return["../listar"]},pe=[{path:"",component:k,children:[{path:"listar",component:se},{path:"adicionar",component:V},{path:"deletar",component:H},{path:"editar",component:N},{path:"selecionar",component:(ce=function(){function e(t,n,r){c(this,e),this.router=t,this.activeRouter=n,this.service=r,this.storage=sessionStorage,this.submited=!1}return d(e,[{key:"ngOnInit",value:function(){this.loadForm()}},{key:"loadForm",value:function(){this.form=new m.g({referencia:new m.d(P(new Date).format("MMYYYY"),[m.v.required,m.v.minLength(6),m.v.maxLength(6),me.a.isReferencia()])})}},{key:"OnSubmit",value:function(){this.submited=!0,this.form.invalid||(this.storage.setItem("[hidrometro][adicionar]",JSON.stringify(this.referencia.value)),this.router.navigate(["./adicionar"],{relativeTo:this.activeRouter.parent}))}},{key:"getStatus",value:function(e){return this.submited?this.form.get(e).valid?"success":"danger":"basic"}},{key:"referencia",get:function(){return this.form.get("referencia")}}]),e}(),ce.\u0275fac=function(e){return new(e||ce)(x["\u0275\u0275directiveInject"](w.c),x["\u0275\u0275directiveInject"](w.a),x["\u0275\u0275directiveInject"](M))},ce.\u0275cmp=x["\u0275\u0275defineComponent"]({type:ce,selectors:[["ngx-hidrometro-selecionar"]],decls:29,vars:6,consts:[[1,"needs-validation",3,"formGroup","ngSubmit"],["status","success"],[1,"row"],[1,"col-md-3","col-12"],[1,"form-group"],[1,"label"],["nbInput","","fullWidth","","type","text","placeholder","Refer\xeancia",1,"form-control",3,"mask","formControl","status"],[1,"valid-feedback"],[1,"invalid-feedback"],[1,"col-md-3","offset-md-6","col-12"],["nbButton","","outline","","fullWidth","","status","success","type","submit"],["routerLinkActive","active","nbButton","","outline","","fullWidth","","status","basic","type","button",3,"routerLink"]],template:function(e,t){1&e&&(x["\u0275\u0275elementStart"](0,"form",0),x["\u0275\u0275listener"]("ngSubmit",(function(){return t.OnSubmit()})),x["\u0275\u0275elementStart"](1,"nb-card",1),x["\u0275\u0275elementStart"](2,"nb-card-header"),x["\u0275\u0275text"](3," Hidrom\xeatros "),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](4,"nb-card-body"),x["\u0275\u0275elementStart"](5,"div",2),x["\u0275\u0275elementStart"](6,"div",3),x["\u0275\u0275elementStart"](7,"div",4),x["\u0275\u0275elementStart"](8,"label",5),x["\u0275\u0275text"](9,"* Refer\xeancia:"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275element"](10,"input",6),x["\u0275\u0275elementStart"](11,"div",7),x["\u0275\u0275text"](12," V\xe1lido "),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](13,"div",8),x["\u0275\u0275text"](14," Inv\xe1lido "),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](15,"div",9),x["\u0275\u0275elementStart"](16,"div",4),x["\u0275\u0275elementStart"](17,"label",5),x["\u0275\u0275text"](18,"A\xe7\xf5es"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](19,"button",10),x["\u0275\u0275text"](20,"Pr\xe9-Visualizar"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](21,"nb-card-footer"),x["\u0275\u0275elementStart"](22,"div",2),x["\u0275\u0275elementStart"](23,"div",3),x["\u0275\u0275elementStart"](24,"div",4),x["\u0275\u0275elementStart"](25,"label",5),x["\u0275\u0275text"](26,"A\xe7\xf5es"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementStart"](27,"button",11),x["\u0275\u0275text"](28," Voltar"),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"](),x["\u0275\u0275elementEnd"]()),2&e&&(x["\u0275\u0275property"]("formGroup",t.form),x["\u0275\u0275advance"](10),x["\u0275\u0275property"]("mask","00/0000")("formControl",t.referencia)("status",t.getStatus("referencia")),x["\u0275\u0275advance"](17),x["\u0275\u0275property"]("routerLink",x["\u0275\u0275pureFunction0"](5,fe)))},directives:[m.w,m.p,m.h,v.q,v.s,v.p,v.I,S.a,m.a,m.o,m.e,v.n,v.r,w.e,w.d],encapsulation:2}),ce)}]}],ve=((de=function e(){c(this,e)}).\u0275mod=x["\u0275\u0275defineNgModule"]({type:de}),de.\u0275inj=x["\u0275\u0275defineInjector"]({factory:function(e){return new(e||de)},imports:[[w.g.forChild(pe)],w.g]}),de),he=((ue=function e(){c(this,e)}).\u0275mod=x["\u0275\u0275defineNgModule"]({type:ue}),ue.\u0275inj=x["\u0275\u0275defineInjector"]({factory:function(e){return new(e||ue)},providers:[y.a,M],imports:[[g.a,v.t,v.o,v.J,v.fb,p.a,v.H,m.j,m.t,v.J,ve,v.A,f.a,h.a,b.a,v.ub,v.kb,S.c.forChild(),E.FinanceiroModule,v.S]]}),ue)},"uG+8":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("fXoL"),a=function(){var e=function(){function e(){c(this,e)}return d(e,[{key:"transform",value:function(e,t){return e?e.letra?e.logradouro.tipoLogradouro.nome+" "+e.logradouro.nome+" "+e.numero+" "+e.letra:e.logradouro.tipoLogradouro.nome+" "+e.logradouro.nome+" "+e.numero:""}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"matricula",type:e,pure:!0}),e}()}}])}();