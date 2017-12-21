---
title: Flexslider Slideshow Animations
category: Customisation
order: 7
---

> NOTE: Flexslider will soon be deprecated and removed from the theme.

AppStrap (since version 2.0) supports intro animations on slideshows thanks to the amazing animate.css plugin.
The animation is CSS based so not supported by older browsers.

#### Animations:
All the animations provided by animate.css can be added to elements within the slideshow slides using the data-animate-in attribute to animate them, some examples:
* data-animate-in="bounceInLeft"
* data-animate-in="fadeInUp"

#### Animation durations:
You can control the duration of animations using the data-animate-duration attribute, options are:
* data-animate-duration="dur-fast"   = 0.5 seconds
* data-animate-duration="dur-slow"   = 2 seconds
* data-animate-duration="dur-x-slow" = 3 seconds

#### Animation delays:
You can delay animations using the data-animate-delay attribute, options are:

* data-animate-delay="de-02" = 0.2 seconds
* data-animate-delay="de-04" = 0.4 seconds
* data-animate-delay="de-06" = 0.6 seconds
* data-animate-delay="de-08" = 0.8 seconds
* data-animate-delay="de-1"  = 1 seconds
* data-animate-delay="de-12" = 1.2 seconds
* data-animate-delay="de-14" = 1.4 seconds
* data-animate-delay="de-16" = 1.6 seconds
* data-animate-delay="de-18" = 1.8 seconds
* data-animate-delay="de-2"  = 2 seconds

#### Full example:

{% highlight html %}
<h2 data-animate-in="bounceInRight" data-animate-delay="de-06" data-animate-duration="dur-x-slow">AppStrap Bootstrap Theme</h2>
{% endhighlight %}