chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  body = document.body.cloneNode(true);
  body.setAttribute("oncontextmenu", "");
  document.body.parentNode.replaceChild(body, document.body);
});
