#!/usr/bin/env node
import minimist from 'minimist';
import { roll } from "../lib/roll.js"
var options = minimist(process.argv.slice(2));
console.log(JSON.stringify(roll(options.sides, options.dice, options.rolls)));
