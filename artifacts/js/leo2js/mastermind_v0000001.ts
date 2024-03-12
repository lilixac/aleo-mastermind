import {
  secret,
  secretLeo,
  game,
  gameLeo,
  guess,
  guessLeo,
  player,
  playerLeo,
  move,
  moveLeo
} from "../types/mastermind_v0000001";
import {
  leo2js
} from "@doko-js/core";


export function getsecret(secret: secretLeo): secret {
  const result: secret = {
    first: leo2js.u8(secret.first),
    second: leo2js.u8(secret.second),
    third: leo2js.u8(secret.third),
    blinding_factor: leo2js.field(secret.blinding_factor),
  }
  return result;
}

export function getgame(game: gameLeo): game {
  const result: game = {
    id: leo2js.field(game.id),
    started: leo2js.boolean(game.started),
    finished: leo2js.boolean(game.finished),
  }
  return result;
}

export function getguess(guess: guessLeo): guess {
  const result: guess = {
    first: leo2js.u8(guess.first),
    second: leo2js.u8(guess.second),
    third: leo2js.u8(guess.third),
  }
  return result;
}

export function getplayer(player: playerLeo): player {
  const result: player = {
    addr: leo2js.address(player.addr),
    secret_hash: leo2js.field(player.secret_hash),
  }
  return result;
}

export function getmove(move: moveLeo): move {
  const result: move = {
    owner: leo2js.address(move.owner),
    gates: leo2js.u64(move.gates),
    game: getgame(move.game),
    player_1: getplayer(move.player_1),
    player_2: getplayer(move.player_2),
    guess: getguess(move.guess),
    hits: leo2js.u8(move.hits),
    blows: leo2js.u8(move.blows),
    _nonce: leo2js.group(move._nonce),
  }
  return result;
}