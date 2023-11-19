let isModified = false;

function modifyHeaders() {
  const headers = document.querySelectorAll('h4.lead.text-center');
  headers.forEach(header => {
    header.style.fontWeight = isModified ? 'normal' : 'bold';
    header.style.transform = isModified ? 'none' : 'rotate(270deg)';
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
