Tk = function(langFile) {
	$.ajax({
		type: "GET",
		url: langFile,
		dataType: "xml",
		success: function(xml) {
			$(xml).find('traduction').each(function() {
			    console.log($(this));
				}
			);
		}
	});
}
