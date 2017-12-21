---
title: Retina Images
category: Customisation
order: 4
---

AppStrap is retina (High Definition) ready (as of version 2.0) and all images provided with the theme are also offered with a retina version.
To make your own images retina ready you just need to think double sized & appended <code>@2x</code> to the filename.

Here's an example:

* Standard definition size:     310px wide X 410px high
* High definition size:         620px wide X 820px high
* Standard definition filename: my-image.jpg
* High definition filename:     my-image@2x.jpg

Place both images in the same directory and the Retina.js plugin [http://retinajs.com/](http://retinajs.com/) will automatically swap in the high definition version on device which support retina display.

> NOTE: This is totally optional, if the plugin does not find a retina version of any images, the standard definition image is left.