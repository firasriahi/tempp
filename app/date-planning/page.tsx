import Link from "next/link"
import { DollarSign, Laugh } from "lucide-react"
import HeartsBackground from "../../components/hearts-background"

export default function DatePlanningPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      <HeartsBackground />
      <div className="z-10 max-w-md w-full bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-purple-900">
          How about a date? hmmm 🤔
        </h1>
        <p className="text-xl mb-6 text-purple-900">
          I solemnly swear to take you on a proper date douba ma tii7 f yedi chwy flouss 😅
        </p>
        <p className="text-lg mb-8 text-purple-900">
          But hey, love doesn't cost a thing, right? <span className="text-2xl">😛</span>
        </p>
        <Link
          href="/date-form"
          className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-200 ease-in-out transform hover:scale-110 inline-block"
        >
          Plan Our Thrifty Date
        </Link>
      </div>
    </main>
  )
}

