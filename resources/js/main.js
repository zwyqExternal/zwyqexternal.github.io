var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function finishLoad(){
    $("body").addClass("loaded");
    $('.loader-container').fadeOut();
}

$(document).ready(async function() {
    if (!$("body").hasClass("permanent-loader")){
        if (isMobile.any()) {
            $("#site").prepend('<img class="zwyq" style="object-fit:cover; object-position:60%; height: 100vh; width: 100vw" alt="KultKlient" title="KultKlient" src="resources/images/background.png">');
            finishLoad()
        } else {
            // Replace the video element with an image element
            $("#site").prepend('<img class="zwyq" id="video" src="resources/images/zwyq.png" alt="KultKlient" title="KultKlient">');
            finishLoad();
        }
    }
});
