# countApplesAndOranges
Sam's house has an apple tree and an orange tree that yield an abundance of fruit. In the diagram below, the red region denotes his house, where *s* is the start point, and *t* is the endpoint. The apple tree is to the left of his house, and the orange tree is to its right. You can assume the trees are located on a single point, where the apple tree is at point *a*, and the orange tree is at point *b*.

When a fruit falls from its tree, it lands *d* units of distance from its tree of origin along the *x*-axis. A negative value of *d* means the fruit fell *d* units to the tree's left, and a positive value of *d* means it falls *d* units to the tree's right.

Given the value of *d* for *m* apples and *n* oranges, determine how many apples and oranges will fall on Sam's house (i.e., in the inclusive range [s, t])?

For example, Sam's house is between s = 7 and t = 10. The apple tree is located at a = 4 and the orange at b = 12. There are m =3 apples and n = 3 oranges. Apples are thrown apples = [2, 3, -4] units distance from *a*, and oranges = [3, -2, -4] units distance. Adding each apple distance to the position of the tree, they land at [4 + 2, 4 + 3, 4 + -4] = [6, 7, 0]. Oranges land at [12 + 3, 12 + -2, 12 + -4] = [15, 10, 8]. One apple and two oranges land in the inclusive range 7 - 10 so we print
```
1
2
```
Complete the countApplesAndOranges function. It should print the number of apples and oranges that land on Sam's house, each on a separate line.

countApplesAndOranges has the following parameter(s):
- s: integer, starting point of Sam's house location.
- t: integer, ending location of Sam's house location.
- a: integer, location of the Apple tree.
- b: integer, location of the Orange tree.
- apples: integer array, distances at which each apple falls from the tree.
- oranges: integer array, distances at which each orange falls from the tree.