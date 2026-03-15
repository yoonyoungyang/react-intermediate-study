import { useParams } from 'react-router-dom'
import { useState } from 'react'
import DetailTabs from '../components/detail/DetailTabs'
import DetailHeader from '../components/detail/DetailHeader'
import { titleMap, contentMap, descriptionMap } from '../data/studyData'
import type { TabKey, Topic } from '../data/studyData'

function isTopic(value: string): value is Topic {
  return value === 'srp' || value === 'container' || value === 'compound'
}

export default function DetailPage() {
  const { topic } = useParams()
  const [activeTab, setActiveTab] = useState<TabKey>('demo')

  if (!topic || !isTopic(topic)) {
    return <main className="min-h-screen bg-slate-50">알 수 없는 주제입니다.</main>
  }

  const title = titleMap[topic]
  const description = descriptionMap[topic]
  const content = contentMap[topic][activeTab]

  return (
    <main className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <DetailHeader title={title} description={description} />
        <DetailTabs activeTab={activeTab} onTabChange={setActiveTab} />
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          {content}
        </div>
      </div>
    </main>
  )
}