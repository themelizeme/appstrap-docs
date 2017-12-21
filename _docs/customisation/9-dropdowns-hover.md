---
title: Dropdowns On Hover
category: Customisation
order: 9
---

Since AppStrap 2.4 drop down menus show on hover. 
When adding new drop down menus simply add <code>data-toggle="dropdown" data-hover="dropdown"</code> to the trigger link make them show on hover instead of click.
For submenus you should include <code>data-close-others="false"</code> so the parent menu is not closed when hovering a submenu.

To revert to using "click" drop down simple remove the usage of <code>data-hover="dropdown"</code> on drop down trigger links.

See [https://github.com/CWSpear/bootstrap-hover-dropdown](https://github.com/CWSpear/bootstrap-hover-dropdown) for more info.