// -- The Link Resolver
// This function will be used to generate links to Prismic documents
// As your project grows, you should update this function according to your routes

exports.linkResolver = (doc) => {
  const langPrefix = doc.lang === 'en-us' ? '' : `/${doc.lang}`;
  
  switch (doc.type) {
    case 'homepage': {
      return `/${doc.lang}`
    }

    case 'project': {
      return `${langPrefix}/work/${doc.uid}`
    }

    case 'post': {
      return `${langPrefix}/blog/${doc.uid}`
    }

    default:
      return '/'
  }
}