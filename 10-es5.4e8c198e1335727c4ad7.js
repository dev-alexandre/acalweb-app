!function(){function t(o,e,n){return(t="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,o,e){var n=function(t,o){for(;!Object.prototype.hasOwnProperty.call(t,o)&&null!==(t=a(t)););return t}(t,o);if(n){var r=Object.getOwnPropertyDescriptor(n,o);return r.get?r.get.call(e):r.value}})(o,e,n||o)}function o(t,o){if("function"!=typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(o&&o.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),o&&e(t,o)}function e(t,o){return(e=Object.setPrototypeOf||function(t,o){return t.__proto__=o,t})(t,o)}function n(t){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,n=a(t);if(o){var c=a(this).constructor;e=Reflect.construct(n,arguments,c)}else e=n.apply(this,arguments);return r(this,e)}}function r(t,o){return!o||"object"!=typeof o&&"function"!=typeof o?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):o}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,o){if(!(t instanceof o))throw new TypeError("Cannot call a class as a function")}function i(t,o){for(var e=0;e<o.length;e++){var n=o[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function b(t,o,e){return o&&i(t.prototype,o),e&&i(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{OsVf:function(e,r,i){"use strict";i.r(r),i.d(r,"MatriculaModule",(function(){return K}));var l,u=i("vKzg"),d=i("3Pt+"),s=i("tR1z"),f=i("aceb"),m=i("vTDv"),g=i("RS3s"),p=i("fXoL"),v=i("tyNb"),S=((l=function(){function t(){c(this,t)}return b(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||l)},l.\u0275cmp=p.Hb({type:l,selectors:[["ngx-matricula"]],decls:1,vars:0,template:function(t,o){1&t&&p.Ob(0,"router-outlet")},directives:[v.h],encapsulation:2}),l),h=i("cMTS"),T=i("8Va2"),y=i("j9oM"),B=i("gqN9"),C=i("ofXK"),O=i("tmjD");function k(t,o){if(1&t&&(p.Tb(0,"nb-option",17),p.Bc(1),p.Sb()),2&t){var e=o.$implicit;p.jc("value",e),p.Bb(1),p.Dc(" ",e.tipoLogradouro.nome+" "+e.nome," ")}}var w,j=((w=function(t){o(r,t);var e=n(r);function r(t,o,n,a,i){var b;return c(this,r),(b=e.call(this,t,o,n,i)).router=t,b.activeRouter=o,b.service=n,b.lograoduroService=a,b.toast=i,b.data={numero:"",logradouro:{nome:"",tipoLogradouro:{nome:""}}},b}return b(r,[{key:"ngOnInit",value:function(){this.createForm(),this.loadLograoduro()}},{key:"getModulo",value:function(){return T.b.MATRICULA}},{key:"loadLograoduro",value:function(){var t=this;this.lograoduroService.listarTodos().subscribe((function(o){t.logradouros=o}))}},{key:"createForm",value:function(){this.form=new d.g({logradouro:new d.d(null,[d.x.required]),numero:new d.d(null,[d.x.required,d.x.maxLength(5),d.x.min(1)]),letra:new d.d(null,[d.x.maxLength(5),d.x.min(1)]),hidrometro:new d.d(null,[])})}},{key:"logradouro",get:function(){return this.form.get("logradouro")}},{key:"numero",get:function(){return this.form.get("numero")}},{key:"letra",get:function(){return this.form.get("letra")}},{key:"hidrometro",get:function(){return this.form.get("hidrometro")}}]),r}(h.a)).\u0275fac=function(t){return new(t||w)(p.Nb(v.c),p.Nb(v.a),p.Nb(y.a),p.Nb(B.a),p.Nb(f.Cb))},w.\u0275cmp=p.Hb({type:w,selectors:[["ngx-matricula"]],features:[p.yb],decls:35,vars:12,consts:[["novalidate","",1,"needs-validation",3,"formGroup","ngSubmit"],["status","success"],[1,"row"],[1,"col-md-6","col-12"],[1,"form-group"],[1,"label"],["fullWidth","","placeholder","Selecionar",3,"status","formControl"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-3","col-6"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","N\xfamero",3,"mask","status","formControl"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","Letra",3,"mask","status","formControl"],[1,"offset-md-6","col-md-6","col-12"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","Hidrometro",3,"status","formControl"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic","type","reset",3,"click"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","success","type","submit"],[3,"value"]],template:function(t,o){1&t&&(p.Tb(0,"form",0),p.ac("ngSubmit",(function(){return o.onSubmit()})),p.Tb(1,"nb-card",1),p.Tb(2,"nb-card-header"),p.Bc(3," Matr\xedcula "),p.Sb(),p.Tb(4,"nb-card-body"),p.Tb(5,"div",2),p.Tb(6,"div",3),p.Tb(7,"div",4),p.Tb(8,"label",5),p.Bc(9,"* Logradouro"),p.Sb(),p.Tb(10,"nb-select",6),p.zc(11,k,2,2,"nb-option",7),p.Sb(),p.Sb(),p.Sb(),p.Tb(12,"div",8),p.Tb(13,"div",4),p.Tb(14,"label",5),p.Bc(15,"* N\xfamero"),p.Sb(),p.Ob(16,"input",9),p.Sb(),p.Sb(),p.Tb(17,"div",8),p.Tb(18,"div",4),p.Tb(19,"label",5),p.Bc(20,"Letra"),p.Sb(),p.Ob(21,"input",10),p.Sb(),p.Sb(),p.Tb(22,"div",11),p.Tb(23,"div",4),p.Tb(24,"label",5),p.Bc(25,"Hidr\xf4metro"),p.Sb(),p.Ob(26,"input",12),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Tb(27,"nb-card-footer"),p.Tb(28,"div",2),p.Tb(29,"div",13),p.Tb(30,"button",14),p.ac("click",(function(){return o.voltar()})),p.Bc(31,"voltar"),p.Sb(),p.Sb(),p.Tb(32,"div",15),p.Tb(33,"button",16),p.Bc(34,"Salvar"),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Sb()),2&t&&(p.jc("formGroup",o.form),p.Bb(10),p.jc("status",o.getStatus("logradouro"))("formControl",o.logradouro),p.Bb(1),p.jc("ngForOf",o.logradouros),p.Bb(5),p.jc("mask","0*")("status",o.getStatus("numero"))("formControl",o.numero),p.Bb(5),p.jc("mask","S*")("status",o.getStatus("letra"))("formControl",o.letra),p.Bb(5),p.jc("status",o.getStatus("hidrometro"))("formControl",o.hidrometro))},directives:[d.z,d.p,d.h,f.u,f.w,f.t,f.ib,d.o,d.e,C.m,f.O,O.a,d.b,f.v,f.r,f.db],encapsulation:2}),w),M=i("x2Ck");function x(t,o){if(1&t){var e=p.Ub();p.Tb(0,"div",2),p.Tb(1,"div",7),p.Tb(2,"div",8),p.Tb(3,"small",9),p.Bc(4,"* Tipo"),p.Sb(),p.Tb(5,"input",10),p.ac("ngModelChange",(function(t){return p.sc(e),p.cc().data.logradouro.tipoLogradouro.nome=t})),p.Sb(),p.Sb(),p.Sb(),p.Tb(6,"div",11),p.Tb(7,"div",8),p.Tb(8,"small",9),p.Bc(9,"* Logradouro"),p.Sb(),p.Tb(10,"input",10),p.ac("ngModelChange",(function(t){return p.sc(e),p.cc().data.logradouro.nome=t})),p.Sb(),p.Sb(),p.Sb(),p.Tb(11,"div",3),p.Tb(12,"div",8),p.Tb(13,"small",9),p.Bc(14,"* N\xfamero"),p.Sb(),p.Tb(15,"input",12),p.ac("ngModelChange",(function(t){return p.sc(e),p.cc().data.numero=t})),p.Sb(),p.Sb(),p.Sb(),p.Tb(16,"div",3),p.Tb(17,"div",8),p.Tb(18,"small",9),p.Bc(19,"* Letra"),p.Sb(),p.Tb(20,"input",10),p.ac("ngModelChange",(function(t){return p.sc(e),p.cc().data.letra=t})),p.Sb(),p.Sb(),p.Sb(),p.Sb()}if(2&t){var n=p.cc();p.Bb(5),p.jc("ngModel",n.data.logradouro.tipoLogradouro.nome),p.Bb(5),p.jc("ngModel",n.data.logradouro.nome),p.Bb(5),p.jc("ngModel",n.data.numero),p.Bb(5),p.jc("ngModel",n.data.letra)}}var L,N=((L=function(t){o(r,t);var e=n(r);function r(t,o,n,a){var i;return c(this,r),(i=e.call(this,t,o,n,a)).router=t,i.activeRouter=o,i.service=n,i.toast=a,i}return b(r,[{key:"ngOnInit",value:function(){}},{key:"getModulo",value:function(){return T.b.MATRICULA}}]),r}(M.DeletarComponent)).\u0275fac=function(t){return new(t||L)(p.Nb(v.c),p.Nb(v.a),p.Nb(y.a),p.Nb(f.Cb))},L.\u0275cmp=p.Hb({type:L,selectors:[["ngx-matricula"]],features:[p.yb],decls:13,vars:1,consts:[["status","danger"],["class","row",4,"ngIf"],[1,"row"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic",3,"click"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","danger","type","button",3,"click"],[1,"col-md-2","col-12"],[1,"form-group"],[1,"form-text","text-muted"],["nbInput","","disabled","","fullWidth","","type","text","status","basic",3,"ngModel","ngModelChange"],[1,"col-md-6","col-12"],["nbInput","","fullWidth","","disabled","","type","text","status","basic",3,"ngModel","ngModelChange"]],template:function(t,o){1&t&&(p.Tb(0,"nb-card",0),p.Tb(1,"nb-card-header"),p.Bc(2," Matr\xedcula "),p.Sb(),p.Tb(3,"nb-card-body"),p.zc(4,x,21,4,"div",1),p.Sb(),p.Tb(5,"nb-card-footer"),p.Tb(6,"div",2),p.Tb(7,"div",3),p.Tb(8,"button",4),p.ac("click",(function(){return o.voltar()})),p.Bc(9,"voltar"),p.Sb(),p.Sb(),p.Tb(10,"div",5),p.Tb(11,"button",6),p.ac("click",(function(){return o.onSubmit()})),p.Bc(12,"Deletar"),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Sb()),2&t&&(p.Bb(4),p.jc("ngIf",o.data))},directives:[f.u,f.w,f.t,C.n,f.v,f.r,f.O,d.b,d.o,d.r],encapsulation:2}),L);function I(t,o){if(1&t&&(p.Tb(0,"nb-option",18),p.Bc(1),p.Sb()),2&t){var e=o.$implicit;p.jc("value",e.id),p.Bb(1),p.Dc(" ",e.tipoLogradouro.nome+" "+e.nome," ")}}function W(t,o){if(1&t){var e=p.Ub();p.Tb(0,"form",1),p.ac("ngSubmit",(function(){return p.sc(e),p.cc().onSubmit()})),p.Tb(1,"nb-card",2),p.Tb(2,"nb-card-header"),p.Bc(3," Matr\xedcula "),p.Sb(),p.Tb(4,"nb-card-body"),p.Tb(5,"div",3),p.Tb(6,"div",4),p.Tb(7,"div",5),p.Tb(8,"label",6),p.Bc(9,"* Logradouro"),p.Sb(),p.Tb(10,"nb-select",7),p.ac("selectedChange",(function(t){return p.sc(e),p.cc().logradouro.value.id=t})),p.zc(11,I,2,2,"nb-option",8),p.Sb(),p.Sb(),p.Sb(),p.Tb(12,"div",9),p.Tb(13,"div",5),p.Tb(14,"label",6),p.Bc(15,"* N\xfamero"),p.Sb(),p.Ob(16,"input",10),p.Sb(),p.Sb(),p.Tb(17,"div",9),p.Tb(18,"div",5),p.Tb(19,"label",6),p.Bc(20,"Letra"),p.Sb(),p.Ob(21,"input",11),p.Sb(),p.Sb(),p.Tb(22,"div",12),p.Tb(23,"div",5),p.Tb(24,"label",6),p.Bc(25,"Hidr\xf4metro"),p.Sb(),p.Ob(26,"input",13),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Tb(27,"nb-card-footer"),p.Tb(28,"div",3),p.Tb(29,"div",14),p.Tb(30,"button",15),p.ac("click",(function(){return p.sc(e),p.cc().voltar()})),p.Bc(31,"voltar"),p.Sb(),p.Sb(),p.Tb(32,"div",16),p.Tb(33,"button",17),p.Bc(34,"Editar"),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Sb()}if(2&t){var n=p.cc();p.jc("formGroup",n.form),p.Bb(10),p.jc("status",n.getStatus("logradouro"))("selected",n.logradouro.value.id),p.Bb(1),p.jc("ngForOf",n.logradouros),p.Bb(5),p.jc("status",n.getStatus("numero"))("formControl",n.numero),p.Bb(5),p.jc("status",n.getStatus("letra"))("formControl",n.letra),p.Bb(5),p.jc("status",n.getStatus("hidrometro"))("formControl",n.hidrometro)}}i("bs4A");var P,z=((P=function(t){o(r,t);var e=n(r);function r(t,o,n,a,i){var b;return c(this,r),(b=e.call(this,t,o,n,i)).router=t,b.activeRouter=o,b.service=n,b.logradouroService=a,b.toast=i,b}return b(r,[{key:"onSubmit",value:function(){var t=this;this.submited=!0,this.form.valid&&(this.getLogradourobyId(),this.service.editar(this.form.value).subscribe((function(){t.router.navigate(["./listar"],{relativeTo:t.activeRouter.parent})}),(function(t){})))}},{key:"getLogradourobyId",value:function(){var t=this.logradouro.value.id,o=this.logradouros.find((function(o){return o.id===t}));this.logradouro.setValue(o)}},{key:"ngOnInit",value:function(){this.loadLograoduro(),this.load(),this.createForm(),this.form.setValue(this.data)}},{key:"getModulo",value:function(){return T.b.MATRICULA}},{key:"loadLograoduro",value:function(){var t=this;this.logradouroService.listarTodos().subscribe((function(o){t.logradouros=o,t.form.patchValue({logradouro:t.data.logradouro})}))}},{key:"createForm",value:function(){this.form=new d.g({id:new d.d(null),logradouro:new d.d({},[d.x.required]),numero:new d.d(null,[d.x.required,d.x.maxLength(5),d.x.min(1)]),letra:new d.d(null,[d.x.maxLength(5),d.x.min(1)]),hidrometro:new d.d(null,[])})}},{key:"logradouro",get:function(){return this.form.get("logradouro")}},{key:"numero",get:function(){return this.form.get("numero")}},{key:"letra",get:function(){return this.form.get("letra")}},{key:"hidrometro",get:function(){return this.form.get("hidrometro")}}]),r}(M.EditarComponent)).\u0275fac=function(t){return new(t||P)(p.Nb(v.c),p.Nb(v.a),p.Nb(y.a),p.Nb(B.a),p.Nb(f.Cb))},P.\u0275cmp=p.Hb({type:P,selectors:[["ngx-matricula"]],features:[p.yb],decls:1,vars:1,consts:[["class","needs-validation","novalidate","",3,"formGroup","ngSubmit",4,"ngIf"],["novalidate","",1,"needs-validation",3,"formGroup","ngSubmit"],["status","warning"],[1,"row"],[1,"col-md-6","col-12"],[1,"form-group"],[1,"label"],["fullWidth","","placeholder","Selecionar",3,"status","selected","selectedChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-3","col-6"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","N\xfamero",3,"status","formControl"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","Letra",3,"status","formControl"],[1,"offset-md-6","col-md-6","col-12"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","Hidr\xf4metro",3,"status","formControl"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic","type","reset",3,"click"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","warning","type","submit"],[3,"value"]],template:function(t,o){1&t&&p.zc(0,W,35,10,"form",0),2&t&&p.jc("ngIf",o.form)},directives:[C.n,d.z,d.p,d.h,f.u,f.w,f.t,f.ib,C.m,f.O,d.b,d.o,d.e,f.v,f.r,f.db],encapsulation:2}),P);function R(t,o){if(1&t){var e=p.Ub();p.Tb(0,"tr"),p.Tb(1,"td",13),p.Bc(2),p.Sb(),p.Tb(3,"td",13),p.Bc(4),p.Sb(),p.Tb(5,"td",13),p.Bc(6),p.Sb(),p.Tb(7,"td",13),p.Tb(8,"button",14),p.ac("click",(function(){p.sc(e);var t=o.$implicit;return p.cc(2).editar(t)})),p.Ob(9,"nb-icon",15),p.Sb(),p.Sb(),p.Tb(10,"td",13),p.Tb(11,"button",16),p.ac("click",(function(){p.sc(e);var t=o.$implicit;return p.cc(2).deletar(t)})),p.Ob(12,"nb-icon",17),p.Sb(),p.Sb(),p.Sb()}if(2&t){var n=o.$implicit;p.Bb(2),p.Cc((null==n||null==n.logradouro||null==n.logradouro.tipoLogradouro?null:n.logradouro.tipoLogradouro.nome)+" "+(null==n||null==n.logradouro?null:n.logradouro.nome)),p.Bb(2),p.Cc(null==n?null:n.numero),p.Bb(2),p.Cc(null==n?null:n.letra)}}function _(t,o){if(1&t&&(p.Tb(0,"tbody"),p.zc(1,R,13,3,"tr",12),p.Sb()),2&t){var e=p.cc();p.Bb(1),p.jc("ngForOf",e.table.content)}}function F(t,o){1&t&&(p.Tb(0,"tbody"),p.Tb(1,"tr"),p.Tb(2,"td",18),p.Bc(3," Nenhum registro encontrado "),p.Sb(),p.Sb(),p.Sb())}function A(t,o){if(1&t&&(p.Tb(0,"div",19),p.Tb(1,"div",20),p.Tb(2,"p",21),p.Bc(3),p.Sb(),p.Sb(),p.Sb()),2&t){var e=p.cc();p.Bb(3),p.Fc(" Exibindo de ",e.table.pageable.pageNumber*e.table.pageable.pageSize+1," A ",e.table.pageable.pageNumber*e.table.pageable.pageSize+e.table.numberOfElements," de ",e.table.totalElements," registro em ",e.table.totalPages," paginas ")}}function D(t,o){if(1&t){var e=p.Ub();p.Tb(0,"div",19),p.Tb(1,"div",22),p.Tb(2,"button",23),p.ac("click",(function(){return p.sc(e),p.cc().anterior()})),p.Bc(3,"Anterior"),p.Sb(),p.Sb(),p.Tb(4,"div",24),p.Tb(5,"button",23),p.ac("click",(function(){return p.sc(e),p.cc().avancar()})),p.Bc(6,"Proxima"),p.Sb(),p.Sb(),p.Sb()}if(2&t){var n=p.cc();p.Bb(2),p.jc("disabled",n.table.first),p.Bb(3),p.jc("disabled",n.table.last)}}var H,E,U,q=[{path:"",component:S,children:[{path:"listar",component:(H=function(e){o(i,e);var r=n(i);function i(t,o,e){var n;return c(this,i),(n=r.call(this,t,o,e)).router=t,n.activeRouter=o,n.service=e,n}return b(i,[{key:"ngOnInit",value:function(){t(a(i.prototype),"init",this).call(this)}},{key:"getModulo",value:function(){return T.b.MATRICULA}}]),i}(M.ListarComponent),H.\u0275fac=function(t){return new(t||H)(p.Nb(v.c),p.Nb(v.a),p.Nb(y.a))},H.\u0275cmp=p.Hb({type:H,selectors:[["ngx-matricula"]],features:[p.yb],decls:38,vars:11,consts:[["status","info"],[1,"col-12","col-md-2","offset-md-10"],["placeholder","N\xfamero de registros",1,"float-right",3,"fullWidth","selected","selectedChange","ngModelChange"],[3,"value"],[1,"table","table-sm","table-striped"],["scope","col",1,"align-middle","font-weight-bold"],["scope","col","colspan","2",2,"width","8%"],["nbButton","","outline","","fullWidth","","status","success",3,"click"],["icon","plus-outline"],[4,"ngIf"],["scope","col","colspan","4"],["class","row",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"align-middle"],["nbButton","","outline","","fullWidth","","status","warning",3,"click"],["icon","edit-outline"],["nbButton","","outline","","fullWidth","","status","danger",3,"click"],["icon","trash-2-outline"],["colspan","4",1,"align-middle"],[1,"row"],[1,"col-12","col-md-6"],[1,"text-secondary","align-middle"],[1,"col-md-3","col-6"],["nbButton","","outline","","fullWidth","","status","basic",3,"disabled","click"],[1,"offset-md-6","col-md-3","col-6"]],template:function(t,o){1&t&&(p.Tb(0,"nb-card",0),p.Tb(1,"nb-card-header"),p.Bc(2," Matr\xedcula "),p.Sb(),p.Tb(3,"nb-card-body"),p.Tb(4,"div",1),p.Tb(5,"nb-select",2),p.ac("selectedChange",(function(t){return o.filtro.size=t}))("selectedChange",(function(t){return o.filtro.page=0,o.filtro.size=t,o.changeSize()}))("ngModelChange",(function(t){return o.filtro.page=0,o.filtro.size=t})),p.Tb(6,"nb-option",3),p.Bc(7,"1"),p.Sb(),p.Tb(8,"nb-option",3),p.Bc(9,"3"),p.Sb(),p.Tb(10,"nb-option",3),p.Bc(11,"5"),p.Sb(),p.Tb(12,"nb-option",3),p.Bc(13,"10"),p.Sb(),p.Tb(14,"nb-option",3),p.Bc(15,"25"),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Tb(16,"nb-card-body"),p.Tb(17,"table",4),p.Tb(18,"thead"),p.Tb(19,"tr"),p.Tb(20,"th",5),p.Bc(21," Nome: "),p.Sb(),p.Tb(22,"th",5),p.Bc(23," N\xfamero: "),p.Sb(),p.Tb(24,"th",5),p.Bc(25," Letra: "),p.Sb(),p.Tb(26,"th",6),p.Tb(27,"button",7),p.ac("click",(function(){return o.adicionar()})),p.Ob(28,"nb-icon",8),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.zc(29,_,2,1,"tbody",9),p.zc(30,F,4,0,"tbody",9),p.Tb(31,"tfoot"),p.Tb(32,"tr"),p.Ob(33,"th",10),p.Sb(),p.Sb(),p.Sb(),p.Sb(),p.Tb(34,"nb-card-footer"),p.zc(35,A,4,4,"div",11),p.Sb(),p.Tb(36,"nb-card-footer"),p.zc(37,D,7,2,"div",11),p.Sb(),p.Sb()),2&t&&(p.Bb(5),p.jc("fullWidth",!0)("selected",o.filtro.size),p.Bb(1),p.jc("value",1),p.Bb(2),p.jc("value",3),p.Bb(2),p.jc("value",5),p.Bb(2),p.jc("value",10),p.Bb(2),p.jc("value",25),p.Bb(15),p.jc("ngIf",o.table&&!(null!=o.table&&o.table.empty)),p.Bb(1),p.jc("ngIf",null==o.table?null:o.table.empty),p.Bb(5),p.jc("ngIf",o.table),p.Bb(2),p.jc("ngIf",o.table))},directives:[f.u,f.w,f.t,f.ib,f.db,f.r,f.K,C.n,f.v,C.m],styles:[".nb-theme-default   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}.nb-theme-cosmic   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#fff}.nb-theme-corporate   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}"]}),H)},{path:"adicionar",component:j},{path:"deletar",component:N},{path:"editar",component:z}]}],G=((U=function t(){c(this,t)}).\u0275mod=p.Lb({type:U}),U.\u0275inj=p.Kb({factory:function(t){return new(t||U)},imports:[[v.g.forChild(q)],v.g]}),U),K=((E=function t(){c(this,t)}).\u0275mod=p.Lb({type:E}),E.\u0275inj=p.Kb({factory:function(t){return new(t||E)},providers:[y.a],imports:[[m.a,f.x,G,g.a,f.s,f.P,f.jb,s.a,f.M,d.i,d.u,f.P,u.LogradouroModule,O.c.forChild()]]}),E)},bs4A:function(t,o){}}])}();