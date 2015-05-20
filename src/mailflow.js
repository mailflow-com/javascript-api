//version 1.2
var $mailflow = (function(){
  var j = jQuery.noConflict();

  var apiKey = function () {
    var key = mailflow.key
    if (key) {
      return key;
    } else {
      throw 'Please set your API key.';
    }
  };

  var url = function (location) {
    return '@@host/api/' + location;
  };

  var _success = function () {};

  var _error = function (error) {
    switch (error.status) {
      case 401: 
        throw "Unauthorized request, check your API key."
        break;
      case 404:
        throw "Contact not found, check email address or set contact create to true."
    }
  };

  var request = function (method, location, data, success, error) {
    data = data || {};
    data['api_key'] = apiKey();

    var requestBody;
    if (method == 'get') {
      requestBody = j.param(data);
    } else {
      requestBody = JSON.stringify(data);
    }
    
    var _r = j.ajax({
      method: method,
      url: url(location),
      data: requestBody,
      crossDomain: true,
      contentType: 'application/json'
    });
    _r.done(success || _success);
    _r.fail(error || _error);
    return _r;
  };

  var parseTags = function (tags) {
    tags = (tags instanceof Array) ? tags : [tags];
    var results = [];
    tags.forEach(function (item) {
      results.push({name: item});
    });
    return results;
  };  

  var key = (this.$mailflow) ? this.$mailflow.key || null : null;
  var cache = (this.$mailflow) ? this.$mailflow.cache || [] : [];

  var mailflow = {
    key: key,
    cache: cache,
    options: {}
  };

  mailflow.catchUp = function () {
    this.cache.forEach(function(call, index){
      if (call.fn == 'contacts') {
        var next = this.cache[index + 1];
        this[call.fn](call.a[0], call.a[1])[next.fn](next.a[0], next.a[1]);
        this.cache.splice(index, 2);
      }
    }.bind(this));
  };

  mailflow.contacts = function (email) {
    var data = {email: email};

    return {
      tag: function (tags, trigger) {
        return request('post', 'tags', j.extend({}, data, {tags: parseTags(tags), trigger: trigger}));
      },
      untag: function (tags) {
        return request('delete', 'tags', j.extend({}, data, {tags: parseTags(tags)}));
      }
    }
  };

  mailflow.setup = function (key) {
    mailflow.key = key;
    return key;
  };

  return mailflow;
})();
$mailflow.catchUp();
