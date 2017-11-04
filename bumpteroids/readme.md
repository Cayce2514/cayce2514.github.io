# Bumpteroids

This workshop will show you how to use the P5.play libraries a bit more extensively to create a game similar to the classic game Asteroids.  This game, as it is, appears as a background for the P5.Play website at Molle Industria [here](http://p5play.molleindustria.org/).

It will look something like this:
![Bumpteroids Example](https://cayce2514.github.io/bumpteroids/images/bumpteroids.png)

Here's the [live demo](https://cayce2514.github.io/bumpteroids/) and [final code](https://github.com/Cayce2514/cayce2514.github.io/tree/master/bumpteroids).


This workshop should take around ?? minutes.

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

Put this code into your `index.html` on Cloud 9.

Now, we add the details in our header to include the document title and bind our stylesheet file to our index.html file.  Your file should now look like this:

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

We will also define our main game logic for this game by pointing to our `bumpteroids.js` file.  We do this within the `<body>` tags:


```html
  <body>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.4.23/p5.min.js"></script>
      <script type="text/javascript" src="https://cdn.rawgit.com/molleindustria/p5.play/1bf3c72fe6b647617373b9b3ea3e419baaef8cfd/lib/p5.play.js"></script>

      <script type="text/javascript" src="bumpteroids.js"></script>
  </body>
```


Your `index.html` file should now look something like this (I've added comments for a bit more clarity):

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

Test load your file by going to the live preview in Cloud 9.

A blank screen with no errors is exactly what we're looking for.  Now, let's work on our JavaScript file.

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

When you save your file `ctrl+s` you should now see a slightly off white canvas in your preview window.

### Your Space Ship
So now we have to decide on our ship.  Let's start with some images.  We have our basic ship image:

![Basic Ship](https://raw.githubusercontent.com/Cayce2514/cayce2514.github.io/master/bumpteroids/images/asteroids_ship0001.png)

Fairly simple design. See [Part IV: Hacking](#part-iv-hacking) for where you can find more free to use art.

We will also use an image that shows the same body of the space ship, but a bit of rocket flare:

![Ship with Rocket Flare](https://raw.githubusercontent.com/Cayce2514/cayce2514.github.io/master/bumpteroids/images/asteroids_ship0002.png)

If you look closely to the live demo, the rocket flare isn't just solid, it seems to flutter a bit.  That's because we use more images of the ship with rocket flare, in an animation, and the rocket flare is a bit different across the animation.  Fires never keep the same shape, right? Our rocket shouldn't either.  Here's all the rockets with flare image in order, imagine cycling through each of these.  We get the fluttering appearance by switching between these rocket flare images faster than our eyes can see that we've replaced the image. That's how animation works!

![Ship with a second Rocket Flare](https://raw.githubusercontent.com/Cayce2514/cayce2514.github.io/master/bumpteroids/images/asteroids_ship0002.png)
![Ship with a third Rocket Flare](https://raw.githubusercontent.com/Cayce2514/cayce2514.github.io/master/bumpteroids/images/asteroids_ship0003.png)
![Ship with a  fourth Rocket Flare](https://raw.githubusercontent.com/Cayce2514/cayce2514.github.io/master/bumpteroids/images/asteroids_ship0004.png)
![Ship with a fifth Rocket Flare](https://raw.githubusercontent.com/Cayce2514/cayce2514.github.io/master/bumpteroids/images/asteroids_ship0005.png)
![Ship with a sixth Rocket Flare](https://raw.githubusercontent.com/Cayce2514/cayce2514.github.io/master/bumpteroids/images/asteroids_ship0006.png)
![Ship with a seventh Rocket Flare](https://raw.githubusercontent.com/Cayce2514/cayce2514.github.io/master/bumpteroids/images/asteroids_ship0007.png)

Download all of these images locally by right clicking on them and selecting "Save Image As..." and then upload to Cloud 9 into an `images` directory.  You should have 7 ship images total.

Now, let's put the first spaceship in our code.

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

Now let's map our ship image variable to be bound to the image file (the non-trust image file) we uploaded...  

```javascript
shipImage = loadImage("images/asteroids_ship0001.png");
```
...and bind the shipImage variable to the ship sprite by defining the `shipImage` as a property of the `ship` variable (aka "object"):

```javascript
ship.addImage("normal", shipImage);
```

Your setup function should now look like this:
```javascript

function setup() {
  // you already had the create canvas, put the ship sprite below
  createCanvas(windowWidth, windowHeight);

  ship = createSprite(width/2, height/2);

  shipImage = loadImage("images/asteroids_ship0001.png");

  ship.addImage("normal", shipImage);

}
```

The `addImage` property requires two parameters.  a "label" which we can use to reference this object, and the reference to the image file itself which we're storing in the `shipImage` variable.

Now, to make the ship appear in our canvas, we have to draw it.  Where should we draw our sprites?  In the `draw()` function of course!

```javascript

// Drawing happens in the draw function
function draw() {
  drawSprites();
}
```

Congratulations!  You now have a ship!  But it just sits there.  Not doing anything.  That's kinda boring.

Let's make it fly!

### Flying
We are going to use keyboard control to fly our ship.  we should use something that is common in controlling things and traveling through games.  How about we use W, A, S and D to move?

#### Hard to Starboard!!
We'll start out with rotation of our ship left and right.

Because these keyboard actions re-draw things on the screen, we'll place the code in the `draw()` function.  We'll use the `keyDown` property in an `if` condition to capture the key, then apply the `rotation` property to our ship.

Place our code above the drawSprites() method:

```javascript
  // rotate left
  if(keyDown("A"))
    ship.rotation -= 4;

  // rotate right
  if(keyDown("D"))
    ship.rotation += 4;

// before the drawSprites() method
  drawSprites();
```

#### Full Speed Ahead!!

Now, let's go somewhere.  as you remember, we use an (x,y) coordinate system.  So, we need to tell our ship to move along it very much like we told our ship how to rotate left and right.

P5.play has done us the favor of including an easy library property to map all of these coordinates using the `addSpeed(speed, angle)` property that we'll add to our ship.  Set the speed parameter to .2. To determine the angle, we'll point to whatever the current rotation is of our ship.  Put this code under our "D" keyDown condition.

```javascript
  if(keyDown("W"))
    ship.addSpeed(.2, ship.rotation);
```

So, now, we can fly around, but there are a couple of problems.  Let's first solve the problem that we aren't showing our thrust flame from the rocket thruster.

To do this, we add an animation when we `addSpeed` and then when we stop going forward, we need to change the animation back to our "normal" view of our rocket.

when we add an animation in our keyDown for "W", we have to wrap our if in braces {} to keep it interpreted as being part of the if statement. And, within the braces add the line to use the thrust animation, the series of images that you uploaded earlier. We'll also add an "else condition" to turn the ship image to the regular ship.

```javascript
if(keyDown("W"))
    {
    ship.addSpeed(.2, ship.rotation);
    ship.changeAnimation("thrust");
    }
  else
    ship.changeAnimation("normal");
```

And we need to define what to do when the "trust" label is called.  We add, as before, in the `setup()` function with the "normal" `addImage` label, an animation to the ship for "thrust." Add the line just below the existing `addImage` and we give it a list of images rather than just one:

```javascript
// this is the existing line below
ship.addImage("normal", shipImage);

ship.addAnimation("thrust", "images/asteroids_ship0002.png", "images/asteroids_ship0003.png", "images/asteroids_ship0004.png", "images/asteroids_ship0005.png", "images/asteroids_ship0006.png", "images/asteroids_ship0007.png");
```

Of course, if you looked at this screen, you wouldn't necessarily know to use W, A, S and D keys.  So, we should probably tell our gamers what's up...

Add some text in the top right to convey the message.

Just inside our `draw()` function, add the following line:

```javascript
// put under your existing draw()
function draw() {
  background(254,248,248);

  //how do we control our ship
  text("W + A + D keys to move. K to shoot", width-30, 30);

...
}
```

Of course, it doesn't look great.  We'll want to align it to the right margin, set the font size and the color to match our spaceship.  So, we add those before the text:

```javascript
function draw() {
  // set the canvas background
  background(254,248,248);

  // set the text fill
  fill(254,190,190);

  // set the text alignment
  textAlign(RIGHT);

  // set the text size
  textSize(12);

  //set the text
  text("W + A + D keys to move.", width-30, 30);
}
```

#### Universe Wrapping
Because we have a small view into the universe that is limited to our canvas size, we need to figure out how we can prevent our ship from flying outside the boundaries, or teleport to the opposite side of our canvas in a sort of "wrap around."

We do this by some magical math calculations!  Since we can see that the spaceship continues on, we can expect that any sprite we put on our canvas will behave the same way.  So, we should apply this universe wrapping to all of the sprites.  Place this new code below the W, A, S, D text in the `draw()` function.

```javascript
// existing code for the W, A, S, D text
text("W + A + D keys to move.", width-30, 30);

// place this new code below it.

// set up a for loop based on the length of any sprite
for(var i=0; i<allSprites.length; i++) {
  // create an array for each individual sprite
  var s = allSprites[i];

  // If the sprite's x position is less than or equal to 0 (the left edge),
  // then set the new x position to the value of the width of the window (on the right)
  if(s.position.x<-0) s.position.x = width;

  // If the sprite's x position is greater than the width of the windows (right edge)
  // then set the new x position to be 0 (left edge)
  if(s.position.x>width) s.position.x = 0;

  // If the sprite's y position is less than or equal to 0 (the top)
  // then set the new y position to be the height of the window (the bottom)
  if(s.position.y<-0) s.position.y = height;

  // If the sprite's y position is greater than the windows's height (bottom)
  // then set the new y position to be 0 (the top)
  if(s.position.y>height) s.position.y = 0;
}
```

So.... uh...  well, if you haven't noticed already, our ship can get going incredibly fast and it won't ever stop.  Newton's first law of motion...

In the game world, we can fix these broken laws of physics.


#### Speed and Friction

Let's set some limits to how fast it can go.

set a maxSpeed property to ship just under where we created the ship sprite above setup:

```javascript
ship = createSprite(width/2, height/2);

// set our maxSpeed to 6. 6 what? 6 speed.
ship.maxSpeed = 6;
```
Whew.  That's better.  Acceleration to the speed of light is fast, but terrible on your body!

let's also decide what happens when we let the "W" key go. Right now, it stays in motion.  We should allow the ship to stop (by creating friction). Put the `friction` property just under the `maxSpeed` property:

```javascript
  ship = createSprite(width/2, height/2);
  // set our maxSpeed to 6. 6 what? 6 speed.
  ship.maxSpeed = 6;
  // set friction to allow our ship to eventually slow to a stop
  ship.friction = .98;
```


### Shooting

#### Create and assign the bullet image
Guns can make a game pretty fun.  In this game, we'll put a single gun on the front of our spaceship and make it shoot in the direction of the spaceship.

Just like the spaceship, we need to create two variables.  One for the bullets, and one for the bullet image.  The bullets variable is actually going to be a `Group()` of bullets.

At the top of your javascript file, just above your ship variable, create these variables:
```javascript
// shipImage already exists
var shipImage;

// new variables for the bullets
var bullets;
var bulletImage;
```

As we mentioned before, we're using bullets as a group. Think of it as a kind of an array, but each bullet is an individual entity traveling at a velocity in a direction (depending on how you rotate your ship) for a particular time, or lifespan.

place the `new Group();` constructor at the end of the `setup()` function, but before the }.  If you don't put it before the }, your spaceship will disappear when you press "K" to shoot.

```javascript
bullets = new Group();

}
```

Let's now set the image for the bullet.  It's just a small little bit with a transparent background.  You can download it here:
![Bullet Image](https://raw.githubusercontent.com/Cayce2514/cayce2514.github.io/master/bumpteroids/images/asteroids_bullet.png)

Upload it into your images folder in Cloud 9.

Now, let's bind the image to the `bulletImage` variable and put it under the existing shipImage assignment:

```javascript
// existing shipImage assignment
shipImage = loadImage("images/asteroids_ship0001.png");

// new bulletImage assignment
bulletImage = loadImage("images/asteroids_bullet.png");
```


#### Assign a key to shoot with and actions

We're going to use the letter "k" in this game.  You can assign it to whatever you like at another time.  Space is a good alternative.  Perhaps you can add options for left and right handed gamers afterwards?

We'll set up an if condition just like we did with "W", "A", and "D."  Place this underneath your other if conditions for keys and before the `drawSprites()` method call.
```javascript
if(keyWentDown("K"))
  {

  }
```

As we discussed earlier, we are creating a `Group()` of bullets.  If we already have a group of bullets stored in the variable `bullets`, then we'll need a variable for the individual `bullet`.

We'll create a local variable for bullet.  A local variable is used inside of a function, loop, method, or condition that can be used within that function, loop, method, or condition, but it can't be used by anything outside of that function, loop, method, or condition.

When we created the ship sprite, we set it to spawn in the exact middle of the canvas (height/2, width/2).  We're going to create the bullet at the same position as wherever the ship happens to be, `(ship.position.x, ship.position.y)`

```javascript
if(keyWentDown("K"))
  {
  var bullet = createSprite(ship.position.x, ship.position.y);
...
  }
```

We'll bind the sprite to the ship image next:
```javascript
if(keyWentDown("K"))
  {
  var bullet = createSprite(ship.position.x, ship.position.y);
  bullet.addImage(bulletImage);
...
  }
```

The next thing you might be thinking is... how fast do I want my bullet to go and in what direction?

I'm glad you asked.  Certainly, the bullet has to go faster than the ship.  You can fiddle with a number that looks best for you, but let's start out with whatever the ship's speed is plus 10.  We express this using the `getSpeed()` property of the ship object and then add 10 to it.

Next, is the direction of the bullet to fire.  I'm going to go out on a limb and assume that you want the bullet to go in the same direction as the ship.  You can play around with this later and perhaps add another gun that fires backwards, or two guns up front and on the sides.  For now, though, we'll get the value of the `rotation` property from the ship object.

With both of these parameters, we'll be able to set the `setSpeed()` property of the bullet object.

```javascript
if(keyWentDown("K"))
  {
  var bullet = createSprite(ship.position.x, ship.position.y);
  bullet.addImage(bulletImage);
  bullet.setSpeed(10+ship.getSpeed(), ship.rotation);

...
  }
```

If you shoot now, you will see that your bullets last forever.  This is probably not what you want, though it is pretty cool.  Let's give the bullets a limited lifetime.  We use a property to set the life of a bullet.  we'll set our bullet to be 30.  30 what? 30 life.  Like this:
```javascript
if(keyWentDown("K"))
  {
  var bullet = createSprite(ship.position.x, ship.position.y);
  bullet.addImage(bulletImage);
  bullet.setSpeed(10+ship.getSpeed(), ship.rotation);
  bullet.life = 30;

...
  }
```

Now, we have a ship hat fires its gun.  we will be using these bullets to act on asteroids and perhaps in some future game, we can affect other sprites, like other ships. To allow each bullet to act in the same way, we will add them to the bullets group we cerated earlier.  This will also be in our if statement for "K".  Your complete if condition for when "K" is pressed should now look like the following:
```javascript
if(keyWentDown("K"))
  {
  var bullet = createSprite(ship.position.x, ship.position.y);
  bullet.addImage(bulletImage);
  bullet.setSpeed(10+ship.getSpeed(), ship.rotation);
  bullet.life = 30;
  bullets.add(bullet);
  }
```

Now, we're ready to shoot something!

### The Asteroids

Asteroids are big rocks floating in space.  They take various sizes and shapes.  You can use any image you like, but in this tutorial, we'll use the following 3 images:

![Asteroid 0](https://raw.githubusercontent.com/Cayce2514/cayce2514.github.io/master/bumpteroids/images/asteroid0.png)
![Asteroid 1](https://raw.githubusercontent.com/Cayce2514/cayce2514.github.io/master/bumpteroids/images/asteroid1.png)
![Asteroid 2](https://raw.githubusercontent.com/Cayce2514/cayce2514.github.io/master/bumpteroids/images/asteroid2.png)

When we shoot the asteroid, it isn't going to blow up completely.  It'll break into two smaller pieces, then two more before you can fully destroy the smallest asteroid. We'll use the same images for the big and small sprites.  We'll just scale the to suit our needs.  We'll specify them as 3 types: large, medium and small.

First, let's get the astroids spawning in the game.

Like our ship and our bullet, we have to create a variable at the top to hold our asteroids.  We'll arrange this variable alphabetically with bullets that you already have in your code:
```javascript
// your new asteroids variable
var asteroids;
//your existing bullets variable
var bullets;
```

As with the bullets, the asteroids will be a `Group()` so that we can act on all of them together.  Define this group above where you already have your bullets group, _inside_ your `setup()` function:
```javascript
// your new asteroids group
asteroids = new Group();
// your existing bullets group
bullets = new Group();
// below is the closing brace for your setup() function. Don't put another one.
}
```
For starters, we're going to create 8 asteroids.  These will be full-size asteroids, or type 3.  We'll use a for loop to generate them and we'll pick a random image of the three we have to represent the asteroid that's being created.  We'll put this at the end of our `setup()` function, just after the `Group()` for the bullets, but before the brace that closes the `setup()` function:
```javascript
...
// your existing bullets group
bullets = new Group();

// the basic for loop that will iterate through 8 times starting with 0
for(var i = 0; i<8; i++) {

  }
// brace that closes the setup() function
}
```
We will want to pick a random location to spawn our asteroid.  We'll use the center of the canvas as a reference point and set the (x,y) location of the asteroid somewhere along the line of the randomly chosen angle outside of the canvas to to spawn at.  We will then use the type (3, meaning large), and the (x,y) position as parameters to pass to a new asteroid creation function `createAsteroid()`:
```javascript
// the for loop that you've already added
for(var i = 0; i<8; i++) {
  // pick an angle between 0 and 360
  var ang = random(360);
  // calculate a x position somewhere along the line at the chosen angle, outside the canvas area.
  var px = width/2 + 1000 * cos(radians(ang));
  //calculate a y position somewhere along the line at the chosen angle, outside the canvas area.
  var py = height/2+ 1000 * sin(radians(ang));
  createAsteroid(3, px, py);
  }
```

#### The `createAsteroids()` function

Create the new function under the closing brace of the `draw()` function:
```javascript
function createAsteroid() {

}
```
As we discussed above, we'll be passing this function 3 parameters.  The type, the x position and the y position.  We reflect these parameters in the function declaration:
```javascript
function createAsteroid(type, x, y) {

}
```
As we did with the bullets, we'll create a local variable to contain the sprite.  We'll create another local variable to hold the image for the asteroid and finally we'll bind the sprite and the image for the sprite together with the `addImage()` method.
```javascript
function createAsteroid(type, x, y) {
  var a = createSprite(x, y);
  var img  = loadImage("images/asteroid"+floor(random(0,3))+".png");
  a.addImage(img);
}
```
You will notice that we're calling `loadImage()` in an interesting way.

Within the path of the image file, we're calling a `random()` method to pick a number between 0 and 3. The `random()` method in the P5.js library actually works similarly to the native JavaScript `Math.random()` method, but in this case, it picks a _floating point number_ between 0 and up to, but *_not_* including 3.

Since it is a floating point number, the number returned from `random()` has a decimal portion.  We round down to the nearest whole integer using the `floor()` method.  Combined, `floor(random(0,3))` it will return an integer between 0 and 3, but not 3.  This matches up with the actual names of our asteroid images.  Each time through this section of code, it will use a different asteroid image, chosen randomly.

lastly, we use the `addImage()` method to assign the actual image as a property for the asteroid object "a".

We'll now make our asteroids move so that you can see them on the canvas.  They will need a speed and a direction. For fun, we're also going to ask them asteroids to rotate. We'll use the `setSpeed()` method and assign the `rotationSpeed` parameter combined with a random angle between 0 and 360.

Your function should now look like this:
```javascript
function createAsteroid(type, x, y) {
  var a = createSprite(x, y);
  var img  = loadImage("images/asteroid"+floor(random(0,3))+".png");
  a.addImage(img);
  a.setSpeed(2.5-(type/2), random(360));
  a.rotationSpeed = .5;
}
```
We'll lastly add the generated asteroids to our group and return the asteroid, with all of it's properties to the `setup()` function so that they can be drawn on the screen.

Your function should now look like this:
```javascript
function createAsteroid(type, x, y) {
  var a = createSprite(x, y);
  var img  = loadImage("images/asteroid"+floor(random(0,3))+".png");
  a.addImage(img);
  a.setSpeed(2.5-(type/2), random(360));
  a.rotationSpeed = .5;

  asteroids.add(a);
  return a;
}
```

### Blowing Things Up



## Part IV: Hacking
Perhaps you can think of a few ways to improve on this classic game?

Here are a few suggestions:
1. Change the look!  Use free pre-created images to be your spaceship and asteroids.  Add a background.
2. Keep score!  
3. Make a top 10 scoreboard using Firebase!

## Part V: Sharing
Post to #shipit or Hack Club ship it site?
