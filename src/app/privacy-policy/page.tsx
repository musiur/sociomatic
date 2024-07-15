import Link from "next/link";

const Privacy = () => {
  return (
    <div className="container section">
      <h1 className="text-3xl font-medium mb-6 text-blue-900">
        Privacy Policy
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Introduction
        </h2>
        <p>
          Welcome to Sociomatic, your trusted digital partner. This Privacy
          Policy explains how we collect, use, and protect your personal
          information. You agree to the terms outlined in this policy by using
          our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Your Privacy is Important to Us
        </h2>
        <p>
          At Sociomatic, we recognize and prioritize the importance of your
          privacy.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Information We Collect
        </h2>
        <ul className="list-disc pl-6">
          <li>Personal Information: Names, contact details, and job titles.</li>
          <li>Usage Data: How you interact with our website and services.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          How We Use Your Information
        </h2>
        <ul className="list-disc pl-6">
          <li>Providing and maintaining our services.</li>
          <li>Improving and customizing user experiences.</li>
          <li>Sending promotional communications.</li>
          <li>Complying with legal obligations.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Information Sharing
        </h2>
        <p>
          We do not sell or share your personal information with third parties
          except as outlined in this policy or when required by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Cookies and Similar Technologies
        </h2>
        <p>
          Our website may use cookies to enhance your browsing experience. You
          can manage cookie preferences through your browser settings.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Data Security
        </h2>
        <p>
          We implement security measures to protect your data; however, no
          method is entirely secure. We encourage responsible online practices.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Your Rights
        </h2>
        <p>
          You can access, correct, or delete your personal information. To
          exercise these rights, please contact us at&nbsp;
          <Link href="/contact-us" className="text-blue-500">
            hello@thesociomatic.com
          </Link>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Compliance with UAE Law
        </h2>
        <p>
          Sociomatic operates under applicable laws in the United Arab Emirates.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Changes to this Policy
        </h2>
        <p>
          We may update this Privacy Policy periodically. Please review it
          regularly for any changes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-blue-900">Contact Us</h2>
        <p>
          For any questions or concerns regarding this Privacy Policy, please
          get in touch with us at&nbsp;
          <Link href="/contact-us" className="text-blue-500">
            hello@thesociomatic.com
          </Link>
          .
        </p>
      </section>
    </div>
  );
};

export default Privacy;
