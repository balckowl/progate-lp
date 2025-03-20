"use client"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { usePathname, useRouter } from "next/navigation"

type Props = {
  lang: string;
}

export function LanguageToggle({ lang }: Props) {

  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = (newLang: string) => {
    let newPath = pathname

    if (newLang === "en") {
      if (!pathname.startsWith("/en")) {
        newPath = `/en${pathname.replace(/^\/ja/, "")}`
      }
    } else {
      newPath = pathname.replace(/^\/en/, "")

      newPath = newPath.replace(/^\/ja/, "") || "/"
    }

    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Globe className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => switchLanguage("en")}>English {lang === "en" && "✓"}</DropdownMenuItem>
        <DropdownMenuItem onClick={() => switchLanguage("ja")}>日本語 {lang === "ja" && "✓"}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
