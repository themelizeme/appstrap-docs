---
title: Adding New Pages
category: Customisation
order: 3
---

All pages within the theme are designed to be copy & pasted to help you quickly get started with page building.

### Starter Page Structure

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Landing Page Homepage | AppStrap Bootstrap Theme by Themelize.me</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    
    <!-- @todo: fill with your company info or remove -->
    <meta name="description" content="">
    <meta name="author" content="Themelize.me">
    
    <!-- Bootstrap v4.0.0-beta.2 CSS via CDN -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css">
    
    <!-- Plugins required on all pages NOTE: Additional non-required plugins are loaded ondemand as of AppStrap 2.5 -->
    
    <!-- Theme style -->
    <link href="assets/css/theme-style.min.css" rel="stylesheet">
    
    <!-- Slate colour scheme -->
    <link href="assets/css/colour-slate.min.css" rel="stylesheet">
    
    <!--Your custom colour override-->
    <link href="#" id="colour-scheme" rel="stylesheet">
    
    <!-- Your custom override -->
    <link href="assets/css/custom-style.css" rel="stylesheet">
    
    
    
    <!-- Optional: ICON SETS -->
    <!-- Iconset: Font Awesome 4.7.0 via CDN -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    <!-- Iconset: flag icons - http://lipis.github.io/flag-icon-css/ -->
    <link href="assets/plugins/flag-icon-css/css/flag-icon.min.css" rel="stylesheet">
    <!-- Iconset: ionicons - http://ionicons.com/ -->
    <link href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" rel="stylesheet">
    <!-- Iconset: Linearicons - https://linearicons.com/free -->
    <link href="https://cdn.linearicons.com/free/1.0.0/icon-font.min.css" rel="stylesheet">
    
    
    <!-- Le fav and touch icons - @todo: fill with your icons or remove -->
    <link rel="shortcut icon" href="assets/assets/img/icons/favicon.png">
    <link rel="apple-touch-icon" sizes="114x114" href="assets/assets/img/icons/114x114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="assets/assets/img/icons/72x72.png">
    <link rel="apple-touch-icon" href="assets/assets/img/icons/default.png">
    
    
    <!-- Google fonts -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans:400,700,300' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Rambla:400,700' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Calligraffitti' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Roboto+Slab:400,700' rel='stylesheet' type='text/css'>
    
    <!--Plugin: Retina.js (high def image replacement) - @see: http://retinajs.com/-->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/retina.js/1.3.0/retina.min.js"></script>
  </head>
  
  <!-- ======== @Region: body ======== -->
  <body class="page header-transparent header-dark header-ontop header-compact-sticky page-_dev-start navbar-layout-default">

    <!--Hidden elements - excluded from jPanel Menu on mobile-->
    <div class="hidden-elements jpanel-menu-exclude"></div>
    
    
    <!--jQuery 3.2.1 via CDN -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <!-- Popper 1.9.3 via CDN, needed for Bootstrap Tooltips & Popovers -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.9.3/umd/popper.min.js"></script>
    
    <!-- Bootstrap v4.0.0-beta JS via CDN -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"></script>
    
    
    <!-- JS plugins required on all pages NOTE: Additional non-required plugins are loaded ondemand as of AppStrap 2.5 To disable this and load plugin assets manually simple add data-plugins-manual=true to the body tag -->
    
    <!--Custom scripts & AppStrap API integration -->
    <script src="assets/js/custom-script.js"></script>
    <!--AppStrap scripts mainly used to trigger libraries/plugins -->
    <script src="assets/js/script.min.js"></script>
  </body>
</html>
{% endhighlight %}