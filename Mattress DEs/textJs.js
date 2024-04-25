
[CDATA[
(function() {
function riskifiedBeaconLoad() {
    var store_domain = 'kogan.com';
    var session_id = getCookieByName('K.ID');
    var url = ('https:' == document.location.protocol ? 'https://' : 'http://')
    + "beacon.riskified.com?shop=" + store_domain + "&sid=" + session_id;
    var s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = url;
    var x = document.getElementsByTagName('script')[0];
    x.parentNode.insertBefore(s, x);
}
if (window.attachEvent)
    window.attachEvent('onload', riskifiedBeaconLoad)
else
    window.addEventListener('load', riskifiedBeaconLoad, false);
})();

