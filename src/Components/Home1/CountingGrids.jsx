'use client'

import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import { Award, Users, Grid, Leaf } from 'lucide-react'

export default function CountingGrids() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3, // 0 to 1, how much of the element should be visible
  })

  return (
    <>
      {/* Stats Section */}
      <div ref={ref} className="bg-white rounded-xl shadow-lg mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-emerald-100">
          <div className="p-8 text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-emerald-700" />
            </div>
            <h3 className="text-3xl font-bold text-emerald-900">
              {inView && <CountUp end={13} duration={2} />} <span className="text-emerald-500">+</span>
            </h3>
            <p className="text-emerald-700 font-medium">Years Experience</p>
          </div>

          <div className="p-8 text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Grid className="h-8 w-8 text-emerald-700" />
            </div>
            <h3 className="text-3xl font-bold text-emerald-900">
              {inView && <CountUp end={900} duration={2.5} separator="," />} <span className="text-emerald-500">+</span>
            </h3>
            <p className="text-emerald-700 font-medium">Products</p>
          </div>

          <div className="p-8 text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-emerald-700" />
            </div>
            <h3 className="text-3xl font-bold text-emerald-900">
              {inView && <CountUp end={600} duration={2.5} separator="," />} <span className="text-emerald-500">+</span>
            </h3>
            <p className="text-emerald-700 font-medium">Satisfied Clients</p>
          </div>

          <div className="p-8 text-center">
            <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Leaf className="h-8 w-8 text-emerald-700" />
            </div>
            <h3 className="text-3xl font-bold text-emerald-900">
              {inView && <CountUp end={124} duration={2} />} <span className="text-emerald-500">+</span>
            </h3>
            <p className="text-emerald-700 font-medium">Local Team Members</p>
          </div>
        </div>
      </div>
    </>
  )
}
