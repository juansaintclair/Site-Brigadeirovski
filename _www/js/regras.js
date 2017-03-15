/**
 * @package     Cattive.Site
 * @subpackage  Templates.cattive
 *
 * @copyright   Copyright (C) 2015, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

/* global  $ */

$(function () {
    var slider = $('.bxslider').bxSlider({
        mode: 'fade'
    });

    $('#slider-next').click(function () {
        slider.goToNextSlide();
        return false;
    });

     function initialize() {
        var myLatlng = new google.maps.LatLng(-5.824425, -35.206860);
        var mapOptions = {
            zoom: 17,
            center: myLatlng
        }
        var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Brigadeirovski'
        });
    }

    google.maps.event.addDomListener(window, 'load', initialize);




});