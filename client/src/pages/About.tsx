import Heading from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";


const messages = [
  `MiniNote is a modern, cloud-based note-taking application designed to help you organize your thoughts and ideas with ease.`,
  `Built with cutting-edge technologies including React, TypeScript, Node.js, Express, and MongoDB for a robust and scalable experience.`,
  `Features a beautiful, responsive UI powered by Tailwind CSS and shadcn/ui components for an exceptional user experience.`,
  `Completely type-safe with TypeScript and form validation using Zod and react-hook-form for reliable data handling.`,
  `Secure authentication with JWT tokens and encrypted data storage to keep your notes private and safe.`,
  `Real-time synchronization across devices, so your notes are always accessible wherever you are.`,
  `Lightning-fast performance with Vite as the build tool and optimized React components.`,
  `Custom Express APIs provide seamless data management with full CRUD operations for your notes.`,
]

const features = [
  `Full CRUD operations - Create, Read, Update, and Delete your notes with ease`,
  `Cloud synchronization - Access your notes from any device, anywhere`,
  `Secure authentication - JWT-based security keeps your data private`,
  `Modern UI/UX - Beautiful, responsive design that works on all devices`,
  `Type-safe development - Built with TypeScript for reliability and maintainability`,
  `Real-time updates - Changes sync instantly across all your devices`,
  `Mobile-first design - Optimized for both desktop and mobile experiences`,
  `Accessibility optimized - Built with accessibility best practices in mind`,
]

const About = () => {
  return (
    <div className="container py-10">
      <Heading title="MiniNote" description="Your Notes Secured on the Cloud" className="text-center" />
      <Separator className="mt-5 mb-8" />
      <ul className="flex flex-col max-w-4xl gap-3 mx-auto list-[square]">
        {messages.map((message, i) => (
          <li key={i} className="text-lg font-semibold tracking-wider">{message}</li>
        ))}

        <li className="text-lg font-semibold tracking-wider">
          Some Features of MiniNote
          <ul className="flex flex-col gap-2 px-5 py-3 text-base list-disc">
            {features.map((feature, i) => (
              <li key={i} className="text-lg font-semibold tracking-wider">{feature}</li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default About;