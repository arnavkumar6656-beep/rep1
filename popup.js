function sendMode(mode) {
  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    chrome.runtime.sendMessage({ mode, tabId: tab.id });
  });
}

document.getElementById("simplify").onclick = () => sendMode("simplify");
document.getElementById("focus").onclick = () => sendMode("focus");
