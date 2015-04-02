(function(key){
    this.$mailflow = {key: key};
    var new_script  = document.createElement("script");
    new_script.type = "text/javascript";
    new_script.src = "//cdn.mailflow.com/mailflow.min.js";
    document.getElementsByTagName("head")[0].appendChild(new_script);
})('PUBLIC_KEY')
