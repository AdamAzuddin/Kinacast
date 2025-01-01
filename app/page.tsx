import Hero from '@/components/Hero'
import Header from '@/components/Header'

export default function Home() {
  return (
    <div className="bg-[#1F1F1F] min-h-screen">
      <Header />
      <Hero/>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      </main>
    </div>
  )
}

