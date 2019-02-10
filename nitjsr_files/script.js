$(document).ready(function()
{
	var width = $(window).width(); 
	if (width >=768) 
	{

		$('div.navbar li').hover(function()
		{
			$(this).children('ul').hide();
			$(this).children('ul').slideDown('fast');
		},function()
		{
			$('ul', this).slideUp('fast');            

		});
	}
	else {

	}		
});





