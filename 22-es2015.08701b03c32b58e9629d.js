(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{TP08:function(e,t,n){"use strict";n.r(t),n.d(t,"HidrometroModule",(function(){return I}));var r=n("3Pt+"),a=n("oG2T"),o=n("tR1z"),i=n("aceb"),l=n("BxTH"),s=n("vTDv"),d=n("tmjD"),m=n("j9oM"),c=n("fXoL"),u=n("tyNb");let f=(()=>{class e{ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-hidrometro"]],decls:1,vars:0,template:function(e,t){1&e&&c["\u0275\u0275element"](0,"router-outlet")},directives:[u.h],encapsulation:2}),e})();var h=n("wd/R"),p=n("ofXK"),b=n("vDW2");let v=(()=>{class e{transform(e,t){return e?e.letra?e.logradouro.tipoLogradouro.nome+" "+e.logradouro.nome+" "+e.letra+" "+e.numero:e.logradouro.tipoLogradouro.nome+" "+e.logradouro.nome+" "+e.numero:""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=c["\u0275\u0275definePipe"]({name:"matricula",type:e,pure:!0}),e})();function g(e,t){if(1&e){const e=c["\u0275\u0275getCurrentView"]();c["\u0275\u0275elementStart"](0,"tr"),c["\u0275\u0275elementStart"](1,"td",14),c["\u0275\u0275text"](2),c["\u0275\u0275pipe"](3,"matricula"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"td",14),c["\u0275\u0275elementStart"](5,"input",15),c["\u0275\u0275listener"]("ngModelChange",(function(n){return c["\u0275\u0275restoreView"](e),t.$implicit.hidrometro.anterior=n})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](6,"td",14),c["\u0275\u0275elementStart"](7,"input",16),c["\u0275\u0275listener"]("ngModelChange",(function(n){return c["\u0275\u0275restoreView"](e),t.$implicit.hidrometro.atual=n})),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;c["\u0275\u0275advance"](2),c["\u0275\u0275textInterpolate1"](" ",c["\u0275\u0275pipeBind1"](3,5,e.matricula)," "),c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("status",e.valido?"basic":"danger")("ngModel",e.hidrometro.anterior),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("status",e.valido?"basic":"danger")("ngModel",e.hidrometro.atual)}}function S(e,t){if(1&e&&(c["\u0275\u0275elementStart"](0,"tbody"),c["\u0275\u0275template"](1,g,8,7,"tr",13),c["\u0275\u0275elementEnd"]()),2&e){const e=c["\u0275\u0275nextContext"]();c["\u0275\u0275advance"](1),c["\u0275\u0275property"]("ngForOf",e.hidrometros)}}let E=(()=>{class e{constructor(e,t,n,r){this.toast=e,this.matriculaService=t,this.activeRouter=n,this.router=r,this.storage=sessionStorage}ngOnInit(){this.load(),this.loadData()}load(){this.referencia=JSON.parse(this.storage.getItem("[hidrometro][adicionar]")),this.storage.removeItem("[hidrometro][adicionar]"),this.referencia||this.router.navigate(["./listar"],{relativeTo:this.activeRouter.parent}),this.referenciaAnterior=this.getReferenciaAnterior(this.referencia)}getReferenciaAnterior(e){return h(h(e,"MMYYYY",!0)).subtract(1,"M").format("MMYYYY")}loadData(){this.hidrometros=[],this.matriculaService.listarMatriculasHidrometro().subscribe(e=>{this.matriculas=e,this.matriculas.forEach(e=>{let t=this.hidrometroByReferencia(e,this.referencia);if(!t){const n=this.hidrometroByReferencia(e,this.referenciaAnterior);t=n?{referencia:this.referencia,atual:0,anterior:n.atual}:{referencia:this.referencia,atual:0,anterior:0}}this.hidrometros.push({matricula:e,hidrometro:t,valido:!0})})})}validar(){return this.hidrometros.forEach(e=>{e.hidrometro.atual<e.hidrometro.anterior&&(e.valido=!1)}),this.hidrometros.some(e=>!e.valido)}hidrometroByReferencia(e,t){return e.hidrometroList||(e.hidrometroList=[]),e.hidrometroList.find(e=>e.referencia===t)}salvar(){this.validar()?this.toast.danger("Erro","Dados invalidos"):(this.hidrometros.forEach(e=>{e.matricula.hidrometroList.push(e.hidrometro)}),this.matriculaService.salvarTodos(this.matriculas).subscribe(()=>{this.router.navigate(["./listar"],{relativeTo:this.activeRouter.parent})},()=>{}))}voltar(){this.router.navigate(["./listar"],{relativeTo:this.activeRouter.parent})}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](i.Fb),c["\u0275\u0275directiveInject"](m.a),c["\u0275\u0275directiveInject"](u.a),c["\u0275\u0275directiveInject"](u.c))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-hidrometro-adicionar"]],decls:30,vars:4,consts:[["accent","success"],[1,"float-left"],[1,"float-right"],[1,"table-responsive"],[1,"table","table-sm","table-striped"],["scope","col",1,"align-middle","font-weight-bold"],[4,"ngIf"],["scope","col","colspan","3"],[1,"row"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic","type","button",3,"click"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","success","type","submit",3,"click"],[4,"ngFor","ngForOf"],[1,"align-middle"],["nbInput","","fullWidth","","type","text","mask","separator.0","thousandSeparator",".","placeholder","Anterior",3,"status","ngModel","ngModelChange"],["nbInput","","fullWidth","","type","text","mask","separator.0","thousandSeparator",".","placeholder","Atual",3,"status","ngModel","ngModelChange"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"nb-card",0),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275elementStart"](2,"div",1),c["\u0275\u0275text"](3," Registro "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"div",2),c["\u0275\u0275text"](5),c["\u0275\u0275pipe"](6,"referenciaPipe"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](7,"nb-card-body"),c["\u0275\u0275elementStart"](8,"div",3),c["\u0275\u0275elementStart"](9,"table",4),c["\u0275\u0275elementStart"](10,"thead"),c["\u0275\u0275elementStart"](11,"tr"),c["\u0275\u0275elementStart"](12,"th",5),c["\u0275\u0275text"](13," Matr\xedcula: "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](14,"th",5),c["\u0275\u0275text"](15," Anterior: "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](16,"th",5),c["\u0275\u0275text"](17," Atual: "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275template"](18,S,2,1,"tbody",6),c["\u0275\u0275elementStart"](19,"tfoot"),c["\u0275\u0275elementStart"](20,"tr"),c["\u0275\u0275element"](21,"th",7),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](22,"nb-card-footer"),c["\u0275\u0275elementStart"](23,"div",8),c["\u0275\u0275elementStart"](24,"div",9),c["\u0275\u0275elementStart"](25,"button",10),c["\u0275\u0275listener"]("click",(function(){return t.voltar()})),c["\u0275\u0275text"](26,"voltar"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](27,"div",11),c["\u0275\u0275elementStart"](28,"button",12),c["\u0275\u0275listener"]("click",(function(){return t.salvar()})),c["\u0275\u0275text"](29,"Salvar"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](5),c["\u0275\u0275textInterpolate1"](" ",c["\u0275\u0275pipeBind1"](6,2,t.referencia)," "),c["\u0275\u0275advance"](13),c["\u0275\u0275property"]("ngIf",t.hidrometros))},directives:[i.v,i.x,i.u,p.n,i.w,i.s,p.m,i.O,d.a,r.b,r.q,r.t],pipes:[b.a,v],styles:[".nb-theme-default   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}.nb-theme-cosmic   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#fff}.nb-theme-corporate   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}"]}),e})(),y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-hidrometro-deletar"]],decls:12,vars:0,consts:[["status","danger"],[1,"row"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","danger","type","button"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"nb-card",0),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275text"](2," Hidr\xf4metro "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](3,"nb-card-body"),c["\u0275\u0275elementStart"](4,"nb-card-footer"),c["\u0275\u0275elementStart"](5,"div",1),c["\u0275\u0275elementStart"](6,"div",2),c["\u0275\u0275elementStart"](7,"button",3),c["\u0275\u0275text"](8,"voltar"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](9,"div",4),c["\u0275\u0275elementStart"](10,"button",5),c["\u0275\u0275text"](11,"Deletar"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]())},directives:[i.v,i.x,i.u,i.w,i.s],encapsulation:2}),e})(),x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-hidrometro-editar"]],decls:16,vars:0,consts:[["novalidate","",1,"needs-validation"],["status","warning"],[1,"row"],[1,"col-md-3","col-12"],[1,"form-group"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic","type","reset"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","success","type","submit"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"form",0),c["\u0275\u0275elementStart"](1,"nb-card",1),c["\u0275\u0275elementStart"](2,"nb-card-header"),c["\u0275\u0275text"](3," Hidr\xf4metro "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"nb-card-body"),c["\u0275\u0275elementStart"](5,"div",2),c["\u0275\u0275elementStart"](6,"div",3),c["\u0275\u0275element"](7,"div",4),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](8,"nb-card-footer"),c["\u0275\u0275elementStart"](9,"div",2),c["\u0275\u0275elementStart"](10,"div",5),c["\u0275\u0275elementStart"](11,"button",6),c["\u0275\u0275text"](12,"voltar"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](13,"div",7),c["\u0275\u0275elementStart"](14,"button",8),c["\u0275\u0275text"](15,"Salvar"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]())},directives:[r.B,r.r,r.s,i.v,i.x,i.u,i.w,i.s],encapsulation:2}),e})();var M=n("FPPW");let O=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=c["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const w=[{path:"",component:f,children:[{path:"listar",component:(()=>{class e{constructor(e,t,n){this.router=e,this.activeRouter=t,this.service=n,this.storage=sessionStorage,this.submited=!1}ngOnInit(){this.loadForm()}loadForm(){this.form=new r.h({referencia:new r.e(null,[r.z.required,r.z.minLength(6),r.z.maxLength(6),M.a.isReferencia()])})}OnSubmit(){this.submited=!0,this.form.invalid||(this.storage.setItem("[hidrometro][adicionar]",JSON.stringify(this.referencia.value)),this.router.navigate(["./adicionar"],{relativeTo:this.activeRouter.parent}))}getStatus(e){return this.submited?this.form.get(e).valid?"success":"danger":"basic"}get referencia(){return this.form.get("referencia")}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](u.c),c["\u0275\u0275directiveInject"](u.a),c["\u0275\u0275directiveInject"](O))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-hidrometro-listar"]],decls:21,vars:4,consts:[[1,"needs-validation",3,"formGroup","ngSubmit"],["accent","success"],[1,"row"],[1,"col-md-3","col-12"],[1,"form-group"],[1,"label"],["nbInput","","fullWidth","","type","text","placeholder","Refer\xeancia",1,"form-control",3,"mask","formControl","status"],[1,"valid-feedback"],[1,"invalid-feedback"],[1,"col-md-3","offset-md-3","col-12"],["nbButton","","outline","","fullWidth","","status","success","type","submit"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"form",0),c["\u0275\u0275listener"]("ngSubmit",(function(){return t.OnSubmit()})),c["\u0275\u0275elementStart"](1,"nb-card",1),c["\u0275\u0275elementStart"](2,"nb-card-header"),c["\u0275\u0275text"](3," Hidrom\xeatros "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](4,"nb-card-body"),c["\u0275\u0275elementStart"](5,"div",2),c["\u0275\u0275elementStart"](6,"div",3),c["\u0275\u0275elementStart"](7,"div",4),c["\u0275\u0275elementStart"](8,"label",5),c["\u0275\u0275text"](9,"* Refer\xeancia:"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275element"](10,"input",6),c["\u0275\u0275elementStart"](11,"div",7),c["\u0275\u0275text"](12," V\xe1lido "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](13,"div",8),c["\u0275\u0275text"](14," Inv\xe1lido "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](15,"div",9),c["\u0275\u0275elementStart"](16,"div",4),c["\u0275\u0275elementStart"](17,"label",5),c["\u0275\u0275text"](18,"A\xe7\xf5es"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](19,"button",10),c["\u0275\u0275text"](20,"Pr\xe9-Visualizar"),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275property"]("formGroup",t.form),c["\u0275\u0275advance"](10),c["\u0275\u0275property"]("mask","00/0000")("formControl",t.referencia)("status",t.getStatus("referencia")))},directives:[r.B,r.r,r.i,i.v,i.x,i.u,i.O,d.a,r.b,r.q,r.f,i.s],styles:[".nb-theme-default   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}.nb-theme-cosmic   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#fff}.nb-theme-corporate   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}"]}),e})()},{path:"adicionar",component:E},{path:"deletar",component:y},{path:"editar",component:x}]}];let C=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[u.g.forChild(w)],u.g]}),e})(),I=(()=>{class e{}return e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[m.a,O],imports:[[s.a,i.y,i.t,i.P,i.mb,o.a,i.M,r.k,r.w,i.P,C,i.F,a.a,l.a,i.Ib,d.c.forChild()]]}),e})()}}]);