subcategories={
    'Anchor/Emcee':['Emcee', 'Radio Jockey', 'Voice Over Artist', 'Video Jockey'],
    'Comedian':['Stand-Up', 'Reality Show', 'Mimicry', 'Impersonators'],
    'Celebrity':['Film Star','Pageant Winner','Sports Celebrity', 'TV Personality','Singer','Dancer'],
    'Live Band':['Bollywood', 'Punjabi', 'English', 'Sufi', 'Rock', 'Jazz', 'Fusion'],
    'Singer':['Acoustic Singer', 'Bollywood', 'Classical', 'English', 'Retro', 'Ghazal', 'Hindi', 'Indian Folk', 'Punjabi', 'Karaoke', 'Qawwali', 'Rapper', 'Religious']
}
$('#loading').hide();
$('#body').show();

function trackEventz(eventAction, evntCategory, eventLabel, eventValue) {
    gtag('event', 'click', {'event_category': evntCategory, 'event_label': email, 'value': eventValue});
}
qualData={}
window.location.hash = 'category';

$(window).on('hashchange', function () {
    // console.log('hashchange');
    // console.log(window.location.hash);
    switch(window.location.hash) {
        case '#category': 
            // $(window).scrollTop($("#body").offset().top);
            $('#text-title').text('What are you looking for?');
            $('#text-subtitle').text('Get the Best Quotes in the Industry');
            $('#fields-category').show();
            $('#fields-event').hide();
            $('#fields-meta').hide();
            $('#fields-user').hide();
            break;

        case '#event': 
            // $(window).scrollTop($("#body").offset().top);
            if (artist == null)
                $('#text-title').text(categoryVerbose + ' needed for?');
            else
                $('#text-title').text(artist + ' needed for?');

            $('#fields-category').hide();
            $('#fields-event').show();
            $('#fields-meta').hide();
            $('#fields-user').hide();
            break;

        case '#details': 
            // $(window).scrollTop($("#body").offset().top);
            if (artist == null)
                $('#text-title').text(categoryVerbose + ' for ' + eventVerbose + ' Event');
            else
                $('#text-title').text(artist + ' for ' + eventVerbose + ' Event');

            $('#fields-category').hide();
            $('#fields-event').hide();
            $('#fields-meta').show();
            $('#fields-user').hide();
            break;

        case '#contact': 
            // $(window).scrollTop($("#body").offset().top);
            $('#fields-category').hide();
            $('#fields-event').hide();
            $('#fields-meta').hide();
            $('#fields-user').show();
            break;

        default: break;
    }

});

$('#button-continue-meta').prop('disabled', true);
$('#button-continue-meta').css('background-color', '#d8cfb9');

$(".input-meta").on('input', function() {
  if ($('#input-venue').val() == "" || 
      $('#input-date').val() == "" || 
      $('#input-gathering').val() == "" || 
      $('#input-budget').val() == "" 
      ) {
        $('#button-continue-meta').prop('disabled', true);
        $('#button-continue-meta').css('background-color', '#d8cfb9');
    }
    else {
        $('#button-continue-meta').prop('disabled', false); 
        $('#button-continue-meta').css('background-color', '#fdc844');  
    }
});


// $('#button-submit').prop('disabled', true);
// $('#button-submit .content').css('background', '#b3bdb7');

var validEmail = false;
var validUser = false;
var validPhone = false;

$('#input-name')
.on('validation', function(evt, valid) {
    console.log('user is ' + (valid ? 'VALID' : 'NOT VALID'));
    validUser = valid;
    checkValidationUser();
});
 $('#input-email')
.on('validation', function(evt, valid) {
    console.log('email is ' + (valid ? 'VALID' : 'NOT VALID'));
    validEmail = valid;
    checkValidationUser();
});
 $('#input-phone')
.on('validation', function(evt, valid) {
    console.log('phone is ' + (valid ? 'VALID' : 'NOT VALID'));
    validPhone = valid;
    checkValidationUser();
});


if(localStorage.getItem("clientname")) {
    console.log('clientname set from localStorage');
    $('#input-name').val(localStorage.getItem("clientname"));
    validUser = true;
    checkValidationUser();
} else {
    validUser = false;
    checkValidationUser();
}

if(localStorage.getItem("clientemail")) {
    console.log('clientemail set from localStorage');
    $('#input-email').val(localStorage.getItem("clientemail"));
    validEmail = true;
    checkValidationUser();
}

if(localStorage.getItem("clientphone")) {
    console.log('clientphone set from localStorage');
    $('#input-phone').val(localStorage.getItem("clientphone"));
    validPhone = true;
    checkValidationUser();
}


function checkValidationUser() {
    // if (validEmail && validPhone && validUser) {
    //     console.log('user valid - button ON');
    //     $('#button-submit').prop('disabled', false);
    //     $('#button-submit .content').css('background', '#1d9650');
    // } else {
    //     console.log('user invalid - button OFF');
    //     $('#button-submit').prop('disabled', true);
    //     $('#button-submit .content').css('background', '#b3bdb7');
    // }
}

// $(".input-user").on('input', function() {
//   if ($('#input-name').val() != "" || 
//       $('#input-email').val() != "" || 
//       $('#input-phone').val() != "") {
        
//             if(validEmail && validPhone) {
//                 $('#button-submit').prop('disabled', false);
//                 $('#button-submit .content').css('background', '#1d9650');
//             }
//         }
//         else {        
//             $('#button-submit').prop('disabled', true);
//             $('#button-submit .content').css('background', '#b3bdb7');
//         }
// });




$('#get-quote').show();
$('#fields-category').show();
$('#fields-event').hide();
$('#fields-meta').hide();
$('#fields-user').hide();
$('#fields-thanks').hide();
$('#after-get-quote').hide();
$('#fields-audience').hide();
$('#fields-thanks-last').hide();


$.urlParam = function(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
}

var artist = "",
    artistID = "".
    artistCategory = "",
    artistThumb = "",
    category = "",
    categoryVerbose = "",
    event = "",
    eventVerbose = "",
    venue = "",
    date = "",
    gathering = "",
    budget = "",
    name = "",
    email = "",
    phone = "",
    info = "",
    gender = "",
    genderVerbose = "",
    type="";

try {
    artist = $.urlParam('an');
    console.log(artist);

    if (artist != null) {
        console.log('if');
        $('#fields-category').hide();
        $('#snippet-artist-name').text(artist);
        $('#fields-event').show();
        $('#snippet-artist').show();
        $('#button-previous-event').hide();
        $('#snippet-artist-title').text(artist);
        $('#text-title').text(artist + ' for which Event?');
        $('#text-subtitle').text('Select your event type');
    }

} catch (err) {
    artist = null;
    // console.log(err);
}

try {
    artistID = $.urlParam('ai');
    console.log(artistID);

    if (artistID != null) {
       
    }

} catch (err) {
    artistID = null;
    // console.log(err);
}

try {
    artistCategory = $.urlParam('ac');
    console.log(artistCategory);

    if (artistCategory != null) {
       $('#snippet-artist-category').text(artistCategory);
    }

} catch (err) {
    artistCategory = null;
    // console.log(err);
}

try {
   artistThumb = $.urlParam('at');
    console.log(artistThumb);

    if (artistThumb != null && artistThumb != "") {
       $('#snippet-artist-thumb').attr('src', artistThumb);
    }

} catch (err) {
    artistThumb = null;
    // console.log(err);
}


try {
    email = $.urlParam('email');
    $('#input-email').val(email);

} catch (err) {
}

try {
    type = $.urlParam('type');

    let axiosConfig = {
      headers: {
           'content-type': 'application/json'
      }
    };

    var jsondata = {
        'email': email,
        'type': type                    
    };

    axios.post('https://us-central1-wired-compass-230106.cloudfunctions.net/pyr_firestore', 
            jsondata, axiosConfig)
    .then(function(responseDB){
        console.log('email saved successfully');                 
    }).catch(error=>{
        console.log('email save failed');
    }); 


    FS.identify(email, {
        displayName: email,
      email: email
    });
} catch (err) {
    type = "me";
}


// function trackEventz(eventAction = 'click', eventCategory, eventLabel = email, eventValue = 0) {
//     gtag('event', eventAction, {'event_category': 'pyr-' + eventCategory, 'event_label': email, 'value': eventValue});
// }


$('#fields-category .thumbnail a').click(function() {
    category = $(this).attr('data-value');
    categoryVerbose = $(this).find('p').text();
    console.log(category, categoryVerbose);

    $(window).scrollTop($("#body").offset().top);
    $('#fields-category').hide();
    $('#fields-event').show();
    $('#text-title').text(categoryVerbose + ' needed for which Event?');
    $('#text-subtitle').text('Select your event type');

    window.location.hash = 'event';
});

$('#fields-event .thumbnail a').click(function() {
    event = $(this).attr('data-value');
    eventVerbose = $(this).find('p').text();
    console.log(event, eventVerbose);

    $(window).scrollTop($("#body").offset().top);
    $('#fields-event').hide();
    $('#fields-meta').show();
    if (artist == null)
        $('#text-title').text(categoryVerbose + ' for ' + eventVerbose + ' Event');
    else
        $('#text-title').text(artist + ' for ' + eventVerbose + ' Event');

    $('#text-subtitle').text('Fill in your event details');

    window.location.hash = 'details';

    $('#button-continue-meta').prop('disabled', true);
    $('#button-continue-meta').css('background-color', '#d8cfb9');
});

$('#button-continue-meta').click(function() {
    date = $('#input-date').val();
    venue = $('#input-venue').val();
    gathering = $('#input-gathering').val();
    budget = $('#input-budget').val();

    $(window).scrollTop($("#body").offset().top);
    $('#fields-meta').hide();
    $('#fields-user').show();
    if (artist == null)
        $('#text-title').text(categoryVerbose + ' for ' + eventVerbose + ' Event on ' + date);
    else
        $('#text-title').text(artist + ' for ' + eventVerbose + ' Event on ' + date);
    $('#text-subtitle').text('Amazing options to choose from on the next screen!');

    window.location.hash = 'contact';

    // $('#button-submit').prop('disabled', true);
    // $('#button-submit .content').css('background', '#b3bdb7');

});

// $('#button-submit').click(function() {
//  $('#fields-user').hide();
//  $('#fields-thanks').show();
// });

$('#button-previous-event').click(function() {
    $(window).scrollTop($("#body").offset().top);
    $('#fields-event').hide();
    $('#fields-category').show();
    $('#text-title').text('What are you looking for?');
    $('#text-subtitle').text('Get the Best Quotes in the Industry');
});

var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

var $htmlOrBody = $('html, body'), // scrollTop works on <body> for some browsers, <html> for others
    scrollTopPadding = 3;

$('#input-venue').focus(function() {
    // get textarea's offset top position
    var textareaTop = $(this).offset().top;
    // scroll to the textarea
    if(isMobile)
        $htmlOrBody.scrollTop(textareaTop - scrollTopPadding);
});


$(".input__field--hideo").keyup(function () {
  $(this).next(".input__field--hideo").focus();
});

$('#button-previous-meta').click(function() {
    $(window).scrollTop($("#body").offset().top);
    $('#fields-meta').hide();
    $('#fields-event').show();
    if (artist == null)
        $('#text-title').text(categoryVerbose + ' needed for?');
    else
        $('#text-title').text(artist + ' needed for?');
    $('#text-subtitle').text('Select your event type');
});

$('#button-previous-user').click(function() {
    $(window).scrollTop($("#body").offset().top);
    $('#fields-user').hide();
    $('#fields-meta').show();
    if (artist == null)
        $('#text-title').text(categoryVerbose + ' for ' + eventVerbose + ' Event');
    else
        $('#text-title').text(artist + ' for ' + eventVerbose + ' Event');

    $('#text-subtitle').text('Amazing options to choose from on the next screen!');
});


[].slice.call(document.querySelectorAll('button.progress-button')).forEach(function(bttn) {
    new ProgressButton(bttn, {
        callback: function(instance) {
            $(window).scrollTop($("#body").offset().top);
            $('#get-quote').hide();
            $('#after-get-quote').show();
            $('#text-title-after').text('Is the Event Date Confirmed?'); 
            $('#text-subtitle-after').text('Thanks! Get a faster response by providing us more information');
             /*var progress = 0,

               interval = setInterval(function() {
                    progress = Math.min(progress + Math.random() * 0.1, 1);
                    instance._setProgress(progress);

                    

                    if (progress === 1) {
                        instance._stop(1);
                        clearInterval(interval);

                        name = $('#input-name').val();
                        email = $('#input-email').val();
                        phone = $('#input-phone').val();
                        info = $('#input-info').val();

                        let axiosConfig = {
                          headers: {
                               'content-type': 'application/json'
                          }
                        };

                        var jsondata = {
                            //'artist': artist!=null? artist : "", 
                            //'artistid': artistID!=null ? artistID : "",
                            'category': categoryVerbose, 
                            'event': eventVerbose, 
                            'venue': venue, 
                            'date': date, 
                            //'gathering': gathering, 
                            'budget': budget, 
                            'name': name, 
                            'email': email, 
                            'phone': phone, 
                            'info': info,
                            'type': type                      
                        };
                        
                        console.log(jsondata);

                        window.localStorage.setItem("clientname", name);
                        window.localStorage.setItem("clientemail", email);
                        window.localStorage.setItem("clientphone", phone);

                        


                        /*axios.post('https://us-central1-wired-compass-230106.cloudfunctions.net/pyr_firestore', 
                                jsondata, axiosConfig)
                        .then(function(responseDB){
                            console.log('Firestore post saved successfully');   
                            
                            FS.identify(email, {
                              email: email,
                              displayName: name
                            });

                            $(window).scrollTop($("#body").offset().top);
                            $('#fields-user').hide();
                            $('#fields-thanks').show();

                            $('#get-quote').hide();
                            $('#loading').show();

                            /*if(artist) {
                                window.location.replace('/' + artist);
                            }
                            else {
                                    switch(categoryVerbose) {
                                        case 'Live Band': 
                                            window.location.replace('/book-band-online/');
                                            break;
                                        case 'Singer': 
                                            window.location.replace('/book-singer-online/');
                                            break;
                                        case 'Celebrity': 
                                            window.location.replace('/book-celebrity-online/');
                                            break;
                                        case 'Comedian': 
                                            window.location.replace('/book-comedian-online/');
                                            break;
                                        case 'Anchor/Emcee': 
                                            window.location.replace('/book-anchor-online/');
                                            break;
                                        case 'DJ': 
                                            window.location.replace('/book-dj-online/');
                                            break;
                                        case 'Dancer': 
                                            window.location.replace('/book-dancer-online/');
                                            break;
                                        case 'Instrumentalist': 
                                            window.location.replace('/book-instrumentalist-online/');
                                            break;
                                        case 'Magician': 
                                            window.location.replace('/book-magician-online/');
                                            break;
                                        case 'Makeup Artist': 
                                            window.location.replace('/book-makeup-artist-online/');
                                            break;
                                        case 'Model': 
                                            window.location.replace('/book-model-online/');
                                            break;
                                        case 'Photographer': 
                                            window.location.replace('/book-photographer-online/');
                                            break;
                                        case 'Speaker': 
                                            window.location.replace('/book-speaker-online/');
                                            break;
                                        case 'Variety Artist': 
                                            window.location.replace('/book-variety-artist-online/');
                                            break;
                                        default: 
                                            window.location.replace('/browse/');
                                            break;
                                }
                            }                          
                            
                            $('#after-get-quote').show();
                            $('#fields-thanks-last').show();

                            if(artist == null){
                                $('#fields-gender').show();
                                $('#fields-audience').hide();
                                $('#text-title-after').text('Select the gender of the ' + categoryVerbose); 
                                $('#text-subtitle-after').text('Thanks! Get a faster response by providing us more information');
                            }
                            else {
                                $('#fields-gender').hide();
                                $('#fields-audience').show();
                                $('#text-title-after').text(artist + ' will be performing for what age group?'); 
                                $('#text-subtitle-after').text('Thanks! Get a faster response by providing us more information');
                            }               
                        }).catch(error=>{
                            console.log(error);
                            alert('There was an error while submitting your request. Please refresh this page and try again.')
                        }); 
                    }
                }, 200);*/
        }
    });
});


// $('#fields-gender .thumbnail a').click(function() {
//     gender = $(this).attr('data-value');
//     genderVerbose = $(this).find('p').text();
//     console.log(gender, genderVerbose);

//     $(window).scrollTop($("#body").offset().top);
//     $('#fields-gender').hide();
//     $('#fields-audience').show();
//     if (artist == null)
//         $('#text-title-after').text(genderVerbose + ' ' + categoryVerbose + ' for which age group?');
//     else
//         $('#text-title-after').text(artist + ' for which age group?');

//     $('#text-subtitle-after').text('');
// });

$('#fields-audience .thumbnail a').click(function() {
    // gender = $(this).attr('data-value');
    // genderVerbose = $(this).find('p').text();
    // console.log(gender, genderVerbose);

    $(window).scrollTop($("#body").offset().top);
    $('#fields-audience').hide();
    $('#fields-thanks-last').show();
    if (artist == null)
        $('#text-title-after').text("We'll look for " + genderVerbose + ' ' + categoryVerbose + 's for you');
    else
        $('#text-title-after').text("We'll contact " + artist + ' and get back to you!');

    $('#text-subtitle-after').text('Awesome suggestions are on their way to you');
});
$('#fields-date-confirmed .thumbnail a').click(function() {
    $('#fields-date-confirmed').hide();
    $('#text-subtitle-after').text('');
    if('CampusCharityConcertRestaurant'.includes(eventVerbose)){
        $('#fields-ticket').show()
        $('#text-title-after').text('What type of Event is it?')
    }
    else{
        $('#fields-event-info').show()
        $('#text-title-after').text('Event Details')
    }
});

function cont(fade, text, show) {
    $(fade).fadeTo('slow', 0.35, function() {
        $('#text-title-after').text(text)
        $(show).css('visibility', 'visible')
    })
}

function hide_show(hide, show, text) {
    $(hide).hide()
    $(show).show()
    $('#text-title-after').text(text)
}

function only_digit(a) {
    return $(a).val().match(/^\d*$/g) 
}

function populate() {
    if(categoryVerbose=='Celebrity' && $(window).width()<1000 && $(window).width()>500)  {
        console.log('In Celebrity and tablet');
        [['Film Star','Pageant Winner','Sports Celebrity'],['TV Personality','Singer','Dancer']].forEach(function(a) {
       $('#fields-subcategory').prepend($(`<div class=row>
        <div class="col-md-3 col-sm-4 col-xs-6">
            <div class="thumbnail">
              <a href="" onclick="gtag('event', 'click', {'event_category': 'pyr-2', 'event_label': 'event-wedding'});return false;" data-value="event-wedding">
                <img src="img/event-icon/wedding.jpg" alt="" style="width:100%">
                <div class="caption">
                  <p class="text-center">${a[0]}</p>
                </div>
              </a>
            </div>
        </div>
         <div class="col-md-3 col-sm-4 col-xs-6">
            <div class="thumbnail">
              <a href="" onclick="gtag('event', 'click', {'event_category': 'pyr-2', 'event_label': 'event-wedding'});return false;" data-value="event-wedding">
                <img src="img/event-icon/wedding.jpg" alt="" style="width:100%">
                <div class="caption">
                  <p class="text-center">${a[1]}</p>
                </div>
              </a>
            </div>
        </div>
         <div class="col-md-3 col-sm-4 col-xs-6">
            <div class="thumbnail">
              <a href="" onclick="gtag('event', 'click', {'event_category': 'pyr-2', 'event_label': 'event-wedding'});return false;" data-value="event-wedding">
                <img src="img/event-icon/wedding.jpg" alt="" style="width:100%">
                <div class="caption">
                  <p class="text-center">${a[2]}</p>
                </div>
              </a>
            </div>
        </div>
        </div>`))})
        return
    }
    if(subcategories[categoryVerbose].length<5)
        bootWidth=3
    else
        bootWidth=2
    if(subcategories[categoryVerbose].length<7)
        ipad=4
    else
        ipad=3
    subcategories[categoryVerbose].forEach(function(a) {
       $('#fields-subcategory .row:first').prepend(`<div class="col-md-`+bootWidth+` col-sm-`+ipad+` col-xs-6">
            <div class="thumbnail">
              <a href="" onclick="gtag('event', 'click', {'event_category': 'pyr-2', 'event_label': 'event-wedding'});return false;" data-value="event-wedding">
                <img src="img/event-icon/wedding.jpg" alt="" style="width:100%">
                <div class="caption">
                  <p class="text-center">${a}</p>
                </div>
              </a>
            </div>
        </div>`)})
}

$('#fields-ticket .thumbnail a:first').click( function(){ hide_show('#fields-ticket', '#fields-ticket-price', 'Ticket Price')});
$('#fields-ticket .thumbnail a:last').click( function(){ hide_show('#fields-ticket', '#fields-event-info', 'Event Details')});
$('#fields-ticket-price .thumbnail a').click( function(){ hide_show('#fields-ticket-price', '#fields-event-info', 'Event Details')});
$('#event-button-continue').click( function(){
    if($('#fields-event-info .input__field').toArray().every(only_digit)){
        hide_show('#fields-event-info', '#fields-looking', 'Do you have a specific artist name in your mind?')
        populate()
    }
    else
        $('#fields-event-info .validation-error').text('Please enter only digits')
});
$('#fields-looking .thumbnail a:first').click( function(){ cont('#fields-looking .thumbnail', "Specify the artist's name which you require", '#looking-for')});
$('#fields-looking .thumbnail a:last').click( function(){ hide_show('#fields-looking','#fields-gender', 'Gender preference for '+categoryVerbose)});
$('#looking-button-continue').click( function(){ hide_show('#fields-looking', '#fields-more', 'Do you want more artist options in your budget?')});
$('#fields-more .thumbnail a:first').click( function(){ hide_show('#fields-more', '#fields-gender', 'Gender preference for '+categoryVerbose)});
$('#fields-more .thumbnail a:last').click( function(){ hide_show('#fields-more', '#fields-flexible', 'Is your budget '+budget+' flexible?')});
$('#fields-gender .thumbnail a').click( function(){ hide_show('#fields-gender', '#fields-language', 'Language preference for '+categoryVerbose)});
$('#fields-language :input').click( function(){ 
    if(subcategories[categoryVerbose])
        hide_show('#fields-language', '#fields-subcategory', 'What type of '+categoryVerbose+' do you need?')
    else
        hide_show('#fields-language', '#fields-flexible', 'Is your budget '+budget+' flexible?')
});
$('#fields-subcategory :input').click(function(){
    if(categoryVerbose=='Anchor/Emcee'){
        ['Team Building', 'Perform a Game', 'Engage Audience'].forEach(function(a) {
            $('#fields-purpose .row:first').append(`<div class="col-md-4 col-sm-4 col-xs-6">
            <div class="thumbnail">
              <a href="" onclick="gtag('event', 'click', {'event_category': 'pyr-2', 'event_label': 'event-wedding'});return false;" data-value="event-wedding">
                <img src="img/event-icon/wedding.jpg" alt="" style="width:100%">
                <div class="caption">
                  <p class="text-center">${a}</p>
                </div>
              </a>
            </div>
        </div>`)})
        hide_show('#fields-subcategory', '#fields-purpose', 'Do you require any type of activity to be conducted by the Anchor?')
    }
    else if(categoryVerbose=='Celebrity'){
        ['Performance', 'Endorsement', 'Appearance', 'Professional Hiring', 'Shoot'].forEach(function(a) {
            $('#fields-purpose .row:first').append(`<div class="col-md-2 col-sm-4 col-xs-6">
            <div class="thumbnail">
              <a href="" onclick="gtag('event', 'click', {'event_category': 'pyr-2', 'event_label': 'event-wedding'});return false;" data-value="event-wedding">
                <img src="img/event-icon/wedding.jpg" alt="" style="width:100%">
                <div class="caption">
                  <p class="text-center">${a}</p>
                </div>
              </a>
            </div>
        </div>`)})
        hide_show('#fields-subcategory', '#fields-purpose', 'What is the purpose of event you require Celebrity for?')
    }
    else if(categoryVerbose=='Comedian')
        hide_show('#fields-subcategory', '#fields-content-type', 'What type of content do you want?')
    else if(categoryVerbose=='Live Band')
        hide_show('#fields-subcategory', '#fields-performing-members', 'What are the number of performing members you require?')
    else
        hide_show('#fields-subcategory', '#fields-singer-with-band', 'Do you want a singer with band/without band?')
})
$('#fields-content-type input').click( function() {hide_show('#fields-content-type', '#fields-flexible', 'Is your budget '+budget+' flexible?')})
$('#fields-purpose input').click( function(){ hide_show('#fields-purpose', '#fields-flexible', 'Is your budget '+budget+' flexible?')});
$('#fields-performing-members input:last').click( function(){
    if($('#fields-performing-members .input__field').val().match(/^\d*$/g))
        hide_show('#fields-performing-members', '#fields-flexible', 'Is your budget '+budget+' flexible?')
    else
        $('#fields-performing-members .validation-error').text('Please enter only digits')
});
$('#fields-singer-with-band .thumbnail').click( function(){ hide_show('#fields-singer-with-band', '#fields-flexible', 'Is your budget '+budget+' flexible?')});
$('#fields-flexible .thumbnail a:first').click( function(){ cont('#fields-flexible .thumbnail', "What's your maximum budget?", '#maximum-budget')});
$('#fields-flexible .thumbnail a:last').click( function(){ hide_show('#fields-flexible', '#fields-gst', 'Is your budget inclusive of GST?')});
$('#budget-button-continue').click( function(){
    if($('#fields-flexible .input__field').val().match(/^\d*$/g))
        hide_show('#fields-flexible', '#fields-gst', 'Is your budget inclusive of GST?')
    else
        $('#fields-flexible .validation-error').text('Please enter only digits')
});
$('#fields-gst .thumbnail a').click( function(){ hide_show('#fields-gst', '#fields-tbl', 'Can you provide TBL (Travelling, Boarding, Lodging) costs for '+categoryVerbose)});
$('#fields-tbl .thumbnail a').click( function(){ hide_show('#fields-tbl', '#fields-event-organizer', 'Are you an Event organizer?')});
$('#fields-event-organizer .thumbnail a:eq(1)').click( function(){ cont('#fields-event-organizer .row:first', "Then you are....", '#fields-event-organizer .row:last')});
$('#fields-event-organizer .thumbnail a:not(:eq(1))').click( function(){ hide_show('#fields-event-organizer', "#fields-contact", 'How would you like to be contacted?')});
$('body').delegate('.thumbnail', 'click', function() {
    $(this).toggleClass('selected')
})