# 📐 Azimuth Overlay Extension for Google Maps

This Chrome Extension allows you to place and rotate a compass rose (azimuth image) on Google Maps. Useful for visualizing directions between points. [Click to install](https://chromewebstore.google.com/detail/mapangle/eojfbcmelnpfkanhhdklcejdljkgcmka).

![](https://github.com/nickname137/MapAngle/blob/main/mapAngle.png)
---

## ✨ Features

- 🖼️ Show or hide an azimuth (compass) overlay
- 🔄 Rotate the image in 90° steps
- ➕➖ Resize the overlay image
- 👆 Move the image using `CTRL + Click` on the map
- ⚫ Toggle between black and white compass designs

---

## 🧭 How to Use

### 1. Open Google Maps

Go to [https://maps.google.com](https://maps.google.com) in your browser.

### 2. Activate the Extension

Click the extension icon in your Chrome toolbar. The overlay and control panel will load on the map page.

### 3. Use the Controls

The control panel appears on the **right side** of the screen and includes the following buttons:

| Button | Description |
|--------|-------------|
| ➕ | Increase image size by 20px |
| ➖ | Decrease image size by 20px (minimum: 256px) |
| ⟲ | Rotate counter-clockwise (−90°) |
| ⟳ | Rotate clockwise (+90°) |
| 👁 | Toggle visibility of the compass image |
| ⚫ | Switch between black (`360b.png`) and white (`360w.png`) versions |

### 4. Move the Compass

Hold down the `CTRL` key and click anywhere on the map. The compass image will move to that position.

---

## 🎨 Design

- **Modern, minimal UI**
- **Color scheme**: white, black, and shades of grey
- **Fixed panel**: unobtrusively aligned to the right side
- **Image behavior**: centered, scalable, and rotatable

---

## 🖼️ Image Files

Your extension includes two images for different background contrast:

- `360w.png` — White compass on dark backgrounds
- `360b.png` — Black compass on light backgrounds

They can be toggled using the ⚫ button.

---

## 🔧 Customization

You can change the initial image size in the script:

## javascript
- let widthOfImage = 512; // Modify this for a different default size

## 📂 Files Overview
File | Description
-- | --
content.js | Main script that injects elements
360w.png | White compass image
360b.png | Black compass image
manifest.json | Chrome extension configuration
styles.css | CSS (if you separate styles)

## ✅ Tips
- The image doesn't block map interaction (pointer-events: none)
- It stays centered and rotates around its midpoint
- You can change button positions or styling in the CSS section

## 📬 Feedback
- Have suggestions? Found a bug? My telegram: @chiefbromden

