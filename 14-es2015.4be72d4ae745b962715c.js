(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{OsVf:function(e,t,n){"use strict";n.r(t),n.d(t,"MatriculaModule",(function(){return z}));var r=n("3Pt+"),o=n("tR1z"),l=n("aceb"),a=n("BxTH"),i=n("XStL"),d=n("vTDv"),m=n("tmjD"),s=n("vKzg"),u=n("fXoL"),c=n("tyNb");let p=(()=>{class e{ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-matricula"]],decls:1,vars:0,template:function(e,t){1&e&&u["\u0275\u0275element"](0,"router-outlet")},directives:[c.h],encapsulation:2}),e})();var f=n("cMTS"),g=n("8Va2"),h=n("j9oM"),b=n("gqN9"),v=n("ofXK");function S(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"nb-option",16),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;u["\u0275\u0275property"]("value",e),u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",e.tipoLogradouro.nome+" "+e.nome," ")}}function x(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"div",17),u["\u0275\u0275elementStart"](1,"div",4),u["\u0275\u0275elementStart"](2,"label",5),u["\u0275\u0275text"](3,"Hidr\xf4metro"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](4,"input",18),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("status",e.getStatus("hidrometro"))("formControl",e.hidrometro)}}function E(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"div",17),u["\u0275\u0275elementStart"](1,"label",5),u["\u0275\u0275text"](2,"Hidr\xf4metro"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"div",4),u["\u0275\u0275elementStart"](4,"nb-checkbox",19),u["\u0275\u0275listener"]("checkedChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().toggle(t)})),u["\u0275\u0275text"](5," Possui Hidrometro "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("status",e.getStatus("possuiHidrometro"))("formControl",e.possuiHidrometro)}}let C=(()=>{class e extends f.a{constructor(e,t,n,r,o){super(e,t,n,o),this.router=e,this.activeRouter=t,this.service=n,this.lograoduroService=r,this.toast=o,this.hasHidrometro=!1,this.data={numero:"",logradouro:{nome:"",tipoLogradouro:{nome:""}}}}ngOnInit(){this.createForm(),this.loadLograoduro()}getModulo(){return g.b.MATRICULA}loadLograoduro(){this.lograoduroService.listarTodos().subscribe(e=>{this.logradouros=e})}changeDataBeforeSave(e){return e.possuiHidrometro=!!e.hidrometro,e}createForm(){this.form=new r.h({logradouro:new r.e(null,[r.z.required]),numero:new r.e(null,[r.z.required,r.z.maxLength(5),r.z.min(1)]),letra:new r.e(null,[r.z.maxLength(5),r.z.min(1)]),hidrometro:new r.e(null,[]),possuiHidrometro:new r.e(null,[])})}toggle(e){this.hasHidrometro=e}get logradouro(){return this.form.get("logradouro")}get numero(){return this.form.get("numero")}get letra(){return this.form.get("letra")}get hidrometro(){return this.form.get("hidrometro")}get possuiHidrometro(){return this.form.get("possuiHidrometro")}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](c.c),u["\u0275\u0275directiveInject"](c.a),u["\u0275\u0275directiveInject"](h.a),u["\u0275\u0275directiveInject"](b.a),u["\u0275\u0275directiveInject"](l.Gb))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-matricula"]],features:[u["\u0275\u0275InheritDefinitionFeature"]],decls:32,vars:13,consts:[["novalidate","",1,"needs-validation",3,"formGroup","nbSpinner","ngSubmit"],["status","success"],[1,"row"],[1,"col-md-6","col-12"],[1,"form-group"],[1,"label"],["fullWidth","","placeholder","Selecionar",3,"status","formControl"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-3","col-6"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","N\xfamero",3,"mask","status","formControl"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","Letra",1,"text-uppercase",3,"mask","status","formControl"],["class","offset-md-6 col-md-6 col-12",4,"ngIf"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic","type","reset",3,"click"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","success","type","submit"],[3,"value"],[1,"offset-md-6","col-md-6","col-12"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","Hidrometro",3,"status","formControl"],[1,"align-center",3,"status","formControl","checkedChange"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"form",0),u["\u0275\u0275listener"]("ngSubmit",(function(){return t.onSubmit()})),u["\u0275\u0275elementStart"](1,"nb-card",1),u["\u0275\u0275elementStart"](2,"nb-card-header"),u["\u0275\u0275text"](3," Matr\xedcula "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"nb-card-body"),u["\u0275\u0275elementStart"](5,"div",2),u["\u0275\u0275elementStart"](6,"div",3),u["\u0275\u0275elementStart"](7,"div",4),u["\u0275\u0275elementStart"](8,"label",5),u["\u0275\u0275text"](9,"* Logradouro"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](10,"nb-select",6),u["\u0275\u0275template"](11,S,2,2,"nb-option",7),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](12,"div",8),u["\u0275\u0275elementStart"](13,"div",4),u["\u0275\u0275elementStart"](14,"label",5),u["\u0275\u0275text"](15,"* N\xfamero"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](16,"input",9),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](17,"div",8),u["\u0275\u0275elementStart"](18,"div",4),u["\u0275\u0275elementStart"](19,"label",5),u["\u0275\u0275text"](20,"Letra"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](21,"input",10),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](22,x,5,2,"div",11),u["\u0275\u0275template"](23,E,6,2,"div",11),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](24,"nb-card-footer"),u["\u0275\u0275elementStart"](25,"div",2),u["\u0275\u0275elementStart"](26,"div",12),u["\u0275\u0275elementStart"](27,"button",13),u["\u0275\u0275listener"]("click",(function(){return t.voltar()})),u["\u0275\u0275text"](28,"voltar"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](29,"div",14),u["\u0275\u0275elementStart"](30,"button",15),u["\u0275\u0275text"](31,"Salvar"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275property"]("formGroup",t.form)("nbSpinner",t.loading),u["\u0275\u0275advance"](10),u["\u0275\u0275property"]("status",t.getStatus("logradouro"))("formControl",t.logradouro),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngForOf",t.logradouros),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("mask","0*")("status",t.getStatus("numero"))("formControl",t.numero),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("mask","S*")("status",t.getStatus("letra"))("formControl",t.letra),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",t.hasHidrometro),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",!t.hasHidrometro))},directives:[r.B,r.r,r.i,l.rb,l.v,l.x,l.u,l.mb,r.q,r.f,v.m,l.P,m.a,r.b,v.n,l.w,l.s,l.fb,l.A],encapsulation:2}),e})();var y=n("x2Ck");function I(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"div",2),u["\u0275\u0275elementStart"](1,"div",7),u["\u0275\u0275elementStart"](2,"div",8),u["\u0275\u0275elementStart"](3,"small",9),u["\u0275\u0275text"](4,"* Tipo"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"input",10),u["\u0275\u0275listener"]("ngModelChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().data.logradouro.tipoLogradouro.nome=t})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](6,"div",11),u["\u0275\u0275elementStart"](7,"div",8),u["\u0275\u0275elementStart"](8,"small",9),u["\u0275\u0275text"](9,"* Logradouro"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](10,"input",10),u["\u0275\u0275listener"]("ngModelChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().data.logradouro.nome=t})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](11,"div",3),u["\u0275\u0275elementStart"](12,"div",8),u["\u0275\u0275elementStart"](13,"small",9),u["\u0275\u0275text"](14,"* N\xfamero"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](15,"input",12),u["\u0275\u0275listener"]("ngModelChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().data.numero=t})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](16,"div",3),u["\u0275\u0275elementStart"](17,"div",8),u["\u0275\u0275elementStart"](18,"small",9),u["\u0275\u0275text"](19,"* Letra"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](20,"input",10),u["\u0275\u0275listener"]("ngModelChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().data.letra=t})),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("ngModel",e.data.logradouro.tipoLogradouro.nome),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("ngModel",e.data.logradouro.nome),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("ngModel",e.data.numero),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("ngModel",e.data.letra)}}let w=(()=>{class e extends y.DeletarComponent{constructor(e,t,n,r){super(e,t,n,r),this.router=e,this.activeRouter=t,this.service=n,this.toast=r}ngOnInit(){}getModulo(){return g.b.MATRICULA}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](c.c),u["\u0275\u0275directiveInject"](c.a),u["\u0275\u0275directiveInject"](h.a),u["\u0275\u0275directiveInject"](l.Gb))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-matricula"]],features:[u["\u0275\u0275InheritDefinitionFeature"]],decls:13,vars:2,consts:[["status","danger",3,"nbSpinner"],["class","row",4,"ngIf"],[1,"row"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic",3,"click"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","danger","type","button",3,"click"],[1,"col-md-2","col-12"],[1,"form-group"],[1,"form-text","text-muted"],["nbInput","","disabled","","fullWidth","","type","text","status","basic",3,"ngModel","ngModelChange"],[1,"col-md-6","col-12"],["nbInput","","fullWidth","","disabled","","type","text","status","basic",3,"ngModel","ngModelChange"]],template:function(e,t){1&e&&(u["\u0275\u0275elementStart"](0,"nb-card",0),u["\u0275\u0275elementStart"](1,"nb-card-header"),u["\u0275\u0275text"](2," Matr\xedcula "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"nb-card-body"),u["\u0275\u0275template"](4,I,21,4,"div",1),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"nb-card-footer"),u["\u0275\u0275elementStart"](6,"div",2),u["\u0275\u0275elementStart"](7,"div",3),u["\u0275\u0275elementStart"](8,"button",4),u["\u0275\u0275listener"]("click",(function(){return t.voltar()})),u["\u0275\u0275text"](9,"voltar"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](10,"div",5),u["\u0275\u0275elementStart"](11,"button",6),u["\u0275\u0275listener"]("click",(function(){return t.onSubmit()})),u["\u0275\u0275text"](12,"Deletar"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275property"]("nbSpinner",t.loading),u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("ngIf",t.data))},directives:[l.v,l.rb,l.x,l.u,v.n,l.w,l.s,l.P,r.b,r.q,r.t],encapsulation:2}),e})();function M(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"nb-option",17),u["\u0275\u0275text"](1),u["\u0275\u0275elementEnd"]()),2&e){const e=t.$implicit;u["\u0275\u0275property"]("value",e.nome),u["\u0275\u0275advance"](1),u["\u0275\u0275textInterpolate1"](" ",e.tipoLogradouro.nome+" "+e.nome," ")}}function k(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"div",18),u["\u0275\u0275elementStart"](1,"div",5),u["\u0275\u0275elementStart"](2,"label",6),u["\u0275\u0275text"](3,"Hidr\xf4metro"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](4,"input",19),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"](2);u["\u0275\u0275advance"](4),u["\u0275\u0275property"]("status",e.getStatus("hidrometro"))("formControl",e.hidrometro)}}function L(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"div",18),u["\u0275\u0275elementStart"](1,"label",6),u["\u0275\u0275text"](2,"Hidr\xf4metro"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"div",5),u["\u0275\u0275elementStart"](4,"nb-checkbox",20),u["\u0275\u0275listener"]("checkedChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"](2).toggle(t)})),u["\u0275\u0275text"](5," Possui Hidrometro "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}}function H(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"form",1),u["\u0275\u0275listener"]("ngSubmit",(function(){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().onSubmit()})),u["\u0275\u0275elementStart"](1,"nb-card",2),u["\u0275\u0275elementStart"](2,"nb-card-header"),u["\u0275\u0275text"](3," Matr\xedcula "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"nb-card-body"),u["\u0275\u0275elementStart"](5,"div",3),u["\u0275\u0275elementStart"](6,"div",4),u["\u0275\u0275elementStart"](7,"div",5),u["\u0275\u0275elementStart"](8,"label",6),u["\u0275\u0275text"](9,"* Logradouro"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](10,"nb-select",7),u["\u0275\u0275listener"]("selectedChange",(function(t){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().logradouro.value.nome=t})),u["\u0275\u0275template"](11,M,2,2,"nb-option",8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](12,"div",9),u["\u0275\u0275elementStart"](13,"div",5),u["\u0275\u0275elementStart"](14,"label",6),u["\u0275\u0275text"](15,"* N\xfamero"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](16,"input",10),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](17,"div",9),u["\u0275\u0275elementStart"](18,"div",5),u["\u0275\u0275elementStart"](19,"label",6),u["\u0275\u0275text"](20,"Letra"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275element"](21,"input",11),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](22,k,5,2,"div",12),u["\u0275\u0275template"](23,L,6,0,"div",12),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](24,"nb-card-footer"),u["\u0275\u0275elementStart"](25,"div",3),u["\u0275\u0275elementStart"](26,"div",13),u["\u0275\u0275elementStart"](27,"button",14),u["\u0275\u0275listener"]("click",(function(){return u["\u0275\u0275restoreView"](e),u["\u0275\u0275nextContext"]().voltar()})),u["\u0275\u0275text"](28,"voltar"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](29,"div",15),u["\u0275\u0275elementStart"](30,"button",16),u["\u0275\u0275text"](31,"Editar"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275property"]("formGroup",e.form)("nbSpinner",e.loading),u["\u0275\u0275advance"](10),u["\u0275\u0275property"]("status",e.getStatus("logradouro"))("selected",e.logradouro.value.nome),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngForOf",e.logradouros),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("mask","0*")("status",e.getStatus("numero"))("formControl",e.numero),u["\u0275\u0275advance"](5),u["\u0275\u0275property"]("mask","S*")("status",e.getStatus("letra"))("formControl",e.letra),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",e.hasHidrometro),u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngIf",!e.hasHidrometro)}}let P=(()=>{class e extends y.EditarComponent{constructor(e,t,n,r,o){super(e,t,n,o),this.router=e,this.activeRouter=t,this.service=n,this.logradouroService=r,this.toast=o}changeDataBeforeSave(e){return e.logradouro=this.logradouros.find(e=>e.nome===this.logradouro.value.nome),e}ngOnInit(){this.loadLograoduro(),this.load(),this.createForm()}getModulo(){return g.b.MATRICULA}loadLograoduro(){this.logradouroService.listarTodos().subscribe(e=>{this.logradouros=e,this.form.patchValue({logradouro:this.data.logradouro})})}createForm(){this.hasHidrometro=!!this.data.hidrometro,this.form=new r.h({numero:new r.e(this.data.numero,[r.z.required,r.z.maxLength(5),r.z.min(1)]),letra:new r.e(this.data.letra,[r.z.maxLength(5),r.z.min(1)]),logradouro:new r.e({},[r.z.required]),possuiHidrometro:new r.e(this.data.possuiHidrometro,[]),hidrometro:new r.e(this.data.hidrometro,[])})}toggle(){this.hasHidrometro=!this.hasHidrometro}get logradouro(){return this.form.get("logradouro")}get numero(){return this.form.get("numero")}get letra(){return this.form.get("letra")}get hidrometro(){return this.form.get("hidrometro")}get possuiHidrometro(){return this.form.get("possuiHidrometro")}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](c.c),u["\u0275\u0275directiveInject"](c.a),u["\u0275\u0275directiveInject"](h.a),u["\u0275\u0275directiveInject"](b.a),u["\u0275\u0275directiveInject"](l.Gb))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-matricula"]],features:[u["\u0275\u0275InheritDefinitionFeature"]],decls:1,vars:1,consts:[["class","needs-validation","novalidate","",3,"formGroup","nbSpinner","ngSubmit",4,"ngIf"],["novalidate","",1,"needs-validation",3,"formGroup","nbSpinner","ngSubmit"],["status","warning"],[1,"row"],[1,"col-md-6","col-12"],[1,"form-group"],[1,"label"],["fullWidth","","placeholder","Selecionar",3,"status","selected","selectedChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-3","col-6"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","N\xfamero",3,"mask","status","formControl"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","Letra",1,"text-uppercase",3,"mask","status","formControl"],["class","offset-md-6 col-md-6 col-12",4,"ngIf"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic","type","reset",3,"click"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","warning","type","submit"],[3,"value"],[1,"offset-md-6","col-md-6","col-12"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","Hidr\xf4metro",3,"status","formControl"],[1,"align-center",3,"checkedChange"]],template:function(e,t){1&e&&u["\u0275\u0275template"](0,H,32,13,"form",0),2&e&&u["\u0275\u0275property"]("ngIf",t.form)},directives:[v.n,r.B,r.r,r.i,l.rb,l.v,l.x,l.u,l.mb,v.m,l.P,m.a,r.b,r.q,r.f,l.w,l.s,l.fb,l.A],encapsulation:2}),e})();var j=n("NGTt"),O=n("hTh/");function V(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"nb-list"),u["\u0275\u0275elementStart"](1,"nb-list-item"),u["\u0275\u0275text"](2),u["\u0275\u0275pipe"](3,"datePipe"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](4,"nb-list-item"),u["\u0275\u0275text"](5),u["\u0275\u0275pipe"](6,"datePipe"),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate1"]("Criado em: ",u["\u0275\u0275pipeBind1"](3,2,null==e.data?null:e.data.createdDate)," "),u["\u0275\u0275advance"](3),u["\u0275\u0275textInterpolate1"]("Ultima Atualiza\xe7\xe3o: ",u["\u0275\u0275pipeBind1"](6,4,null==e.data?null:e.data.lastModifiedDate)," ")}}function W(e,t){if(1&e){const e=u["\u0275\u0275getCurrentView"]();u["\u0275\u0275elementStart"](0,"tr",10),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](e);const n=t.$implicit;return u["\u0275\u0275nextContext"](2).selecionar(n)})),u["\u0275\u0275elementStart"](1,"td",11),u["\u0275\u0275text"](2),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](3,"td",11),u["\u0275\u0275text"](4),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](5,"td",12),u["\u0275\u0275text"](6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](7,"td",12),u["\u0275\u0275text"](8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](9,"td",11),u["\u0275\u0275elementStart"](10,"button",13),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](e);const n=t.$implicit;return u["\u0275\u0275nextContext"](2).editar(n)})),u["\u0275\u0275element"](11,"nb-icon",14),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](12,"td",11),u["\u0275\u0275elementStart"](13,"button",15),u["\u0275\u0275listener"]("click",(function(){u["\u0275\u0275restoreView"](e);const n=t.$implicit;return u["\u0275\u0275nextContext"](2).deletar(n)})),u["\u0275\u0275element"](14,"nb-icon",16),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;u["\u0275\u0275nextContext"](2);const n=u["\u0275\u0275reference"](1);u["\u0275\u0275property"]("nbPopover",n),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"]((null==e||null==e.logradouro||null==e.logradouro.tipoLogradouro?null:e.logradouro.tipoLogradouro.nome)+" "+(null==e||null==e.logradouro?null:e.logradouro.nome)),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](null==e?null:e.numero),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](null==e?null:e.letra),u["\u0275\u0275advance"](2),u["\u0275\u0275textInterpolate"](null==e?null:e.hidrometro)}}function B(e,t){if(1&e&&(u["\u0275\u0275elementStart"](0,"tbody"),u["\u0275\u0275template"](1,W,15,5,"tr",9),u["\u0275\u0275elementEnd"]()),2&e){const e=u["\u0275\u0275nextContext"]();u["\u0275\u0275advance"](1),u["\u0275\u0275property"]("ngForOf",e.table.content)}}const D=[{path:"",component:p,children:[{path:"listar",component:(()=>{class e extends y.ListarComponent{constructor(e,t,n){super(e,t,n),this.router=e,this.activeRouter=t,this.service=n}ngOnInit(){super.init()}getModulo(){return g.b.MATRICULA}}return e.\u0275fac=function(t){return new(t||e)(u["\u0275\u0275directiveInject"](c.c),u["\u0275\u0275directiveInject"](c.a),u["\u0275\u0275directiveInject"](h.a))},e.\u0275cmp=u["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-matricula"]],features:[u["\u0275\u0275InheritDefinitionFeature"]],decls:21,vars:5,consts:[["logradouroDetalhes",""],[3,"loading","title","table","filtro","buscar"],[1,"table","table-sm","table-striped"],["scope","col",1,"align-middle","font-weight-bold"],["scope","col","colspan","2",2,"width","8%"],["nbButton","","outline","","fullWidth","","status","success",3,"click"],["icon","plus-outline"],[4,"ngIf"],["scope","col","colspan","6"],["nbPopoverPlacement","top","nbPopoverTrigger","click",3,"nbPopover","click",4,"ngFor","ngForOf"],["nbPopoverPlacement","top","nbPopoverTrigger","click",3,"nbPopover","click"],[1,"align-middle"],[1,"align-middle","text-uppercase"],["nbButton","","outline","","fullWidth","","status","warning",3,"click"],["icon","edit-outline"],["nbButton","","outline","","fullWidth","","status","danger",3,"click"],["icon","trash-2-outline"]],template:function(e,t){1&e&&(u["\u0275\u0275template"](0,V,7,6,"ng-template",null,0,u["\u0275\u0275templateRefExtractor"]),u["\u0275\u0275elementStart"](2,"ngx-table",1),u["\u0275\u0275listener"]("buscar",(function(){return t.load()})),u["\u0275\u0275elementStart"](3,"table",2),u["\u0275\u0275elementStart"](4,"thead"),u["\u0275\u0275elementStart"](5,"tr"),u["\u0275\u0275elementStart"](6,"th",3),u["\u0275\u0275text"](7," Nome: "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](8,"th",3),u["\u0275\u0275text"](9," N\xfamero: "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](10,"th",3),u["\u0275\u0275text"](11," Letra: "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](12,"th",3),u["\u0275\u0275text"](13," Hidr\xf4metro: "),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementStart"](14,"th",4),u["\u0275\u0275elementStart"](15,"button",5),u["\u0275\u0275listener"]("click",(function(){return t.adicionar()})),u["\u0275\u0275element"](16,"nb-icon",6),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275template"](17,B,2,1,"tbody",7),u["\u0275\u0275elementStart"](18,"tfoot"),u["\u0275\u0275elementStart"](19,"tr"),u["\u0275\u0275element"](20,"th",8),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"](),u["\u0275\u0275elementEnd"]()),2&e&&(u["\u0275\u0275advance"](2),u["\u0275\u0275property"]("loading",t.loading)("title","Matr\xedculas")("table",t.table)("filtro",t.filtro),u["\u0275\u0275advance"](15),u["\u0275\u0275property"]("ngIf",t.table&&!(null!=t.table&&t.table.empty)))},directives:[j.a,l.s,l.L,v.n,l.X,l.Y,v.m,l.hb],pipes:[O.a],styles:[".nb-theme-default   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}.nb-theme-cosmic   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#fff}.nb-theme-corporate   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}"]}),e})()},{path:"adicionar",component:C},{path:"deletar",component:w},{path:"editar",component:P}]}];let F=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[c.g.forChild(D)],c.g]}),e})(),z=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[h.a],imports:[[d.a,l.y,F,l.t,l.Q,l.nb,l.B,o.a,l.N,r.k,r.w,s.LogradouroModule,l.sb,m.c.forChild(),i.a,l.Z,a.a,l.ib]]}),e})()},"hTh/":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n("wd/R"),o=n("fXoL");let l=(()=>{class e{transform(e,t){if(e){const t=r(e,"DDMMYYYY",!0);if(t.isValid())return t.format("DD/MM/YYYY")}return"invalido"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=o["\u0275\u0275definePipe"]({name:"datePipe",type:e,pure:!0}),e})()}}]);