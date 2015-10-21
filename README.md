Red Hat Mobile Application Platform & JBoss BPMSuite Integration Client App Demo
================================================================================

This is the Red Hat Mobile Application Platform (MAP) - JBoss BPMSuite (BPMS) integration demo that provides examples of a form-based client application (Cordova Light Forms App).

Import the project into RH MAP
------------------------------
* Prerequisites:
	- Obtain a login and domain from the Red Hat Mobile team if you don't already have them.
	- You have already created a Bare Project and imported the [Cloud App](https://github.com/jbossdemocentral/mobile-bpms-cloudapp-integration-demo)

1. Login to the appropriate RH MAP domain.

2. Create a Client App ('+' to the top-right corner of Apps) -> Import Existing App -> Cordova Light -> Next -> Enter App Name -> select Public Git Repository

3. Enter Git URL as https://github.com/jbossdemocentral/mobile-bpms-clientapp-integration-demo.git -> Import and move onto integration

4. Form & Theme are in JSON format and need to be imported separately using FHC command.  Download the JSON gists from:

	- Download [Form](https://gist.github.com/hucmaggie/b0a7382d9d6ea49559d7)
	- Download [Theme](https://gist.github.com/hucmaggie/72c461a2b9d5ac54a7e5)
	- Open up command prompt:
		- fhc forms create RHSummit2015AutoClaimFormsApp.json
		- fhc theme create MaggiesSummit2015Theme.json

Notes
-----
This project is a bare git repo for the client app that can be imported into RH MAP.

Supporting Articles
-------------------
- [Red Hat Mobile Application Platform - Connecting to JBoss BPMSuite REST (Special Edition for Red Hat Summit 2015!)](http://maggiechu-jboss.blogspot.com/2015/06/red-hat-mobile-app-connecting-to-bpms-rest.html)
- [Using the Red Hat Mobile Unified Push Server](http://www.ossmentor.com/2015/07/using-red-hat-mobile-unified-push-server.html)