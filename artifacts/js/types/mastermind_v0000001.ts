import {
  z
} from "zod";
import {
  leoAddressSchema,
  leoPrivateKeySchema,
  leoViewKeySchema,
  leoTxIdSchema,
  leoScalarSchema,
  leoFieldSchema,
  leoBooleanSchema,
  leoU8Schema,
  leoU16Schema,
  leoU32Schema,
  leoU64Schema,
  leoU128Schema,
  leoGroupSchema,
  leoRecordSchema,
  leoTxSchema,
  leoSignatureSchema,
  LeoArray,
  LeoAddress
} from "@doko-js/core";

export interface secret {
  first: number;
  second: number;
  third: number;
  blinding_factor: bigint;
}

export const leoSecretSchema = z.object({
  first: leoU8Schema,
  second: leoU8Schema,
  third: leoU8Schema,
  blinding_factor: leoFieldSchema,
});
export type secretLeo = z.infer < typeof leoSecretSchema > ;

export interface game {
  id: bigint;
  started: boolean;
  finished: boolean;
}

export const leoGameSchema = z.object({
  id: leoFieldSchema,
  started: leoBooleanSchema,
  finished: leoBooleanSchema,
});
export type gameLeo = z.infer < typeof leoGameSchema > ;

export interface guess {
  first: number;
  second: number;
  third: number;
}

export const leoGuessSchema = z.object({
  first: leoU8Schema,
  second: leoU8Schema,
  third: leoU8Schema,
});
export type guessLeo = z.infer < typeof leoGuessSchema > ;

export interface player {
  addr: LeoAddress;
  secret_hash: bigint;
}

export const leoPlayerSchema = z.object({
  addr: leoAddressSchema,
  secret_hash: leoFieldSchema,
});
export type playerLeo = z.infer < typeof leoPlayerSchema > ;

export interface move {
  owner: LeoAddress;
  gates: bigint;
  game: game;
  player_1: player;
  player_2: player;
  guess: guess;
  hits: number;
  blows: number;
  _nonce: bigint;
}

export const leoMoveSchema = z.object({
  owner: leoAddressSchema,
  gates: leoU64Schema,
  game: leoGameSchema,
  player_1: leoPlayerSchema,
  player_2: leoPlayerSchema,
  guess: leoGuessSchema,
  hits: leoU8Schema,
  blows: leoU8Schema,
  _nonce: leoGroupSchema,
});
export type moveLeo = z.infer < typeof leoMoveSchema > ;