---
title: Adding Main Navbar Content With Twig Blocks
teaser: Find out how to quickly and easily Main Navbar Content With Twig Blocks
category: Examples
order: 12
---


With {{ site.title }}'s new Twig Template Engine helping compile HTML with Gulp you can easily add new content to your main nvarbar without having to directly edit the header.html partial at all. This is done using Twig blocks which are defined regions in a partial which can accept HTML content from the parent page, is no content is defined default content can be shown (as with the main menu) or it can remain blank (as with the navbarSecondaryContent block).

Here's how `@partials/header.html` looks:

{% highlight html %}
{% raw %}
{% if headerSticky %}<div data-bs-toggle="sticky">{% endif %}

  {% if headerSearch %}
    <!--Header search region - hidden by default -->
    <div class="header-search collapse" id="search">
      <form class="search-form container-fluid {{ 'flex align-items-center'|classMerge(navbarContainer) }}">
        <input type="text" name="search" class="form-control search" value="" placeholder="Search">
        <button type="button" class="btn btn-link"><span class="visually-hidden">Search </span><i class="bi-search fs-3"></i></button>
        <button type="button" class="btn btn-link close-btn" data-bs-toggle="search-form-close"><span class="visually-hidden">Close </span><i class="fa fa-times search-icon"></i></button>
      </form>
    </div>
  {% endif %}

  <!--Header & Branding region-->
  <div id="navbar-header" class="navbar {{ 'navbar'|classMerge(navbarToggleableClass, navbarClass) }}">
    {% if navbarContainerClass %}<div class="{{ navbarContainerClass }}">{% endif %}
      {% if block('navbarBrandContent') is defined or siteLogo or siteName or siteSlogan %}
        <!--branding/logo -->
        <div class="{{ 'hstack gap-3'|classMerge(navbarBrandWrapperClass) }}">
          {% if block('navbarBrandContent') is defined %}
            <!-- 
              Utility area to place additional brand area content within the header. Use .order- classes to order this in the header.
              By default this is empty.
              Override in parent pages like this, @see ./src/html/admin.html for an example:
              {#
                {% embed "@partials/header.html" %}
                  {% block navbarBrandContent %}<a class="btn btn-primary d-none d-lg-block order-4" href="#">Contact Us</a>{% endblock %}
                {% endembed %} 
              #}
            -->
            {% block navbarBrandContent %}{% endblock %}
          {% endif %}

          <a class="{{ 'navbar-brand me-0 fw-bolder'|classMerge(navbarBrandClass) }}" href="{{ navbarBrandUrl }}" title="Home">
            {% if siteLogo and siteLogo.src %}
              <!-- siteLogo -->
              <img 
                src="{{ siteLogo.src }}" 
                alt="{% if siteLogo.width %}{{ siteLogo.alt }}{% else %}Site logo{% endif %}" 
                {% if siteLogo.width %}width="{{ siteLogo.width }}"{% endif %}
                {% if siteLogo.height %}height="{{ siteLogo.height }}"{% endif %}
                {% if siteLogo.class %}class="{{ siteLogo.class }}"{% endif %}
              />
            {% endif %}

            {% if siteNameHidden %}
            <span class="visually-hidden">{{ siteName }}</span>
            {% else %}
            {{ siteName }}
            {% endif %}
          </a>

          {% if siteSlogan %}
          <span class="{{ 'vr'|classMerge(navbarVrClass) }}"></span>
          <div class="{{ 'navbar-text'|classMerge(siteSloganClass) }}">{{ siteSlogan }}</div>
          {% endif %}
        </div>
      {% endif %}

      {% if block('navbarSecondaryContent') is defined or headerSearch or headerNavbarToggle or headerShoppingCart %}
      <!-- other header content -->
      <div class="{{ 'hstack gap-3'|classMerge(navbarSecondaryClass) }}">
        {% if block('navbarSecondaryContent') is defined %}
          <!-- 
            Utility area to place additional content within the header. Use .order- classes to order this in the header.
            By default this is empty.
            Override in parent pages like this, @see ./src/html/header-navbar-below.html for an example:
            {#
              {% embed "@partials/header.html" %}
                {% block navbarSecondaryContent %}<a class="btn btn-primary d-none d-lg-block order-4" href="#">Contact Us</a>{% endblock %}
              {% endembed %} 
            #}
          -->
          {% block navbarSecondaryContent %}{% endblock %}
        {% endif %}
        
        {% if not headerNavbarNavVrHide %}
          <span class="{{ 'vr'|classMerge(navbarVrClass) }}"></span>
        {% endif %}
        
        {% if headerSearch or headerNavbarToggle or headerOffcanvas %}
          <div class="navbar-nav flex-row gap-1 gap-lg-2 align-items-center">
            {% if headerSearch %}
            <!-- Search Trigger -->
              <a href="#search" class="{{ 'nav-link'|classMerge(searchBtnClass) }}" data-bs-toggle="search-form" data-bs-target=".header-search"><i class="bi-search"></i></a>
            {% endif %}

            {% if headerNavbarToggle %}
              <!-- Mobile collapse menu button -->
              <a 
                href="#"
                class="{{ 'nav-link'|classMerge(mobileMenuBtnClass,navbarToggleClass) }}" 
                data-bs-toggle="{{ mobileMenuType }}" 
                data-bs-target="{{ mobileMenuTarget }}" 
                {{ navbarToggleAttr|raw }}>
                {{ mobileMenuBtnText }}<i class="bi-list{% if mobileMenuBtnText %} ps-1{% endif %}"></i>
              </a>
            {% endif %}

            {% if headerOffcanvas %}
            <!-- Header Offcanvas -->
              <a href="#" title="Click me you'll get a surprise" class="{{ 'nav-link order-5'|classMerge(searchBtnClass) }}" data-bs-toggle="offcanvas" data-bs-target="#offcanvas-sidebar" aria-controls="offcanvas-sidebar">
                <i class="bi bi-three-dots-vertical"></i>
              </a>
            {% endif %}

            {% if headerOffcanvasCart %}
              <!-- Offcanvas Shop cart  -->
              <a href="#"
                class="lh-1 float-end order-5 position-relative fs-5 op-hover-7 nav-link mx-2 p-1"
                data-bs-toggle="offcanvas" 
                data-bs-target="#shop-cart-sidebar">
                  <i class="bi-cart-fill"></i>
                  <span class="visually-hidden">Cart items: 3</span>
                  <span
                      class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary text-white border-white lh-1"
                      style="--bs-badge-font-size: 10px;">
                      3
                  </span>
              </a>
            {% endif %}
          </div>
        {% endif %}
      </div>
      {% endif %}

      {% block headerNavbarNav %}
        <!-- 
          Default main menu/navbar 
          Override this or hide it like this, @see ./src/html/header-collapse-menu.html for an example:
          {#
            {% embed "@partials/header.html" %}
              {% block headerNavbarNav %}EMPTY or your main menu HTML {% endblock %}
            {% endembed %} 
          #}
        -->
        {% include '@partials/main-nav.html' %}

      {% endblock %}
    {% if navbarContainerClass %}</div>{% endif %}
  </div>


  {% if headerNavbarBelow or block('headerNavbarBelow') is defined %}
    <!-- 
      Utility area below header navBar 
      Override in parent pages like this, @see ./src/html/header-collapse-menu.html for an example:
      {#
        {% embed "@partials/header.html" %}
          {% block headerNavbarBelow %}Your headerNavbarBelow HTML content which will be automatically passed to this region in the header{% endblock %}
        {% endembed %} 
      #}
    -->
    <div class="{{ 'navbar navbar-below'|classMerge(navbarBelowToggleableClass, navbarBelowClass) }}">
      {% if navbarBelowContainerClass %}<div class="{{ navbarBelowContainerClass }}">{% endif %}
        {% block headerNavbarBelow %}{% endblock %}
      {% if navbarBelowContainerClass %}</div>{% endif %}
      </div>
    </div>
  {% endif %}


{% if headerSticky %}</div>{% endif %}
{% endraw %}
{% endhighlight %}

It contains 4 block regions which can be added to from the parent page:

### `navbarBrandContent`

This renders before the navbar brand and can be ordered with the `order-*` classes. 

Example: Add a button to the left of the brand, like in our admin UI

{% highlight html %}
{% raw %}
{% embed '@partials/header.html' %}
  {% block navbarBrandContent %}
    <!-- Toggle the #navbar-side-primary navbar-side element -->
    <a href="#" class="navbar-text fs-5 align-self-stretch border-end navbar-border navbar-side-toggler bg-gray-300 bg-op-1 bg-op-hover-2 rounded-0 transition waves-btn order-first" data-bs-toggle="navbar-offcanvas" data-bs-target="#navbar-side-primary"> <i class="bi-list icon-1x"></i> <span class="visually-hidden-focusable">Main Menu Panel</span> </a>
  {% endblock %}
{% endembed %}
{% endraw %}
{% endhighlight %}


### `navbarSecondaryContent`

This renders before the main navbar and can be ordered with the `order-*` classes. 

Example: Add a button to the right of the header

{% highlight html %}
{% raw %}
{% embed '@partials/header.html' %}
  {% block navbarSecondaryContent %}
  <a href="#pricing" data-bs-toggle="scroll-link" class="btn btn-primary btn-sm d-none d-lg-block fw-bold px-lg-3 py-lg-2 ms-lg-3">Register</a>
  {% endblock %}
{% endembed %}
{% endraw %}
{% endhighlight %}

### `headerNavbarNav`

This is the main navabr in the header, if nothing is defined in the parent page it includes `@partials/main-nav.html`

Example: Render no main navbar, simply pass an empty block.

{% highlight html %}
{% raw %}
{% embed "@partials/header.html" %} 
  {% block headerNavbarNav %} {% endblock %} 
{% endembed %} 
{% endraw %}
{% endhighlight %}

### `headerNavbarBelow`

This renders below the header but within the sticky wrapper, used if for example you want to show a navbar below the header rather than in the header

Example: Render a navbar below the header instead

{% highlight html %}
{% raw %}
{% embed "@partials/header.html" %}
  {% block headerNavbarBelow %}
  <div class="d-flex align-items-center justify-content-between w-100">
    <div class="hstack gap-4">
      <h6 class="fs-6 my-0 mb-1 text-muted d-flex align-items-center">
        <i class="bi-truck me-2"></i> Free Worldwide Shipping
      </h6>
      <h6 class="fs-6 my-0 text-muted fw-normal d-flex align-items-center">
        <i class="bi-telephone me-2"></i> (+44) 7283643345
      </h6>
    </div>
    <!-- Button aligned right on lg screens, centered on smaller screens -->
    <a href="#" class="btn btn-primary btn-sm w-50 w-lg-auto text-uppercase fw-bold px-3 mt-3 mt-lg-0 ms-auto"> Sale Now On! </a>
  </div>
  {% endblock %}
{% endembed %}
{% endraw %}
{% endhighlight %}

For global changes you can alter the `@partials/header.html` file in your project or clone it and include it in your own pages.