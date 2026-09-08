function el(tag, className, children) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (children != null) {
    (Array.isArray(children) ? children : [children]).forEach((child) => {
      if (child == null) return;
      node.append(child);
    });
  }
  return node;
}

function renderStageRow() {
  const row = document.getElementById('stage-row');
  row.append(el('div'));

  STAGES.forEach((stage, i) => {
    const chip = el('div', 'stage-chip', [
      el('div', 'stage-badge', String(stage.num)),
      el('div', null, [
        el('div', 'stage-label', stage.label),
        el('div', 'stage-title', stage.title),
      ]),
    ]);
    chip.style.borderColor = stage.border;
    chip.style.background = stage.bg;
    chip.querySelector('.stage-badge').style.background = stage.badge;
    chip.querySelector('.stage-label').style.color = stage.badge;

    const cell = el('div', 'stage-cell', chip);
    if (i < STAGES.length - 1) {
      cell.append(el('div', 'stage-arrow', '›'));
    }
    row.append(cell);
  });
}

function renderNoteItem(note) {
  const labelSpan = el('span', note.type === 'good' ? 'note-label--good' : 'note-label--bad', note.label);

  if (note.subs) {
    return el('div', null, [
      el('div', 'note-item', [el('span', 'bullet', '•'), labelSpan]),
      el('div', 'note-subs', note.subs.map((sub) =>
        el('div', 'note-sub', [el('span', 'bullet', '·'), el('span', null, sub)])
      )),
    ]);
  }

  return el('div', 'note-item', [
    el('span', 'bullet', '•'),
    el('span', null, [labelSpan, ' ' + note.text]),
  ]);
}

function renderMetric(metric) {
  const tintClass = metric.tint !== 'default' ? `metric-card--${metric.tint}` : '';
  return el('div', `metric-card ${tintClass}`.trim(), [
    el('span', 'metric-value', metric.pct),
    el('span', 'metric-label', metric.count),
  ]);
}

function renderWeekRow(week, accent) {
  const dateChip = el('span', 'week-date', week.date);
  dateChip.style.background = accent;

  const row = el('div', 'week-row', [
    el('div', 'week-date-cell', dateChip),
    el('div', 'metric-card', [
      el('span', 'metric-value', String(week.signups)),
      el('span', 'metric-label', 'Signups'),
    ]),
    renderMetric(week.otp),
    renderMetric(week.reg),
    renderMetric(week.act),
  ]);

  if (week.notes.length) {
    row.append(el('div', 'week-notes', [
      el('div', 'week-notes-heading', 'What happened:'),
      el('div', 'week-notes-list', week.notes.map(renderNoteItem)),
    ]));
  }

  return row;
}

function renderMonth(month) {
  const section = el('div', 'month-section');

  const line = el('div', 'month-line');
  line.style.bottom = `${month.lineBottom}px`;
  section.append(line);

  const heading = el('div', 'month-heading');
  if (month.tick) {
    const tick = el('div', 'month-tick');
    tick.style.background = month.accent;
    heading.append(tick);
  }
  heading.append(el('span', null, month.name));
  section.append(heading);

  month.weeks.forEach((week) => section.append(renderWeekRow(week, month.accent)));

  return section;
}

function renderMonths() {
  const container = document.getElementById('months');
  MONTHS.forEach((month) => container.append(renderMonth(month)));
}

renderStageRow();
renderMonths();
