## PS2 MDDN 242 2018

This is a system where characters are drawn by the motion of 1-pixel particles
tracing a path between four points that they approach in sequence.

---

### Changes:

- Prevented the interpolation pages from crashing

### Issues:

- Interpolation does not actually work, there's no tidy way to do so given the way drawLetters is called

### To-Do:

- Bundle it up.