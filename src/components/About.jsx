import React from "react";

const About = () => {
  return (
    <div className="min-h-screen px-1  py-10">
      <div className="">
        {/* Page Title */}
        <h1 className="text-xl md:text-2xl font-bold text-center mb-6">
          About TechBridge Asia
        </h1>

        {/* Intro */}
        <p className="text-gray-600 dark:text-gray-300 text-center mb-10">
          TechBridge Asia is a global trade management platform designed to
          simplify and streamline import and export operations across
          international markets.
        </p>

        {/* Content Sections */}
        <div className="space-y-8">
          {/* Mission */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our mission is to empower exporters and importers with modern,
              easy-to-use tools that reduce complexity in cross-border trade. We
              aim to help businesses manage inventory, pricing, and trade
              workflows efficiently while enabling data-driven decisions.
            </p>
          </section>

          {/* What We Do */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">What We Do</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>Manage import and export products across countries</li>
              <li>Track inventory and pricing in real time</li>
              <li>Provide role-based dashboards for exporters and importers</li>
              <li>Enable secure authentication and user access</li>
              <li>Support data export and reporting for better insights</li>
            </ul>
          </section>

          {/* Why Choose Us */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Why TechBridge Asia</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              TechBridge Asia focuses on usability, scalability, and security.
              Built using modern web technologies, our platform delivers a
              responsive and reliable experience while supporting business
              growth in global trade.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
