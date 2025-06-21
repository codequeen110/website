import TypingAnimation from "@/components/typing-animation"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
        {/* Animated Intro */}
        <div className="mb-16">
          <TypingAnimation />
        </div>

        {/* Bio */}
        <div className="space-y-6 text-gray-800 leading-relaxed">
          <p>I dropped out of Harvard at 19 to build an energy software company, Leafpress.</p>

          <p>
            I did YC S23. We processed $30M in energy retrofits, managed energy for airports, national parks,
            universities, and more, and were the first to use AI to process utility data. We were backed by YC and
            General Catalyst. Exciting news on this company to come.
          </p>

          <p>I'm now building something new in SF.</p>

          <p>I write, mainly about my experience being a founder, you can read it below.</p>
        </div>

        {/* Writing Section */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <h2 className="text-lg font-medium mb-8 text-gray-900">Writing</h2>
          <div className="text-gray-600">
            <p>Coming soon...</p>
          </div>
        </div>
      </div>
    </main>
  )
}
