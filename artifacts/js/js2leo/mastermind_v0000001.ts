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
  js2leo
} from "@doko-js/core";


export function getsecretLeo(secret: secret): secretLeo {
  const result: secretLeo = {
    first: js2leo.u8(secret.first),
    second: js2leo.u8(secret.second),
    third: js2leo.u8(secret.third),
    blinding_factor: js2leo.field(secret.blinding_factor),
  }
  return result;
}

export function getgameLeo(game: game): gameLeo {
  const result: gameLeo = {
    id: js2leo.field(game.id),
    started: js2leo.boolean(game.started),
    finished: js2leo.boolean(game.finished),
  }
  return result;
}

export function getguessLeo(guess: guess): guessLeo {
  const result: guessLeo = {
    first: js2leo.u8(guess.first),
    second: js2leo.u8(guess.second),
    third: js2leo.u8(guess.third),
  }
  return result;
}

export function getplayerLeo(player: player): playerLeo {
  const result: playerLeo = {
    addr: js2leo.address(player.addr),
    secret_hash: js2leo.field(player.secret_hash),
  }
  return result;
}

export function getmoveLeo(move: move): moveLeo {
  const result: moveLeo = {
    owner: js2leo.privateField(js2leo.address(move.owner)),
    gates: js2leo.privateField(js2leo.u64(move.gates)),
    game: getgameLeo(move.game),
    player_1: getplayerLeo(move.player_1),
    player_2: getplayerLeo(move.player_2),
    guess: getguessLeo(move.guess),
    hits: js2leo.privateField(js2leo.u8(move.hits)),
    blows: js2leo.privateField(js2leo.u8(move.blows)),
    _nonce: js2leo.publicField(js2leo.group(move._nonce)),
  }
  return result;
}