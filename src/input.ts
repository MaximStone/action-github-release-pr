import * as core from '@actions/core'
import * as github from '@actions/github'

export const getInputs = (): {
  token: string
  owner: string
  repo: string
  productionBranch: string
  stagingBranch: string
  labels: string[]
  isDraft: boolean
  isDryRun: boolean
  title: string
} => {
  const {owner, repo} = repository()
  const token = core.getInput('token', {required: true})
  const productionBranch = core.getInput('target-branch')
  const stagingBranch = core.getInput('from-branch')
  const labels = core.getInput('labels') ?? ''
  const isDraft = core.getBooleanInput('draft')
  const isDryRun = core.getBooleanInput('dry-run')
  const title =
    core.getInput('title') ?? `Release ${new Date().toLocaleDateString()}`

  return {
    token,
    owner,
    repo,
    productionBranch,
    stagingBranch,
    labels: labels.split(',').map((label: string) => label.trim()),
    isDraft,
    isDryRun,
    title
  }
}

const repository = (): {owner: string; repo: string} => {
  if (core.getInput('repository')) {
    const [owner, repo] = core.getInput('repository').split('/')
    return {owner, repo}
  }
  return github.context.repo
}
