"use client";
import Head from 'next/head';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10">
      <Head>
        <title>Privacy Policy | Career Valore</title>
        <meta name="description" content="Learn how Career Valore collects, uses, and protects your personal information." />
      </Head>
      <div className=" w-full mx-4 bg-white p-6 rounded-lg shadow-md space-y-6">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center">Privacy Policy</h1>
        <p className="text-sm text-gray-600 text-center">Last Updated: March 20, 2025</p>
        <p className="text-gray-700">
          Your privacy is critically important to us. It is Career Valore's policy to respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to: <a href="https://www.careervalore.com" className="text-blue-600 hover:underline">https://www.careervalore.com</a>.
        </p>

        {/* Comments Section */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">Comments</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            When visitors leave comments on the site, we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection. An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: <a href="https://automattic.com/privacy/" className="text-blue-600 hover:underline">https://automattic.com/privacy/</a>. After approval of your comment, your profile picture is visible to the public in the context of your comment.
          </p>
        </section>

        {/* Media Section */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">Media</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
          </p>
        </section>

        {/* Cookies Section */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">Cookies</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            If you leave a comment on our site, you may opt-in to saving your name, email address, and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mt-2">
            If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mt-2">
            When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed mt-2">
            If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
          </p>
        </section>

        {/* Advertisements Section */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">Advertisements</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Ads appearing on our website may be delivered to users by advertising partners, who may set cookies. These cookies allow the ad server to recognize your computer each time they send you an online advertisement to compile information about you or others who use your computer. This information allows ad networks to, among other things, deliver targeted advertisements that they believe will be of most interest to you. This Privacy Policy covers the use of cookies by Career Valore and does not cover the use of cookies by any advertisers.
          </p>
        </section>

        {/* Embedded Content Section */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">Embedded Content from Other Websites</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Articles on this site may include embedded content (e.g., videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website. These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
          </p>
        </section>

        {/* External Links Section */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">Links to External Sites</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our Service may contain links to external sites that are not operated by us. If you click on a third-party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy and the terms and conditions of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites, products, or services.
          </p>
        </section>

        {/* Data Retention Section */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">How Long We Retain Your Data</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue. For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
          </p>
        </section>

        {/* Data Rights Section */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">What Rights You Have Over Your Data</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
          </p>
        </section>

        {/* Data Destination Section */}
        <section>
          <h2 className="text-xl font-bold text-gray-800 mb-3">Where Your Data is Sent</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Visitor comments may be checked through an automated spam detection service.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;