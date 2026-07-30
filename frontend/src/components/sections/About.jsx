import Container from "../common/Container";
import SectionTitle from "../common/SectionTitle";
import { about } from "../../data/about";

function About() {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-slate-50">
      <Container>
        <SectionTitle
          title={about.title}
          subtitle={about.subtitle}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left Side */}
          <div className="flex justify-center">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-3xl bg-blue-100 flex items-center justify-center text-6xl sm:text-7xl lg:text-8xl">
              {about.image}
            </div>
          </div>

          {/* Right Side */}
          <div className="text-center lg:text-left">
            <p className="text-base sm:text-lg text-gray-600 leading-7 sm:leading-8">
              {about.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mt-8 md:mt-10">
              {about.stats.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md p-5 sm:p-6 text-center"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-blue-600">
                    {item.value}
                  </h3>

                  <p className="mt-2 text-sm sm:text-base text-gray-500">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;