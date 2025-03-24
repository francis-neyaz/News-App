import React from "react";
import { FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";



const About = () => {
  return (
    <section className=" text-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">About NEWS-APP</h2>
        <p className="text-lg mb-6">
          Welcome to <span className="font-semibold">NEWS-APP</span>, your go-to platform for real-time and unbiased news coverage. 
          We bring you the latest updates across various categories, including technology, politics, sports, entertainment, and more.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-white text-blue-900 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold">📢 Real-time News</h3>
            <p className="text-sm mt-2">Stay updated with the latest news as it happens.</p>
          </div>
          <div className="bg-white text-blue-900 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold">🌎 Multiple Categories</h3>
            <p className="text-sm mt-2">Explore news from all sectors in one place.</p>
          </div>
          <div className="bg-white text-blue-900 p-6 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold">💬 Live Chat</h3>
            <p className="text-sm mt-2">Engage in discussions and share your thoughts.</p>
          </div>
        </div>

        {/* Creators Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold">Meet the Creators</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-6">
            {/* Creator 1 */}
            <div className="bg-white text-blue-900 p-6 rounded-lg shadow-lg text-center w-64">
              <img 
                src="https://via.placeholder.com/100" 
                alt="Creator 1" 
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h4 className="text-xl font-semibold mt-4">Neyaz uddin</h4>
              <p className="text-sm">Developer</p>
              <div className="flex justify-center gap-4 mt-3">
                <a href="https://www.linkedin.com/in/neyazuddin" target="_blank" className="text-blue-700 text-xl">
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com/neyazuddin" target="_blank" className="text-blue-500 text-xl">
                  <FaTwitter />
                </a>
              </div>
            </div>

            {/* Creator 2 */}
            <div className="bg-white text-blue-900 p-6 rounded-lg shadow-lg text-center w-64">
              <img 
                src="https://via.placeholder.com/100" 
                alt="Creator 2" 
                className="w-24 h-24 mx-auto rounded-full"
              />
              <h4 className="text-xl font-semibold mt-4">Francis</h4>
              <p className="text-sm">Backend Developer</p>
              <div className="flex justify-center gap-4 mt-3">
                <a href="https://www.linkedin.com/in/johndoe" target="_blank" className="text-blue-700 text-xl">
                  <FaLinkedin />
                </a>
                <a href="https://twitter.com/johndoe" target="_blank" className="text-blue-500 text-xl">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Community */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold">Join Our WhatsApp Community</h3>
          <p className="mt-2 text-lg">Stay updated and engage with like-minded people.</p>
          <a
            href="https://chat.whatsapp.com/your-community-link"
            target="_blank"
            className="mt-4 inline-flex items-center gap-2 bg-green-500 text-white py-2 px-6 rounded-full text-lg font-semibold shadow-md hover:bg-green-600 transition"
          >
            <FaWhatsapp className="text-2xl" /> Join Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
