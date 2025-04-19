import {useState} from 'react'
import LineGraph from '../Line'
import Types from '../TypeAnimation/TypeAnimation'
import Button from '../Button/Button'
import GitHubButton from '../Button/GithubButton'
import { Copy, Check} from "lucide-react";


function Main() {
    const [copied, setCopied] = useState(false);

  const codeSnippet = "npm run dev";

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
<section className="w-full min-h-screen bg-[#111111] text-white px-4 py-6 sm:py-10 lg:py-12 flex flex-col items-center mt-14">

  <div className="mb-6">
    <p className="bg-gray-800 text-gray-100 text-sm sm:text-base px-4 py-1 rounded-full shadow">
      Intent v0.1.69 released 
    </p>
  </div>


  <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center gap-8 px-2 sm:px-4">
    
    <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col justify-center items-center lg:items-start">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#98d422] mb-3 leading-snug">
        It's like Laravel, But <br /> for{" "}
        <span className="block sm:inline">
          <Types words={["Node Js"]} />
        </span>
      </h1>
      <p className="text-base sm:text-lg text-gray-400 mb-6 max-w-md sm:max-w-lg">
        A refreshing take on traditional Node.js frameworks. <br />
        Intent is an open-source framework focused on productivity and developer experience.
      </p>
      <div className="flex flex-col sm:flex-row items-center sm:justify-center lg:justify-start gap-4 mt-2">
        <Button>Get Started</Button>
        <GitHubButton>Star on Github</GitHubButton>
      </div>
    </div>

    <div className="w-full lg:w-1/2 flex justify-center items-center">
      <div className="w-full max-w-md h-[250px] sm:h-[300px] md:h-[400px]">
        <LineGraph />
      </div>
    </div>
      </div>
            <div className="mt-10 inline-flex items-center space-x-3 rounded-lg border border-gray-700 bg-[#1a1a1a] px-4 py-2 text-sm">
        <code className="text-gray-300">{codeSnippet}</code>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1 rounded-md border border-gray-600 bg-gray-800 px-2 py-1 text-xs text-white hover:bg-gray-700 transition"
        >
          {copied ? (
            <>
              <Check size={14} /> Copied
            </>
          ) : (
            <>
              <Copy size={14} /> Copy
            </>
          )}
        </button>
      </div>

</section>


  )
}

export default Main