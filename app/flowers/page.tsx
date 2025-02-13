import Image from "next/image"
import { Heart } from "lucide-react"
import Link from "next/link"
import HeartsBackground from "../components/hearts-background"
import FlowerAnimation from "./flowers"

export default function FlowersPage() {
  return (
    <main className="">
      <HeartsBackground />
      <div className="absolute translate-y-[30vh]  sm:translate-y-[44vh] translate-x-[26vw]">
      <FlowerAnimation/>
      </div>
      <div className="translate-y-[52vh] sm:translate-y-[78vh]">
      <h1 className="text-lg sm:text-3xl font-bold mb-6 text-purple-900">You're my favorite person, my queen, and the one I enjoy every moment with</h1>
      <h1 className="text-lg sm:text-3xl font-bold mb-6 text-purple-900">Thank you for being my girlfriend, my best friend and my favorite distraction 😘</h1>
      <h1 className="text-lg sm:text-3xl font-bold mb-6 text-purple-900">Ahh, call me doub ma tkamml e stage!!!</h1>

      </div>
      
    </main>
  )
}

