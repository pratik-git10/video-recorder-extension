const runCode = async () => {
  const tab = await chrome.tabs.query({ active: true, currentWindow: true });

  if (!tab) return;

  const tabId = tab[0].id;
  console.log("injext into tab", tabId);
  await chrome.scripting.executeScript({
    files: ["content.js"],
    target: { tabId },
  });
};

runCode();
