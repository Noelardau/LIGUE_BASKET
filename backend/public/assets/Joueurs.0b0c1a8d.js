import{_ as y}from"./Notification.de9c05dc.js";import{r as p,o as d,c as n,a as e,w as r,v as _,u as t,b as c,t as a,d as q,F as g,e as J,f as C,g as D,h as E,i as I}from"./index.bb9eb9bc.js";const P={class:"ui modal add"},w=e("i",{class:"close icon red"},null,-1),A=e("div",{class:"header",align:"center"}," Nouveau Joueur ",-1),V={class:"content"},U={class:"ui form tiny grid"},k={class:"ui row two column"},b={class:"column"},x={class:"field"},R=c(" Nom: "),M={class:"field"},S=c(" Pr\xE9noms : "),T={class:"field"},B=c(" Numero : "),F={class:"field"},L=c(" Date de naissance : "),z={class:"column"},O={class:"field"},G=c(" CIN: "),H={class:"field"},K=["value"],Q={class:"field"},W=["value"],X={align:"center"},Y={props:{equipe:{type:Array}},emits:["add"],setup(f,{emit:v}){const N=f;let h=[{idCategorie:1,Categorie:"U12"},{idCategorie:2,Categorie:"OPEN"}],o=p({NomJoueur:"",PrenomJoueur:"",NumJoueur:10,DAN:"",CIN:"",EquipeRefEquipe:"",CategorieIdCategorie:""}),l=p({success:!0,message:"Joueur ajout\xE9 avec success"}),u=()=>{o.value.NomJoueur!=""&&o.value.PrenomJoueur!=""&&o.value.NumJoueur!=""&&o.value.DAN!=""&&o.value.CIN!=""?(console.log(o),v("add",{NomJoueur:o.value.NomJoueur,PrenomJoueur:o.value.PrenomJoueur,DAN:o.value.DAN,CIN:o.value.CIN,EquipeRefEquipe:o.value.EquipeRefEquipe,CategorieIdCategorie:o.value.CategorieIdCategorie,NumJoueur:o.value.NumJoueur},l.value)):(l.value.message="Veuillez remplir tout les champs",l.value.success=!1,v("add",{},l.value))};return(m,s)=>(d(),n("div",P,[w,A,e("div",V,[e("div",U,[e("div",k,[e("div",b,[e("div",x,[R,r(e("input",{type:"text","onUpdate:modelValue":s[0]||(s[0]=i=>t(o).NomJoueur=i)},null,512),[[_,t(o).NomJoueur]])]),e("div",M,[S,r(e("input",{type:"text","onUpdate:modelValue":s[1]||(s[1]=i=>t(o).PrenomJoueur=i)},null,512),[[_,t(o).PrenomJoueur]])]),e("div",T,[B,r(e("input",{type:"number","onUpdate:modelValue":s[2]||(s[2]=i=>t(o).NumJoueur=i)},null,512),[[_,t(o).NumJoueur]])]),e("div",F,[L,r(e("input",{type:"date","onUpdate:modelValue":s[3]||(s[3]=i=>t(o).DAN=i)},null,512),[[_,t(o).DAN]])])]),e("div",z,[e("div",O,[G,r(e("input",{type:"text","onUpdate:modelValue":s[4]||(s[4]=i=>t(o).CIN=i)},null,512),[[_,t(o).CIN]])]),e("div",H,[c(" Equipe "+a(t(o).EquipeRefEquipe)+" ",1),r(e("select",{name:"equipe",id:"equipe","onUpdate:modelValue":s[5]||(s[5]=i=>t(o).EquipeRefEquipe=i)},[(d(!0),n(g,null,J(t(N).equipe,i=>(d(),n("option",{value:i.RefEquipe},a(i.NomEquipe),9,K))),256))],512),[[q,t(o).EquipeRefEquipe]])]),e("div",Q,[c(" Categorie"+a(t(o).CategorieIdCategorie)+" ",1),r(e("select",{name:"Categorie",id:"Categorie","onUpdate:modelValue":s[6]||(s[6]=i=>t(o).CategorieIdCategorie=i)},[(d(!0),n(g,null,J(t(h),i=>(d(),n("option",{value:i.idCategorie},a(i.Categorie),9,W))),256))],512),[[q,t(o).CategorieIdCategorie]])]),e("p",X,[e("button",{class:"ui button tiny green",onClick:s[7]||(s[7]=(...i)=>t(u)&&t(u)(...i))},"Ajouter")])])])])])]))}},Z=e("div",{class:"ui header blue"},"Liste des joueurs",-1),j=e("i",{class:"add icon"},null,-1),ee=[j],oe={class:"ui list divided"},se={class:"item ui grid"},te=I('<div class="seven column row"><div class="column ui header tiny">Nom</div><div class="column ui header tiny">Pr\xE9nom(s)</div><div class="column ui header tiny">Date de naissance</div><div class="column ui header tiny">Equipe</div><div class="column ui header tiny">Numero </div><div class="column ui header tiny"></div><div class="column ui header tiny"></div></div>',1),ie={class:"seven column row"},ue={class:"column"},ae={class:"column"},le={class:"column"},de={class:"column"},ne={class:"column"},re=e("div",{class:"column"},[e("i",{class:"trash red icon"})],-1),ce=["onClick"],me=e("i",{class:"edit icon blue"},null,-1),ve=[me],Ne={setup(f){C.defaults.baseURL="http://localhost:5000";let v=()=>{$(".ui.modal.add").modal("show")},N=p([]);D(()=>{C.get("/api.equipe/allTeams").then(u=>{console.log(u),N.value=u.data.Body})});let h=p({success:!0,message:""}),o=(u,m)=>{h.value=m,m.success&&(console.log(u),C.post("/api.joueur/create",u).then(s=>{console.log(s),l.value=[u,...l.value]})),$(".ui.modal.notification").modal("show")},l=p([{NomJoueur:"Marco",PrenomJoueur:"klark",DateNaissance:new Date,Equipe:"ASCUT",NumeroJoueur:12,id:45},{NomJoueur:"Marco",PrenomJoueur:"klark",DateNaissance:new Date,Equipe:"ASCUT",NumeroJoueur:12,id:1}]);return(u,m)=>(d(),n(g,null,[Z,e("button",{class:"ui button green",onClick:m[0]||(m[0]=(...s)=>t(v)&&t(v)(...s))},ee),e("div",oe,[e("div",se,[te,(d(!0),n(g,null,J(t(l),s=>(d(),n("div",ie,[e("div",ue,a(s.NomJoueur),1),e("div",ae,a(s.PrenomJoueur),1),e("div",le,a(s.DateNaissance),1),e("div",de,a(s.Equipe),1),e("div",ne,a(s.NumeroJoueur),1),re,e("div",{class:"column",onClick:i=>u.editJoueur(s.id)},ve,8,ce)]))),256))])]),E(Y,{onAdd:t(o),equipe:t(N)},null,8,["onAdd","equipe"]),E(y,{message:t(h)},null,8,["message"])],64))}};export{Ne as default};
