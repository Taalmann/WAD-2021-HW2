
// Load posts using from hardcoded json source
function loadPosts() {$(function(){
  // jsonSource = "https://api.npoint.io/d6d2f9f973bc3db141eb"
  jsonSource = "./resources/json/posts.json"

  $.getJSON(jsonSource).done(
    function( json ) {
      for (post in json){
        // Select user avatar from user's ID or fallback to default
        if (json[post].user) {
          var avatar = "resources/img/avatar_user_"+json[post].user+".jpg"
        } else {
          var avatar = "resources/img/default_avatar.png"
        }

        // Chech if post has image
        var photoDiv = ''
        if (json[post].photo) {
          photoDiv = '<div class="post_photo">' +
            '<img src="' + json[post].photo + '" class="photo" alt="Kassari sääretirp">' +
          '</div>'
        } 

        // Construct post's HTML and add to #post-body section
        $(
          '<div class="post">' +
            // Post header, avatar + timestamp
            '<div class="post_header">' +
              '<img src='+avatar+' class="avatar" alt="User avatar"></img>' +
              '<p>'+json[post].date+'</p>' +
            '</div>' +
            // Photo field if exists
            photoDiv +
            // Post text content
            '<p>'+
              json[post].text +
            '</p>' +
            // Post footer
            '<div class="post_footer">' +
              '<img src="resources/img/thumb_up.png" class="thumb_up" alt="Thumb up">' +
            '</div>' +
          '</div>'
        ).appendTo("#post-body")
      }
    }
  )
  })
}