import { BlockRenderer } from "@/components/BlockRenderer"
import { HeroSection } from "@/components/blocks/HeroSection"
import { InfoBlock } from "@/components/blocks/InfoBlock"
import { getHomePage } from "@/data/loaders"
import { log } from "console"
import { notFound } from "next/navigation"


async function loader() {

  const data  = await getHomePage()
  if (!data) notFound()
  log(data)
    
  return { ...data.data }
}


export default async function HomeRoute() {

  const data = await loader()
  const blocks = data?.blocks ?? []

  return <BlockRenderer blocks={blocks}/>
}
