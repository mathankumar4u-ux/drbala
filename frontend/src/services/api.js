const API_BASE = '/api'

export async function submitContactForm(data) {
  const response = await fetch(`${API_BASE}/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.errors?.join('. ') || error.error || 'Failed to submit form')
  }

  return response.json()
}

export async function submitReferralForm(data) {
  const response = await fetch(`${API_BASE}/referral`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.errors?.join('. ') || error.error || 'Failed to submit referral')
  }

  return response.json()
}

export async function checkApiHealth() {
  const response = await fetch(`${API_BASE}/health`)
  return response.json()
}

export default {
  submitContactForm,
  submitReferralForm,
  checkApiHealth
}
