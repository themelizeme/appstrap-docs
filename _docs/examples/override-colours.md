---
title: Overriding Primary Colours
teaser: Find out how to change the theme primary colour or add a custom primary colour.
category: Examples
order: 1
---

The theme offers 11 additional colour schemes (15 in total including the default green):

- Green: <code>#55A79A</code>
- Red: <code>#EF4444</code>
- Purple: <code>#b771b0</code>
- Orange: <code>#e67e22</code>
- Blue: <code>#0d6efd</code>
- Pink: <code>#c71c77</code>
- Brown: <code>#91633c</code>
- Slate: <code>#5D6D7E</code>
- Olive: <code>#808000</code>
- Teal: <code>#008080</code>
- Charcoal: <code>#34495e</code>


You can test the colour schemes per page using the style switcher in the bottom left corner:

<img src="/images/screenshots/style-switcher.png" alt="{{ site.title }} style switcher" />

### Changing The Theme Primary Colour

The style switcher is just for testing but if you want to change permanently to one of the predefined colours or a custom colour you have the following options:

#### 1) In Config

The simplest option is to use your `config.PROJECT.js` file and set the setting `colourScheme: 'COLOUR',` with COLOUR being one of the colours listed above ie. `colourScheme: 'purple',`. 
This option alters the themes CSS variables to switch the colour.

<hr class="hr-mini" />

#### 2) In SASS

Only slightly more complex, you can change the theme colour to any colour even outside the predefined colours by using your `/src/scss/_variables.custom.scss` file and setting `$primary: HEX_COLOUR;` ie. `$primary: #343566;`.

This will update the `$primary` variable throughout Bootstrap and {{ site.title }} and run all the colour functions again so is a more "complete" way of changing your primary colour.