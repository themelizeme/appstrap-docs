---
title: Disable autoloading for plugin assets
teaser: Disable AppStrap's auto plugin loading if you're using a CMS or framework.
category: Examples
order: 12
---

AppStrap is unique in that it loads all plugin assets (.js & .css files) on demand only when the plugin HTML trigger (data-toggle or similar) is present in the page. This gives ease of use and better performance.
With some CMSs & frameworks which have their own way of serving assets this however can cause issues so to disable this and include plugin assets in pages manually simply add <code>data-plugins-manual=true</code> to the body tag.
This will still trigger the AppStrap init code which starts plugins but it will assume the plugin assets have been loaded into the page manually.

All plugins assume .css files go in the head of the page and all .js files go in the footer after jQuery is added but before <kbd>script.min.js</kbd> is included (look for the comment line "JS plugins required on all pages" on all pages).