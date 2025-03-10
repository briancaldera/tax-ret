import { BlockRenderer } from "@/components/BlockRenderer"
import { HeroSection } from "@/components/blocks/HeroSection"
import { InfoBlock } from "@/components/blocks/InfoBlock"
import { ContentList } from "@/components/layout/ContentList"
import { getHomePage } from "@/data/loaders"
import { log } from "console"
import { notFound } from "next/navigation"
import { Card, type CardProps } from "@/components/Card"
import { BlogCard } from "@/components/layout/BlogCard"

interface PageProps {
  params: Promise<{ slug: string }>
}

async function loader() {

  const data = await getHomePage()
  if (!data) notFound()
  log(data)

  return { ...data.data }
}


export default async function HomeRoute() {

  const data = await loader()
  const blocks = data?.blocks ?? []

  return (
    <div>
      <BlockRenderer blocks={blocks} />
      <div className="container">
        <ContentList
          headline='Featured Articles'
          path='/api/articles'
          component={BlogCard}
          featured
        />
      </div>
    </div>
  )
}
