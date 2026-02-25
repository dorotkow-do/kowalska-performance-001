import http from 'k6/http';
import { check, sleep } from 'k6';

// k6 configuration options
export const options = {
  vus: __ENV.VUS || 1,                 // Number of virtual users
  duration: __ENV.DURATION || '6s',          // Duration of the test
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
