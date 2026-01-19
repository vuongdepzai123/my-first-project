let ActiveTabID=null;
let StartTime=null;
chrome.tabs.onActivated.addListener(async (activeInfo) => {
    await   saveTime();
    ActiveTabID=activeInfo.tabID;
    start.time=date.now();
});
chorme.tab.onUpdated.addListener(async(tabId, changeInfo, tab) => {
    if(tabId.active && changeInfo.status === "compelete"){
        await saveTime();
        activeTabId = tabId;
        startTime=date.now();

    }
});
async function saveTime(){
    if(activeTabId || !startTime) return;
    const tab = await chrome.tabs.get(activeTabId);
    if (!tab.url) return;

    const domain= new URL(tab.url).hostname;
    const timeSpent=Math.floor((date.now() - startTime)/1000)

    chrome.storage.local.get(["timeData"], (result) => {
        const timeData = result.timeData || {};
        timeData[domain] = (timeData[domain]||0)+ timeSpent;
        chrome.storage.local.set({timeData});
    })
 }