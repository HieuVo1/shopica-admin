(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{OedY:function(e,n,t){"use strict";t.r(n),t.d(n,"ComplainModule",function(){return V});var a=t("ofXK"),i=t("q5vz"),o=t("fXoL"),c=t("IheW"),r=t("JIr8"),l=t("AytR"),s=t("2Vo4"),b=t("LRne");let p=(()=>{class e{constructor(e){this.httpClient=e,this.id=new s.a(null)}changeSource(e){this.id.next(e)}getAll(e){let n=(new c.g).append("page",""+(e.pageIndex-1)).append("pageSize",""+e.pageSize);return null!=e.sortField&&(n=n.append("sortField",""+e.sortField).append("sortOrder",""+e.sortOrder)),e.filters.length>0&&e.filters.forEach(e=>{n=n.append(e.key,e.value)}),this.httpClient.get(l.a.productServiceUrl+"/api/complain",{params:n}).pipe(Object(r.a)(e=>Object(b.a)(e.error)))}getComplainById(e){return this.httpClient.get(`${l.a.productServiceUrl}/api/complain/${e}`).pipe(Object(r.a)(e=>Object(b.a)(e.error)))}replyComplain(e,n){return this.httpClient.post(`${l.a.productServiceUrl}/api/complain/reply/${e}`,n).pipe(Object(r.a)(e=>Object(b.a)(e.error)))}create(){return null}delete(){return null}}return e.\u0275fac=function(n){return new(n||e)(o.Yb(c.c))},e.\u0275prov=o.Kb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function u(e,n){if(1&e){const e=o.Vb();o.Ub(0,"i",11),o.bc("click",function(){return o.wc(e),o.fc().search()}),o.Tb()}}const d=function(e,n){return{odd:e,even:n}};function m(e,n){if(1&e){const e=o.Vb();o.Ub(0,"tr",12),o.Ub(1,"td",6),o.Jc(2),o.Tb(),o.Ub(3,"td",6),o.Jc(4),o.Tb(),o.Ub(5,"td",6),o.Jc(6),o.Tb(),o.Ub(7,"td",6),o.Jc(8),o.Tb(),o.Ub(9,"td",6),o.Jc(10),o.Tb(),o.Ub(11,"td",6),o.Jc(12),o.Tb(),o.Ub(13,"td",13),o.Ub(14,"button",14),o.bc("click",function(){o.wc(e);const t=n.$implicit;return o.fc().replyComplain(t.id)}),o.Jc(15," Response"),o.Pb(16,"i",15),o.Tb(),o.Tb(),o.Tb()}if(2&e){const e=n.$implicit,t=n.odd,a=n.even,i=n.index,c=o.fc();o.mc("ngClass",o.qc(7,d,t,a)),o.Ab(2),o.Lc(" ",i+1+(c.baseParams.pageIndex-1)*c.baseParams.pageSize," "),o.Ab(2),o.Kc(e.content),o.Ab(2),o.Kc(e.name),o.Ab(2),o.Kc(e.email),o.Ab(2),o.Kc(e.phone),o.Ab(2),o.Kc(e.state)}}let h=(()=>{class e extends i.a{constructor(e){super(e),this.complainService=e,this.onQueryParamsChange=e=>{super.onQueryParamsChangeFromParent(e)}}ngOnInit(){}replyComplain(e){this.complainService.changeSource(e),super.showModal()}search(){this.baseParams.filters=[{key:"keyword",value:this.searchValue}],super.search()}}return e.\u0275fac=function(n){return new(n||e)(o.Ob(p))},e.\u0275cmp=o.Ib({type:e,selectors:[["app-complain-list"]],features:[o.xb],decls:28,vars:12,consts:[[3,"nzSuffix"],["type","text","nz-input","","placeholder","Search",3,"ngModel","keyup.enter","ngModelChange"],["suffixIconSearch",""],["nzBordered","","nzTableLayout","fixed",3,"nzFrontPagination","nzTotal","nzPageSize","nzPageIndex","nzLoading","nzData","nzQueryParams"],["sortTable",""],["nzAlign","center","nzWidth","10%","nzColumnKey","id",3,"nzSortFn"],["nzAlign","center"],["nzAlign","center","nzWidth","20%"],[3,"ngClass",4,"ngFor","ngForOf"],[1,"table-operations"],[3,"complain","isVisible","cancelModalEvent","okModalEvent"],["nz-icon","","nzType","search",3,"click"],[3,"ngClass"],["nzAlign","center",1,"btn-action"],["nz-button","","nzType","primary","nzPrimary","",3,"click"],["nzType","edit","nzTheme","outline","nz-icon",""]],template:function(e,n){if(1&e&&(o.Ub(0,"div"),o.Ub(1,"nz-input-group",0),o.Ub(2,"input",1),o.bc("keyup.enter",function(){return n.search()})("ngModelChange",function(e){return n.searchValue=e}),o.Tb(),o.Tb(),o.Hc(3,u,1,0,"ng-template",null,2,o.Ic),o.Tb(),o.Pb(5,"br"),o.Ub(6,"nz-table",3,4),o.bc("nzQueryParams",function(e){return n.onQueryParamsChange(e)}),o.Ub(8,"thead"),o.Ub(9,"tr"),o.Ub(10,"th",5),o.Jc(11," Id "),o.Tb(),o.Ub(12,"th",6),o.Jc(13,"Content"),o.Tb(),o.Ub(14,"th",6),o.Jc(15,"Customer"),o.Tb(),o.Ub(16,"th",6),o.Jc(17,"Email"),o.Tb(),o.Ub(18,"th",6),o.Jc(19,"Phone"),o.Tb(),o.Ub(20,"th",6),o.Jc(21,"State"),o.Tb(),o.Ub(22,"th",7),o.Jc(23,"Action"),o.Tb(),o.Tb(),o.Tb(),o.Ub(24,"tbody"),o.Hc(25,m,17,10,"tr",8),o.Tb(),o.Tb(),o.Ub(26,"div",9),o.Ub(27,"app-complain-modal",10),o.bc("cancelModalEvent",function(e){return n.closeModal(e)})("okModalEvent",function(e){return n.closeModal(e)}),o.Tb(),o.Tb()),2&e){const e=o.uc(4),t=o.uc(7);o.Ab(1),o.mc("nzSuffix",e),o.Ab(1),o.mc("ngModel",n.searchValue),o.Ab(4),o.mc("nzFrontPagination",!1)("nzTotal",n.total)("nzPageSize",n.baseParams.pageSize)("nzPageIndex",n.baseParams.pageIndex)("nzLoading",n.isLoading)("nzData",n.listData),o.Ab(4),o.mc("nzSortFn",!0),o.Ab(15),o.mc("ngForOf",t.data),o.Ab(2),o.mc("complain",n.selectedData)("isVisible",n.isShowModal)}},styles:[""]}),e})();const z=[{path:"",component:h}];var f=t("nYR2"),g=t("+CSB"),T=t("s7LF"),y=t("JXeA"),v=t("NFMk"),U=t("wf2+"),C=t("tYkK"),S=t("px0D");function O(e,n){if(1&e&&(o.Sb(0),o.Ub(1,"form",2),o.Ub(2,"nz-form-item"),o.Ub(3,"nz-form-label",3),o.Jc(4,"Reply"),o.Tb(),o.Ub(5,"nz-form-control",4),o.Pb(6,"input",5),o.Tb(),o.Tb(),o.Tb(),o.Rb()),2&e){const e=o.fc();o.Ab(1),o.mc("formGroup",e.baseForm),o.Ab(2),o.mc("nzSpan",6),o.Ab(2),o.mc("nzSpan",14)}}let k=(()=>{class e extends g.a{constructor(e,n,t){super(n),this.formBuilder=e,this.complainService=n,this.messageService=t,this.isVisible=!1,this.cancelModalEvent=new o.n,this.okModalEvent=new o.n}ngOnInit(){this.modalTitle="Reply complain",this.buildForm()}submitForm(){this.isLoadingButton=!0,this.complainService.id.subscribe(e=>this.id=e),this.complainService.replyComplain(this.id,this.baseForm.get("message").value).pipe(Object(f.a)(()=>this.isLoadingButton=!1)).subscribe(e=>{"OK"==e.code&&(this.cancelModal(),this.messageService.create("success","Reply complain successfully!"))})}cancelModal(){super.cancel(this.cancelModalEvent)}buildForm(){this.baseForm=this.formBuilder.group({message:[null,[T.r.required]]})}}return e.\u0275fac=function(n){return new(n||e)(o.Ob(T.e),o.Ob(p),o.Ob(y.b))},e.\u0275cmp=o.Ib({type:e,selectors:[["app-complain-modal"]],inputs:{complain:"complain",modalTitle:"modalTitle",isVisible:"isVisible"},outputs:{cancelModalEvent:"cancelModalEvent",okModalEvent:"okModalEvent"},features:[o.xb],decls:2,vars:5,consts:[["nzOkText","Reply","nzClassName","form-modal",3,"nzVisible","nzOkDisabled","nzTitle","nzClosable","nzOkLoading","nzVisibleChange","nzOnCancel","nzOnOk"],[4,"nzModalContent"],["nz-form","",3,"formGroup"],["nzFor","complain",3,"nzSpan"],["nzErrorTip","Please input your reply!",3,"nzSpan"],["nz-input","","type","text","formControlName","message"]],template:function(e,n){1&e&&(o.Ub(0,"nz-modal",0),o.bc("nzVisibleChange",function(e){return n.isVisible=e})("nzOnCancel",function(){return n.cancelModal()})("nzOnOk",function(){return n.submitForm()}),o.Hc(1,O,7,3,"ng-container",1),o.Tb()),2&e&&o.mc("nzVisible",n.isVisible)("nzOkDisabled",n.baseForm.invalid)("nzTitle",n.modalTitle)("nzClosable",!1)("nzOkLoading",n.isLoadingButton)},directives:[v.a,v.b,T.s,T.n,U.b,T.h,C.c,U.c,C.a,U.d,U.a,S.a,T.d,T.m,T.g],styles:[""]}),e})();var M=t("PCNd"),P=t("iInd"),A=t("WJhm"),F=t("66zS"),J=t("haRT"),w=t("GaVp"),x=t("Jp/u");let V=(()=>{class e{}return e.\u0275mod=o.Mb({type:e}),e.\u0275inj=o.Lb({factory:function(n){return new(n||e)},imports:[[a.c,M.a,P.f.forChild(z)]]}),e})();o.zc(h,[A.a,S.b,S.c,S.a,T.d,T.m,T.o,F.a,J.d,J.i,J.j,J.c,J.h,J.a,J.g,J.f,a.n,a.m,w.a,x.a,k],[])}}]);