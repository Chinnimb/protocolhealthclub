import { useState } from 'react'
import Reveal from '../Reveal'
import LabPanelCard from './LabPanelCard'
import { performancePanel, pinnaclePanel } from './labPanelData'
import userMale from '../../assets/figma/getstarted/toggle-user-male.svg'
import userFemale from '../../assets/figma/getstarted/toggle-user-female.svg'

export default function ChooseLabPanel() {
  const [sex, setSex] = useState('male')
  const [selectedPanel, setSelectedPanel] = useState(null)

  return (
    <section id="choose-lab-panel" className="bg-cream px-6 py-16 md:px-[80px] md:py-20">
      <div className="mx-auto flex max-w-[1536px] flex-col gap-12">
        <Reveal className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <h2 className="text-4xl font-extrabold tracking-[-1px] text-[#1a1a1a] md:text-[56px]">
            <span className="text-gradient-orange font-serif font-medium">Choose</span> your lab panel
          </h2>
          <p className="max-w-[500px] text-lg leading-relaxed text-[#6e6e6e]">
            We test markers across muscle health, longevity, metabolism, nutrient levels, and gut health.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex justify-center">
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setSex('male')}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-colors ${
                sex === 'male' ? 'bg-orange-2 text-white' : 'border border-[#e5e1db] text-[#6e6e6e]'
              }`}
            >
              <img src={userMale} alt="" className="h-3.5 w-3.5" style={{ filter: sex === 'male' ? 'invert(1)' : 'none' }} />
              Male
            </button>
            <button
              type="button"
              onClick={() => setSex('female')}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                sex === 'female' ? 'bg-orange-2 text-white' : 'border border-[#e5e1db] text-[#6e6e6e]'
              }`}
            >
              <img src={userFemale} alt="" className="h-3.5 w-3.5" style={{ filter: sex === 'female' ? 'invert(1)' : 'none' }} />
              Female
            </button>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          <LabPanelCard
            panel={performancePanel}
            size="sm"
            delay={0}
            selected={selectedPanel === 'performance'}
            onSelect={() => setSelectedPanel('performance')}
          />
          <LabPanelCard
            panel={pinnaclePanel}
            size="md"
            delay={0.1}
            selected={selectedPanel === 'pinnacle'}
            onSelect={() => setSelectedPanel('pinnacle')}
          />
        </div>

        <Reveal delay={0.15} className="flex flex-wrap items-center justify-center gap-4 text-center text-[13px] font-medium text-[#233038]">
          <span>Some markers are restricted in NJ and NY</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#f4ac63]" />
          <span>Blood work is not available in Hawaii and Rhode Island</span>
        </Reveal>
      </div>
    </section>
  )
}
