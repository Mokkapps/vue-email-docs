import { Octokit } from '@octokit/rest'

function isUserABot(user: any) {
  return user?.login?.endsWith('-bot') || user?.login?.endsWith('[bot]')
}

export default cachedEventHandler(async () => {
  if (!process.env.GITHUB_TOKEN)
    return []

  const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

  const pulls = await octokit.paginate(octokit.rest.pulls.list, {
    owner: 'vue-email',
    repo: 'vue-email',
    state: 'closed',
  })

  return pulls.filter(pull => !!pull.merged_at).filter(pull => !isUserABot(pull.user))
}, {
  maxAge: 60 * 60,
})
