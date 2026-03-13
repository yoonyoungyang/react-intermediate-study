

export const HowToContainer = [
    "데이터 로직은 Container에서 전담하고, UI는 Presentational 컴포넌트에서 담당하여 각각의 역할을 분리시킵니다.",
    "재사용 가능한 로직(유틸 함수, 훅 등)은 별도의 파일로 분리합니다.",
    "수정 이유가 달라지면(디자인 변경 vs 로직 변경) 파일도 서로 다르게 유지합니다.",
]

export const ContainerExampleText = 
"Todo 생성 및 삭제 관련 로직은 TodoContainer.tsx 컴포넌트에서, UI는 TodoSection 컴포넌트에서 담당합니다."
