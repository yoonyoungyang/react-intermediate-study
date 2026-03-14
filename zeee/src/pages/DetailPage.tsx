import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import DetailTabs from '../components/detail/DetailTabs'

export default function DetailPage() {
  const { topic } = useParams()
    const [activeTab, setActiveTab] = useState('demo')


  const titleMap: Record<string, string> = {
    srp: 'SRP (Single Responsibility Principle)',
    container: 'Container Pattern',
    compound: 'Compound Component',
  }

    const title = titleMap[topic ?? ""] ?? "Unknown Topic"

  return (
    <main>
        <Link to="/">← 홈으로</Link>
      <h1>{title}</h1>
      <DetailTabs activeTab={activeTab} onTabChange={setActiveTab} />

      <p>현재 탭: {activeTab}</p>    </main>
  )
}