(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{OsVf:function(t,o,e){"use strict";e.r(o),e.d(o,"MatriculaModule",(function(){return W}));var n=e("vKzg"),r=e("3Pt+"),b=e("tR1z"),a=e("aceb"),c=e("vTDv"),l=e("RS3s"),i=e("fXoL"),u=e("tyNb");let s=(()=>{class t{ngOnInit(){}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=i.Hb({type:t,selectors:[["ngx-matricula"]],decls:1,vars:0,template:function(t,o){1&t&&i.Ob(0,"router-outlet")},directives:[u.h],encapsulation:2}),t})();var d=e("cMTS"),m=e("8Va2"),f=e("j9oM"),g=e("gqN9"),S=e("ofXK"),p=e("tmjD");function h(t,o){if(1&t&&(i.Tb(0,"nb-option",17),i.Bc(1),i.Sb()),2&t){const t=o.$implicit;i.jc("value",t),i.Bb(1),i.Dc(" ",t.tipoLogradouro.nome+" "+t.nome," ")}}let T=(()=>{class t extends d.a{constructor(t,o,e,n,r){super(t,o,e,r),this.router=t,this.activeRouter=o,this.service=e,this.lograoduroService=n,this.toast=r,this.data={numero:"",logradouro:{nome:"",tipoLogradouro:{nome:""}}}}ngOnInit(){this.createForm(),this.loadLograoduro()}getModulo(){return m.b.MATRICULA}loadLograoduro(){this.lograoduroService.listarTodos().subscribe(t=>{this.logradouros=t})}createForm(){this.form=new r.g({logradouro:new r.d(null,[r.x.required]),numero:new r.d(null,[r.x.required,r.x.maxLength(5),r.x.min(1)]),letra:new r.d(null,[r.x.maxLength(5),r.x.min(1)]),hidrometro:new r.d(null,[])})}get logradouro(){return this.form.get("logradouro")}get numero(){return this.form.get("numero")}get letra(){return this.form.get("letra")}get hidrometro(){return this.form.get("hidrometro")}}return t.\u0275fac=function(o){return new(o||t)(i.Nb(u.c),i.Nb(u.a),i.Nb(f.a),i.Nb(g.a),i.Nb(a.Db))},t.\u0275cmp=i.Hb({type:t,selectors:[["ngx-matricula"]],features:[i.yb],decls:35,vars:12,consts:[["novalidate","",1,"needs-validation",3,"formGroup","ngSubmit"],["status","success"],[1,"row"],[1,"col-md-6","col-12"],[1,"form-group"],[1,"label"],["fullWidth","","placeholder","Selecionar",3,"status","formControl"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-3","col-6"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","N\xfamero",3,"mask","status","formControl"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","Letra",3,"mask","status","formControl"],[1,"offset-md-6","col-md-6","col-12"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","Hidrometro",3,"status","formControl"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic","type","reset",3,"click"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","success","type","submit"],[3,"value"]],template:function(t,o){1&t&&(i.Tb(0,"form",0),i.ac("ngSubmit",(function(){return o.onSubmit()})),i.Tb(1,"nb-card",1),i.Tb(2,"nb-card-header"),i.Bc(3," Matr\xedcula "),i.Sb(),i.Tb(4,"nb-card-body"),i.Tb(5,"div",2),i.Tb(6,"div",3),i.Tb(7,"div",4),i.Tb(8,"label",5),i.Bc(9,"* Logradouro"),i.Sb(),i.Tb(10,"nb-select",6),i.zc(11,h,2,2,"nb-option",7),i.Sb(),i.Sb(),i.Sb(),i.Tb(12,"div",8),i.Tb(13,"div",4),i.Tb(14,"label",5),i.Bc(15,"* N\xfamero"),i.Sb(),i.Ob(16,"input",9),i.Sb(),i.Sb(),i.Tb(17,"div",8),i.Tb(18,"div",4),i.Tb(19,"label",5),i.Bc(20,"Letra"),i.Sb(),i.Ob(21,"input",10),i.Sb(),i.Sb(),i.Tb(22,"div",11),i.Tb(23,"div",4),i.Tb(24,"label",5),i.Bc(25,"Hidr\xf4metro"),i.Sb(),i.Ob(26,"input",12),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(27,"nb-card-footer"),i.Tb(28,"div",2),i.Tb(29,"div",13),i.Tb(30,"button",14),i.ac("click",(function(){return o.voltar()})),i.Bc(31,"voltar"),i.Sb(),i.Sb(),i.Tb(32,"div",15),i.Tb(33,"button",16),i.Bc(34,"Salvar"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb()),2&t&&(i.jc("formGroup",o.form),i.Bb(10),i.jc("status",o.getStatus("logradouro"))("formControl",o.logradouro),i.Bb(1),i.jc("ngForOf",o.logradouros),i.Bb(5),i.jc("mask","0*")("status",o.getStatus("numero"))("formControl",o.numero),i.Bb(5),i.jc("mask","S*")("status",o.getStatus("letra"))("formControl",o.letra),i.Bb(5),i.jc("status",o.getStatus("hidrometro"))("formControl",o.hidrometro))},directives:[r.z,r.p,r.h,a.u,a.w,a.t,a.jb,r.o,r.e,S.m,a.O,p.a,r.b,a.v,a.r,a.db],encapsulation:2}),t})();var v=e("x2Ck");function B(t,o){if(1&t){const t=i.Ub();i.Tb(0,"div",2),i.Tb(1,"div",7),i.Tb(2,"div",8),i.Tb(3,"small",9),i.Bc(4,"* Tipo"),i.Sb(),i.Tb(5,"input",10),i.ac("ngModelChange",(function(o){return i.sc(t),i.cc().data.logradouro.tipoLogradouro.nome=o})),i.Sb(),i.Sb(),i.Sb(),i.Tb(6,"div",11),i.Tb(7,"div",8),i.Tb(8,"small",9),i.Bc(9,"* Logradouro"),i.Sb(),i.Tb(10,"input",10),i.ac("ngModelChange",(function(o){return i.sc(t),i.cc().data.logradouro.nome=o})),i.Sb(),i.Sb(),i.Sb(),i.Tb(11,"div",3),i.Tb(12,"div",8),i.Tb(13,"small",9),i.Bc(14,"* N\xfamero"),i.Sb(),i.Tb(15,"input",12),i.ac("ngModelChange",(function(o){return i.sc(t),i.cc().data.numero=o})),i.Sb(),i.Sb(),i.Sb(),i.Tb(16,"div",3),i.Tb(17,"div",8),i.Tb(18,"small",9),i.Bc(19,"* Letra"),i.Sb(),i.Tb(20,"input",10),i.ac("ngModelChange",(function(o){return i.sc(t),i.cc().data.letra=o})),i.Sb(),i.Sb(),i.Sb(),i.Sb()}if(2&t){const t=i.cc();i.Bb(5),i.jc("ngModel",t.data.logradouro.tipoLogradouro.nome),i.Bb(5),i.jc("ngModel",t.data.logradouro.nome),i.Bb(5),i.jc("ngModel",t.data.numero),i.Bb(5),i.jc("ngModel",t.data.letra)}}let C=(()=>{class t extends v.DeletarComponent{constructor(t,o,e,n){super(t,o,e,n),this.router=t,this.activeRouter=o,this.service=e,this.toast=n}ngOnInit(){}getModulo(){return m.b.MATRICULA}}return t.\u0275fac=function(o){return new(o||t)(i.Nb(u.c),i.Nb(u.a),i.Nb(f.a),i.Nb(a.Db))},t.\u0275cmp=i.Hb({type:t,selectors:[["ngx-matricula"]],features:[i.yb],decls:13,vars:1,consts:[["status","danger"],["class","row",4,"ngIf"],[1,"row"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic",3,"click"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","danger","type","button",3,"click"],[1,"col-md-2","col-12"],[1,"form-group"],[1,"form-text","text-muted"],["nbInput","","disabled","","fullWidth","","type","text","status","basic",3,"ngModel","ngModelChange"],[1,"col-md-6","col-12"],["nbInput","","fullWidth","","disabled","","type","text","status","basic",3,"ngModel","ngModelChange"]],template:function(t,o){1&t&&(i.Tb(0,"nb-card",0),i.Tb(1,"nb-card-header"),i.Bc(2," Matr\xedcula "),i.Sb(),i.Tb(3,"nb-card-body"),i.zc(4,B,21,4,"div",1),i.Sb(),i.Tb(5,"nb-card-footer"),i.Tb(6,"div",2),i.Tb(7,"div",3),i.Tb(8,"button",4),i.ac("click",(function(){return o.voltar()})),i.Bc(9,"voltar"),i.Sb(),i.Sb(),i.Tb(10,"div",5),i.Tb(11,"button",6),i.ac("click",(function(){return o.onSubmit()})),i.Bc(12,"Deletar"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb()),2&t&&(i.Bb(4),i.jc("ngIf",o.data))},directives:[a.u,a.w,a.t,S.n,a.v,a.r,a.O,r.b,r.o,r.r],encapsulation:2}),t})();function y(t,o){if(1&t&&(i.Tb(0,"nb-option",18),i.Bc(1),i.Sb()),2&t){const t=o.$implicit;i.jc("value",t.id),i.Bb(1),i.Dc(" ",t.tipoLogradouro.nome+" "+t.nome," ")}}function w(t,o){if(1&t){const t=i.Ub();i.Tb(0,"form",1),i.ac("ngSubmit",(function(){return i.sc(t),i.cc().onSubmit()})),i.Tb(1,"nb-card",2),i.Tb(2,"nb-card-header"),i.Bc(3," Matr\xedcula "),i.Sb(),i.Tb(4,"nb-card-body"),i.Tb(5,"div",3),i.Tb(6,"div",4),i.Tb(7,"div",5),i.Tb(8,"label",6),i.Bc(9,"* Logradouro"),i.Sb(),i.Tb(10,"nb-select",7),i.ac("selectedChange",(function(o){return i.sc(t),i.cc().logradouro.value.id=o})),i.zc(11,y,2,2,"nb-option",8),i.Sb(),i.Sb(),i.Sb(),i.Tb(12,"div",9),i.Tb(13,"div",5),i.Tb(14,"label",6),i.Bc(15,"* N\xfamero"),i.Sb(),i.Ob(16,"input",10),i.Sb(),i.Sb(),i.Tb(17,"div",9),i.Tb(18,"div",5),i.Tb(19,"label",6),i.Bc(20,"Letra"),i.Sb(),i.Ob(21,"input",11),i.Sb(),i.Sb(),i.Tb(22,"div",12),i.Tb(23,"div",5),i.Tb(24,"label",6),i.Bc(25,"Hidr\xf4metro"),i.Sb(),i.Ob(26,"input",13),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(27,"nb-card-footer"),i.Tb(28,"div",3),i.Tb(29,"div",14),i.Tb(30,"button",15),i.ac("click",(function(){return i.sc(t),i.cc().voltar()})),i.Bc(31,"voltar"),i.Sb(),i.Sb(),i.Tb(32,"div",16),i.Tb(33,"button",17),i.Bc(34,"Editar"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb()}if(2&t){const t=i.cc();i.jc("formGroup",t.form),i.Bb(10),i.jc("status",t.getStatus("logradouro"))("selected",t.logradouro.value.id),i.Bb(1),i.jc("ngForOf",t.logradouros),i.Bb(5),i.jc("status",t.getStatus("numero"))("formControl",t.numero),i.Bb(5),i.jc("status",t.getStatus("letra"))("formControl",t.letra),i.Bb(5),i.jc("status",t.getStatus("hidrometro"))("formControl",t.hidrometro)}}e("bs4A");let M=(()=>{class t extends v.EditarComponent{constructor(t,o,e,n,r){super(t,o,e,r),this.router=t,this.activeRouter=o,this.service=e,this.logradouroService=n,this.toast=r}onSubmit(){this.submited=!0,this.form.valid&&(this.getLogradourobyId(),this.service.editar(this.form.value).subscribe(()=>{this.router.navigate(["./listar"],{relativeTo:this.activeRouter.parent})},t=>{}))}getLogradourobyId(){const t=this.logradouro.value.id,o=this.logradouros.find(o=>o.id===t);this.logradouro.setValue(o)}ngOnInit(){this.loadLograoduro(),this.load(),this.createForm(),this.form.setValue(this.data)}getModulo(){return m.b.MATRICULA}loadLograoduro(){this.logradouroService.listarTodos().subscribe(t=>{this.logradouros=t,this.form.patchValue({logradouro:this.data.logradouro})})}createForm(){this.form=new r.g({id:new r.d(null),createdDate:new r.d(null),lastModifiedDate:new r.d(null),logradouro:new r.d({},[r.x.required]),numero:new r.d(null,[r.x.required,r.x.maxLength(5),r.x.min(1)]),letra:new r.d(null,[r.x.maxLength(5),r.x.min(1)]),hidrometro:new r.d(null,[])})}get logradouro(){return this.form.get("logradouro")}get numero(){return this.form.get("numero")}get letra(){return this.form.get("letra")}get hidrometro(){return this.form.get("hidrometro")}}return t.\u0275fac=function(o){return new(o||t)(i.Nb(u.c),i.Nb(u.a),i.Nb(f.a),i.Nb(g.a),i.Nb(a.Db))},t.\u0275cmp=i.Hb({type:t,selectors:[["ngx-matricula"]],features:[i.yb],decls:1,vars:1,consts:[["class","needs-validation","novalidate","",3,"formGroup","ngSubmit",4,"ngIf"],["novalidate","",1,"needs-validation",3,"formGroup","ngSubmit"],["status","warning"],[1,"row"],[1,"col-md-6","col-12"],[1,"form-group"],[1,"label"],["fullWidth","","placeholder","Selecionar",3,"status","selected","selectedChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col-md-3","col-6"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","N\xfamero",3,"status","formControl"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","Letra",3,"status","formControl"],[1,"offset-md-6","col-md-6","col-12"],["nbInput","","fullWidth","","type","text","status","basic","placeholder","Hidr\xf4metro",3,"status","formControl"],[1,"col-md-2","col-6"],["nbButton","","outline","","fullWidth","","status","basic","type","reset",3,"click"],[1,"col-md-2","offset-md-8","col-6"],["nbButton","","outline","","fullWidth","","status","warning","type","submit"],[3,"value"]],template:function(t,o){1&t&&i.zc(0,w,35,10,"form",0),2&t&&i.jc("ngIf",o.form)},directives:[S.n,r.z,r.p,r.h,a.u,a.w,a.t,a.jb,S.m,a.O,r.b,r.o,r.e,a.v,a.r,a.db],encapsulation:2}),t})();function j(t,o){if(1&t){const t=i.Ub();i.Tb(0,"tr"),i.Tb(1,"td",13),i.Bc(2),i.Sb(),i.Tb(3,"td",13),i.Bc(4),i.Sb(),i.Tb(5,"td",13),i.Bc(6),i.Sb(),i.Tb(7,"td",13),i.Tb(8,"button",14),i.ac("click",(function(){i.sc(t);const e=o.$implicit;return i.cc(2).editar(e)})),i.Ob(9,"nb-icon",15),i.Sb(),i.Sb(),i.Tb(10,"td",13),i.Tb(11,"button",16),i.ac("click",(function(){i.sc(t);const e=o.$implicit;return i.cc(2).deletar(e)})),i.Ob(12,"nb-icon",17),i.Sb(),i.Sb(),i.Sb()}if(2&t){const t=o.$implicit;i.Bb(2),i.Cc((null==t||null==t.logradouro||null==t.logradouro.tipoLogradouro?null:t.logradouro.tipoLogradouro.nome)+" "+(null==t||null==t.logradouro?null:t.logradouro.nome)),i.Bb(2),i.Cc(null==t?null:t.numero),i.Bb(2),i.Cc(null==t?null:t.letra)}}function x(t,o){if(1&t&&(i.Tb(0,"tbody"),i.zc(1,j,13,3,"tr",12),i.Sb()),2&t){const t=i.cc();i.Bb(1),i.jc("ngForOf",t.table.content)}}function O(t,o){1&t&&(i.Tb(0,"tbody"),i.Tb(1,"tr"),i.Tb(2,"td",18),i.Bc(3," Nenhum registro encontrado "),i.Sb(),i.Sb(),i.Sb())}function L(t,o){if(1&t&&(i.Tb(0,"div",19),i.Tb(1,"div",20),i.Tb(2,"p",21),i.Bc(3),i.Sb(),i.Sb(),i.Sb()),2&t){const t=i.cc();i.Bb(3),i.Fc(" Exibindo de ",t.table.pageable.pageNumber*t.table.pageable.pageSize+1," A ",t.table.pageable.pageNumber*t.table.pageable.pageSize+t.table.numberOfElements," de ",t.table.totalElements," registro em ",t.table.totalPages," paginas ")}}function N(t,o){if(1&t){const t=i.Ub();i.Tb(0,"div",19),i.Tb(1,"div",22),i.Tb(2,"button",23),i.ac("click",(function(){return i.sc(t),i.cc().anterior()})),i.Bc(3,"Anterior"),i.Sb(),i.Sb(),i.Tb(4,"div",24),i.Tb(5,"button",23),i.ac("click",(function(){return i.sc(t),i.cc().avancar()})),i.Bc(6,"Proxima"),i.Sb(),i.Sb(),i.Sb()}if(2&t){const t=i.cc();i.Bb(2),i.jc("disabled",t.table.first),i.Bb(3),i.jc("disabled",t.table.last)}}const I=[{path:"",component:s,children:[{path:"listar",component:(()=>{class t extends v.ListarComponent{constructor(t,o,e){super(t,o,e),this.router=t,this.activeRouter=o,this.service=e}ngOnInit(){super.init()}getModulo(){return m.b.MATRICULA}}return t.\u0275fac=function(o){return new(o||t)(i.Nb(u.c),i.Nb(u.a),i.Nb(f.a))},t.\u0275cmp=i.Hb({type:t,selectors:[["ngx-matricula"]],features:[i.yb],decls:38,vars:11,consts:[["status","info"],[1,"col-12","col-md-2","offset-md-10"],["placeholder","N\xfamero de registros",1,"float-right",3,"fullWidth","selected","selectedChange","ngModelChange"],[3,"value"],[1,"table","table-sm","table-striped"],["scope","col",1,"align-middle","font-weight-bold"],["scope","col","colspan","2",2,"width","8%"],["nbButton","","outline","","fullWidth","","status","success",3,"click"],["icon","plus-outline"],[4,"ngIf"],["scope","col","colspan","4"],["class","row",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"align-middle"],["nbButton","","outline","","fullWidth","","status","warning",3,"click"],["icon","edit-outline"],["nbButton","","outline","","fullWidth","","status","danger",3,"click"],["icon","trash-2-outline"],["colspan","4",1,"align-middle"],[1,"row"],[1,"col-12","col-md-6"],[1,"text-secondary","align-middle"],[1,"col-md-3","col-6"],["nbButton","","outline","","fullWidth","","status","basic",3,"disabled","click"],[1,"offset-md-6","col-md-3","col-6"]],template:function(t,o){1&t&&(i.Tb(0,"nb-card",0),i.Tb(1,"nb-card-header"),i.Bc(2," Matr\xedcula "),i.Sb(),i.Tb(3,"nb-card-body"),i.Tb(4,"div",1),i.Tb(5,"nb-select",2),i.ac("selectedChange",(function(t){return o.filtro.size=t}))("selectedChange",(function(t){return o.filtro.page=0,o.filtro.size=t,o.changeSize()}))("ngModelChange",(function(t){return o.filtro.page=0,o.filtro.size=t})),i.Tb(6,"nb-option",3),i.Bc(7,"1"),i.Sb(),i.Tb(8,"nb-option",3),i.Bc(9,"3"),i.Sb(),i.Tb(10,"nb-option",3),i.Bc(11,"5"),i.Sb(),i.Tb(12,"nb-option",3),i.Bc(13,"10"),i.Sb(),i.Tb(14,"nb-option",3),i.Bc(15,"25"),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(16,"nb-card-body"),i.Tb(17,"table",4),i.Tb(18,"thead"),i.Tb(19,"tr"),i.Tb(20,"th",5),i.Bc(21," Nome: "),i.Sb(),i.Tb(22,"th",5),i.Bc(23," N\xfamero: "),i.Sb(),i.Tb(24,"th",5),i.Bc(25," Letra: "),i.Sb(),i.Tb(26,"th",6),i.Tb(27,"button",7),i.ac("click",(function(){return o.adicionar()})),i.Ob(28,"nb-icon",8),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.zc(29,x,2,1,"tbody",9),i.zc(30,O,4,0,"tbody",9),i.Tb(31,"tfoot"),i.Tb(32,"tr"),i.Ob(33,"th",10),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Tb(34,"nb-card-footer"),i.zc(35,L,4,4,"div",11),i.Sb(),i.Tb(36,"nb-card-footer"),i.zc(37,N,7,2,"div",11),i.Sb(),i.Sb()),2&t&&(i.Bb(5),i.jc("fullWidth",!0)("selected",o.filtro.size),i.Bb(1),i.jc("value",1),i.Bb(2),i.jc("value",3),i.Bb(2),i.jc("value",5),i.Bb(2),i.jc("value",10),i.Bb(2),i.jc("value",25),i.Bb(15),i.jc("ngIf",o.table&&!(null!=o.table&&o.table.empty)),i.Bb(1),i.jc("ngIf",null==o.table?null:o.table.empty),i.Bb(5),i.jc("ngIf",o.table),i.Bb(2),i.jc("ngIf",o.table))},directives:[a.u,a.w,a.t,a.jb,a.db,a.r,a.K,S.n,a.v,S.m],styles:[".nb-theme-default   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}.nb-theme-cosmic   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%], .nb-theme-dark   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#fff}.nb-theme-corporate   [_nghost-%COMP%]   table.table[_ngcontent-%COMP%]{font-family:Open Sans,sans-serif;color:#222b45}"]}),t})()},{path:"adicionar",component:T},{path:"deletar",component:C},{path:"editar",component:M}]}];let k=(()=>{class t{}return t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({factory:function(o){return new(o||t)},imports:[[u.g.forChild(I)],u.g]}),t})(),W=(()=>{class t{}return t.\u0275mod=i.Lb({type:t}),t.\u0275inj=i.Kb({factory:function(o){return new(o||t)},providers:[f.a],imports:[[c.a,a.x,k,l.a,a.s,a.P,a.kb,b.a,a.M,r.i,r.u,a.P,n.LogradouroModule,p.c.forChild()]]}),t})()},bs4A:function(t,o){}}]);