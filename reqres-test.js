import http from 'k6/http';
import { check, sleep } from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

// k6 configuration options
export const options = {
  stages: [
    { duration: '2m', target: __ENV.VUS || 100 },  // Ramp-up: 0 to 100 VUs over 2 mins
    { duration: __ENV.DURATION || '12m', target: __ENV.VUS || 100 }, // Steady state: Stay at 100 VUs for 12 mins
    { duration: '1m', target: 0 },   // Ramp-down: 100 to 0 VUs over 1 min
  ],
  summaryTrendStats: ['avg', 'min', 'med', 'max', 'p(50)', 'p(90)', 'p(99)'],
};

export default function () {
  // Get API key from environment variable (injected via the runner)
  const apiKey = __ENV.X_API_KEY;

  if (!apiKey) {
    console.error('Environment variable X_API_KEY is not defined. Please check your .env file.');
  }

  const url = 'https://reqres.in/api/users?page=2';

  const params = {
    headers: {
      'x-api-key': apiKey,
    },
  };

  // Perform the GET request
  const res = http.get(url, params);

  // Validate the response
  check(res, {
    'status is 200': (r) => r.status === 200,
    'response has data': (r) => {
      try {
        const body = JSON.parse(r.body);
        return body.data && body.data.length > 0;
      } catch (e) {
        return false;
      }
    },
  });

  // Wait for 1 second between iterations per virtual user
  sleep(1);
}

export function handleSummary(data) {
  return {
    [`test_result/summary_${new Date().toISOString().replace(/[:.]/g, '-')}.html`]: htmlReport(data),
  };
}
