
function _(a){  //select by id
    return document.getElementById(a)
}
function string_bw__word(string, w1, w2){
    return string.split(w1).pop().split(w2)[0];
}
var pages=[];
var current_page="";
var iattributes=[];
var page_loaded=[];
var tmp_id="itmp_"+Math.random().toString(36).substring(7);
function change_page() {
    if(pages.includes(location.hash.substr(2)) || location.hash=="" || location.hash=="#!"){
        requested_page=location.hash.substr(2);
        if(current_page!="" && current_page!="#!"){
            _(current_page.substr(2)).style.display="none";
        }
        if(location.hash=="" || location.hash=="#!"){        
            location.hash="#!"+default_page;
        }else if(pages.includes(requested_page)){
            _(requested_page).style.display="block";
        }
        if(iattributes[pages.indexOf(requested_page)]!=null){
            irouter(iattributes[pages.indexOf(requested_page)],requested_page)
        }
        current_page="#!"+requested_page;
    }
   window.onhashchange = change_page;
}
function irouter(arg,insert_into){
    prop=JSON.parse(arg);
    insert_into=(!('insert-into' in prop))?insert_into:prop['insert-into'];
    if(!page_loaded.includes(insert_into)||(page_loaded.includes(insert_into)&&prop['cache']=='false')){
        var request_method=('get' in prop)?"GET":('post' in prop)?"POST":"other"
        var loading_screen=('loading-screen' in prop)?_(prop['loading-screen']).innerHTML:"Loading..";
        _(insert_into).innerHTML=loading_screen;
        console.log(request_method)
        if(request_method!="other"){
            irequest(prop[request_method.toLowerCase()],request_method)
            .then(function(data) {
                _(insert_into).innerHTML=data
                page_loaded.push(insert_into)
            })
            .catch(error => console.error(error));
        }
    }
}
function irequest(url = '',method, data) {
// Default options are marked with *
    return fetch(url, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'	
        },
        redirect: 'follow', // manual, *follow, error
        referrer: 'no-referrer', // no-referrer, *client
        body: data, // body data type must match "Content-Type" header
    })
    .then(response => response.text()); // parses JSON response into native JavaScript objects 
}
function init_irouter() {
    var ipages = document.getElementsByClassName('ipage');
    for (var i=0; i<ipages.length; i++){
        ipages[i].style.display="none";
        pages[i]=ipages[i].id
        iattributes[i]=ipages[i].getAttribute("irouter")
        //alert()
    }
    var iloading_screens= document.getElementsByClassName('iloading-screen');
    for (var i=0; i<iloading_screens.length; i++){
        iloading_screens[i].style.display="none";
    }
    default_page=(document.getElementsByClassName('ipage-default')[0]===undefined)?null:document.getElementsByClassName('ipage-default')[0].id //open page if ther is no hash in url
    var div = document.createElement("DIV");
    div.id=tmp_id
    document.body.appendChild(div);
    change_page();
}
document.addEventListener("DOMContentLoaded", init_irouter);



