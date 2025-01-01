console.log("Popup loaded!");
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");

    // Check the current state of the rule
    chrome.declarativeNetRequest.getEnabledRulesets((rulesets) => {
        if (rulesets.includes("ruleset")) {
            toggleButton.textContent = "Disable Redirection";
        } else {
            toggleButton.textContent = "Enable Redirection";
        }
    });

    toggleButton.addEventListener("click", () => {
        chrome.declarativeNetRequest.getEnabledRulesets((rulesets) => {
            if (rulesets.includes("ruleset")) {
                // Disable the redirection rule
                chrome.declarativeNetRequest.updateEnabledRulesets({
                    disableRulesetIds: ["ruleset"]
                }, () => {
                    toggleButton.textContent = "Enable Redirection";
                });
            } else {
                // Enable the redirection rule
                chrome.declarativeNetRequest.updateEnabledRulesets({
                    enableRulesetIds: ["ruleset"]
                }, () => {
                    toggleButton.textContent = "Disable Redirection";
                });
            }
        });
    });
});

