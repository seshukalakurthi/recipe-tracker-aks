import http from 'k6/http';
import { sleep, check } from 'k6';

export let options = {
  vus: 600,           
  duration: '60s', 
};

export default function () {
  let res = http.get('http://135.171.43.253'); 

  check(res, {
    'status is 200': (r) => r.status === 200,
  });

  sleep(1);
}
