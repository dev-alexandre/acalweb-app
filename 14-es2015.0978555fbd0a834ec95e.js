(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{TP08:function(e,t,n){"use strict";n.r(t),n.d(t,"HidrometroModule",(function(){return F}));var r=n("3Pt+"),a=n("oG2T"),o=n("tR1z"),l=n("aceb"),i=n("BxTH"),d=n("vTDv"),m=n("tmjD"),c=n("j9oM"),s=n("fXoL"),u=n("tyNb");let p=(()=>{class e{ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-hidrometro"]],decls:1,vars:0,template:function(e,t){1&e&&s["\u0275\u0275element"](0,"router-outlet")},directives:[u.h],encapsulation:2}),e})();var f=n("wd/R"),h=n("ofXK"),b=n("vDW2"),v=n("uG+8");function g(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"tr"),s["\u0275\u0275elementStart"](1,"td",14),s["\u0275\u0275text"](2),s["\u0275\u0275pipe"](3,"matricula"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"td",14),s["\u0275\u0275text"](5),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"td",14),s["\u0275\u0275text"](7),s["\u0275\u0275pipe"](8,"currency"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"td",14),s["\u0275\u0275elementStart"](10,"input",15),s["\u0275\u0275listener"]("ngModelChange",(function(n){return s["\u0275\u0275restoreView"](e),t.$implicit.hidrometro.anterior=n})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](11,"td",14),s["\u0275\u0275elementStart"](12,"input",16),s["\u0275\u0275listener"]("ngModelChange",(function(n){return s["\u0275\u0275restoreView"](e),t.$implicit.hidrometro.atual=n})),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit;s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" ",s["\u0275\u0275pipeBind1"](3,7,e.matricula)," "),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"](" ",e.hidrometro.atual-e.hidrometro.anterior," "),s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" ",s["\u0275\u0275pipeBind3"](8,9,25e-5*(e.hidrometro.atual-e.hidrometro.anterior),"BRL","symbol")," "),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("status",e.valido?"basic":"danger")("ngModel",e.hidrometro.anterior),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("status",e.valido?"basic":"danger")("ngModel",e.hidrometro.atual)}}function S(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tbody"),s["\u0275\u0275template"](1,g,13,13,"tr",13),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",e.hidrometros)}}let E=(()=>{class e{constructor(e,t,n,r){this.toast=e,this.matriculaService=t,this.activeRouter=n,this.router=r,this.storage=sessionStorage}ngOnInit(){this.load(),this.loadData()}load(){this.referencia=JSON.parse(this.storage.getItem("[hidrometro][adicionar]")),this.storage.removeItem("[hidrometro][adicionar]"),this.referencia||this.router.navigate(["./listar"],{relativeTo:this.activeRouter.parent}),this.referenciaAnterior=this.getReferenciaAnterior(this.referencia)}getReferenciaAnterior(e){return f(f(e,"MMYYYY",!0)).subtract(1,"M").format("MMYYYY")}loadData(){this.hidrometros=[],this.matriculaService.listarMatriculasHidrometro().subscribe(e=>{this.matriculas=e,this.matriculas.forEach(e=>{let t=this.hidrometroByReferencia(e,this.referencia);if(!t){const n=this.hidrometroByReferencia(e,this.referenciaAnterior);t=n?{referencia:this.referencia,atual:0,anterior:n.atual}:{referencia:this.referencia,atual:0,anterior:0}}this.hidrometros.push({matricula:e,hidrometro:t,valido:!0})})})}validar(){return this.hidrometros.forEach(e=>{e.hidrometro.atual<e.hidrometro.anterior&&(e.valido=!1)}),this.hidrometros.some(e=>!e.valido)}hidrometroByReferencia(e,t){return e.hidrometroList||(e.hidrometroList=[]),e.hidrometroList.find(e=>e.referencia===t)}salvar(){this.validar()?this.toast.danger("Erro","Dados invalidos"):(this.hidrometros.forEach(e=>{e.matricula.hidrometroList.push(e.hidrometro)}),this.matriculaService.salvarTodos(this.matriculas).subscribe(()=>{this.router.navigate(["./listar"],{relativeTo:this.activeRouter.parent})},()=>{}))}voltar(){this.router.navigate(["./listar"],{relativeTo:this.activeRouter.parent})}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](l.pb),s["\u0275\u0275directiveInject"](c.a),s["\u0275\u0275directiveInject"](u.a),s["\u0275\u0275directiveInject"](u.c))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-hidrometro-adicionar"]],decls:34,vars:4,consts:[["accent","success"],[1,"float-left"],[1,"float-right"],[1,"table-responsive"],[1,"table","table-sm","table-striped"],["scope","col",1,"align-middle","font-weight-bold"],[4,"ngIf"],["scope","col","colspan","3"],[1,"row"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic","type","button",3,"click"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","success","type","submit",3,"click"],[4,"ngFor","ngForOf"],[1,"align-middle"],["nbInput","","fullWidth","","type","text","mask","separator.0","thousandSeparator",".","placeholder","Anterior",3,"status","ngModel","ngModelChange"],["nbInput","","fullWidth","","type","text","mask","separator.0","thousandSeparator",".","placeholder","Atual",3,"status","ngModel","ngModelChange"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"nb-card",0),s["\u0275\u0275elementStart"](1,"nb-card-header"),s["\u0275\u0275elementStart"](2,"div",1),s["\u0275\u0275text"](3," Registro "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"div",2),s["\u0275\u0275text"](5),s["\u0275\u0275pipe"](6,"referenciaPipe"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"nb-card-body"),s["\u0275\u0275elementStart"](8,"div",3),s["\u0275\u0275elementStart"](9,"table",4),s["\u0275\u0275elementStart"](10,"thead"),s["\u0275\u0275elementStart"](11,"tr"),s["\u0275\u0275elementStart"](12,"th",5),s["\u0275\u0275text"](13," Matr\xedcula: "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"th",5),s["\u0275\u0275text"](15," Consumo: "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"th",5),s["\u0275\u0275text"](17," Valor: "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](18,"th",5),s["\u0275\u0275text"](19," Anterior: "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](20,"th",5),s["\u0275\u0275text"](21," Atual: "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](22,S,2,1,"tbody",6),s["\u0275\u0275elementStart"](23,"tfoot"),s["\u0275\u0275elementStart"](24,"tr"),s["\u0275\u0275element"](25,"th",7),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](26,"nb-card-footer"),s["\u0275\u0275elementStart"](27,"div",8),s["\u0275\u0275elementStart"](28,"div",9),s["\u0275\u0275elementStart"](29,"button",10),s["\u0275\u0275listener"]("click",(function(){return t.voltar()})),s["\u0275\u0275text"](30,"voltar"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](31,"div",11),s["\u0275\u0275elementStart"](32,"button",12),s["\u0275\u0275listener"]("click",(function(){return t.salvar()})),s["\u0275\u0275text"](33,"Salvar"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](5),s["\u0275\u0275textInterpolate1"](" ",s["\u0275\u0275pipeBind1"](6,2,t.referencia)," "),s["\u0275\u0275advance"](17),s["\u0275\u0275property"]("ngIf",t.hidrometros))},directives:[l.q,l.s,l.p,h.o,l.r,l.n,h.n,l.I,m.a,r.b,r.q,r.t],pipes:[b.a,v.a,h.d],styles:[".nb-theme-default   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}.nb-theme-cosmic   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#fff}.nb-theme-corporate   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}"]}),e})(),x=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-hidrometro-deletar"]],decls:12,vars:0,consts:[["status","danger"],[1,"row"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","danger","type","button"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"nb-card",0),s["\u0275\u0275elementStart"](1,"nb-card-header"),s["\u0275\u0275text"](2," Hidr\xf4metro "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](3,"nb-card-body"),s["\u0275\u0275elementStart"](4,"nb-card-footer"),s["\u0275\u0275elementStart"](5,"div",1),s["\u0275\u0275elementStart"](6,"div",2),s["\u0275\u0275elementStart"](7,"button",3),s["\u0275\u0275text"](8,"voltar"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"div",4),s["\u0275\u0275elementStart"](10,"button",5),s["\u0275\u0275text"](11,"Deletar"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]())},directives:[l.q,l.s,l.p,l.r,l.n],encapsulation:2}),e})(),y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-hidrometro-editar"]],decls:16,vars:0,consts:[["novalidate","",1,"needs-validation"],["status","warning"],[1,"row"],[1,"col-md-3","col-12"],[1,"form-group"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic","type","reset"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","success","type","submit"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"form",0),s["\u0275\u0275elementStart"](1,"nb-card",1),s["\u0275\u0275elementStart"](2,"nb-card-header"),s["\u0275\u0275text"](3," Hidr\xf4metro "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"nb-card-body"),s["\u0275\u0275elementStart"](5,"div",2),s["\u0275\u0275elementStart"](6,"div",3),s["\u0275\u0275element"](7,"div",4),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"nb-card-footer"),s["\u0275\u0275elementStart"](9,"div",2),s["\u0275\u0275elementStart"](10,"div",5),s["\u0275\u0275elementStart"](11,"button",6),s["\u0275\u0275text"](12,"voltar"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](13,"div",7),s["\u0275\u0275elementStart"](14,"button",8),s["\u0275\u0275text"](15,"Salvar"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]())},directives:[r.B,r.r,r.s,l.q,l.s,l.p,l.r,l.n],encapsulation:2}),e})();var C=n("x2Ck"),I=n("8Va2");function M(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275elementStart"](1,"td",14),s["\u0275\u0275text"](2),s["\u0275\u0275pipe"](3,"matricula"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=s["\u0275\u0275nextContext"](2).$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275attribute"]("rowspan",e.hidrometroList.length),s["\u0275\u0275advance"](1),s["\u0275\u0275textInterpolate1"](" ",s["\u0275\u0275pipeBind1"](3,2,e)," ")}}function w(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275elementStart"](1,"td",14),s["\u0275\u0275text"](2),s["\u0275\u0275pipe"](3,"referenciaPipe"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"td",14),s["\u0275\u0275text"](5),s["\u0275\u0275pipe"](6,"number"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](7,"td",14),s["\u0275\u0275text"](8),s["\u0275\u0275pipe"](9,"currency"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"td",14),s["\u0275\u0275text"](11),s["\u0275\u0275pipe"](12,"number"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](13,"td",14),s["\u0275\u0275text"](14),s["\u0275\u0275pipe"](15,"number"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]().$implicit;s["\u0275\u0275advance"](2),s["\u0275\u0275textInterpolate1"](" ",s["\u0275\u0275pipeBind1"](3,5,e.referencia)," "),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"](" ",s["\u0275\u0275pipeBind1"](6,7,e.atual-e.anterior)," "),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"](" ",s["\u0275\u0275pipeBind3"](9,9,25e-5*(e.atual-e.anterior),"BRL","symbol")," "),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"](" ",s["\u0275\u0275pipeBind1"](12,13,e.anterior)," "),s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate1"](" ",s["\u0275\u0275pipeBind1"](15,15,e.atual)," ")}}function O(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tr"),s["\u0275\u0275template"](1,M,4,4,"ng-container",10),s["\u0275\u0275template"](2,w,16,17,"ng-container",10),s["\u0275\u0275elementEnd"]()),2&e){const e=t.index;s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",0===e),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",0!==e)}}function B(e,t){if(1&e&&(s["\u0275\u0275elementContainerStart"](0),s["\u0275\u0275template"](1,O,3,2,"tr",13),s["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",e.hidrometroList)}}function P(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"tbody"),s["\u0275\u0275template"](1,B,2,1,"ng-container",13),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",e.table.content)}}function R(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"tbody"),s["\u0275\u0275elementStart"](1,"tr"),s["\u0275\u0275elementStart"](2,"td",15),s["\u0275\u0275text"](3," Nenhum registro encontrado "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]())}function k(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"div",16),s["\u0275\u0275elementStart"](1,"div",17),s["\u0275\u0275elementStart"](2,"p",18),s["\u0275\u0275text"](3),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](3),s["\u0275\u0275textInterpolate4"](" Exibindo de ",e.table.pageable.pageNumber*e.table.pageable.pageSize+1," A ",e.table.pageable.pageNumber*e.table.pageable.pageSize+e.table.numberOfElements," de ",e.table.totalElements," registro em ",e.table.totalPages," paginas ")}}function j(e,t){if(1&e){const e=s["\u0275\u0275getCurrentView"]();s["\u0275\u0275elementStart"](0,"div",16),s["\u0275\u0275elementStart"](1,"div",19),s["\u0275\u0275elementStart"](2,"button",20),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().anterior()})),s["\u0275\u0275text"](3,"Anterior"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"div",21),s["\u0275\u0275elementStart"](5,"button",20),s["\u0275\u0275listener"]("click",(function(){return s["\u0275\u0275restoreView"](e),s["\u0275\u0275nextContext"]().avancar()})),s["\u0275\u0275text"](6,"Proxima"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()}if(2&e){const e=s["\u0275\u0275nextContext"]();s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("disabled",e.table.first),s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("disabled",e.table.last)}}let A=(()=>{class e extends C.ListarComponent{constructor(e,t,n){super(e,t,n),this.router=e,this.activeRouter=t,this.service=n}ngOnInit(){super.init()}getModulo(){return I.b.MATRICULA}selecionar(){this.router.navigate(["./selecionar"],{relativeTo:this.activeRouter.parent})}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](u.c),s["\u0275\u0275directiveInject"](u.a),s["\u0275\u0275directiveInject"](c.a))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-hidrometro-listar"]],features:[s["\u0275\u0275InheritDefinitionFeature"]],decls:46,vars:12,consts:[["status","info",3,"nbSpinner"],[1,"col-12","col-md-2","offset-md-10"],["placeholder","N\xfamero de registros",1,"float-right",3,"fullWidth","selected","selectedChange","ngModelChange"],[3,"value"],[1,"table","table-sm","table-striped"],["scope","col",1,"align-middle","font-weight-bold"],["scope","col","colspan","4"],["scope","col","colspan","2"],["nbButton","","outline","","fullWidth","","status","success",3,"click"],["icon","plus-outline"],[4,"ngIf"],["scope","col","colspan","6"],["class","row",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"align-middle"],["colspan","4",1,"align-middle"],[1,"row"],[1,"col-12","col-md-6"],[1,"text-secondary","align-middle"],[1,"col-md-3","col-6"],["nbButton","","outline","","fullWidth","","status","basic",3,"disabled","click"],[1,"offset-md-6","col-md-3","col-6"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"nb-card",0),s["\u0275\u0275elementStart"](1,"nb-card-header"),s["\u0275\u0275text"](2," Hidr\xf4metro "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"nb-card-body"),s["\u0275\u0275elementStart"](4,"div",1),s["\u0275\u0275elementStart"](5,"nb-select",2),s["\u0275\u0275listener"]("selectedChange",(function(e){return t.filtro.size=e}))("selectedChange",(function(e){return t.filtro.page=0,t.filtro.size=e,t.changeSize()}))("ngModelChange",(function(e){return t.filtro.page=0,t.filtro.size=e})),s["\u0275\u0275elementStart"](6,"nb-option",3),s["\u0275\u0275text"](7,"1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](8,"nb-option",3),s["\u0275\u0275text"](9,"3"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](10,"nb-option",3),s["\u0275\u0275text"](11,"5"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](12,"nb-option",3),s["\u0275\u0275text"](13,"10"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](14,"nb-option",3),s["\u0275\u0275text"](15,"25"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](16,"nb-card-body"),s["\u0275\u0275elementStart"](17,"table",4),s["\u0275\u0275elementStart"](18,"thead"),s["\u0275\u0275elementStart"](19,"tr"),s["\u0275\u0275elementStart"](20,"th",5),s["\u0275\u0275text"](21," Matr\xedcula: "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](22,"th",5),s["\u0275\u0275text"](23," Refer\xeancia: "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](24,"th",5),s["\u0275\u0275text"](25," Consumo: "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](26,"th",5),s["\u0275\u0275text"](27," Valor: "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](28,"th",5),s["\u0275\u0275text"](29," Atual: "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](30,"th",5),s["\u0275\u0275text"](31," Anterior: "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](32,"tr"),s["\u0275\u0275element"](33,"th",6),s["\u0275\u0275elementStart"](34,"th",7),s["\u0275\u0275elementStart"](35,"button",8),s["\u0275\u0275listener"]("click",(function(){return t.selecionar()})),s["\u0275\u0275element"](36,"nb-icon",9),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275template"](37,P,2,1,"tbody",10),s["\u0275\u0275template"](38,R,4,0,"tbody",10),s["\u0275\u0275elementStart"](39,"tfoot"),s["\u0275\u0275elementStart"](40,"tr"),s["\u0275\u0275element"](41,"th",11),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](42,"nb-card-footer"),s["\u0275\u0275template"](43,k,4,4,"div",12),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](44,"nb-card-footer"),s["\u0275\u0275template"](45,j,7,2,"div",12),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("nbSpinner",t.loading),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("fullWidth",!0)("selected",t.filtro.size),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("value",1),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("value",3),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("value",5),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("value",10),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("value",25),s["\u0275\u0275advance"](23),s["\u0275\u0275property"]("ngIf",t.table&&!(null!=t.table&&t.table.empty)),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngIf",null==t.table?null:t.table.empty),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("ngIf",t.table),s["\u0275\u0275advance"](2),s["\u0275\u0275property"]("ngIf",t.table))},directives:[l.q,l.ib,l.s,l.p,l.db,l.Y,l.n,l.F,h.o,l.r,h.n],pipes:[v.a,b.a,h.g,h.d],styles:[".nb-theme-default   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}.nb-theme-cosmic   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#fff}.nb-theme-corporate   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}"]}),e})();var L=n("FPPW");let W=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=s["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})();const _=[{path:"",component:p,children:[{path:"listar",component:A},{path:"adicionar",component:E},{path:"deletar",component:x},{path:"editar",component:y},{path:"selecionar",component:(()=>{class e{constructor(e,t,n){this.router=e,this.activeRouter=t,this.service=n,this.storage=sessionStorage,this.submited=!1}ngOnInit(){this.loadForm()}loadForm(){this.form=new r.h({referencia:new r.e(null,[r.z.required,r.z.minLength(6),r.z.maxLength(6),L.a.isReferencia()])})}OnSubmit(){this.submited=!0,this.form.invalid||(this.storage.setItem("[hidrometro][adicionar]",JSON.stringify(this.referencia.value)),this.router.navigate(["./adicionar"],{relativeTo:this.activeRouter.parent}))}getStatus(e){return this.submited?this.form.get(e).valid?"success":"danger":"basic"}get referencia(){return this.form.get("referencia")}}return e.\u0275fac=function(t){return new(t||e)(s["\u0275\u0275directiveInject"](u.c),s["\u0275\u0275directiveInject"](u.a),s["\u0275\u0275directiveInject"](W))},e.\u0275cmp=s["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-hidrometro-selecionar"]],decls:21,vars:4,consts:[[1,"needs-validation",3,"formGroup","ngSubmit"],["accent","success"],[1,"row"],[1,"col-md-3","col-12"],[1,"form-group"],[1,"label"],["nbInput","","fullWidth","","type","text","placeholder","Refer\xeancia",1,"form-control",3,"mask","formControl","status"],[1,"valid-feedback"],[1,"invalid-feedback"],[1,"col-md-3","offset-md-6","col-12"],["nbButton","","outline","","fullWidth","","status","success","type","submit"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"form",0),s["\u0275\u0275listener"]("ngSubmit",(function(){return t.OnSubmit()})),s["\u0275\u0275elementStart"](1,"nb-card",1),s["\u0275\u0275elementStart"](2,"nb-card-header"),s["\u0275\u0275text"](3," Hidrom\xeatros "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](4,"nb-card-body"),s["\u0275\u0275elementStart"](5,"div",2),s["\u0275\u0275elementStart"](6,"div",3),s["\u0275\u0275elementStart"](7,"div",4),s["\u0275\u0275elementStart"](8,"label",5),s["\u0275\u0275text"](9,"* Refer\xeancia:"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](10,"input",6),s["\u0275\u0275elementStart"](11,"div",7),s["\u0275\u0275text"](12," V\xe1lido "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](13,"div",8),s["\u0275\u0275text"](14," Inv\xe1lido "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"div",9),s["\u0275\u0275elementStart"](16,"div",4),s["\u0275\u0275elementStart"](17,"label",5),s["\u0275\u0275text"](18,"A\xe7\xf5es"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](19,"button",10),s["\u0275\u0275text"](20,"Pr\xe9-Visualizar"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275property"]("formGroup",t.form),s["\u0275\u0275advance"](10),s["\u0275\u0275property"]("mask","00/0000")("formControl",t.referencia)("status",t.getStatus("referencia")))},directives:[r.B,r.r,r.i,l.q,l.s,l.p,l.I,m.a,r.b,r.q,r.f,l.n],encapsulation:2}),e})()}]}];let z=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[u.g.forChild(_)],u.g]}),e})(),F=(()=>{class e{}return e.\u0275mod=s["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=s["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[c.a,W],imports:[[d.a,l.t,l.o,l.J,l.eb,o.a,l.H,r.k,r.w,l.J,z,l.A,a.a,i.a,l.sb,l.jb,m.c.forChild()]]}),e})()},"uG+8":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("fXoL");let a=(()=>{class e{transform(e,t){return e?e.letra?e.logradouro.tipoLogradouro.nome+" "+e.logradouro.nome+" "+e.numero+" "+e.letra:e.logradouro.tipoLogradouro.nome+" "+e.logradouro.nome+" "+e.numero:""}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=r["\u0275\u0275definePipe"]({name:"matricula",type:e,pure:!0}),e})()}}]);