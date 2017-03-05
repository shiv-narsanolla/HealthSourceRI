app.constant("SessionKeeperConst", {
    namespace : "healthSourceData",
    sessionObject: "current"
}).service("SessionKeeper", ["$rootScope", "$log", "SessionKeeperConst", function($rootScope, $log, SessionKeeperConst) {
        var session = {
                namespace: SessionKeeperConst.namespace,
                obj: SessionKeeperConst.sessionObject
            };
        var readSession = function() {
                if (sessionStorage && sessionStorage.getItem(session.namespace)) {
                    var val = sessionStorage.getItem(session.namespace);
                    if (val &&  val != undefined) {
                        var sessionJSON = JSON.parse(val);
                        return sessionJSON;
                    }
                }
                return null
            };
        var saveSession = function(value) {
                if (value = value || sessionStorage)
                    try {
                        var txt = JSON.stringify(value);
                        sessionStorage.setItem(session.namespace, txt)
                    } catch (e) {
                        this.log.error(e)
                    }
                else
                    $log.error("Session did not save.")
            };
        var clearSession = function() {
                if (sessionStorage)
                    try {
                        sessionStorage.removeItem(session.namespace)
                    } catch (e) {}
            };
        return {
            read:  readSession,
            save: saveSession,
            clear: clearSession
        }
    }
    ]);