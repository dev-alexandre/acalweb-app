!function(){function e(t,r,o,l){return(e="undefined"!=typeof Reflect&&Reflect.set?Reflect.set:function(e,t,r,o){var l,a=n(e,t);if(a){if((l=Object.getOwnPropertyDescriptor(a,t)).set)return l.set.call(o,r),!0;if(!l.writable)return!1}if(l=Object.getOwnPropertyDescriptor(o,t)){if(!l.writable)return!1;l.value=r,Object.defineProperty(o,t,l)}else!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(o,t,r);return!0})(t,r,o,l)}function t(e,r,o){return(t="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var o=n(e,t);if(o){var l=Object.getOwnPropertyDescriptor(o,t);return l.get?l.get.call(r):l.value}})(e,r,o||e)}function n(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=i(e)););return e}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=i(e);if(t){var o=i(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}function a(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{OsVf:function(n,o,a){"use strict";a.r(o),a.d(o,"MatriculaModule",(function(){return ve}));var c,m=a("9urI"),s=a("3Pt+"),f=a("tR1z"),p=a("aceb"),g=a("BxTH"),v=a("XStL"),h=a("vTDv"),b=a("tmjD"),S=a("vKzg"),y=a("fXoL"),E=a("tyNb"),x=((c=function(){function e(){u(this,e)}return d(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||c)},c.\u0275cmp=y["\u0275\u0275defineComponent"]({type:c,selectors:[["ngx-matricula"]],decls:1,vars:0,template:function(e,t){1&e&&y["\u0275\u0275element"](0,"router-outlet")},directives:[E.h],encapsulation:2}),c),C=a("cMTS"),w=a("8Va2"),I=a("j9oM"),k=a("gqN9"),M=a("ofXK");function L(e,t){if(1&e&&(y["\u0275\u0275elementStart"](0,"nb-option",19),y["\u0275\u0275text"](1),y["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit,r=y["\u0275\u0275nextContext"]().$implicit;y["\u0275\u0275property"]("value",r),y["\u0275\u0275advance"](1),y["\u0275\u0275textInterpolate1"](" ",n.tipoLogradouro.nome+" "+n.nome," ")}}function O(e,t){if(1&e&&(y["\u0275\u0275elementStart"](0,"nb-option-group",17),y["\u0275\u0275template"](1,L,2,2,"nb-option",18),y["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;y["\u0275\u0275property"]("title",n.title),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngForOf",n.values)}}function j(e,t){if(1&e&&(y["\u0275\u0275elementStart"](0,"div",6),y["\u0275\u0275elementStart"](1,"label",7),y["\u0275\u0275text"](2,"* Logradouro"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](3,"nb-select",15),y["\u0275\u0275template"](4,O,2,2,"nb-option-group",16),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()),2&e){var n=y["\u0275\u0275nextContext"]();y["\u0275\u0275advance"](3),y["\u0275\u0275property"]("status",n.getStatus("logradouro"))("formControl",n.logradouro),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngForOf",n.opcoes)}}function P(e,t){if(1&e&&(y["\u0275\u0275elementStart"](0,"div",20),y["\u0275\u0275elementStart"](1,"div",6),y["\u0275\u0275elementStart"](2,"label",7),y["\u0275\u0275text"](3,"Hidr\xf4metro"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](4,"input",21),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()),2&e){var n=y["\u0275\u0275nextContext"]();y["\u0275\u0275advance"](4),y["\u0275\u0275property"]("status",n.getStatus("hidrometro"))("formControl",n.hidrometro)}}function H(e,t){if(1&e){var n=y["\u0275\u0275getCurrentView"]();y["\u0275\u0275elementStart"](0,"div",20),y["\u0275\u0275elementStart"](1,"label",7),y["\u0275\u0275text"](2,"Hidr\xf4metro"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](3,"div",6),y["\u0275\u0275elementStart"](4,"nb-checkbox",22),y["\u0275\u0275listener"]("checkedChange",(function(e){return y["\u0275\u0275restoreView"](n),y["\u0275\u0275nextContext"]().toggle(e)})),y["\u0275\u0275text"](5," Possui Hidrometro "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()}if(2&e){var r=y["\u0275\u0275nextContext"]();y["\u0275\u0275advance"](4),y["\u0275\u0275property"]("status",r.getStatus("possuiHidrometro"))("formControl",r.possuiHidrometro)}}var R,F=((R=function(e){r(n,e);var t=l(n);function n(e,r,o,l,a){var i;return u(this,n),(i=t.call(this,e,r,o,a)).router=e,i.activeRouter=r,i.service=o,i.lograoduroService=l,i.toast=a,i.opcoes=[],i.hasHidrometro=!1,i.data={numero:"",logradouro:{nome:"",tipoLogradouro:{nome:""}}},i}return d(n,[{key:"ngOnInit",value:function(){this.createForm(),this.loadLograoduro()}},{key:"getModulo",value:function(){return w.b.MATRICULA}},{key:"loadLograoduro",value:function(){var e=this;this.lograoduroService.listar({nome:{asc:!0,order:"nome",prioridade:1},tipoLogradouro:{asc:!0,order:"tipoLogradouro.nome",prioridade:0}}).subscribe((function(t){e.logradouros=t,e.agruparLogradouro(e.logradouros)}))}},{key:"agruparLogradouro",value:function(e){var t=this,n=[];e.forEach((function(e){-1===n.indexOf(e.tipoLogradouro.nome)&&n.push(e.tipoLogradouro.nome)})),n.forEach((function(e){t.opcoes.push({title:e,values:t.logradouros.filter((function(t){return t.tipoLogradouro.nome===e}))})}))}},{key:"changeDataBeforeSave",value:function(e){return e.possuiHidrometro=!!e.hidrometro,e}},{key:"createForm",value:function(){this.form=new s.h({logradouro:new s.e(null,[s.z.required]),numero:new s.e(null,[s.z.required,s.z.maxLength(5),s.z.min(1)]),letra:new s.e(null,[s.z.maxLength(5),s.z.min(1)]),hidrometro:new s.e(null,[]),possuiHidrometro:new s.e(null,[])})}},{key:"toggle",value:function(e){this.hasHidrometro=e}},{key:"logradouro",get:function(){return this.form.get("logradouro")}},{key:"numero",get:function(){return this.form.get("numero")}},{key:"letra",get:function(){return this.form.get("letra")}},{key:"hidrometro",get:function(){return this.form.get("hidrometro")}},{key:"possuiHidrometro",get:function(){return this.form.get("possuiHidrometro")}}]),n}(C.a)).\u0275fac=function(e){return new(e||R)(y["\u0275\u0275directiveInject"](E.c),y["\u0275\u0275directiveInject"](E.a),y["\u0275\u0275directiveInject"](I.a),y["\u0275\u0275directiveInject"](k.a),y["\u0275\u0275directiveInject"](p.qb))},R.\u0275cmp=y["\u0275\u0275defineComponent"]({type:R,selectors:[["ngx-matricula"]],features:[y["\u0275\u0275InheritDefinitionFeature"]],decls:28,vars:11,consts:[["novalidate","",1,"needs-validation",3,"formGroup","nbSpinner","ngSubmit"],["status","success"],[1,"row"],[1,"col-md-6","col-12"],["class","form-group",4,"ngIf"],[1,"col-md-3","col-6"],[1,"form-group"],[1,"label"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","N\xfamero",3,"mask","status","formControl"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","Letra",1,"text-uppercase",3,"mask","status","formControl"],["class","offset-md-6 col-md-6 col-12",4,"ngIf"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic","type","reset",3,"click"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","success","type","submit"],["fullWidth","","placeholder","Selecione",3,"status","formControl"],[3,"title",4,"ngFor","ngForOf"],[3,"title"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"offset-md-6","col-md-6","col-12"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","Hidrometro",3,"status","formControl"],[1,"align-center",3,"status","formControl","checkedChange"]],template:function(e,t){1&e&&(y["\u0275\u0275elementStart"](0,"form",0),y["\u0275\u0275listener"]("ngSubmit",(function(){return t.onSubmit()})),y["\u0275\u0275elementStart"](1,"nb-card",1),y["\u0275\u0275elementStart"](2,"nb-card-header"),y["\u0275\u0275text"](3," Matr\xedcula "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](4,"nb-card-body"),y["\u0275\u0275elementStart"](5,"div",2),y["\u0275\u0275elementStart"](6,"div",3),y["\u0275\u0275template"](7,j,5,3,"div",4),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](8,"div",5),y["\u0275\u0275elementStart"](9,"div",6),y["\u0275\u0275elementStart"](10,"label",7),y["\u0275\u0275text"](11,"* N\xfamero"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](12,"input",8),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](13,"div",5),y["\u0275\u0275elementStart"](14,"div",6),y["\u0275\u0275elementStart"](15,"label",7),y["\u0275\u0275text"](16,"Letra"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](17,"input",9),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275template"](18,P,5,2,"div",10),y["\u0275\u0275template"](19,H,6,2,"div",10),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](20,"nb-card-footer"),y["\u0275\u0275elementStart"](21,"div",2),y["\u0275\u0275elementStart"](22,"div",11),y["\u0275\u0275elementStart"](23,"button",12),y["\u0275\u0275listener"]("click",(function(){return t.voltar()})),y["\u0275\u0275text"](24,"voltar"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](25,"div",13),y["\u0275\u0275elementStart"](26,"button",14),y["\u0275\u0275text"](27,"Salvar"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()),2&e&&(y["\u0275\u0275property"]("formGroup",t.form)("nbSpinner",t.loading),y["\u0275\u0275advance"](7),y["\u0275\u0275property"]("ngIf",t.opcoes),y["\u0275\u0275advance"](5),y["\u0275\u0275property"]("mask","0*")("status",t.getStatus("numero"))("formControl",t.numero),y["\u0275\u0275advance"](5),y["\u0275\u0275property"]("mask","S*")("status",t.getStatus("letra"))("formControl",t.letra),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf",t.hasHidrometro),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf",!t.hasHidrometro))},directives:[s.B,s.r,s.i,p.jb,p.q,p.s,p.p,M.o,p.I,b.a,s.b,s.q,s.f,p.r,p.n,p.eb,M.n,p.Z,p.Y,p.u],encapsulation:2}),R),D=a("x2Ck");function V(e,t){if(1&e){var n=y["\u0275\u0275getCurrentView"]();y["\u0275\u0275elementStart"](0,"div",2),y["\u0275\u0275elementStart"](1,"div",7),y["\u0275\u0275elementStart"](2,"div",8),y["\u0275\u0275elementStart"](3,"small",9),y["\u0275\u0275text"](4,"* Tipo"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](5,"input",10),y["\u0275\u0275listener"]("ngModelChange",(function(e){return y["\u0275\u0275restoreView"](n),y["\u0275\u0275nextContext"]().data.logradouro.tipoLogradouro.nome=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](6,"div",11),y["\u0275\u0275elementStart"](7,"div",8),y["\u0275\u0275elementStart"](8,"small",9),y["\u0275\u0275text"](9,"* Logradouro"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](10,"input",10),y["\u0275\u0275listener"]("ngModelChange",(function(e){return y["\u0275\u0275restoreView"](n),y["\u0275\u0275nextContext"]().data.logradouro.nome=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](11,"div",3),y["\u0275\u0275elementStart"](12,"div",8),y["\u0275\u0275elementStart"](13,"small",9),y["\u0275\u0275text"](14,"* N\xfamero"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](15,"input",12),y["\u0275\u0275listener"]("ngModelChange",(function(e){return y["\u0275\u0275restoreView"](n),y["\u0275\u0275nextContext"]().data.numero=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](16,"div",3),y["\u0275\u0275elementStart"](17,"div",8),y["\u0275\u0275elementStart"](18,"small",9),y["\u0275\u0275text"](19,"* Letra"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](20,"input",10),y["\u0275\u0275listener"]("ngModelChange",(function(e){return y["\u0275\u0275restoreView"](n),y["\u0275\u0275nextContext"]().data.letra=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()}if(2&e){var r=y["\u0275\u0275nextContext"]();y["\u0275\u0275advance"](5),y["\u0275\u0275property"]("ngModel",r.data.logradouro.tipoLogradouro.nome),y["\u0275\u0275advance"](5),y["\u0275\u0275property"]("ngModel",r.data.logradouro.nome),y["\u0275\u0275advance"](5),y["\u0275\u0275property"]("ngModel",r.data.numero),y["\u0275\u0275advance"](5),y["\u0275\u0275property"]("ngModel",r.data.letra)}}var W,B=((W=function(e){r(n,e);var t=l(n);function n(e,r,o,l){var a;return u(this,n),(a=t.call(this,e,r,o,l)).router=e,a.activeRouter=r,a.service=o,a.toast=l,a}return d(n,[{key:"ngOnInit",value:function(){}},{key:"getModulo",value:function(){return w.b.MATRICULA}}]),n}(D.DeletarComponent)).\u0275fac=function(e){return new(e||W)(y["\u0275\u0275directiveInject"](E.c),y["\u0275\u0275directiveInject"](E.a),y["\u0275\u0275directiveInject"](I.a),y["\u0275\u0275directiveInject"](p.qb))},W.\u0275cmp=y["\u0275\u0275defineComponent"]({type:W,selectors:[["ngx-matricula"]],features:[y["\u0275\u0275InheritDefinitionFeature"]],decls:13,vars:2,consts:[["status","danger",3,"nbSpinner"],["class","row",4,"ngIf"],[1,"row"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic",3,"click"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","danger","type","button",3,"click"],[1,"col-md-2","col-12"],[1,"form-group"],[1,"form-text","text-muted"],["nbInput","","disabled","","fullWidth","","type","text","status","basic",3,"ngModel","ngModelChange"],[1,"col-md-6","col-12"],["nbInput","","fullWidth","","disabled","","type","text","status","basic",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(y["\u0275\u0275elementStart"](0,"nb-card",0),y["\u0275\u0275elementStart"](1,"nb-card-header"),y["\u0275\u0275text"](2," Matr\xedcula "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](3,"nb-card-body"),y["\u0275\u0275template"](4,V,21,4,"div",1),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](5,"nb-card-footer"),y["\u0275\u0275elementStart"](6,"div",2),y["\u0275\u0275elementStart"](7,"div",3),y["\u0275\u0275elementStart"](8,"button",4),y["\u0275\u0275listener"]("click",(function(){return t.voltar()})),y["\u0275\u0275text"](9,"voltar"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](10,"div",5),y["\u0275\u0275elementStart"](11,"button",6),y["\u0275\u0275listener"]("click",(function(){return t.onSubmit()})),y["\u0275\u0275text"](12,"Deletar"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()),2&e&&(y["\u0275\u0275property"]("nbSpinner",t.loading),y["\u0275\u0275advance"](4),y["\u0275\u0275property"]("ngIf",t.data))},directives:[p.q,p.jb,p.s,p.p,M.o,p.r,p.n,p.I,s.b,s.q,s.t],encapsulation:2}),W);function T(e,t){if(1&e&&(y["\u0275\u0275elementStart"](0,"nb-option",17),y["\u0275\u0275text"](1),y["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;y["\u0275\u0275property"]("value",n.nome),y["\u0275\u0275advance"](1),y["\u0275\u0275textInterpolate1"](" ",n.tipoLogradouro.nome+" "+n.nome," ")}}function z(e,t){if(1&e&&(y["\u0275\u0275elementStart"](0,"div",18),y["\u0275\u0275elementStart"](1,"div",5),y["\u0275\u0275elementStart"](2,"label",6),y["\u0275\u0275text"](3,"Hidr\xf4metro"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](4,"input",19),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()),2&e){var n=y["\u0275\u0275nextContext"](2);y["\u0275\u0275advance"](4),y["\u0275\u0275property"]("status",n.getStatus("hidrometro"))("formControl",n.hidrometro)}}function _(e,t){if(1&e){var n=y["\u0275\u0275getCurrentView"]();y["\u0275\u0275elementStart"](0,"div",18),y["\u0275\u0275elementStart"](1,"label",6),y["\u0275\u0275text"](2,"Hidr\xf4metro"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](3,"div",5),y["\u0275\u0275elementStart"](4,"nb-checkbox",20),y["\u0275\u0275listener"]("checkedChange",(function(e){return y["\u0275\u0275restoreView"](n),y["\u0275\u0275nextContext"](2).toggle(e)})),y["\u0275\u0275text"](5," Possui Hidrometro "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()}}function q(e,t){if(1&e){var n=y["\u0275\u0275getCurrentView"]();y["\u0275\u0275elementStart"](0,"form",1),y["\u0275\u0275listener"]("ngSubmit",(function(){return y["\u0275\u0275restoreView"](n),y["\u0275\u0275nextContext"]().onSubmit()})),y["\u0275\u0275elementStart"](1,"nb-card",2),y["\u0275\u0275elementStart"](2,"nb-card-header"),y["\u0275\u0275text"](3," Matr\xedcula "),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](4,"nb-card-body"),y["\u0275\u0275elementStart"](5,"div",3),y["\u0275\u0275elementStart"](6,"div",4),y["\u0275\u0275elementStart"](7,"div",5),y["\u0275\u0275elementStart"](8,"label",6),y["\u0275\u0275text"](9,"* Logradouro"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](10,"nb-select",7),y["\u0275\u0275listener"]("selectedChange",(function(e){return y["\u0275\u0275restoreView"](n),y["\u0275\u0275nextContext"]().logradouro.value.nome=e})),y["\u0275\u0275template"](11,T,2,2,"nb-option",8),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](12,"div",9),y["\u0275\u0275elementStart"](13,"div",5),y["\u0275\u0275elementStart"](14,"label",6),y["\u0275\u0275text"](15,"* N\xfamero"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](16,"input",10),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](17,"div",9),y["\u0275\u0275elementStart"](18,"div",5),y["\u0275\u0275elementStart"](19,"label",6),y["\u0275\u0275text"](20,"Letra"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275element"](21,"input",11),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275template"](22,z,5,2,"div",12),y["\u0275\u0275template"](23,_,6,0,"div",12),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](24,"nb-card-footer"),y["\u0275\u0275elementStart"](25,"div",3),y["\u0275\u0275elementStart"](26,"div",13),y["\u0275\u0275elementStart"](27,"button",14),y["\u0275\u0275listener"]("click",(function(){return y["\u0275\u0275restoreView"](n),y["\u0275\u0275nextContext"]().voltar()})),y["\u0275\u0275text"](28,"voltar"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](29,"div",15),y["\u0275\u0275elementStart"](30,"button",16),y["\u0275\u0275text"](31,"Editar"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()}if(2&e){var r=y["\u0275\u0275nextContext"]();y["\u0275\u0275property"]("formGroup",r.form)("nbSpinner",r.loading),y["\u0275\u0275advance"](10),y["\u0275\u0275property"]("status",r.getStatus("logradouro"))("selected",r.logradouro.value.nome),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngForOf",r.logradouros),y["\u0275\u0275advance"](5),y["\u0275\u0275property"]("mask","0*")("status",r.getStatus("numero"))("formControl",r.numero),y["\u0275\u0275advance"](5),y["\u0275\u0275property"]("mask","S*")("status",r.getStatus("letra"))("formControl",r.letra),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf",r.hasHidrometro),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf",!r.hasHidrometro)}}var N,Y=((N=function(e){r(n,e);var t=l(n);function n(e,r,o,l,a){var i;return u(this,n),(i=t.call(this,e,r,o,a)).router=e,i.activeRouter=r,i.service=o,i.logradouroService=l,i.toast=a,i.opcoes=[],i}return d(n,[{key:"changeDataBeforeSave",value:function(e){var t=this;return e.logradouro=this.logradouros.find((function(e){return e.nome===t.logradouro.value.nome})),e}},{key:"ngOnInit",value:function(){this.loadLograoduro(),this.load(),this.createForm()}},{key:"getModulo",value:function(){return w.b.MATRICULA}},{key:"loadLograoduro",value:function(){var e=this;this.logradouroService.listarTodos().subscribe((function(t){e.logradouros=t,e.form.patchValue({logradouro:e.data.logradouro})}))}},{key:"createForm",value:function(){this.hasHidrometro=!!this.data.hidrometro,this.form=new s.h({numero:new s.e(this.data.numero,[s.z.required,s.z.maxLength(5),s.z.min(1)]),letra:new s.e(this.data.letra,[s.z.maxLength(5),s.z.min(1)]),logradouro:new s.e({},[s.z.required]),possuiHidrometro:new s.e(this.data.possuiHidrometro,[]),hidrometro:new s.e(this.data.hidrometro,[])})}},{key:"toggle",value:function(){this.hasHidrometro=!this.hasHidrometro}},{key:"logradouro",get:function(){return this.form.get("logradouro")}},{key:"numero",get:function(){return this.form.get("numero")}},{key:"letra",get:function(){return this.form.get("letra")}},{key:"hidrometro",get:function(){return this.form.get("hidrometro")}},{key:"possuiHidrometro",get:function(){return this.form.get("possuiHidrometro")}}]),n}(D.EditarComponent)).\u0275fac=function(e){return new(e||N)(y["\u0275\u0275directiveInject"](E.c),y["\u0275\u0275directiveInject"](E.a),y["\u0275\u0275directiveInject"](I.a),y["\u0275\u0275directiveInject"](k.a),y["\u0275\u0275directiveInject"](p.qb))},N.\u0275cmp=y["\u0275\u0275defineComponent"]({type:N,selectors:[["ngx-matricula"]],features:[y["\u0275\u0275InheritDefinitionFeature"]],decls:1,vars:1,consts:[["class","needs-validation","novalidate","",3,"formGroup","nbSpinner","ngSubmit",4,"ngIf"],["novalidate","",1,"needs-validation",3,"formGroup","nbSpinner","ngSubmit"],["status","warning"],[1,"row"],[1,"col-md-6","col-12"],[1,"form-group"],[1,"label"],["fullWidth","","placeholder","Selecionar",3,"status","selected","selectedChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-3","col-6"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","N\xfamero",3,"mask","status","formControl"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","Letra",1,"text-uppercase",3,"mask","status","formControl"],["class","offset-md-6 col-md-6 col-12",4,"ngIf"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic","type","reset",3,"click"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","warning","type","submit"],[3,"value"],[1,"offset-md-6","col-md-6","col-12"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","Hidr\xf4metro",3,"status","formControl"],[1,"align-center",3,"checkedChange"]],template:function(e,t){1&e&&y["\u0275\u0275template"](0,q,32,13,"form",0),2&e&&y["\u0275\u0275property"]("ngIf",t.form)},directives:[M.o,s.B,s.r,s.i,p.jb,p.q,p.s,p.p,p.eb,M.n,p.I,b.a,s.b,s.q,s.f,p.r,p.n,p.Y,p.u],encapsulation:2}),N),A=a("NGTt"),$=a("hTh/");function G(e,t){if(1&e&&(y["\u0275\u0275elementStart"](0,"nb-list"),y["\u0275\u0275elementStart"](1,"nb-list-item"),y["\u0275\u0275text"](2),y["\u0275\u0275pipe"](3,"datePipe"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](4,"nb-list-item"),y["\u0275\u0275text"](5),y["\u0275\u0275pipe"](6,"datePipe"),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()),2&e){var n=y["\u0275\u0275nextContext"]();y["\u0275\u0275advance"](2),y["\u0275\u0275textInterpolate1"]("Criado em: ",y["\u0275\u0275pipeBind1"](3,2,null==n.data?null:n.data.createdDate)," "),y["\u0275\u0275advance"](3),y["\u0275\u0275textInterpolate1"]("Ultima Atualiza\xe7\xe3o: ",y["\u0275\u0275pipeBind1"](6,4,null==n.data?null:n.data.lastModifiedDate)," ")}}function U(e,t){1&e&&y["\u0275\u0275element"](0,"nb-icon",15)}function X(e,t){1&e&&y["\u0275\u0275element"](0,"nb-icon",16)}function J(e,t){if(1&e&&(y["\u0275\u0275elementContainerStart"](0),y["\u0275\u0275template"](1,U,1,0,"nb-icon",13),y["\u0275\u0275template"](2,X,1,0,"nb-icon",14),y["\u0275\u0275elementContainerEnd"]()),2&e){var n=y["\u0275\u0275nextContext"]();y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf",n.filtro.tipoLogradouro.asc),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf",!n.filtro.tipoLogradouro.asc)}}function K(e,t){1&e&&y["\u0275\u0275element"](0,"nb-icon",15)}function Q(e,t){1&e&&y["\u0275\u0275element"](0,"nb-icon",16)}function Z(e,t){if(1&e&&(y["\u0275\u0275elementContainerStart"](0),y["\u0275\u0275template"](1,K,1,0,"nb-icon",13),y["\u0275\u0275template"](2,Q,1,0,"nb-icon",14),y["\u0275\u0275elementContainerEnd"]()),2&e){var n=y["\u0275\u0275nextContext"]();y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf",n.filtro.logradouro.asc),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf",!n.filtro.logradouro.asc)}}function ee(e,t){1&e&&y["\u0275\u0275element"](0,"nb-icon",15)}function te(e,t){1&e&&y["\u0275\u0275element"](0,"nb-icon",16)}function ne(e,t){if(1&e&&(y["\u0275\u0275elementContainerStart"](0),y["\u0275\u0275template"](1,ee,1,0,"nb-icon",13),y["\u0275\u0275template"](2,te,1,0,"nb-icon",14),y["\u0275\u0275elementContainerEnd"]()),2&e){var n=y["\u0275\u0275nextContext"]();y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf",n.filtro.numero.asc),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf",!n.filtro.numero.asc)}}function re(e,t){1&e&&y["\u0275\u0275element"](0,"nb-icon",15)}function oe(e,t){1&e&&y["\u0275\u0275element"](0,"nb-icon",16)}function le(e,t){if(1&e&&(y["\u0275\u0275elementContainerStart"](0),y["\u0275\u0275template"](1,re,1,0,"nb-icon",13),y["\u0275\u0275template"](2,oe,1,0,"nb-icon",14),y["\u0275\u0275elementContainerEnd"]()),2&e){var n=y["\u0275\u0275nextContext"]();y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf",n.filtro.letra.asc),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf",!n.filtro.letra.asc)}}function ae(e,t){1&e&&y["\u0275\u0275element"](0,"nb-icon",15)}function ie(e,t){1&e&&y["\u0275\u0275element"](0,"nb-icon",16)}function ue(e,t){if(1&e&&(y["\u0275\u0275elementContainerStart"](0),y["\u0275\u0275template"](1,ae,1,0,"nb-icon",13),y["\u0275\u0275template"](2,ie,1,0,"nb-icon",14),y["\u0275\u0275elementContainerEnd"]()),2&e){var n=y["\u0275\u0275nextContext"]();y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf",n.filtro.hidrometro.asc),y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngIf",!n.filtro.hidrometro.asc)}}function ce(e,t){if(1&e){var n=y["\u0275\u0275getCurrentView"]();y["\u0275\u0275elementStart"](0,"tr",18),y["\u0275\u0275listener"]("click",(function(){y["\u0275\u0275restoreView"](n);var e=t.$implicit;return y["\u0275\u0275nextContext"](2).selecionar(e)})),y["\u0275\u0275elementStart"](1,"td",19),y["\u0275\u0275text"](2),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](3,"td",19),y["\u0275\u0275text"](4),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](5,"td",19),y["\u0275\u0275text"](6),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](7,"td",20),y["\u0275\u0275text"](8),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](9,"td",20),y["\u0275\u0275text"](10),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](11,"td",19),y["\u0275\u0275elementStart"](12,"button",21),y["\u0275\u0275listener"]("click",(function(){y["\u0275\u0275restoreView"](n);var e=t.$implicit;return y["\u0275\u0275nextContext"](2).editar(e)})),y["\u0275\u0275element"](13,"nb-icon",22),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](14,"td",19),y["\u0275\u0275elementStart"](15,"button",23),y["\u0275\u0275listener"]("click",(function(){y["\u0275\u0275restoreView"](n);var e=t.$implicit;return y["\u0275\u0275nextContext"](2).deletar(e)})),y["\u0275\u0275element"](16,"nb-icon",24),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()}if(2&e){var r=t.$implicit;y["\u0275\u0275nextContext"](2);var o=y["\u0275\u0275reference"](1);y["\u0275\u0275property"]("nbPopover",o),y["\u0275\u0275advance"](2),y["\u0275\u0275textInterpolate"](null==r||null==r.logradouro||null==r.logradouro.tipoLogradouro?null:r.logradouro.tipoLogradouro.nome),y["\u0275\u0275advance"](2),y["\u0275\u0275textInterpolate"](null==r||null==r.logradouro?null:r.logradouro.nome),y["\u0275\u0275advance"](2),y["\u0275\u0275textInterpolate"](null==r?null:r.numero),y["\u0275\u0275advance"](2),y["\u0275\u0275textInterpolate"](null==r?null:r.letra),y["\u0275\u0275advance"](2),y["\u0275\u0275textInterpolate"](null==r?null:r.hidrometro)}}function de(e,t){if(1&e&&(y["\u0275\u0275elementStart"](0,"tbody"),y["\u0275\u0275template"](1,ce,17,6,"tr",17),y["\u0275\u0275elementEnd"]()),2&e){var n=y["\u0275\u0275nextContext"]();y["\u0275\u0275advance"](1),y["\u0275\u0275property"]("ngForOf",n.table.content)}}var me,se,fe,pe=[{path:"",component:x,children:[{path:"listar",component:(me=function(n){r(a,n);var o=l(a);function a(e,t,n){var r;return u(this,a),(r=o.call(this,e,t,n)).router=e,r.activeRouter=t,r.service=n,r}return d(a,[{key:"ngOnInit",value:function(){t(i(a.prototype),"init",this).call(this),this.initFiltro(),function(t,n,r,o,l){if(!e(t,n,r,o||t)&&l)throw new Error("failed to set property")}(i(a.prototype),"filtro",this.filtro,this,!0)}},{key:"initFiltro",value:function(){this.filtro={page:0,size:5,ativo:!0,numero:{valor:null,asc:null},letra:{valor:null,asc:null},hidrometro:{valor:null,asc:null},logradouro:{valor:null,asc:null,order:"logradouro.nome"},tipoLogradouro:{valor:null,asc:null,order:"logradouro.tipoLogradouro.nome"}}}},{key:"order",value:function(e){"numero"===e?(this.filtro.numero.asc=!this.filtro.numero.asc||!this.filtro.numero.asc,this.filtro.letra.asc=null,this.filtro.hidrometro.asc=null,this.filtro.logradouro.asc=null,this.filtro.tipoLogradouro.asc=null):"letra"===e?(this.filtro.letra.asc=!this.filtro.letra.asc||!this.filtro.letra.asc,this.filtro.numero.asc=null,this.filtro.hidrometro.asc=null,this.filtro.logradouro.asc=null,this.filtro.tipoLogradouro.asc=null):"hidrometro"===e?(this.filtro.hidrometro.asc=!this.filtro.hidrometro.asc||!this.filtro.hidrometro.asc,this.filtro.numero.asc=null,this.filtro.letra.asc=null,this.filtro.logradouro.asc=null,this.filtro.tipoLogradouro.asc=null):"logradouro"===e?(this.filtro.logradouro.asc=!this.filtro.logradouro.asc||!this.filtro.logradouro.asc,this.filtro.numero.asc=null,this.filtro.letra.asc=null,this.filtro.hidrometro.asc=null,this.filtro.tipoLogradouro.asc=null):"tipoLogradouro"===e&&(this.filtro.tipoLogradouro.asc=!this.filtro.tipoLogradouro.asc||!this.filtro.tipoLogradouro.asc,this.filtro.numero.asc=null,this.filtro.letra.asc=null,this.filtro.hidrometro.asc=null,this.filtro.logradouro.asc=null),this.load()}},{key:"getModulo",value:function(){return w.b.MATRICULA}}]),a}(D.ListarComponent),me.\u0275fac=function(e){return new(e||me)(y["\u0275\u0275directiveInject"](E.c),y["\u0275\u0275directiveInject"](E.a),y["\u0275\u0275directiveInject"](I.a))},me.\u0275cmp=y["\u0275\u0275defineComponent"]({type:me,selectors:[["ngx-matricula"]],features:[y["\u0275\u0275InheritDefinitionFeature"]],decls:43,vars:15,consts:[["logradouroDetalhes",""],[3,"loading","title","table","filtro","buscar"],[1,"table","table-sm","table-striped"],["scope","col",1,"align-middle","font-weight-bold",3,"click"],[4,"ngIf"],["scope","col","colspan","2",2,"width","8%"],["nbButton","","outline","","fullWidth","","status","success",3,"click"],["icon","plus-outline"],["nbInput","","fullWidth","","type","text",1,"form-control",3,"ngModel","keydown.enter","ngModelChange"],["colspan","2"],["nbButton","","outline","","fullWidth","","status","info",3,"click"],["icon","search-outline"],["scope","col","colspan","6"],["class","float-right","icon","arrow-downward-outline",4,"ngIf"],["class","float-right","icon","arrow-upward-outline",4,"ngIf"],["icon","arrow-downward-outline",1,"float-right"],["icon","arrow-upward-outline",1,"float-right"],["nbPopoverPlacement","top","nbPopoverTrigger","click",3,"nbPopover","click",4,"ngFor","ngForOf"],["nbPopoverPlacement","top","nbPopoverTrigger","click",3,"nbPopover","click"],[1,"align-middle"],[1,"align-middle","text-uppercase"],["nbButton","","outline","","fullWidth","","status","warning",3,"click"],["icon","edit-outline"],["nbButton","","outline","","fullWidth","","status","danger",3,"click"],["icon","trash-2-outline"]],template:function(e,t){1&e&&(y["\u0275\u0275template"](0,G,7,6,"ng-template",null,0,y["\u0275\u0275templateRefExtractor"]),y["\u0275\u0275elementStart"](2,"ngx-table",1),y["\u0275\u0275listener"]("buscar",(function(){return t.load()})),y["\u0275\u0275elementStart"](3,"table",2),y["\u0275\u0275elementStart"](4,"thead"),y["\u0275\u0275elementStart"](5,"tr"),y["\u0275\u0275elementStart"](6,"th",3),y["\u0275\u0275listener"]("click",(function(){return t.order("tipoLogradouro")})),y["\u0275\u0275text"](7," Tipo: "),y["\u0275\u0275template"](8,J,3,2,"ng-container",4),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](9,"th",3),y["\u0275\u0275listener"]("click",(function(){return t.order("logradouro")})),y["\u0275\u0275text"](10," Nome: "),y["\u0275\u0275template"](11,Z,3,2,"ng-container",4),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](12,"th",3),y["\u0275\u0275listener"]("click",(function(){return t.order("numero")})),y["\u0275\u0275text"](13," N\xfamero: "),y["\u0275\u0275template"](14,ne,3,2,"ng-container",4),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](15,"th",3),y["\u0275\u0275listener"]("click",(function(){return t.order("letra")})),y["\u0275\u0275text"](16," Letra: "),y["\u0275\u0275template"](17,le,3,2,"ng-container",4),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](18,"th",3),y["\u0275\u0275listener"]("click",(function(){return t.order("hidrometro")})),y["\u0275\u0275text"](19," Hidr\xf4metro: "),y["\u0275\u0275template"](20,ue,3,2,"ng-container",4),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](21,"th",5),y["\u0275\u0275elementStart"](22,"button",6),y["\u0275\u0275listener"]("click",(function(){return t.adicionar()})),y["\u0275\u0275element"](23,"nb-icon",7),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](24,"thead"),y["\u0275\u0275elementStart"](25,"tr"),y["\u0275\u0275elementStart"](26,"th"),y["\u0275\u0275elementStart"](27,"input",8),y["\u0275\u0275listener"]("keydown.enter",(function(){return t.load()}))("ngModelChange",(function(e){return t.filtro.tipoLogradouro.valor=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](28,"th"),y["\u0275\u0275elementStart"](29,"input",8),y["\u0275\u0275listener"]("keydown.enter",(function(){return t.load()}))("ngModelChange",(function(e){return t.filtro.logradouro.valor=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](30,"th"),y["\u0275\u0275elementStart"](31,"input",8),y["\u0275\u0275listener"]("keydown.enter",(function(){return t.load()}))("ngModelChange",(function(e){return t.filtro.numero.valor=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](32,"th"),y["\u0275\u0275elementStart"](33,"input",8),y["\u0275\u0275listener"]("keydown.enter",(function(){return t.load()}))("ngModelChange",(function(e){return t.filtro.letra.valor=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](34,"th"),y["\u0275\u0275elementStart"](35,"input",8),y["\u0275\u0275listener"]("keydown.enter",(function(){return t.load()}))("ngModelChange",(function(e){return t.filtro.hidrometro.valor=e})),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementStart"](36,"th",9),y["\u0275\u0275elementStart"](37,"button",10),y["\u0275\u0275listener"]("click",(function(){return t.load()})),y["\u0275\u0275element"](38,"nb-icon",11),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275template"](39,de,2,1,"tbody",4),y["\u0275\u0275elementStart"](40,"tfoot"),y["\u0275\u0275elementStart"](41,"tr"),y["\u0275\u0275element"](42,"th",12),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"](),y["\u0275\u0275elementEnd"]()),2&e&&(y["\u0275\u0275advance"](2),y["\u0275\u0275property"]("loading",t.loading)("title","Matr\xedculas")("table",t.table)("filtro",t.filtro),y["\u0275\u0275advance"](6),y["\u0275\u0275property"]("ngIf",null!==t.filtro.tipoLogradouro.asc),y["\u0275\u0275advance"](3),y["\u0275\u0275property"]("ngIf",null!==t.filtro.logradouro.asc),y["\u0275\u0275advance"](3),y["\u0275\u0275property"]("ngIf",null!==t.filtro.numero.asc),y["\u0275\u0275advance"](3),y["\u0275\u0275property"]("ngIf",null!==t.filtro.letra.asc),y["\u0275\u0275advance"](3),y["\u0275\u0275property"]("ngIf",null!==t.filtro.hidrometro.asc),y["\u0275\u0275advance"](7),y["\u0275\u0275property"]("ngModel",t.filtro.tipoLogradouro.valor),y["\u0275\u0275advance"](2),y["\u0275\u0275property"]("ngModel",t.filtro.logradouro.valor),y["\u0275\u0275advance"](2),y["\u0275\u0275property"]("ngModel",t.filtro.numero.valor),y["\u0275\u0275advance"](2),y["\u0275\u0275property"]("ngModel",t.filtro.letra.valor),y["\u0275\u0275advance"](2),y["\u0275\u0275property"]("ngModel",t.filtro.hidrometro.valor),y["\u0275\u0275advance"](4),y["\u0275\u0275property"]("ngIf",t.table&&!(null!=t.table&&t.table.empty)))},directives:[A.a,M.o,p.n,p.F,p.I,s.b,s.q,s.t,p.Q,p.R,M.n,p.ab],pipes:[$.a],styles:[".nb-theme-default   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}.nb-theme-cosmic   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#fff}.nb-theme-corporate   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}"]}),me)},{path:"adicionar",component:F},{path:"deletar",component:B},{path:"editar",component:Y}]}],ge=((fe=function e(){u(this,e)}).\u0275mod=y["\u0275\u0275defineNgModule"]({type:fe}),fe.\u0275inj=y["\u0275\u0275defineInjector"]({factory:function(e){return new(e||fe)},imports:[[E.g.forChild(pe)],E.g]}),fe),ve=((se=function e(){u(this,e)}).\u0275mod=y["\u0275\u0275defineNgModule"]({type:se}),se.\u0275inj=y["\u0275\u0275defineInjector"]({factory:function(e){return new(e||se)},providers:[I.a],imports:[[h.a,p.t,ge,p.o,p.J,p.fb,p.v,f.a,p.H,s.k,s.w,S.LogradouroModule,p.kb,b.c.forChild(),v.a,p.S,g.a,p.bb,m.SelecionarModule]]}),se)},"hTh/":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("wd/R"),o=n("fXoL"),l=function(){var e=function(){function e(){u(this,e)}return d(e,[{key:"transform",value:function(e,t){if(e){var n=r(e,"DDMMYYYY",!0);if(n.isValid())return n.format("DD/MM/YYYY")}return"invalido"}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=o["\u0275\u0275definePipe"]({name:"datePipe",type:e,pure:!0}),e}()}}])}();