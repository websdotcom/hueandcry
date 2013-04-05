hueandcry
=========

A game for the Hue lightbulb

Installation
------------

- `npm install`
- open index.html in your browser
- keys 1, 2 and 3 map to red, blue and green. Press them in order to keep the window from going all black or all white.

Ideas
-----

The game is currently way too hard. Possible fixes are:

- Fiddle with the accelerations. (I tried this, wasn't obvious how to make it easier without being boring.)
- Create a 'terminal velocity' so that the gravitation acceleration doesn't make it go so fast.
- Make the high-saturation walls (all red, green, or blue) in-play and cause the ball to rebound in the other direction. Game only ends if we get to all-white or all-black.

Next steps
----------

- Move all the logic to a server-side program
- Show the current game state on the Hue light bulb.
- Clients get assigned a color and have a way to activate it (by swinging their phones?)
