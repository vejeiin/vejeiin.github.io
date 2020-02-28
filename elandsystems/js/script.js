
$(document).ready(function(){
	//bxslider
	$('.bxslider').bxSlider({
		mode: 'horizontal',
		moveSlides: 1,
		slideMargin: 0,
		infiniteLoop: true,
		minSlides: 3,
		maxSlides: 1,
		speed: 800,
		auto:true,
		controls:true,
		touchEnabled:false,
		autoControls:true,
		responsive:true,
		pager:true
	});

	//탭메뉴
	$('ul.tab li').click(function() {
	var activeTab = $(this).attr('data-tab');
	$('ul.tab li').removeClass('current');
	$('.tabcontent').removeClass('current');
	$(this).addClass('current');
	$('#' + activeTab).addClass('current');

		if($('ul.tab li>a').attr('href') === '#'){
		return false;
		}
	})
});