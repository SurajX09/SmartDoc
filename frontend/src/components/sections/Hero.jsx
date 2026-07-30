import { motion } from "framer-motion";
import { ArrowRight, FileText, ShieldCheck, Clock3 } from "lucide-react";

import Container from "../common/Container";
import Button from "../common/Button";

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[calc(100vh-80px)] bg-gradient-to-br from-slate-50 via-white to-blue-100 flex items-center py-16 lg:py-0"
    >
      {/* Background Blur */}
      <div className="absolute top-20 -left-32 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-cyan-200 rounded-full blur-3xl opacity-30"></div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium">
              <ShieldCheck size={18} />
              Trusted Document Services
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight text-slate-900">
              Fast &
              <span className="text-blue-600"> Reliable </span>
              Document Solutions
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-8">
              SmartDoc helps individuals and businesses complete document
              services quickly, securely and professionally.
            </p>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-10">
              <Button className="flex items-center justify-center gap-2">
                Get Started
                <ArrowRight size={18} />
              </Button>

              <Button variant="secondary">
  Learn More
</Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12">
              <div>
                <h3 className="text-3xl font-bold text-blue-600">500+</h3>
                <p className="text-slate-500">Happy Clients</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">1000+</h3>
                <p className="text-slate-500">Documents</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-blue-600">99%</h3>
                <p className="text-slate-500">Success</p>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center mt-10 lg:mt-0"
          >
            <div className="w-72 h-72 sm:w-80 sm:h-80 lg:w-[430px] lg:h-[430px] rounded-full bg-blue-100 flex items-center justify-center">
              <FileText size={120} className="text-blue-600" />

              {/* Floating Stats */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-4 sm:px-8 py-4 sm:py-5 flex gap-4 sm:gap-8 w-[90%] sm:w-auto justify-center">
                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-600">
                    500+
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">Clients</p>
                </div>

                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-600">
                    1000+
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">
                    Documents
                  </p>
                </div>

                <div className="text-center">
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-600">
                    99%
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500">Success</p>
                </div>
              </div>
            </div>

            {/* Floating Cards (Desktop Only) */}
            <div className="hidden md:flex absolute top-10 left-0 bg-white shadow-xl rounded-xl p-4 items-center gap-3">
              <Clock3 className="text-blue-600" />

              <div>
                <h4 className="font-semibold">Fast Processing</h4>
                <p className="text-sm text-gray-500">Save your time</p>
              </div>
            </div>

            <div className="hidden md:flex absolute bottom-10 right-0 bg-white shadow-xl rounded-xl p-4 items-center gap-3">
              <ShieldCheck className="text-green-600" />

              <div>
                <h4 className="font-semibold">Secure Service</h4>
                <p className="text-sm text-gray-500">Safe & Trusted</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;