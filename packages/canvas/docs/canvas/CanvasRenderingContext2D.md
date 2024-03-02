# CanvasRenderingContext2D

This page lists the methods and properties of the `CanvasRenderingContext2D` object returned by the `canvas.getContext('2d')`.

## Drawing Rectangles

The plugin provides several methods for drawing rectangles on the canvas:

### fillRect(x, y, width, height)

```ts
canvasContext.fillRect(50, 50, 100, 100);
```

Draws a filled rectangle at `(x, y)` with the specified width and height.

---

### strokeRect(x, y, width, height)

```ts
canvasContext.strokeRect(50, 50, 100, 100);
```

Draws the outline of a rectangle at `(x, y)` with the specified width and height.

---

### clearRect(x, y, width, height)

```ts
canvasContext.clearRect(50, 50, 100, 100);
```

Clears the specified rectangular area.
