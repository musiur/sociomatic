import Link from "next/link";

const TermsAndConditions = () => {
  return (
    <div className="container section">
      <h1 className="text-3xl font-medium mb-6 text-blue-900">
        Terms and Conditions of Service
      </h1>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Acceptance of Terms
        </h2>
        <p>
          By using the services provided by Sociomatic, you agree to these terms
          and conditions. If you disagree, please refrain from using our
          services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Services Offered
        </h2>
        <p>
          Sociomatic offers digital marketing, web development, and related
          services. Specific details about each service can be found on our
          website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          User Responsibilities
        </h2>
        <p>
          Users must provide accurate information and comply with all applicable
          laws. Sociomatic is not responsible for the content users upload or
          share.
        </p>
      </section>

      {/* Other sections... */}

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Termination of Services
        </h2>
        <p>
          Sociomatic reserves the right to terminate services for violations of
          terms or for any reason deemed appropriate. Users may also terminate
          services following specified procedures.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Limitation of Liability
        </h2>
        <p>
          Sociomatic is not liable for any direct, indirect, incidental, or
          consequential damages arising from the use of our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Governing Law
        </h2>
        <p>
          The laws of the United Arab Emirates govern these terms and
          conditions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Changes to Terms
        </h2>
        <p>
          Sociomatic reserves the right to modify these terms at any time. Users
          are responsible for regularly reviewing the terms.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4 text-blue-900">
          Contact Information
        </h2>
        <p>
          For inquiries, contact us at&nbsp;
          <Link href="/contact-us" className="text-blue-500">
            hello@thesociomatic.com
          </Link>
          .
        </p>
      </section>
    </div>
  );
};

export default TermsAndConditions;
