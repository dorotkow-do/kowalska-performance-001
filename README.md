# kowalska-performance-001
This is a k6 training project for API testing.

It creates html report and, if parameter --summary-export is used, json report.

Without parameters, it uses 100 users for 15 minutes -- which is considered a good duration including ramp up, steady state and graceful shutdown. (The real project's duration should be established based on the expected load and the target API's performance characteristics -- in my last project, we performed tests for at least 1 hour.)
The target API (reqres.in) has very low request limit (250 requests per day), so my recommendation is to change the target API to locally running one, for example a jsonplaceholder local server, if we really want to perform the tests using 100 users for 15 minutes.

## Installation

```bash
npm install k6
```

## Usage

```bash
npm run test
``` 
## Usage with parameters

```bash
npm run test -- -e VUS=10 -e DURATION=1m --summary-export=result.json
``` 