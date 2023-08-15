import { useUpdateLanguage } from "./useUpdateLanguage"

export const useProject = ({ data, location }) => {
  const { language } = useUpdateLanguage({ doc: data.prismicProject, location })
  const fallbackProject = data.allPrismicProject.edges[0].node.data
  const projectContent = data.allPrismicProject.edges.find(edge => edge.node.lang === language.current)?.node.data || fallbackProject

  return { project: projectContent }
}

export const usePost = ({ data, location }) => {
  const { language } = useUpdateLanguage({ doc: data.prismicPost, location })
  const fallbackPost = data.allPrismicPost.edges[0].node.data
  const postContent = data.allPrismicPost.edges.find(edge => edge.node.lang === language.current)?.node.data || fallbackPost;

  return { post: postContent }
}
