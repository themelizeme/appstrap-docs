---
title: Browser Support
category: General
order: 3
---

AppStrap Bootstrap 4 theme supports all modern browsers and provides support for Internet Explore (IE) from IE9+.


#### Internet Explorer 9 Support

AppStrap supports IE9+ although some plugins do not work with IE9 but the general theme layout and components do.

To support IE9 you need to include the <kbd>asset/css/no-flexbox.css</kbd> file & <kbd>assets/css/theme-style.ie.min.css</kbd> files in your pages after all your other CSS files:

{% highlight html %}
<!-- Optional: Remove flexbox support either by choice or for IE9 -->  
<link href="assets/css/ie.theme-style.min.css" rel="stylesheet">  
<link href="assets/css/no-flexbox.css" rel="stylesheet">
{% endhighlight %}

Plugins that don't support IE9:
- Dropdowns on hover