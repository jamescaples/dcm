export default function Services() {
  const services = [
    "Technical SEO & Site Hygiene",
    "Local SEO Automation",
    "Paid Search & Performance Media",
    "Analytics Dashboards + Reporting"
  ]

  return (
    <section className="py-20 px-6 bg-gray-900">
      <h2 className="text-3xl font-bold text-center">Services</h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
        {services.map((service) => (
          <div
            key={service}
            className="p-6 rounded-2xl bg-gray-800 shadow-md"
          >
            {service}
          </div>
        ))}
      </div>
    </section>
  )
}

