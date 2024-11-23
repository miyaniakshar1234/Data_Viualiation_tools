import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  PieChart, 
  LineChart, 
  TrendingUp, 
  Shield, 
  Zap,
  ArrowRight
} from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

export default function LandingPage({ onGetStarted }: LandingPageProps) {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Transform Your Data into
              <span className="text-indigo-600"> Actionable Insights</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Powerful data visualization tools that help you make better decisions. 
              Turn complex data into clear, actionable insights with our intuitive platform.
            </p>
            <button
              onClick={onGetStarted}
              className="btn btn-primary text-lg px-8 py-3 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all"
            >
              Get Started Now
              <ArrowRight className="inline-block ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Powerful Features for Data Analysis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <BarChart3 className="h-8 w-8 text-indigo-600" />,
                title: "Interactive Charts",
                description: "Create stunning visualizations with our interactive charting tools"
              },
              {
                icon: <Shield className="h-8 w-8 text-indigo-600" />,
                title: "Secure Analytics",
                description: "Enterprise-grade security for your sensitive data"
              },
              {
                icon: <Zap className="h-8 w-8 text-indigo-600" />,
                title: "Real-time Updates",
                description: "Get instant insights with real-time data processing"
              },
              {
                icon: <PieChart className="h-8 w-8 text-indigo-600" />,
                title: "Custom Reports",
                description: "Generate detailed reports tailored to your needs"
              },
              {
                icon: <LineChart className="h-8 w-8 text-indigo-600" />,
                title: "Trend Analysis",
                description: "Identify patterns and predict future trends"
              },
              {
                icon: <TrendingUp className="h-8 w-8 text-indigo-600" />,
                title: "Performance Metrics",
                description: "Track KPIs and measure business performance"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Ready to Transform Your Data?
          </h2>
          <button
            onClick={onGetStarted}
            className="bg-white text-indigo-600 btn px-8 py-3 text-lg font-semibold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Start Your Journey
          </button>
        </div>
      </section>
    </div>
  );
}