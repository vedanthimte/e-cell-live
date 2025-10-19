import React from 'react'
import BlogPost from '@/components/blogpage/BlogPost'

type Props = {
  params: Promise<{ id: string }>
}

async function BlogPostPage({ params }: Props) {
  const { id } = await params
  return (
    <div>
      <BlogPost id={id} />
    </div>
  )
}

export default BlogPostPage
