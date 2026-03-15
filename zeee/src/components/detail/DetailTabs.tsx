import type { TabKey } from "../../data/studyData"

interface DetailTabsProps {
  activeTab: TabKey
  onTabChange: (tab: TabKey) => void
}

export default function DetailTabs({
    activeTab,
  onTabChange,
}: DetailTabsProps) {
  const tabs:{key: TabKey; label: string;}[] = [
    { key: 'demo', label:"데모"},
        { key: 'code', label:"코드 비교"},
    { key: 'guide', label:"가이드"},

  ]
  return (
    <div className="mb-6">
    <div className="inline-flex border border-slate-200 p-1 gap-2 bg-white rounded-xl">
      {tabs.map((tab)=> (
<button key={tab.key} onClick={() => onTabChange(tab.key)} className={`rounded-lg px-4 py-2 text-sm font-medium transition ${activeTab === tab.key ? 'bg-blue-700 text-white' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}>{tab.label}</button>
      ))}
    </div>
    </div>
  )
}