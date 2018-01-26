# water-walls

##Prompt

  We are going to represent a series of walls of different integer heights.

  Given heights of [5, 3, 7, 2, 6, 4, 5, 9, 1, 2], it would look like this:

  Now imagine that it rains.

  Your goal is to determine which two walls have the most water trapped between them, and exactly how much water that is.

  Output for the above: [3, 8, 11]. I.e., between wall #3 and wall #8, there are 11 blocks of water.

```js
/*
Strategy: Find the first wall, and continue to iterate until hitting a wall
that is Taller than the first. Then take the area between the two walls, 
and calculate the difference between the total area between and the walls that occupy the cavity.

Case Study:
[5, 3, 7, 4]
 ^
1st wall height: 5

[5, 3, 7, 4]
 ^  ^
1st wall height: 5
2nd wall height: 3 -> 3 is less than 5 -> search for second wall

[5, 3, 7, 4]
 ^     ^
1st wall height: 5
2nd wall height: 7 -> 7 is greater than 5 -> assign second wall then..

  Find area of the cavity:
    [5, 3, 7, 4]
     ^     ^
    find the width of the cavity
    position of 5 is 1
    position of 7 is 3
    2 degree of seperation therefore x = 1

    find the height of the cavity
    height 5 is less than 7 therefore y = 5

    find the area of the cavity
    1 * 5 = 5

    find the area that is occupied with walls: 3

    therefore area of droplets is 2

Set as current largest area of trapped water
position wall 1 = 1
position of wall 2 = 3
area of blocks of water = 2

[5, 3, 7, 4]
       ^
1st wall height: 7

[5, 3, 7, 4]
       ^  ^
1st wall height: 7
2nd wall height: 4 -> 4 is less than 7 -> search for second wall..

iteration is done,
return largest area of trapped water
*/
```