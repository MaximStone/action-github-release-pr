import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import {test} from '@jest/globals'

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_TOKEN'] = process.env.TEST_TOKEN ?? ''
  process.env['INPUT_TARGET-BRANCH'] = process.env.TEST_PRODUCTION_BRANCH ?? ''
  process.env['INPUT_FROM-BRANCH'] = process.env.TEST_STAGING_BRANCH ?? ''
  process.env['INPUT_LABEL'] = process.env.TEST_REPOSITORY_LABEL_NAME
  process.env['INPUT_DRAFT'] = 'true'
  process.env['INPUT_DRAFT'] = 'true'
  process.env['INPUT_DRY-RUN'] = 'true'
  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }
  console.log(cp.execFileSync(np, [ip], options).toString())
})
