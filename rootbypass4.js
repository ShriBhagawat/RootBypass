'use strict';
if (Java.available) {
    Java.perform(function() {
        try {
            var RootCheck = Java.use("owasp.sat.agoat.RootDetectionActivity");
            RootCheck.isRooted.implementation = function() {
                return false;
            };
        } catch (e) {
            console.log("[-] Error Detected\n" + e.stack);
        }
    });
} else {
    console.log("[-] Java is Not available");
}
