import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import FeatureCard from "../common/FeatureCard";
import { whyChooseUs } from "../../data/whyChooseUs";

function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <Container>
        <SectionTitle
          title="Why Choose SmartDoc?"
          subtitle="We provide fast, secure, and professional document services you can trust."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((feature) => (
            <FeatureCard
              key={feature.id}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhyChooseUs;