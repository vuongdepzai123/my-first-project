chrome.storage.local.get(["limits", "timeData"], (result) => {
  const limits = result.limits || {};
  const timeData = result.timeData || {};

  const domain = location.hostname;

  if (limits[domain] && timeData[domain] >= limits[domain]) {
    document.documentElement.innerHTML = `
      <h1 style="text-align:center;margin-top:20%">
        out of time use ts web nigger
      </h1>
    `;
  }
});
