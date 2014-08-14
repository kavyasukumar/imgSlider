A simple jquery plugin for creating image comparison sliders. See live demo at http://kavyasukumar.com/apps/imgSlider/

##Getting started

Download the code from [here](http://kavyasukumar.com/apps/imgSlider/imgslider-1.0.zip)

Unzip and include the files on your page
``` 
    <link rel="stylesheet" type="text/css" href="./css/imgslider.css">

    <script type="text/javascript" src="./js/imgslider.js"></script>
```
HTML decoration for your images goes like this
```
<div class="slider">

  <div class="left image">

    <img src="before.jpg"/>

  </div>

  <div class="right image">

    <img src="after.jpg"/>

  </div>

</div>
```
Include the following near the end of the page.
```
<script type="text/javascript">

  $('.slider').slider();

</script>
```
###Known Issues

1. Touch events haven't been added yet. It may not work as expected on tablets and phones
2. Files have not been minified
