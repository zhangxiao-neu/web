require.config({
	 paths: {
		 jquery: 'jquery/jquery-1.9.0'
			 }
});

require(['jquery','isequal'],function($,eql){
	$(document).ready(function(){
		  $("p").click(function(){
		  $(this).hide();
		  });
		})
	
	$('body').css('background-color','red');
	
	alert(eql.equal(11));
		
})
