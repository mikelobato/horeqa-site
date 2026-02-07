import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Clients } from "@/components/clients"
import { Process } from "@/components/process"
import { Positioning } from "@/components/positioning"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Clients />
        <Process />
        <Positioning />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
