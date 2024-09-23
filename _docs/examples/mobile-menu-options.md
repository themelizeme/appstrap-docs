---
title: Mobile Menu Options
teaser: Choose between collapse menus and offcanvas menus as the main nabvar mobile display.
category: Examples
order: 5
---

AppStrap (since version 2.0) supports both Bootstraps collapse menus and offcanvas menus as the main nabvar mobile display with the latter being the option used the most.

The markup is found in `/src/html/@partials/header.html`:

{% highlight html %}
{% raw %}
<a 
  href="#"
  class="{{ 'nav-link'|classMerge(mobileMenuBtnClass,navbarToggleClass) }}" 
  data-bs-toggle="{{ mobileMenuType }}" 
  data-bs-target="{{ mobileMenuTarget }}" 
  {{ navbarToggleAttr|raw }}>
  {{ mobileMenuBtnText }}<i class="bi-list{% if mobileMenuBtnText %} ps-1{% endif %}"></i>
</a>
{% endraw %}
{% endhighlight %}

### Collapse

Simply set `mobileMenuType: collapse;` in your global config, pageSettings or HTML front matter.

### Offcanvas

This is the default so set automatically ie. `mobileMenuType: offcanvas;`.