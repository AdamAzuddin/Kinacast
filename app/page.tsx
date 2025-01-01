import Header from '../components/Header'

export default function Home() {
  return (
    <div className="bg-[#1F1F1F] min-h-screen">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Your main content goes here */}
        <h1 className="text-3xl font-bold">Welcome to Kinacast</h1>
      </main>
    </div>
  )
}

