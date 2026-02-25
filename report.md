# Test Report: 2026-02-25 15:32

## Summary

### Status: 

Failed

### Users: 

up to 10 looping VUs

### Duration: 

16.6s

#### Total Requests

55

#### Failed Requests

55

#### Breached Thresholds

0

#### Failed Checks

110

## Detailed Metrics

#### Trends & Times

|     | Avg | Min | Med | Max | P(50) | P(90) | P(99) |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **http\_req\_blocked** | 8.54 | 0.00 | 0.00 | 56.08 | 0.00 | 45.44 | 52.55 |
| **http\_req\_connecting** | 2.78 | 0.00 | 0.00 | 17.36 | 0.00 | 15.23 | 17.03 |
| **http\_req\_duration** | 60.28 | 53.03 | 57.76 | 145.91 | 57.76 | 63.68 | 111.09 |
| **http\_req\_receiving** | 0.57 | 0.10 | 0.31 | 3.01 | 0.31 | 1.27 | 2.43 |
| **http\_req\_sending** | 0.29 | 0.07 | 0.19 | 4.91 | 0.19 | 0.31 | 2.47 |
| **http\_req\_tls\_handshaking** | 5.36 | 0.00 | 0.00 | 35.88 | 0.00 | 28.46 | 33.62 |
| **http\_req\_waiting** | 59.42 | 52.54 | 56.66 | 145.55 | 56.66 | 62.89 | 110.62 |
| **iteration\_duration** | 2070.33 | 2054.91 | 2058.99 | 2204.09 | 2058.99 | 2109.43 | 2155.45 |

#### Rates

|     | Rate % | Pass Count | Fail Count |
| --- | --- | --- | --- |
| **http\_req\_failed** | 100.00% | 55.00 | 0.00 |

 Test Run Details

#### Checks

Passed 0

Failed 110

#### Iterations

Total 55

Rate 3.31/s

#### Virtual Users

Min 1

Max 10

#### Requests

Total 55

Rate 3.31/s

#### Data Received

Total 0.16 MB

Rate 0.01 mB/s

#### Data Sent

Total 0.02 MB

Rate 0.00 mB/s

 Checks & Groups

## Other Checks

| Check Name | Passes | Failures | % Pass |
| --- | --- | --- | --- |
| status is 200 | 0   | 55  | 0.00 |
| response has data | 0   | 55  | 0.00 |