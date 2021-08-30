unwrap.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: unwrapTranslationsAndContexts,
  });
});

function unwrapTranslationsAndContexts() {
  document.querySelectorAll('[id^="buttonTranslation"]').forEach(element => {
    element.click();
  });
  document.querySelectorAll('[id^="buttonContext"]').forEach(element => {
    element.click();
  });
}
