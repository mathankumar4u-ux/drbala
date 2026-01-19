import { useEffect } from 'react'

function LiveChat() {
  useEffect(() => {
    // Tawk.to Live Chat Widget
    // Replace 'YOUR_PROPERTY_ID' and 'YOUR_WIDGET_ID' with actual values from Tawk.to dashboard
    const propertyId = 'YOUR_PROPERTY_ID'
    const widgetId = 'YOUR_WIDGET_ID'

    // Only load in production or when IDs are configured
    if (propertyId === 'YOUR_PROPERTY_ID') {
      console.log('Tawk.to: Configure property ID to enable live chat')
      return
    }

    // Create Tawk.to script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://embed.tawk.to/${propertyId}/${widgetId}`
    script.charset = 'UTF-8'
    script.setAttribute('crossorigin', '*')

    // Add script to document
    const firstScript = document.getElementsByTagName('script')[0]
    firstScript.parentNode.insertBefore(script, firstScript)

    // Cleanup on unmount
    return () => {
      // Remove Tawk.to elements if needed
      const tawkElements = document.querySelectorAll('[id^="tawk"]')
      tawkElements.forEach(el => el.remove())
    }
  }, [])

  // Component doesn't render anything visible
  // The chat widget is injected by Tawk.to script
  return null
}

export default LiveChat

/*
  SETUP INSTRUCTIONS:

  1. Go to https://www.tawk.to and create a free account

  2. Create a new property for "oralsurgeon.care"

  3. In the Tawk.to dashboard, go to Administration > Channels > Chat Widget

  4. Copy your Property ID and Widget ID from the embed code
     The embed code looks like:
     https://embed.tawk.to/PROPERTY_ID/WIDGET_ID

  5. Replace 'YOUR_PROPERTY_ID' and 'YOUR_WIDGET_ID' in this file

  6. Configure your chat widget settings:
     - Set business hours (Mon-Fri 9am-5pm AEST)
     - Add offline message form
     - Customize colors to match website (#1E5F8A)
     - Add welcome message

  7. Set up triggers for common questions:
     - "How do I book an appointment?"
     - "What are your opening hours?"
     - "Where are you located?"

  ALTERNATIVE CHAT SERVICES:
  - Crisp: https://crisp.chat
  - Intercom: https://intercom.com
  - Zendesk Chat: https://zendesk.com/chat
*/
