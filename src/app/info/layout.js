// 每个页面都可以拥有自己的 layout

export const metadata = {
  title: '个人资料',
  description: '个人资料',
}

export default function InfoLayout({ children }) {
  return (
    <div className="info-root">
      {children}
    </div>
  )
}
