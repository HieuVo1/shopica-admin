(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{sjYV:function(t,e,n){"use strict";n.r(e),n.d(e,"ProductModule",function(){return rt});var i=n("PCNd"),r=n("nYR2"),o=n("AG10"),a=n("s7LF"),c=n("AytR"),l=n("fXoL"),s=n("2AjE"),d=n("WRNG"),b=n("IheW"),u=n("JIr8"),p=n("lJxs"),h=n("LRne");let g=(()=>{class t{constructor(t){this.httpClient=t}getById(t){return this.httpClient.get(`${c.a.productServiceUrl}/api/product/${t}`).pipe(Object(u.a)(t=>Object(h.a)(t.error)))}create(t){return this.httpClient.post(c.a.productServiceUrl+"/api/product/create",t).pipe(Object(u.a)(t=>Object(h.a)(t.error)))}update(t){return console.log(t),this.httpClient.put(c.a.productServiceUrl+"/api/product",t).pipe(Object(u.a)(t=>Object(h.a)(t.error)))}delete(t,e){let n=(new b.g).append("page",""+(e.pageIndex-1)).append("pageSize",""+e.pageSize);return null!=e.sortField&&(n=n.append("sortField",""+e.sortField).append("sortOrder",""+e.sortOrder)),e.filters.length>0&&e.filters.forEach(t=>{n=n.append(t.key,t.value)}),this.httpClient.delete(`${c.a.productServiceUrl}/api/product/${t}`,{params:n}).pipe(Object(u.a)(t=>Object(h.a)(t.error)))}getAll(t,e){let n=(new b.g).append("page",""+(t.pageIndex-1)).append("pageSize",""+t.pageSize);return null!=t.sortField&&(n=n.append("sortField",""+t.sortField).append("sortOrder",""+t.sortOrder)),t.filters.length>0&&t.filters.forEach(t=>{n=n.append(t.key,t.value)}),this.httpClient.post(c.a.productServiceUrl+"/api/product",null!=e?e:{},{params:n}).pipe(Object(p.a)(t=>(t.data.content.forEach(t=>{0==t.productImages.length&&t.productImages.push({image:"https://drive.google.com/thumbnail?id=1KXVcuCEi-aYgrJXkUwV_RODDh5cT5qHv"})}),t)),Object(u.a)(t=>Object(h.a)(t.error)))}deleteImage(t){return this.httpClient.delete(`${c.a.productServiceUrl}/api/product/image/${t}`).pipe(Object(u.a)(t=>Object(h.a)(t.error)))}}return t.\u0275fac=function(e){return new(e||t)(l.Yb(b.c))},t.\u0275prov=l.Kb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var m=n("JXeA"),z=n("iInd"),f=n("tYkK"),S=n("gaRz"),C=n("GaVp"),T=n("Jp/u"),P=n("WJhm"),y=n("66zS"),U=n("wf2+"),v=n("px0D"),I=n("jTf7"),O=n("ofXK"),A=n("mrSG"),L=n("NFMk");const w=function(){return{width:"100%"}};function F(t,e){if(1&t&&l.Pb(0,"img",7),2&t){const t=l.ec();l.mc("src",t.previewImage,l.yc)("ngStyle",l.oc(2,w))}}let D=(()=>{class t{constructor(t){this.productService=t,this.backEndUrl=c.a.productServiceUrl+"/api/upload",this.listImageChange=new l.n,this.previewImage="",this.previewVisible=!1,this.handlePreview=t=>Object(A.a)(this,void 0,void 0,function*(){t.url||t.preview||(t.preview=yield function(t){return new Promise((e,n)=>{const i=new FileReader;i.readAsDataURL(t),i.onload=()=>e(i.result),i.onerror=t=>n(t)})}(t.originFileObj)),this.previewImage=t.url||t.preview,this.previewVisible=!0}),this.handleChange=t=>{this.productService.deleteImage(t.file.id).pipe().subscribe(t=>{console.log(t)}),this.listImageChange.emit(this.listImage)}}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(l.Ob(g))},t.\u0275cmp=l.Ib({type:t,selectors:[["app-product-image"]],inputs:{listImage:"listImage"},outputs:{listImageChange:"listImageChange"},decls:13,vars:8,consts:[[1,"product-image","section"],[1,"clearfix"],["nzName","files","nzListType","picture-card",3,"nzAction","nzMultiple","nzFileList","nzShowButton","nzPreview","nzFileListChange","nzChange"],["nz-icon","","nzType","plus"],[2,"margin-top","8px"],[3,"nzVisible","nzContent","nzFooter","nzOnCancel"],["modalContent",""],[3,"src","ngStyle"]],template:function(t,e){if(1&t&&(l.Ub(0,"div",0),l.Ub(1,"h4"),l.Jc(2,"Product Images:"),l.Tb(),l.Ub(3,"nz-form-item"),l.Ub(4,"div",1),l.Ub(5,"nz-upload",2),l.bc("nzFileListChange",function(t){return e.listImage=t})("nzChange",function(t){return e.handleChange(t)}),l.Ub(6,"div"),l.Pb(7,"i",3),l.Ub(8,"div",4),l.Jc(9,"Upload"),l.Tb(),l.Tb(),l.Tb(),l.Ub(10,"nz-modal",5),l.bc("nzOnCancel",function(){return e.previewVisible=!1}),l.Hc(11,F,1,3,"ng-template",null,6,l.Ic),l.Tb(),l.Tb(),l.Tb(),l.Tb()),2&t){const t=l.uc(12);l.Ab(5),l.mc("nzAction",e.backEndUrl)("nzMultiple",!0)("nzFileList",e.listImage)("nzShowButton",e.listImage.length<8)("nzPreview",e.handlePreview),l.Ab(5),l.mc("nzVisible",e.previewVisible)("nzContent",t)("nzFooter",null)}},directives:[f.c,U.c,S.a,P.a,y.a,L.a,O.p],styles:[""]}),t})();var M=n("F0gW"),N=n("vpSu"),J=n("haRT");function E(t,e){if(1&t&&l.Pb(0,"nz-option",12),2&t){const t=e.$implicit;l.mc("nzLabel",t.sizeName)("nzValue",t)}}function V(t,e){if(1&t&&l.Pb(0,"nz-option",12),2&t){const t=e.$implicit;l.mc("nzLabel",t.colorName)("nzValue",t)}}function B(t,e){if(1&t){const t=l.Vb();l.Ub(0,"tr"),l.Ub(1,"td",10),l.Jc(2),l.Tb(),l.Ub(3,"td",10),l.Jc(4),l.Tb(),l.Ub(5,"td",10),l.Ub(6,"input",13),l.bc("ngModelChange",function(t){return e.$implicit.quantity=t}),l.Tb(),l.Tb(),l.Ub(7,"td",10),l.Ub(8,"button",14),l.bc("click",function(){l.wc(t);const n=e.$implicit;return l.ec().deleteProductDetail(n)}),l.Pb(9,"i",15),l.Tb(),l.Tb(),l.Tb()}if(2&t){const t=e.$implicit;l.Ab(2),l.Kc(t.size),l.Ab(2),l.Kc(t.color),l.Ab(2),l.mc("ngModel",t.quantity)}}let j=(()=>{class t{constructor(t,e){this.colorService=t,this.sizeService=e,this.listProductDetail=[],this.listProductDetailChange=new l.n,this.isLoadingSizeInSelect=!0,this.isLoadingColorInSelect=!0,this.listColor=[],this.listSize=[],this.listSizeSelected=[],this.listColorSelected=[],this.listSizeIdOfEditProduct=[],this.listColorIdOfEditProduct=[],this.params=new o.a}ngOnInit(){this.loadColor(),this.loadSize()}ngOnChanges(t){null!=t.listProductDetail&&t.listProductDetail.currentValue.length>0&&(t.listProductDetail.currentValue.forEach(t=>{this.listSizeIdOfEditProduct.push(t.sizeId),this.listColorIdOfEditProduct.push(t.colorId)}),this.listColorSelected=this.listColor.filter(t=>this.listColorIdOfEditProduct.includes(t.id)),this.listSizeSelected=this.listSize.filter(t=>this.listSizeIdOfEditProduct.includes(t.id)))}loadColor(){this.params.pageSize=50,this.colorService.getAll(this.params).pipe(Object(r.a)(()=>this.isLoadingColorInSelect=!1)).subscribe(t=>{"OK"==t.code&&(this.listColor=t.data.content,this.listColorSelected=this.listColor.filter(t=>this.listColorIdOfEditProduct.includes(t.id)))})}loadSize(){this.params.pageSize=50,this.sizeService.getAll(this.params).pipe(Object(r.a)(()=>this.isLoadingSizeInSelect=!1)).subscribe(t=>{"OK"==t.code&&(this.listSize=t.data.content,this.listSizeSelected=this.listSize.filter(t=>this.listSizeIdOfEditProduct.includes(t.id)))})}selectSize(t){this.listProductDetail=[],this.listColorSelected.forEach(t=>{this.listSizeSelected.forEach(e=>{this.listProductDetail.push({id:null,quantity:0,colorId:t.id,color:t.colorName,sizeId:e.id,size:e.sizeName})})}),this.listProductDetailChange.emit(this.listProductDetail)}selectColor(t){this.listProductDetail=[],this.listSizeSelected.forEach(t=>{this.listColorSelected.forEach(e=>{this.listProductDetail.push({id:null,quantity:0,colorId:e.id,color:e.colorName,sizeId:t.id,size:t.sizeName})})}),this.listProductDetailChange.emit(this.listProductDetail)}deleteProductDetail(t){this.listProductDetail=this.listProductDetail.filter(e=>e.colorId!==t.colorId||e.sizeId!==t.sizeId)}}return t.\u0275fac=function(e){return new(e||t)(l.Ob(M.a),l.Ob(N.a))},t.\u0275cmp=l.Ib({type:t,selectors:[["app-product-option"]],inputs:{listProductDetail:"listProductDetail"},outputs:{listProductDetailChange:"listProductDetailChange"},features:[l.yb],decls:31,vars:15,consts:[[1,"option-value","section"],[1,"content"],[1,"column"],[3,"nzSpan"],["nzErrorTip","Please input your size!",3,"nzSpan"],["nzMode","multiple","nzAllowClear","","nzShowSearch","","nzPlaceHolder","Select a size",3,"nzLoading","nzMaxTagCount","ngModel","ngModelChange"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzErrorTip","Please input your color!",3,"nzSpan"],["nzMode","multiple","nzShowSearch","","nzAllowClear","","nzPlaceHolder","Select a color",3,"nzLoading","nzMaxTagCount","ngModel","ngModelChange"],["nzBordered","",3,"nzShowPagination","nzData"],["nzAlign","center"],[4,"ngFor","ngForOf"],[3,"nzLabel","nzValue"],["type","number","nz-input","","placeholder","Quantity",3,"ngModel","ngModelChange"],["nz-button","","nzDanger","","nzType","primary",3,"click"],["nz-icon","","nzType","delete","nzTheme","outline"]],template:function(t,e){1&t&&(l.Ub(0,"div",0),l.Ub(1,"h4"),l.Jc(2,"Option Value:"),l.Tb(),l.Ub(3,"div",1),l.Ub(4,"div",2),l.Ub(5,"nz-form-item"),l.Ub(6,"nz-form-label",3),l.Jc(7,"Size"),l.Tb(),l.Ub(8,"nz-form-control",4),l.Ub(9,"nz-select",5),l.bc("ngModelChange",function(t){return e.listSizeSelected=t})("ngModelChange",function(t){return e.selectSize(t)}),l.Hc(10,E,1,2,"nz-option",6),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Ub(11,"div",2),l.Ub(12,"nz-form-item"),l.Ub(13,"nz-form-label",3),l.Jc(14,"Color"),l.Tb(),l.Ub(15,"nz-form-control",7),l.Ub(16,"nz-select",8),l.bc("ngModelChange",function(t){return e.listColorSelected=t})("ngModelChange",function(t){return e.selectColor(t)}),l.Hc(17,V,1,2,"nz-option",6),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Ub(18,"nz-table",9),l.Ub(19,"thead"),l.Ub(20,"tr"),l.Ub(21,"th",10),l.Jc(22,"Size"),l.Tb(),l.Ub(23,"th",10),l.Jc(24,"Color"),l.Tb(),l.Ub(25,"th",10),l.Jc(26,"Quantity"),l.Tb(),l.Ub(27,"th",10),l.Jc(28,"Action"),l.Tb(),l.Tb(),l.Tb(),l.Ub(29,"tbody"),l.Hc(30,B,10,3,"tr",11),l.Tb(),l.Tb(),l.Tb()),2&t&&(l.Ab(6),l.mc("nzSpan",6),l.Ab(2),l.mc("nzSpan",14),l.Ab(1),l.mc("nzLoading",e.isLoadingSizeInSelect)("nzMaxTagCount",3)("ngModel",e.listSizeSelected),l.Ab(1),l.mc("ngForOf",e.listSize),l.Ab(3),l.mc("nzSpan",6),l.Ab(2),l.mc("nzSpan",14),l.Ab(1),l.mc("nzLoading",e.isLoadingColorInSelect)("nzMaxTagCount",3)("ngModel",e.listColorSelected),l.Ab(1),l.mc("ngForOf",e.listColor),l.Ab(1),l.mc("nzShowPagination",!1)("nzData",e.listProductDetail),l.Ab(12),l.mc("ngForOf",e.listProductDetail))},directives:[f.c,U.c,f.a,U.d,U.a,I.b,a.m,a.o,O.n,J.d,J.i,J.j,J.c,J.h,J.a,J.f,I.a,a.p,v.a,a.d,C.a,T.a,P.a,y.a],styles:[".option-value.section[_ngcontent-%COMP%]{border:none}"]}),t})();var x=n("fb/r");function k(t,e){if(1&t&&l.Pb(0,"nz-option",31),2&t){const t=e.$implicit;l.mc("nzLabel",t.categoryName)("nzValue",t.id)}}function K(t,e){1&t&&(l.Sb(0),l.Jc(1," Please input your price! "),l.Rb())}function $(t,e){1&t&&(l.Sb(0),l.Jc(1," The min value is 0 "),l.Rb())}function H(t,e){if(1&t&&(l.Hc(0,K,2,0,"ng-container",32),l.Hc(1,$,2,0,"ng-container",32)),2&t){const t=e.$implicit;l.mc("ngIf",t.hasError("required")),l.Ab(1),l.mc("ngIf",t.hasError("min"))}}function R(t,e){if(1&t&&l.Pb(0,"nz-option",31),2&t){const t=e.$implicit;l.mc("nzLabel",t.brandName)("nzValue",t.id)}}const _=function(t){return{isLoading:t}};let q=(()=>{class t{constructor(t,e,n,i,r,a){this.formBuilder=t,this.categoryService=e,this.brandService=n,this.productService=i,this.messageService=r,this.activatedRoute=a,this.backEndUrl=c.a.productServiceUrl+"/api/product/import",this.isLoadingCategoryInSelect=!0,this.isLoadingBrandInSelect=!0,this.isLoadingProductEdit=!1,this.isLoadingButtonSubmit=!1,this.params=new o.a,this.listImage=[],this.listProductDetail=[]}ngOnInit(){this.buildForm(),this.loadCategory(),this.loadBrand(),this.productId=this.activatedRoute.snapshot.params.id,void 0!==this.productId&&this.loadProductEdit(this.productId)}loadProductEdit(t){this.isLoadingProductEdit=!0,this.productService.getById(t).pipe(Object(r.a)(()=>this.isLoadingProductEdit=!1)).subscribe(t=>{if("OK"==t.code){let e=[],n=[];const i=t.data;this.productForm.controls.productName.setValue(i.productName),this.productForm.controls.price.setValue(i.price),this.productForm.controls.categoryId.setValue(i.categoryId),this.productForm.controls.brandId.setValue(i.brandId),this.productForm.controls.description.setValue(i.description),i.productImages.forEach((t,e)=>{n.push({uid:e,id:t.id,url:t.image,name:"image.png"})}),this.listImage=n,i.productDetails.forEach(t=>{e.push(t)}),this.listProductDetail=e}})}buildForm(){this.productForm=this.formBuilder.group({productName:[null,a.r.required],price:[null,[a.r.required,a.r.min(0)]],brandId:[null,a.r.required],categoryId:[null,a.r.required],description:[null]})}loadCategory(){this.params.pageSize=50,this.categoryService.getAll(this.params).pipe(Object(r.a)(()=>this.isLoadingCategoryInSelect=!1)).subscribe(t=>{"OK"==t.code&&(this.listCategory=t.data.content)})}loadBrand(){this.params.pageSize=50,this.brandService.getAll(this.params).pipe(Object(r.a)(()=>this.isLoadingBrandInSelect=!1)).subscribe(t=>{"OK"==t.code&&(this.listBrand=t.data.content)})}submitForm(){let t={id:null,categoryName:null,brandName:null,description:this.productForm.get("description").value,productName:this.productForm.get("productName").value,price:this.productForm.get("price").value,categoryId:this.productForm.get("categoryId").value,brandId:this.productForm.get("brandId").value,productDetails:this.listProductDetail,productImages:[],images:[]};this.listImage.forEach(e=>{"done"===e.status&&t.images.push(null==this.productId||void 0===e.url?e.response.data[0]:e.url)}),this.isLoadingButtonSubmit=!0,null!=this.productId?(t.id=this.productId,this.productService.update(t).pipe(Object(r.a)(()=>this.isLoadingButtonSubmit=!1)).subscribe(t=>{"OK"==t.code&&this.messageService.create("success","Update product successfully!")})):this.productService.create(t).pipe(Object(r.a)(()=>this.isLoadingButtonSubmit=!1)).subscribe(t=>{"OK"==t.code&&(this.messageService.create("success","Create product successfully!"),this.productForm.reset(),this.listProductDetail=[],this.listImage=[])})}}return t.\u0275fac=function(e){return new(e||t)(l.Ob(a.e),l.Ob(s.a),l.Ob(d.a),l.Ob(g),l.Ob(m.b),l.Ob(z.a))},t.\u0275cmp=l.Ib({type:t,selectors:[["app-product-detail"]],decls:54,vars:28,consts:[[1,"container"],["nz-row","",3,"nzGutter"],["nz-col","",3,"nzSpan"],["target","_blank","href","https://drive.google.com/file/d/1yPRKV0JVhKOEe1YeYt4bSjY7GChizRtX/view?usp=sharing"],[3,"nzAction"],["nz-button",""],["nz-icon","","nzType","upload"],["nz-form","",3,"formGroup"],[1,"base-info","section"],[1,"content"],[1,"column"],["nzFor","productName",3,"nzSpan"],["nzErrorTip","Please input your product name!",3,"nzSpan"],["nz-input","","type","text","formControlName","productName"],["nzErrorTip","Please input your category name!",3,"nzSpan"],["formControlName","categoryId","nzShowSearch","","nzAllowClear","","nzPlaceHolder","Select a category",3,"nzLoading"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzFor","price",3,"nzSpan"],[3,"nzSpan","nzErrorTip"],["nz-input","","type","number","formControlName","price"],["priceErrorTpl",""],["nzErrorTip","Please input your price!",3,"nzSpan"],["formControlName","brandId","nzShowSearch","","nzAllowClear","","nzPlaceHolder","Select a brand",3,"nzLoading"],["nzFor","description",3,"nzSpan"],["nzErrorTip","Please input your description!",3,"nzSpan"],["rows","4","nz-input","","formControlName","description"],[3,"listImage","listImageChange"],[3,"listProductDetail","listProductDetailChange"],[1,"btn-submit"],["nz-button","","nzType","primary",3,"nzLoading","disabled","click"],["nzSimple","",3,"ngClass","nzSpinning"],[3,"nzLabel","nzValue"],[4,"ngIf"]],template:function(t,e){if(1&t&&(l.Ub(0,"div",0),l.Ub(1,"div",1),l.Ub(2,"div",2),l.Ub(3,"p"),l.Jc(4,"You can create product with import excel: "),l.Ub(5,"a",3),l.Jc(6,"Template"),l.Tb(),l.Tb(),l.Tb(),l.Ub(7,"div",2),l.Ub(8,"nz-upload",4),l.Ub(9,"button",5),l.Pb(10,"i",6),l.Jc(11,"Upload"),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Ub(12,"form",7),l.Ub(13,"div",8),l.Ub(14,"h4"),l.Jc(15,"Basic Information:"),l.Tb(),l.Ub(16,"div",9),l.Ub(17,"div",10),l.Ub(18,"nz-form-item"),l.Ub(19,"nz-form-label",11),l.Jc(20,"Product Name"),l.Tb(),l.Ub(21,"nz-form-control",12),l.Pb(22,"input",13),l.Tb(),l.Tb(),l.Ub(23,"nz-form-item"),l.Ub(24,"nz-form-label",11),l.Jc(25,"Category"),l.Tb(),l.Ub(26,"nz-form-control",14),l.Ub(27,"nz-select",15),l.Hc(28,k,1,2,"nz-option",16),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Ub(29,"div",10),l.Ub(30,"nz-form-item"),l.Ub(31,"nz-form-label",17),l.Jc(32,"Price"),l.Tb(),l.Ub(33,"nz-form-control",18),l.Pb(34,"input",19),l.Hc(35,H,2,2,"ng-template",null,20,l.Ic),l.Tb(),l.Tb(),l.Ub(37,"nz-form-item"),l.Ub(38,"nz-form-label",17),l.Jc(39,"Brand"),l.Tb(),l.Ub(40,"nz-form-control",21),l.Ub(41,"nz-select",22),l.Hc(42,R,1,2,"nz-option",16),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Ub(43,"nz-form-item"),l.Ub(44,"nz-form-label",23),l.Jc(45,"Description"),l.Tb(),l.Ub(46,"nz-form-control",24),l.Pb(47,"textarea",25),l.Tb(),l.Tb(),l.Tb(),l.Tb(),l.Ub(48,"app-product-image",26),l.bc("listImageChange",function(t){return e.listImage=t}),l.Tb(),l.Ub(49,"app-product-option",27),l.bc("listProductDetailChange",function(t){return e.listProductDetail=t}),l.Tb(),l.Ub(50,"div",28),l.Ub(51,"button",29),l.bc("click",function(){return e.submitForm()}),l.Jc(52,"Save change"),l.Tb(),l.Tb(),l.Pb(53,"nz-spin",30),l.Tb()),2&t){const t=l.uc(36);l.Ab(1),l.mc("nzGutter",24),l.Ab(1),l.mc("nzSpan",18),l.Ab(5),l.mc("nzSpan",6),l.Ab(1),l.nc("nzAction",e.backEndUrl),l.Ab(4),l.mc("formGroup",e.productForm),l.Ab(7),l.mc("nzSpan",6),l.Ab(2),l.mc("nzSpan",14),l.Ab(3),l.mc("nzSpan",6),l.Ab(2),l.mc("nzSpan",14),l.Ab(1),l.mc("nzLoading",e.isLoadingCategoryInSelect),l.Ab(1),l.mc("ngForOf",e.listCategory),l.Ab(3),l.mc("nzSpan",6),l.Ab(2),l.mc("nzSpan",14)("nzErrorTip",t),l.Ab(5),l.mc("nzSpan",6),l.Ab(2),l.mc("nzSpan",14),l.Ab(1),l.mc("nzLoading",e.isLoadingBrandInSelect),l.Ab(1),l.mc("ngForOf",e.listBrand),l.Ab(2),l.mc("nzSpan",3),l.Ab(2),l.mc("nzSpan",19),l.Ab(2),l.mc("listImage",e.listImage),l.Ab(1),l.mc("listProductDetail",e.listProductDetail),l.Ab(2),l.mc("nzLoading",e.isLoadingButtonSubmit)("disabled",e.productForm.invalid),l.Ab(2),l.mc("ngClass",l.pc(26,_,e.isLoadingProductEdit))("nzSpinning",e.isLoadingProductEdit)}},directives:[f.c,f.a,S.a,C.a,T.a,P.a,y.a,a.s,a.n,U.b,a.h,U.c,U.d,U.a,v.a,a.d,a.m,a.g,I.b,O.n,a.p,D,j,x.a,O.m,I.a,O.o],styles:[".container[_ngcontent-%COMP%]{width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;height:100%}.btn-submit[_ngcontent-%COMP%]{float:right;margin:20px 0 20px 20px}"]}),t})();class G{constructor(){this.productName=null,this.price=null,this.categoryName=null,this.brandName=null}}var Y=n("q5vz"),Q=n("C/7j"),W=n("phDe"),X=n("SHEi");function Z(t,e){if(1&t&&l.Pb(0,"nz-option",20),2&t){const t=e.$implicit;l.mc("nzLabel",t.categoryName)("nzValue",t.categoryName)}}function tt(t,e){if(1&t&&l.Pb(0,"nz-option",20),2&t){const t=e.$implicit;l.mc("nzLabel",t.brandName)("nzValue",t.brandName)}}const et=function(t,e){return{odd:t,even:e}};function nt(t,e){if(1&t){const t=l.Vb();l.Ub(0,"tr",21),l.Ub(1,"td",9),l.Jc(2),l.Tb(),l.Ub(3,"td",9),l.Jc(4),l.Tb(),l.Ub(5,"td",9),l.Jc(6),l.Tb(),l.Ub(7,"td",9),l.Jc(8),l.Tb(),l.Ub(9,"td",9),l.Jc(10),l.fc(11,"currency"),l.Tb(),l.Ub(12,"td",9),l.Ub(13,"img",22),l.bc("click",function(){l.wc(t);const n=e.$implicit;return l.ec().showListImage(n.productImages)}),l.Tb(),l.Tb(),l.Ub(14,"td",23),l.Ub(15,"button",24),l.bc("nzOnConfirm",function(){l.wc(t);const n=e.$implicit;return l.ec().delete(n.id)}),l.Jc(16,"Delete"),l.Pb(17,"i",25),l.Tb(),l.Ub(18,"button",26),l.bc("click",function(){l.wc(t);const n=e.$implicit;return l.ec().editProduct(n)}),l.Jc(19,"Edit"),l.Pb(20,"i",27),l.Tb(),l.Tb(),l.Tb()}if(2&t){const t=e.$implicit;l.mc("ngClass",l.qc(12,et,e.odd,e.even)),l.Ab(2),l.Kc(t.id),l.Ab(2),l.Kc(t.productName),l.Ab(2),l.Kc(t.categoryName),l.Ab(2),l.Kc(t.brandName),l.Ab(2),l.Kc(l.jc(11,7,t.price,"$","symbol","1.0")),l.Ab(3),l.nc("src",t.productImages[0].image,l.yc)}}const it=[{path:"",component:(()=>{class t extends Y.a{constructor(t,e,n,i,r){super(t),this.productService=t,this.categoryService=e,this.brandService=n,this.nzImageService=i,this.router=r,this.isLoadCategory=!1,this.isLoadBrand=!1,this.filterParams=new o.a,this.productSearch=new G,this.selectedValue=null,this.onQueryParamsChange=t=>{this.baseParams.filters=[{key:"productName",value:this.searchValue}],super.onQueryParamsChangeFromParent(t)}}ngOnInit(){}searchByName(){this.baseParams.filters=[{key:"productName",value:this.searchValue}],super.search()}focusCategorySelect(){this.listCategory||(this.filterParams.pageSize=50,this.isLoadCategory=!0,this.categoryService.getAll(this.filterParams).pipe(Object(r.a)(()=>this.isLoadCategory=!1)).subscribe(t=>{"OK"==t.code&&(this.listCategory=t.data.content)}))}focusBrandSelect(){this.listBrand||(this.filterParams.pageSize=50,this.isLoadBrand=!0,this.brandService.getAll(this.filterParams).pipe(Object(r.a)(()=>this.isLoadBrand=!1)).subscribe(t=>{"OK"==t.code&&(this.listBrand=t.data.content)}))}filterByCategory(t){this.productSearch.categoryName=t,this.isLoading=!0,this.productService.getAll(this.baseParams,this.productSearch).pipe(Object(r.a)(()=>this.isLoading=!1)).subscribe(t=>{this.listData=t.data.content,this.total=t.data.totalElements})}filterByBrand(t){this.productSearch.brandName=t,this.isLoading=!0,this.productService.getAll(this.baseParams,this.productSearch).pipe(Object(r.a)(()=>this.isLoading=!1)).subscribe(t=>{this.listData=t.data.content,this.total=t.data.totalElements})}showListImage(t){let e=[];t.forEach(t=>{e.push({src:t.image})}),this.nzImageService.preview(e,{nzZoom:1,nzRotate:0})}editProduct(t){this.router.navigate(["/admin/product/detail",t.id])}}return t.\u0275fac=function(e){return new(e||t)(l.Ob(g),l.Ob(s.a),l.Ob(d.a),l.Ob(Q.c),l.Ob(z.c))},t.\u0275cmp=l.Ib({type:t,selectors:[["app-product-list"]],features:[l.xb],decls:42,vars:21,consts:[[1,"table-operations"],[1,"category"],["nzShowSearch","","nzAllowClear","","nzPlaceHolder","Select a category",3,"nzDisabled","ngModel","nzLoading","ngModelChange","nzFocus"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],[1,"brand"],["nzShowSearch","","nzAllowClear","","nzPlaceHolder","Select a brand",3,"nzDisabled","ngModel","nzAutoClearSearchValue","nzLoading","ngModelChange","nzFocus"],["nzBordered","","nzTableLayout","fixed",3,"nzFrontPagination","nzTotal","nzPageSize","nzPageIndex","nzLoading","nzData","nzQueryParams"],["sortTable",""],["nzAlign","center","nzWidth","7%","nzColumnKey","id",3,"nzSortFn"],["nzAlign","center"],[3,"nzVisible","nzActive","nzDropdownMenu","nzVisibleChange"],["nz-icon","","nzType","search"],["nzAlign","center","nzWidth","20%"],[3,"ngClass",4,"ngFor","ngForOf"],["menu","nzDropdownMenu"],[1,"ant-table-filter-dropdown"],[1,"search-box"],["type","text","nz-input","","placeholder","Search name",3,"ngModel","ngModelChange"],["nz-button","","nzSize","small",3,"click"],["nz-button","","nzSize","small","nzType","primary",1,"search-button",3,"click"],[3,"nzLabel","nzValue"],[3,"ngClass"],["height","50",3,"src","click"],["nzAlign","center",1,"btn-action"],["nz-button","","nzType","primary","nzPopconfirmOverlayClassName","delete-confirm-card","nz-popconfirm","","nzPopconfirmTitle","Are you sure delete this size?","nzPopconfirmPlacement","left","nzDanger","",3,"nzOnConfirm"],["nz-icon","","nzType","delete","nzTheme","outline"],["nz-button","","nzType","primary",3,"click"],["nz-icon","","nzType","edit","nzTheme","outline"]],template:function(t,e){if(1&t&&(l.Ub(0,"div",0),l.Ub(1,"div",1),l.Ub(2,"p"),l.Jc(3,"Category: "),l.Tb(),l.Ub(4,"nz-select",2),l.bc("ngModelChange",function(t){return e.productSearch.categoryName=t})("ngModelChange",function(t){return e.filterByCategory(t)})("nzFocus",function(){return e.focusCategorySelect()}),l.Hc(5,Z,1,2,"nz-option",3),l.Tb(),l.Tb(),l.Ub(6,"div",4),l.Ub(7,"p"),l.Jc(8,"Brand: "),l.Tb(),l.Ub(9,"nz-select",5),l.bc("ngModelChange",function(t){return e.productSearch.brandName=t})("ngModelChange",function(t){return e.filterByBrand(t)})("nzFocus",function(){return e.focusBrandSelect()}),l.Hc(10,tt,1,2,"nz-option",3),l.Tb(),l.Tb(),l.Tb(),l.Ub(11,"nz-table",6,7),l.bc("nzQueryParams",function(t){return e.onQueryParamsChange(t)}),l.Ub(13,"thead"),l.Ub(14,"tr"),l.Ub(15,"th",8),l.Jc(16,"Id"),l.Tb(),l.Ub(17,"th",9),l.Jc(18,"Product Name "),l.Ub(19,"nz-filter-trigger",10),l.bc("nzVisibleChange",function(t){return e.isShowSearchInput=t}),l.Pb(20,"i",11),l.Tb(),l.Tb(),l.Ub(21,"th",9),l.Jc(22,"Category Name"),l.Tb(),l.Ub(23,"th",9),l.Jc(24,"Brand Name"),l.Tb(),l.Ub(25,"th",9),l.Jc(26,"Price"),l.Tb(),l.Ub(27,"th",9),l.Jc(28,"Image"),l.Tb(),l.Ub(29,"th",12),l.Jc(30,"Action"),l.Tb(),l.Tb(),l.Tb(),l.Ub(31,"tbody"),l.Hc(32,nt,21,15,"tr",13),l.Tb(),l.Tb(),l.Ub(33,"nz-dropdown-menu",null,14),l.Ub(35,"div",15),l.Ub(36,"div",16),l.Ub(37,"input",17),l.bc("ngModelChange",function(t){return e.searchValue=t}),l.Tb(),l.Ub(38,"button",18),l.bc("click",function(){return e.reset()}),l.Jc(39,"Reset"),l.Tb(),l.Ub(40,"button",19),l.bc("click",function(){return e.searchByName()}),l.Jc(41," Search "),l.Tb(),l.Tb(),l.Tb(),l.Tb()),2&t){const t=l.uc(12),n=l.uc(34);l.Ab(4),l.mc("nzDisabled",e.isLoading)("ngModel",e.productSearch.categoryName)("nzLoading",e.isLoadCategory),l.Ab(1),l.mc("ngForOf",e.listCategory),l.Ab(4),l.mc("nzDisabled",e.isLoading)("ngModel",e.productSearch.brandName)("nzAutoClearSearchValue",!1)("nzLoading",e.isLoadBrand),l.Ab(1),l.mc("ngForOf",e.listBrand),l.Ab(1),l.mc("nzFrontPagination",!1)("nzTotal",e.total)("nzPageSize",e.baseParams.pageSize)("nzPageIndex",e.baseParams.pageIndex)("nzLoading",e.isLoading)("nzData",e.listData),l.Ab(4),l.mc("nzSortFn",!0),l.Ab(4),l.mc("nzVisible",e.isShowSearchInput)("nzActive",e.searchValue.length>0)("nzDropdownMenu",n),l.Ab(13),l.mc("ngForOf",t.data),l.Ab(5),l.mc("ngModel",e.searchValue)}},directives:[I.b,a.m,a.o,O.n,J.d,J.i,J.j,J.c,J.h,J.a,J.g,J.b,P.a,y.a,J.f,W.c,v.a,a.d,C.a,T.a,I.a,O.m,X.a],pipes:[O.d],styles:[".table-operations[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-between}.table-operations[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%], .table-operations[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]{display:flex;align-items:center}.table-operations[_ngcontent-%COMP%]   .brand[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .table-operations[_ngcontent-%COMP%]   .category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 15px 0 0}nz-select[_ngcontent-%COMP%]{width:230px}"]}),t})()},{path:"create",component:q},{path:"detail/:id",component:q}];let rt=(()=>{class t{}return t.\u0275mod=l.Mb({type:t}),t.\u0275inj=l.Lb({factory:function(e){return new(e||t)},imports:[[O.c,z.f.forChild(it),i.a,I.c,S.b]]}),t})()}}]);