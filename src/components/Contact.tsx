import React, { useEffect, useState } from "react";
import { Send } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { IconBrandGithub } from "@tabler/icons-react";
import { useLanguage } from "@/context/LanguageContext";
import { useForm, ValidationError } from "@formspree/react";

const contactMethods = [
  {
    icon: IconBrandGithub,
    label: "GitHub",
    value: "github.com/DougRib",
    href: "https://github.com/DougRib",
    bg: "bg-gray-700",
    iconColor: "text-white",
    hoverColor: "hover:text-gray-400",
  },
];

const DeveloperStats = () => {
  const { t } = useLanguage();
  return (
    <Card className="glowing-card bg-gray-900/70 border-gray-800 rounded-xl transition-all duration-300 overflow-hidden h-full flex flex-col justify-center">
      <CardHeader>
        <CardTitle className="text-3xl font-bold text-white mb-2">
          {t("contact.statsTitle")}
        </CardTitle>
        <p className="text-gray-400 text-sm">{t("contact.statsSubtitle")}</p>
      </CardHeader>
      <CardContent>
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg p-4 border border-blue-500/30">
            <div className="text-2xl font-bold text-blue-400 mb-1">2+</div>
            <div className="text-xs text-gray-300">
              {t("contact.statsLabels.projects")}
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg p-4 border border-green-500/30">
            <div className="text-2xl font-bold text-green-400 mb-1">6</div>
            <div className="text-xs text-gray-300">
              {t("contact.statsLabels.technologies")}
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-4 border border-purple-500/30">
            <div className="text-2xl font-bold text-purple-400 mb-1">2</div>
            <div className="text-xs text-gray-300">
              {t("contact.statsLabels.certifications")}
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg p-4 border border-orange-500/30">
            <div className="text-2xl font-bold text-orange-400 mb-1">1+</div>
            <div className="text-xs text-gray-300">
              {t("contact.statsLabels.years")}
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mb-6 ">
          <h4 className="text-lg font-semibold text-white mb-4 text-center">
            {t("contact.connectTitle")}
          </h4>
          <div className="flex justify-center w-full">
            <div
              id="SocailIcons"
              className="relative flex flex-wrap justify-center gap-3 max-w-full px-4"
            >
              {/* Instagram */}
              <a
                href="https://instagram.com/odev.douglas"
                target="_blank"
                rel="noopener noreferrer"
                className="icons instaIcon group"
              >
                <span className="iconName">Instagram</span>
                <div className="icon insta">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/douglasribeiro21"
                target="_blank"
                rel="noopener noreferrer"
                className="icons linkedin group"
              >
                <span className="iconName">LinkedIn</span>
                <div className="icon link">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </div>
              </a>

              {/* YouTube
                  <a 
                  href="https://www.youtube.com/@kalpsenghani8581" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="icons youtube group"
                >
                  <span className="iconName">YouTube</span>
                  <div className="icon tube">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                </a>
            */}

              <a
                href="https://wa.me/5511984793631?text=Olá%20Douglas,%20gostaria%20de%20falar%20com%20você!"
                target="_blank"
                rel="noopener noreferrer"
                className="icons whatsapp group"
              >
                <span className="iconName">WhatsApp</span>
                <div className="icon whats group">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Community code Platforms */}
        <div className="border-t border-gray-700 pt-4">
          <h4 className="text-sm font-semibold text-gray-300 mb-3">
            {t("contact.platformsTitle")}
          </h4>
          <div className="flex gap-3">
            {contactMethods.map((platform) => (
              <a
                key={platform.label}
                href={platform.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 flex items-center justify-center rounded-full bg-transparent text-2xl transition-all duration-300 hover:bg-white/10 hover:shadow-[0_0_12px_3px_rgba(36,160,255,0.2)] hover:scale-105  ${platform.hoverColor}`}
                aria-label={platform.label}
                title={platform.label}
              >
                <platform.icon />
              </a>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const ContactForm = () => {
  const { t } = useLanguage();
  const [state, handleSubmit] = useForm("xdadqvdn");
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    collaborationType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (state.succeeded) {
      setShowSuccess(true);
      
      // Limpa os campos do formulário manualmente se desejar
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        collaborationType: "",
        message: "",
      });

      // Esconde a mensagem após 5 segundos (5000ms)
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 4000);

      return () => clearTimeout(timer); // Limpa o timer se o componente desmontar
    }
  }, [state.succeeded]);


  return (
    <div className="form-container">
      <h2 className="text-2xl font-bold text-white mb-4">
        {t("contact.formTitle")}
      </h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="flex gap-4">
          <div className="form-group flex-1">
            <label htmlFor="firstName">{t("contact.labels.firstName")}</label>
            <input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder={t("contact.placeholders.firstName")}
              required
            />
          </div>

          <div className="form-group flex-1">
            <label htmlFor="lastName">{t("contact.labels.lastName")}</label>
            <input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder={t("contact.placeholders.lastName")}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">{t("contact.labels.email")}</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("contact.placeholders.email")}
            required
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="form-group">
          <label htmlFor="collaborationType">
            {t("contact.labels.collaborationType")}
          </label>
          <div className="flex gap-3 mt-1 flex-wrap">
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  collaborationType: "collaboration",
                }))
              }
              className={`flex-1 py-3 px-4 rounded-lg border transition-all duration-300 ${
                formData.collaborationType === "collaboration"
                  ? "bg-purple-600 border-purple-500 text-white"
                  : "bg-transparent border-gray-600 text-gray-300 hover:border-purple-500 hover:text-white"
              }`}
            >
              {t("contact.collaboration.collaboration")}
            </button>
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  collaborationType: "Freelance",
                }))
              }
              className={`flex-1 py-3 px-4 rounded-lg border transition-all duration-300 ${
                formData.collaborationType === "Freelance"
                  ? "bg-green-600 border-green-500 text-white"
                  : "bg-transparent border-gray-600 text-gray-300 hover:border-green-500 hover:text-white"
              }`}
            >
              {t("contact.collaboration.freelance")}
            </button>
            <button
              type="button"
              onClick={() =>
                setFormData((prev) => ({
                  ...prev,
                  collaborationType: "project",
                }))
              }
              className={`flex-1 py-3 px-4 rounded-lg border transition-all duration-300 ${
                formData.collaborationType === "project"
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "bg-transparent border-gray-600 text-gray-200 hover:border-blue-500 hover:text-white"
              }`}
            >
              {t("contact.collaboration.project")}
            </button>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">{t("contact.labels.message")}</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("contact.placeholders.message")}
            required
          />
        </div>

        {showSuccess && (
          <div className="p-4 rounded-lg bg-green-500/40 text-green-300 animate-fade-in ">
            {t("contact.success")}
          </div>
        )}

        <button
          type="submit"
          disabled={state.submitting}
          className="form-submit-btn"
        >
          {state.submitting ? (
            <>
              {" "}
              {t("contact.sending")}{" "}
              <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />{" "}
            </>
          ) : (
            <>
              {" "}
              {t("contact.submit")} <Send size={16} />{" "}
            </>
          )}
        </button>
         {state.errors && <p className="text-red-500">{t("contact.errorEmail")}</p>}
      </form>
    </div>
  );
};

const Contact = () => {
  const { t } = useLanguage();
  return (
    <section id="contact" className="section-container">
      <div className="text-center mb-12">
        <h2 className="section-title">{t("contact.sectionTitle")}</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left: Developer Stats, Contact Methods, Coding Platforms */}
        <DeveloperStats />
        {/* Right: Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
