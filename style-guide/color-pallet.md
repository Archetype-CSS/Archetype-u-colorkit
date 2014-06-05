<section class="copy">
# Color Pallet

The Archetype ```_color-pallet.scss``` partial is the first Sass file imported within ```settings.scss``` and controls all of Archetype's color settings. This is also where [Colorkit](https://github.com/kwaledesign/Colorkit) is imported to ensure that all color functions and variables are available globally.

When prototyping a project, it is helpful to keep your edits to ```_color-pallet.scss``` on a seperate git commit (or even on a seperate branch) to make it easy to jump back and forth between design iterations.

{{ d['../sass/base/_color-pallet.scss|idio']['colorkit'] }}


## Docs

### Use
Colorkit provides a library of default color variables, multiple utility functions and mixins, and a color scheme mixin that automatically generate the classes for building color pallets for style guides.

### Color Library
<p>Colorkit's default color library is based off the primary colors red, yellow, and blue keywords <a href="http://www.w3.org/TR/SVG/types.html#ColorKeywords">defined in SVG</a> and referenced in the <a href="http://www.w3.org/TR/css3-color/#svg-color">Level 3 CSS Color Module</a>. Secondary and tertiary colors are derived in equal parts using <a href="http://sass-lang.com/docs/yardoc/Sass/Script/Functions.html#mix-instance_method">Sass's mix function</a>. Each of these key-colors are then used in Colorkit's tint-stack, tone-stack, and shade-stack functions to produce the value stacks for each color. Each of these color swatches is given a variable name based off the <a href="http://bem.info">BEM</a> naming methodology, as defined <a href="https://Archetype-CSS.github.io/Archetype/docs.html">here</a>.

<pre>$color-name--value-name;</pre>

### Colorkit Utility Functions

#### Opaque Gray Scale Functions
These are short-hand convenience functions for existing Sass script functions. Opaque gray scale functions are ideal for backgrounds and text.

<pre>
black($tint);
white($shade);
</pre>

<pre>
.foo {
  background-color: white(40);
  color: black(75);
}
</pre>

#### Alpha Gray Scale Functions
Alpha gray scale functions work the exact same way as the opaque functions, but use <code>rgba</code>. Alpha functions are ideal for drop shadows and highlights.

<pre>
alpha-black($tint);
alpha-white($shade);
</pre>

<pre>
.foo-highlight {
  background: alpha-white(10);
}

.foo-shadow {
  background: alpha-black(25);
}
</pre>

### Color Stack Function
The color stack function takes a <code>$main</code> color, a <code>$second</code> color, and an <code>$amounts</code> variable to create a list (color pallet) of color values. The way the function works is it takes the two given colors and mixes them using each amount in the <code>$amount</code> variable. In Sass variables are treated as arrays, so it is possible to add additional amount variables with as many amounts as you wish. This color stack concept is borrowed from <a href="https://github.com/Team-Sass/toolkit#colour-stacks">Team Sass' Toolkit</a>. The tint-stack, tone-stack, and shade-stack opperate in the exact same way.

<pre>color-stack($main, $second, $amounts: $default-amounts);</pre>


#### Color Scheme
The color scheme mixin generates harmonious color scheme variables based on a given <code>$color-relationship</code>, <code>$base-color</code>, and an optional argument <code>$color-angle</code>. The <code>$base-color</code> argument is the color-scheme's key-color that initiates all other colors. The <code>$color-relationship</code> takes the value of monochromatic, analogous, complementary, split-complementary, triadic, tetradic, or quadradic. The <code>$color-angle</code> argument defaults to 30 degrees, but can be overridden to any value. It is the degrees of separation (on the color wheel) between colors and allows additional calibration options to fine tune your color scheme.

<pre>@include color-scheme($color-relationship, $base-color, $color-angle);</pre>

When using the color-scheme mixin, you get a varying number of output variables based on the color relationship that is passed into the mixin which include a base-color (or key-color) and optionally a <code>$complementary</code>, a <code>$secondaryA</code>, and/or a <code>$secondaryB</code> color. Color theory concepts like this are often a lot easier to understand visually - <a href"http:="" www.tigercolor.com="" color-lab="" color-theory="" color-theory-intro.htm#color_harmonies"="">here's a good resource</a> for that.

#### Swatch Generate
The swatch generater mixin automatically generates class names along with the correct background color based on a given color list. The <code>$color-swatch</code> variable takes a list of colors. The <code>$swatch-name</code> variable is the class name. It defaults to "color-swatch" but can be overridden to whatever you want.

<pre>
$color-swatches: color-stack(red, blue, $default-amounts);
@include swatch-gen($color-swatches, $swatch-name);
</pre>

Example output for every item in the <code>$color-swatches</code> list:

<pre>.color-swatch-1 { background: #2600d8; }</pre>

### Color Scheme Pallet
The color-scheme-pallet mixin generates monochromatic, complementary, split-complementary, triadic, analogous, double-complementary, tetradic, and quadradic color-schemes along with (six by default) tints, tones, and shades of each color in your scheme. These colors are given class names automatically and can be used with the <a href="https://gist.github.com/kwaledesign/5910575">HTML Template</a> when building pallets and <a href="http://styletil.es/">style tiles</a>.

<em>It is important to note the first value in the $tint-stack, $tone-stack, and $shade-stack lists is the unadjusted color, meaning each stack includes the color which the
stack was derived from. The adjusted colors in the stack begin at 2.</em>

<pre>@include color-scheme-pallet($key-color);</pre>

### Color-Pallet Partial
The <a href="https://github.com/kwaledesign/Colorkit/blob/master/templates/project/_color-pallet.scss">color-pallet partial</a> is the main settings file for all Colorkit mixins and functions. This partial should be imported early in your main Sass file to make Colorkit available to your entire project.


</section>


