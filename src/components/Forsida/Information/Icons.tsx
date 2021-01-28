const ICON_SIZE = '30'

const IconClock: React.FC<{}> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-70"
    width={ICON_SIZE}
    height={ICON_SIZE}
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#2c3e50"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15 15" />
  </svg>
)

const IconPhone: React.FC<{}> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-70"
    width={ICON_SIZE}
    height={ICON_SIZE}
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#2c3e50"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
  </svg>
)

const IconCreditCard: React.FC<{}> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-70"
    width={ICON_SIZE}
    height={ICON_SIZE}
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#2c3e50"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <line x1="7" y1="15" x2="7.01" y2="15" />
    <line x1="11" y1="15" x2="13" y2="15" />
  </svg>
)

const IconInfoCircle: React.FC<{}> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-70"
    width={ICON_SIZE}
    height={ICON_SIZE}
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#2c3e50"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
    <polyline points="11 12 12 12 12 16 13 16" />
  </svg>
)

const IconLocation: React.FC<{}> = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-70"
    width={ICON_SIZE}
    height={ICON_SIZE}
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#2c3e50"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <circle cx="12" cy="11" r="3" />
    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
  </svg>
)

export { IconClock, IconCreditCard, IconInfoCircle, IconPhone, IconLocation }
