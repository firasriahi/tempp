import Link from "next/link"
import { Sparkles } from "lucide-react"
import HeartsBackground from "../../components/hearts-background"

export default function YesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      <HeartsBackground />
      <div className="z-10 max-w-md w-full bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-purple-900">
          Yay! You said Yes! <Sparkles className="inline-block" />
        </h1>
        <p className="text-xl mb-8 text-purple-900">
          I'm over the moon! Ama la7dha ma temchich
        </p>
        <Link
          href="/date-planning"
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-200 ease-in-out transform hover:scale-110 inline-block"
        >
          Next
        </Link>
      </div>
    </main>
  )
}

