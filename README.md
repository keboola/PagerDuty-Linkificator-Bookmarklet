# PagerDuty Linkificator Bookmarklet

This boormarklet helps you to create link from URLs and display formatted JSON in PagerDuty Event Details.

The URLs can be escaped - eg.

	http:\/\/bit.ly\/123456
	http://bit.ly/123456

and bookmarklet creates a link like this:

	<a href="http://bit.ly/123456" target="_blank">http://bit.ly/123456</a>

# Installation

Copy and paste the bookmarklet.min.js content to the bookmark's URL. You can also drag'n'drop this link to your bookmark bar:

<a href="javascript:var script=document.createElement("script");script.src="https://raw.github.com/keboola/PagerDuty-Linkificator-Bookmarklet/master/linkificator.min.js?rand="+Math.random();document.getElementsByTagName("head")[0].appendChild(script);">Make PD event detail nicer</a>


# Requirements

Required jQuery, but PagerDuty has it.

# Browser Support

Tested in

  * Chrome 17
  * Firefox 7
  * IE 9


# Chrome Extension

Download and install from https://s3.amazonaws.com/keboola-chrome-extensions/pagerduty.crx