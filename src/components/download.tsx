"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function DownloadButton() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)

    try {
      const response = await fetch('/1.png')
      if (!response.ok) throw new Error('Download failed')

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = '1.png'
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)

    } catch (error) {

    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <Button
      size="lg"
      onClick={handleDownload}
      disabled={isDownloading}
    >
      <Download className="mr-2 h-5 w-5" />
      Mac用にダウンロード
    </Button>
  )
}