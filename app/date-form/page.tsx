"use client"

import { useState } from "react"
import { ChevronRight, ChevronLeft, Heart } from "lucide-react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import emailjs from "@emailjs/browser"
import HeartsBackground from "../components/hearts-background"
import cafe from "../assets/pics/cafe.png"
import carousel from "../assets/pics/carousel.png"
import cheesecake from "../assets/pics/cheesecake.png"
import cinema from "../assets/pics/cinema.png"
import drink from "../assets/pics/drink.png"
import food from "../assets/pics/food.png"
import ice_cream from "../assets/pics/ice-cream.png"
import korean from "../assets/pics/korean.png"
import meat from "../assets/pics/meat.png"
import movie from "../assets/pics/movie.png"
import pasta from "../assets/pics/pasta.png"
import sushi from "../assets/pics/sushi.png"

const questions = [
  {
    id: "food",
    question: "What's your ideal dinner date? Choose wisely, our taste buds depend on it!",
    options: [
      { text: "Pasta", image: pasta },
      { text: "Sushi", image: sushi },
      { text: "Korean", image: korean },
      { text: "Homemade Dinner (I cook, you eat)", image: food },
      { text: "l7am w jbon", image: meat },
    ],
  },
  {
    id: "dessert",
    question: "Pick your sweet poison, sugar plum!",
    options: [
      { text: "Cheesecake (mine)", image: cheesecake },
      { text: "Ice Cream", image: ice_cream },
      { text: "We get drinks", image: drink },
    ],
  },
  {
    id: "activity",
    question: "How shall we cap off this epic date? No pressure, just our entire future hanging in the balance!",
    options: [
      { text: "Watch movie in car", image: movie },
      { text: "Da7 Da7", image: carousel },
      { text: "We go 9ahwa and talk", image: cafe },
      { text: "Cinema (if there are good movies)", image: cinema },
    ],
  },
  {
    id: "message",
    question: "Any suggestions or a message for me?",
    options: [],
  },
]

export default function DateFormPage() {
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<{ [key: string]: string }>({})
  const [message, setMessage] = useState("")
  const router = useRouter()

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      sendEmail()
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleOptionSelect = (option: string) => {
    setAnswers({ ...answers, [questions[currentStep].id]: option })
  }

  const sendEmail = () => {
    const templateParams = {
      food: answers.food || "Not selected",
      dessert: answers.dessert || "Not selected",
      activity: answers.activity || "Not selected",
      message: message || "No message",
    }

    emailjs
      .send('service_a2y736p', 'template_rj66jrm', templateParams, 'MGQDOwCQ109cYC9KA')
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text)
        router.push("/flowers") // Redirect after sending
      })
      .catch((error) => {
        console.error("Error sending email:", error)
      })
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 relative overflow-hidden">
      <HeartsBackground />
      <div className="z-10 w-full max-w-4xl bg-white bg-opacity-20 backdrop-blur-lg rounded-xl p-6 shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-purple-900 text-center">
          Plan Our Perfect Date (No Pressure!)
        </h1>
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-center text-purple-900">
            {questions[currentStep].question}
          </h2>
          {questions[currentStep].options.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {questions[currentStep].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option.text)}
                  className={`flex flex-col items-center p-4 rounded-lg transition-all duration-200 ${
                    answers[questions[currentStep].id] === option.text
                      ? "bg-purple-500 text-white"
                      : "bg-white bg-opacity-50 text-purple-900 hover:bg-purple-100 hover:bg-opacity-50"
                  }`}
                >
                  <Image
                    src={option.image || "./assets/gifs/ask.gif"}
                    alt={option.text}
                    width={100}
                    height={100}
                    className="rounded-lg mb-2"
                  />
                  <span className="text-center text-sm sm:text-base">{option.text}</span>
                </button>
              ))}
            </div>
          ) : (
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-4 rounded-lg bg-white bg-opacity-50 text-purple-900"
              rows={4}
              placeholder="Write your message here..."
            />
          )}
        </div>
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 0}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center disabled:opacity-50 text-sm sm:text-base"
          >
            <ChevronLeft className="mr-2" /> Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentStep === questions.length - 1 && !message}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center disabled:opacity-50 text-sm sm:text-base"
          >
            {currentStep === questions.length - 1 ? (
              <>
                Finish <Heart className="ml-2" fill="white" />
              </>
            ) : (
              <>
                Next <ChevronRight className="ml-2" />
              </>
            )}
          </button>
        </div>
      </div>
    </main>
  )
}
