import $ from 'jquery'
// $(window).resize(function() {
//     if ($(window).width() <= 700) {
//         $('nav').css('display', 'none'), $('.menu').css('display', 'block');
//         $('.menu').click(() => {
//             $('.layer-model').css('display', 'block')
//         })
//         $('.close').click(() => {
//             $('.layer-model').css('display', 'none')
//         })
//     } else {
//         $('nav').css('display', 'block'), $('.menu').css('display', 'none');
//     }
// });

//  
// function checkWidth() {
//     if ($(window).width() <= 700) {
//         $('nav').css('display', 'none');
//         $('.menu').css('display', 'block');
//         $('.menu').off('click').on('click', () => {
//             $('.layer-model').css('display', 'block');
//         });
//         $('.close').off('click').on('click', () => {
//             $('.layer-model').css('display', 'none');
//         });
//     } else {
//         $('nav').css('display', 'block');
//         $('.menu').css('display', 'none');
//     }
// }
// // Call the function to check the width initially
// checkWidth();

//     $('.menu').click(() => {
//         $('.layer-model').css('display', 'block')
//     })
//     $('.close').click(() => {
//         $('.layer-model').css('display', 'none')
//     })
$(document).ready(function() {
    function checkWidth() {
        if ($(window).width() <= 700) {
            $('nav').css('display', 'none'); // Hide nav
            $('.menu').css('display', 'block'); // Show menu
        } else {
            $('nav').css('display', 'block'); // Show nav
            $('.menu').css('display', 'none'); // Hide menu
        }
    }

    // Call the function to check the width initially
    checkWidth();

    // Event listener for menu click to show the layer model
    $('.menu').on('click', function() {
        $('.layer-model').css('display', 'block'); // Show layer model
    });

    // Event listener for close button click to hide the layer model
    $('.close').on('click', function() {
        $('.layer-model').css('display', 'none'); // Hide layer model
    });

    // Optional: Re-check the width on window resize
    $(window).resize(checkWidth);
});