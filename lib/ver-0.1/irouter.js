function _(a){  //select by id
    return document.getElementById(a)
}
function string_bw__word(string, w1, w2){
    return string.split(w1).pop().split(w2)[0];
}
var pages=[];
var current_page="";
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
        current_page="#!"+requested_page;
    }
   window.onhashchange = change_page;
}
function init_irouter() {
    var ipages = document.getElementsByClassName('ipage');
    for (var i=0; i<ipages.length; i++){
        ipages[i].style.display="none";
        pages[i]=ipages[i].id
    }
    
    default_page=(document.getElementsByClassName('ipage-default')[0]===undefined)?null:document.getElementsByClassName('ipage-default')[0].id //open page if ther is no hash in url
    change_page();
}
document.addEventListener("DOMContentLoaded", init_irouter);
