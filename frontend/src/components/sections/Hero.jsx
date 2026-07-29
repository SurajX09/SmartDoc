import Container from "../common/Container";
import Button from "../common/Button";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh-80px)] flex items-center"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}

          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-600 font-medium">
              Professional Document Services
            </span>

            <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              Fast & Reliable
              <span className="text-blue-600"> Document </span>
              Solutions
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-8">
              SmartDoc helps individuals and businesses with professional
              document services, making the entire process simple, secure,
              and hassle-free.
            </p>

            <div className="flex gap-4 mt-10">
              <Button>Get Started</Button>

              <Button
                className="bg-white border border-gray-300 text-gray-900 hover:bg-gray-100"
              >
                Learn More
              </Button>
            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <div className="w-[420px] h-[420px] rounded-full bg-blue-100 flex items-center justify-center">

              <div className="text-8xl">
                📄
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;