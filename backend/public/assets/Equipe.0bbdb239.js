import{r as p,o as d,c as h,a as e,w as _,v as m,u as s,F as N,e as q,t as f,q as y,b as r,f as C,g as V,h as g,i as w}from"./index.bb9eb9bc.js";import{_ as b}from"./Notification.de9c05dc.js";const x={class:"ui modal equipe"},k=e("i",{class:"close icon"},null,-1),O=e("div",{class:"header"},[e("div",{class:"ui header"},"Nouvelle equipe")],-1),I={class:"content"},U={class:"content ui grid"},A={class:"two column row"},B={class:"column"},F={class:"ui form"},L={class:"field"},T=r(" Nom de l'\xE9quipe : "),j={class:"field"},z=r(" Origine : "),D={class:"field"},M=r(" contact : "),S={key:0,class:"field"},R=r(" Coach: "),G={class:"column"},H=e("div",{class:"ui header tiny"},"Coach(veuillez ajouter au moins un)",-1),J={class:"ui form tiny"},K={class:"inline field"},P=e("label",{for:"nom"},"Nom :",-1),Q=r(),W={class:"inline field"},X=e("label",{for:"prenom"},"CIN :",-1),Y=r(),Z={class:"inline field"},ee=e("label",{for:"contact"},"Contact :",-1),oe=r(),se={emits:["addEquipe"],setup(E,{emit:c}){let o=p({NomEquipe:"",Origine:"",Contact:"",Coaches:[]}),t=p({NomCoach:"",CINCoach:"",ContactCoach:""}),v=p({success:!1,message:"Veuillez remplir tous les champs et ajouter au moins un coach"}),a=()=>{console.log("okkk"),t.value.NomCoach!=""&&t.value.CINCoach!=""&&t.value.ContactCoach!=""&&(o.value.Coaches.push({NomCoach:t.value.NomCoach,CINCoach:t.value.CINCoach,ContactCoach:t.value.ContactCoach}),t.value.NomCoach="",t.value.CINCoach="",t.value.ContactCoach="")},n=()=>{o.value.NomEquipe!=""&&o.value.Origine!=""&&o.value.Contact!=""&&o.value.Coaches.length!=0?(v.value.message="Equipe enregistr\xE9e!!",v.value.success=!0,c("addEquipe",{NomEquipe:o.value.NomEquipe,Origine:o.value.Origine,Contact:o.value.Contact,Coaches:o.value.Coaches},v.value)):c("addEquipe",{},v.value),o.value.NomEquipe="",o.value.Origine="",o.value.Contact="",o.value.Coaches=[]};return(u,l)=>(d(),h("div",x,[k,O,e("div",I,[e("div",U,[e("div",A,[e("div",B,[e("div",F,[e("div",L,[T,_(e("input",{type:"text","onUpdate:modelValue":l[0]||(l[0]=i=>s(o).NomEquipe=i)},null,512),[[m,s(o).NomEquipe]])]),e("div",j,[z,_(e("input",{type:"text","onUpdate:modelValue":l[1]||(l[1]=i=>s(o).Origine=i)},null,512),[[m,s(o).Origine]])]),e("div",D,[M,_(e("input",{type:"tel","onUpdate:modelValue":l[2]||(l[2]=i=>s(o).Contact=i)},null,512),[[m,s(o).Contact]])]),s(o).Coaches.length!=0?(d(),h("div",S,[R,e("ul",null,[(d(!0),h(N,null,q(s(o).Coaches,i=>(d(),h("li",null,f(i.NomCoach),1))),256))])])):y("",!0),e("button",{class:"ui button",onClick:l[3]||(l[3]=(...i)=>s(n)&&s(n)(...i))},"Enregistrer equipe")])]),e("div",G,[H,e("div",J,[e("div",K,[P,Q,_(e("input",{type:"text","onUpdate:modelValue":l[4]||(l[4]=i=>s(t).NomCoach=i)},null,512),[[m,s(t).NomCoach]])]),e("div",W,[X,Y,_(e("input",{type:"text","onUpdate:modelValue":l[5]||(l[5]=i=>s(t).CINCoach=i)},null,512),[[m,s(t).CINCoach]])]),e("div",Z,[ee,oe,_(e("input",{type:"tel","onUpdate:modelValue":l[6]||(l[6]=i=>s(t).ContactCoach=i)},null,512),[[m,s(t).ContactCoach]])]),e("div",{class:"ui button tiny",onClick:l[7]||(l[7]=(...i)=>s(a)&&s(a)(...i))},"Ajouter coach")])])])])])]))}},te=e("div",{class:"ui header blue"},"Les \xE9quipes",-1),ie=e("i",{class:"add icon"},null,-1),le=[ie],ae={class:"ui list divided"},ne={class:"item ui grid"},ce=w('<div class="four column row"><div class="column ui header tiny">NomEquipe</div><div class="column ui header tiny">Ville d&#39;origine</div><div class="column ui header tiny"></div><div class="column ui header tiny"></div></div>',1),ue={class:"four column row"},de={class:"column"},he={class:"column"},re=e("div",{class:"column"},[e("i",{class:"trash red icon"})],-1),ve=e("div",{class:"column"},[e("i",{class:"edit icon blue"})],-1),pe={setup(E){C.defaults.baseURL="http://localhost:5000";let c=p([]);V(()=>{C.get("/api.equipe/allTeams").then(a=>{c.value=a.data.Body,console.log(a.data.Body)})});let o=()=>{$(".ui.modal.equipe").modal("show")},t=p({}),v=(a,n)=>{n.success?(C.post("/api.equipe/create",a).then(u=>console.log(u)),t.value=n,console.log(a),c.value=[a,...c.value],$(".ui.modal.notification").modal("show")):(t.value=n,$(".ui.modal.notification").modal("show"))};return(a,n)=>(d(),h(N,null,[te,e("div",{class:"ui button green",onClick:n[0]||(n[0]=(...u)=>s(o)&&s(o)(...u))},le),e("div",ae,[e("div",ne,[ce,(d(!0),h(N,null,q(s(c),u=>(d(),h("div",ue,[e("div",de,f(u.NomEquipe),1),e("div",he,f(u.Origine),1),re,ve]))),256))])]),g(se,{onAddEquipe:s(v)},null,8,["onAddEquipe"]),g(b,{message:s(t)},null,8,["message"])],64))}};export{pe as default};
