"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Heart } from "lucide-react"
import running from "./assets/gifs/running.gif"
import ask from "./assets/gifs/ask.gif"
import HeartsBackground from "../components/hearts-background"

export default function Home() {
  const [noCount, setNoCount] = useState(0)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const router = useRouter()

  useEffect(() => {
    const moveNoButton = () => {
      const maxWidth = window.innerWidth - 100
      const maxHeight = window.innerHeight - 50
      const newX = Math.random() * maxWidth
      const newY = Math.random() * maxHeight
      setPosition({ x: newX, y: newY })
    }

    if (noCount > 0) {
      moveNoButton()
    }
  }, [noCount])

  const handleNoClick = () => {
    setNoCount(noCount + 1)
  }

  const handleYesClick = () => {
    router.push("/yes")
  }

  const getNoButtonText = () => {
    const phrases = [
      "Nope",
      "Still no",
      "Nice try",
      "Give up yet?",
      "Seriously?",
      "You're persistent",
      "Not happening",
      "Keep dreaming",
      "Error 404: 'No' not found",
      "Resistance is futile",
    ]
    return phrases[Math.min(noCount, phrases.length - 1)]
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center relative overflow-hidden">
      <HeartsBackground />
      <div className="z-10 max-w-md w-full bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 shadow-lg">
        <div className="mb-8">
          {noCount > 0 ? <Image
            src={running}
            alt="Valentine's GIF"
            width={300}
            height={300}
            className="rounded-lg shadow-lg mx-auto"
          /> : <Image
          src={ask}
          alt="Valentine's GIF"
          width={300}
          height={300}
          className="rounded-lg shadow-lg mx-auto"
        />}
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-900">
          Eyoutaaaaa, Will you be my Valentine?
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-purple-800">
          Warning: Saying 'No' may result in excessive puppy dog eyes and dramatic sighs
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleYesClick}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-200 ease-in-out transform hover:scale-110 shadow-lg"
          >
            Yes, obviously! <Heart className="inline-block ml-2" fill="white" />
          </button>
          <button
            onClick={handleNoClick}
            style={{ position: noCount > 0 ? "absolute" : "static", left: position.x, top: position.y }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-200 ease-in-out transform hover:scale-90 shadow-lg mt-4 sm:mt-0"
          >
            {getNoButtonText()}
          </button>
        </div>
      </div>
    </main>
  )
}

