### How canvas fingerprints work

The way shapes are drawn to an HTML canvas change slightly, depending on your GPU and browser. This can be used to create a unique identifier for your device. The code
[here](https://canvas-fingerprint.web.app) draws some shapes to a canvas and hashes the resulting image.
