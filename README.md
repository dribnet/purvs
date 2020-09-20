## 2020 MDDN342 Assignment 2: Randomised Collections


My idea is to create three variations of frogs. Some continuous variables will be the body shape, eye openness, eye position, and head shape. Some discrete variables will be if they're winking, eye pupil shape and mouth shape. Two variations will be full body and one will be a side-profile of the head.

Weighted Selection

The continuous variables are: body size/shape, eye size, eye position, mouth shape and colour.
The discrete variables are: expression, eye type, belly colour, pupil type and also colour.

For colour, there is a 2.8/3 (93.33%) chance that the colour will be continuous and will interpolate between three different colour variables. Otherwise the frog will be coloured in a solid 4th colour. For the side frog it is orange and the blob frog will be coloured in brown.
For side frog, there is a 0.25 chance that it will face the side fully. If it is facing the side, then there is a 0.5 chance that the eye will be slanted and it will also have an eye bump. If it is facing slightly forward, there is a 0.3/0.75 chance that it will have eye bumps.
Blob frog has a under half chance of having a light coloured belly and has the same chance to open its mouth. Side frog has a high chance to have a coloured belly.
Each eye/pupil type has the equal amount of chance to appear.


REPLACE ALL TEXT IN THIS FILE

This README should eventually explain the different paramaterised faces.
