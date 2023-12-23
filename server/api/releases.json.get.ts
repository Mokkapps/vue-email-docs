import { Octokit } from '@octokit/rest'

export default cachedEventHandler(async () => {
  if (!process.env.GITHUB_TOKEN)
    return []

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

  const { data: releases } = await octokit.rest.repos.listReleases({
    owner: 'vue-email',
    repo: 'vue-email',
  })

  return releases
}, {
  maxAge: 60 * 60,
})
