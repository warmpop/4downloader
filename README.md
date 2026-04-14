# 4downloader

A tiny Chrome extension that skips the 30-second ad redirect on 4download.net and takes you straight to the real download.

## How it works

When you click a download link on 4download.net, the site routes you through `tinurlz.com/got/#...` which redirects to an ad wall you have to wait through. This extension intercepts that navigation before the page even loads, extracts the real download URL buried inside it, and sends you there directly.

---

## Installation

1. Download or clone this repo
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** using the toggle in the top-right corner
4. Click **Load unpacked** and select the folder containing these files
5. The extension is now active — no restart needed

## Updating

If the extension ever needs a fix, pull the latest changes from this repo, then go to `chrome://extensions/` and click the **reload icon** (↺) on the extension card. I will update this repo if the URLs used change, but feel free to make a PR/issue if this extension stops working.
