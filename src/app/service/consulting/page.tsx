import ServiceDetail from '@/components/ServiceDetail'

export default function ConsultingService() {
  return (
    <>
      <ServiceDetail 
        title="Creative Consulting and Development"
        description="We provide strategic creative consulting to help you make informed decisions about your brand and marketing efforts. Our expertise guides you through complex creative challenges."
        features={[
          "Creative Strategy",
          "Brand Consulting",
          "Design Systems",
          "Creative Direction"
        ]}
      />
    </>
  )
}
