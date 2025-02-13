import { Heart } from "lucide-react"

export default function HeartsBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden z-0">
      <div
        className="absolute inset-0 bg-repeat opacity-10"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M20 33.3c-3.7-3.2-6.7-5.8-8.9-7.8-2.2-2-4-3.8-5.3-5.4-1.3-1.6-2-3.2-2-4.8 0-1.8.6-3.3 1.9-4.5 1.3-1.2 2.9-1.8 4.9-1.8 1.4 0 2.7.4 3.9 1.2 1.2.8 2.2 1.9 2.9 3.3.7-1.4 1.7-2.5 2.9-3.3 1.2-.8 2.5-1.2 3.9-1.2 2 0 3.6.6 4.9 1.8 1.3 1.2 1.9 2.7 1.9 4.5 0 1.6-.7 3.2-2 4.8-1.3 1.6-3.1 3.4-5.3 5.4-2.2 2-5.2 4.6-8.9 7.8z' fill='%234c1d95'/%3E%3C/svg%3E\")",
          backgroundSize: "40px 40px",
        }}
      ></div>
      {[...Array(20)].map((_, i) => (
        <Heart
          key={i}
          className="absolute text-purple-300 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 20 + 10}px`,
          }}
        />
      ))}
    </div>
  )
}

