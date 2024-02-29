# Canvas

The [@nativescript/canvas](https://github.com/NativeScript/canvas) plugin brings the [Skia Graphics Library](https://skia.org/) to NativeScript. It is not a webview, it uses native components.

The canvas plugin can be used with the following plugins:

- [@nativescript/babylon](https://www.npmjs.com/package/@nativescript/canvas-babylon): For rendering 3D graphics
- [@nativescript/canvas-polyfill](https://github.com/NativeScript/canvas/tree/master/packages/canvas-polyfill): For polyfilling the canvas API
- [@nativescript/canvas-media](https://github.com/NativeScript/canvas/tree/master/packages/canvas-media): For rendering video and audio
- [@nativescript/canvas-three](https://www.npmjs.com/package/@nativescript/canvas-three): For rendering 3D graphics
- [@nativescript/canvas-phaser](https://github.com/NativeScript/canvas/tree/master/packages/canvas-phaser): For rendering 2D graphics
- [@nativescript/canvas-pixi](https://github.com/NativeScript/canvas/tree/master/packages/canvas-pixi):
- [@nativescript/canvas-phaser-ce](https://github.com/NativeScript/canvas/tree/master/packages/canvas-phaser-ce)

## Installation

To install the plugin, run the following command in your app's root folder:

```bash
npm i @nativescript/canvas
```

## Register and use the Canvas element

The following tabs provide instructions on how to register and use the `Canvas` element in your flavor of NativeScript.

:::tabs key:flavor
== JS/TS

### Register the `Canvas` element

You register the `Canvas` element in NativeScript Core via the `xmlns` attribute and a prefix of your choice, for example `canvas`, as follows:

```xml
<Page xmlns:canvas="@nativescript/canvas" xmlns="http://schemas.nativescript.org/tns.xsd">
     <!-- ... -->
</Page>
```

### Use the `Canvas` element

== Angular
You register the `Canvas` element in Angular the project's `app.module.ts` file as follows:

```ts
import { registerElement } from '@nativescript/angular';
import { Canvas } from '@nativescript/canvas';

registerElement('Canvas', () => Canvas);
```

### Use the `Canvas` element

Once you have registered the `Canvas` element, you can use it in HTML as follows:

```html
<canvas #canvas width="300" height="500" (ready)="onReady($event)" (tap)="onTap($event)"></canvas>
```

== Vue
In Vue, you register the `Canvas` element in the `main.js` file as follows:

```ts
import { registerElement } from 'nativescript-vue';

registerElement('Canvas', () => require('@nativescript/canvas').Canvas);
```

### Use the `Canvas` element

Once you have registered the `Canvas` element, you can use it in your Vue component as follows:

```html
<template>
	<Page>
		<ActionBar title="Canvas" />
		<StackLayout>
			<canvas ref="canvas" width="300" height="500" @ready="onReady" @tap="onTap" />
		</StackLayout>
	</Page>
</template>
```

== Solid

== React

== Svelte

```ts
import { registerNativeViewElement } from 'svelte-native/dom';

registerNativeViewElement('canvas', () => require('@nativescript/canvas').Canvas);
```

:::

## Canvas API

The `Canvas` view class extends the [View](https://docs.nativescript.org/api/class/View) class, so it has all the properties, methods, and events of the `View` class.

In addition, the `Canvas` class has the following properties, methods, and events:

## Properties

| Name           | Type     | Description                                     |
| :------------- | :------- | :---------------------------------------------- |
| `clientWidth`  | `number` | The width of the canvas element's client area.  |
| `clientHeight` | `number` | The height of the canvas element's client area. |
| `native`       | `any`    | The native canvas object.                       |

## Methods

### getContext(type: '2d', options?: any)

Returns a [CanvasRenderingContext2D](./canvas-rendering-context-2d.md) object representing a `2D` drawing context for the canvas, or `null` if the context identifier is not supported.

```ts
cnt:  CanvasRenderingContext2D | null = canvas.getContext('2d');
```

#### Parameters

| Name    | Type                                  | Description                             |
| :------ | :------------------------------------ | :-------------------------------------- |
| type    | `string`                              | The context identifier. Must be `'2d'`. |
| options | [default2DOptions](#default2doptions) | The context options.                    |

#### default2DOptions

```ts
default2DOptions = {
	alpha: true,
	antialias: true,
	depth: true,
	failIfMajorPerformanceCaveat: false,
	powerPreference: 'default',
	premultipliedAlpha: true,
	preserveDrawingBuffer: false,
	stencil: false,
	desynchronized: false,
	xrCompatible: false,
};
```

### getContext(type: 'webgl', options?: any)

Returns a [WebGLRenderingContext](./WebGLRenderingContext.md) object representing a drawing context on the canvas for `3D` graphics, or `null` if the context identifier is not supported.

```ts
cnt:  WebGLRenderingContext | null = canvas.getContext('webgl');
```

## Events

| Name  | Params             | Description                                             |
| :---- | :----------------- | :------------------------------------------------------ |
| ready | `{object: Canvas}` | Emitted when the canvas has loaded and is ready to use. |
