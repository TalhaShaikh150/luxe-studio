import React from "react";

const ContactSection = () => {
  return (
    <section className="px-6 md:px-24 py-32 flex flex-col md:flex-row gap-20 md:gap-32 bg-void">
      {/* Left Column: Info & Details */}
      <div className="w-full md:w-1/3 flex flex-col gap-12">
        {/* Email Block */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-gold mb-6">
            General Inquiries
          </h3>
          <a
            href="mailto:hello@luxe-studio.com"
            className="text-2xl md:text-3xl font-display text-silk hover:text-gold transition-colors duration-300 block mb-2"
          >
            hello@luxe-studio.com
          </a>
          <a
            href="tel:+15550123456"
            className="text-lg text-concrete hover:text-silk transition-colors duration-300"
          >
            +1 (555) 012-3456
          </a>
        </div>

        {/* Address Block */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-gold mb-6">
            Studio
          </h3>
          <address className="text-silk text-lg not-italic leading-relaxed">
            142 Greene St, Floor 4<br />
            SoHo, New York
            <br />
            NY 10012
          </address>
        </div>

        {/* Socials Block */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-gold mb-6">
            Socials
          </h3>
          <div className="flex flex-col gap-2 text-concrete">
            {["Instagram", "LinkedIn", "Behance"].map((social) => (
              <a
                key={social}
                href="#"
                className="hover:text-silk w-fit transition-colors duration-300 flex items-center gap-2 group"
              >
                {social}
                <span className="text-xs opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column: Interactive Form */}
      <div className="w-full md:w-2/3">
        <form className="flex flex-col gap-12">
          {/* Row 1: Name & Email */}
          <div className="flex flex-col md:flex-row gap-12">
            <InputGroup id="name" label="Your Name" type="text" />
            <InputGroup id="email" label="Email Address" type="email" />
          </div>

          {/* Row 2: Select Interest */}
          <div className="relative group">
            <select
              id="interest"
              className="w-full bg-transparent border-b border-white/20 py-4 text-silk focus:outline-none focus:border-gold transition-colors appearance-none cursor-pointer rounded-none"
              defaultValue=""
            >
              <option value="" disabled className="bg-charcoal text-concrete">
                Select an option
              </option>
              <option className="bg-charcoal text-silk" value="residential">
                Residential Design
              </option>
              <option className="bg-charcoal text-silk" value="commercial">
                Commercial / Retail
              </option>
              <option className="bg-charcoal text-silk" value="interior">
                Interior Styling
              </option>
              <option className="bg-charcoal text-silk" value="other">
                Other Inquiry
              </option>
            </select>
            <label className="absolute left-0 -top-4 text-xs text-gold uppercase tracking-widest pointer-events-none">
              I'm interested in...
            </label>
            <span className="absolute right-0 top-4 text-concrete pointer-events-none transition-transform group-focus-within:rotate-180">
              ↓
            </span>
          </div>

          {/* Row 3: Message */}
          <div className="relative group">
            <textarea
              id="message"
              rows="4"
              required
              className="w-full bg-transparent border-b border-white/20 py-4 text-silk focus:outline-none focus:border-gold transition-colors peer placeholder-transparent resize-none rounded-none"
              placeholder="Message"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-0 top-4 text-concrete text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm cursor-text"
            >
              Tell us about your project
            </label>
          </div>

          {/* Submit */}
          <div className="pt-8">
            <button
              type="submit"
              className="px-12 py-5 bg-silk text-void rounded-full text-xs uppercase tracking-[0.2em] font-bold hover:bg-gold hover:text-white transition-all duration-500 shadow-xl hover:shadow-gold/20"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

// Helper Component for Inputs (Keeps code clean)
const InputGroup = ({ id, label, type }) => (
  <div className="w-full md:w-1/2 relative group">
    <input
      type={type}
      id={id}
      required
      className="w-full bg-transparent border-b border-white/20 py-4 text-silk focus:outline-none focus:border-gold transition-colors peer placeholder-transparent rounded-none"
      placeholder={label}
    />
    <label
      htmlFor={id}
      className="absolute left-0 top-4 text-concrete text-sm uppercase tracking-widest transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-gold peer-placeholder-shown:top-4 peer-placeholder-shown:text-sm cursor-text"
    >
      {label}
    </label>
  </div>
);

export default ContactSection;
