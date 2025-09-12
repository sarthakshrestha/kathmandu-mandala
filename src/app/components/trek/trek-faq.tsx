"use client";
import FAQPortal from "@/components/portals/faq-portal";
const faqItems = [
  {
    key: "q1",
    question: "What are the symptoms of AMS?",
    answer:
      "AMS symptoms include headache, nausea, dizziness, fatigue, and difficulty sleeping.",
  },
  {
    key: "q2",
    question: "What are the Life threatening forms of AMS",
    answer:
      "HAPE and HACE are life-threatening forms of AMS requiring immediate descent and medical attention.",
  },
  {
    key: "q3",
    question: "What are the Symptoms of HAPE?",
    answer:
      "Symptoms include shortness of breath, cough, chest tightness, and frothy sputum.",
  },
  {
    key: "q4",
    question: "What is the treatment for AMS?",
    answer:
      "Immediate descent, rest, oxygen, and medication as advised by a doctor.",
  },
  {
    key: "q5",
    question: "How can AMS be prevented?",
    answer:
      "Gradual ascent, acclimatization, hydration, and avoiding alcohol help prevent AMS.",
  },
  {
    key: "q6",
    question: "What are the differences between AMS and HACE?",
    answer:
      "HACE is a severe form of AMS with confusion, ataxia, and loss of consciousness.",
  },
  {
    key: "q7",
    question: "What altitude increases the risk of AMS?",
    answer: "Risks increase above 2,500 meters (8,200 feet).",
  },
  {
    key: "q8",
    question: "How does acclimatization help prevent AMS?",
    answer:
      "Acclimatization allows your body to adapt to lower oxygen levels at high altitude.",
  },
  {
    key: "q9",
    question: "What are the long-term effects of AMS?",
    answer:
      "AMS usually resolves with descent; long-term effects are rare if treated promptly.",
  },
  {
    key: "q10",
    question: "What should you do if you experience symptoms of AMS?",
    answer:
      "Stop ascent, rest, descend if symptoms worsen, and seek medical help.",
  },
];

export default function TrekFAQ() {
  return <FAQPortal items={faqItems} sectionTitle="FAQ" />;
}
