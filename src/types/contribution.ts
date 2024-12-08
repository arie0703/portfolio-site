export type GitHubContributionDays = {
  contributionCount: number
  date: string
}[]

export type GitHubContributionWeeks = {
  contributionDays: GitHubContributionDays
}[]

export type ContributionValue = {
  count: number
  date: string
}
