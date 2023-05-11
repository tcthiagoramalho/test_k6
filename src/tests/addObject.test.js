import { group } from 'k6';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
import addObjectRequest from '../services/addObject.request.js';

export function handleSummary(data) {
  let date = Date().slice(0, 15);
  return {
    [`./report/summaryTest${date}.html`]: htmlReport(data),
  };
}

export default function () {
  group('Teste add object', function () {
    addObjectRequest();
  });
}
