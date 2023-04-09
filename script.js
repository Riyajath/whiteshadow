// smooth scrolling
$('a[href*="#"]').on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 500, 'linear');
});

// show/hide navigation
$(window).scroll(function(){
var scrollTop = $(this).scrollTop();
if(scrollTop > 50){
	$('header').addClass('header-scroll');
}else{
	$('header').removeClass('header-scroll');
}
});

// show/hide project buttons on hover
$('.project-card').hover(function(){
$(this).find('button').fadeIn();
}, function(){
$(this).find('button').fadeOut();
});

// contact form submission
$('.contact-form button').on('click', function(){
alert('Thank you for contacting us. We will get back to you soon.');
});