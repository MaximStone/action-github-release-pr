import * as core from '@actions/core'
import * as github from '@actions/github'

export function getInputs(): {
  token: string
  owner: string
  repo: string
  productionBranch: string
  stagingBranch: string
  label?: string
  isDraft: boolean
  isDryRun: boolean
} {
  const {owner, repo} = repository()
  const token = core.getInput('token', {required: true})
  const productionBranch = core.getInput('production_branch')
  const stagingBranch = core.getInput('staging_branch')
  const label = core.getInput('label')
  const isDraft = core.getBooleanInput('draft')
  const isDryRun = core.getBooleanInput('dry_run')

  return {
    token,
    owner,
    repo,
    productionBranch,
    stagingBranch,
    label: label.length !== 0 ? label : undefined,
    isDraft,
    isDryRun
  }
}

function repository(): {owner: string; repo: string} {
  if (core.getInput('repository')) {
    const [owner, repo] = core.getInput('repository').split('/')
    return {owner, repo}
  }
  return github.context.repo
}
