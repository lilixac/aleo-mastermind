import { Mastermind_v0000001Contract } from '../artifacts/js/mastermind_v0000001';

const contract = new Mastermind_v0000001Contract();

(async () => {
  const result = await contract.deploy();
  console.log(result);
})();
