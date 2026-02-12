chrome.runtime.onMessage.addListener((msg) => {
  if (!msg.tabId) return;

  const file =
    msg.mode === "simplify"
      ? "content/simplify.js"
      : "content/focus.js";

  chrome.scripting.executeScript({
    target: { tabId: msg.tabId },
    files: [file]
  });
});
