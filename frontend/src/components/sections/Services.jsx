import { useState } from "react";
import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import ServiceCard from "../common/ServiceCard";
import { services } from "../../data/services";

function Services() {
  const [showAll, setShowAll] = useState(false);

  const displayedServices = showAll
    ? services
    : services.slice(0, 8);

  return (
    <section
      id="services"
      className="bg-slate-50 py-16 md:py-20 lg:py-24"
    >
      <Container>
        <SectionTitle
          title="Our Services"
          subtitle="Professional document, business and online services under one roof."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {displayedServices.map((service) => (
            <ServiceCard
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>

        {services.length > 8 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="rounded-xl bg-blue-600 px-8 py-3 text-white transition hover:bg-blue-700"
            >
              {showAll ? "Show Less" : "View All Services"}
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}

export default Services;