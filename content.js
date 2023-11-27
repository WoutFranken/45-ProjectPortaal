let isModified = false;

function modifyHeaders() {
  const headers = document.querySelectorAll('.jss325');
  headers.forEach(header => {
    header.style.fontWeight = isModified ? 'normal' : 'bold';
    header.style.transform = isModified ? 'none' : 'rotate(45deg)';
  });
}

// Initial modification when the content script is injected
modifyHeaders();

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === 'toggle') {
    isModified = !isModified;
    modifyHeaders();
  }
});
