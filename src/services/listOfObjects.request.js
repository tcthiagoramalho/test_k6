import http from 'k6/http';
import { sleep, check } from 'k6';

export default function listOfObjectRequest() {
  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const resGet = http.get('https://api.restful-api.dev/objects', params);

  check(resGet, {
    'status is 200': (r) => r.status === 200,
    'body contains status': (response) => response.body.includes('name'),
    'máximo de duração': (r) => r.timings.duration < 3000,
  });

  sleep(1);
}
