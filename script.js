//your JS code here. If required.
const browserInfo = document.getELementById('browser-info');

function displayBrowserInfo(){
 const browesrName = navigator.appName;
const browserVersion = navigator.appVersion;

const infoMessage = document.createTextNode( "You are using " + browserName + " version " + browserVersionersion.);
browserInfo.innerHTML = '';
browserInfo.appendChild(infoMessage);
}
displayBrowserInfo();