//tealium universal tag - utag.27 ut4.0.201805220845, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
window.trackXiti=function(data_info){return doTrackXiti(data_info);};var doTrackXiti=function(data_info){var pushEvent=null;if(!data_info&&typeof $!==undefined){var data_info=$(this).attr("data-info");data_info=JSON.parse(data_info);pushEvent=function(arg1,arg2,arg3,arg4,arg5,arg6){return xt_click(arg1,arg2,arg3,arg4,arg5,arg6);};}else{pushEvent=function(arg1,arg2,arg3,arg4,arg5,arg6){return xt_med(arg2,arg3,arg4,arg5,arg6);};}
var xiti_type=data_info.event_type;var xiti_label=data_info.event_name;var xiti_click=data_info.click_type!==undefined?data_info.click_type:"N";var xiti_s2=data_info.event_s2!==undefined?data_info.event_s2:0;if(xiti_type==="click"){if(typeof this.href==="object"){return pushEvent({},"C",xiti_s2,xiti_label,xiti_click,this.href.baseVal);}else{return pushEvent(this,"C",xiti_s2,xiti_label,xiti_click);}}
if(xiti_type==="load"){if(b.eventname==="ad_view::detail"||xiti_label==="ad_view::voir_disponibilites"){var x6="";if(xiti_label==="ad_reply::telephone::voir_le_numero"||xiti_label==="ad_reply::telephone::appeler_le_vendeur"){x6="ad_reply_phone";}
if(xiti_label==="ad_reply::telephone::envoyer_sms"){x6="ad_reply_sms";}
if(xiti_label==="ad_reply::email::demander_adresse"){x6="ad_reply_email";}
if(xiti_label==="ad_view::gerer_annonce::modifier"){x6="ad_action_modify";}
if(xiti_label==="ad_view::gerer_annonce::supprimer"){x6="ad_action_deletion";}
if(xiti_label==="ad_view::gerer_annonce::mettre_en_avant"){x6="ad_action_hightlight";}
if(xiti_label==="ad_view::gerer_annonce::remonter_en_tete_de_liste"){x6="ad_action_bump";}
var f="&f1="+
b.listid+
"&f2="+
"!!pending_adid!!"+
"&f3="+
b.titre+
"&f4="+
b.cat_id+
"&f5="+
b.subcat_id+
"&f6="+
b.region+
"&f7="+
b.departement+
"&f8="+
b.city+
"&f9="+
b.ad_type+
"&f10="+
b.prix+
"&f11="+
b.nbphoto+
"&f12="+
b.options+
"&f13="+
b.store_id_annonceur+
"&f14="+
b.store_id+
"&f15="+
"!!pending_creationdate!!"+
"&f16="+
b.publish_date+
"&f17="+
b.last_update_date+
"&f18="+
b.offres+
"&f19="+
b.boutique_id;xiti_label+=f;}
var x="&x1=web_responsive-"+
(b.device!=undefined?b.device:"")+
"&x2="+
(b.displaytype!=undefined?b.displaytype:"")+
"&x3="+
(b.pagetype!=undefined?b.pagetype:"")+
"&x4="+
(b.eventname!=undefined?b.eventname:"")+
"&x6="+
(x6!=undefined?x6:"");if(b.eventname==="ad_view::detail"||xiti_label==="ad_view::voir_disponibilites"){x+="&x7="+
(b.listid!=undefined?b.listid:"")+
"&x9="+
(b.cat_id!=undefined?b.cat_id:"")+
"&x10="+
(b.subcat_id!=undefined?b.subcat_id:"")+
"&x11="+
(b.region!=undefined?b.region:"")+
"&x12="+
(b.departement!=undefined?b.departement:"")+
"&x13="+
(b.ad_type!=undefined?b.ad_type:"")+
"&x14="+
(b.options!=undefined?b.options:"")+
"&x15="+
(b.store_id_annonceur!=undefined?b.store_id_annonceur:"")+
"&x16="+
(b.offres!=undefined?b.offres:"")+
"&x17="+
(b.publish_date!=undefined?b.publish_date:"")+
"&x18="+
(b.last_update_date!=undefined?b.last_update_date:"")+
"&x20="+
(b.city!=undefined?b.city:"")+
"&x21="+
(b.boutique_id!=undefined?b.boutique_id:"");}
xiti_label+=x;var stc="&stc="+
encodeURIComponent('{"device":"'+b.displaytype+'"}');xiti_label+=stc;if(data_info.event_name=="mes_annonces::mes_annonces_sauvegardees"&&(utag_data.eventname=="mes_annonces::recherches_automatiques::ad_search_consultation"||utag_data.eventname=="mes_annonces::recherches_automatiques"||utag_data.eventname=="mes_annonces::mes_annonces_en_ligne::formulaire")){if(utag_data.store_id==undefined||utag_data.store_id==""){var xt_ati="PUB-[mes_annonces::mes_annonces_sauvegardees]";if(xiti_label!=null){xiti_label+="&ati="+xt_ati;}else{xiti_label="&ati="+xt_ati;}}}
return pushEvent(this,"F",xiti_s2,xiti_label);}
if(xiti_type==="publisher_click"){var campaign=data_info.campaign;var creation=data_info.creation;var variant=data_info.variant;return xt_adc(this,'PUB-['+campaign+']-['+creation+']-['+variant+']')}
if(xiti_type==="publisher_impression"){var campaign=data_info.campaign;var creation=data_info.creation;var variant=data_info.variant;return xt_adi('PUB-['+campaign+']-['+creation+']-['+variant+']')}};var onTrackableClick=function(){return doTrackXiti.call(this);};if(typeof $!==undefined){$(".trackable").on("click",onTrackableClick);}
}};utag.o[loader].loader.LOAD(id);})("27","schibsted.leboncoin-responsive");}catch(error){utag.DB(error);}
