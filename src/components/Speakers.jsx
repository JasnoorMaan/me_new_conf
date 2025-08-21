import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Speakers = () => {
  // One real speaker
  const speakers = [
    {
      id: 1,
      name: "Prof. Ibrahim Dincer",
      affiliation:
        "Editor-in-Chief of Energy Storage University of Ontario Institute of Technology, Canada",
      image: "https://nitj.ac.in/files/1750140244128-Ibrahim_Dincer.jpg",
      bio: "Expert in AI ethics and scalable machine learning systems.",
    },

    {
      id: 2,
      name: "Dr. Sunil Kumar",
      affiliation:
        "Sr. Principal Scientist, CSIR - National Environmental Engineering Research Institute, Nagpur, India",
      image: "https://nitj.ac.in/files/1750140262011-Sunil_Kumar.jpg",
      bio: "Expert in AI ethics and scalable machine learning systems.",
    },

    {
      id: 3,
      name: "Prof. Sai Kishore Ravi",
      affiliation:
        "Editor-in-chief of Energy Technology City University of Hong Kong",
      image:
        "https://nitj.ac.in/files/1749711994045-Prof._Sai_Kishore_Ravi.png",
      bio: "Expert in AI ethics and scalable machine learning systems.",
    },

    {
      id: 4,
      name: "Dr. Dipen Kumar Rajak",
      affiliation:
        "Scientist, CSIR-Advanced Materials and Processes Research Institute, Bhopal, India",
      image: "https://nitj.ac.in/files/1753875860503-DKR.jpeg",
      bio: "Expert in AI ethics and scalable machine learning systems.",
    },

    {
      id: 5,
      name: "Mr. Arijit Ghosh",
      affiliation: "Founder & MD, S.A.P. Automation",
      image: "/speakers/Arijit.jpg",
      bio: "",
    },
  ];

  // Combine 1 real speaker + 5 placeholders
  const displaySpeakers = [
    ...speakers, // real speaker(s)
    ...Array(2)
      .fill(null)
      .map((_, index) => ({
        ...speakers[0],
        id: `tba-${index}`,
        name: "Coming Soon",
        affiliation: "Speaker details will be announced",
        image: "/speakers/placeholder.webp",
        isPlaceholder: true,
      })),
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-[80vw] mx-auto">
        <h1 className="heading pb-8 text-center">Speakers</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displaySpeakers.map((speaker) => (
            <Card
              key={speaker.id}
              className="overflow-hidden relative max-w-xs mx-auto"
            >
              <CardContent className="p-0">
                <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center relative">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className={`w-full h-full object-cover ${
                      speaker.isPlaceholder ? "blur-lg" : ""
                    }`}
                  />
                  {speaker.isPlaceholder && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="text-center">
                        <p className="normal-text text-white font-semibold">
                          To Be Announced
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardHeader className="text-center p-4">
                <CardTitle
                  className={`text font-semibold ${
                    speaker.isPlaceholder ? "blur-lg" : ""
                  }`}
                >
                  {speaker.name}
                </CardTitle>
                <CardDescription
                  className={`muted-text text-gray-500 ${
                    speaker.isPlaceholder ? "blur-lg" : ""
                  }`}
                >
                  {speaker.affiliation}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
