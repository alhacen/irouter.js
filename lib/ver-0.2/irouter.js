(function () {
    function _(a){  //select by id
        return document.getElementById(a)
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
                if(_(requested_page).getAttribute("irouter")){
                irouter(_(requested_page).getAttribute("irouter"),requested_page)
            }
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
    function irouter(arg,insert_into){
        prop=JSON.parse(arg);
        insert_into=(!('insert-into' in prop))?insert_into:prop['insert-into'];
        if(!page_loaded.includes(insert_into)||(page_loaded.includes(insert_into)&&prop['cache']=='false')){
            var request_method=('get' in prop)?"GET":('post' in prop)?"POST":"other"
            var loading_screen=('loading-screen' in prop)?_(prop['loading-screen']).innerHTML:"Loading..";
            var request_parameter="";
            _(insert_into).innerHTML=loading_screen;
            if(request_method!="other"){
                var client = new HttpClient();
                client.irequest(prop[request_method.toLowerCase()],request_method,request_parameter, function(response) {
                    _(insert_into).innerHTML=response
                    page_loaded.push(insert_into)
                });
            }
        }
    }
    var HttpClient = function() {
        this.irequest = function(aUrl,method="GET", paramater="" ,aCallback) {
            var anHttpRequest = new XMLHttpRequest();
            anHttpRequest.onreadystatechange = function() { 
                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                    aCallback(anHttpRequest.responseText);
            }
            anHttpRequest.open( method, aUrl, true );
            if(method!="GET"){
                anHttpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");            
            }else{
                paramater=null
            }
            anHttpRequest.send(paramater);
        }
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
}())
