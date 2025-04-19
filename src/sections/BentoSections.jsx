import BentoCard from "../components/BentoCard";
import { SquareChevronRight, MemoryStick , Database,Braces,FileChartLine,Banana,Languages,AtSign,GitPullRequestArrow } from "lucide-react";

export default function BentoSection() {
  return (
    <section className="px-6 py-12 bg-[#111111] text-white">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-2 text-center">Explore Our Features</h1>
        <h1 className="text-5xl font-bold mb-8 text-center text-[#98d422]">All tools on deck.
        </h1>
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 ">
      <BentoCard
        icon={<MemoryStick />}
        title="Cache"
        description="Improve the latency of your application, with in-built multi-store redis and in-memory cache configuration out of the box."
        bgColor="bg-[#98d422]"
        titleColor="text-[#111111]"
        descriptionColor="text-[#111111]"
      />
      <BentoCard
        icon={<SquareChevronRight />}
        title="Console"
        description="Build beautiful cli scripts for your app without doing any heavy-lifting. From printing to prompts, everything you will ever need."
        bgColor="bg-[#1c1c1c]"
        titleColor="text-[#ffffff]"
        descriptionColor="text-[#ffffff]"
      />
      <BentoCard
        icon={<Database />}
        title="DB Integration"
        description="A first-class API for accessing your db store, supports MySQL and Postgres. Experience the declarative syntax."
        bgColor="bg-[#98d422]"
        titleColor="text-[#111111]"
        descriptionColor="text-[#111111]"              
        />
        <BentoCard
        icon={<Braces />}
        title="Error Handling"
        description="With Intent error handling you will never miss out on handling an error. Out of the box Sentry integration."
        bgColor="bg-[#1c1c1c]"
        titleColor="text-[#ffffff]"
        descriptionColor="text-[#ffffff]"
        />    
        <BentoCard
        icon={<FileChartLine />}
        title="File Storage"
        description="An elegant API for access different storage classes. Be it AWS S3 or Local, you can change the disk without changing the code."
        bgColor="bg-[#98d422]"
        titleColor="text-[#111111]"
        descriptionColor="text-[#111111]"              
        />
        <BentoCard
        icon={<Banana />}
        title="Helpers"
        description="Out of the box helpers for Arrays, Strings, Objects and Numbers so that you focus only on writing stuff which matters."
        bgColor="bg-[#1c1c1c]"
        titleColor="text-[#ffffff]"
        descriptionColor="text-[#ffffff]"
        />  
        <BentoCard
        icon={<Languages />}
        title="Localization"
        description="Build super personalised apps for your users using Localization. Support multiple languages, with the power of string operations."
        bgColor="bg-[#98d422]"
        titleColor="text-[#111111]"
        descriptionColor="text-[#111111]"              
        />   
        <BentoCard
        icon={<GitPullRequestArrow />}
        title="Requests"
        description="With NestJS powerful routing system, Intent comes packed with many utilities like Validators, Transformers, Requests."
        bgColor="bg-[#1c1c1c]"
        titleColor="text-[#ffffff]"
        descriptionColor="text-[#ffffff]"
        />  
        <BentoCard
        icon={<AtSign />}
        title="Mailers"
        description="A beautiful built-in template, HTML should not be a blocker to send out mails. Be it, SMTP, Mailgun or Resend, it supports all."
        bgColor="bg-[#98d422]"
        titleColor="text-[#111111]"
        descriptionColor="text-[#111111]"              
        />            
    </div>
      </div>
    </section>
  );
}
