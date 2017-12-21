---
title: Overriding Colours
category: Customisation
order: 1
---

The theme offers 14 additional colour schemes (15 in total including the default green):
- Green: <code>#55A79A;</code>
- Red: <code>#BE3E1D;</code>
- Purple: <code>#b771b0;</code>
- Pink: <code>#CC164D;</code>
- Orange: <code>#e67e22;</code>
- Blue: <code>#00ADBB;</code>
- Pink: <code>#c71c77;</code>
- Lime: <code>#b1dc44;</code>
- BlueDark: <code>#34495e;</code>
- RedDark: <code>#a10f2b;</code>
- Brown:  <code>#91633c;</code>
- CyanDark:  <code>#008b8b;</code>
- Yellow:  <code>#D4AC0D;</code>
- Slate:  <code>#5D6D7E;</code>
- Olive:  <code>#808000;</code>
- Teal:  <code>#008080;</code>
- GreenBright:  <code>#2ECC71;</code>


Each additional one has a separate .css file within the /css directory:
ie. colour-COLOURNAME.css

These files can be used as an example of how to implement your own colour schemes.

Example - Add the following to your <head> tags below the {% highlight html %}<!--Your custom colour override-->{% endhighlight %}
{% highlight html %}
<link href="css/colour-blue.css" id="colour-scheme" rel="stylesheet" />
{% endhighlight %}

> NOTE: 
You will need to do this on all pages to implement site wide.
The "colour-scheme" ID tag is only required if you want the jQuery colour switcher to be functionality.
Quickest way to hide the colour switcher is to add <code>.colour-switcher { display: none; }</code> to your CSS.

If you are comfortable with using Sass it's recommended to override the colour scheme by altering the $primary_colour variables and then recompiling the CSS, see the assets/scss/example-custom-colour.scss file for an example.