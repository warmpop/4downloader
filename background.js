// Intercept navigations to tinurlz.com/got/
chrome.webNavigation.onBeforeNavigate.addListener(
  (details) => {
    const url = details.url;

    // Extract everything after the # fragment
    const hashIndex = url.indexOf('#');
    if (hashIndex === -1) return;

    const afterHash = url.slice(hashIndex + 1);

    // afterHash is a URL like: https://dpwpkbsumut.id/...?dl=ENCODED_LINK
    // We need to extract the `dl` parameter from it
    let embeddedUrl;
    try {
      embeddedUrl = new URL(afterHash);
    } catch (e) {
      console.log('4Download Skipper: Could not parse embedded URL', afterHash);
      return;
    }

    const dlParam = embeddedUrl.searchParams.get('dl');
    if (!dlParam) {
      console.log('4Download Skipper: No dl= param found in', afterHash);
      return;
    }

    // Decode the final destination URL
    const finalUrl = decodeURIComponent(dlParam);
    console.log('4Download Skipper: Redirecting to', finalUrl);

    // Redirect the tab to the real download link
    chrome.tabs.update(details.tabId, { url: finalUrl });
  },
  {
    url: [{ hostEquals: 'tinurlz.com', pathPrefix: '/got/' }]
  }
);
