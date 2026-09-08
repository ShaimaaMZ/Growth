// Funnel stages shown in the header row.
const STAGES = [
  { num: 1, label: 'STAGE 01', title: 'Signups',            border: 'var(--stage-1-border)', bg: 'var(--stage-1-bg)', badge: 'var(--stage-1-badge)' },
  { num: 2, label: 'STAGE 02', title: 'OTP Verified',        border: 'var(--stage-2-border)', bg: 'var(--stage-2-bg)', badge: 'var(--stage-2-badge)' },
  { num: 3, label: 'STAGE 03', title: 'Reg Completed',       border: 'var(--stage-3-border)', bg: 'var(--stage-3-bg)', badge: 'var(--stage-3-badge)' },
  { num: 4, label: 'STAGE 04', title: 'Activated (<48h)',    border: 'var(--stage-4-border)', bg: 'var(--stage-4-bg)', badge: 'var(--stage-4-badge)' },
];

// Weekly registration & activation funnel data, most recent first within each month.
const MONTHS = [
  {
    name: 'August',
    accent: 'var(--month-august)',
    tick: true,
    lineBottom: 56,
    weeks: [
      {
        date: 'Aug 31',
        signups: 111,
        otp:  { pct: '81.1%', count: '90 OTP', tint: 'good' },
        reg:  { pct: '86.7%', count: '78 Reg', tint: 'default' },
        act:  { pct: '7.7%',  count: '6 Act',  tint: 'warn' },
        notes: [
          { type: 'good', label: '▲ OTP-verified back to normal:', text: 'Resolved after adding additional security measures to handle the attacker case.' },
          { type: 'bad', label: '▼ Decrease in Activation:', text: "Identified that users — especially on mobile — open the invoice creation screen but don't complete an invoice, likely due to the cognitive load of the current experience. We're now working on a better experience to address this." },
        ],
      },
      {
        date: 'Aug 24',
        signups: 268,
        otp:  { pct: '38.4%', count: '103 OTP', tint: 'bad' },
        reg:  { pct: '98.1%', count: '101 Reg', tint: 'good' },
        act:  { pct: '12.9%', count: '13 Act',  tint: 'good' },
        notes: [
          { type: 'good', label: '▲ Increased Post-OTP Completion:', text: 'Fixed a drop-off at the company name step by prefilling it with an editable value.' },
          { type: 'good', label: '▲ Increased Activation:', subs: [
            'Made invoice creation on mobile responsive, after identifying that most signups come from mobile.',
            'Marketing launched a desktop campaign, which positively impacted activation — most users activated during this period were on desktop.',
          ] },
          { type: 'bad', label: '▼ Decrease in OTP-verified:', text: 'Fraudulent/attacker activity affecting OTP verification.' },
        ],
      },
      {
        date: 'Aug 17',
        signups: 436,
        otp:  { pct: '76.4%', count: '333 OTP', tint: 'warn' },
        reg:  { pct: '92.5%', count: '308 Reg', tint: 'good' },
        act:  { pct: '2.3%',  count: '7 Act',   tint: 'good' },
        notes: [
          { type: 'good', label: '▲ Increase Post OTP Completion:', subs: [
            'Redesigned the post-OTP registration flow into a single-question-per-page experience to reduce cognitive load.',
          ] },
          { type: 'good', label: '▲ Increased activation:', subs: [
            'New onboarding (post-registration) Quick Start Journey.',
          ] },
          { type: 'bad', label: '▼ Decrease in OTP-verified:', text: "Some non-UAE customers weren't receiving OTPs because their countries were blocked by our SMS provider, despite being listed as registration options — we've since removed these high-risk/fraud-prone countries from the registration flow." },
        ],
      },
      {
        date: 'Aug 10',
        signups: 405,
        otp:  { pct: '81.0%', count: '328 OTP', tint: 'default' },
        reg:  { pct: '83.5%', count: '274 Reg', tint: 'good' },
        act:  { pct: '1.1%',  count: '3 Act',   tint: 'default' },
        notes: [
          { type: 'good', label: '▲ Increase Post OTP Completion:', text: 'Updated the mobile registration UI for better accessibility, tailored to the majority of our customers who register via mobile.' },
        ],
      },
      {
        date: 'Aug 3',
        signups: 383,
        otp:  { pct: '83.6%', count: '320 OTP', tint: 'default' },
        reg:  { pct: '66.9%', count: '214 Reg', tint: 'default' },
        act:  { pct: '0.9%',  count: '2 Act',   tint: 'default' },
        notes: [],
      },
    ],
  },
  {
    name: 'July',
    accent: 'var(--month-july)',
    tick: false,
    lineBottom: 22,
    weeks: [
      { date: 'Jul 27', signups: 285, otp: { pct: '88.4%', count: '252 OTP', tint: 'default' }, reg: { pct: '75.0%', count: '189 Reg', tint: 'default' }, act: { pct: '1.1%', count: '2 Act', tint: 'default' }, notes: [] },
      { date: 'Jul 20', signups: 235, otp: { pct: '87.7%', count: '206 OTP', tint: 'default' }, reg: { pct: '78.6%', count: '162 Reg', tint: 'default' }, act: { pct: '1.9%', count: '3 Act', tint: 'default' }, notes: [] },
      { date: 'Jul 13', signups: 284, otp: { pct: '81.0%', count: '230 OTP', tint: 'default' }, reg: { pct: '77.8%', count: '179 Reg', tint: 'default' }, act: { pct: '2.8%', count: '5 Act', tint: 'default' }, notes: [] },
      { date: 'Jul 6',  signups: 223, otp: { pct: '78.9%', count: '176 OTP', tint: 'default' }, reg: { pct: '71.0%', count: '125 Reg', tint: 'default' }, act: { pct: '3.2%', count: '4 Act', tint: 'default' }, notes: [] },
    ],
  },
  {
    name: 'June',
    accent: 'var(--month-june)',
    tick: false,
    lineBottom: 22,
    weeks: [
      { date: 'Jun 29', signups: 84,  otp: { pct: '86.9%', count: '73 OTP',  tint: 'default' }, reg: { pct: '58.9%', count: '43 Reg', tint: 'default' }, act: { pct: '2.3%',  count: '1 Act',  tint: 'default' }, notes: [] },
      { date: 'Jun 22', signups: 58,  otp: { pct: '84.5%', count: '49 OTP',  tint: 'default' }, reg: { pct: '63.3%', count: '31 Reg', tint: 'default' }, act: { pct: '3.2%',  count: '1 Act',  tint: 'default' }, notes: [] },
      { date: 'Jun 15', signups: 142, otp: { pct: '85.9%', count: '122 OTP', tint: 'default' }, reg: { pct: '54.1%', count: '66 Reg', tint: 'default' }, act: { pct: '7.6%',  count: '5 Act',  tint: 'default' }, notes: [] },
      { date: 'Jun 8',  signups: 137, otp: { pct: '89.8%', count: '123 OTP', tint: 'default' }, reg: { pct: '70.7%', count: '87 Reg', tint: 'default' }, act: { pct: '12.6%', count: '11 Act', tint: 'default' }, notes: [] },
      { date: 'Jun 1',  signups: 135, otp: { pct: '83.7%', count: '113 OTP', tint: 'default' }, reg: { pct: '69.0%', count: '78 Reg', tint: 'default' }, act: { pct: '7.7%',  count: '6 Act',  tint: 'default' }, notes: [] },
    ],
  },
  {
    name: 'May',
    accent: 'var(--month-may)',
    tick: false,
    lineBottom: 22,
    weeks: [
      { date: 'May 25', signups: 8,   otp: { pct: '50.0%', count: '4 OTP',   tint: 'default' }, reg: { pct: '100.0%', count: '4 Reg',  tint: 'default' }, act: { pct: '0.0%', count: '0 Act', tint: 'default' }, notes: [] },
      { date: 'May 18', signups: 129, otp: { pct: '86.8%', count: '112 OTP', tint: 'default' }, reg: { pct: '65.2%',  count: '73 Reg', tint: 'default' }, act: { pct: '5.5%', count: '4 Act', tint: 'default' }, notes: [] },
      { date: 'May 11', signups: 78,  otp: { pct: '82.1%', count: '64 OTP',  tint: 'default' }, reg: { pct: '82.8%',  count: '53 Reg', tint: 'default' }, act: { pct: '3.8%', count: '2 Act', tint: 'default' }, notes: [] },
      { date: 'May 4',  signups: 88,  otp: { pct: '73.9%', count: '65 OTP',  tint: 'default' }, reg: { pct: '69.2%',  count: '45 Reg', tint: 'default' }, act: { pct: '2.2%', count: '1 Act', tint: 'default' }, notes: [] },
    ],
  },
];
