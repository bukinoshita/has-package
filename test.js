'use strict'

import test from 'ava'
import hasPackage from './'

test(t => {
	t.true(hasPackage('fixtures/bar'))
	t.false(hasPackage('fixtures/foo'))
	t.true(hasPackage())
})
