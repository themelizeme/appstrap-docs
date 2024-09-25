---
title: Editing Files (HTML, Scss, Javascript and Assets)
category: Get Started
permalink: /get-started/:title.html
order: 3
---


## Finding Your Source Files

With project based sites all your source files (HTML, Scss, Javascript and Assets) can be found at `./prjects/PROJECTNAME/src`.
These files are copied from the parent /src directory when you run the `create-project` command and therefore you are free to edit and maintain them as you please. 

With non-project based sites you need to edit the `/src` files directly which makes upgrading very tricky so again our recommmended approach is using project based sites created with the gulp `create-project` command.

With the power of gulp watch any changes made to your files are automatically loaded, gulp tasks are rerun and Browser Sync will update the changes in your browser.

All `/src` files and processd by Gulp into the `/dist` directory by default. 

<hr />

## HTML Files + Twig

As of {{ site.title }} 4.x you can now use the powerful <a href="https://twig.symfony.com/" target="_blank">Twig template engine</a> to build your HTML files and then Gulp will process them into raw HTML in your `/dist` directory.

Twig is a powerful and flexible templating engine that allows you to dynamically generate HTML pages based on variables, control structures, and reusable blocks. Here are a few key examples of how we use Twig in {{ site.title }}:

#### Variables and Conditional Logic:

Our config settings are automatically passed to Twig as variables which you can then use in your templates and use them to dynamically change content. For example, in the body tag:

{% highlight html %}
{% raw %}
<body {% if bodyClass %} class="{{bodyClass}}" {% endif %}>
{% endraw %}
{% endhighlight %}

Here, `bodyClass` is a variable passed from the page front matter. If it exists, Twig outputs the class attribute with the value of bodyClass. If the variable is not set, no class attribute is added.

#### Includes:

Twig allows you to reuse code by including other templates. This helps keep your code clean and modular. For example:


{% highlight html %}
{% raw %}
{% include '@partials/head.html' %}
{% endraw %}
{% endhighlight %}

This line includes the content of `head.html` from the `/src/html/@partials` folder, allowing you to reuse the head section across multiple pages.

<!-- > New to Twig? Check out this great Twig crash course on uDemy! -->

#### Blocks and Embeds:

Blocks and embeds are powerful features in Twig that enable inheritance and reusable content. Here, Twig uses embed to extend a partial template and add additional content:

{% highlight html %}
{% raw %}
{% embed '@partials/header.html' %}
  {% block navbarBrandContent %}
    <a href="#" class="navbar-text fs-5 align-self-stretch">Contact Us</a>
  {% endblock %}
{% endembed %}
{% endraw %}
{% endhighlight %}

The embed tag imports `header.html` from `/src/html/@partials` and allows you to override or add content inside it using block. In this case, the navbarBrandContent block is overridden with custom content.

> NOTE: Using Twig is totally optional, you can of course just write raw HTML in your /src/html/*.html files and it will work just fine too.

<hr />

## SASS Files

By default when you create a project Gulp will copy over the following files and then reference to the parent /src directory so you can use the {{ site.title }} core Scss files without needing to maintain them:

`/src/scss/_custom.maps.scss` - thia allows you to alter the utility maps set by Bootstrap and {{ site.title }}, see <a href="https://getbootstrap.com/docs/5.3/utilities/api/#using-the-api" target="_blank">https://getbootstrap.com/docs/5.3/utilities/api/#using-the-api</a> for more information.

`/src/scss/_custom.style.scss` - this file can house any custom SASS code you want to automatically add to {{ site.title }} and is loaded and the end of the SASS build so you can override anything needed. 

`/src/scss/_custom.variables.scss` - this file allows you to alter variables set by Bootstrap and {{ site.title }}, see <a href="/customisation/1-override-colours/">overriding colours</a> as an example.

`/src/scss/theme.style.scss` - this is the parent SASS for {{ site.title }}, in most cases you won't need to alter this but if you want to exclude any SASS partials and build more custom on a project this is where you'd do it. 

<div class="hl-box">
  <p><span class="badge text-white bg-primary hl-box-title">Config options</span> To override which SASS files are included in Gulp builds you can use the config <code>paths.src.scssFiles: []</code> & <code>paths.src.scssFilesWatched: []</code> options and to output the compiled CSS to somewhere else you can use <code>paths.dist.cssDir</code> but this is only recommended for advanced users.</p>
  
  <p>If you prefer to just write plain CSS you can create static CSS files and include them in your pages with the <code>additionalCSS</code> config setting: </p>

  {% highlight html %}
additionalCSS: [ // add additional CSS files to <head>
  './projects/myproject/css/custom2.css'
  './projects/myproject/css/custom2.css'
],
  {% endhighlight %}
</div>

<hr />

## Javascript Files

The `/assets/src/js/custom.script.js` allows you to override plugin functions within {{ site.title }} as well as add your own plugin definitions using {{ site.title }} to load in the theme assets.

You can also use the {{ site.title }} Javascript API to react to javascript events in {{ site.title }}:

1. <code>themePreload</code>: Before any {{ site.title }} Javascript has run
2. <code>themePrePlugins</code>: Before any {{ site.title }} Javascript has run
3. <code>themeLoaded</code>: After the theme has loaded everything
4. <code>themePluginsExtras</code>: Add new plugin integrations or override existing ones.

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

<hr />

## Assets

All files within `/src/assets` are automatically copied to `/dist/assets` by Gulp when you run `yarn gulp` or `yarn gulp build` OR whenever you edit or add new files. 

Gulp will also create a file called `assets-map.json` within `/dist/assets` which lists all the assets used per page so you can keep track of your file assets. In addition, when you run `yarn gulp build` the `assets-map.json` file used to remove any files from `/dist/assets` that are not currently in use within your HTML files. 


<span class="badge text-white bg-primary">Config options</span> To disable the removal of unused assets you can set `buildSettings.unusedAssets: false` in your `config.PROJECT.js` file.

`yarn gulp build` will also compress your image files to make them as small as possible when copied to `/dist/assets`, this step can take awhile if you have a lot of images so it's only run on the build command.

To reference assets in your HTML simply use `/assets/img/FOLDER/FILE.EXTENSION`.

### Next Steps

Now you should have an overview of all the file assets you need to work with so you can follow our <a href="{{ '/examples/' | relative_url }}">how tos and examples section</a> for building more with {{ site.title }}