$(document).ready(function(){
	$('.alert-dropdown .dropdown-toggle, .alert-dropdown .alert-close-control a').bind('click', function(e){
		e.preventDefault();
		$this1 = $(this);
		$this1.closest('.dropdown').find('.dropdown-menu').toggleClass('alert-open');
	});

	$('.type-file-toggler').on('click', function(e){
		e.preventDefault();
		$(this).closest('.form-group').find('.drag-file').click();
	});

	$('a[data-toggle="collapse"]').on('click', function(){
		$this2 = $(this);
		$this2.closest('.panel-default').toggleClass('open-collapse');
	})
});