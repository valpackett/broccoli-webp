'use strict'

var test = require('tape')
var fs = require('fs')
var path = require('path')
var broccoli = require('broccoli')
var Webp = require('../')

test('webp', function (t) {
	t.plan(1)
	var builder = new broccoli.Builder(new Webp('test/img'))
	builder.build().then(function (results) {
		t.ok(fs.existsSync(path.join(results.directory, 'pixel.webp')), 'creates a webp file')
	}).catch(t.end)
})
