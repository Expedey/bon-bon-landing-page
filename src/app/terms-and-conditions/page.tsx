"use client";
import { Footer } from "@/screens/HomePage/sections";
import React from "react";

const TermsAndConditionsPage = () => {
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
            <h1 className="text-3xl text-white lg:text-4xl xl:text-5xl 2xl:text-6xl">
              Terms & Conditions
            </h1>
            <div className="mt-[30px]">
              <div className="space-y-6 text-white">
                <p className="text-base text-gray-300">Last updated: {date}</p>

                <div className="space-y-4">
                  <section>
                    <h3 className="mb-2 text-xl font-medium">
                      1. Acceptance of Terms
                    </h3>
                    <p className="text-base leading-relaxed">
                      By accessing and using this website, you accept and agree
                      to be bound by the terms and provision of this agreement.
                      If you do not agree to abide by the above, please do not
                      use this service.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-2 text-xl font-medium">2. Use License</h3>
                    <p className="text-base leading-relaxed">
                      Permission is granted to temporarily download one copy of
                      the materials (information or software) on BonBon's
                      website for personal, non-commercial transitory viewing
                      only. This is the grant of a license, not a transfer of
                      title, and under this license you may not modify or copy
                      the materials.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-2 text-xl font-medium">3. Disclaimer</h3>
                    <p className="text-base leading-relaxed">
                      The materials on BonBon's website are provided on an 'as
                      is' basis. BonBon makes no warranties, expressed or
                      implied, and hereby disclaims and negates all other
                      warranties including without limitation, implied
                      warranties or conditions of merchantability, fitness for a
                      particular purpose, or non-infringement of intellectual
                      property or other violation of rights.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-2 text-xl font-medium">4. Limitations</h3>
                    <p className="text-base leading-relaxed">
                      In no event shall BonBon or its suppliers be liable for
                      any damages (including, without limitation, damages for
                      loss of data or profit, or due to business interruption)
                      arising out of the use or inability to use the materials
                      on BonBon's website, even if BonBon or a BonBon authorized
                      representative has been notified orally or in writing of
                      the possibility of such damage.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-2 text-xl font-medium">
                      5. Accuracy of Materials
                    </h3>
                    <p className="text-base leading-relaxed">
                      The materials appearing on BonBon's website could include
                      technical, typographical, or photographic errors. BonBon
                      does not warrant that any of the materials on its website
                      are accurate, complete or current. BonBon may make changes
                      to the materials contained on its website at any time
                      without notice.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-2 text-xl font-medium">6. Links</h3>
                    <p className="text-base leading-relaxed">
                      BonBon has not reviewed all of the sites linked to its
                      website and is not responsible for the contents of any
                      such linked site. The inclusion of any link does not imply
                      endorsement by BonBon of the site. Use of any such linked
                      website is at the user's own risk.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-2 text-xl font-medium">
                      7. Modifications
                    </h3>
                    <p className="text-base leading-relaxed">
                      BonBon may revise these terms of service for its website
                      at any time without notice. By using this website you are
                      agreeing to be bound by the then current version of these
                      Terms and Conditions of Service.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-2 text-xl font-medium">
                      8. Governing Law
                    </h3>
                    <p className="text-base leading-relaxed">
                      These terms and conditions are governed by and construed
                      in accordance with the laws and you irrevocably submit to
                      the exclusive jurisdiction of the courts in that state or
                      location.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-2 text-xl font-medium">
                      9. Privacy Policy
                    </h3>
                    <p className="text-base leading-relaxed">
                      Your privacy is important to us. It is BonBon's policy to
                      respect your privacy regarding any information we may
                      collect while operating our website. Please review our
                      Privacy Policy for more details.
                    </p>
                  </section>

                  <section>
                    <h3 className="mb-2 text-xl font-medium">
                      10. Contact Information
                    </h3>
                    <p className="text-base leading-relaxed">
                      If you have any questions about these Terms and
                      Conditions, please contact us at:
                      <br />
                      Email: legal@bonbon.world
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

export default TermsAndConditionsPage;
