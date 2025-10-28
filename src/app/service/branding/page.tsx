import ServiceDetail from '@/components/ServiceDetail'

export default function BrandingService() {
  return (
    <>
      <ServiceDetail 
        title="Branding and Identity Design"
        description="Create compelling brand identities that resonate with your target audience and differentiate you from competitors."
        features={[
          "Logo Design & Brand Identity",
          "Brand Guidelines & Style Guides", 
          "Visual Identity Systems",
          "Brand Strategy & Positioning"
        ]}
      />
    </>
  )
}
