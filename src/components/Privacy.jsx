import React from "react";

const Privacy = () => {
  return (
    <div className="min-h-screen px-1 container mx-auto py-10">
      <div className="">
        {/* Page Title */}
        <h1 className="text-xl md:text-2xl font-bold text-center mb-6">
          Privacy Policy
        </h1>

        {/* Intro */}
        <p className="text-gray-600 dark:text-gray-300 text-center mb-10">
          At TechBridge Asia, we respect your privacy and are committed to
          protecting your personal information. This Privacy Policy explains how
          we collect, use, and safeguard your data.
        </p>

        {/* Content */}
        <div className="space-y-8">
          {/* Information Collection */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Information We Collect
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We may collect personal information such as your name, email
              address, and account details when you register or use our
              platform. We also collect non-personal data related to usage
              patterns to improve our services.
            </p>
          </section>

          {/* How We Use Data */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              How We Use Your Information
            </h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To personalize user experience</li>
              <li>To improve platform performance and security</li>
              <li>To communicate updates and important notifications</li>
            </ul>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Data Protection & Security
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect your data from unauthorized access, loss, or misuse.
              However, no system can be guaranteed to be completely secure.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Cookies</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              TechBridge Asia may use cookies to enhance user experience,
              analyze platform usage, and support essential functionality. You
              can manage cookie preferences through your browser settings.
            </p>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              You have the right to access, update, or request deletion of your
              personal data. If you have questions or requests regarding your
              data, please contact us.
            </p>
          </section>

          {/* Policy Updates */}
          <section>
            <h2 className="text-2xl font-semibold mb-3">
              Changes to This Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page, and continued use of the platform
              indicates acceptance of the updated policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
