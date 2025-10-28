import ServiceDetail from '@/components/ServiceDetail'

export default function WebDevelopmentService() {
  return (
    <>
      <ServiceDetail 
        title="Website Design and Development"
        description="We build responsive, user-friendly websites that deliver exceptional user experiences. From concept to launch, we ensure your website is optimized for performance, SEO, and conversions."
        features={[
          "Responsive Web Design",
          "Custom Web Development",
          "E-commerce Solutions",
          "SEO Optimization"
        ]}
      />
    </>
  )
}
