(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{OsVf:function(e,t,n){"use strict";n.r(t),n.d(t,"MatriculaModule",(function(){return ne}));var o=n("9urI"),r=n("3Pt+"),l=n("tR1z"),a=n("aceb"),i=n("BxTH"),d=n("XStL"),m=n("vTDv"),u=n("tmjD"),c=n("vKzg"),s=n("fXoL"),p=n("tyNb");let f=(()=>{class e{ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-matricula"]],decls:1,vars:0,template:function(e,t){1&e&&s["\u0275\u0275element"](0,"router-outlet")},directives:[p.h],encapsulation:2}),e})();var g=n("cMTS"),h=n("8Va2"),v=n("j9oM"),b=n("gqN9"),S=n("ofXK");function E(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"nb-option",19),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275property"]("value",e),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e.tipoLogradouro.nome+" "+e.nome," ")}}function x(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"nb-option-group",17),s["\u0275\u0275template"](1,E,2,2,"nb-option",18),s["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275property"]("title",e.title),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",e.values)}}function C(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",6),s["\u0275\u0275elementStart"](1,"label",7),s["\u0275\u0275text"](2,"* Logradouro"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"nb-select",15),s["\u0275\u0275template"](4,x,2,2,"nb-option-group",16),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("status",e.getStatus("logradouro"))("formControl",e.logradouro),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",e.opcoes)}}function y(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",20),s["\u0275\u0275elementStart"](1,"div",6),s["\u0275\u0275elementStart"](2,"label",7),s["\u0275\u0275text"](3,"Hidr\xf4metro"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](4,"input",21),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("status",e.getStatus("hidrometro"))("formControl",e.hidrometro)}}function I(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"div",20),s["\u0275\u0275elementStart"](1,"label",7),s["\u0275\u0275text"](2,"Hidr\xf4metro"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"div",6),s["\u0275\u0275elementStart"](4,"nb-checkbox",22),s["\u0275\u0275listener"]("checkedChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().toggle(t)})),s["\u0275\u0275text"](5," Possui Hidrometro "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("status",e.getStatus("possuiHidrometro"))("formControl",e.possuiHidrometro)}}let w=(()=>{class e extends g.a{constructor(e,t,n,o,r){super(e,t,n,r),this.router=e,this.activeRouter=t,this.service=n,this.lograoduroService=o,this.toast=r,this.opcoes=[],this.hasHidrometro=!1,this.data={numero:"",logradouro:{nome:"",tipoLogradouro:{nome:""}}}}ngOnInit(){this.createForm(),this.loadLograoduro()}getModulo(){return h.b.MATRICULA}loadLograoduro(){this.lograoduroService.listar({nome:{asc:!0,order:["nome"],prioridade:1},tipoLogradouro:{asc:!0,order:["tipoLogradouro.nome"],prioridade:0}}).subscribe(e=>{this.logradouros=e,this.agruparLogradouro(this.logradouros)})}agruparLogradouro(e){const t=[];e.forEach(e=>{-1===t.indexOf(e.tipoLogradouro.nome)&&t.push(e.tipoLogradouro.nome)}),t.forEach(e=>{this.opcoes.push({title:e,values:this.logradouros.filter(t=>t.tipoLogradouro.nome===e)})})}changeDataBeforeSave(e){return e.possuiHidrometro=!!e.hidrometro,e}createForm(){this.form=new r.h({logradouro:new r.e(null,[r.z.required]),numero:new r.e(null,[r.z.required,r.z.maxLength(5),r.z.min(1)]),letra:new r.e(null,[r.z.maxLength(5),r.z.min(1)]),hidrometro:new r.e(null,[]),possuiHidrometro:new r.e(null,[])})}toggle(e){this.hasHidrometro=e}get logradouro(){return this.form.get("logradouro")}get numero(){return this.form.get("numero")}get letra(){return this.form.get("letra")}get hidrometro(){return this.form.get("hidrometro")}get possuiHidrometro(){return this.form.get("possuiHidrometro")}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](p.c),s["\u0275\u0275directiveInject"](p.a),s["\u0275\u0275directiveInject"](v.a),s["\u0275\u0275directiveInject"](b.a),s["\u0275\u0275directiveInject"](a.qb))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-matricula"]],features:[s["\u0275\u0275InheritDefinitionFeature"]],decls:28,vars:11,consts:[["novalidate","",1,"needs-validation",3,"formGroup","nbSpinner","ngSubmit"],["status","success"],[1,"row"],[1,"col-md-6","col-12"],["class","form-group",4,"ngIf"],[1,"col-md-3","col-6"],[1,"form-group"],[1,"label"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","N\xfamero",3,"mask","status","formControl"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","Letra",1,"text-uppercase",3,"mask","status","formControl"],["class","offset-md-6 col-md-6 col-12",4,"ngIf"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic","type","reset",3,"click"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","success","type","submit"],["fullWidth","","placeholder","Selecione",3,"status","formControl"],[3,"title",4,"ngFor","ngForOf"],[3,"title"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],[1,"offset-md-6","col-md-6","col-12"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","Hidrometro",3,"status","formControl"],[1,"align-center",3,"status","formControl","checkedChange"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"form",0),s["\u0275\u0275listener"]("ngSubmit",(function(){return t.onSubmit()})),s["\u0275\u0275elementStart"](1,"nb-card",1),s["\u0275\u0275elementStart"](2,"nb-card-header"),s["\u0275\u0275text"](3," Matr\xedcula "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"nb-card-body"),s["\u0275\u0275elementStart"](5,"div",2),s["\u0275\u0275elementStart"](6,"div",3),s["\u0275\u0275template"](7,C,5,3,"div",4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"div",5),s["\u0275\u0275elementStart"](9,"div",6),s["\u0275\u0275elementStart"](10,"label",7),s["\u0275\u0275text"](11,"* N\xfamero"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](12,"input",8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](13,"div",5),s["\u0275\u0275elementStart"](14,"div",6),s["\u0275\u0275elementStart"](15,"label",7),s["\u0275\u0275text"](16,"Letra"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](17,"input",9),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](18,y,5,2,"div",10),s["\u0275\u0275template"](19,I,6,2,"div",10),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](20,"nb-card-footer"),s["\u0275\u0275elementStart"](21,"div",2),s["\u0275\u0275elementStart"](22,"div",11),s["\u0275\u0275elementStart"](23,"button",12),s["\u0275\u0275listener"]("click",(function(){return t.voltar()})),s["\u0275\u0275text"](24,"voltar"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](25,"div",13),s["\u0275\u0275elementStart"](26,"button",14),s["\u0275\u0275text"](27,"Salvar"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("formGroup",t.form)("nbSpinner",t.loading),s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("ngIf",t.opcoes),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("mask","0*")("status",t.getStatus("numero"))("formControl",t.numero),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("mask","S*")("status",t.getStatus("letra"))("formControl",t.letra),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",t.hasHidrometro),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",!t.hasHidrometro))},directives:[r.B,r.r,r.i,a.jb,a.q,a.s,a.p,S.o,a.I,u.a,r.b,r.q,r.f,a.r,a.n,a.eb,S.n,a.Z,a.Y,a.u],encapsulation:2}),e})();var L=n("x2Ck");function M(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"div",2),s["\u0275\u0275elementStart"](1,"div",7),s["\u0275\u0275elementStart"](2,"div",8),s["\u0275\u0275elementStart"](3,"small",9),s["\u0275\u0275text"](4,"* Tipo"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"input",10),s["\u0275\u0275listener"]("ngModelChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().data.logradouro.tipoLogradouro.nome=t})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"div",11),s["\u0275\u0275elementStart"](7,"div",8),s["\u0275\u0275elementStart"](8,"small",9),s["\u0275\u0275text"](9,"* Logradouro"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"input",10),s["\u0275\u0275listener"]("ngModelChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().data.logradouro.nome=t})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"div",3),s["\u0275\u0275elementStart"](12,"div",8),s["\u0275\u0275elementStart"](13,"small",9),s["\u0275\u0275text"](14,"* N\xfamero"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"input",12),s["\u0275\u0275listener"]("ngModelChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().data.numero=t})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"div",3),s["\u0275\u0275elementStart"](17,"div",8),s["\u0275\u0275elementStart"](18,"small",9),s["\u0275\u0275text"](19,"* Letra"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](20,"input",10),s["\u0275\u0275listener"]("ngModelChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().data.letra=t})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("ngModel",e.data.logradouro.tipoLogradouro.nome),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("ngModel",e.data.logradouro.nome),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("ngModel",e.data.numero),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("ngModel",e.data.letra)}}let k=(()=>{class e extends L.DeletarComponent{constructor(e,t,n,o){super(e,t,n,o),this.router=e,this.activeRouter=t,this.service=n,this.toast=o}ngOnInit(){}getModulo(){return h.b.MATRICULA}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](p.c),s["\u0275\u0275directiveInject"](p.a),s["\u0275\u0275directiveInject"](v.a),s["\u0275\u0275directiveInject"](a.qb))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-matricula"]],features:[s["\u0275\u0275InheritDefinitionFeature"]],decls:13,vars:2,consts:[["status","danger",3,"nbSpinner"],["class","row",4,"ngIf"],[1,"row"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic",3,"click"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","danger","type","button",3,"click"],[1,"col-md-2","col-12"],[1,"form-group"],[1,"form-text","text-muted"],["nbInput","","disabled","","fullWidth","","type","text","status","basic",3,"ngModel","ngModelChange"],[1,"col-md-6","col-12"],["nbInput","","fullWidth","","disabled","","type","text","status","basic",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"nb-card",0),s["\u0275\u0275elementStart"](1,"nb-card-header"),s["\u0275\u0275text"](2," Matr\xedcula "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"nb-card-body"),s["\u0275\u0275template"](4,M,21,4,"div",1),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"nb-card-footer"),s["\u0275\u0275elementStart"](6,"div",2),s["\u0275\u0275elementStart"](7,"div",3),s["\u0275\u0275elementStart"](8,"button",4),s["\u0275\u0275listener"]("click",(function(){return t.voltar()})),s["\u0275\u0275text"](9,"voltar"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"div",5),s["\u0275\u0275elementStart"](11,"button",6),s["\u0275\u0275listener"]("click",(function(){return t.onSubmit()})),s["\u0275\u0275text"](12,"Deletar"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("nbSpinner",t.loading),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("ngIf",t.data))},directives:[a.q,a.jb,a.s,a.p,S.o,a.r,a.n,a.I,r.b,r.q,r.t],encapsulation:2}),e})();function H(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"nb-option",17),s["\u0275\u0275text"](1),s["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275property"]("value",e.nome),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",e.tipoLogradouro.nome+" "+e.nome," ")}}function j(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",18),s["\u0275\u0275elementStart"](1,"div",5),s["\u0275\u0275elementStart"](2,"label",6),s["\u0275\u0275text"](3,"Hidr\xf4metro"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](4,"input",19),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"](2);s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("status",e.getStatus("hidrometro"))("formControl",e.hidrometro)}}function O(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"div",18),s["\u0275\u0275elementStart"](1,"label",6),s["\u0275\u0275text"](2,"Hidr\xf4metro"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"div",5),s["\u0275\u0275elementStart"](4,"nb-checkbox",20),s["\u0275\u0275listener"]("checkedChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"](2).toggle(t)})),s["\u0275\u0275text"](5," Possui Hidrometro "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}}function P(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"form",1),s["\u0275\u0275listener"]("ngSubmit",(function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().onSubmit()})),s["\u0275\u0275elementStart"](1,"nb-card",2),s["\u0275\u0275elementStart"](2,"nb-card-header"),s["\u0275\u0275text"](3," Matr\xedcula "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"nb-card-body"),s["\u0275\u0275elementStart"](5,"div",3),s["\u0275\u0275elementStart"](6,"div",4),s["\u0275\u0275elementStart"](7,"div",5),s["\u0275\u0275elementStart"](8,"label",6),s["\u0275\u0275text"](9,"* Logradouro"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"nb-select",7),s["\u0275\u0275listener"]("selectedChange",(function(t){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().logradouro.value.nome=t})),s["\u0275\u0275template"](11,H,2,2,"nb-option",8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"div",9),s["\u0275\u0275elementStart"](13,"div",5),s["\u0275\u0275elementStart"](14,"label",6),s["\u0275\u0275text"](15,"* N\xfamero"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](16,"input",10),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](17,"div",9),s["\u0275\u0275elementStart"](18,"div",5),s["\u0275\u0275elementStart"](19,"label",6),s["\u0275\u0275text"](20,"Letra"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](21,"input",11),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](22,j,5,2,"div",12),s["\u0275\u0275template"](23,O,6,0,"div",12),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](24,"nb-card-footer"),s["\u0275\u0275elementStart"](25,"div",3),s["\u0275\u0275elementStart"](26,"div",13),s["\u0275\u0275elementStart"](27,"button",14),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().voltar()})),s["\u0275\u0275text"](28,"voltar"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](29,"div",15),s["\u0275\u0275elementStart"](30,"button",16),s["\u0275\u0275text"](31,"Editar"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275property"]("formGroup",e.form)("nbSpinner",e.loading),s["\u0275\u0275advance"](10),s["\u0275\u0275property"]("status",e.getStatus("logradouro"))("selected",e.logradouro.value.nome),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",e.logradouros),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("mask","0*")("status",e.getStatus("numero"))("formControl",e.numero),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("mask","S*")("status",e.getStatus("letra"))("formControl",e.letra),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",e.hasHidrometro),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",!e.hasHidrometro)}}let F=(()=>{class e extends L.EditarComponent{constructor(e,t,n,o,r){super(e,t,n,r),this.router=e,this.activeRouter=t,this.service=n,this.logradouroService=o,this.toast=r,this.opcoes=[]}changeDataBeforeSave(e){return e.logradouro=this.logradouros.find(e=>e.nome===this.logradouro.value.nome),e}ngOnInit(){this.loadLograoduro(),this.load(),this.createForm()}getModulo(){return h.b.MATRICULA}loadLograoduro(){this.logradouroService.listarTodos().subscribe(e=>{this.logradouros=e,this.form.patchValue({logradouro:this.data.logradouro})})}createForm(){this.hasHidrometro=!!this.data.hidrometro,this.form=new r.h({numero:new r.e(this.data.numero,[r.z.required,r.z.maxLength(5),r.z.min(1)]),letra:new r.e(this.data.letra,[r.z.maxLength(5),r.z.min(1)]),logradouro:new r.e({},[r.z.required]),possuiHidrometro:new r.e(this.data.possuiHidrometro,[]),hidrometro:new r.e(this.data.hidrometro,[])})}toggle(){this.hasHidrometro=!this.hasHidrometro}get logradouro(){return this.form.get("logradouro")}get numero(){return this.form.get("numero")}get letra(){return this.form.get("letra")}get hidrometro(){return this.form.get("hidrometro")}get possuiHidrometro(){return this.form.get("possuiHidrometro")}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](p.c),s["\u0275\u0275directiveInject"](p.a),s["\u0275\u0275directiveInject"](v.a),s["\u0275\u0275directiveInject"](b.a),s["\u0275\u0275directiveInject"](a.qb))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-matricula"]],features:[s["\u0275\u0275InheritDefinitionFeature"]],decls:1,vars:1,consts:[["class","needs-validation","novalidate","",3,"formGroup","nbSpinner","ngSubmit",4,"ngIf"],["novalidate","",1,"needs-validation",3,"formGroup","nbSpinner","ngSubmit"],["status","warning"],[1,"row"],[1,"col-md-6","col-12"],[1,"form-group"],[1,"label"],["fullWidth","","placeholder","Selecionar",3,"status","selected","selectedChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-3","col-6"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","N\xfamero",3,"mask","status","formControl"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","Letra",1,"text-uppercase",3,"mask","status","formControl"],["class","offset-md-6 col-md-6 col-12",4,"ngIf"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic","type","reset",3,"click"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","warning","type","submit"],[3,"value"],[1,"offset-md-6","col-md-6","col-12"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","Hidr\xf4metro",3,"status","formControl"],[1,"align-center",3,"checkedChange"]],template:function(e,t){1&e&&s["\u0275\u0275template"](0,P,32,13,"form",0),2&e&&s["\u0275\u0275property"]("ngIf",t.form)},directives:[S.o,r.B,r.r,r.i,a.jb,a.q,a.s,a.p,a.eb,S.n,a.I,u.a,r.b,r.q,r.f,a.r,a.n,a.Y,a.u],encapsulation:2}),e})();var V=n("NGTt"),W=n("hTh/");function B(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"nb-list"),s["\u0275\u0275elementStart"](1,"nb-list-item"),s["\u0275\u0275text"](2),s["\u0275\u0275pipe"](3,"datePipe"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"nb-list-item"),s["\u0275\u0275text"](5),s["\u0275\u0275pipe"](6,"datePipe"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"]("Criado em: ",s["\u0275\u0275pipeBind1"](3,2,null==e.data?null:e.data.createdDate)," "),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"]("Ultima Atualiza\xe7\xe3o: ",s["\u0275\u0275pipeBind1"](6,4,null==e.data?null:e.data.lastModifiedDate)," ")}}function D(e,t){1&e&&s["\u0275\u0275element"](0,"nb-icon",15)}function z(e,t){1&e&&s["\u0275\u0275element"](0,"nb-icon",16)}function q(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,D,1,0,"nb-icon",13),s["\u0275\u0275template"](2,z,1,0,"nb-icon",14),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",e.filtro.tipoLogradouro.asc),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",!e.filtro.tipoLogradouro.asc)}}function T(e,t){1&e&&s["\u0275\u0275element"](0,"nb-icon",15)}function N(e,t){1&e&&s["\u0275\u0275element"](0,"nb-icon",16)}function R(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,T,1,0,"nb-icon",13),s["\u0275\u0275template"](2,N,1,0,"nb-icon",14),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",e.filtro.logradouro.asc),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",!e.filtro.logradouro.asc)}}function Y(e,t){1&e&&s["\u0275\u0275element"](0,"nb-icon",15)}function A(e,t){1&e&&s["\u0275\u0275element"](0,"nb-icon",16)}function _(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,Y,1,0,"nb-icon",13),s["\u0275\u0275template"](2,A,1,0,"nb-icon",14),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",e.filtro.numero.asc),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",!e.filtro.numero.asc)}}function $(e,t){1&e&&s["\u0275\u0275element"](0,"nb-icon",15)}function G(e,t){1&e&&s["\u0275\u0275element"](0,"nb-icon",16)}function U(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,$,1,0,"nb-icon",13),s["\u0275\u0275template"](2,G,1,0,"nb-icon",14),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",e.filtro.letra.asc),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",!e.filtro.letra.asc)}}function X(e,t){1&e&&s["\u0275\u0275element"](0,"nb-icon",15)}function J(e,t){1&e&&s["\u0275\u0275element"](0,"nb-icon",16)}function K(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,X,1,0,"nb-icon",13),s["\u0275\u0275template"](2,J,1,0,"nb-icon",14),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",e.filtro.hidrometro.asc),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",!e.filtro.hidrometro.asc)}}function Q(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tr",18),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](e);const n=t.$implicit;return s["\u0275\u0275nextContext"](2).selecionar(n)})),s["\u0275\u0275elementStart"](1,"td",19),s["\u0275\u0275text"](2),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"td",19),s["\u0275\u0275text"](4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"td",19),s["\u0275\u0275text"](6),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"td",20),s["\u0275\u0275text"](8),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"td",20),s["\u0275\u0275text"](10),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"td",19),s["\u0275\u0275elementStart"](12,"button",21),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](e);const n=t.$implicit;return s["\u0275\u0275nextContext"](2).editar(n)})),s["\u0275\u0275element"](13,"nb-icon",22),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"td",19),s["\u0275\u0275elementStart"](15,"button",23),s["\u0275\u0275listener"]("click",(function(){s["\u0275\u0275restoreView"](e);const n=t.$implicit;return s["\u0275\u0275nextContext"](2).deletar(n)})),s["\u0275\u0275element"](16,"nb-icon",24),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;s["\u0275\u0275nextContext"](2);const n=s["\u0275\u0275reference"](1);s["\u0275\u0275property"]("nbPopover",n),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](null==e||null==e.logradouro||null==e.logradouro.tipoLogradouro?null:e.logradouro.tipoLogradouro.nome),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](null==e||null==e.logradouro?null:e.logradouro.nome),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](null==e?null:e.numero),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](null==e?null:e.letra),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate"](null==e?null:e.hidrometro)}}function Z(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tbody"),s["\u0275\u0275template"](1,Q,17,6,"tr",17),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",e.table.content)}}const ee=[{path:"",component:f,children:[{path:"listar",component:(()=>{class e extends L.ListarComponent{constructor(e,t,n){super(e,t,n),this.router=e,this.activeRouter=t,this.service=n}ngOnInit(){super.init(),this.initFiltro(),super.filtro=this.filtro}initFiltro(){this.filtro={page:0,size:5,ativo:{valor:null,asc:null},numero:{valor:null,asc:null},letra:{valor:null,asc:null},hidrometro:{valor:null,asc:null},logradouro:{valor:null,asc:null,order:["logradouro.nome"]},tipoLogradouro:{valor:null,asc:null,order:["logradouro.tipoLogradouro.nome"]}}}order(e){"numero"===e?this.filtro.numero.asc?this.filtro.numero.asc=!this.filtro.numero.asc:(this.filtro.numero.asc=!0,this.filtro.numero.order=["numero"]):(this.filtro.numero.asc=null,this.filtro.numero.order=null),"letra"===e?this.filtro.letra.asc?this.filtro.letra.asc=!this.filtro.letra.asc:(this.filtro.letra.asc=!0,this.filtro.letra.order=["letra"]):(this.filtro.letra.asc=null,this.filtro.letra.order=null),"hidrometro"===e?this.filtro.hidrometro.asc?this.filtro.hidrometro.asc=!this.filtro.hidrometro.asc:(this.filtro.hidrometro.asc=!0,this.filtro.hidrometro.order=["hidrometro"]):(this.filtro.hidrometro.asc=null,this.filtro.hidrometro.order=null),"logradouro"===e?this.filtro.logradouro.asc?this.filtro.logradouro.asc=!this.filtro.logradouro.asc:(this.filtro.logradouro.asc=!0,this.filtro.logradouro.order=["logradouro.nome"]):(this.filtro.logradouro.asc=null,this.filtro.logradouro.order=null),"tipoLogradouro"===e?this.filtro.tipoLogradouro.asc?this.filtro.tipoLogradouro.asc=!this.filtro.tipoLogradouro.asc:(this.filtro.tipoLogradouro.asc=!0,this.filtro.tipoLogradouro.order=["logradouro.tipoLogradouro.nome"]):(this.filtro.tipoLogradouro.asc=null,this.filtro.tipoLogradouro.order=null),this.load()}getModulo(){return h.b.MATRICULA}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](p.c),s["\u0275\u0275directiveInject"](p.a),s["\u0275\u0275directiveInject"](v.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-matricula"]],features:[s["\u0275\u0275InheritDefinitionFeature"]],decls:43,vars:15,consts:[["logradouroDetalhes",""],[3,"loading","title","table","filtro","buscar"],[1,"table","table-sm","table-striped"],["scope","col",1,"align-middle","font-weight-bold",3,"click"],[4,"ngIf"],["scope","col","colspan","2",2,"width","8%"],["nbButton","","outline","","fullWidth","","status","success",3,"click"],["icon","plus-outline"],["nbInput","","fullWidth","","type","text",1,"form-control",3,"ngModel","keydown.enter","ngModelChange"],["colspan","2"],["nbButton","","outline","","fullWidth","","status","info",3,"click"],["icon","search-outline"],["scope","col","colspan","6"],["class","float-right","icon","arrow-downward-outline",4,"ngIf"],["class","float-right","icon","arrow-upward-outline",4,"ngIf"],["icon","arrow-downward-outline",1,"float-right"],["icon","arrow-upward-outline",1,"float-right"],["nbPopoverPlacement","top","nbPopoverTrigger","click",3,"nbPopover","click",4,"ngFor","ngForOf"],["nbPopoverPlacement","top","nbPopoverTrigger","click",3,"nbPopover","click"],[1,"align-middle"],[1,"align-middle","text-uppercase"],["nbButton","","outline","","fullWidth","","status","warning",3,"click"],["icon","edit-outline"],["nbButton","","outline","","fullWidth","","status","danger",3,"click"],["icon","trash-2-outline"]],template:function(e,t){1&e&&(s["\u0275\u0275template"](0,B,7,6,"ng-template",null,0,s["\u0275\u0275templateRefExtractor"]),s["\u0275\u0275elementStart"](2,"ngx-table",1),s["\u0275\u0275listener"]("buscar",(function(){return t.load()})),s["\u0275\u0275elementStart"](3,"table",2),s["\u0275\u0275elementStart"](4,"thead"),s["\u0275\u0275elementStart"](5,"tr"),s["\u0275\u0275elementStart"](6,"th",3),s["\u0275\u0275listener"]("click",(function(){return t.order("tipoLogradouro")})),s["\u0275\u0275text"](7," Tipo: "),s["\u0275\u0275template"](8,q,3,2,"ng-container",4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"th",3),s["\u0275\u0275listener"]("click",(function(){return t.order("logradouro")})),s["\u0275\u0275text"](10," Nome: "),s["\u0275\u0275template"](11,R,3,2,"ng-container",4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"th",3),s["\u0275\u0275listener"]("click",(function(){return t.order("numero")})),s["\u0275\u0275text"](13," N\xfamero: "),s["\u0275\u0275template"](14,_,3,2,"ng-container",4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"th",3),s["\u0275\u0275listener"]("click",(function(){return t.order("letra")})),s["\u0275\u0275text"](16," Letra: "),s["\u0275\u0275template"](17,U,3,2,"ng-container",4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](18,"th",3),s["\u0275\u0275listener"]("click",(function(){return t.order("hidrometro")})),s["\u0275\u0275text"](19," Hidr\xf4metro: "),s["\u0275\u0275template"](20,K,3,2,"ng-container",4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](21,"th",5),s["\u0275\u0275elementStart"](22,"button",6),s["\u0275\u0275listener"]("click",(function(){return t.adicionar()})),s["\u0275\u0275element"](23,"nb-icon",7),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](24,"thead"),s["\u0275\u0275elementStart"](25,"tr"),s["\u0275\u0275elementStart"](26,"th"),s["\u0275\u0275elementStart"](27,"input",8),s["\u0275\u0275listener"]("keydown.enter",(function(){return t.load()}))("ngModelChange",(function(e){return t.filtro.tipoLogradouro.valor=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](28,"th"),s["\u0275\u0275elementStart"](29,"input",8),s["\u0275\u0275listener"]("keydown.enter",(function(){return t.load()}))("ngModelChange",(function(e){return t.filtro.logradouro.valor=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](30,"th"),s["\u0275\u0275elementStart"](31,"input",8),s["\u0275\u0275listener"]("keydown.enter",(function(){return t.load()}))("ngModelChange",(function(e){return t.filtro.numero.valor=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](32,"th"),s["\u0275\u0275elementStart"](33,"input",8),s["\u0275\u0275listener"]("keydown.enter",(function(){return t.load()}))("ngModelChange",(function(e){return t.filtro.letra.valor=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](34,"th"),s["\u0275\u0275elementStart"](35,"input",8),s["\u0275\u0275listener"]("keydown.enter",(function(){return t.load()}))("ngModelChange",(function(e){return t.filtro.hidrometro.valor=e})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](36,"th",9),s["\u0275\u0275elementStart"](37,"button",10),s["\u0275\u0275listener"]("click",(function(){return t.load()})),s["\u0275\u0275element"](38,"nb-icon",11),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](39,Z,2,1,"tbody",4),s["\u0275\u0275elementStart"](40,"tfoot"),s["\u0275\u0275elementStart"](41,"tr"),s["\u0275\u0275element"](42,"th",12),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("loading",t.loading)("title","Matr\xedculas")("table",t.table)("filtro",t.filtro),s["\u0275\u0275advance"](6),s["\u0275\u0275property"]("ngIf",null!==t.filtro.tipoLogradouro.asc),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngIf",null!==t.filtro.logradouro.asc),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngIf",null!==t.filtro.numero.asc),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngIf",null!==t.filtro.letra.asc),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("ngIf",null!==t.filtro.hidrometro.asc),s["\u0275\u0275advance"](7),s["\u0275\u0275property"]("ngModel",t.filtro.tipoLogradouro.valor),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",t.filtro.logradouro.valor),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",t.filtro.numero.valor),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",t.filtro.letra.valor),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngModel",t.filtro.hidrometro.valor),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("ngIf",t.table&&!(null!=t.table&&t.table.empty)))},directives:[V.a,S.o,a.n,a.F,a.I,r.b,r.q,r.t,a.Q,a.R,S.n,a.ab],pipes:[W.a],styles:[".nb-theme-default   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}.nb-theme-cosmic   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#fff}.nb-theme-corporate   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}"]}),e})()},{path:"adicionar",component:w},{path:"deletar",component:k},{path:"editar",component:F}]}];let te=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[p.g.forChild(ee)],p.g]}),e})(),ne=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[v.a],imports:[[m.a,a.t,te,a.o,a.J,a.fb,a.v,l.a,a.H,r.k,r.w,c.LogradouroModule,a.kb,u.c.forChild(),d.a,a.S,i.a,a.bb,o.SelecionarModule]]}),e})()},"hTh/":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var o=n("wd/R"),r=n("fXoL");let l=(()=>{class e{transform(e,t){if(e){const t=o(e,"DDMMYYYY",!0);if(t.isValid())return t.format("DD/MM/YYYY")}return"invalido"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"datePipe",type:e,pure:!0}),e})()}}]);