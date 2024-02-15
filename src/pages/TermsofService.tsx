// TermsOfService.tsx

import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p className="text-gray-700 mb-4">
          Welcome to R8gg! These terms and conditions outline the rules and
          regulations for the use of R8gg's Website, located at r8gg.net.
        </p>
        <p className="text-gray-700 mb-4">
          By accessing this website we assume you accept these terms and
          conditions. Do not continue to use R8gg if you do not agree to take
          all of the terms and conditions stated on this page.
        </p>
        <p className="text-gray-700 mb-4">
          The following terminology applies to these Terms and Conditions,
          Privacy Statement and Disclaimer Notice and all Agreements: "Client",
          "You" and "Your" refers to you, the person log on this website and
          compliant to the Company’s terms and conditions.
        </p>
      </section>

      {/* Add more sections as needed */}

      <footer className="text-gray-500 text-sm mt-8">
        Last updated: January 30, 2024 | Version 1.0
      </footer>
    </div>
  );
};

export default TermsOfService;
