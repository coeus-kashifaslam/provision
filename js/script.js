$(document).ready(function(){
	$('.alert-dropdown .dropdown-toggle, .alert-dropdown .alert-close-control a').bind('click', function(e){
		e.preventDefault();
		$this1 = $(this);
		$this1.closest('.dropdown').find('.dropdown-menu').toggleClass('alert-open');
	});
});