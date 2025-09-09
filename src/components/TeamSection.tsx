"use client";

import { useEffect, useState, useRef } from "react";
import { Linkedin } from "lucide-react";

// Define team member type
interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

// Actual team members data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alessandro De Vitis",
    role: "CEO & Co-fondatore",
    bio: "Exec MBA / Entrepreneur",
    image: "👨‍💼",
    social: {
      linkedin: "https://www.linkedin.com/in/alessandro-de-vitis-34a70625/",
    },
  },
  {
    id: 2,
    name: "Ilaria Erba",
    role: "Responsabile Ricerca",
    bio: "Phd ML",
    image: "👩‍🔬",
    social: {
      linkedin: "https://www.linkedin.com/in/ilaria-erba-bb1799215/",
    },
  },
  {
    id: 3,
    name: "Michele Alletto",
    role: "CTO & Co-fondatore",
    bio: "Exec MBA | 2x M.Eng",
    image: "👨‍💻",
    social: {
      linkedin: "https://www.linkedin.com/in/michelealletto/",
    },
  },
  {
    id: 4,
    name: "Lorenzo Borgatti",
    role: "Chief AI & Co-fondatore",
    bio: "M.Phys",
    image: "👨‍🔬",
    social: {
      linkedin: "https://www.linkedin.com/in/lorenzoborgatti/",
    },
  },
  {
    id: 5,
    name: "Giovanni Tuccitto",
    role: "COO & Co-fondatore",
    bio: "Exec MBA | M.Eng.",
    image: "👨‍💼",
    social: {
      linkedin: "https://www.linkedin.com/in/giovanni-tuccitto/",
    },
  },
  {
    id: 6,
    name: "Maksim Beliakov",
    role: "Ricercatore ML",
    bio: "M.Sc. Computer Science",
    image: "👨‍💻",
    social: {
      linkedin: "https://www.linkedin.com/in/maksim-beliakov/",
    },
  },
  {
    id: 7,
    name: "Antonio Ghezzi",
    role: "Consulente",
    bio: "Phd, Prof., Polytechnic University of Milan",
    image: "👨‍🎓",
    social: {
      linkedin: "https://www.linkedin.com/in/antonio-ghezzi-179285a/",
    },
  },
];

const TeamSection = () => {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-20 bg-black relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="text-center mb-16">
          <h2 className="text-h2 text-white">
            <span className="text-primary">Il Nostro Team</span>
          </h2>
          <p className="text-body-lg text-gray-300 max-w-3xl mx-auto">
          Un team appassionato di ricercatori, ingegneri ed esperti del settore uniti dalla visione di trasformare la consulenza finanziaria. Sviluppiamo agenti AI che potenziano istituzioni finanziarie e individui con insights personalizzati e behavioral forecasting.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`bg-gray-900 border border-gray-800 rounded-lg overflow-hidden transform transition-all duration-500 ${
                isInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-2">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-body-sm font-bold text-white">
                    {member.name}
                  </h3>
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary transition-colors duration-300"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin size={16} />
                    </a>
                  )}
                </div>
                <div className="text-primary/90 text-caption font-medium mb-1">
                  {member.role}
                </div>
                <p className="text-gray-300 text-caption">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
