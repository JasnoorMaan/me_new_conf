import React from "react";
import { Star, Award, Crown, Diamond, Trophy, Medal } from "lucide-react";

const Sponsors = () => {
  const sponsorshipTiers = [
    {
      id: "platinum",
      name: "Platinum Sponsor",
      price: "₹3,00,000",
      icon: <Crown className="w-8 h-8" />,
      color: "from-gray-300 to-gray-600",
      borderColor: "border-gray-400",
      benefits: [
        "Logo on website, banners, certificates, and proceedings",
        "2 promotional stalls + 2 min video slot",
        "Complimentary registration for 4 representatives",
        "Brochure in registration kit",
        "Social media highlights",
        "Recognition during inaugural & valedictory sessions",
      ],
    },
    {
      id: "diamond",
      name: "Diamond Sponsor",
      price: "₹2,00,000",
      icon: <Diamond className="w-8 h-8" />,
      color: "from-blue-200 to-blue-500",
      borderColor: "border-blue-400",
      benefits: [
        "Logo on website, banners, certificates, and proceedings",
        "1 promotional stall + 1 min video slot",
        "Complimentary registration for 3 representatives",
        "Social media highlights",
        "Recognition during inaugural & valedictory sessions",
      ],
    },
    {
      id: "gold",
      name: "Gold Sponsor",
      price: "₹1,00,000",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-yellow-200 to-yellow-500",
      borderColor: "border-yellow-400",
      benefits: [
        "Logo on website, banners, certificates, and proceedings",
        "Display promotional material",
        "Complimentary registration for 2 representatives",
        "Social media highlights",
        "Recognition during inaugural & valedictory sessions",
      ],
    },
    {
      id: "silver",
      name: "Silver Sponsor",
      price: "₹50,000",
      icon: <Medal className="w-8 h-8" />,
      color: "from-gray-200 to-gray-400",
      borderColor: "border-gray-300",
      benefits: [
        "Logo on website and banners",
        "Complimentary registration for 1 representative",
        "Display promotional material at the venue",
        "Acknowledgement in brochure and proceedings",
      ],
    },
    {
      id: "bronze",
      name: "Bronze Sponsor",
      price: "₹25,000",
      icon: <Award className="w-8 h-8" />,
      color: "from-orange-200 to-orange-400",
      borderColor: "border-orange-300",
      benefits: [
        "Logo on website and proceedings",
        "Recognition in sponsor acknowledgement section",
      ],
    },
  ];

  const whySponsorReasons = [
    {
      title: "Gain brand visibility among global participants",
      description:
        "Showcase your brand to an international audience of researchers, academics, and industry professionals.",
    },
    {
      title: "Network with industry and academia",
      description:
        "Connect with leading experts, potential partners, and future collaborators in your field.",
    },
    {
      title: "Showcase products, technologies, and research",
      description:
        "Present your latest innovations to a targeted audience of decision-makers and thought leaders.",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center my-12">
          <h1 className="heading mb-4">Sponsorship Opportunities</h1>
          <p className="subheading highlighter1 font-medium">TFGET2026</p>
          <p className="normal-text text-gray-600 mt-4 max-w-2xl mx-auto">
            Join us as a sponsor and gain valuable exposure to leading
            researchers, academicians, and industry professionals from around
            the world.
          </p>
        </div>

        {/* Why Sponsor Section */}
        <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-l-conf-green-600 mb-12">
          <h2 className="subheading highlighter1 mb-6 text-center">
            Why Sponsor TFGET–2026?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {whySponsorReasons.map((reason, index) => (
              <div key={index} className="text-center p-4">
                <div className="w-16 h-16 bg-conf-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-conf-green-600" />
                </div>
                <h3 className="normal-text font-semibold text-gray-800 mb-2">
                  {reason.title}
                </h3>
                <p className="muted-text text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sponsorship Categories */}
        <div className="mb-12">
          <h2 className="subheading highlighter1 mb-8 text-center">
            Sponsorship Categories
          </h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {sponsorshipTiers.map((tier) => (
              <div
                key={tier.id}
                className={`bg-white rounded-lg shadow-lg border-2 ${tier.borderColor} overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl`}
              >
                {/* Header with gradient */}
                <div
                  className={`bg-gradient-to-r ${tier.color} p-6 text-white text-center`}
                >
                  <div className="flex justify-center mb-3">{tier.icon}</div>
                  <h3 className="normal-text font-bold mb-2">{tier.name}</h3>
                  <p className="subheading font-bold">{tier.price}</p>
                </div>

                {/* Benefits list */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-conf-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="muted-text text-gray-700">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Registration Details */}
        <div className="bg-conf-green-50 rounded-lg p-8 border-l-4 border-l-conf-green-600">
          <h2 className="subheading highlighter1 mb-6 text-center">
            Registration Details
          </h2>
          <div className="prose prose-lg max-w-none">
            <p className="normal-text text-gray-700 mb-4">
              Sponsors can register through the online portal by following these
              steps:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li className="normal-text">
                Select <strong>'External (Outside NITJ)'</strong> under Category
              </li>
              <li className="normal-text">
                Choose the sponsor category under{" "}
                <strong>Type of Participant</strong>
              </li>
              <li className="normal-text">Proceed to payment</li>
            </ol>

            <div className="mt-8 text-center">
              <a
                href="https://www.nitj.ac.in/events_registration/ic_tfget_2026/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-conf-green-600 hover:bg-conf-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Register as Sponsor
              </a>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-l-conf-green-600 mt-12">
          <h2 className="subheading highlighter1 mb-6 text-center">
            Get in Touch
          </h2>
          <div className="text-center">
            <p className="normal-text text-gray-700 mb-4">
              For more information about sponsorship opportunities or to discuss
              custom packages, please contact us at tfget2026@nitj.ac.in.
            </p>
            <p className="muted-text text-gray-600">
              We're here to help you maximize your sponsorship investment and
              achieve your marketing objectives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
