# Bumpteroids

This workshop will show you how to use the P5.play libraries a bit more extensively to create a game similar to the classic game Asteroids.  This game, as it is, appears as a background for the P5.Play website at Molle Industria [here](http://p5play.molleindustria.org/).

It will look something like this:
![Bumpteroids Example](https://cayce2514.github.io/bumpteroids/images/bumpteroids.png)

Here's the [live demo](https://cayce2514.github.io/bumpteroids/) and [final code](https://github.com/Cayce2514/cayce2514.github.io/tree/master/bumpteroids).


This workshop should take around 60 minutes.

**Table of contents:**

- [Part I: Setup](#part-i-setup)
- [Part II: The HTML file](#part-ii-the-html-file)
- [Part III: The JavaScript File](#part-iii-the-javascript-file)
- [Part IV: Hacking](#part-iv-hacking)
- [Part V: Sharing](#part-v-sharing)

## Part I: Setup

## Set up Folder and files

1. Log in to your [Cloud 9](https://c9.io/) account and open your workspace.  If you haven't created your [Cloud 9](https://c9.io) account, go back to [Workshop 2](https://hackclub.com/workshops/personal_website/) and step through it.
2. Create a new folder called "bumpteroids".
3. Within the bumpteroids folder, create 2 new files.  `index.html` and the main file containing all of the game logic, `bumpteroids.js`.

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


## Part III: The JavaScript File
### Setup the file and canvas
For every project with the P5 libraries, we'll start with two main JavaScript functions, `setup()` and `draw()`.

In your `bumpteroids.js` file, create those functions like this:

```javascript

function setup() {

}

function draw() {

}
```
Now that we have the basic structure, we can define our canvas to be the entire width and height of our browser window in the `setup()` function, and we will set our canvas color to be almost pure white in the `draw()` function:

```javascript

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(254,248,248);

}
```

### Your Space Ship
So now we have to decide on our ship.  Let's play with some images.  We have our basic ship image:

![Basic Ship](https://raw.githubusercontent.com/Cayce2514/cayce2514.github.io/master/bumpteroids_old/images/asteroids_ship0001.png)

Fairly simple design. See [Part IV: Hacking](#part-iv-hacking) for where you can find more free to use art.

We will also use an image that shows the same body of the space ship, but a bit of rocket flare:

![Ship with Rocket Flare](https://raw.githubusercontent.com/Cayce2514/cayce2514.github.io/master/bumpteroids_old/images/asteroids_ship0002.png)

If you look closely to the live demo, the rocket flare isn't just solid, it seems to flutter a bit.  That's because we use more images of the ship with rocket flare, in an animation, and the rocket flare is a bit different across the animation.  Fires never keep the same shape, our rocket shouldn't either.  Here's all the rockets with flare image in order, imagine cycling through each of these.  We get the fluttering appearance by switching between these rocket flare images faster than our eyes can see that we've replaced the image. That's how animation works!

![Ship with a second Rocket Flare](https://raw.githubusercontent.com/Cayce2514/cayce2514.github.io/master/bumpteroids_old/images/asteroids_ship0002.png)
![Ship with a third Rocket Flare](https://raw.githubusercontent.com/Cayce2514/cayce2514.github.io/master/bumpteroids_old/images/asteroids_ship0003.png)
![Ship with a third Rocket Flare](https://raw.githubusercontent.com/Cayce2514/cayce2514.github.io/master/bumpteroids_old/images/asteroids_ship0003.png)
![Ship with a fourth Rocket Flare](https://raw.githubusercontent.com/Cayce2514/cayce2514.github.io/master/bumpteroids_old/images/asteroids_ship0004.png)
![Ship with a fifth Rocket Flare](https://raw.githubusercontent.com/Cayce2514/cayce2514.github.io/master/bumpteroids_old/images/asteroids_ship0005.png)
![Ship with a sixth Rocket Flare](https://raw.githubusercontent.com/Cayce2514/cayce2514.github.io/master/bumpteroids_old/images/asteroids_ship0006.png)
![Ship with a seventh Rocket Flare](https://raw.githubusercontent.com/Cayce2514/cayce2514.github.io/master/bumpteroids_old/images/asteroids_ship0007.png)

We get the fluttering appearance by switching between these rocket flare images faster than our eyes can see that we've replaced the image.

Download all of these images locally and then upload to Cloud 9 into an `images` directory.

So, let's put the first spaceship in our code.

We'll need a variable to hold the image.  That'll go at the top of our code before the function setup:

```javascript
// declare global variables at the top
// so that we can use them in all our functions
var shipImage;

function setup() {
  // rest of the code below
}
```

If you remember from our previous workshops using P5, each image we use takes the place of the a sprite object.  The sprite object is really what makes it work.  The images make it work and look pretty at the same time.

So, let's add a variable to be our sprite.

```javascript
// declare global variables at the top
// so that we can use them in all our functions
var ship;
var shipImage;

function setup() {
  // rest of the code below
}
```

We do the actual creation of the sprite and set its starting position and the size in the setup function.

```javascript

function setup() {
  // you already had the create canvas, put the ship sprite below
  createCanvas(windowWidth, windowHeight);

  ship = createSprite(width/2, height/2);

}
```

Because the origin of our canvas grid system starts at (0,0) in the top left, by using width divided by 2, we put the ship in the middle of the canvas width and similar for the height. In our code above, we've set the sprite to be in the middle of the canvas' width and height.

Now let's map our ship image (the non-trust image) to be bound to the image sprite:

```javascript

function setup() {
  // you already had the create canvas, put the ship sprite below
  createCanvas(windowWidth, windowHeight);

  shipImage = loadImage("images/asteroids_ship0001.png");

  ship = createSprite(width/2, height/2);

}
```

If you notice, we're putting images in an images directory.

Now, to make the ship appear in our canvas, we have to draw it.  Where should we draw our sprites?  In the `draw()` function of course!

```javascript

// Drawing happens in the draw function
function draw() {
  drawSprites;
}
```



### Flying
WASD
Arrow Keys?

### Shooting

### The Asteroids

### Blowing Things Up



## Part IV: Hacking
Perhaps you can think of a few ways to improve on this classic game?

Here are a few suggestions:
1. Change the look!  Use free pre-created images to be your spaceship and asteroids.  Add a background.
2. Keep score!  
3. Make a top 10 scoreboard using Firebase!

## Part V: Sharing
Post to #shipit or Hack Club ship it site?
