import footerImg from '../assets/images/footer-img1.png'
import growwellLogo from '../assets/icons/GrowWell.svg'

function Footer() {
  const year = new Date().getFullYear()
  const linkGroups = [
    [
      { label: 'About', href: '#' },
      { label: 'Services', href: '#' },
      { label: 'Therapists', href: '#' },
      { label: 'Resources', href: '#' },
      { label: 'Contact', href: '#' }
    ],
    [
      { label: 'Instagram', href: '#' },
      { label: 'Facebook', href: '#' },
      { label: 'YouTube', href: '#' },
      { label: 'LinkedIn', href: '#' }
    ],
    [
      { label: 'Terms Of Use', href: '#' },
      { label: 'Privacy Policy', href: '#' }
    ]
  ]
  const heroLines = ['Find', 'Support,', 'Guidance,', 'and', 'Balance.']
  const ctaLabel = 'Find Support Now'
  return (
    <footer className="py-12 md:py-16">
      <div className="max-w-[90vw] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="bg-white rounded-[28px] md:rounded-[36px] p-8 md:p-10 shadow-[0px_2px_44px_0px_#0000001A] lg:col-span-3">
            <img src={growwellLogo} alt="GrowWell" className="h-7 w-auto mb-8" />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-[#164B49]">
              {linkGroups.map((group, gi) => (
                <div key={gi} className="space-y-5">
                  {group.map((item, ii) => (
                    <a key={`${gi}-${ii}`} href={item.href} className="block hover:opacity-70 text-normal text-lg">{item.label}</a>
                  ))}
                </div>
              ))}
            </div>
            <div className="text-[#8A8A8A] text-sm mt-10">© {year} GrowWell. All Rights Reserved.</div>
          </div>

          <div className="relative bg-[#4A2D1F] text-white rounded-[28px] md:rounded-[36px] p-8 md:p-10 overflow-hidden min-h-[260px] flex flex-col lg:col-span-2">
            <h3 className="text-3xl md:text-[44px] font-bold leading-tight max-w-md">
              {heroLines.map((line, i) => (
                <span key={i} className="block">{line}</span>
              ))}
            </h3>
            <div className="mt-8">
              <button className="w-full md:w-auto bg-white text-black rounded-full px-6 md:px-48 py-3 md:py-4 text-base md:text-xl font-semibold hover:opacity-90">{ctaLabel}</button>
            </div>
            <img src={footerImg} alt="" className="pointer-events-none select-none absolute -right-2 top-2 w-40 md:w-56 lg:w-72" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer


