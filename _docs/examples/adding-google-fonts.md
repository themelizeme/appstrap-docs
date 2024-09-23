---
title: Adding Google fonts
teaser: Find out how to quickly and easily add Google fonts to your projects.
category: Examples
order: 12
---


With {{ site.title }}'s new config system you can simply use the additionalFonts setting to add the URLs to the fonts you want to add like the following example from our shop HTML pages:

{% highlight html %}
pageSettings: {
  'shop': {  // Applies to any page starting with 'shop-'
    additionalFonts: [// Load additional Google fonts ondemand after the initial page load
      'https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap'
    ],
    cssVariables: {
      '--bs-font-sans-serif': '"SUSE", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
  },
  'shop-*': {
    inheritFrom: 'shop'
  },
},
{% endhighlight %}

This will add the Google SUSE font as the global font to `shop.html` and any pages beginning with `shop-`. 
The `additionalFonts` URLs are loaded after the initial page load via Javascript.

This approach alters the CSS variable `--bs-font-sans-serif` to adjust the global base font in the browser. You could also use SASS and update the Bootstrap `$font-family-sans-serif` variable in `/src/scss/_variables.custom.scss` if you preferred. 

> You can also adjust other Bootstrap global CSS variables this way but bare in mind this will only work with basic global properties since Bootstrap uses components to override CSS variables and many Bootstrap colours run through additional SASS functions for lightening, shades or contrasting, see <a href="https://getbootstrap.com/docs/5.3/customize/css-variables/" target="_blank">https://getbootstrap.com/docs/5.3/customize/css-variables/</a> for more information on CSS variables in Bootstrap.

