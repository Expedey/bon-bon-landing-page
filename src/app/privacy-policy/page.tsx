"use client";
import { Footer } from "@/screens/HomePage/sections";
import React from "react";

const PrivacyPolicyPage = () => {
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <main className="bg-[#1a1a1a] flex flex-col items-center w-full min-h-screen relative pt-4 lg:pt-[30px]">
      <div className="px-2 lg:px-[30px] w-full">
        <div className="px-2 lg:px-[30px] w-full border border-[#ffffff1a] rounded-[50px] py-10 lg:py-[80px] mb-[30px]">
          <div className="w-full mx-auto px-4 max-w-[1440px]">
            <h1 className="text-white text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
              Privacy Policy
            </h1>
            <div className="mt-[30px]">
              <div className="text-white space-y-6">
                <p className="text-base text-gray-300">Last updated: {date}</p>

                <div className="space-y-4">
                  <section>
                    <h3 className="text-xl font-medium mb-2">
                      1. Information We Collect
                    </h3>
                    <p className="text-base leading-relaxed">
                      We collect information you provide directly to us, such as
                      when you create an account, use our services, or contact
                      us for support. This may include your name, email address,
                      phone number, and any other information you choose to
                      provide.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-medium mb-2">
                      2. How We Use Your Information
                    </h3>
                    <p className="text-base leading-relaxed">
                      We use the information we collect to provide, maintain,
                      and improve our services, to communicate with you, to
                      develop new features, and to protect the security of our
                      users and services.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-medium mb-2">
                      3. Information Sharing and Disclosure
                    </h3>
                    <p className="text-base leading-relaxed">
                      We do not sell, trade, or otherwise transfer your personal
                      information to third parties without your consent, except
                      as described in this policy. We may share information with
                      service providers who assist us in operating our website
                      and providing services.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-medium mb-2">
                      4. Data Security
                    </h3>
                    <p className="text-base leading-relaxed">
                      We implement appropriate security measures to protect your
                      personal information against unauthorized access,
                      alteration, disclosure, or destruction. However, no method
                      of transmission over the internet is 100% secure.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-medium mb-2">
                      5. Cookies and Tracking Technologies
                    </h3>
                    <p className="text-base leading-relaxed">
                      We use cookies and similar tracking technologies to
                      enhance your experience on our website. These technologies
                      help us remember your preferences, analyze site traffic,
                      and personalize content. You can control cookie settings
                      through your browser preferences.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-medium mb-2">
                      6. Third-Party Services
                    </h3>
                    <p className="text-base leading-relaxed">
                      Our website may contain links to third-party websites or
                      services. We are not responsible for the privacy practices
                      of these external sites. We encourage you to review their
                      privacy policies before providing any personal
                      information.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-medium mb-2">
                      7. Children's Privacy
                    </h3>
                    <p className="text-base leading-relaxed">
                      Our services are not intended for children under the age
                      of 13. We do not knowingly collect personal information
                      from children under 13. If you believe we have collected
                      such information, please contact us immediately.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-medium mb-2">
                      8. Your Rights and Choices
                    </h3>
                    <p className="text-base leading-relaxed">
                      You have the right to access, update, or delete your
                      personal information. You may also opt out of certain
                      communications or request that we stop processing your
                      data. Contact us to exercise these rights.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-medium mb-2">
                      9. International Data Transfers
                    </h3>
                    <p className="text-base leading-relaxed">
                      Your information may be transferred to and processed in
                      countries other than your own. We ensure that such
                      transfers comply with applicable data protection laws and
                      that appropriate safeguards are in place to protect your
                      information.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-medium mb-2">
                      10. Changes to This Policy
                    </h3>
                    <p className="text-base leading-relaxed">
                      We may update this privacy policy from time to time. We
                      will notify you of any material changes by posting the new
                      policy on this page and updating the "Last updated" date.
                      Your continued use of our services constitutes acceptance
                      of the updated policy.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-medium mb-2">11. Contact Us</h3>
                    <p className="text-base leading-relaxed">
                      If you have any questions about this Privacy Policy or our
                      data practices, please contact us at:
                      <br />
                      Email: privacy@bonbon.com
                      <br />
                      Address: 123 Innovation Street, Tech City, TC 12345
                      <br />
                      Phone: +1 (555) 123-4567
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default PrivacyPolicyPage;
