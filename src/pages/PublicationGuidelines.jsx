import React from "react";

const PublicationGuidelines = () => {
  return (
    <>
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center my-12">
            <h2 className="heading mb-4">Publication Guidelines</h2>
            <p className="subheading highlighter1 font-medium">TFGET2026</p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-l-conf-green-600">
            {/* <h3 className="subheading highlighter1 mb-8 text-center">SUBMISSION & AUTHOR GUIDELINES</h3> */}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Springer Logo Column */}
              <div className="lg:col-span-1 flex justify-center lg:justify-start">
                <div className="flex flex-col items-center">
                  <img
                    src="/springer_vert.jpg"
                    alt="Springer Publisher"
                    className="w-full max-w-[200px] h-auto rounded-lg shadow-md mb-4"
                  />
                  <p className="text-sm text-gray-600 text-center font-medium">
                    Publication Partner
                  </p>
                </div>
              </div>

              {/* Content Column */}
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <p className="mb-4">
                    It is planned to publish the peer-reviewed and selected
                    papers of conference as proceedings with Springer. For
                    detailed instructions for author and editors of conference
                    proceedings, kindly visit the following link: <br />
                    <a
                      href="https://www.springer.com/us/authors-editors/conference-proceedings"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-conf-green-600 hover:text-conf-green-700 underline"
                    >
                      https://www.springer.com/us/authors-editors/conference-proceedings
                    </a>
                  </p>

                  <p className="mb-4">
                    Select papers from the conference will be published by
                    Springer as a proceedings book volume. Springer will conduct
                    quality checks on the accepted papers and only papers that
                    pass these checks will be published.
                  </p>

                  <p className="mb-4">
                    Springer Nature does not charge any money for publication of
                    Non-Open Access content. Abstracts/extended abstracts and
                    short papers (less than 4 pages) are not considered for
                    publication.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PublicationGuidelines;
