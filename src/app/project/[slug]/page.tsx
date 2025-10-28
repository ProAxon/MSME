import ProjectDetail from '@/components/ProjectDetail'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  
  return (
    <>
      <ProjectDetail slug={slug} />
    </>
  )
}
