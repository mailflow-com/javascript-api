(function(key){
    var cache = function (f, arg) {
      this.$mailflow.cache.push({fn:f,a:arg});
    }

    this.$mailflow = {
      key: key,
      cache: [],
      setup: function () {
        cache('setup', arguments);
      },
      contacts: function () {
        cache('contacts', arguments);
        return {
          tag: function () {
            cache('tag', arguments);
          },
          untag: function () {
            cache('untag', arguments);
          }
        }
      }
    }

    var new_script  = document.createElement("script");
    new_script.type = "text/javascript";
    new_script.src = "//cdn.mailflow.com/mailflow.min.js";
    document.getElementsByTagName("head")[0].appendChild(new_script);
})('PUBLIC_KEY')
