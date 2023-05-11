import { group } from 'k6';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
import listOfObjectRequest from '../services/listOfObjects.request.js';

export function handleSummary(data) {
  let date = Date().slice(0, 15);
  return {
    [`./report/summaryTest${date}.html`]: htmlReport(data),
  };
}

export const options = {
  thresholds: {
    http_req_failed: ['rate<0.50'],
    http_req_duration: ['p(90)<5000'],
  },
  stages: [
    { duration: '10s', target: 1 },
  ],
};

export default function () {
  group('Teste add object', function () {
    listOfObjectRequest();
  });
}
