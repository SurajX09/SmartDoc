import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

function ServiceCard({
  icon,
  title,
  description,
  features = [],
}) {
  const whatsappLink = `https://wa.me/918983557005?text=${encodeURIComponent(
    `Hello SmartDoc,

I need ${title} service.

Please send me:
• Required Documents
• Processing Time
• Charges`
  )}`;

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl">

      {/* Top Border */}
      <div className="h-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400"></div>

      <div className="flex flex-1 flex-col p-6">

        {/* Icon */}
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-cyan-100 text-5xl transition duration-300 group-hover:scale-110 group-hover:rotate-6">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-slate-900">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-slate-600 leading-7">
          {description}
        </p>

        {/* Service Features */}
        <div className="mt-6 space-y-3 flex-1">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-sm text-slate-700"
            >
              <CheckCircle2
                size={18}
                className="text-green-500"
              />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-8 flex items-center justify-between">

          <a
            href="#contact"
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
          >
            Apply Now
            <ArrowRight size={18} />
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-green-500 p-3 text-white transition hover:scale-110 hover:bg-green-600"
            title="Chat on WhatsApp"
          >
            <MessageCircle size={22} />
          </a>

        </div>

      </div>
    </div>
  );
}

export default ServiceCard;