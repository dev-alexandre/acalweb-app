(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{dgmN:function(e,t,n){"use strict";n.r(t),n.d(t,"PagesModule",(function(){return C}));var o=n("aceb"),a=n("vTDv"),l=n("3Pt+"),i=n("fXoL");let r=(()=>{class e{}return e.\u0275mod=i.Lb({type:e}),e.\u0275inj=i.Kb({factory:function(t){return new(t||e)},imports:[[l.i,a.a,o.x,o.s]]}),e})(),c=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Hb({type:e,selectors:[["ngx-dashboard"]],decls:3,vars:0,consts:[[1,"row"],[1,"col-xxxl-3","col-md-6"]],template:function(e,t){1&e&&(i.Tb(0,"div",0),i.Tb(1,"div",1),i.Bc(2," meu dashboard "),i.Sb(),i.Sb())},encapsulation:2}),e})();var s=n("tyNb"),u=n("OTVi");let d=(()=>{class e{constructor(e){this.menuService=e}goToHome(){this.menuService.navigateHome()}}return e.\u0275fac=function(t){return new(t||e)(i.Nb(o.cb))},e.\u0275cmp=i.Hb({type:e,selectors:[["ngx-not-found"]],decls:11,vars:0,consts:[[1,"row"],[1,"col-md-12"],[1,"flex-centered","col-xl-4","col-lg-6","col-md-8","col-sm-12"],[1,"title"],[1,"sub-title"],["nbButton","","fullWidth","","type","button",1,"home-button",3,"click"]],template:function(e,t){1&e&&(i.Tb(0,"div",0),i.Tb(1,"div",1),i.Tb(2,"nb-card"),i.Tb(3,"nb-card-body"),i.Tb(4,"div",2),i.Tb(5,"h2",3),i.Bc(6,"404 Page Not Found"),i.Sb(),i.Tb(7,"small",4),i.Bc(8,"The page you were looking for doesn't exist"),i.Sb(),i.Tb(9,"button",5),i.ac("click",(function(){return t.goToHome()})),i.Bc(10," Take me home "),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb(),i.Sb())},directives:[o.u,o.t,o.r],styles:[".flex-centered[_ngcontent-%COMP%]{margin:auto}nb-card-body[_ngcontent-%COMP%]{display:flex}.sub-title[_ngcontent-%COMP%], .title[_ngcontent-%COMP%]{text-align:center}.sub-title[_ngcontent-%COMP%]{display:block;margin-bottom:3rem}.home-button[_ngcontent-%COMP%]{margin-bottom:2rem}"]}),e})();const b=[{title:"CADASTROS",icon:"archive-outline",children:[{title:"Logradouro",link:"/pages/cadastro/logradouro/listar"},{title:"Matr\xedcula",link:"/pages/cadastro/matricula/listar"},{title:"Grupo",link:"/pages/cadastro/grupo/listar"},{title:"Cliente",link:"/pages/cadastro/cliente/listar"},{title:"Contrato",link:"/pages/cadastro/contrato/listar"}]},{title:"FINANCEIRO",icon:"layout-outline",children:[{title:"Gerar Boleto",link:"/pages/financeiro/gerar-boleto/adicionar"},{title:"Receber Conta",link:"/pages/financeiro/gerar-boleto/adicionar"},{title:"Boleto",link:"/pages/financeiro/boleto"}]},{title:"CAIXA",icon:"book-outline",children:[{title:"Fluxo",link:"/pages/caixa/fluxo"},{title:"Receber",link:"/pages/caixa/receber"}]},{title:"Coleta",icon:"book-outline",children:[{title:"Qualidade",link:"/pages/coleta"}]}];var p=n("mgFL");const m=[{path:"",component:(()=>{class e{constructor(){this.menu=b}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Hb({type:e,selectors:[["ngx-pages"]],decls:3,vars:1,consts:[[3,"items"]],template:function(e,t){1&e&&(i.Tb(0,"ngx-one-column-layout"),i.Ob(1,"nb-menu",0),i.Ob(2,"router-outlet"),i.Sb()),2&e&&(i.Bb(1),i.jc("items",t.menu))},directives:[p.a,o.ab,s.h],styles:[".nb-theme-default   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@-webkit-keyframes fade{0%{opacity:0}to{opacity:1}}.nb-theme-corporate   [_nghost-%COMP%]     router-outlet+*, .nb-theme-cosmic   [_nghost-%COMP%]     router-outlet+*, .nb-theme-dark   [_nghost-%COMP%]     router-outlet+*{display:block;-webkit-animation:fade 1s;animation:fade 1s}@keyframes fade{0%{opacity:0}to{opacity:1}}"]}),e})(),canActivate:[u.a],children:[{path:"dashboard",component:c},{path:"perfil",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(22)]).then(n.bind(null,"wWZX")).then(e=>e.PerfilModule)},{path:"cadastro",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(4)]).then(n.bind(null,"8VcE")).then(e=>e.CadastroModule)},{path:"perfil",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(4)]).then(n.bind(null,"8VcE")).then(e=>e.CadastroModule)},{path:"caixa",loadChildren:()=>Promise.all([n.e(1),n.e(0),n.e(16)]).then(n.bind(null,"Qq8K")).then(e=>e.CaixaModule)},{path:"financeiro",loadChildren:()=>n.e(19).then(n.bind(null,"hwQp")).then(e=>e.FinanceiroModule)},{path:"layout",loadChildren:()=>n.e(20).then(n.bind(null,"2eXD")).then(e=>e.LayoutModule)},{path:"coleta",loadChildren:()=>Promise.all([n.e(1),n.e(17)]).then(n.bind(null,"bbVr")).then(e=>e.ColetaModule)},{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"**",component:d}]}];let h=(()=>{class e{}return e.\u0275mod=i.Lb({type:e}),e.\u0275inj=i.Kb({factory:function(t){return new(t||e)},imports:[[s.g.forChild(m)],s.g]}),e})();const f=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Hb({type:e,selectors:[["ngx-miscellaneous"]],decls:1,vars:0,template:function(e,t){1&e&&i.Ob(0,"router-outlet")},directives:[s.h],encapsulation:2}),e})(),children:[{path:"404",component:d}]}];let g=(()=>{class e{}return e.\u0275mod=i.Lb({type:e}),e.\u0275inj=i.Kb({factory:function(t){return new(t||e)},imports:[[s.g.forChild(f)],s.g]}),e})(),y=(()=>{class e{}return e.\u0275mod=i.Lb({type:e}),e.\u0275inj=i.Kb({factory:function(t){return new(t||e)},imports:[[a.a,o.x,o.s,g]]}),e})(),C=(()=>{class e{}return e.\u0275mod=i.Lb({type:e}),e.\u0275inj=i.Kb({factory:function(t){return new(t||e)},imports:[[h,a.a,o.bb,r,y]]}),e})()}}]);