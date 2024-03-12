import {
  secret,
  move,
  guess
} from "./types/mastermind_v0000001";
import {
  getsecretLeo,
  getmoveLeo,
  getguessLeo
} from "./js2leo/mastermind_v0000001";
import {
  getsecret,
  getmove,
  getguess
} from "./leo2js/mastermind_v0000001";
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

export class Mastermind_v0000001Contract extends BaseContract {

  constructor(config: ContractConfig = {}) {
    super(config);
    this.config = {
      ...this.config,
      appName: 'mastermind_v0000001',
      contractPath: 'artifacts/leo/mastermind_v0000001',
      fee: '0.01'
    };
  }
  async offer_game(r0: bigint, r1: secret, r2: LeoAddress): Promise < [LeoRecord, TransactionModel] > {
    const r0Leo = js2leo.field(r0);
    const r1Leo = js2leo.json(getsecretLeo(r1));
    const r2Leo = js2leo.address(r2);

    const params = [r0Leo, r1Leo, r2Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'offer_game',
      params,
    });
    const out0 = result.data[0];
    return [out0, result.transaction];
  }

  async accept_game(r0: move, r1: secret): Promise < [LeoRecord, TransactionModel] > {
    const r0Leo = js2leo.json(getmoveLeo(r0));
    const r1Leo = js2leo.json(getsecretLeo(r1));

    const params = [r0Leo, r1Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'accept_game',
      params,
    });
    const out0 = result.data[0];
    return [out0, result.transaction];
  }

  async start_game(r0: move, r1: guess): Promise < [LeoRecord, TransactionModel] > {
    const r0Leo = js2leo.json(getmoveLeo(r0));
    const r1Leo = js2leo.json(getguessLeo(r1));

    const params = [r0Leo, r1Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'start_game',
      params,
    });
    const out0 = result.data[0];
    return [out0, result.transaction];
  }

  async play(r0: move, r1: secret, r2: guess): Promise < [LeoRecord, TransactionModel] > {
    const r0Leo = js2leo.json(getmoveLeo(r0));
    const r1Leo = js2leo.json(getsecretLeo(r1));
    const r2Leo = js2leo.json(getguessLeo(r2));

    const params = [r0Leo, r1Leo, r2Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'play',
      params,
    });
    const out0 = result.data[0];
    return [out0, result.transaction];
  }

  async win(r0: move): Promise < [TransactionModel] > {
    const r0Leo = js2leo.json(getmoveLeo(r0));

    const params = [r0Leo]
    const result = await zkRun({
      config: this.config,
      transition: 'win',
      params,
    });
    return [result.transaction];
  }

  async isGameCreated(key: bigint, defaultValue ? : boolean): Promise < boolean > {
    const keyLeo = js2leo.field(key);

    const params = [keyLeo]
    const result = await zkGetMapping({
      config: this.config,
      transition: 'isGameCreated',
      params,
    });

    if (result != null)
      return leo2js.boolean(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`isGameCreated returned invalid value[input: ${key}, output: ${result}`);
    }
  }

  async gameWinners(key: bigint, defaultValue ? : LeoAddress): Promise < LeoAddress > {
    const keyLeo = js2leo.field(key);

    const params = [keyLeo]
    const result = await zkGetMapping({
      config: this.config,
      transition: 'gameWinners',
      params,
    });

    if (result != null)
      return leo2js.address(result);
    else {
      if (defaultValue != undefined) return defaultValue;
      throw new Error(`gameWinners returned invalid value[input: ${key}, output: ${result}`);
    }
  }


}