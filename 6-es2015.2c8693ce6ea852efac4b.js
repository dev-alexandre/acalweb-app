(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"8VcE":function(e,t,n){"use strict";n.r(t),n.d(t,"CadastroModule",(function(){return p}));var o=n("3Pt+"),r=n("tR1z"),a=n("aceb"),l=n("vTDv"),i=n("tyNb"),d=n("OTVi"),u=n("fXoL");const c=[{path:"logradouro",canActivate:[d.a],loadChildren:()=>n.e(5).then(n.bind(null,"vKzg")).then(e=>e.LogradouroModule)},{path:"matricula",loadChildren:()=>Promise.all([n.e(5),n.e(0),n.e(14)]).then(n.bind(null,"OsVf")).then(e=>e.MatriculaModule)},{path:"grupo",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(19)]).then(n.bind(null,"5fGG")).then(e=>e.GrupoModule)},{path:"contrato",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(12)]).then(n.bind(null,"75hW")).then(e=>e.ContratoModule)},{path:"cliente",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(15)]).then(n.bind(null,"Gs1x")).then(e=>e.ClienteModule)}];let s=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[i.g.forChild(c)],i.g]}),e})();var h=n("gqN9");let p=(()=>{class e{}return e.\u0275mod=u["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=u["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},providers:[h.a],imports:[[l.a,a.y,s,a.t,a.P,a.mb,r.a,a.M,o.k,o.w]]}),e})()},gqN9:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var o=n("x2Ck"),r=n("8Va2"),a=n("fXoL"),l=n("tk/3");let i=(()=>{class e extends o.Service{constructor(e){super(e),this.http=e}getModulo(){return r.b.LOGRADOURO}listarTipoLogradouro(){return this.http.get("assets/data/tipo-logradouro.json")}}return e.\u0275fac=function(t){return new(t||e)(a["\u0275\u0275inject"](l.b))},e.\u0275prov=a["\u0275\u0275defineInjectable"]({token:e,factory:e.\u0275fac}),e})()}}]);