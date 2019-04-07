chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		// ----------------------------------------------------------
		
		$(document).ready(function () {

			console.log('something important');
			
			$(".bbWrapper").on('mouseup', function(){
				var Selection = window.getSelection();

				var SelectedText = Selection.toString();

				if(SelectedText == ' ' || SelectedText == '\n' || SelectedText.length < 1) {
					return;
				}

				if(put_selected_text_in_script(SelectedText)) {
					
				}else{
					console.log('done, charlie');
					return;
				}

				var Article = $(this).parent().parent().parent().parent();

				var authorName = Article.find('.message-name a').text();
				var authorLink = 'https://www.jamiiforums.com' + Article.find('.message-name a').attr('href');

				console.log(SelectedText);
			});

			function put_selected_text_in_script(text){
				try{
					var LastText = $('#jfe-last-selected').html().replace('/*','').replace('*/','');
					document.getElementById("jfe-last-selected").remove();
				}catch{
					console.log('custom jfe-last-selected is not loaded yet');
					var LastText = '';

				}

				console.log("Last text: " + LastText);
				if (LastText == text){
					console.log('The eagle has already landed');
					return false;
				}

				var textScript = document.createElement('script');
				  
				textScript.id = "jfe-last-selected";

				textScript.appendChild(document.createTextNode("/*" + text  + "*/"));

				$('body').append(textScript);

				return true;

			}


		});


		//$('#xfReactTooltipTemplate').html("<p>Something has been said.</p>");
		
		//$('style').remove();
		//$('link[rel=stylesheet]').remove();

	}
	}, .5);
});