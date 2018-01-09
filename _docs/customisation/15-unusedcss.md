---
title: Removing unused assets
category: Customisation
order: 14
---

### Assets/Files used per page

At the top of page HTML file and within <kbd>/assets/assets-map.txt</kbd> files you will find a list of all CSS, Javascript (not dynamically loaded ones) and images needed for each page.
This is to help you remove unneeded assets as you customise your site.

### CSS

Thanks to the awesomeness of Gulp and purifycss you can now streamline your final CSS code before you launch your site.

Once you've done developing your site or at any point you like simply do the following:

1. Remove any unused <kbd>.html</kbd> files from the site root
2. In terminal, run command: <code>gulp unused-css</code>

This will compare the CSS selectors used in the HTML files with the CSS in the CSS files (assets/css) and remove any CSS not being used.