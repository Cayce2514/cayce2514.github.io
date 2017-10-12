# Bumpteroids

This workshop will show you how to use the P5.play libraries a bit more extensively to create a game similar to the classic game Asteroids.

It will look something like this:
![Bumpteroids Example](https://cayce2514.github.io/bumpteroids/images/bumpteroids.png)

Here's the [live demo](https://cayce2514.github.io/bumpteroids/) and [final code](https://github.com/Cayce2514/cayce2514.github.io/tree/master/bumpteroids).


This workshop should take around 60 minutes.

**Table of contents:**

- [Part I: Setup](#part-i-setup)
- [Part II: The HTML file](#part-ii-the-html-file)
- [Part III: The CSS file](#part-iii-the-css-file)
- [Part IV: The JavaScript File](#part-iv-the-javascript-file)
- [Part V: Hacking](#part-v-hacking)
- [Part VI: Sharing](#part-vi-sharing)

## Part I: Setup

## Set up Folder and files

1. Log in to your [Cloud 9](https://c9.io/) account and open your workspace.  If you haven't created your [Cloud 9](https://c9.io) account, go back to [Workshop 2](https://hackclub.com/workshops/personal_website/) and step through it.
2. Create a new folder called "bumpteroids".
3. Within the bumpteroids folder, create 3 new files.  `index.html`, `style.css` and the main file containing all of the game logic, `bumpteroids.js`.

(place image here of final)

## Part II: The HTML file
The HTML file is the main file that will be opened when someone goes to your game link.  This file ties together all of the libraries that are used, both external and internal as well as tying together your stylesheet and JavaScript file.

We'll start out with our basic `index.html` file contents:

```html
<!DOCTYPE html>
<html>
  <head>

  </head>
  <body>

  </body>
</html>
```

In this section of code, we have only our document type and tags for `<html>` `<head>` for the page header and `<body>` for the document body.  Each tag also has it's closing tags `</head>`, `</body>`, and `</html>`.

We add the details in our header to include the document title and bind our stylesheet file to our index.html file.  Your file should now look like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Bumpteroids Game</title>
    <link href="styles.css" rel="stylesheet">
  </head>
  <body>

  </body>
</html>
```

Because we're using JavaScript for our game, and we'll use the P5.js and P5.play library as in previous Hack Club workshops, we need to tell our `index.html` file to bind them and point to where on the internet the libraries are found.

We will also define our main game logic for this gameWe do this within the `<body>` tags:


```html
  <body>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.4.23/p5.min.js"></script>
      <script type="text/javascript" src="https://cdn.rawgit.com/molleindustria/p5.play/1bf3c72fe6b647617373b9b3ea3e419baaef8cfd/lib/p5.play.js"></script>

      <script type="text/javascript" src="bumpteroids.js"></script>
  </body>
```


Your `index.html` file should now look like this:

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Bumpteroids Game</title>

    <!-- local CSS stylesheet -->
    <link href="styles.css" rel="stylesheet">
  </head>
  <body>
      <!-- remote p5.js library location -->
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.4.23/p5.min.js"></script>

      <!-- remote p5.play library location -->
      <script type="text/javascript" src="https://cdn.rawgit.com/molleindustria/p5.play/1bf3c72fe6b647617373b9b3ea3e419baaef8cfd/lib/p5.play.js"></script>

      <!-- local game logic JavaScript file -->
      <script type="text/javascript" src="bumpteroids.js"></script>
  </body>
</html>
```


## Part III: The CSS file
Here's some more text.

## Part IV: The JavaScript File
Here's some more text.

## Part V: Hacking
Here's some more text.

## Part VI: Sharing
Here's some more text.
