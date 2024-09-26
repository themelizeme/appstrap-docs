---
title: Config Customisations
category: Quickstart
order: 2
---

### Finding Your Config File

As mentioned as of Appstrap 4.x you can now control the vast majority of your project using a config file within your project. 

With project based sites this file is autocreated with the gulp `create-project` command and can be found at `./prjects/PROJECTNAME/config.PROJECTNAME.js` .

With non-project based sites you need to edit the `./config.custom.js` file. Again our recommmended approach is using project based sites created with the gulp `create-project` command.

With the power of gulp watch any changes made to your config file are automatically loaded, gulp tasks are rerun and Browser Sync will update the changes in your browser. Test it by changing the value of settings.siteName and saving the config file.

### Config File Options


### Settings

<table class="table table-hover">
<thead>
<tr>
<th><strong>Twig Variable</strong></th><th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr><td><code>additionalCSS</code></td><td>Array of additional CSS files to include, dynamically loaded via <code>&lt;link&gt;</code> tags in the head section.</td></tr>
<tr><td><code>additionalFonts</code></td><td>Array of URLs for additional font files to be loaded via <code>&lt;link&gt;</code> tags.</td></tr>
<tr><td><code>additionalJS</code></td><td>Array of additional JavaScript files to be loaded after the primary scripts.</td></tr>
<tr><td><code>cssVariables</code></td><td>Key-value pairs for defining CSS variables dynamically in the page, injected into a <code>&lt;style&gt;</code> block in the head.</td></tr>
<tr><td><code>currentPageKey</code></td><td>A variable that indicates which page is currently active, used to set the <code>active</code> class on corresponding menu items.</td></tr>
<tr><td><code>footerClass</code></td><td>Applies custom classes to the <code>&lt;footer&gt;</code> element to adjust its appearance (e.g., padding, background color).</td></tr>
<tr><td><code>footerHighlightClass</code></td><td>Used to style certain highlighted text in the footer, such as section headings (e.g., "Contact Us," "About Us").</td></tr>
<tr><td><code>headerOffcanvas</code></td><td>Boolean flag to enable or disable the off-canvas sidebar region.</td></tr>
<tr><td><code>headerOffcanvasCart</code></td><td>Boolean flag to enable or disable the off-canvas sidebar cart for shop pages.</td></tr>
<tr><td><code>headerSearch</code></td><td>Toggles the visibility of the search form in the header.</td></tr>
<tr><td><code>headerSticky</code></td><td>Controls whether the header remains fixed at the top of the page while scrolling.</td></tr>
<tr><td><code>includeColourSwitcher</code></td><td>Boolean flag to include a color scheme switcher component (intended for demo purposes).</td></tr>
<tr><td><code>includeCustomJS</code></td><td>Boolean flag to load a custom JavaScript file (<code>custom.script.min.js</code>) if set to true.</td></tr>
<tr><td><code>jsFilesBase</code></td><td>Base path for the JavaScript files, used to generate paths for various scripts like <code>vendors.min.js</code> and <code>script.min.js</code>.</td></tr>
<tr><td><code>mobileMenuBtnText</code></td><td>Text for the mobile menu button, usually displayed next to the icon.</td></tr>
<tr><td><code>mobileMenuTarget</code></td><td>Target ID for the mobile menu, used in the <code>data-bs-target</code> attribute to control which menu opens.</td></tr>
<tr><td><code>mobileMenuType</code></td><td>Type of mobile menu (e.g., off-canvas or dropdown), used in conjunction with <code>mobileMenuTarget</code>.</td></tr>
<tr><td><code>pageIsActive</code></td><td>A function used to check whether a particular page is active, applying the <code>active</code> class to its corresponding link.</td></tr>
<tr><td><code>pageKey</code></td><td>Key identifier for the homepage, used for navigation and active states.</td></tr>
<tr><td><code>pageTitle</code></td><td>Defines the title of the homepage, displayed in the <code>&lt;title&gt;</code> element.</td></tr>
<tr><td><code>siteFooterCopyright</code></td><td>Holds the text for the copyright notice displayed in the footer.</td></tr>
<tr><td><code>siteLogo</code></td><td>Properties for the site logo, such as <code>src</code>, <code>alt</code>, <code>width</code>, and <code>height</code>.</td></tr>
</tbody>
</table>

### Classes

<table class="table table-hover">
<thead>
<tr>
<th><strong>Twig Variable</strong></th><th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr><td><code>dropdownCollapseClass</code></td><td>Class controlling the collapse behavior of dropdown menus in the navigation bar.</td></tr>
<tr><td><code>dropdownHoverBpClass</code></td><td>Class that enables hover behavior for dropdown menus on specific screen widths.</td></tr>
<tr><td><code>dropdownMenuClass</code></td><td>Class applied to the dropdown menu for controlling its appearance (e.g., background color, borders).</td></tr>
<tr><td><code>footerBgClass</code></td><td>Class for styling the background of the footer, such as color and transparency.</td></tr>
<tr><td><code>footerBtnsClass</code></td><td>Class for buttons in the footer section, adjusting their style (e.g., text color, padding).</td></tr>
<tr><td><code>headerBrandHClass</code></td><td>Class applied to the brand heading in the header (e.g., the site name or logo).</td></tr>
<tr><td><code>megaMenuClass</code></td><td>Class controlling the behavior and layout of the mega menu in the navigation bar.</td></tr>
<tr><td><code>megaMenuShopClass</code></td><td>Class for customizing the shop's mega menu, affecting its layout and appearance.</td></tr>
<tr><td><code>megaMenuToggleClass</code></td><td>Class applied to the mega menu toggle button, influencing its size and behavior.</td></tr>
<tr><td><code>mobileMenuBtnClass</code></td><td>Class applied to the mobile menu button for styling, controlling its appearance on smaller screens.</td></tr>
<tr><td><code>navbarBelowClass</code></td><td>Class for additional navigation content below the main navigation bar.</td></tr>
<tr><td><code>navbarBelowContainerClass</code></td><td>Class applied to the container of the navigation content below the main navbar.</td></tr>
<tr><td><code>navbarBelowToggleableClass</code></td><td>Makes the navigation content below the main navbar collapsible on smaller screens.</td></tr>
<tr><td><code>navbarBrandClass</code></td><td>Class applied to the branding section of the navbar, adjusting size and appearance.</td></tr>
<tr><td><code>navbarClass</code></td><td>Class for styling the main navbar, such as background color, border, and padding.</td></tr>
<tr><td><code>navbarContainerClass</code></td><td>Class applied to the container holding the navbar, controlling width and positioning.</td></tr>
<tr><td><code>navbarHeaderClasses</code></td><td>Classes used to style the header section of the navbar, influencing its layout and behavior.</td></tr>
<tr><td><code>navbarMainClass</code></td><td>Class applied to the main navigation container (<code>&lt;nav&gt;</code>).</td></tr>
<tr><td><code>navbarMainNavLinkClass</code></td><td>Class for styling individual links in the main navigation, adjusting padding and other properties.</td></tr>
<tr><td><code>navbarNavClass</code></td><td>Class applied to the navigation list (<code>&lt;ul&gt;</code>) within the navigation bar.</td></tr>
<tr><td><code>navbarSecondaryClass</code></td><td>Class for secondary content in the navbar, such as extra links or buttons.</td></tr>
<tr><td><code>navbarToggleClass</code></td><td>Class for the toggle button in the navbar, controlling the collapsible behavior.</td></tr>
<tr><td><code>navbarToggleableClass</code></td><td>Class that allows the navbar to be expandable or collapsible based on screen size.</td></tr>
<tr><td><code>navbarVrClass</code></td><td>Class for a vertical divider (<code>&lt;span class="vr"&gt;</code>) within the navbar, separating different sections.</td></tr>
<tr><td><code>searchBtnClass</code></td><td>Class for styling the search button in the navbar, controlling size and alignment.</td></tr>
<tr><td><code>siteSloganClass</code></td><td>Class applied to the site slogan in the header, controlling its visibility based on screen size.</td></tr>
</tbody>
</table>


### Global settings, pageSettings and front matter

The config file may look daunting to start with but in most cases unless you are looking to do some advanced customisations you can ignore the `paths` and `buildSettings` items completely and focus only on `settings` and `pageSettings` .

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

Front matter is a section at the beginning of a file, typically enclosed in delimiters like `---` or `<!-- -->` , that contains metadata in formats like JSON or YAML, used to define settings or variables for processing that file. It's commonly used in frameworks like Jekyll, Hugo and Gatsby.

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
