import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">Twitter Clone</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Left Sidebar */}
          <div className="hidden md:block">
            {/* Navigation will go here */}
          </div>
          
          {/* Main Content */}
          <div className="col-span-2">
            {/* Tweet feed will go here */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4">
              <p className="text-center text-gray-500">Welcome to Twitter Clone</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
