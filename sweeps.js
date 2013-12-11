<script>
$(document).ready(function(){
$.each($("#mod_gal1 .thumbWrapper"), function(index, value){
    var num = index + 1;
    $(this).append('<div class="num-holder">'+num+'</div>');
});
$.each($("#mod_gal2 .thumbWrapper"), function(index, value){
    var num = index + 15;
    $(this).append('<div class="num-holder">'+num+'</div>');
});

$('#mod_footerimg .moduleContent').prepend($('#mod_imgcopyhide .moduleContent h4'));


});

</script>

<script type="text/javascript">
	
	var getOS = function() {
		var os;
		if (navigator.appVersion.indexOf("Win")!=-1) os = "win";
		if (navigator.appVersion.indexOf("Mac")!=-1) os = "mac";

		return os;
	};

	$(document).ready(function() {
		var os;

 	 	$(".moduleProductGalleryv2 .productgallery_galleryItems li").each(function() {
 	 		var el = $(this).find('.itemDescription');
 	 		var itemDescr = $.trim(el.text());
 	 		if (itemDescr === 'past') {
 	 			$(this).addClass('item-past');
 	 		}
 	 	});
 	 	$(".moduleProductGalleryv2 .productgallery_galleryItems li").each(function() {
 	 		var el = $(this).find('.itemDescription');
 	 		var itemDescr = $.trim(el.text());
 	 		if (itemDescr === 'today') {
 	 			$(this).addClass('item-today');
 	 		}
 	 	});

 	 	os = getOS();
 	 	$("#mod_pbrowser").addClass(os);

	});
</script>
