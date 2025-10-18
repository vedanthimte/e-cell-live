import React from 'react'
import BlogPost from '@/components/blogpage/BlogPost'

type Props = {
  params: { id: string }
}

function BlogPostPage({ params }: Props) {
  return (
    <div>
      <BlogPost id={params.id} />
    </div>
  )
}

export default BlogPostPage
