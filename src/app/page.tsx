"use client";

import React, { useState } from 'react';
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MissionSection from "@/components/MissionSection";
import WisdomSection from "@/components/WisdomSection";
import Footer from "@/components/Footer";
import BackgroundBlobs from "@/components/BackgroundBlobs";
import ScrollReveal from "@/components/ScrollReveal";
import SevaMandala, { SevaItem } from "@/components/SevaMandala";
import SevaModal from "@/components/SevaModal";
import DivineParticles from "@/components/DivineParticles";
import CursorTrail from "@/components/CursorTrail";
import GoldenThread from "@/components/GoldenThread";

// Data Definition
const sevaData: SevaItem[] = [
  {
    id: "nutrition",
    title: "Morning Nutrition",
    subtitle: "Nourished Child - Flourished Nation",
    icon: "🥛",
    description: "Proper nutrition is the foundation of a healthy body and mind. For many children from underprivileged backgrounds, the lack of wholesome food leads to poor growth, malnutrition, low immunity, and difficulties in learning. Recognising that good health is a basic right of every child, the Morning Nutrition Supplement Seva was initiated to ensure that each child starts the day with strength and vitality.",
    activities: [
      "In collaboration with the Sai Saakshatkaram Trust, Sai Nutree Mix - 'A multi-nutrient supplement powder' is provided on a daily basis to school children across Tamil Nadu.",
      "73 schools in the Nilgiris.",
      "37 schools in Coimbatore and surrounding districts which include Govt. schools and for children who are in special need of it.",
      "In total, nearly 1 lakh children benefit from this seva.",
      "The children are served Sai Nutree Mix, a specially prepared multi-nutrient health mix powder made with 9 wholesome ingredients: Ragi, Pearl Millet, Green Moong, Wheat, Sorghum, Punjab Wheat, Broken Rice, Almonds and Cashews."
    ],
    impact: [
      "Improved physical health and stamina among children",
      "Enhanced concentration and learning ability in schools",
      "Reduced risk of malnutrition and nutrient deficiencies",
      "Better school attendance, as children feel motivated and energetic to attend classes",
      "Increased admissions, as parents are encouraged to send their children to schools where nutrition is assured",
      "Promotion of care and collective well-being in the society",
      "Support for creating happy, healthy, and empowered future generations"
    ]
  },
  {
    id: "narayana-seva",
    title: "Nithya Narayana Seva",
    subtitle: "Feeding the Needy",
    icon: "🍲",
    quote: "It is nothing but an expression of unconditional divine love - SERVING GOD IN ALL NEEDY.",
    description: "Hunger remains one of the greatest challenges faced by the underprivileged. Our hearts are drawn especially to senior citizens without shelter, little children, single women who are physically weak, the mentally challenged, the differently abled, the visually challenged, the disowned, the sick, and the bedridden. They are not to be seen as outsiders or the needy, but as our very own brothers, sisters, parents, and children.",
    activities: [
      "Nutritious and delicious meals are prepared with hygiene, love, and utmost care and served daily.",
      "Food served during festivals and community gatherings.",
      "Inclusion of seasonal vegetables to ensure balanced nutrition."
    ],
    impact: [
      "1,00,000 meals served monthly across Tamil Nadu (Weekly 25,000).",
      "Nilgiris: Monthly - 20,000 meals | Weekly - 5,000 meals.",
      "In association with Sai Saakshatkaram Trust across Coimbatore, Singanallur, Pollachi, Madurai, Ariyalur, Avinashi, Tirunelveli, Rajapalayam, Karaikudi, Rengasamudram, and Trichy: Monthly - 80,000 meals | Weekly - 20,000 meals.",
      "Lakhs of meals served annually, reducing hunger and malnutrition, while promoting equality by treating every recipient as God in different forms."
    ]
  },
  {
    id: "pregnancy-seva",
    title: "Pregnancy Seva",
    subtitle: "The Divine Motherhood",
    icon: "🤰",
    description: "Maternal malnutrition is a leading cause of complications during pregnancy and poor infant health. We serve expecting mothers as if they were our own sisters and daughters, thereby caring for the divine children of Bharat mata. From the creation of life in the womb to six months after birth, support and nutrition are provided to ensure healthy growth and development.",
    activities: [
      "Monthly distribution of Mother Care Kits containing fresh fruits, dry fruits, almonds, cashews, and Sai Nutree mix a multi-nutritional health drink powder",
      "Regular health awareness sessions on maternal care and child nutrition"
    ],
    impact: [
      "5,490 mothers benefited from Pregnancy Seva (Jan-Sept 2025)",
      "Nilgiris: 2,390 mothers",
      "Coimbatore (in association with Sai Saakshatkaram Trust): 3,100 mothers",
      "Monthly nutrition kits distributed, improving maternal strength and immunity",
      "Healthier newborns with better growth",
      "Reduced risk of anaemia and pregnancy-related complications"
    ]
  },
  {
    id: "healthcare",
    title: "Healthcare Seva",
    subtitle: "Divine love cures & cares",
    icon: "⚕️",
    image: "/IMG_6470.JPG",
    description: "Many rural and underprivileged families cannot afford basic healthcare or timely medical intervention.",
    activities: [
      "Distribution of general medicines for common ailments completely free of cost in association with Sri Sai Healing Trust, Chennai",
      "Eye care camps: Vision screening, spectacle distribution, and free cataract surgeries to restore eyesight",
      "Physiotherapy services: Supporting elders and differently abled individuals with pain management and mobility exercises",
      "Health awareness campaigns on hygiene, preventive care, and lifestyle improvements"
    ],
    impact: [
      "68 General medical camps conducted across Coimbatore (in association with Sai Saakshatkaram Trust) and Nilgiris, covering 61 villages.",
      "Beneficiaries: 3,500",
      "Eye Care Camps (Nilgiris): 53 camps, 351 cataract cases advised, 313 spectacles distributed.",
      "169 cataract surgeries conducted",
      "2,100 eye care beneficiaries",
      "Improved quality of life and reduced preventable blindness",
      "Accessible healthcare for those most in need"
    ]
  },
  {
    id: "differently-abled",
    title: "Differently-Abled Seva",
    subtitle: "Developing the Divine Ability",
    icon: "♿",
    image: "/IMG_6473.JPG",
    description: "Differently abled and visually challenged individuals face social and financial hardships, often being excluded from basic opportunities.",
    activities: [
      "Providing medical aid and assistive devices",
      "Offering financial assistance for medical treatment and livelihood support",
      "Creating and facilitating employment opportunities"
    ],
    impact: [
      "64 differently abled individuals supported on a monthly basis",
      "86 visually impaired beneficiaries supported",
      "200 total beneficiaries",
      "Restoring dignity, independence, and confidence among the differently-abled",
      "Enabling greater social inclusion"
    ]
  },
  {
    id: "nsnop",
    title: "NSNOP",
    subtitle: "Our School, Our Kids",
    icon: "🏫",
    image: "/IMG_5162.JPG",
    description: "Education is the basic right of every child and essential for a progressive nation. In this spirit, we join hands with the Government for the upliftment of school children. Focused on Periya Hubathalai Govt. Primary School, Govt. Higher Secondary School & Govt. Girls High School.",
    activities: [
      "Providing vegetables, Sai Nutree Mix (a multi-nutrient health drink), and school essentials such as uniforms, track suits, shoes, and notebooks",
      "Supporting the schools with teachers to strengthen learning outcomes",
      "Encouraging music, sports, Education in human Values, and co-curricular activities under the guidance of coaches.",
      "Supporting schools in organizing Annual Days and Sports Days",
      "Teaching Fine Arts and Martial Arts"
    ],
    impact: [
      "Better nutrition and improved school attendance",
      "Enhanced learning outcomes",
      "Overall development of children in skills, talents, and character."
    ]
  },
  {
    id: "vidya-vikas",
    title: "Sai Bala Vidya Vikas",
    subtitle: "Value Education",
    icon: "📚",
    quote: "By Knowledge one attains immorality",
    description: "True education is not limited to academics but also values, culture, physical, and mental well-being.",
    activities: [
      "Music training (Vocal, Keyboard, Violin, Tabla, etc.).",
      "Traditional dance forms (Bharatanatyam, Folk Dance, etc.).",
      "Karate, yoga, and sports for discipline, self-defence, and fitness.",
      "Veda chanting and Bhagavad Gita learning.",
      "Value Education programs for character formation.",
      "Drawing, painting, sculpting, and acting under the proper guidance of a Guru.",
      "Personality development, public speaking, and linguistic proficiency."
    ],
    impact: [
      "Over 700 children actively participating in Sai Bala Vidya Vikas programs.",
      "Children growing into well-rounded, wise, responsible, humble, and loving human beings.",
      "Rooted in tradition while excelling in modern life."
    ]
  },
  {
    id: "grama-seva",
    title: "Grama Seva",
    subtitle: "Rural Development",
    icon: "🏘️",
    description: "Rural villages often lack basic healthcare, sanitation, opportunities for youth and veteran engagement.",
    activities: [
      "Conducting regular medical camps with follow-ups.",
      "Cleaning drives and tree plantation programs for environmental conservation.",
      "Sports initiatives like football and hockey tournaments etc.",
      "Promoting traditional agricultural methods, organic farming and cattle farming.",
      "Vastra Seva- A token of love in the form of dhotis, sarees, shawls, sweaters, blankets etc."
    ],
    impact: [
      "130 villages covered with regular follow-ups in the Nilgiris under Grama Seva programs.",
      "Healthier villages and empowered youth and veterans.",
      "Cleaner environments and sustainable rural growth."
    ]
  },
  {
    id: "gau-pooja",
    title: "Gau Pooja & Music",
    subtitle: "Cow Worship & Divine Music",
    icon: "🐄",
    description: "Cows are revered in Indian tradition as symbols of Ashta Lakshmi. Music is a divine medium that inspires, heals, uplifts, transforms, and leads to the ultimate realization.",
    activities: [
      "Worship of 2,500 cows with devotion and reverence in the Nilgiris and in Coimbatore.",
      "Composition and recording of divine songs.",
      "Organizing devotional concerts and cultural events.",
      "Creating opportunities for children and students to learn, exhibit, and develop their musical skills."
    ],
    impact: [
      "Spiritual upliftment and blessings for universal harmony.",
      "Preservation of traditional values."
    ]
  }
];

export default function Home() {
  const [selectedSeva, setSelectedSeva] = useState<SevaItem | null>(null);

  return (
    <main>
      <DivineParticles />
      <CursorTrail />
      <GoldenThread />
      <BackgroundBlobs />

      <ScrollReveal>
        <Hero />
      </ScrollReveal>

      <AboutSection />

      <MissionSection />

      <section className="container section-padding">
        <ScrollReveal delay="0.2s" variant="fade-up">
          <SevaMandala
            items={sevaData}
            onSelect={setSelectedSeva}
          />
        </ScrollReveal>
      </section>

      <WisdomSection />

      <SevaModal
        isOpen={!!selectedSeva}
        onClose={() => setSelectedSeva(null)}
        data={selectedSeva}
      />

      <ScrollReveal>
        <Footer />
      </ScrollReveal>
    </main>
  );
}
