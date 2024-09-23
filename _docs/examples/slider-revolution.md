---
title: Slider Revolution Slider
category: Examples
order: 8
---

Slider Revolution Slider allows for advanced slideshows & animation. 
You can invoke it using <code>data-toggle="slider-rev"</code> on the slider element.

### Styling

AppStrap applies its own styling to Slider Revolution elements via the <code>.slider-appstrap-theme</code> class which is add via the following line on Slider Revolution pages:

{% highlight html %}
<div class="slider-wrapper tp-banner-container" data-page-class="slider-appstrap-theme">
{% endhighlight %}

To remove AppStrap styling and use default Slider Revolution styles simply remove the <code>data-page-class="slider-appstrap-theme"</code> attribute.

### Options

All Slider Revolution options can be passed to the slider via HTML5 <code>data-settings='{}'</code> attribute placed on the slider element (<code>data-toggle="slider-rev"</code>).
Example:
{% highlight html %}
<div class="rev_slider fullscreenbanner" data-toggle="slider-rev" data-settings='{"startwidth":1100, "startheight":520, "delay":10000}'>
{% endhighlight %}


See the <kbd>/theme/plugins/slider-revolution/</kbd> directory for examples & documentation or visit [http://themes.themepunch.com/?theme=revolution_jq](http://themes.themepunch.com/?theme=revolution_jq).