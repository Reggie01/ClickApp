'use strict';

/* (function() {
  var profileId = document.querySelector("#profile-id") || null;
  var profileUsername = document.querySelector("#profile-username") || null;
  var profileRepos = document.querySelector("#profile-repos") || null;
  var displayName = document.querySelector("#display-name");
  var apiUrl = appUrl + "/api/:id";
  
  function updateHtmlElements(data, element, userProperty) {
     element.innerHTML = data[userProperty];
  }
  
  ajaxFunctions.ready(ajaxFunctions.ajaxRequest("GET", apiUrl, function(data) {
    var userObject = JSON.parse(data);
    //console.log(userObject);
    updateHtmlElements( userObject, displayName, 'displayName' );
    
    if( profileId !== null ) {
       updateHtmlElements( userObject, profileId, 'id' );
    }
    
    if( profileUsername !== null ) {
       updateHtmlElements( userObject, profileUsername, 'username' );
    }
    
    if( profileRepos !== null ) {
       updateHtmlElements( userObject, profileRepos, 'publicRepos' );
    }
  }));
})(); */