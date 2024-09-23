---
title: Dropdowns On Hover
teaser: Control when dropdowns show on hover or on click.
category: Examples
order: 9
---

Since AppStrap 2.4 drop down menus show on hover. 
When adding new drop down menus simply add <code>data-bs-toggle="dropdown" data-bs-hover="dropdown"</code> to the trigger link make them show on hover instead of click.
For submenus you should include <code>data-close-others="false"</code> so the parent menu is not closed when hovering a submenu.

To revert to using "click" drop down simple remove the usage of <code>data-bs-hover="dropdown"</code> on drop down trigger links.

<span class="badge text-white bg-primary">Config options</span> You can also control the breakpoint (up) at which dropdowns start to hover using the config setting `dropdownHoverBpClass`, available classes are as follows and should be applied to the `.dropdown` element:


<div class="table-responsive"><table class="table">
<thead>
<tr>
<th>Class</th>
<th>Dimensions</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>dropdown-hover</code></td>
<td>&lt;576px</td>
</tr>
<tr>
<td><code>dropdown-hover-sm</code></td>
<td>≥576px</td>
</tr>
<tr>
<td><code>dropdown-hover-md</code> *default</td>
<td>≥768px</td>
</tr>
<tr>
<td><code>dropdown-hover-lg</code></td>
<td>≥992px</td>
</tr>
<tr>
<td><code>dropdown-hover-xl</code></td>
<td>≥1200px</td>
</tr>
<tr>
<td><code>dropdown-hover-xxl</code></td>
<td>≥1400px</td>
</tr>
</tbody>
</table></div>