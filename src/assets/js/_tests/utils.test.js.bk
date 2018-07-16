/**
 * @jest-environment jsdom
 */

import '../utils'
import axios from 'axios'
import clipboard from 'clipboard'
import '../lib/prism'
import _ from 'lodash'
import dateFns from 'date-fns'
import ZingTouch from 'zingtouch'
import ScrollReveal from 'scrollreveal'
import Rellax from 'rellax'
import Nanobar from 'nanobar'

test('prism.js imports correctly', () => {
  expect(typeof Prism).toBe('object')
})

test('clipboard.js imports correctly', () => {
  expect(typeof clipboard).toBe('function')
})

test('nanobar.js imports correctly', () => {
  expect(typeof Nanobar).toBe('function')
})

test('rellax.js imports correctly', () => {
  expect(typeof Rellax).toBe('function')
})

test('scrollreveal imports correctly', () => {
  expect(typeof ScrollReveal).toBe('function')
})

test('zingtouch imports correctly', () => {
  expect(typeof ZingTouch).toBe('object')
})

test('date-fns imports correctly', () => {
  expect(typeof dateFns).toBe('object')
})

test('lodash imports correctly', () => {
  expect(typeof _).toBe('function')
})

test('axios imports correctly', () => {
  expect(typeof axios).toBe('function')
})
