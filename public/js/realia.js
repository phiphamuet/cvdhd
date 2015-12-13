jQuery(document).ready(function($) {
    'use strict';

    /**
     * Property gallery
     */
    if ($('.property-gallery-index').length != 0) {
        $('.property-gallery-index').owlCarousel({
            items: 6,
            nav: true,
            dots: true,
            navText: ['<span class="pp pp-normal-left-arrow-small"></span>', '<span class="pp pp-normal-right-arrow-small"></span>']
        });
    }

    $('.property-gallery-list-item a').on('click', function(e) {
        e.preventDefault();

        var link = $(this).attr('rel');
        $('.property-gallery-preview img').attr('src', link);
        $('.property-gallery-preview a').attr('href', link);
    });
});
