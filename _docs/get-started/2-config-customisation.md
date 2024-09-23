---
title: Config Customisations
category: Get Started
order: 2
---


### Finding Your Config File

As mentioned as of Appstrap 4.x you can now control the vast majority of your project using a config file within your project. 

With project based sites this file is autocreated with the gulp `create-project` command and can be found at `./prjects/PROJECTNAME/config.PROJECTNAME.js`.

With non-project based sites you need to edit the `./config.custom.js` file. Again our recommmended approach is using project based sites created with the gulp `create-project` command.

With the power of gulp watch any changes made to your config file are automatically loaded, gulp tasks are rerun and Browser Sync will update the changes in your browser. Test it by changing the value of settings.siteName and saving the config file.

### Config File Options

#### Default settings

{% highlight javascript %}

{% endhighlight %}


### Global settings, pageSettings and front matter

The config file may look daunting to start with but in most cases unless you are looking to do some advanced customisations you can ignore the `paths` and `buildSettings` items completely and focus only on `settings` and `pageSettings`.

Within {{ site.title }} you have 3 different ways to set config options and they are loaded in this same order.

#### 1. Global Settings

Found in: `config.*.js`

`settings` are global settings applied to every page in your project. If you make no other overrides in the other options below, these settings will be applied to all pages in your project.

<hr class="mini" />

#### 2. pageSettings

Found in: `config.*.js`

`pageSettings` allow you to override the global `settings` on a per page basis within your config.*.js file and even target certain pages with wildcard matching, see this example of our prebuild shop pages where we override the global font via `additionalFonts` and `cssVariables` and apply it to all page filenames beginning with `shop` or `shop-` :

{% highlight javascript %}
  pageSettings: {
    'shop': {  
      additionalFonts: [// Load additional Google fonts ondemand after the initial page load
        'https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap'
      ],
      cssVariables: {
        '--bs-font-sans-serif': '"SUSE", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
    },
    'shop-*': { // Applies to any page starting with 'shop-'
      inheritFrom: 'shop' // inherits all settings from 'shop'
    },
  },
{% endhighlight %}

`inheritFrom` allows you to inherit settings from another already defined `pageSettings` item.

If you only have a few pages that need to override the global settings like in our shop example this approach allows you to control all settings from your projects config file.

<hr class="mini" />

#### 3. Page Front Matter (in your /src/.html files)

Found in: `/src/*.html` files

You can also override global and page settings from within your .html files in the /src directory, this gives flexibility & freedom while creating your HTML files to override the global settings but on a large project may become hard to keep track of.

Front matter is a section at the beginning of a file, typically enclosed in delimiters like `---` or `<!-- -->`, that contains metadata in formats like JSON or YAML, used to define settings or variables for processing that file. It's commonly used in frameworks like Jekyll, Hugo and Gatsby.

Here's an example of front matter from within {{ site.title }}:

{% highlight javascript %}
<!-- 
{
  "pageTitle": "Dashboard",
  "pageKey": "admin",
  "headerSticky": false,
  "navbarBrandUrl": "admin.html",
  "headerNavbarToggle": false,
  "headerOffcanvas": false,
  "bodyClass": "bg-light",
  "dropdownCollapseClass": " dropdown-collapse dropdown-expand-md",
  "dropdownHoverBpClass": "dropdown-hover-md",
  "dropdownMenuClass": " dropdown-menu-light border-md",
  "footerBgClass": "bg-dark op-8",
  "footerBtnsClass": "text-light",
  "footerClass": "py-4",
  "footerHighlightClass": "text-light op-8",
  "headerBrandHClass": "h2",
  "megaMenuClass": " dropdown-menu-md-end",
  "megaMenuShopClass": " dropdown-menu-md-end",
  "megaMenuToggleClass": " dropdown-mega-menu-50",
  "mobileMenuBtnClass": "fs-3 order-last p-1",
  "navbarBelowToggleableClass": "navbar-expand-md",
  "navbarBrandClass": "fs-3 py-3",
  "navbarClass": "bg-white border-bottom py-0 shadow-sm",
  "navbarContainerClass": "container-fluid ps-0",
  "navbarHeaderClasses": "navbar-light p-0 navbar-side-push",
  "navbarMainClass": "navbar-collapse offcanvas offcanvas-end align-items-md-end me-md-3 p-4 p-md-0",
  "navbarMainNavLinkClass": "py-md-4",
  "navbarSecondaryClass": "order-5",
  "navbarToggleClass": "d-md-none",
  "navbarToggleableClass": "navbar-expand-md",
  "navbarVrClass": "vr-60 d-none d-xl-block",
  "searchBtnClass": "fs-5 order-4 p-1",
  "siteSloganClass": "d-none d-xl-block"
}
-->
<html>..............rest of page HTML</html>
{% endhighlight %}

NOTE: Front matter like pageSettings can only alter the "settings" and not all options defined in config.*.js.

### Next Steps

Now your project development environment is set up you can now begin to edit your `/src/projects/PROJECT` HTML, SCSS and Javascript files to build out your site.