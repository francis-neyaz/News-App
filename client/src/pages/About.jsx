import React from "react";



const About = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-16 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">About NEWS-APP</h2>
        <p className="text-lg mb-6">
          Welcome to <span className="font-semibold">NEWS-APP</span>, your go-to platform for real-time and unbiased news coverage. We bring you the latest updates across various categories, including technology, politics, sports, entertainment, and more.
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
        <div className="mt-10">
          <h3 className="text-2xl font-semibold">Join the Conversation</h3>
          <p className="mt-2">Use our interactive chat feature to discuss the latest news with others.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
