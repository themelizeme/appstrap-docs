---
title: Overriding Other Styles
category: Customisation
order: 2
---

### Using CSS:

Similarly to colour overriding the theme also offers and automatically loads a skeleton file called <code>custom-style.css</code> which can be used to override the theme structure & media queries.
This file is found within the <code>/css</code> directory and is well commented to provide instruction.

### Using Sass:

* If you are comfortable with using Sass you can also add any custom style overrides to the <code>/assets/scss/custom/_custom-style.scss</code> file and then recompiling the CSS. This file is automatically included. 
* You can also pick and choose which core AppStrap Sass files you want to include by editing or cloning the <code>/assets/scss/theme-style.scss</code> file and only including the include files you want/need. <code>theme-style.scss</code> is commented to indicate which Sass include files are required and which are optional. 
* You also have the option to override certain AppStrap styles using the <code>/assets/scss/custom/_custom-variables.scss</code> file which allows you to override the variables set in the <code>/assets/scss/core/_variables.scss</code>. This file is automatically included.

> NOTE: You should ideally not edit any sass files in the /core directory to make future updates easier.

See #11 below for more information on using Sass.