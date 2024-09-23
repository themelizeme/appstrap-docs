---
title: Pages in subfolders
teaser: Simple data attributes to change where AppStrap looks like plugin assets.
category: Examples
order: 10
---

If you want to put your pages into subfolders you will need to alter the path to the plugins so the script.js file can find them correctly.
To do this (since AppStrap version 3.0.5) you can simply add the following to the body tag for all pages that are within subfolders:

{% highlight html %}
<body data-plugins-localpath="LOCAL-PATH"> 
{% endhighlight %}

If you pages is within 1 subfolder (<kbd>/admin</kbd>) it would look something like:
{% highlight html %}
<body data-plugins-localpath="../assets/plugins/">
{% endhighlight %}

you can also use the absolute domain path to like:
{% highlight html %}
<body data-plugins-localpath="http://example.com/assets/plugins/">
{% endhighlight %}