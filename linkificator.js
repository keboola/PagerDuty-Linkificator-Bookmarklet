(function (window) {

	// Regulars
	var urlEscapedExp = /(\b(http|https):(\\\/\\\/|\/\/)[-A-Z0-9+&@#\\\/%?=~_|!:,.;]*[-A-Z0-9+&@#\\\/%=~_|])/ig;
	var escapeExp = /\\/g;

	var json2Html = function(json) {
		var html = "{<ul>";
		jQuery.each(json, function(key, value) {
			if (typeof value != "object" && value != null) {
				// Inner JSON
				try {
					var jsonIn = jQuery.parseJSON(value);
					value = jsonIn;
				} catch(err) {

				}
			}
			if (typeof value == "object" && value != null) {
				value = json2Html(value);
			}
			html += "<li><strong>" + key + "</strong>: " + value + "</li>";
		});
		html += "</ul>}";
		return html;
	};

	var parse = function() {

		// Every message LI
		$("#incidentlogentries_show_page .prettyprint").each(
			function(index, elem) {
				var e = $(elem);

				// parse JSON
				try {
					var json = jQuery.parseJSON(e.html());
				} catch (err) {
					// No JSON
					// Do nothing, really
				}

				// JSON detected
				if (json) {
					var message = json2Html(json);
					e.html(message);
				}

				// Match and process URLs
				var matches=e.html().match(urlEscapedExp);
				if (matches) {
					for(i=0; i < matches.length; i++) {
						var match = matches[i];
						var clearMatch = match.replace(escapeExp, "");
						e.html(e.html().replace(match,'<a href="' + clearMatch + '" target="_blank">' + clearMatch + '</a>'));
					}
				}

			}
		);
	};

	// Invoke immediatey
	parse();

}(window));