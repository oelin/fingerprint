# Fingerprint

Fingerprint is a tiny web page which lets you instantly generate [canvas fingerprints](https://en.wikipedia.org/wiki/Canvas_fingerprinting) for your browser! This is useful in discovering the extent to which your browser is susceptible to cross-site tracking via canvas-based techniques. The implementation really is *tiny*, with the core fingerprinting code only requiring about 300 bytes. 

<img src='./fingerprint.png'>


## Installation

```sh
$ npx serve .
```

You can also driectly copy-and-paste the code below into your projects to add fingerprinting functionality. Note that code requires a [secure execution context](https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts) to run correctly.


```js
async function createCanvasFingerprint() {

	let canvasElement = document.createElement('canvas')
	let canvasContext = canvasElement.getContext('2d')

	canvasContext.fillText('abc', 0, 100)
	canvasContext.beginPath()
	canvasContext.arc(20, 20, 20, 0, 6)
	canvasContext.fillStyle = 'red'
	canvasContext.fill()

	let canvasData = (new TextEncoder).encode(canvasElement.toDataURL())
	let canvasFingerprint = await crypto.subtle.digest('sha-1', canvasData)

	canvasFingerprint = new Uint8Array(canvasFingerprint)
	canvasFingerprint = String.fromCharCode(...canvasFingerprint)
	canvasFingerprint = btoa(canvasFingerprint)

	return canvasFingerprint 
}
```


## Resources

* [Canvas Fingerprinting - Wikipedia](https://en.wikipedia.org/wiki/Canvas_fingerprinting)
* [Canvas Fingerprinting - BrowserLeaks](https://browserleaks.com/canvas)
* [How Does Canvas Fingerprinting Work - Fingerprint](https://fingerprint.com/blog/canvas-fingerprinting/)
