function getword(info,tab) {
  console.log("Opening" + info.linkUrl );
  chrome.tabs.create({  
    url: "https://docs.google.com/viewer?hl=en&embedded=true&url=" + info.linkUrl  + "/",
  });
}
chrome.contextMenus.create({
  title: "Open in Document Viewer", 
  contexts:["link"], 
  onclick: getword
});