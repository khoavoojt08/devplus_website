$(window).on('scroll', function () {
    $(
        '.testimonial-author .author-one, .testimonial-author .author-two, .testimonial-author .author-three,  .testimonial-author .author-four,  .testimonial-author .author-five, .testimonial-avatar .avatar-one, .testimonial-avatar .avatar-two, .testimonial-avatar .avatar-three, .testimonial-avatar .avatar-four, .testimonial-avatar .avatar-five, .testimonial-avatar .avatar-six'
    ).each(function (i, el) {
        var el = $(el);
        if (el.visible(true)) {
            el.addClass('now-in-view');
        } else {
            el.removeClass('now-in-view');
        }
    });
});
