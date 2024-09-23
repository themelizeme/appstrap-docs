---
title: Removing unused assets
category: Examples
teaser: Find out how to remove unused assets from your production builds.
order: 14
---

### Assets/Files used per page

All files within `/src/assets` are automatically copied to `/dist/assets` by Gulp when you run `yarn gulp` or `yarn gulp build` OR whenever you edit or add new files. 

Gulp will also create a file called `assets-map.json` within `/dist/assets` which lists all the assets used per page so you can keep track of your file assets. In addition, when you run `yarn gulp build` the `assets-map.json` file used to remove any files from `/dist/assets` that are not currently in use within your HTML files. 


<span class="badge text-white bg-primary">Config options</span> To disable the removal of unused assets you can set `buildSettings.unusedAssets: false` in your `config.PROJECT.js` file.

`yarn gulp build` will also compress your image files to make them as small as possible when copied to `/dist/assets`, this step can take awhile if you have a lot of images so it's only run on the build command.

To reference assets in your HTML simply use `/assets/img/FOLDER/FILE.EXTENSION`.


### CSS

Thanks to the awesomeness of Gulp and purifycss you can now streamline your final CSS code before you launch your site.

Once you've done developing your site or at any point you like simply do the following:

1. Remove any unused <kbd>.html</kbd> files from the site root
2. In terminal, run command: <code>yarn gulp build</code>

This will compare the CSS selectors used in the HTML files with the CSS in the CSS files (assets/css) and remove any CSS not being used.

### Javascript Plugins

We use Gulp to pull all our .js files together into script.s & script.min.js. This means you can since version 3.1.0 easier remove plugins you don't need simply by deleting them from the <kbd>/src/assets/js/src/plugins</kbd> directory or by changing the .js file extension.

<div class="hl-box">
  <span class="badge text-white bg-primary hl-box-title">Config options</span>
  
  <p>You can alter the Javascript files compiled by {{ site.title }} using the <code>paths.src.JSSourceFiles</code> file glob. The order is important but you can for example exclude a given plugin using <code>'!./src/js/plugins/fakeLoader.js'</code> in the glob. Similarly with <code>paths.src.JSSourceFilesVendors</code> which compiles the vendor packages needed for {{ site.title }}.</p>

  <p>When the config setting <code>includeCustomJS: true</code> is set <code>/dist/assets/js/custom.script.js</code> is automatically included in HTML files. You can also add additional Javascript files to your pages using <code>additionalJS</code> for example:</p>

  {% highlight html %}
  additionalJS: [ // add additional JS files to footer
    './projects/myproject/js/custom1.js',
    './projects/myproject/js/custom2.js'
  ],
  {% endhighlight %}
</div>