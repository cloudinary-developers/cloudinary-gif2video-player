#README

CloudinaryGIF2VideoPlayer is a 2k script that swizzles all of your heavy animated gif image tags and replaces them with html5 video tags using Cloudinary's fetch and transcode feature to convert the gifs to mp4.  

This script allows you to dramatically reduce file size and memory and power consumption by using a more friendly mp4 delivery method. 

#Sign up for Cloudinary:
[Cloudinary](http://www.cloudinary.com/signup "Cloudinary")

#Usage:
Include our library from from UNPKG cdn in your header:
Make sure you change the cloudname to your Cloudinary cloud name

```
<script type="text/javascript" src="//unpkg.com/cloudinary-gif2video-player" cloudname="de-demo"></script>
```
##Alternatively from npm:
Make sure you change the cloudname to your Cloudinary cloud name 

```
<script type="text/javascript" src="dist/index.js" cloudname="de-demo"></script>
```



##HTML Code Example:

```<!DOCTYPE html>
<html>
<head>
    <title>CloudinaryGIF2VideoPlayer Demo</title>

    <!-- Note attribute cloudname: with your cloudinary cloudname  -->
     <script type="text/javascript" src="//unpkg.com/cloudinary-gif2video-player" cloudname="de-demo"></script>
</head>
<body>

<img src="https://media.giphy.com/media/mhDwIpbsgGKk/giphy.gif" alt="lion">
<img src="https://media.giphy.com/media/VFDeGtRSHswfe/giphy.gif" alt="dogs">
<img src="https://media.giphy.com/media/qPuhFBQt8xLEY/giphy.gif" alt="puppies"> 

</body>
</html>```
