export default async function createCanvasFingerprint() {

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
