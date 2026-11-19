// Content for the home page preview. Each entry drives the video, the select
// option, and the details panel on the right.
const products = {
  apps: {
    name: 'Exhibitera Apps',
    tagline: 'Create touch-based digital interactives',
    items: {
      image_compare: {
        icon: 'splitscreen',
        video: 'image_compare.mp4',
        name: 'Image Compare',
        description: 'Create before/after image sliders from pairs of images.',
        features: [
          'Let visitors drag a slider to compare two images',
          'Build a collection of image pairs for visitors to browse',
          'Adjust the appearance to match your exhibition'
        ]
      },
      infostation: {
        icon: 'tablet',
        video: 'infostation.mp4',
        name: 'InfoStation',
        description: 'Create touchscreen interactives that enable visitors to explore text, view images, and watch videos.',
        features: [
          'Combine text, images, and video into explorable tabs',
          'Provide content in one, two, or many languages',
          'Includes built-in text size scaling'
        ]
      },
      media_browser: {
        icon: 'squircle-grid',
        video: 'media_browser.mp4',
        name: 'Media Browser',
        description: 'Create collections of videos and images that visitors can explore.',
        features: [
          'Present a browsable grid of images and videos',
          'Add captions and credits for each item',
          'Media is automatically optimized for performance'
        ]
      },
      media_player: {
        icon: 'tv',
        video: 'media_player.mp4',
        name: 'Media Player',
        description: 'Simple yet powerful digital signage. Create playlists of images, videos, audio, and 3D models.',
        features: [
          'Build playlists of images, videos, audio, and 3D models',
          'Supports captions for digital signage',
          'Change content remotely or on a schedule from Hub'
        ]
      },
      survey_kiosk: {
        icon: 'clipboard',
        video: 'survey_kiosk.mp4',
        name: 'Survey Kiosk',
        description: 'Create surveys for visitors with multiple language options.',
        features: [
          'Ask visitors multi-question surveys on a touchscreen',
          'Offer surveys in multiple languages',
          'Responses are collected automatically'
        ]
      },
      timelapse_viewer: {
        icon: 'imageStack',
        video: 'timelapse_viewer.mp4',
        name: 'Timelapse Viewer',
        description: 'Scroll through sequences of images using one of several control schemes.',
        features: [
          'Turn a folder of images into a scrubbable timelapse',
          'Choose from several control schemes',
          'Adjust the appearance to match your exhibition'
        ]
      },
      timeline_explorer: {
        icon: 'timeline-explorer',
        video: 'timeline_explorer.mp4',
        name: 'Timeline Explorer',
        description: 'Create interactive touchscreen timelines from a spreadsheet.',
        features: [
          'Build a timeline directly from a spreadsheet',
          'Add images to each event',
          'Provide content in one, two, or many languages'
        ]
      },
      voting_kiosk: {
        icon: 'rating',
        video: 'voting_kiosk.mp4',
        name: 'Voting Kiosk',
        description: 'Collect survey data with this simple, one-question kiosk. Rotate questions over time to collect more feedback.',
        features: [
          'Simple, one-tap voting for touchscreens',
          'Enter custom questions and buttons',
          'Change the question remotely at the click of a button'
        ]
      },
      word_cloud: {
        icon: 'word-cloud',
        video: 'word_cloud.mp4',
        name: 'Word Cloud',
        description: 'Create and display interactive word clouds that visitors can add to throughout the day.',
        features: [
          'Visitors submit words from a touchscreen kiosk',
          'Display the growing cloud on a separate screen',
          'Adjust the appearance to match your exhibition'
        ]
      }
    }
  },
  hub: {
    name: 'Exhibitera Hub',
    tagline: 'Manage your gallery',
    items: {
      components: {
        icon: 'collection',
        video: 'components.mp4',
        name: 'Manage exhibits',
        description: 'Get real-time status updates, change exhibit content, control projectors and lighting, and more.',
        features: [
          'Quickly see if a component is offline',
          'Be alerted to projector issues as soon as they occur',
          'Wake, sleep, or restart individual components'
        ]
      },
      schedule: {
        icon: 'calendar3',
        video: 'schedule.mp4',
        name: 'Schedule actions',
        description: 'Power on/off exhibit PCs and projectors, change digital signage, control lighting, and more with one-off or recurring schedules.',
        features: [
          'Wake and sleep PCs, displays, and projectors',
          'Change digital signage and other exhibit elements',
          'Manage recurring or one-off schedules'
        ]
      },
      maintenance: {
        icon: 'tools',
        video: 'maintenance.mp4',
        name: 'Track maintenance',
        description: 'Log maintenance issues and track the ongoing status of your exhibits.',
        features: [
          'Sync maintenance notes for each component',
          'Assign tasks to technicians',
          'Include components that are not part of Exhibitera'
        ]
      },
      evaluate: {
        icon: 'todo',
        video: 'evaluate.mp4',
        name: 'Aid evaluators',
        description: 'Create custom interfaces for your evaluators and collect automatic exhibit analytics.',
        features: [
          'Build custom interfaces to aid evaluators and surveys',
          'Supports counters, sliders, timers, free-response, and more',
          'Data syncs automatically to Hub'
        ]
      },
      users: {
        icon: 'user',
        video: 'users.mp4',
        name: 'Manage users',
        description: 'Control who in your organization can access what, putting power in the hands of staff while minimizing risk.',
        features: [
          'Create accounts for staff across your organization',
          'Grant permissions for exactly what each person needs'
        ]
      }
    }
  }
}

const preview = document.getElementById('preview')
const featureSelect = document.getElementById('featureSelect')
const modeInputs = document.querySelectorAll('input[name="previewMode"]')
const details = {
  product: document.getElementById('detailsProduct'),
  tagline: document.getElementById('detailsTagline'),
  icon: document.getElementById('detailsIcon'),
  name: document.getElementById('detailsName'),
  description: document.getElementById('detailsDescription'),
  features: document.getElementById('detailsFeatures')
}

let currentMode = null

function populateSelect (mode) {
  featureSelect.innerHTML = ''
  for (const [key, item] of Object.entries(products[mode].items)) {
    featureSelect.appendChild(new Option(item.name, key))
  }
  currentMode = mode
}

function render (mode, key, updateHash = true) {
  const product = products[mode]
  if (product == null) return
  if (!(key in product.items)) key = Object.keys(product.items)[0]
  const item = product.items[key]

  if (currentMode !== mode) populateSelect(mode)
  featureSelect.value = key
  for (const input of modeInputs) input.checked = (input.value === mode)

  const src = 'videos/' + item.video
  if (preview.getAttribute('src') !== src) {
    preview.src = src
    preview.play().catch(() => {})
  }

  details.product.textContent = product.name
  details.tagline.textContent = product.tagline
  details.icon.setAttribute('xlink:href', '#' + item.icon)
  details.name.textContent = item.name
  details.description.textContent = item.description
  details.features.innerHTML = ''
  for (const feature of item.features) {
    const li = document.createElement('li')
    li.textContent = feature
    details.features.appendChild(li)
  }

  // Keep the URL shareable, e.g. index.html#hub/schedule
  const hash = '#' + mode + '/' + key
  if (updateHash && window.location.hash !== hash) history.replaceState(null, '', hash)
}

// Only respond to preview hashes so in-page anchors (#createPane, etc.) still work
function renderFromHash () {
  const [mode, key] = window.location.hash.slice(1).split('/')
  if (mode in products) render(mode, key, false)
}

for (const input of modeInputs) {
  input.addEventListener('change', () => {
    if (input.checked) render(input.value)
  })
}
featureSelect.addEventListener('change', () => render(currentMode, featureSelect.value))
window.addEventListener('hashchange', renderFromHash)
render('apps', null, false)
renderFromHash()

// Set color mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.querySelector('html').setAttribute('data-bs-theme', 'dark')
} else {
  document.querySelector('html').setAttribute('data-bs-theme', 'light')
}

// Activate tooltips
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
