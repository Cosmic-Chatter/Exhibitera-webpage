const apps = {
  image_compare: {
    icon: 'splitscreen',
    landscape: 'image_compare.mp4',
    name: 'Image Compare',
    description: "Create before/after image sliders from pairs of images."
  },
  infostation: {
    icon: 'tablet',
    landscape: 'InfoStation.mp4',
    name: 'InfoStation',
    description: "Create touchscreen interactives that enable visitors to explore text, view images, and watch videos."
  },
  media_browser: {
    icon: 'squircle-grid',
    landscape: 'media_browser.mp4',
    name: 'Media Browser',
    description: "Create collections of videos and images that visitors can explore."
  },
  media_player: {
    icon: 'tv',
    landscape: 'media_player.mp4',
    name: 'Media Player',
    description: "Simple yet powerful digital signage. Show an image, play a video, or create playlists of both."
  },
  timelapse_viewer: {
    icon: 'imageStack',
    landscape: 'timelapse_viewer.mp4',
    name: 'Timelapse Viewer',
    description: "Scroll through sequences of images using one of several control schemes."
  },
  timeline_explorer: {
    icon: 'timeline-explorer',
    landscape: 'timeline_explorer.mp4',
    name: 'Timeline Explorer',
    description: "Create interactive touchscreen timelines from a spreadsheet."
  },
  voting_kiosk: {
    icon: 'rating',
    landscape: 'voting_kiosk.mp4',
    name: 'Voting Kiosk',
    description: "Collect survey data with this simple, one-question kiosk. Rotate questions over time to collect more feedback."
  },
  word_cloud: {
    icon: 'word-cloud',
    landscape: 'word_cloud.mp4',
    name: 'Word Cloud',
    description: "Create and display interactive word clouds that visitors can add to throughout the day."
  }
}

const hubTabs = {
  components: {
    icon: 'collection',
    landscape: '',
    name: 'Manage exhibits',
    description: "Get real-time status updates, change exhibit content, control projectors and lighting, and more."
  },
  schedule: {
    icon: 'calendar3',
    landscape: '',
    name: 'Schedule actions',
    description: "Power on/off exhibit PCs and projectors, change digital signage, control lighting, and more with one-off or recurring schedules."
  },
  maintenance: {
    icon: 'tools',
    landscape: '',
    name: 'Track maintenance',
    description: "Log maintenance issues and track the ongoing status of your exhibits."
  },
  evaluate: {
    icon: 'todo',
    landscape: '',
    name: 'Aid evaluators',
    description: "Create custom interfaces for your evaluators and collect automatic exhibit analytics."
  },
}

// Populate the app select
const appSelect = document.getElementById('appSelect')
const appIcon = document.getElementById('appIcon')
const appDescription = document.getElementById('appDescription')
const appPreview = document.getElementById('appPreview')
for (const app of Object.keys(apps)) {
  const appDict = apps[app]
  appSelect.appendChild(new Option(appDict.name, app))
}
appSelect.addEventListener('change', () => {
  const app = appSelect.value
  appPreview.src = 'videos/' + apps[app].landscape
  appDescription.textContent = apps[app].description
  appIcon.setAttribute('xlink:href', '#' + apps[app].icon)
})

// Populate the hub select
const hubSelect = document.getElementById('hubSelect')
const hubIcon = document.getElementById('hubIcon')
const hubDescription = document.getElementById('hubDescription')
const hubPreview = document.getElementById('hubPreview')
for (const tab of Object.keys(hubTabs)) {
  const tabDict = hubTabs[tab]
  hubSelect.appendChild(new Option(tabDict.name, tab))
}
hubSelect.addEventListener('change', () => {
  const tab = hubSelect.value
  hubPreview.src = 'videos/' + hubTabs[tab].landscape
  hubDescription.textContent = hubTabs[tab].description
  hubIcon.setAttribute('xlink:href', '#' + hubTabs[tab].icon)
})

// Set color mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.querySelector('html').setAttribute('data-bs-theme', 'dark')
} else {
  document.querySelector('html').setAttribute('data-bs-theme', 'light')
}

// Activate tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))