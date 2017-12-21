---
title: Mobile Menu Options
category: Customisation
order: 5
---

AppStrap (since version 2.0) supports both Bootstraps default mobile menu and the jPanel Menu jQuery plugin [jpanelmenu.com](http://jpanelmenu.com/).

jPanel Menu is implemented as default, to switch to the default Bootstrap mobile menu you just need to replace the line:
{% highlight html %}
<a class="navbar-btn" data-toggle="jpanel-menu" data-target=".navbar-collapse">
{% endhighlight %}
with:
{% highlight html %}
<a class="navbar-btn" data-toggle="collapse" data-target=".navbar-collapse">
{% endhighlight %}
See the bs-mobile-menu.htm file for an example.