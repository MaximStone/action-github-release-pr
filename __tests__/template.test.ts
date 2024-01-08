import {expect, test} from '@jest/globals'
import {Template} from '../src/template'

test('title', () => {
  const title = `Release ${new Date().toLocaleDateString()}`
  const template = new Template(title)
  expect(template.title).toEqual(title)
})

test('body', () => {
  const pullRequests = [
    {number: 123, author: 'yutailang0119'},
    {number: 789, author: 'yutailang0119'},
    {number: 456, author: 'y7g'},
    {number: 123, author: 'yutailang0119'}
  ]
  const template = new Template('Release v1', pullRequests)
  expect(template.body).toEqual(
    `- #123 @yutailang0119\n- #456 @y7g\n- #789 @yutailang0119\n`
  )
  expect(template.title).toEqual('Release v1')
})
