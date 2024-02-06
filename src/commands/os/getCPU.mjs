import { cpus } from 'node:os';

class ListCPUs {
  constructor(model, rate) {
    this.model = model;
    this.rate = rate;
  }
}

export default function getCPU() {
  const data = cpus();
  console.log(`\noverall amount of CPUS: ${data.length}`);
  console.log(`model: ${data[0].model.trim()}`);
  console.log(`model: ${(data[0].speed / 1000).toFixed(2)}GHz\n`);
  const list = data.map((e) => new ListCPUs(
    e.model.trim(),
    `${(data[0].speed / 1000).toFixed(2)}GHz`,
  ));
  console.table(list);
}
