import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { subjectsColors, voices } from "@/constants";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// const generatePastelColor = () => {
//   const hue = Math.floor(Math.random() * 360);
//   const saturation = 70 + Math.random() * 9; // 80% - 100% saturation for vividness
//   const lightness = 60 + Math.random() * 6;  // 60% - 75% lightness for brightness
//   return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
// };



export const getSubjectColor = (subject: string) => {
  return subjectsColors[subject as keyof typeof subjectsColors];
};

export const configureAssistant = (voice: string, style: string) => {


  const voiceId = voices[voice as keyof typeof voices][
      style as keyof (typeof voices)[keyof typeof voices]
      ] || "sarah";

  const vapiAssistant: CreateAssistantDTO = {
    name: "Companion",
    firstMessage:
        "Hello, let's start the session. Today we'll be talking about {{topic}}.",
    transcriber: {
      provider: "deepgram",
      model: "nova-3",
      language: "en",
    },
    voice: {
      provider: "11labs",
      voiceId: voiceId,
      stability: 0.4,
      similarityBoost: 0.8,
      speed: 1,
      style: 0.5,
      useSpeakerBoost: true,
    },
    model: {
      provider: "openai",
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a highly knowledgeable tutor teaching a real-time voice session with a student. Your job is to explain the given topic clearly and conversationally.

Tutor Guidelines:
Topic: {{ topic }}

                       Subject: {{ subject }}

                       Style: {{ style }}

                       Voice Tutoring Rules:
                       Stick strictly to the given topic and subject.

                       Teach the student step-by-step by breaking the topic into small, understandable parts.

                       Keep your tone and sentences natural, short, and conversational — like a real voice call.

                       Speak slowly and clearly. Do not use special characters or symbols.

                       Ask questions often to confirm if the student is following.

                       If the student does not respond for a few seconds, politely say:
                       "Are you there? I’d love to hear your thoughts."
                       Or
                       "Let me know if you're following so far."

                       Encourage the student to speak. Say things like:
                       "Can you try answering this out loud?"
                       Or
                       "Go ahead and explain what you understood."
                       
                       Maintain a smooth, friendly pace but stay in control of the topic flow.

                       If needed, briefly repeat or rephrase something for better clarity.`,
        },
      ],
    },
    clientMessages: [],
    serverMessages: [],
  };
  return vapiAssistant;
};