import { useEffect } from 'react'

export default function JsonLd({ data, id }: { data: object; id: string }) {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = `jsonld-${id}`
    script.text = JSON.stringify(data)
    document.head.appendChild(script)
    return () => {
      document.getElementById(`jsonld-${id}`)?.remove()
    }
  }, [data, id])
  return null
}
