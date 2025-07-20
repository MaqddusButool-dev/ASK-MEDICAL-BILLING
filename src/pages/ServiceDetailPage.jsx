import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { servicesData } from '../components/data/services';
import { ArrowRight, CheckCircle, ChevronRight } from 'lucide-react';

const ServiceDetailPage = () => {
  const { slug } = useParams();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return (
    <>
      <Helmet>
        <title>{service.title} - Ask Medical Billing</title>
        <meta name="description" content={service.shortDescription} />
      </Helmet>

      <div className=" py-20 px-6 bg-gradient-to-br from-[#f3f4f6] to-[#e0f7fa] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex items-center space-x-2 text-gray-600"
          >
            <Link to="/" className="hover:text-[#03a9f4] font-medium">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/services" className="hover:text-[#03a9f4] font-medium">
              Services
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-[#03a9f4] font-semibold">{service.title}</span>
          </motion.div>

          {/* Header Section */}
          <section className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="inline-block bg-gradient-to-r from-[#03a9f4] to-[#e91e63] p-5 rounded-3xl mb-6 shadow-xl"
            >
              <service.icon className="h-12 w-12 text-white" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-4"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              {service.shortDescription}
            </motion.p>
          </section>

          {/* Main Content */}
          <section className="grid lg:grid-cols-3 gap-12">
            {/* Left Main Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="lg:col-span-2 space-y-12"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Detailed Overview
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {service.longDescription}
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start text-gray-800 text-lg"
                    >
                      <CheckCircle className="h-6 w-6 text-[#03a9f4] mr-3 mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="space-y-8"
            >
              {/* Benefits Card */}
              <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-[#03a9f4]/30 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Core Benefits
                </h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit, index) => (
                    <li
                      key={index}
                      className="flex items-start text-gray-800 text-lg"
                    >
                      <CheckCircle className="h-5 w-5 text-[#e91e63] mr-3 mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-[#03a9f4] to-[#e91e63] rounded-3xl p-8 text-center shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Ready to Start?
                </h3>
                <p className="text-white/90 mb-6">
                  Let’s discuss how our {service.title} can help your practice.
                </p>

                {/* Custom Button */}
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center w-full bg-white text-[#03a9f4] font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 hover:bg-gray-100 hover:scale-105"
                >
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailPage;
