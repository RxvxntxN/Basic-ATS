import React from "react";
import GetStarted from "@/featuresStuffs/GetStarted";
import FooterSection from "@/app/Footersection";

const LogContents = () => {
  return (
    <>
      <div className="relative min-h-min bg-white p-4">
        <div className="relative min-h-min bg-[#F4F4F4] p-6 rounded-xl">
          <div className="p-4 space-y-6">
            {/* Container 1 */}
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
              {/* Date */}
              <div className="md:w-1/4">
                <p className="text-sm font-bold text-gray-600">
                  September 5, 2024
                </p>
              </div>

              {/* Log */}
              <div className="md:w-3/4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Swedish Added as an Option for Job Board Localization
                </h2>
                <p className="mt-4">
                  Swedish has been added as a language option for job board
                  localization. We are still taking requests for additional
                  languages.
                </p>
                <h2 className="text-2xl font-bold text-gray-800 mt-4">
                  Added reCAPTCHA to Login Form
                </h2>
                <p className="mt-4">
                  reCAPTCHA has been added to the Login and Sign-Up form to
                  improve site security by protecting against spammers.
                </p>
                <h2 className="text-2xl font-bold text-gray-800 mt-4">
                  Other improvements & fixes
                </h2>
                <ul className="my-4 ml-8 list-disc">
                  <li>Browsers now persist login via Magic Link.</li>
                  <li>
                    Salary inputs are now validated correctly across all
                    browsers.
                  </li>
                  <li>
                    A minor issue with existing Polymer users accepting an
                    invitation to a new Organization was fixed.
                  </li>
                </ul>
              </div>
            </div>

            {/* Container 2 */}
            <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
              {/* Date */}
              <div className="md:w-1/4">
                <p className="text-sm font-bold text-gray-600">
                  September 10, 2024
                </p>
              </div>

              {/* Log */}
              <div className="md:w-3/4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Improved Billing UI & UX
                </h2>
                <p className="mt-4">
                  We have introduced several enhancements to the "Plan &
                  billing" section, including the option to sign up for a
                  monthly or annual plan. User experience improvements include:
                </p>
                <ul className="my-4 ml-8 list-disc">
                  <li>Your selected plan is now highlighted in the UI.</li>
                  <li>
                    Updating your plan in Polymer now opens the Stripe portal,
                    allowing you to confirm all amounts and change your payment
                    method if desired.
                  </li>
                  <li>
                    You can now add a promo code yourself when checking out.
                  </li>
                  <li>
                    The UI has been updated in "Plan & billing" to more
                    prominently display any applied promo codes.
                  </li>
                  <li>
                    You can now access your billing details and invoices even
                    after canceling your Polymer plan.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GetStarted />
      <FooterSection />
    </>
  );
};

export default LogContents;
