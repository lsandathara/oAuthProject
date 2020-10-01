$(document).ready(function(){

    var clientid ="775640995348-q4jdb2of45ug7t65hsknot4gkhthmftk.apps.googleusercontent.com" 

    var redirectURI="http://localhost/oAuthProject/uploadfile.html"

    var scope="https://www.googleapis.com/auth/drive"

    var url=""


    $("#login").click(function(){

        signIn(clientid,redirectURI,scope,url);
    
    
    })


    function signIn(clientid,redirectURI,scope,url){

        url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirectURI
        +"&prompt=consent&response_type=code&client_id="+clientid+"&scope="+scope
        +"&access_type=offline";

        window.location = url;
        
    }


});