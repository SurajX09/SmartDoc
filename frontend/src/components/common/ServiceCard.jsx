import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from "lucide-react";

function ServiceCard({
  icon,
  title,
  description,
  features = [],
  featured = false,
  badge = "",
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
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
        featured
          ? "border-blue-300 shadow-lg ring-1 ring-blue-100 hover:-translate-y-1.5 hover:border-blue-400 hover:shadow-2xl"
          : "border-slate-200 shadow-sm hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
      }`}
    >
      {/* Featured Badge */}
      {featured && (
        <div className="absolute right-4 top-4 z-10">
          <div className="flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md">
            <Sparkles size={13} />
            {badge}
          </div>
        </div>
      )}

      {/* Top Accent */}
      <div
        className={`h-1.5 ${
          featured
            ? "bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400"
            : "bg-gradient-to-r from-blue-600 to-cyan-500"
        }`}
      />

      <div className="flex flex-1 flex-col p-5 sm:p-6">

        {/* Icon */}
        <div
          className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl text-3xl transition-all duration-300 group-hover:scale-105 ${
            featured
              ? "bg-gradient-to-br from-blue-100 to-cyan-100 ring-1 ring-blue-200"
              : "bg-blue-50 ring-1 ring-blue-100"
          }`}
        >
          {icon}
        </div>

        {/* Title */}
        <div className="flex items-center gap-2">
          <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
            {title}
          </h3>

          {featured && (
            <span className="h-2 w-2 rounded-full bg-green-500" />
          )}
        </div>

        {/* Description */}
        <p className="mt-2 text-sm leading-6 text-slate-600">
          {description}
        </p>

        {/* Features */}
        <div className="mt-5 flex-1 space-y-2.5">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-2.5 text-sm text-slate-700"
            >
              <CheckCircle2
                size={17}
                className="mt-0.5 shrink-0 text-emerald-500"
              />

              <span>{feature}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-7 flex items-center gap-3">

          {/* Apply Now */}
          <a
            href="#contact"
            className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition ${
              featured
                ? "bg-blue-700 hover:bg-blue-800"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            Apply Now

            <ArrowRight
              size={17}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </a>

          {/* WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500 text-white transition hover:scale-105 hover:bg-green-600"
            title={`Chat about ${title} on WhatsApp`}
            aria-label={`Chat about ${title} on WhatsApp`}
          >
            <MessageCircle size={21} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;