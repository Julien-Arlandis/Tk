tk = function(langFile, callback) {
	$.ajax({
		type: "GET",
		url: langFile,
		dataType: "xml",
		success: function(xml) {
			$(xml).find('t').each(function() {
				var selector = $(this).attr('k');
				var trad = $(this).html();
				if( selector[0] != '!' ) {
					$(selector).html(trad);
				}else{
					var key = selector.substr(1,selector.length);
					tk[key] = trad;
					$("[tk='"+key+"']").html(trad);
				}
			});
			callback.call();
		}
	});
}
