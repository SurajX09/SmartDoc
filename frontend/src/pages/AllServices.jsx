import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";
import ServiceCard from "../components/common/ServiceCard";
import { services } from "../data/services";

function AllServices() {
  return (
    <section className="py-20 bg-slate-50 min-h-screen">
      <Container>

        <SectionTitle
          title="All Services"
          subtitle="We provide complete document, business and online services."
        />

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              {...service}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}

export default AllServices;