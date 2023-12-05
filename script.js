//your JS code here. If required.

document.addEventListener("DOMContentLoaded", function() {
  const browserInfoDiv = document.getElementById('browser-info');

  const browserName = navigator.appName;
  const browserVersion = navigator.appVersion;

  const infoMessage = "You are using " + browserName + " version " + browserVersion;

  browserInfoDiv.textContent = infoMessage;
});
