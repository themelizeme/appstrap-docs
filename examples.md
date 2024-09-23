---
title: Customisation and How tos
permalink: /examples
---

Examples and How To's on {{ site.title }} Customisation. 

> More in-depth how tos and examples will soon be added to <a href="https://themelize.me" target="_blank">Themelize.me</a>.

<div class="examples">
  <div class="list-group list-group-flush">
    {% assign grouped = site.docs | group_by: 'category' | sort: 'order' %}

    {% for group in grouped %}
      {% if group.name == 'Examples' %}
        {% assign items = group.items %}
        {% for item in items %}
          <a href="{{ site.baseurl }}{{ item.url }}" class="list-group-item list-group-item-action d-flex align-items-start gap-3 {% if item.url == page.url %}active{% endif %}">
            {% if item.icon %}
              <i class="bi bi-{{ item.icon }} text-primary fs-2"></i>
            {% endif %}
            <div>
              <div class="fw-bold d-block">
                {{ item.title }}
              </div>
              {% if item.teaser %}
                <div class="opacity-75">{{ item.teaser }}</div>
              {% endif %}
            </div>
          </a>
      {% endfor %}
      {% endif %}
    {% endfor %}
  </div>
</div>


