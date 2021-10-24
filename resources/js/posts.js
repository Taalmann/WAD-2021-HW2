
// Load JSON from endpoint
$(function(){
    $.getJSON("https://api.npoint.io/d6d2f9f973bc3db141eb").done(
        function( json ) {
            for (post in json){
                console.log(json[post].none)

                // Select user avatar from user's ID
                if (json[post].user === 0) {
                    var avatar = "resources/img/default_avatar.png"
                }
                else {
                    var avatar = "resources/img/avatar_user_"+json[post].user+".jpg"
                }

                // Chech if post has image
                var hasPhoto
                json[post].photo ? hasPhoto = 1 :hasPhoto = 0
                console.log(json[post].photo)

                if (hasPhoto){
                    $(
                        '<div class="post">' +
                            '<div class="post_header">' +
                            '<img src='+avatar+' class="avatar" alt="User avatar"></img>' +
                            '<p>'+json[post].date+'</p>' +
                            '</div>' +
                            '<div class="post_photo">' +
                            '<img src="' + json[post].photo + '" class="photo" alt="Kassari sääretirp">' +
                            '</div>' +
                            '<p>'+
                            json[post].text +
                            '</p>' +
                            '<div class="post_footer">' +
                            '<img src="resources/img/thumb_up.png" class="thumb_up" alt="Thumb up">' +
                            '</div>' +
                        '</div>'
                    ).appendTo("#post-body")
                } else {
                    $(
                        '<div class="post">' +
                            '<div class="post_header">' +
                            '<img src='+avatar+' class="avatar" alt="User avatar"></img>' +
                            '<p>'+json[post].date+'</p>' +
                            '</div>' +
                            '<p>'+
                            json[post].text +
                            '</p>' +
                            '<div class="post_footer">' +
                            '<img src="resources/img/thumb_up.png" class="thumb_up" alt="Thumb up">' +
                            '</div>' +
                        '</div>'
                    ).appendTo("#post-body")
                }
            }
        })
})
