import ServiceDetail from '@/components/ServiceDetail'

export default function MarketingService() {
  return (
    <>
      <ServiceDetail 
        title="Advertising and Marketing Campaigns"
        description="We develop creative marketing campaigns that capture attention and drive results. Our integrated approach combines strategy, design, and digital marketing to maximize your reach and impact."
        features={[
          "Digital Marketing Strategy",
          "Social Media Campaigns",
          "Content Marketing",
          "Performance Analytics"
        ]}
      />
    </>
  )
}
