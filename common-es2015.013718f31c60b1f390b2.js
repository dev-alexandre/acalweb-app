(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"8Va2":function(t,r,e){"use strict";e.d(r,"a",(function(){return i})),e.d(r,"b",(function(){return a}));var i=function(t){return t.ADICIONAR="adicionar",t.ATUALIZAR="atualizar",t.EDITAR="editar",t.BUSCAR="buscar",t.DELETAR="deletar",t.VISUALIZAR="visualizar",t.SALVAR="salvar",t.SALVAR_TODOS="salvar-todos",t.PAGINAR="paginar",t.LISTAR="listar",t}({}),a=function(t){return t.LOGRADOURO="logradouro",t.MATRICULA="matricula",t.GRUPO="grupo",t.CLIENTE="cliente",t.CONTRATO="contrato",t.USUARIO="usuario",t.BOLETO="boleto",t}({})},"99tV":function(t,r,e){"use strict";e.d(r,"a",(function(){return i}));var i=function(t){return t.ADICIONAR="Registro adicionado",t.EDITAR="Registro editar",t.DELETAR="Registro deletar",t}({})},B7o2:function(t,r,e){"use strict";e.d(r,"a",(function(){return u}));var i=e("x2Ck"),a=e("8Va2"),s=e("AytR"),o=e("fXoL"),n=e("tk/3");let u=(()=>{class t extends i.Service{constructor(t){super(t),this.http=t}getModulo(){return a.b.CLIENTE}listarPorNome(t){return this.http.get(s.a.apiUrl+"/cliente/listar/"+t)}}return t.\u0275fac=function(r){return new(r||t)(o.Xb(n.b))},t.\u0275prov=o.Jb({token:t,factory:t.\u0275fac}),t})()},GSxi:function(t,r,e){"use strict";e.d(r,"a",(function(){return s}));var i=e("8Va2"),a=e("n3A4");class s extends a.a{constructor(t,r,e,i){super(t,r),this.router=t,this.activeRouter=r,this.service=e,this.toast=i}getAcao(){return i.a.EDITAR}onSubmit(){this.submited=!0,this.form.valid&&this.service.editar(this.form.value).subscribe(()=>{this.router.navigate(["./listar"],{relativeTo:this.activeRouter.parent})},t=>{})}}},IuZR:function(t,r,e){"use strict";e.d(r,"a",(function(){return n}));var i=e("x2Ck"),a=e("8Va2"),s=e("fXoL"),o=e("tk/3");let n=(()=>{class t extends i.Service{constructor(t){super(t),this.http=t}getModulo(){return a.b.BOLETO}}return t.\u0275fac=function(r){return new(r||t)(s.Xb(o.b))},t.\u0275prov=s.Jb({token:t,factory:t.\u0275fac}),t})()},NdjQ:function(t,r,e){"use strict";e.d(r,"a",(function(){return u}));var i=e("x2Ck"),a=e("8Va2"),s=e("AytR"),o=e("fXoL"),n=e("tk/3");let u=(()=>{class t extends i.Service{constructor(t){super(t),this.http=t}getModulo(){return a.b.CONTRATO}listarPorReferencia(t,r){return this.http.get(s.a.apiUrl+"/contrato/listar/"+t+"/"+r)}}return t.\u0275fac=function(r){return new(r||t)(o.Xb(n.b))},t.\u0275prov=o.Jb({token:t,factory:t.\u0275fac}),t})()},cMTS:function(t,r,e){"use strict";e.d(r,"a",(function(){return o}));var i=e("8Va2"),a=e("99tV"),s=e("n3A4");class o extends s.a{constructor(t,r,e,i){super(t,r),this.router=t,this.activeRouter=r,this.service=e,this.toast=i}load(){this.createForm()}getAcao(){return i.a.SALVAR}onSubmit(){this.submited=!0,this.form.valid&&this.service.salvar(this.form.value).subscribe(()=>{this.toast.success(a.a.ADICIONAR,this.getModulo()),this.router.navigate(["./listar"],{relativeTo:this.activeRouter.parent})},t=>{})}}},j9oM:function(t,r,e){"use strict";e.d(r,"a",(function(){return u}));var i=e("x2Ck"),a=e("8Va2"),s=e("AytR"),o=e("fXoL"),n=e("tk/3");let u=(()=>{class t extends i.Service{constructor(t){super(t),this.http=t}getModulo(){return a.b.MATRICULA}selecionar(t){return this.http.get(s.a.apiUrl+"/matricula/selecionar/"+t)}}return t.\u0275fac=function(r){return new(r||t)(o.Xb(n.b))},t.\u0275prov=o.Jb({token:t,factory:t.\u0275fac}),t})()},jBlX:function(t,r,e){"use strict";e.d(r,"a",(function(){return o}));var i=e("8Va2"),a=e("99tV"),s=e("n3A4");class o extends s.a{constructor(t,r,e,i){super(t,r),this.router=t,this.activeRouter=r,this.service=e,this.toast=i,this.load()}createForm(){}getAcao(){return i.a.DELETAR}onSubmit(){this.service.deletar(this.data).subscribe(()=>{this.toast.success(a.a.DELETAR,this.getModulo()),this.router.navigate(["./listar"],{relativeTo:this.activeRouter.parent})},t=>{})}}},lEbx:function(t,r,e){"use strict";e.d(r,"a",(function(){return a}));var i=e("8Va2");class a{constructor(t,r,e){this.router=t,this.activeRouter=r,this.service=e,this.storage=sessionStorage,this.init()}init(){this.filtro={page:0,size:5},this.load()}load(){this.service.paginar(this.filtro).subscribe(t=>{this.table=t})}adicionar(){this.router.navigate(["./adicionar"],{relativeTo:this.activeRouter.parent})}editar(t){this.storage.setItem(this.getModulo()+i.a.EDITAR,JSON.stringify(t)),this.router.navigate(["./editar"],{relativeTo:this.activeRouter.parent})}deletar(t){this.storage.setItem(this.getModulo()+i.a.DELETAR,JSON.stringify(t)),this.router.navigate(["./deletar"],{relativeTo:this.activeRouter.parent})}visualizar(t){this.storage.setItem(this.getModulo()+i.a.VISUALIZAR,JSON.stringify(t)),this.router.navigate(["./visualizar"],{relativeTo:this.activeRouter.parent})}changeSize(){this.load()}anterior(){this.filtro.page--,this.load()}avancar(){this.filtro.page++,this.load()}}},n3A4:function(t,r,e){"use strict";e.d(r,"a",(function(){return i}));class i{constructor(t,r){this.router=t,this.activeRouter=r,this.storage=sessionStorage}load(){this.data=JSON.parse(this.storage.getItem(this.getModulo()+this.getAcao())),this.storage.removeItem(this.getModulo()+this.getAcao()),this.data||this.voltar()}getStatus(t){return this.submited?this.form.get(t).valid?"success":"danger":"basic"}voltar(){this.router.navigate(["./listar"],{relativeTo:this.activeRouter.parent})}limpar(){this.storage.removeItem(this.storage.getItem(this.getModulo()+this.getAcao()))}}},sIef:function(t,r,e){"use strict";e.d(r,"a",(function(){return u}));var i=e("x2Ck"),a=e("8Va2"),s=e("AytR"),o=e("fXoL"),n=e("tk/3");let u=(()=>{class t extends i.Service{constructor(t){super(t),this.http=t}getModulo(){return a.b.GRUPO}selecionar(){return this.http.get(s.a.apiUrl+"/grupo/selecionar")}}return t.\u0275fac=function(r){return new(r||t)(o.Xb(n.b))},t.\u0275prov=o.Jb({token:t,factory:t.\u0275fac}),t})()},w3iE:function(t,r,e){"use strict";e.d(r,"a",(function(){return n}));var i=e("AytR"),a=e("8Va2"),s=e("fXoL"),o=e("tk/3");let n=(()=>{class t{constructor(t){this.http=t,this.rota=i.a.apiUrl+"/"+this.getModulo()+"/"}paginar(t){return this.http.post(this.rota+a.a.PAGINAR,t)}listarTodos(){return this.http.get(this.rota+a.a.LISTAR)}deletar(t){return this.http.delete(this.rota+a.a.DELETAR+"/"+t.id)}salvar(t){return this.http.post(this.rota+a.a.SALVAR,t)}salvarTodos(t){return this.http.post(this.rota+a.a.SALVAR_TODOS,t)}editar(t){return this.http.put(this.rota+a.a.EDITAR,t)}buscar(t){return this.http.get(this.rota+a.a.BUSCAR+"/"+t)}}return t.\u0275fac=function(r){return new(r||t)(s.Xb(o.b))},t.\u0275prov=s.Jb({token:t,factory:t.\u0275fac}),t})()},x2Ck:function(t,r,e){"use strict";var i=e("w3iE");e.d(r,"Service",(function(){return i.a}));var a=e("zAhe");e.o(a,"DeletarComponent")&&e.d(r,"DeletarComponent",(function(){return a.DeletarComponent})),e.o(a,"EditarComponent")&&e.d(r,"EditarComponent",(function(){return a.EditarComponent})),e.o(a,"ListarComponent")&&e.d(r,"ListarComponent",(function(){return a.ListarComponent})),e("cMTS");var s=e("lEbx");e.d(r,"ListarComponent",(function(){return s.a}));var o=e("GSxi");e.d(r,"EditarComponent",(function(){return o.a}));var n=e("jBlX");e.d(r,"DeletarComponent",(function(){return n.a}))},zAhe:function(t,r){}}]);