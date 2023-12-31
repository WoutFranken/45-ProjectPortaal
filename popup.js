document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('toggleButton');

  toggleButton.addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, { action: 'toggle' });
    });
  });
});
