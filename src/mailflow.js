//version 1.0

var $mailflow = (function(){
  var j = jQuery.noConflict();

  var apiKey = function () {
    var key = object.key
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
    data['key'] = apiKey();

    var object;
    if (method == 'get') {
      object = j.param(data);
    } else {
      object = JSON.stringify(data);
    }
    
    var _r = j.ajax({
      method: method,
      url: url(location),
      data: object,
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

  var object = {
    key: $mailflow.key || null,
    options: {}
  };

  object.contacts = function (email, createContact) {
    var data = {email: email, create_contact: false};

    return {
      tag: function (tags, populateFlow) {
        return request('post', 'tags', j.extend({}, data, {tags: parseTags(tags), populate_flow: populateFlow}));
      },
      untag: function (tags) {
        return request('delete', 'tags', j.extend({}, data, {tags: parseTags(tags)}));
      }
    }
  };

  object.setup = function (key) {
    object.key = key;
    return key;
  };

  return object;
})();
