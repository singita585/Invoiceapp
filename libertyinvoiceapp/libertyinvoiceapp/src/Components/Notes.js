import React from 'react'

export default function Notes({notes}) {
  return (
    <>
  {/* Codes for the Notes */}
<section className="mt-10 mb-5">
  <p className="lg:w-1/2 text-justify">{notes}</p>
</section>
    </>
  )
}
