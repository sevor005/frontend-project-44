#!/usr/bin/env node

import { runGame } from '../src/cli.js'
import { runQuestions } from '../src/logic-game.js'

const name = runGame();

runQuestions(name);
