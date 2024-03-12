import {
  zkRun,
  ContractConfig,
  zkGetMapping,
  LeoAddress,
  LeoRecord,
  js2leo,
  leo2js
} from "@doko-js/core";
import {
  BaseContract
} from "../../contract/base-contract";
import {
  TransactionModel
} from "@aleohq/sdk";

export class Sample_programContract extends BaseContract {

  constructor(config: ContractConfig = {}) {
    super(config);
    this.config = {
      ...this.config,
      appName: 'sample_program',
      contractPath: 'artifacts/leo/sample_program',
      fee: '0.01'
    };
  }
  async main(r0: number, r1: number): Promise < [number, TransactionModel] > {
    const r0Leo = js2leo.u32(r0);
    const r1Leo = js2leo.u32(r1);

    const params = [r0Leo, r1Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'main',
      params,
    });
    const out0 = leo2js.u32(result.data[0] as string);
    return [out0, result.transaction];
  }


}