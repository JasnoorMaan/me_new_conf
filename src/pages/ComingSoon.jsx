import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="heading text-gray-900 mb-4">
            Registration Fees
          </h1>
          <div className="w-24 h-1 bg-conf-green-600 mx-auto mb-6"></div>
          {/* <p className="subheading text-conf-green-600 mb-8">
            Coming Soon
          </p> */}
        </div>
        
        {/* <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
          <div className="mb-8">
            <div className="w-32 h-32 bg-conf-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-16 h-16 text-conf-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="subheading text-gray-800 mb-4">
              Registration Details Will Be Available Soon
            </h2>
            <p className="normal-text text-gray-600 leading-relaxed mb-6">
              We're finalizing the registration process and fee structure for TFGET2026. 
              All registration details and payment methods will be announced shortly.
            </p>
            <p className="normal-text text-gray-500 italic">
              Stay tuned for updates!
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button className="bg-conf-green-600 hover:bg-conf-green-700 text-white px-6 py-3">
                Back to Home
              </Button>
            </Link>
            <Button 
              variant="outline" 
              className="border-2 border-conf-green-600 text-conf-green-600 hover:bg-conf-green-50 px-6 py-3"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  window.location.href = '/#contact';
                }
              }}
            >
              Contact Us
            </Button>
          </div>
        </div>
         */}

         <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8 md:p-12">
            <div className="mb-8">
              {/* <div className="w-32 h-32 bg-conf-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-16 h-16 text-conf-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div> */}
              <h2 className="subheading text-gray-800 mb-4">
                Registration Details
              </h2>
              <p className="normal-text text-gray-600 leading-relaxed mb-6">
                Below are the details of the Registration Fee. Kindly note that <strong>18% extra GST will be added</strong> to the base amount. Participants from <strong>NIT Jalandhar</strong> are exempt from GST.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border border-gray-300 text-sm text-left">
                  <thead className="bg-gray-100 text-gray-700">
                    <tr>
                      <th className="py-2 px-4 border">Participants</th>
                      <th className="py-2 px-4 border">Offline</th>
                      <th className="py-2 px-4 border">Online</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    <tr>
                      <td className="py-2 px-4 border">Faculty and Industrial Participants</td>
                      <td className="py-2 px-4 border">₹ 8,000</td>
                      <td className="py-2 px-4 border">₹ 7,000</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border">PhD/PG/UG Research Scholar</td>
                      <td className="py-2 px-4 border">₹ 6,000</td>
                      <td className="py-2 px-4 border">₹ 5,000</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border">Accompanying person/co-author</td>
                      <td className="py-2 px-4 border">₹ 2,500</td>
                      <td className="py-2 px-4 border">₹ 2,000</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border">Foreign Faculty and Industrial Participants</td>
                      <td className="py-2 px-4 border">$237</td>
                      <td className="py-2 px-4 border">$200</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border">Foreign Students</td>
                      <td className="py-2 px-4 border">$200</td>
                      <td className="py-2 px-4 border">$150</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-4 border">Foreign Accompanying person/co-author</td>
                      <td className="py-2 px-4 border">$150</td>
                      <td className="py-2 px-4 border">$100</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="normal-text text-red-600 font-semibold mb-4">
                REGISTRATION FEE WILL ONLY BE PAID THROUGH THE PAYMENT PORTAL WHICH WILL BE PROVIDED TO YOU SOON. NO OTHER MEANS OF FEE PAYMENT WILL BE ACCEPTED.
              </p>

              <p className="normal-text text-gray-500 italic">
                Stay tuned for updates!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="bg-conf-green-600 hover:bg-conf-green-700 text-white px-6 py-3">
                  Back to Home
                </Button>
              </Link>
              <Button 
                variant="outline" 
                className="border-2 border-conf-green-600 text-conf-green-600 hover:bg-conf-green-50 px-6 py-3"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    window.location.href = '/#contact';
                  }
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>

        <div className="mt-8">
          <p className="muted-text text-gray-500">
            For immediate queries, please reach out to us via the contact section
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon; 