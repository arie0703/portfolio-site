export type Profile = {
  name: string
  introduction: string
  links: Array<{
    title: string
    url: string
  }>
  experiences: Array<{
    image: string
    title: string
    content: string
  }>
}