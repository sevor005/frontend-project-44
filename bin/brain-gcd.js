#!/usr/bin/env node

import { getName } from '../src/cli.js'
import { runGame } from '../src/index.js';
import game from '../src/games/brain-gcd.js';

const name = getName();

runGame(name, game);
